"use client"

import {ThemeProvider} from "next-themes";
import {useState, ReactNode, useEffect} from "react";

type ProviderProps = {
    children: ReactNode
}

export default function Providers({children}: ProviderProps) {
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null;

    return (
        <ThemeProvider
            attribute="data-theme"
            defaultTheme="system"
            enableSystem
            storageKey="theme"
        >
            {children}
        </ThemeProvider>
    )
}