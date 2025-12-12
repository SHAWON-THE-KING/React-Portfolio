import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils';

const ThemeToggol = () => {
    const [isDarkMode, setIsDarkMode] =useState(false);
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }
  return (
    <button onClick={toggleTheme} className={cn("fixed top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
    )}>
        {isDarkMode ? <Sun className='h-6 w-6 text-yellow-400'/> : <Moon className='h-6 w-6 text-blue-900'/>}
    </button>
  )
}

export default ThemeToggol