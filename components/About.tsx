'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function About() {
    const { t } = useLanguage()

    const formatDescription = (text: string) => {
        return text.split('\n').map((line, index) => {
            if (line.trim() === '') return <br key={index} />
            return <p key={index} className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">{line}</p>
        })
    }

    const skills = [
    { name: "Power BI", icon: "📊", color: "from-blue-500 to-blue-600" },
    { name: "Excel", icon: "📈", color: "from-green-500 to-green-600" },
    { name: "SQL Server", icon: "🗄️", color: "from-purple-500 to-purple-600" },
    { name: "Python", icon: "🐍", color: "from-yellow-500 to-yellow-600" },
    { name: "React", icon: "⚛️", color: "from-cyan-500 to-cyan-600" },
    { name: "Next.js", icon: "🚀", color: "from-gray-500 to-gray-600" },
    { name: "Tailwind CSS", icon: "🎨", color: "from-teal-500 to-teal-600" },
    { name: "Data Visualization", icon: "📊", color: "from-indigo-500 to-indigo-600" },
    { name: "ETL", icon: "🔍", color: "from-orange-500 to-orange-600" },
    { name: "CSV", icon: "📋", color: "from-red-500 to-red-600" },
    { name: "Data Cleaning", icon: "🔧", color: "from-emerald-500 to-emerald-600" }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0
        }
    }

    const skillVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1
        }
    }

    return (
        <section id="about" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
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
                        transition={{ type: "spring", duration: 0.8 }}
                    >
                        {t('about.title')}
                    </motion.h2>
                    <motion.p 
                        className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
                    >
                        {t('about.subtitle')}
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="max-w-5xl mx-auto mb-20"
                    variants={itemVariants}
                >
                    <motion.div 
                        className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-3xl p-12 shadow-xl border border-gray-200 dark:border-gray-700"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <motion.div 
                            className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", duration: 1, delay: 0.3 }}
                        >
                            {formatDescription(t('about.description'))}
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Skills Section */}
                <motion.div variants={itemVariants}>
                    <motion.h3 
                        className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", duration: 0.8, delay: 0.4 }}
                    >
                        {t('about.skills.title')}
                    </motion.h3>
                    
                    <motion.div 
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
                        variants={containerVariants}
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                className="group cursor-pointer"
                                variants={skillVariants}
                                whileHover={{ 
                                    scale: 1.1,
                                    rotateY: 10,
                                    transition: { duration: 0.3 }
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div 
                                    className={`bg-gradient-to-br ${skill.color} rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:shadow-xl`}
                                    whileHover={{ 
                                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                                    }}
                                >
                                    <motion.div 
                                        className="text-4xl mb-3"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        {skill.icon}
                                    </motion.div>
                                    <h4 className="font-semibold text-white text-sm group-hover:text-white transition-colors">
                                        {skill.name}
                                    </h4>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Experience Highlights */}
                <motion.div 
                    className="mt-20 grid md:grid-cols-2 gap-8"
                    variants={containerVariants}
                >
                    <motion.div 
                        className="text-center p-8 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-2xl"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <motion.div 
                            className="text-4xl mb-4"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                        >
                            🎯
                        </motion.div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Data Analysis</h4>
                        <p className="text-gray-600 dark:text-gray-300">Transforming raw data into actionable insights</p>
                    </motion.div>

                    <motion.div 
                        className="text-center p-8 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-2xl"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <motion.div 
                            className="text-4xl mb-4"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                        >
                            🚀
                        </motion.div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Web Development</h4>
                        <p className="text-gray-600 dark:text-gray-300">Building modern, responsive applications</p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}