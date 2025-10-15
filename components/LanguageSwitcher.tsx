'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage()

    return (
        <div className="fixed top-6 right-6 z-50">
            <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 dark:bg-gray-800/90 dark:border-gray-700">
                <div className="flex">
                    <button
                        onClick={() => setLanguage('en')}
                        className={`px-4 py-2 rounded-l-full text-sm font-medium transition-all duration-200 ${language === 'en'
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                            }`}
                    >
                        EN
                    </button>
                    <button
                        onClick={() => setLanguage('fr')}
                        className={`px-4 py-2 rounded-r-full text-sm font-medium transition-all duration-200 ${language === 'fr'
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                            }`}
                    >
                        FR
                    </button>
                </div>
            </div>
        </div>
    )
}

