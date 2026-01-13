import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/providers/ClientLayout'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

const poppins = Poppins({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin'],
    variable: '--font-poppins',
})

export const metadata: Metadata = {
    title: 'PathFinder AI – Career Companion for Students',
    description: 'Your compassionate AI career mentor. Get personalized career guidance, discover your strengths, and find the perfect path for your future.',
    keywords: ['career guidance', 'student mentor', 'career counseling', 'India', 'class 12', 'career advice'],
    authors: [{ name: 'PathFinder AI' }],
    openGraph: {
        title: 'PathFinder AI – Career Companion for Students',
        description: 'Your compassionate AI career mentor. Get personalized career guidance for Indian students.',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
                <ClientLayout>
                    {children}
                </ClientLayout>
            </body>
        </html>
    )
}
