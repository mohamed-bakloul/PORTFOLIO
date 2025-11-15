'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'

export default function Projects() {
    const { t } = useLanguage()

    const projects = [
        {
            title: "Power BI Data Professionals Dashboard",
            description: "Comprehensive business intelligence dashboard showcasing data analytics capabilities with interactive visualizations and KPI tracking. Implemented advanced DAX measures and created a star schema data model for optimal performance.",
            image: "/assets/Power-BI-data-professionals-dashboard.png",
            technologies: ["Power BI", "DAX", "SQL", "Data Modeling"],
            link: "#",
            category: "Business Intelligence",
            featured: true,
            achievements: [
                "Improved reporting efficiency by 40%",
                "Automated data refresh process",
                "Created 15+ custom visualizations"
            ]
        },
        {
            title: "Excel Analytics Dashboard",
            description: "Advanced Excel dashboard with dynamic charts, pivot tables, and automated reporting for business analytics. Developed custom VBA macros for automated data processing and report generation.",
            image: "/assets/exel dashboeard.png",
            technologies: ["Excel", "VBA", "Pivot Tables", "Charts"],
            link: "#",
            category: "Data Analytics",
            featured: true,
            achievements: [
                "Reduced report generation time by 75%",
                "Implemented real-time data updates",
                "Created user-friendly interface"
            ]
        },
        {
            title: "YouTube Analytics Dashboard",
            description: "Top UK YouTube channels analytics dashboard featuring performance metrics, growth trends, and content insights. Built using advanced data visualization techniques and automated data collection.",
            image: "/assets/top uk youtube.png",
            technologies: ["Data Visualization", "Analytics", "Dashboard Design"],
            link: "#",
            category: "Social Media Analytics",
            featured: true,
            achievements: [
                "Tracked 100+ channels performance",
                "Identified key growth patterns",
                "Automated trend analysis"
            ]
        },

    ]

    // Removed additional projects section

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1
        }
    }

    const defaultTransition = { type: "spring" as const, stiffness: 260, damping: 20 }

    return (
        <section id="projects" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 right-20 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 left-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
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
                    <motion.h2 
                        className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {t('projects.title')}
                    </motion.h2>
                    <motion.p 
                        className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        {t('projects.subtitle')}
                    </motion.p>
                </motion.div>

                {/* Featured Projects */}
                <motion.div 
                    className="grid lg:grid-cols-3 gap-8 mb-20"
                    variants={containerVariants}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group"
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <motion.div 
                                className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700"
                                whileHover={{ 
                                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                                }}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={`${project.title} dashboard screenshot`}
                                        width={400}
                                        height={256}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = '/placeholder-dashboard.svg';
                                        }}
                                    />
                                    <motion.div 
                                        className="absolute top-6 left-6"
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                    >
                                        <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg">
                                            {project.category}
                                        </span>
                                    </motion.div>
                                    <motion.div 
                                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                    />
                                </div>
                                
                                <div className="p-8">
                                    <motion.h3 
                                        className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + index * 0.1 }}
                                    >
                                        {project.title}
                                    </motion.h3>
                                    
                                    <motion.p 
                                        className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                    >
                                        {project.description}
                                    </motion.p>
                                    
                                    <motion.div 
                                        className="flex flex-wrap gap-2 mb-6"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.6 + index * 0.1 }}
                                    >
                                        {project.technologies.map((tech, techIndex) => (
                                            <motion.span 
                                                key={techIndex} 
                                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ type: "spring", stiffness: 400 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </motion.div>
                                    
                                    <motion.button 
                                        className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.7 + index * 0.1 }}
                                    >
                                        {t('projects.viewDetails')}
                                    </motion.button>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* End of Projects Grid */}
            </motion.div>
        </section>
    )
}