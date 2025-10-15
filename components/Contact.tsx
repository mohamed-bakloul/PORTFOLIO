'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Contact() {
    const { t } = useLanguage()

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    {t('contact.title')}
                </h2>
                <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                    {t('contact.subtitle')}
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <div className="text-3xl mb-4">📧</div>
                        <h3 className="text-xl font-semibold text-white mb-2">{t('contact.email')}</h3>
                        <a href="mailto:bakloul.mohamed.100@gmail.com" className="text-blue-100 hover:text-white transition-colors break-all">
                            bakloul.mohamed.100@gmail.com
                        </a>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <div className="text-3xl mb-4">📱</div>
                        <h3 className="text-xl font-semibold text-white mb-2">{t('contact.phone')}</h3>
                        <a href="tel:+212637036722" className="text-blue-100 hover:text-white transition-colors">
                            +212 637 036 722
                        </a>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <div className="text-3xl mb-4">📍</div>
                        <h3 className="text-xl font-semibold text-white mb-2">{t('contact.location')}</h3>
                        <p className="text-blue-100">Morocco</p>
                    </div>
                </div>

                {/* Social Links */}
                <div className="mb-12">
                    <h3 className="text-xl font-semibold text-white mb-6">{t('contact.connect')}</h3>
                    <div className="flex justify-center gap-6">
                        <a
                            href="https://www.linkedin.com/in/mohamed-bakloul/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 backdrop-blur-sm rounded-full p-4 hover:bg-white/20 transition-colors"
                        >
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a
                            href="https://github.com/mohamed-bakloul"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 backdrop-blur-sm rounded-full p-4 hover:bg-white/20 transition-colors"
                        >
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <form className="max-w-2xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <input
                            type="text"
                            placeholder={t('contact.form.name')}
                            className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                        <input
                            type="email"
                            placeholder={t('contact.form.email')}
                            className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                    </div>
                    <input
                        type="text"
                        placeholder={t('contact.form.projectType')}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 mb-6"
                    />
                    <textarea
                        placeholder={t('contact.form.message')}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 mb-6"
                    ></textarea>
                    <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 font-semibold">
                        {t('contact.form.send')}
                    </button>
                </form>

                {/* Services Offered */}
                <div className="mt-16">
                    <h3 className="text-xl font-semibold text-white mb-8">{t('contact.services.title')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                            <h4 className="text-white font-medium mb-2">{t('contact.services.powerbi')}</h4>
                            <p className="text-blue-100 text-sm">{t('contact.services.powerbi.desc')}</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                            <h4 className="text-white font-medium mb-2">{t('contact.services.excel')}</h4>
                            <p className="text-blue-100 text-sm">{t('contact.services.excel.desc')}</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                            <h4 className="text-white font-medium mb-2">{t('contact.services.visualization')}</h4>
                            <p className="text-blue-100 text-sm">{t('contact.services.visualization.desc')}</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                            <h4 className="text-white font-medium mb-2">{t('contact.services.consulting')}</h4>
                            <p className="text-blue-100 text-sm">{t('contact.services.consulting.desc')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

