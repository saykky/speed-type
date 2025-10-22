'use client'

import React, { createContext, useContext, useState, useEffect, Dispatch, SetStateAction, ReactNode } from 'react';
import { translations, TranslationKey } from '@/app/lib/translations';

export type Locale = 'ru' | 'en';

type TranslationContextType = {
    t: (key: TranslationKey) => string;
    locale: Locale;
    setLocale: Dispatch<SetStateAction<Locale>>;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState<Locale>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('locale') as Locale | null;
            const browserLang = navigator.language.startsWith('ru') ? 'ru' : 'en';
            return saved || browserLang;
        }
        return 'en';
    });

    useEffect(() => {
        localStorage.setItem('locale', locale);
    }, [locale]);

    const t: (key: TranslationKey) => string = (key: TranslationKey) =>
        translations[locale][key] ?? key;

    return (
        <TranslationContext.Provider value={{ t, locale, setLocale }}>
            {children}
        </TranslationContext.Provider>
    );
}

export function useTranslation(): TranslationContextType {
    const context = useContext(TranslationContext);
    if (context === undefined) {
        throw new Error('useTranslation must be used within a TranslationProvider');
    }
    return context;
}