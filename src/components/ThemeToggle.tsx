import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { getInitialTheme, applyTheme, saveThemePreference } from '../lib/themeUtils';

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Initialize theme based on localStorage or system preference
  useEffect(() => {
    const currentTheme = getInitialTheme();
    setIsDarkMode(currentTheme === 'dark');
    applyTheme(currentTheme);
  }, []);

  // Apply theme changes when isDarkMode changes
  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    applyTheme(theme);
    saveThemePreference(theme);
  }, [isDarkMode]);

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't set a preference
      if (!localStorage.getItem('theme')) {
        setIsDarkMode(e.matches);
      }
    };
    
    // Add listener for system preference changes
    mediaQuery.addEventListener('change', handleChange);
    
    // Clean up
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? 
        <Sun className="text-yellow-400" /> : 
        <Moon className="text-slate-700" />
      }
    </button>
  );
};

export default ThemeToggle;