import { useState, useEffect } from 'react'
import PersonalInfo from './components/PersonalInfo/PersonalInfo'
import SkillsList from './components/SkillsList/SkillsList'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import ContactForm from './components/ContactForm/ContactForm'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const toggleTheme = () => setIsDarkMode((prev) => !prev)

  const userInfo = {
    name: 'Олександр Корнієнко',
    profession: 'Full-Stack Developer',
    description: 'Студент ХНТУ, група 3ПР1. Спеціалізуюсь на створенні сучасних веб-додатків. Люблю чистий код, суворий дизайн та вирішення складних логічних задач.',
    photoUrl: 'https://placehold.co/150x150/1a1a1a/e0e0e0?text=PHOTO' // Заглушка, можна замінити на своє фото
  }

  const skills = [
    { id: 1, name: 'React', level: 85, description: 'Функціональні компоненти, хуки, контекст.' },
    { id: 2, name: 'JavaScript', level: 90, description: 'ES6+, асинхронність, робота з DOM.' },
    { id: 3, name: 'CSS / Brutalism', level: 80, description: 'Адаптивна верстка, Flexbox, Grid.' },
    { id: 4, name: 'Node.js', level: 65, description: 'Базові знання серверної частини та Express.' },
  ]

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Portfolio</h1>
        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </header>

      <main>
        <PersonalInfo {...userInfo} />
        <SkillsList skills={skills} />
        <ContactForm />
      </main>
    </div>
  )
}

export default App
