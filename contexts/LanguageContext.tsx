'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'fr'

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation object
const translations = {
    en: {
        // Hero Section
        'hero.greeting': "Hi, I'm",
        'hero.name': 'Mohamed Bakloul',
        'hero.title': 'Data Analyst and Developer | BI Solutions • SQL • Python • Power BI • ETL • Web & App Development',
        'hero.description': "I'm Mohamed Bakloul, an Information Systems Engineer and freelance Data Analyst seeking new opportunities in information analysis and data visualization. My work focuses on helping individuals and businesses understand, structure, and use their data effectively — and present it beautifully online.\n\nData Analytics & Business Intelligence\nI specialize in turning raw data into clear stories through:\n• Data Cleaning & Transformation (Excel, CSV, SQL Server, Python)\n• Dashboard Creation (Power BI, Excel)\n• KPI Tracking, Trends, and Insights\n• Automation & Reporting Solutions\n\nFrom incomplete spreadsheets to complex business databases, I'll help you reveal patterns and insights that drive smarter decisions.\n\n🔹 Web Development\nAlongside analytics, I develop modern, high-performance websites using:\n• Next.js, React, and Tailwind CSS\n• Responsive, mobile-friendly design\n• SEO optimization and fast loading times\n• Portfolio, business, or landing page development\n\nEvery project is built with clean, maintainable code and a focus on user experience and performance. Whether you need data clarity or a digital presence, I deliver results that combine technical expertise with attention to detail.",
        'hero.viewWork': 'View My Work',
        'hero.getInTouch': 'Get In Touch',
        'hero.subtitle': 'Data Analyst & Web Developer',
        'hero.viewProjects': 'View Projects',
        'hero.contactMe': 'Contact Me',

        // Services Section
        'services.title': 'Services I Offer',
        'services.subtitle': 'Specialized in turning complex data into clear, actionable insights that drive business growth',
        'services.frontend.title': 'Frontend Development',
        'services.frontend.description': 'Building modern, responsive web applications using React, Next.js, and other cutting-edge technologies.',
        'services.frontend.feature1': 'React/Next.js',
        'services.frontend.feature2': 'Responsive Design',
        'services.frontend.feature3': 'Performance Optimization',
        'services.data.title': 'Data Analytics & Visualization',
        'services.data.description': 'Transform raw data into actionable insights through advanced analytics and compelling visualizations using Power BI, Excel, and other BI tools.',
        'services.data.feature1': 'Dashboard Creation',
        'services.data.feature2': 'KPI Tracking',
        'services.data.feature3': 'Interactive Reports',
        'services.fullstack.title': 'Full Stack Development',
        'services.fullstack.description': 'Creating end-to-end web applications with modern frontend and backend technologies.',
        'services.fullstack.feature1': 'API Development',
        'services.fullstack.feature2': 'Database Design',
        'services.fullstack.feature3': 'Authentication',

        // About Section
        'about.title': 'About Me',
        'about.subtitle': 'Passionate about transforming data into actionable business insights',
        'about.description': "👨‍💻 About Me\n\nHi, I'm Mohamed, an Information Systems Engineer passionate about data analytics, business intelligence, and modern web development. I'm currently seeking opportunities to apply my analytical and development skills to real-world projects that involve information analysis, data visualization, and insight generation.\n\nI work with tools like Power BI, Excel, SQL Server, and Python to turn disorganized data into structured, insightful dashboards. On the development side, I build sleek, responsive websites using React, Next.js, and Tailwind CSS.\n\nMy approach is simple: understand the problem, analyze the data, and deliver a solution that's both clear and impactful. Clients appreciate my transparent communication, precision, and commitment to quality results.\n\nIf you're looking for a professional who can analyze your information, visualize your data, or develop your digital presence, I'd be happy to collaborate.",
        'about.skills.title': 'Technical Skills',
        'about.dataAnalysis.title': 'Data Analysis',
        'about.dataAnalysis.description': 'Transforming raw data into actionable insights',
        'about.webDevelopment.title': 'Web Development',
        'about.webDevelopment.description': 'Building modern, responsive applications',

        // Projects Section
        'projects.title': 'Projects',
        'projects.subtitle': 'A showcase of my data analysis and business intelligence projects',
        'projects.more.title': 'More Projects & Case Studies',
        'projects.viewDetails': 'View Project Details',

        // Contact Section
        'contact.title': "Let's Work Together",
        'contact.subtitle': "Ready to transform your data into actionable insights? I'd love to discuss your analytics needs and how we can create powerful dashboards for your business.",
        'contact.email': 'Email',
        'contact.phone': 'Phone',
        'contact.location': 'Location',
        'contact.connect': 'Connect With Me',
        'contact.form.name': 'Your Name',
        'contact.form.email': 'Your Email',
        'contact.form.projectType': 'Project Type (e.g., Power BI Dashboard, Excel Analytics)',
        'contact.form.message': 'Tell me about your data analytics needs and project requirements...',
        'contact.form.send': 'Send Message',
        'contact.form.sending': 'Sending...',
        'contact.form.success': 'Message sent successfully!',
        'contact.form.error': 'Failed to send message. Please try again.',
        'contact.services.title': 'Services I Offer',
        'contact.services.powerbi': 'Power BI Dashboards',
        'contact.services.powerbi.desc': 'Interactive business intelligence solutions',
        'contact.services.excel': 'Excel Analytics',
        'contact.services.excel.desc': 'Advanced spreadsheets and automated reports',
        'contact.services.visualization': 'Data Visualization',
        'contact.services.visualization.desc': 'Clear and compelling data stories',
        'contact.services.consulting': 'Consulting',
        'contact.services.consulting.desc': 'Data strategy and implementation guidance',
    },
    fr: {
        // Hero Section
        'hero.greeting': "Salut, je suis",
        'hero.name': 'Mohamed Bakloul',
        'hero.title': 'Analyste de Données et Développeur | Solutions BI • SQL • Python • Power BI • ETL • Développement Web & App',
        'hero.description': "Analyse de données & Développement web — Transformer l'information en impact concret\n\nBesoin d'aide pour transformer des informations désordonnées en insights pertinents ou pour créer un site web moderne et performant ? Vous êtes au bon endroit.\n\nJe suis Mohamed Bakloul, ingénieur en systèmes d'information et analyste de données freelance, actuellement à la recherche de nouvelles opportunités dans l'analyse de l'information et la visualisation de données. Mon travail consiste à aider les particuliers et les entreprises à comprendre, structurer et exploiter leurs données efficacement, tout en les mettant en valeur à travers des tableaux de bord et des sites web professionnels.\n\n🔹 Analyse de données & Business Intelligence\nJe suis spécialisé dans la transformation de données brutes en histoires claires et exploitables, à travers :\n• Nettoyage et transformation de données (Excel, CSV, SQL Server, Python)\n• Création de tableaux de bord interactifs (Power BI, Excel)\n• Suivi de KPI, analyse de tendances et extraction d'insights\n• Automatisation et solutions de reporting\n\nQu'il s'agisse de fichiers incomplets ou de bases de données complexes, je vous aide à identifier les modèles et insights qui favorisent une meilleure prise de décision.\n\n🔹 Développement Web\nEn parallèle de l'analyse, je conçois et développe des sites web modernes et performants utilisant :\n• Next.js, React, et Tailwind CSS\n• Un design réactif et adapté aux mobiles\n• Une optimisation SEO et un temps de chargement rapide\n• Des sites vitrines, portfolios ou pages d'entreprise\n\nChaque projet est réalisé avec un code propre, maintenable, et une attention particulière à l'expérience utilisateur et aux performances.",
        'hero.viewWork': 'Voir Mon Travail',
        'hero.getInTouch': 'Me Contacter',
        'hero.subtitle': 'Analyste de Données & Développeur Web',
        'hero.viewProjects': 'Voir les Projets',
        'hero.contactMe': 'Me Contacter',

        // Services Section
        'services.title': 'Services Que J\'Offre',
        'services.subtitle': 'Spécialisé dans la transformation de données complexes en insights clairs et exploitables qui stimulent la croissance des entreprises',
        'services.frontend.title': 'Développement Frontend',
        'services.frontend.description': 'Création d\'applications web modernes et réactives utilisant React, Next.js et d\'autres technologies de pointe.',
        'services.frontend.feature1': 'React/Next.js',
        'services.frontend.feature2': 'Design Réactif',
        'services.frontend.feature3': 'Optimisation des Performances',
        'services.data.title': 'Analyse de Données & Visualisation',
        'services.data.description': 'Transformer des données brutes en insights exploitables grâce à une analyse avancée et des visualisations convaincantes utilisant Power BI, Excel et d\'autres outils BI.',
        'services.data.feature1': 'Création de Tableaux de Bord',
        'services.data.feature2': 'Suivi des KPI',
        'services.data.feature3': 'Rapports Interactifs',
        'services.fullstack.title': 'Développement Full Stack',
        'services.fullstack.description': 'Création d\'applications web de bout en bout avec des technologies frontend et backend modernes.',
        'services.fullstack.feature1': 'Développement d\'API',
        'services.fullstack.feature2': 'Conception de Base de Données',
        'services.fullstack.feature3': 'Authentification',

        // About Section
        'about.title': 'À Propos',
        'about.subtitle': 'Passionné par la transformation des données en insights commerciaux exploitables',
        'about.description': "👨‍💻 À Propos\n\nSalut, je suis Mohamed, un ingénieur en systèmes d'information passionné par l'analyse de données, l'intelligence d'affaires et le développement web moderne. Je recherche actuellement des opportunités pour appliquer mes compétences analytiques et de développement à des projets réels impliquant l'analyse d'informations, la visualisation de données et la génération d'insights.\n\nJe travaille avec des outils comme Power BI, Excel, SQL Server et Python pour transformer des données désorganisées en tableaux de bord structurés et informatifs. Côté développement, je construis des sites web élégants et réactifs en utilisant React, Next.js et Tailwind CSS.\n\nMon approche est simple : comprendre le problème, analyser les données et livrer une solution qui est à la fois claire et impactante. Les clients apprécient ma communication transparente, ma précision et mon engagement envers des résultats de qualité.\n\nSi vous cherchez un professionnel qui peut analyser vos informations, visualiser vos données ou développer votre présence numérique, je serais heureux de collaborer.",
        'about.skills.title': 'Compétences Techniques',
        'about.dataAnalysis.title': 'Analyse de Données',
        'about.dataAnalysis.description': 'Transformer des données brutes en insights exploitables',
        'about.webDevelopment.title': 'Développement Web',
        'about.webDevelopment.description': 'Création d\'applications modernes et réactives',

        // Projects Section
        'projects.title': 'Projets',
        'projects.subtitle': 'Une vitrine de mes projets d\'analyse de données et d\'intelligence d\'affaires',
        'projects.more.title': 'Plus de Projets & Études de Cas',
        'projects.viewDetails': 'Voir les Détails du Projet',

        // Contact Section
        'contact.title': 'Travaillons Ensemble',
        'contact.subtitle': 'Prêt à transformer vos données en insights exploitables ? J\'aimerais discuter de vos besoins d\'analyse et comment nous pouvons créer des tableaux de bord puissants pour votre entreprise.',
        'contact.email': 'Email',
        'contact.phone': 'Téléphone',
        'contact.location': 'Localisation',
        'contact.connect': 'Connectez-vous Avec Moi',
        'contact.form.name': 'Votre Nom',
        'contact.form.email': 'Votre Email',
        'contact.form.projectType': 'Type de Projet (ex: Tableau de bord Power BI, Analytics Excel)',
        'contact.form.message': 'Parlez-moi de vos besoins d\'analyse de données et exigences du projet...',
        'contact.form.send': 'Envoyer le Message',
        'contact.form.sending': 'Envoi en cours...',
        'contact.form.success': 'Message envoyé avec succès !',
        'contact.form.error': 'Échec de l\'envoi du message. Veuillez réessayer.',
        'contact.services.title': 'Services Que J\'Offre',
        'contact.services.powerbi': 'Tableaux de Bord Power BI',
        'contact.services.powerbi.desc': 'Solutions d\'intelligence d\'affaires interactives',
        'contact.services.excel': 'Analytics Excel',
        'contact.services.excel.desc': 'Feuilles de calcul avancées et rapports automatisés',
        'contact.services.visualization': 'Visualisation de Données',
        'contact.services.visualization.desc': 'Histoires de données claires et convaincantes',
        'contact.services.consulting': 'Conseil',
        'contact.services.consulting.desc': 'Stratégie de données et orientation d\'implémentation',
    }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('en')

    useEffect(() => {
        // Check for saved language preference
        if (typeof window !== 'undefined') {
            const savedLanguage = localStorage.getItem('language') as Language
            if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
                setLanguage(savedLanguage)
            }
        }
    }, [])

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang)
        if (typeof window !== 'undefined') {
            localStorage.setItem('language', lang)
        }
    }

    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations[typeof language]] || key
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}

