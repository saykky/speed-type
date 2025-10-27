export type TranslationKey =
    | 'top'
    | 'you'
    | 'resultsNotFound'
    | 'saveResults'
    | 'enterYourName'
    | 'save'
    | 'saved'
    | 'result'
    | 'greatJob'
    | 'errors'
    | 'accuracy'
    | 'countCharacters'
    | 'characterPerMinutes'
    | 'tryAgain'
    | 'rules'
    | 'second'
    | 'changeLanguage'
    | 'readyType'
    | 'name'
    | 'keyboardLocale'

export type Translations = {
    en: Record<TranslationKey, string>
    ru: Record<TranslationKey, string>
}

export const translations: Translations = {
    en: {
        top: 'Top',
        you: 'You!',
        resultsNotFound: 'Results not found',
        saveResults: 'Save results?',
        enterYourName: 'Enter your name (default name - anon)',
        save: 'Save',
        saved: 'Result saved',
        result: 'Result',
        greatJob: 'Great job! Here are your stats',
        errors: 'Errors',
        accuracy: 'Accuracy',
        countCharacters: 'Count characters',
        characterPerMinutes: 'Characters per minutes',
        tryAgain: 'Try again?',
        rules:
            'Enter the words as quickly and accurately as possible. Your speed, accuracy, and number of errors will be monitored. Select the' +
            'desired time for the test by pressing the button. The countdown will start automatically after entering the first letter.',
        second: 's',
        changeLanguage: 'Language - ',
        readyType: 'Ready to Type?',
        name: 'name',
        keyboardLocale: 'Keyboard locale'
    },
    ru: {
        top: 'Топ',
        you: 'Ты!',
        resultsNotFound: 'Результаты не найдены',
        saveResults: 'Сохранить результат?',
        enterYourName: 'Введите свое имя (по умолчанию имя - аноним)',
        save: 'Сохранить',
        saved: 'Результат сохранен',
        result: 'Результат',
        greatJob: 'Хорошая работа! Вот ваша статистика',
        errors: 'Ошибки',
        accuracy: 'Аккуратность',
        countCharacters: 'Количество символов',
        characterPerMinutes: 'Символов в минуту',
        tryAgain: 'Попробовать еще раз?',
        rules:
            'Вводите слова как можно быстрее и аккуратнее. Ваша скорость, аккуратность и количество ошибок будут отслеживаться.' +
            'Выберите желаемое время для теста, нажав на кнопку. Обратный отсчет начнется автоматически после ввода первой буквы.',
        second: 'с',
        changeLanguage: 'Язык - ',
        readyType: 'Готов к печати?',
        name: 'имя',
        keyboardLocale: 'Раскладка клавиатуры'
    },
}
