import './ThemeToggle.css'

function ThemeToggle({ isDarkMode, toggleTheme }) {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {isDarkMode ? '☀ СВІТЛА' : '☾ ТЕМНА'}
    </button>
  )
}

export default ThemeToggle
