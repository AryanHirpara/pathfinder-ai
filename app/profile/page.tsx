'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// Icons
const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
)

const MessageSquareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
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

const LogOutIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
)

const EditIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
)

const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 18 6-6-6-6" />
    </svg>
)

// Demo data
const demoChats = [
    {
        id: '1',
        preview: 'I\'m confused about choosing between engineering and design...',
        date: 'Today',
        messageCount: 12,
    },
    {
        id: '2',
        preview: 'What are my options if I don\'t want to do engineering?',
        date: 'Yesterday',
        messageCount: 8,
    },
    {
        id: '3',
        preview: 'Can you help me understand different career paths in tech?',
        date: '3 days ago',
        messageCount: 15,
    },
]

const demoReports = [
    {
        id: '1',
        title: 'Career Report',
        date: 'Jan 13, 2026',
        topMatch: 'UX/UI Designer',
    },
]

export default function ProfilePage() {
    const router = useRouter()
    const [user, setUser] = useState({
        name: 'Student',
        email: 'student@example.com',
        phone: '+91 98765 43210',
        class: '12',
        stream: 'science',
        city: 'Mumbai',
        createdAt: 'January 2026',
    })
    const [isEditing, setIsEditing] = useState(false)
    const [editForm, setEditForm] = useState(user)

    useEffect(() => {
        const userData = localStorage.getItem('pathfinder_user')
        if (userData) {
            const parsed = JSON.parse(userData)
            setUser(prev => ({ ...prev, ...parsed }))
            setEditForm(prev => ({ ...prev, ...parsed }))
        }
    }, [])

    const handleSave = () => {
        setUser(editForm)
        localStorage.setItem('pathfinder_user', JSON.stringify(editForm))
        setIsEditing(false)
    }

    const handleLogout = () => {
        localStorage.removeItem('pathfinder_user')
        router.push('/')
    }

    const getClassLabel = (value: string) => {
        const labels: Record<string, string> = {
            '10': 'Class 10',
            '11': 'Class 11',
            '12': 'Class 12',
            'drop': 'Drop Year',
            'college': 'College',
        }
        return labels[value] || value
    }

    const getStreamLabel = (value: string) => {
        const labels: Record<string, string> = {
            'science': 'Science',
            'commerce': 'Commerce',
            'arts': 'Arts',
            'undecided': 'Undecided',
        }
        return labels[value] || value
    }

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-3xl sm:text-4xl font-display font-bold text-surface-900 dark:text-surface-50 mb-2">
                        Your <span className="gradient-text">Profile</span>
                    </h1>
                </motion.div>

                {/* Profile Card */}
                <motion.div
                    className="card p-6 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center text-white">
                                <UserIcon />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-surface-900 dark:text-surface-50">
                                    {user.name || 'Student'}
                                </h2>
                                <p className="text-surface-500 dark:text-surface-400">
                                    Member since {user.createdAt}
                                </p>
                            </div>
                        </div>
                        <motion.button
                            onClick={() => setIsEditing(!isEditing)}
                            className="p-2 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors"
                            whileTap={{ scale: 0.95 }}
                        >
                            <EditIcon />
                        </motion.button>
                    </div>

                    {isEditing ? (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    value={editForm.name}
                                    onChange={(e) => setEditForm(prev => ({ ...prev, name: e.target.value }))}
                                    className="input-field"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">
                                    City
                                </label>
                                <input
                                    type="text"
                                    value={editForm.city}
                                    onChange={(e) => setEditForm(prev => ({ ...prev, city: e.target.value }))}
                                    className="input-field"
                                />
                            </div>
                            <div className="flex gap-3">
                                <motion.button
                                    onClick={handleSave}
                                    className="btn-primary flex-1"
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Save Changes
                                </motion.button>
                                <motion.button
                                    onClick={() => {
                                        setEditForm(user)
                                        setIsEditing(false)
                                    }}
                                    className="btn-secondary"
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Cancel
                                </motion.button>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-surface-50 dark:bg-surface-800/50 rounded-xl p-4">
                                <div className="text-sm text-surface-500 dark:text-surface-400">Class</div>
                                <div className="font-medium text-surface-800 dark:text-surface-200">
                                    {getClassLabel(user.class)}
                                </div>
                            </div>
                            <div className="bg-surface-50 dark:bg-surface-800/50 rounded-xl p-4">
                                <div className="text-sm text-surface-500 dark:text-surface-400">Stream</div>
                                <div className="font-medium text-surface-800 dark:text-surface-200">
                                    {getStreamLabel(user.stream)}
                                </div>
                            </div>
                            <div className="bg-surface-50 dark:bg-surface-800/50 rounded-xl p-4 col-span-2">
                                <div className="text-sm text-surface-500 dark:text-surface-400">City</div>
                                <div className="font-medium text-surface-800 dark:text-surface-200">
                                    {user.city || 'Not specified'}
                                </div>
                            </div>
                        </div>
                    )}
                </motion.div>

                {/* Past Chats */}
                <motion.div
                    className="card p-6 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white">
                            <MessageSquareIcon />
                        </div>
                        <h2 className="text-lg font-semibold text-surface-900 dark:text-surface-50">
                            Past Conversations
                        </h2>
                    </div>
                    <div className="space-y-2">
                        {demoChats.map((chat) => (
                            <Link key={chat.id} href="/chat">
                                <motion.div
                                    className="flex items-center justify-between p-4 bg-surface-50 dark:bg-surface-800/50 rounded-xl hover:bg-surface-100 dark:hover:bg-surface-700/50 transition-colors cursor-pointer"
                                    whileHover={{ x: 4 }}
                                >
                                    <div className="flex-1 min-w-0">
                                        <p className="text-surface-800 dark:text-surface-200 truncate">
                                            {chat.preview}
                                        </p>
                                        <p className="text-sm text-surface-500 dark:text-surface-400">
                                            {chat.date} • {chat.messageCount} messages
                                        </p>
                                    </div>
                                    <ChevronRightIcon />
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                    <Link href="/chat">
                        <motion.button
                            className="w-full mt-4 btn-secondary text-sm"
                            whileTap={{ scale: 0.98 }}
                        >
                            Start New Conversation
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Career Reports */}
                <motion.div
                    className="card p-6 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary-500 to-secondary-600 flex items-center justify-center text-white">
                            <FileTextIcon />
                        </div>
                        <h2 className="text-lg font-semibold text-surface-900 dark:text-surface-50">
                            Saved Reports
                        </h2>
                    </div>
                    <div className="space-y-2">
                        {demoReports.map((report) => (
                            <Link key={report.id} href="/report">
                                <motion.div
                                    className="flex items-center justify-between p-4 bg-surface-50 dark:bg-surface-800/50 rounded-xl hover:bg-surface-100 dark:hover:bg-surface-700/50 transition-colors cursor-pointer"
                                    whileHover={{ x: 4 }}
                                >
                                    <div>
                                        <p className="font-medium text-surface-800 dark:text-surface-200">
                                            {report.title}
                                        </p>
                                        <p className="text-sm text-surface-500 dark:text-surface-400">
                                            {report.date} • Top match: {report.topMatch}
                                        </p>
                                    </div>
                                    <ChevronRightIcon />
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </motion.div>

                {/* Logout */}
                <motion.button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <LogOutIcon />
                    Log Out
                </motion.button>
            </div>
        </div>
    )
}
