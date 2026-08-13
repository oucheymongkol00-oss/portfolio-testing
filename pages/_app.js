import '../styles/globals.css'
import { useEffect } from 'react'

function ThemeInitializer(){
  useEffect(() => {
    if (typeof window === 'undefined') return
    const saved = localStorage.getItem('theme') || 'dark'
    document.documentElement.dataset.theme = saved
  }, [])
  return null
}

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeInitializer />
      <Component {...pageProps} />
    </>
  )
}
