import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Script from "next/script";
import Providers from "@/app/providers";
import { Quicksand } from "next/font/google";
import { TranslationProvider } from '@/app/components/TranslationContext/TranslationContext'

const quickSandSans = Quicksand({
    variable: "--font-quicksand",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "SpeedType",
    description: "Typing speed trainer built with Next.js",
    icons: {
        icon: "/favicon.ico"
    }
};

export default function RootLayout({
   children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
        <head>
            <Script
                id="theme-script"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                            const theme = localStorage.getItem('theme')
                            if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                                document.documentElement.classList.add('dark')
                            } else {
                                document.documentElement.classList.remove('dark')
                            }
                        `,
                }}
            />
        </head>
        <body className={quickSandSans.variable}>
            <TranslationProvider>
                <Providers>
                    {children}
                </Providers>
            </TranslationProvider>
        </body>
        </html>
    );
}