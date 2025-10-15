import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default function Home() {
    return (
        <main className="min-h-screen overflow-hidden">
            <LanguageSwitcher />
            <Hero />
            <Projects />
            <About />
            <Services />
            <Contact />
        </main>
    )
}


