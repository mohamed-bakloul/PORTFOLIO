'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Services() {
    const { t } = useLanguage()

    const services = [
        {
            title: "Frontend Development",
            description: "Building modern, responsive web applications using React, Next.js, and other cutting-edge technologies.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2" fill="none" />
                </svg>
            ),
            color: "from-blue-500 to-blue-600",
            features: ["React/Next.js", "Responsive Design", "Performance Optimization"]
        },
        {
            title: "Data Analytics & Visualization",
            description: "Transform raw data into actionable insights through advanced analytics and compelling visualizations using Power BI, Excel, and other BI tools.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="4" y="4" width="16" height="16" stroke="#7c3aed" strokeWidth="2" fill="none" />
                </svg>
            ),
            color: "from-purple-500 to-purple-600",
            features: ["Dashboard Creation", "KPI Tracking", "Interactive Reports"]
        },
        {
            title: "Full Stack Development",
            description: "Creating end-to-end web applications with modern frontend and backend technologies.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="4" y="4" width="16" height="16" stroke="#10b981" strokeWidth="2" fill="none" />
                </svg>
            ),
            color: "from-emerald-500 to-emerald-600",
            features: ["API Development", "Database Design", "Authentication"]
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0
        }
    }

    const defaultTransition = { type: "spring" as const, stiffness: 260, damping: 20 }

    return (
        <section id="services" className="py-32 mt-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute right-0 top-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"
                />
                <motion.div
                    className="absolute left-0 bottom-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"
                />
            </div>

            <motion.div
                className="max-w-7xl mx-auto px-6 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.div className="text-center mb-20" variants={itemVariants}>
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
                        Services I Offer
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Specialized in turning complex data into clear, actionable insights that drive business growth
                    </p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="group"
                            variants={itemVariants}
                            transition={defaultTransition}
                            whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
                        >
                            <div className="h-full bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                                    {service.icon}
                                </div>
                                
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {service.title}
                                </h3>
                                
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    {service.description}
                                </p>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    {service.features.map((feature, featureIndex) => (
                                        <div 
                                            key={featureIndex}
                                            className="flex items-center space-x-2"
                                        >
                                            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm text-gray-600 dark:text-gray-300">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}