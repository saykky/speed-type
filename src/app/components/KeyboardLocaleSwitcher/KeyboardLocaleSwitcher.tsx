import { useTranslation } from '@/app/components/TranslationContext/TranslationContext'

type KeyboardLocaleSwitcherProps = {
    activeLocale: 'en' | 'ru'
    switchLocale: (locale: 'en' | 'ru') => void
}

export default function KeyboardLocaleSwitcher({ activeLocale, switchLocale }: KeyboardLocaleSwitcherProps) {
    const { t } = useTranslation()

    return (
        <div className='flex gap-2 items-center text-[24px]'>
            <p>{t('keyboardLocale')} - </p>
            <div className='flex gap-4'>
                <button className={`cursor-pointer ${activeLocale === 'en' ? 'text-purple-400' : ''}`} onClick={() => switchLocale('en')}>
                    en
                </button>
                <button className={`cursor-pointer ${activeLocale === 'ru' ? 'text-purple-400' : ''}`} onClick={() => switchLocale('ru')}>
                    ru
                </button>
            </div>
        </div>
    )
}
