'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AI_MENTOR_NAME, WELCOME_MESSAGES, AI_SYSTEM_PROMPT } from '@/lib/constants'

// Types
interface Message {
    id: string
    role: 'user' | 'assistant'
    content: string
    timestamp: Date
}

// Icons
const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
    </svg>
)

const MicIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
)

const MicOffIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="2" x2="22" y1="2" y2="22" />
        <path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" />
        <path d="M5 10v2a7 7 0 0 0 12 5" />
        <path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" />
        <path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
        <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
)

const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
    </svg>
)

const FileTextIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" x2="8" y1="13" y2="13" />
        <line x1="16" x2="8" y1="17" y2="17" />
        <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
)

// Typing indicator component
const TypingIndicator = () => (
    <div className="flex gap-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center text-white text-lg">
            🌟
        </div>
        <div className="chat-bubble-ai flex items-center gap-1 py-4">
            <div className="typing-dot" />
            <div className="typing-dot" />
            <div className="typing-dot" />
        </div>
    </div>
)

// Chat bubble component
const ChatBubble = ({ message }: { message: Message }) => {
    const isUser = message.role === 'user'

    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.2 }}
            className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
        >
            {!isUser && (
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center text-white text-lg">
                    🌟
                </div>
            )}
            <div className={isUser ? 'chat-bubble-user' : 'chat-bubble-ai'}>
                {!isUser && (
                    <p className="font-medium text-primary-600 dark:text-primary-400 mb-1 text-sm">
                        {AI_MENTOR_NAME}
                    </p>
                )}
                <p className="whitespace-pre-wrap">{message.content}</p>
                <p className={`text-xs mt-1 ${isUser ? 'text-white/70' : 'text-surface-400'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
            </div>
        </motion.div>
    )
}

// Demo AI responses based on user input
const getDemoResponse = (userMessage: string, messageCount: number): string => {
    const lowerMessage = userMessage.toLowerCase()

    // First message - introduction
    if (messageCount === 1) {
        if (lowerMessage.includes('confus') || lowerMessage.includes('don\'t know') || lowerMessage.includes('lost')) {
            return "I hear you, yaar. That feeling of confusion is so common, and honestly, it's okay to not have all the answers right now. You're already taking a good step by talking about it. 💙\n\nTell me a bit more — what's making you feel this way? Is it about choosing a stream, picking a career, or something else?"
        }
        if (lowerMessage.includes('pressure') || lowerMessage.includes('parent') || lowerMessage.includes('family')) {
            return "That sounds really tough. Dealing with family expectations while figuring out your own path is one of the hardest things. I want you to know — your feelings and dreams matter too. 🤗\n\nLet's talk about YOU for a moment. Forget what everyone else wants — what genuinely interests you?"
        }
        if (lowerMessage.includes('science') || lowerMessage.includes('physics') || lowerMessage.includes('engineering')) {
            return "Ah, the classic science confusion! You're definitely not alone in this. Many students feel stuck because they're good at something but don't enjoy it. And that's an important distinction.\n\nLet me understand better — when you say you don't like physics, is it the subject itself, the way it's taught, or something else?"
        }
        return "Thanks for sharing that with me. I can see you're thinking deeply about your future, which is a really good sign. 💙\n\nTo help you better, I'd love to know — what are the things you actually enjoy doing? It could be anything — a hobby, a subject, or even just how you like spending your free time."
    }

    // Second message - dig deeper
    if (messageCount === 2) {
        if (lowerMessage.includes('bio') || lowerMessage.includes('doctor') || lowerMessage.includes('medical')) {
            return "That's interesting! So medicine or biology-related fields appeal to you. That's a great insight.\n\nBut let me ask you this — is it the idea of helping people that draws you to medicine, or is it the science of how bodies work? Understanding this can open up many paths beyond just MBBS."
        }
        if (lowerMessage.includes('creative') || lowerMessage.includes('art') || lowerMessage.includes('design') || lowerMessage.includes('draw')) {
            return "Oh, I love that! Creative interests are so valuable, and there are actually amazing career paths that combine creativity with stability. 🎨\n\nQuick question — do you prefer creating things yourself (like art, writing) or do you enjoy organizing and presenting ideas (like design, content)?"
        }
        if (lowerMessage.includes('computer') || lowerMessage.includes('tech') || lowerMessage.includes('coding') || lowerMessage.includes('game')) {
            return "Tech is such a vast field with so many possibilities! And the best part? You don't always need to be great at physics to succeed in tech careers.\n\nTell me — what draws you to technology? Is it building things, solving puzzles, creating games, or something else?"
        }
        return "That's really helpful to know! I'm starting to get a picture of who you are. 😊\n\nOne more thing — when you work on something, do you prefer working alone where you can focus deeply, or do you enjoy being part of a team and collaborating with others?"
    }

    // Third message onwards - start giving guidance
    if (messageCount >= 3) {
        if (lowerMessage.includes('alone') || lowerMessage.includes('myself') || lowerMessage.includes('independent')) {
            return "Perfect, so you're more of an independent worker. That's a real strength — many high-impact careers value people who can focus deeply.\n\nBased on what you've told me, I'm thinking of a few paths that might suit you:\n\n📚 **Research & Academia** — Deep work, less social pressure\n💻 **Backend Development / Data Science** — Problem-solving focused\n✍️ **Content Writing / Editing** — Creative but independent\n\nWould you like me to explain any of these in more detail with the actual steps to get there?"
        }
        if (lowerMessage.includes('people') || lowerMessage.includes('team') || lowerMessage.includes('help') || lowerMessage.includes('talk')) {
            return "Ah, so you're a people person! That's wonderful — careers that involve working with others can be incredibly fulfilling.\n\nBased on our conversation, here are some paths that might resonate:\n\n🤝 **Psychology / Counseling** — Helping people directly\n📢 **Marketing / Communications** — Creative + social\n🎓 **Teaching / Training** — Impactful + people-focused\n💼 **HR / People Management** — Business + empathy\n\nShall I break down any of these with actual education routes and college options in India?"
        }
        return "You know what, based on everything you've shared, I'm seeing some patterns. Let me put together some career suggestions that match your interests and personality.\n\nBefore I do that — one quick question: Are there any constraints I should know about? Like budget for education, location preferences, or if you're considering government jobs vs private sector?"
    }

    return "That's really insightful. Keep sharing — the more I understand about you, the better I can help guide you. What else is on your mind?"
}

export default function ChatPage() {
    const router = useRouter()
    const [messages, setMessages] = useState<Message[]>([])
    const [input, setInput] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const [isRecording, setIsRecording] = useState(false)
    const [userName, setUserName] = useState('there')
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLTextAreaElement>(null)

    // Load user data and send welcome message
    useEffect(() => {
        const userData = localStorage.getItem('pathfinder_user')
        if (userData) {
            const user = JSON.parse(userData)
            if (user.name) setUserName(user.name)
        }

        // Send welcome message
        const welcomeMessage: Message = {
            id: 'welcome',
            role: 'assistant',
            content: WELCOME_MESSAGES[Math.floor(Math.random() * WELCOME_MESSAGES.length)],
            timestamp: new Date(),
        }
        setMessages([welcomeMessage])
    }, [])

    // Scroll to bottom on new messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages, isTyping])

    // Auto-resize textarea
    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(e.target.value)
        e.target.style.height = 'auto'
        e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px'
    }

    // Send message
    const sendMessage = useCallback(async () => {
        if (!input.trim() || isTyping) return

        const userMessage: Message = {
            id: `user-${Date.now()}`,
            role: 'user',
            content: input.trim(),
            timestamp: new Date(),
        }

        setMessages(prev => [...prev, userMessage])
        setInput('')
        if (inputRef.current) {
            inputRef.current.style.height = 'auto'
        }

        // Show typing indicator
        setIsTyping(true)

        // Simulate AI response delay (1.5-3 seconds)
        const delay = 1500 + Math.random() * 1500
        setTimeout(() => {
            const messageCount = messages.filter(m => m.role === 'user').length + 1
            const aiResponse: Message = {
                id: `ai-${Date.now()}`,
                role: 'assistant',
                content: getDemoResponse(input.trim(), messageCount),
                timestamp: new Date(),
            }
            setMessages(prev => [...prev, aiResponse])
            setIsTyping(false)
        }, delay)
    }, [input, isTyping, messages])

    // Handle keyboard submit
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            sendMessage()
        }
    }

    // Voice input handler (demo)
    const toggleVoiceInput = () => {
        if (!isRecording) {
            // Check for Web Speech API support
            if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
                setIsRecording(true)
                // In a real implementation, we would use the Web Speech API here
                // For demo, just simulate recording for 3 seconds
                setTimeout(() => {
                    setIsRecording(false)
                    setInput("I'm confused about what to do after class 12. Everyone wants me to do engineering but I don't think it's for me.")
                }, 3000)
            } else {
                alert('Voice input is not supported in your browser. Please try Chrome.')
            }
        } else {
            setIsRecording(false)
        }
    }

    return (
        <div className="h-screen flex flex-col bg-surface-50 dark:bg-surface-950">
            {/* Header */}
            <header className="flex-shrink-0 glass border-b border-surface-200/50 dark:border-surface-700/50 px-4 py-3">
                <div className="max-w-3xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/">
                            <motion.button
                                className="p-2 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
                                whileTap={{ scale: 0.95 }}
                            >
                                <ArrowLeftIcon />
                            </motion.button>
                        </Link>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center text-white text-lg">
                                🌟
                            </div>
                            <div>
                                <h1 className="font-semibold text-surface-900 dark:text-surface-50">
                                    {AI_MENTOR_NAME}
                                </h1>
                                <p className="text-xs text-green-500 flex items-center gap-1">
                                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                                    Online
                                </p>
                            </div>
                        </div>
                    </div>
                    <Link href="/report">
                        <motion.button
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors text-sm font-medium"
                            whileTap={{ scale: 0.95 }}
                        >
                            <FileTextIcon />
                            <span className="hidden sm:inline">View Report</span>
                        </motion.button>
                    </Link>
                </div>
            </header>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-6 hide-scrollbar">
                <div className="max-w-3xl mx-auto space-y-4">
                    <AnimatePresence>
                        {messages.map((message) => (
                            <ChatBubble key={message.id} message={message} />
                        ))}
                    </AnimatePresence>
                    {isTyping && <TypingIndicator />}
                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Input Area */}
            <div className="flex-shrink-0 glass border-t border-surface-200/50 dark:border-surface-700/50 px-4 py-4">
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-end gap-3">
                        {/* Voice input button */}
                        <motion.button
                            onClick={toggleVoiceInput}
                            className={`flex-shrink-0 p-3 rounded-xl transition-all ${isRecording
                                    ? 'bg-red-500 text-white animate-pulse'
                                    : 'bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-400 hover:bg-surface-200 dark:hover:bg-surface-700'
                                }`}
                            whileTap={{ scale: 0.95 }}
                            aria-label={isRecording ? 'Stop recording' : 'Start voice input'}
                        >
                            {isRecording ? <MicOffIcon /> : <MicIcon />}
                        </motion.button>

                        {/* Text input */}
                        <div className="flex-1 relative">
                            <textarea
                                ref={inputRef}
                                value={input}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                placeholder={isRecording ? 'Listening...' : 'Type your message...'}
                                disabled={isRecording}
                                rows={1}
                                className="input-field pr-12 resize-none max-h-32"
                            />
                        </div>

                        {/* Send button */}
                        <motion.button
                            onClick={sendMessage}
                            disabled={!input.trim() || isTyping}
                            className="flex-shrink-0 p-3 rounded-xl bg-primary-500 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-600 transition-colors"
                            whileTap={{ scale: 0.95 }}
                            aria-label="Send message"
                        >
                            <SendIcon />
                        </motion.button>
                    </div>

                    {/* Hint text */}
                    <p className="text-xs text-surface-400 dark:text-surface-500 text-center mt-3">
                        Press Enter to send • Shift + Enter for new line
                    </p>
                </div>
            </div>
        </div>
    )
}
