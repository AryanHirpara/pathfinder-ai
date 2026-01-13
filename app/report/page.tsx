'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Icons
const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
)

const ShareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
    </svg>
)

const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
)

const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
)

const BrainIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.54" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 14.5 2" />
    </svg>
)

const TargetIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
    </svg>
)

const RouteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="19" r="3" />
        <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
        <circle cx="18" cy="5" r="3" />
    </svg>
)

const AlertIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" x2="12" y1="8" y2="12" />
        <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
)

// Demo data
const demoProfile = {
    name: 'Student',
    generatedAt: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }),
    interests: [
        { name: 'Technology', icon: '💻', score: 85 },
        { name: 'Creativity', icon: '🎨', score: 78 },
        { name: 'Problem Solving', icon: '🧩', score: 92 },
        { name: 'Communication', icon: '💬', score: 70 },
    ],
    strengths: [
        { name: 'Analytical Thinking', description: 'You excel at breaking down complex problems' },
        { name: 'Independent Work', description: 'You thrive when given autonomy' },
        { name: 'Quick Learning', description: 'You pick up new concepts faster than average' },
        { name: 'Attention to Detail', description: 'You notice things others miss' },
    ],
    personality: {
        type: 'The Thoughtful Innovator',
        description: 'You combine analytical thinking with creative problem-solving. You prefer understanding things deeply before acting. You work best in environments that value both innovation and logical rigor.',
        traits: ['Introverted', 'Analytical', 'Creative', 'Independent'],
    },
    careers: [
        {
            title: 'UX/UI Designer',
            match: 95,
            description: 'Design digital products that are both beautiful and user-friendly',
            whyFits: 'Combines your creative interests with problem-solving',
            path: 'BDes from NID/NIFT or BTech + Design courses',
            timeline: '4-5 years',
            salary: '₹8-25 LPA',
            cost: '₹5-15 lakhs',
        },
        {
            title: 'Data Scientist',
            match: 88,
            description: 'Extract insights from data to solve business problems',
            whyFits: 'Perfect for your analytical and problem-solving strengths',
            path: 'BTech/BSc Stats → MSc Data Science or self-learn',
            timeline: '4-6 years',
            salary: '₹10-40 LPA',
            cost: '₹4-20 lakhs',
        },
        {
            title: 'Product Manager',
            match: 82,
            description: 'Lead product development from idea to launch',
            whyFits: 'Uses your mix of tech understanding and communication',
            path: 'BTech/BBA → MBA or direct entry',
            timeline: '4-7 years',
            salary: '₹15-50 LPA',
            cost: '₹10-25 lakhs',
        },
        {
            title: 'Software Developer',
            match: 80,
            description: 'Build applications and systems that solve real problems',
            whyFits: 'Matches your problem-solving and independent work style',
            path: 'BTech CS/IT from good college',
            timeline: '4 years',
            salary: '₹6-30 LPA',
            cost: '₹4-15 lakhs',
        },
    ],
    studyPath: [
        { year: 'Now', milestone: 'Explore interests through online courses and projects' },
        { year: 'Year 1-2', milestone: 'Complete Class 12 with focus on preferred subjects' },
        { year: 'Year 2-3', milestone: 'Entrance exams / Portfolio preparation' },
        { year: 'Year 3-7', milestone: 'Bachelor\'s degree with internships' },
        { year: 'Year 7+', milestone: 'Master\'s (optional) or start working' },
    ],
    realityCheck: {
        competition: 'Medium to High (depending on chosen path)',
        effort: 'Consistent effort required, not just marks',
        flexibility: 'All suggested paths allow for pivots later',
        message: 'Remember, the goal is to find work that fulfills you. It\'s okay if your path changes as you grow. What matters is that you keep learning and stay curious.',
    },
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
}

export default function ReportPage() {
    const [userName, setUserName] = useState('there')

    useEffect(() => {
        const userData = localStorage.getItem('pathfinder_user')
        if (userData) {
            const user = JSON.parse(userData)
            if (user.name) setUserName(user.name)
        }
    }, [])

    const handleDownloadPDF = () => {
        // In a real implementation, this would generate a PDF
        alert('PDF download feature would be implemented here. In production, we would use a library like react-pdf or jsPDF.')
    }

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'My PathFinder Career Report',
                text: 'Check out my personalized career report from PathFinder AI!',
                url: window.location.href,
            })
        } else {
            navigator.clipboard.writeText(window.location.href)
            alert('Link copied to clipboard!')
        }
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
                        Your Career <span className="gradient-text">Report</span>
                    </h1>
                    <p className="text-surface-600 dark:text-surface-400">
                        Based on your conversation with Diya • {demoProfile.generatedAt}
                    </p>
                    <div className="flex justify-center gap-3 mt-4">
                        <motion.button
                            onClick={handleDownloadPDF}
                            className="btn-primary flex items-center gap-2"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <DownloadIcon />
                            Download PDF
                        </motion.button>
                        <motion.button
                            onClick={handleShare}
                            className="btn-secondary flex items-center gap-2"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <ShareIcon />
                            Share
                        </motion.button>
                    </div>
                </motion.div>

                {/* Report Cards */}
                <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Interests Card */}
                    <motion.div variants={itemVariants} className="card p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white">
                                <HeartIcon />
                            </div>
                            <h2 className="text-xl font-semibold text-surface-900 dark:text-surface-50">
                                Your Interests
                            </h2>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {demoProfile.interests.map((interest) => (
                                <div key={interest.name} className="bg-surface-50 dark:bg-surface-800/50 rounded-xl p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="flex items-center gap-2">
                                            <span className="text-xl">{interest.icon}</span>
                                            <span className="font-medium text-surface-800 dark:text-surface-200">
                                                {interest.name}
                                            </span>
                                        </span>
                                        <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                                            {interest.score}%
                                        </span>
                                    </div>
                                    <div className="w-full h-2 bg-surface-200 dark:bg-surface-700 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${interest.score}%` }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Strengths Card */}
                    <motion.div variants={itemVariants} className="card p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white">
                                <SparklesIcon />
                            </div>
                            <h2 className="text-xl font-semibold text-surface-900 dark:text-surface-50">
                                Your Strengths
                            </h2>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {demoProfile.strengths.map((strength) => (
                                <div key={strength.name} className="bg-surface-50 dark:bg-surface-800/50 rounded-xl p-4">
                                    <h3 className="font-semibold text-surface-800 dark:text-surface-200 mb-1">
                                        {strength.name}
                                    </h3>
                                    <p className="text-sm text-surface-600 dark:text-surface-400">
                                        {strength.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Personality Card */}
                    <motion.div variants={itemVariants} className="card p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white">
                                <BrainIcon />
                            </div>
                            <h2 className="text-xl font-semibold text-surface-900 dark:text-surface-50">
                                Your Personality
                            </h2>
                        </div>
                        <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 dark:from-violet-500/20 dark:to-purple-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-display font-bold gradient-text mb-3">
                                {demoProfile.personality.type}
                            </h3>
                            <p className="text-surface-700 dark:text-surface-300 mb-4">
                                {demoProfile.personality.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {demoProfile.personality.traits.map((trait) => (
                                    <span
                                        key={trait}
                                        className="px-3 py-1 bg-white/50 dark:bg-surface-800/50 rounded-full text-sm font-medium text-surface-700 dark:text-surface-300"
                                    >
                                        {trait}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Career Matches Card */}
                    <motion.div variants={itemVariants} className="card p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white">
                                <TargetIcon />
                            </div>
                            <h2 className="text-xl font-semibold text-surface-900 dark:text-surface-50">
                                Career Matches
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {demoProfile.careers.map((career, index) => (
                                <motion.div
                                    key={career.title}
                                    className="bg-surface-50 dark:bg-surface-800/50 rounded-xl p-4 border-l-4 border-primary-500"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                >
                                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                                        <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-50">
                                            {career.title}
                                        </h3>
                                        <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold">
                                            {career.match}% Match
                                        </span>
                                    </div>
                                    <p className="text-surface-600 dark:text-surface-400 mb-3">
                                        {career.description}
                                    </p>
                                    <p className="text-sm text-primary-600 dark:text-primary-400 mb-3">
                                        💡 {career.whyFits}
                                    </p>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
                                        <div className="bg-white dark:bg-surface-700 rounded-lg p-2">
                                            <div className="text-surface-500 dark:text-surface-400">Path</div>
                                            <div className="font-medium text-surface-800 dark:text-surface-200 truncate" title={career.path}>
                                                {career.path}
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-surface-700 rounded-lg p-2">
                                            <div className="text-surface-500 dark:text-surface-400">Timeline</div>
                                            <div className="font-medium text-surface-800 dark:text-surface-200">{career.timeline}</div>
                                        </div>
                                        <div className="bg-white dark:bg-surface-700 rounded-lg p-2">
                                            <div className="text-surface-500 dark:text-surface-400">Salary</div>
                                            <div className="font-medium text-green-600 dark:text-green-400">{career.salary}</div>
                                        </div>
                                        <div className="bg-white dark:bg-surface-700 rounded-lg p-2">
                                            <div className="text-surface-500 dark:text-surface-400">Cost</div>
                                            <div className="font-medium text-surface-800 dark:text-surface-200">{career.cost}</div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Study Path Card */}
                    <motion.div variants={itemVariants} className="card p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white">
                                <RouteIcon />
                            </div>
                            <h2 className="text-xl font-semibold text-surface-900 dark:text-surface-50">
                                Suggested Study Path
                            </h2>
                        </div>
                        <div className="relative">
                            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-surface-200 dark:bg-surface-700" />
                            <div className="space-y-4">
                                {demoProfile.studyPath.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        className="relative pl-10"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                    >
                                        <div className="absolute left-2 top-1 w-4 h-4 rounded-full bg-primary-500 border-2 border-white dark:border-surface-800" />
                                        <div className="bg-surface-50 dark:bg-surface-800/50 rounded-xl p-4">
                                            <div className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-1">
                                                {step.year}
                                            </div>
                                            <div className="text-surface-700 dark:text-surface-300">
                                                {step.milestone}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Reality Check Card */}
                    <motion.div variants={itemVariants} className="card p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-red-500 flex items-center justify-center text-white">
                                <AlertIcon />
                            </div>
                            <h2 className="text-xl font-semibold text-surface-900 dark:text-surface-50">
                                Reality Check
                            </h2>
                        </div>
                        <div className="grid sm:grid-cols-3 gap-4 mb-4">
                            <div className="bg-surface-50 dark:bg-surface-800/50 rounded-xl p-4">
                                <div className="text-sm text-surface-500 dark:text-surface-400 mb-1">Competition Level</div>
                                <div className="font-semibold text-surface-800 dark:text-surface-200">
                                    {demoProfile.realityCheck.competition}
                                </div>
                            </div>
                            <div className="bg-surface-50 dark:bg-surface-800/50 rounded-xl p-4">
                                <div className="text-sm text-surface-500 dark:text-surface-400 mb-1">Effort Required</div>
                                <div className="font-semibold text-surface-800 dark:text-surface-200">
                                    {demoProfile.realityCheck.effort}
                                </div>
                            </div>
                            <div className="bg-surface-50 dark:bg-surface-800/50 rounded-xl p-4">
                                <div className="text-sm text-surface-500 dark:text-surface-400 mb-1">Flexibility</div>
                                <div className="font-semibold text-surface-800 dark:text-surface-200">
                                    {demoProfile.realityCheck.flexibility}
                                </div>
                            </div>
                        </div>
                        <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-xl p-4">
                            <p className="text-primary-800 dark:text-primary-200">
                                💙 {demoProfile.realityCheck.message}
                            </p>
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div variants={itemVariants} className="text-center py-8">
                        <p className="text-surface-600 dark:text-surface-400 mb-4">
                            Want to explore more or ask follow-up questions?
                        </p>
                        <Link href="/chat">
                            <motion.button
                                className="btn-primary"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Continue Chatting with Diya
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
