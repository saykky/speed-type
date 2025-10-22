import { useTranslation } from '@/app/components/TranslationContext/TranslationContext'

export default function SwitcherLanguage() {
    const { locale, setLocale } = useTranslation()

    return (
        <div className="flex gap-4 text-[24px]">
            <button
                className={`cursor-pointer ${locale === 'en' && 'text-purple-400'}`}
                onClick={() => setLocale('en')}
            >
                en
            </button>
            <button
                className={`cursor-pointer ${locale === 'ru' && 'text-purple-400'}`}
                onClick={() => setLocale('ru')}
            >
                ru
            </button>
        </div>
    )
}
