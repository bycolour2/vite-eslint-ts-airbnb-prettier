import { useEffect, useState } from 'react';

export const useDarkMode = (): [string, React.Dispatch<any>] => {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.getElementById('root');
    root?.classList.remove(colorTheme);
    root?.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [colorTheme, setTheme]);

  return [colorTheme, setTheme];
};
