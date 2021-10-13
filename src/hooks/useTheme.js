import { useState, useEffect } from 'react'

const useTheme = () => {
  const [theme, setTheme] = useState(window.localStorage.theme !== undefined ? window.localStorage.theme === 'true' : window.matchMedia('(prefers-color-scheme: light)').matches);

  useEffect(() => {
    window.localStorage.setItem('theme', theme)
  }, [theme]);

  const currentTheme = theme ? 'light-theme' : 'dark-theme';

  return [currentTheme, theme, setTheme]
}

export default useTheme
