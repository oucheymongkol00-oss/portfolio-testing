import { useEffect, useState } from 'react'

export default function Navbar() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
    if (saved) setTheme(saved)
  }, [])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.dataset.theme = theme
      localStorage.setItem('theme', theme)
    }
  }, [theme])

  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="brand" href="#home">Portfolio</a>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} style={{marginLeft:12,background:'transparent',border:'1px solid rgba(255,255,255,0.04)',padding:'6px 10px',borderRadius:8,color:'var(--muted)'}}>Theme</button>
        </nav>
      </div>
    </header>
  )
}
