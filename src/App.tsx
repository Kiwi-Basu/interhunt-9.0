import { useState, useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/navbar/Sidebar'
import LowerLine from './components/navbar/LowerLine'
import Hero from './components/home/Hero'
import About from './components/home/About'
import Glimpses from './components/home/Glimpses'
import Company from './components/home/Company'
import PreviousHunt from './components/home/PreviousHunt'
import Faq from './components/home/Faq'

const App = () => {
  const [darkMode, setDarkMode] = useState(true)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'glimpses', 'companies', 'previoushunt', 'faq']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Sidebar darkMode={darkMode} activeSection={activeSection} />

      <main
        className={`ml-16 mt-12 transition-colors duration-300 ${
          darkMode ? 'bg-teams-bg-dark' : 'bg-teams-bg-light'
        }`}
      >
        <LowerLine darkMode={darkMode} activeSection={activeSection} />

        <section id="hero">
          <div>
            <Hero darkMode={darkMode} />
          </div>
        </section>

        <section id="about">
          <div>
            <About darkMode={darkMode} />
          </div>
        </section>

        <section id="glimpses">
          <div>
            <Glimpses darkMode={darkMode} />
          </div>
        </section>

        <section id="companies">
          <div>
            <Company darkMode={darkMode} />
          </div>
        </section>

        <section id="previoushunt">
          <div>
            <PreviousHunt darkMode={darkMode} />
          </div>
        </section>

        <section id="faq">
          <div>
            <Faq darkMode={darkMode} />
          </div>
        </section>
      </main>
    </>
  )
}

export default App