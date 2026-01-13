'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

// Icons
const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="M5 3v4" />
        <path d="M19 17v4" />
        <path d="M3 5h4" />
        <path d="M17 19h4" />
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

const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
)

const MapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
        <line x1="9" y1="3" x2="9" y2="18" />
        <line x1="15" y1="6" x2="15" y2="21" />
    </svg>
)

const MessageCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
)

const features = [
    {
        icon: <HeartIcon />,
        title: 'Emotionally Intelligent',
        description: 'Diya understands your confusion, fear, and pressure. She never judges, just helps.',
        color: 'from-rose-500 to-pink-500',
    },
    {
        icon: <BrainIcon />,
        title: 'Personalized Insights',
        description: 'Discover your unique strengths, interests, and personality through adaptive conversations.',
        color: 'from-violet-500 to-purple-500',
    },
    {
        icon: <MapIcon />,
        title: 'Realistic Career Paths',
        description: 'Get career suggestions with actual education roadmaps, costs, and timelines for India.',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        icon: <UsersIcon />,
        title: 'Student Community',
        description: 'Ask questions, share experiences, and learn from students who faced similar confusion.',
        color: 'from-emerald-500 to-teal-500',
    },
]

const testimonials = [
    {
        name: 'Priya Sharma',
        class: 'Class 12, Science',
        location: 'Delhi',
        quote: 'I was pressured to take engineering but Diya helped me realize my passion for psychology. Now I know exactly what to do!',
        avatar: '👩‍🎓',
    },
    {
        name: 'Rahul Verma',
        class: 'Drop Year',
        location: 'Mumbai',
        quote: 'After failing NEET, I was lost. PathFinder showed me other medical careers I never knew existed. Thank you!',
        avatar: '👨‍🎓',
    },
    {
        name: 'Ananya Iyer',
        class: 'Class 11, Commerce',
        location: 'Chennai',
        quote: 'Finally someone who didn\'t just say "do CA" but actually understood what makes me happy. This is the mentor I needed.',
        avatar: '👩‍💼',
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
}

export default function LandingPage() {
    return (
        <div className="relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl" />
                <div className="absolute top-1/2 -left-40 w-80 h-80 bg-secondary-500/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl" />
            </div>

            {/* Hero Section */}
            <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center max-w-4xl mx-auto"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        {/* Badge */}
                        <motion.div variants={itemVariants} className="mb-6">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800">
                                <SparklesIcon />
                                AI-Powered Career Guidance
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
                        >
                            <span className="text-surface-900 dark:text-surface-50">Confused about</span>
                            <br />
                            <span className="gradient-text">your future?</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-xl sm:text-2xl text-surface-600 dark:text-surface-400 mb-8 max-w-2xl mx-auto"
                        >
                            Talk to <span className="font-semibold text-primary-600 dark:text-primary-400">Diya</span>, your compassionate AI career mentor who truly understands Indian students.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            <Link href="/onboarding">
                                <motion.button
                                    className="btn-primary text-lg px-8 py-4 flex items-center gap-2"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <MessageCircleIcon />
                                    Start Talking to Diya
                                </motion.button>
                            </Link>
                            <Link href="/community">
                                <motion.button
                                    className="btn-secondary text-lg px-8 py-4"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Explore Community
                                </motion.button>
                            </Link>
                        </motion.div>

                        {/* Trust indicators */}
                        <motion.div
                            variants={itemVariants}
                            className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-surface-500 dark:text-surface-400"
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">🎓</span>
                                <span>10,000+ students guided</span>
                            </div>
                            <div className="hidden sm:block w-px h-4 bg-surface-300 dark:bg-surface-700" />
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">⭐</span>
                                <span>4.9/5 rating</span>
                            </div>
                            <div className="hidden sm:block w-px h-4 bg-surface-300 dark:bg-surface-700" />
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">🇮🇳</span>
                                <span>Made for India</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Chat Preview */}
                    <motion.div
                        className="mt-16 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <div className="glass-card p-6 space-y-4">
                            {/* AI Message */}
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center text-white text-lg">
                                    🌟
                                </div>
                                <div className="chat-bubble-ai">
                                    <p className="font-medium text-primary-600 dark:text-primary-400 mb-1">Diya</p>
                                    <p>Hey! I'm Diya, your career companion. I'm here to listen and help you figure things out. What's on your mind today? 💙</p>
                                </div>
                            </div>

                            {/* User Message */}
                            <div className="flex gap-3 justify-end">
                                <div className="chat-bubble-user">
                                    <p>I'm in science but I really don't like physics. My parents want me to do engineering but I'm so confused...</p>
                                </div>
                            </div>

                            {/* AI Response */}
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center text-white text-lg">
                                    🌟
                                </div>
                                <div className="chat-bubble-ai">
                                    <p>I completely understand, yaar. That pressure from family while not enjoying what you study is really tough. You're not alone in feeling this way. 🤗</p>
                                    <p className="mt-2">Let me ask you something — what subjects or activities actually make you feel excited or curious?</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface-100/50 dark:bg-surface-900/50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-display font-bold text-surface-900 dark:text-surface-50 mb-4">
                            Why Students <span className="gradient-text">Love PathFinder</span>
                        </h2>
                        <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
                            Not just another career test. A mentor who truly listens and understands your unique journey.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                className="card-hover p-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-4`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-50 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-surface-600 dark:text-surface-400">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-display font-bold text-surface-900 dark:text-surface-50 mb-4">
                            How It <span className="gradient-text">Works</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                step: '01',
                                title: 'Share Your Story',
                                description: 'Tell Diya about your situation, your interests, your worries. She\'ll listen without judgment.',
                                emoji: '💬',
                            },
                            {
                                step: '02',
                                title: 'Discover Yourself',
                                description: 'Through thoughtful questions, uncover your hidden strengths, passions, and personality.',
                                emoji: '🔍',
                            },
                            {
                                step: '03',
                                title: 'Get Your Roadmap',
                                description: 'Receive personalized career paths with clear steps, costs, and timelines for Indian education.',
                                emoji: '🗺️',
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={item.step}
                                className="relative text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                            >
                                <div className="text-6xl mb-4">{item.emoji}</div>
                                <div className="text-sm font-bold text-primary-500 dark:text-primary-400 mb-2">
                                    STEP {item.step}
                                </div>
                                <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-50 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-surface-600 dark:text-surface-400">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface-100/50 dark:bg-surface-900/50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-display font-bold text-surface-900 dark:text-surface-50 mb-4">
                            Stories from <span className="gradient-text">Real Students</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.name}
                                className="card p-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 flex items-center justify-center text-2xl">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-surface-900 dark:text-surface-50">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-sm text-surface-500 dark:text-surface-400">
                                            {testimonial.class} • {testimonial.location}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-surface-700 dark:text-surface-300 italic">
                                    "{testimonial.quote}"
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-display font-bold text-surface-900 dark:text-surface-50 mb-4">
                            Ready to Find <span className="gradient-text">Your Path?</span>
                        </h2>
                        <p className="text-lg text-surface-600 dark:text-surface-400 mb-8 max-w-2xl mx-auto">
                            It takes just 2 minutes to start. No tests, no pressure — just a friendly conversation with Diya.
                        </p>
                        <Link href="/onboarding">
                            <motion.button
                                className="btn-primary text-lg px-10 py-4"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Start Free Conversation
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-surface-200 dark:border-surface-800">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-lg">
                            <span className="gradient-text">PathFinder</span>
                            <span className="text-surface-600 dark:text-surface-400"> AI</span>
                        </span>
                    </div>
                    <div className="text-sm text-surface-500 dark:text-surface-400">
                        Made with 💙 for Indian students
                    </div>
                    <div className="flex gap-6 text-sm text-surface-500 dark:text-surface-400">
                        <a href="#" className="hover:text-primary-500 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-primary-500 transition-colors">Terms</a>
                        <a href="#" className="hover:text-primary-500 transition-colors">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
