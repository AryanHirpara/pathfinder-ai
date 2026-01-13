'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

// Icons
const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
)

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
    </svg>
)

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
)

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
)

const steps = [
    { id: 'login', title: 'Sign In' },
    { id: 'profile', title: 'About You' },
    { id: 'welcome', title: 'Welcome' },
]

const classOptions = [
    { value: '10', label: 'Class 10' },
    { value: '11', label: 'Class 11' },
    { value: '12', label: 'Class 12' },
    { value: 'drop', label: 'Drop Year / Gap Year' },
    { value: 'college', label: 'College Student' },
]

const streamOptions = [
    { value: 'science', label: '🔬 Science (PCM/PCB)' },
    { value: 'commerce', label: '📊 Commerce' },
    { value: 'arts', label: '🎨 Arts / Humanities' },
    { value: 'undecided', label: '🤔 Not decided yet' },
]

export default function OnboardingPage() {
    const router = useRouter()
    const [currentStep, setCurrentStep] = useState(0)
    const [loginMethod, setLoginMethod] = useState<'google' | 'phone' | null>(null)
    const [phoneNumber, setPhoneNumber] = useState('')
    const [formData, setFormData] = useState({
        name: '',
        class: '',
        stream: '',
        city: '',
    })

    const handleGoogleLogin = () => {
        // Mock Google login for demo
        setLoginMethod('google')
        setFormData(prev => ({ ...prev, name: 'Student' }))
        setTimeout(() => setCurrentStep(1), 500)
    }

    const handlePhoneLogin = () => {
        if (phoneNumber.length >= 10) {
            setLoginMethod('phone')
            setTimeout(() => setCurrentStep(1), 500)
        }
    }

    const handleProfileSubmit = () => {
        if (formData.class && formData.stream) {
            // Save to localStorage for demo
            localStorage.setItem('pathfinder_user', JSON.stringify({
                ...formData,
                id: 'demo_user_' + Date.now(),
                createdAt: new Date().toISOString(),
            }))
            setCurrentStep(2)
        }
    }

    const handleStartChat = () => {
        router.push('/chat')
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-12">
            {/* Background decorations */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl" />
            </div>

            <div className="w-full max-w-md">
                {/* Progress Steps */}
                <div className="flex items-center justify-center gap-2 mb-8">
                    {steps.map((step, index) => (
                        <div key={step.id} className="flex items-center">
                            <motion.div
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${index < currentStep
                                        ? 'bg-primary-500 text-white'
                                        : index === currentStep
                                            ? 'bg-primary-500 text-white ring-4 ring-primary-500/20'
                                            : 'bg-surface-200 dark:bg-surface-700 text-surface-500'
                                    }`}
                                animate={{ scale: index === currentStep ? 1.1 : 1 }}
                            >
                                {index < currentStep ? <CheckIcon /> : index + 1}
                            </motion.div>
                            {index < steps.length - 1 && (
                                <div
                                    className={`w-12 h-0.5 mx-2 transition-colors duration-300 ${index < currentStep
                                            ? 'bg-primary-500'
                                            : 'bg-surface-200 dark:bg-surface-700'
                                        }`}
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Step Content */}
                <AnimatePresence mode="wait">
                    {currentStep === 0 && (
                        <motion.div
                            key="login"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="glass-card p-8"
                        >
                            <div className="text-center mb-8">
                                <div className="text-4xl mb-4">👋</div>
                                <h1 className="text-2xl font-display font-bold text-surface-900 dark:text-surface-50 mb-2">
                                    Welcome to PathFinder
                                </h1>
                                <p className="text-surface-600 dark:text-surface-400">
                                    Let's get you started on your career journey
                                </p>
                            </div>

                            <div className="space-y-4">
                                {/* Google Login */}
                                <motion.button
                                    onClick={handleGoogleLogin}
                                    className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 hover:bg-surface-50 dark:hover:bg-surface-700 transition-all duration-200"
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                >
                                    <GoogleIcon />
                                    <span className="font-medium text-surface-700 dark:text-surface-200">
                                        Continue with Google
                                    </span>
                                </motion.button>

                                <div className="flex items-center gap-4">
                                    <div className="flex-1 h-px bg-surface-200 dark:bg-surface-700" />
                                    <span className="text-sm text-surface-500">or</span>
                                    <div className="flex-1 h-px bg-surface-200 dark:bg-surface-700" />
                                </div>

                                {/* Phone Login */}
                                <div className="space-y-3">
                                    <div className="flex gap-2">
                                        <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-surface-100 dark:bg-surface-800 border border-surface-200 dark:border-surface-700">
                                            <span>🇮🇳</span>
                                            <span className="text-surface-600 dark:text-surface-400">+91</span>
                                        </div>
                                        <input
                                            type="tel"
                                            placeholder="Enter phone number"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                                            className="input-field flex-1"
                                        />
                                    </div>
                                    <motion.button
                                        onClick={handlePhoneLogin}
                                        disabled={phoneNumber.length < 10}
                                        className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        whileHover={{ scale: phoneNumber.length >= 10 ? 1.01 : 1 }}
                                        whileTap={{ scale: phoneNumber.length >= 10 ? 0.99 : 1 }}
                                    >
                                        <PhoneIcon />
                                        Continue with Phone
                                    </motion.button>
                                </div>
                            </div>

                            <p className="mt-6 text-center text-sm text-surface-500 dark:text-surface-400">
                                By continuing, you agree to our Terms & Privacy Policy
                            </p>
                        </motion.div>
                    )}

                    {currentStep === 1 && (
                        <motion.div
                            key="profile"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="glass-card p-8"
                        >
                            <div className="text-center mb-8">
                                <div className="text-4xl mb-4">📚</div>
                                <h1 className="text-2xl font-display font-bold text-surface-900 dark:text-surface-50 mb-2">
                                    Tell us about yourself
                                </h1>
                                <p className="text-surface-600 dark:text-surface-400">
                                    This helps Diya understand your situation better
                                </p>
                            </div>

                            <div className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">
                                        What should we call you?
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                        className="input-field"
                                    />
                                </div>

                                {/* Class */}
                                <div>
                                    <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">
                                        Which class are you in? *
                                    </label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {classOptions.map((option) => (
                                            <motion.button
                                                key={option.value}
                                                onClick={() => setFormData(prev => ({ ...prev, class: option.value }))}
                                                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${formData.class === option.value
                                                        ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                                                        : 'bg-surface-100 dark:bg-surface-800 text-surface-700 dark:text-surface-300 hover:bg-surface-200 dark:hover:bg-surface-700'
                                                    }`}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                {option.label}
                                            </motion.button>
                                        ))}
                                    </div>
                                </div>

                                {/* Stream */}
                                <div>
                                    <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">
                                        Your stream/subject combination *
                                    </label>
                                    <div className="space-y-2">
                                        {streamOptions.map((option) => (
                                            <motion.button
                                                key={option.value}
                                                onClick={() => setFormData(prev => ({ ...prev, stream: option.value }))}
                                                className={`w-full px-4 py-3 rounded-xl text-left font-medium transition-all duration-200 ${formData.stream === option.value
                                                        ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                                                        : 'bg-surface-100 dark:bg-surface-800 text-surface-700 dark:text-surface-300 hover:bg-surface-200 dark:hover:bg-surface-700'
                                                    }`}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                {option.label}
                                            </motion.button>
                                        ))}
                                    </div>
                                </div>

                                {/* City (Optional) */}
                                <div>
                                    <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">
                                        City <span className="text-surface-400">(optional)</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g., Mumbai, Delhi, Bangalore"
                                        value={formData.city}
                                        onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                                        className="input-field"
                                    />
                                </div>

                                <motion.button
                                    onClick={handleProfileSubmit}
                                    disabled={!formData.class || !formData.stream}
                                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    whileHover={{ scale: formData.class && formData.stream ? 1.01 : 1 }}
                                    whileTap={{ scale: formData.class && formData.stream ? 0.99 : 1 }}
                                >
                                    Continue
                                    <ArrowRightIcon />
                                </motion.button>
                            </div>
                        </motion.div>
                    )}

                    {currentStep === 2 && (
                        <motion.div
                            key="welcome"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="glass-card p-8 text-center"
                        >
                            <motion.div
                                className="text-6xl mb-6"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 10, -10, 0]
                                }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeInOut"
                                }}
                            >
                                🎉
                            </motion.div>

                            <h1 className="text-2xl font-display font-bold text-surface-900 dark:text-surface-50 mb-4">
                                You're all set, {formData.name || 'friend'}!
                            </h1>

                            <p className="text-surface-600 dark:text-surface-400 mb-8">
                                Diya is ready to chat with you. She'll listen to your story, understand your situation, and help you discover the perfect career path.
                            </p>

                            {/* Quick tips */}
                            <div className="bg-surface-100 dark:bg-surface-800 rounded-xl p-4 mb-8 text-left">
                                <div className="text-sm font-medium text-surface-700 dark:text-surface-300 mb-3">
                                    💡 Quick tips for your chat:
                                </div>
                                <ul className="space-y-2 text-sm text-surface-600 dark:text-surface-400">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary-500 mt-0.5">•</span>
                                        Be honest about your feelings and confusion
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary-500 mt-0.5">•</span>
                                        Share what you enjoy, not just what others expect
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary-500 mt-0.5">•</span>
                                        Ask anything — there are no silly questions
                                    </li>
                                </ul>
                            </div>

                            <motion.button
                                onClick={handleStartChat}
                                className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2 mx-auto"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Start Talking to Diya
                                <ArrowRightIcon />
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
