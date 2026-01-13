'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { COMMUNITY_TAGS } from '@/lib/constants'

// Icons
const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
        <path d="M12 5v14" />
    </svg>
)

const ThumbsUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 10v12" />
        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
)

const MessageSquareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
)

const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
)

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
)

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
    </svg>
)

// Demo data
const demoPosts = [
    {
        id: '1',
        author: 'Aarav Patel',
        avatar: '👨‍🎓',
        class: 'Class 12, Science',
        question: 'I scored 85% in boards but failed JEE. Should I take a drop year or go for other options?',
        tags: ['science', 'drop-year'],
        likes: 47,
        replies: 12,
        createdAt: '2 hours ago',
        aiSummary: 'Based on community responses: Drop year can be valuable if you have a clear strategy. Consider backup options like state CETs, BITS, or private colleges. Many successful engineers didn\'t crack JEE. Focus on your interests, not just prestige.',
    },
    {
        id: '2',
        author: 'Priya Sharma',
        avatar: '👩‍💼',
        class: 'Class 11, Commerce',
        question: 'Is CA still worth it? I keep hearing about AI replacing accountants. Should I do something else?',
        tags: ['commerce'],
        likes: 32,
        replies: 8,
        createdAt: '5 hours ago',
        aiSummary: 'CA remains highly valued in India, but the role is evolving. Focus on advisory, auditing, and strategic skills that AI can\'t replace. Consider complementing with tech skills. The foundation is strong for many finance careers.',
    },
    {
        id: '3',
        author: 'Mohammed Rizwan',
        avatar: '👨‍🎨',
        class: 'Class 12, Arts',
        question: 'My parents think Arts has no scope. How do I convince them about design/media careers?',
        tags: ['arts'],
        likes: 89,
        replies: 23,
        createdAt: 'Yesterday',
        aiSummary: 'Many successful careers exist in design, UX, content, film, and digital media. Share salary data from NID/NIFT graduates, and successful Indian designers. Offer to take aptitude tests. Sometimes a small project portfolio speaks louder than words.',
    },
    {
        id: '4',
        author: 'Ananya Iyer',
        avatar: '👩‍⚕️',
        class: 'Drop Year',
        question: 'Failed NEET twice. Is MBBS abroad a good option or should I look at other healthcare careers?',
        tags: ['science', 'abroad'],
        likes: 56,
        replies: 15,
        createdAt: '2 days ago',
        aiSummary: 'MBBS abroad (Russia, Ukraine, Philippines) can work but research carefully about FMGE pass rates. Consider BAMS, BDS, nursing, physiotherapy, or healthcare management as alternatives. Many fulfilling healthcare careers exist beyond MBBS.',
    },
    {
        id: '5',
        author: 'Vikram Singh',
        avatar: '👨‍💻',
        class: 'Class 12, Science',
        question: 'Everyone says do BTech but I want to do BSc in Physics. Is it a mistake?',
        tags: ['science'],
        likes: 41,
        replies: 9,
        createdAt: '3 days ago',
        aiSummary: 'BSc Physics is excellent for research, teaching, and many unconventional paths. Top institutes like IISc, IISER offer great BSc programs. Can lead to data science, finance (quant), or academia. Follow your passion if physics excites you.',
    },
]

export default function CommunityPage() {
    const [posts, setPosts] = useState(demoPosts)
    const [selectedTag, setSelectedTag] = useState<string | null>(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [showNewPostModal, setShowNewPostModal] = useState(false)
    const [newPost, setNewPost] = useState({ question: '', tags: [] as string[] })

    const filteredPosts = posts.filter(post => {
        const matchesTag = !selectedTag || post.tags.includes(selectedTag)
        const matchesSearch = !searchQuery ||
            post.question.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesTag && matchesSearch
    })

    const handleLike = (postId: string) => {
        setPosts(prev => prev.map(post =>
            post.id === postId ? { ...post, likes: post.likes + 1 } : post
        ))
    }

    const handleNewPost = () => {
        if (newPost.question.trim()) {
            const post = {
                id: `new-${Date.now()}`,
                author: 'You',
                avatar: '🙋',
                class: 'Student',
                question: newPost.question,
                tags: newPost.tags,
                likes: 0,
                replies: 0,
                createdAt: 'Just now',
                aiSummary: '',
            }
            setPosts([post, ...posts])
            setNewPost({ question: '', tags: [] })
            setShowNewPostModal(false)
        }
    }

    const toggleNewPostTag = (tagId: string) => {
        setNewPost(prev => ({
            ...prev,
            tags: prev.tags.includes(tagId)
                ? prev.tags.filter(t => t !== tagId)
                : [...prev.tags, tagId]
        }))
    }

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-3xl sm:text-4xl font-display font-bold text-surface-900 dark:text-surface-50 mb-2">
                        Student <span className="gradient-text">Community</span>
                    </h1>
                    <p className="text-surface-600 dark:text-surface-400">
                        Ask questions, share experiences, and learn from students like you
                    </p>
                </motion.div>

                {/* Search and New Post */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="relative flex-1">
                        <SearchIcon />
                        <input
                            type="text"
                            placeholder="Search questions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="input-field pl-10"
                        />
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400">
                            <SearchIcon />
                        </div>
                    </div>
                    <motion.button
                        onClick={() => setShowNewPostModal(true)}
                        className="btn-primary flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <PlusIcon />
                        Ask Question
                    </motion.button>
                </div>

                {/* Tags Filter */}
                <div className="flex flex-wrap gap-2 mb-6">
                    <button
                        onClick={() => setSelectedTag(null)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!selectedTag
                                ? 'bg-primary-500 text-white'
                                : 'bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-400 hover:bg-surface-200 dark:hover:bg-surface-700'
                            }`}
                    >
                        All
                    </button>
                    {COMMUNITY_TAGS.map((tag) => (
                        <button
                            key={tag.id}
                            onClick={() => setSelectedTag(selectedTag === tag.id ? null : tag.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedTag === tag.id
                                    ? 'bg-primary-500 text-white'
                                    : tag.color
                                }`}
                        >
                            {tag.label}
                        </button>
                    ))}
                </div>

                {/* Posts */}
                <div className="space-y-4">
                    {filteredPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            className="card p-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            {/* Author */}
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 flex items-center justify-center text-xl">
                                    {post.avatar}
                                </div>
                                <div>
                                    <div className="font-medium text-surface-900 dark:text-surface-50">
                                        {post.author}
                                    </div>
                                    <div className="text-sm text-surface-500 dark:text-surface-400">
                                        {post.class} • {post.createdAt}
                                    </div>
                                </div>
                            </div>

                            {/* Question */}
                            <h3 className="text-lg font-medium text-surface-900 dark:text-surface-50 mb-3">
                                {post.question}
                            </h3>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.map((tagId) => {
                                    const tag = COMMUNITY_TAGS.find(t => t.id === tagId)
                                    return tag ? (
                                        <span key={tagId} className={`px-3 py-1 rounded-full text-xs font-medium ${tag.color}`}>
                                            {tag.label}
                                        </span>
                                    ) : null
                                })}
                            </div>

                            {/* AI Summary */}
                            {post.aiSummary && (
                                <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-xl p-4 mb-4">
                                    <div className="flex items-center gap-2 text-primary-700 dark:text-primary-300 font-medium mb-2">
                                        <SparklesIcon />
                                        Best Guidance (AI Summary)
                                    </div>
                                    <p className="text-sm text-primary-800 dark:text-primary-200">
                                        {post.aiSummary}
                                    </p>
                                </div>
                            )}

                            {/* Actions */}
                            <div className="flex items-center gap-4">
                                <motion.button
                                    onClick={() => handleLike(post.id)}
                                    className="flex items-center gap-2 text-surface-500 dark:text-surface-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <ThumbsUpIcon />
                                    <span className="text-sm font-medium">{post.likes}</span>
                                </motion.button>
                                <Link href={`/community/${post.id}`}>
                                    <button className="flex items-center gap-2 text-surface-500 dark:text-surface-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                                        <MessageSquareIcon />
                                        <span className="text-sm font-medium">{post.replies} replies</span>
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}

                    {filteredPosts.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-4xl mb-4">🔍</div>
                            <p className="text-surface-600 dark:text-surface-400">
                                No questions found. Try a different search or filter.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* New Post Modal */}
            <AnimatePresence>
                {showNewPostModal && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/50 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowNewPostModal(false)}
                        />
                        <motion.div
                            className="fixed inset-x-4 top-1/2 -translate-y-1/2 max-w-lg mx-auto bg-white dark:bg-surface-800 rounded-2xl shadow-2xl z-50 p-6"
                            initial={{ opacity: 0, scale: 0.95, y: '-40%' }}
                            animate={{ opacity: 1, scale: 1, y: '-50%' }}
                            exit={{ opacity: 0, scale: 0.95, y: '-40%' }}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-semibold text-surface-900 dark:text-surface-50">
                                    Ask the Community
                                </h2>
                                <button
                                    onClick={() => setShowNewPostModal(false)}
                                    className="p-2 hover:bg-surface-100 dark:hover:bg-surface-700 rounded-lg transition-colors"
                                >
                                    <CloseIcon />
                                </button>
                            </div>

                            <textarea
                                placeholder="What's your question? Be specific for better answers..."
                                value={newPost.question}
                                onChange={(e) => setNewPost(prev => ({ ...prev, question: e.target.value }))}
                                rows={4}
                                className="input-field mb-4 resize-none"
                            />

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">
                                    Add tags (optional)
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {COMMUNITY_TAGS.map((tag) => (
                                        <button
                                            key={tag.id}
                                            onClick={() => toggleNewPostTag(tag.id)}
                                            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${newPost.tags.includes(tag.id)
                                                    ? 'bg-primary-500 text-white'
                                                    : tag.color
                                                }`}
                                        >
                                            {tag.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <motion.button
                                onClick={handleNewPost}
                                disabled={!newPost.question.trim()}
                                className="btn-primary w-full disabled:opacity-50"
                                whileHover={{ scale: newPost.question.trim() ? 1.01 : 1 }}
                                whileTap={{ scale: newPost.question.trim() ? 0.99 : 1 }}
                            >
                                Post Question
                            </motion.button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}
