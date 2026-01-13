'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { COMMUNITY_TAGS } from '@/lib/constants'

// Icons
const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
    </svg>
)

const ThumbsUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 10v12" />
        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
)

const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
)

const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
    </svg>
)

// Demo data
const demoPost = {
    id: '1',
    author: 'Aarav Patel',
    avatar: '👨‍🎓',
    class: 'Class 12, Science',
    question: 'I scored 85% in boards but failed JEE. Should I take a drop year or go for other options?',
    description: 'I studied really hard for JEE but still couldn\'t crack it. My percentile is around 70 which won\'t get me anywhere good. My parents are confused about what to do. Some relatives say take a drop year, some say go for state engineering colleges. I\'m feeling really lost and stressed. Has anyone been in a similar situation? What did you do?',
    tags: ['science', 'drop-year'],
    likes: 47,
    createdAt: '2 hours ago',
    aiSummary: 'Based on community responses: Drop year can be valuable if you have a clear strategy and genuine motivation to improve. Consider backup options like state CETs, BITS, or good private colleges. Many successful engineers didn\'t crack JEE. Focus on your interests and where you can genuinely grow, not just prestige.',
}

const demoReplies = [
    {
        id: '1',
        author: 'Sneha Gupta',
        avatar: '👩‍🔬',
        class: 'Engineering Student',
        content: 'I was in the exact same situation 2 years ago! Failed JEE, took a drop, and still couldn\'t crack it. But then I joined a state engineering college and honestly, it\'s been great. What matters is what you do in college, not which college you\'re in. Focus on projects, internships, and skills. Many of my batchmates from "tier 3" colleges are now in amazing companies.',
        likes: 23,
        createdAt: '1 hour ago',
    },
    {
        id: '2',
        author: 'Rajesh Kumar',
        avatar: '👨‍💻',
        class: 'Working Professional',
        content: 'Dropping can work, but only if:\n1. You know exactly where you went wrong\n2. You have a solid study plan\n3. You\'re mentally prepared for another intense year\n\nIf you\'re dropping just because "everyone says so", it might not be worth it. Also consider BITS, MHT-CET, COMEDK, or even direct admissions in good private colleges.',
        likes: 18,
        createdAt: '1 hour ago',
    },
    {
        id: '3',
        author: 'Priya Sharma',
        avatar: '👩‍💼',
        class: 'Career Counselor',
        content: 'As a counselor, I\'ve seen both success and failure with drop years. The key question is: Are you dropping to improve, or just delaying a decision? If engineering is truly your passion, a focused drop year can help. But if you\'re not sure about engineering itself, use this time to explore other fields too. 85% in boards is excellent - many paths are open to you!',
        likes: 31,
        createdAt: '45 mins ago',
    },
    {
        id: '4',
        author: 'Arjun Reddy',
        avatar: '👨‍🎓',
        class: 'Drop Year Student',
        content: 'Currently in my drop year. Honestly, it\'s tough. The pressure is real. But I\'m treating this as a learning experience. My advice: if you drop, don\'t just study more - study smarter. Analyze your JEE attempt, find weak areas, and work on them specifically. Also, keep backups ready. I\'m appearing for BITS, MHT-CET, and AP EAMCET alongside JEE.',
        likes: 15,
        createdAt: '30 mins ago',
    },
]

export default function PostDetailPage({ params }: { params: { id: string } }) {
    const [post, setPost] = useState(demoPost)
    const [replies, setReplies] = useState(demoReplies)
    const [newReply, setNewReply] = useState('')

    const handleLikePost = () => {
        setPost(prev => ({ ...prev, likes: prev.likes + 1 }))
    }

    const handleLikeReply = (replyId: string) => {
        setReplies(prev => prev.map(reply =>
            reply.id === replyId ? { ...reply, likes: reply.likes + 1 } : reply
        ))
    }

    const handleSubmitReply = () => {
        if (newReply.trim()) {
            const reply = {
                id: `new-${Date.now()}`,
                author: 'You',
                avatar: '🙋',
                class: 'Student',
                content: newReply,
                likes: 0,
                createdAt: 'Just now',
            }
            setReplies([...replies, reply])
            setNewReply('')
        }
    }

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Back button */}
                <Link href="/community">
                    <motion.button
                        className="flex items-center gap-2 text-surface-600 dark:text-surface-400 hover:text-primary-500 mb-6"
                        whileHover={{ x: -4 }}
                    >
                        <ArrowLeftIcon />
                        Back to Community
                    </motion.button>
                </Link>

                {/* Main Post */}
                <motion.div
                    className="card p-6 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {/* Author */}
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 flex items-center justify-center text-2xl">
                            {post.avatar}
                        </div>
                        <div>
                            <div className="font-semibold text-surface-900 dark:text-surface-50">
                                {post.author}
                            </div>
                            <div className="text-sm text-surface-500 dark:text-surface-400">
                                {post.class} • {post.createdAt}
                            </div>
                        </div>
                    </div>

                    {/* Question */}
                    <h1 className="text-xl font-semibold text-surface-900 dark:text-surface-50 mb-3">
                        {post.question}
                    </h1>

                    <p className="text-surface-700 dark:text-surface-300 mb-4 whitespace-pre-wrap">
                        {post.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tagId) => {
                            const tag = COMMUNITY_TAGS.find(t => t.id === tagId)
                            return tag ? (
                                <span key={tagId} className={`px-3 py-1 rounded-full text-sm font-medium ${tag.color}`}>
                                    {tag.label}
                                </span>
                            ) : null
                        })}
                    </div>

                    {/* Like button */}
                    <motion.button
                        onClick={handleLikePost}
                        className="flex items-center gap-2 text-surface-500 dark:text-surface-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                        whileTap={{ scale: 0.95 }}
                    >
                        <ThumbsUpIcon />
                        <span className="font-medium">{post.likes} likes</span>
                    </motion.button>
                </motion.div>

                {/* AI Summary */}
                {post.aiSummary && (
                    <motion.div
                        className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-2xl p-6 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="flex items-center gap-2 text-primary-700 dark:text-primary-300 font-semibold mb-3">
                            <SparklesIcon />
                            Best Guidance (AI Summary)
                        </div>
                        <p className="text-primary-800 dark:text-primary-200">
                            {post.aiSummary}
                        </p>
                    </motion.div>
                )}

                {/* Replies */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-lg font-semibold text-surface-900 dark:text-surface-50 mb-4">
                        {replies.length} Replies
                    </h2>

                    <div className="space-y-4 mb-6">
                        {replies.map((reply, index) => (
                            <motion.div
                                key={reply.id}
                                className="card p-5"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + index * 0.05 }}
                            >
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-surface-100 to-surface-200 dark:from-surface-700 dark:to-surface-800 flex items-center justify-center text-lg flex-shrink-0">
                                        {reply.avatar}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="font-medium text-surface-900 dark:text-surface-50">
                                                {reply.author}
                                            </span>
                                            <span className="text-sm text-surface-500 dark:text-surface-400">
                                                • {reply.class} • {reply.createdAt}
                                            </span>
                                        </div>
                                        <p className="text-surface-700 dark:text-surface-300 whitespace-pre-wrap mb-2">
                                            {reply.content}
                                        </p>
                                        <motion.button
                                            onClick={() => handleLikeReply(reply.id)}
                                            className="flex items-center gap-1 text-sm text-surface-500 dark:text-surface-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <ThumbsUpIcon />
                                            <span>{reply.likes}</span>
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Reply Input */}
                    <div className="card p-4">
                        <textarea
                            placeholder="Share your experience or advice..."
                            value={newReply}
                            onChange={(e) => setNewReply(e.target.value)}
                            rows={3}
                            className="input-field mb-3 resize-none"
                        />
                        <motion.button
                            onClick={handleSubmitReply}
                            disabled={!newReply.trim()}
                            className="btn-primary flex items-center gap-2 disabled:opacity-50"
                            whileTap={{ scale: newReply.trim() ? 0.98 : 1 }}
                        >
                            <SendIcon />
                            Post Reply
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
