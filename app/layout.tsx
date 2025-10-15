import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Data Analyst and Developer | BI Solutions • SQL • Python • Power BI • ETL • Web & App Development',
    description: 'Professional portfolio of Mohamed Bakloul, Data Analyst and Business Intelligence expert specializing in Power BI, Excel dashboards, and data visualization. Based in Morocco with expertise in analytics and data-driven decision making.',
    keywords: [
        'Mohamed Bakloul',
        'Data Analyst',
        'Business Intelligence',
        'Power BI',
        'Excel Dashboard',
        'Data Visualization',
        'Analytics',
        'Morocco',
        'Data Professional',
        'BI Consultant',
        'Data Science',
        'Business Analytics'
    ],
    authors: [{ name: 'Mohamed Bakloul' }],
    creator: 'Mohamed Bakloul',
    publisher: 'Mohamed Bakloul',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://mohamed-bakloul.com',
        title: 'Mohamed Bakloul - Data Analyst & Business Intelligence Professional',
        description: 'Professional portfolio showcasing data analysis projects, Power BI dashboards, and business intelligence solutions.',
        siteName: 'Mohamed Bakloul Portfolio',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Mohamed Bakloul - Data Analyst Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mohamed Bakloul - Data Analyst & Business Intelligence Professional',
        description: 'Professional portfolio showcasing data analysis projects, Power BI dashboards, and business intelligence solutions.',
        images: ['/og-image.jpg'],
    },
    alternates: {
        canonical: 'https://mohamed-bakloul.com',
        languages: {
            'en-US': 'https://mohamed-bakloul.com',
            'fr-FR': 'https://mohamed-bakloul.com/fr',
        },
    },
    verification: {
        google: 'your-google-verification-code',
    },
    category: 'technology',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="canonical" href="https://mohamed-bakloul.com" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#1e40af" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Mohamed Bakloul",
                            "jobTitle": "Data Analyst & Business Intelligence Professional",
                            "description": "Professional Data Analyst specializing in Power BI, Excel dashboards, and business intelligence solutions",
                            "url": "https://mohamed-bakloul.com",
                            "sameAs": [
                                "https://www.linkedin.com/in/mohamed-bakloul/",
                                "https://github.com/mohamed-bakloul"
                            ],
                            "email": "bakloul.mohamed.100@gmail.com",
                            "telephone": "+212 637036722",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "MA",
                                "addressRegion": "Morocco"
                            },
                            "knowsAbout": [
                                "Data Analysis",
                                "Business Intelligence",
                                "Power BI",
                                "Excel Dashboards",
                                "Data Visualization",
                                "Analytics",
                                "Data Science"
                            ],
                            "hasOccupation": {
                                "@type": "Occupation",
                                "name": "Data Analyst",
                                "description": "Analyzing data to help businesses make informed decisions"
                            }
                        })
                    }}
                />
            </head>
            <body className={inter.className}>
                <LanguageProvider>
                    {children}
                </LanguageProvider>
            </body>
        </html>
    )
}

