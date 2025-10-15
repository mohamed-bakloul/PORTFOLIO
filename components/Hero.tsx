'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'

const heroDescriptions = {
  en: `💡 Hi, I'm Mohamed Bakloul, an Information Systems Engineer passionate about data analysis and modern web development.
I use Power BI, SQL Server, Excel, and Python to turn raw data into clear, visual insights, and I build high-performance sites with React, Next.js, and Tailwind CSS.
I love exploring data, finding simple solutions to complex problems, and creating useful tools.

🚀 I'm looking to collaborate with a motivated team to learn, share, and contribute to real-world projects.`,
  fr: `💡 Salut, je suis Mohamed Bakloul, ingénieur en systèmes d'information passionné par la data analyse et le développement web moderne.
J’utilise Power BI, SQL Server, Excel et Python pour transformer des données brutes en insights clairs et visuels, et je développe des sites performants avec React, Next.js et Tailwind CSS.
J’aime explorer les données, trouver des solutions simples à des problèmes complexes et créer des outils utiles.

🚀 Je souhaite aujourd’hui collaborer avec une équipe motivée pour apprendre, partager et contribuer à des projets concrets.`
}

export default function Hero() {
    const { language } = useLanguage()
    return (
        <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 overflow-hidden">
            {/* Decorative background blobs */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob" />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000" />
            </div>
            <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center text-center">
                <div className="mb-8">
                    <Image
                        src="/profile.jpg"
                        alt="Mohamed Bakloul"
                        width={120}
                        height={120}
                        className="rounded-full border-4 border-blue-500 shadow-lg mx-auto"
                        priority
                    />
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
                    Mohamed Bakloul
                </h1>
                <h2 className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    Data Analyst & Web Developer
                </h2>
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-blue-100 dark:border-blue-800 px-6 py-6 mb-6 max-w-xl mx-auto text-left">
                    <pre className="whitespace-pre-line text-base md:text-lg text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                        {heroDescriptions[language]}
                    </pre>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow hover:bg-blue-700 transition-all duration-200"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    )
}