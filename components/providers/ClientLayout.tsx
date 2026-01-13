'use client'

import { ThemeProvider } from '@/components/providers/ThemeProvider'
import Header from '@/components/layout/Header'

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ThemeProvider>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">
                    {children}
                </main>
            </div>
        </ThemeProvider>
    )
}
