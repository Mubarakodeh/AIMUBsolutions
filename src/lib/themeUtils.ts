/**
 * Theme utility functions for managing dark/light mode
 */

// Check if system prefers dark mode
export const systemPrefersDarkMode = (): boolean => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
};

// Get theme from localStorage or system preference
export const getInitialTheme = (): 'dark' | 'light' => {
  // Check if localStorage is available
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return 'light';
  }
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme;
  }
  
  // Fall back to system preference
  return systemPrefersDarkMode() ? 'dark' : 'light';
};

// Save theme preference to localStorage
export const saveThemePreference = (theme: 'dark' | 'light'): void => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('theme', theme);
  }
};

// Apply theme to document
export const applyTheme = (theme: 'dark' | 'light'): void => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark-mode');
    document.body.style.backgroundColor = 'var(--bg-primary)';
    document.body.style.color = 'var(--text-primary)';
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', '#0f172a');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = '#0f172a';
      document.head.appendChild(meta);
    }
  } else {
    document.documentElement.classList.remove('dark-mode');
    document.body.style.backgroundColor = 'var(--bg-primary)';
    document.body.style.color = 'var(--text-primary)';
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', '#f8fafc');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = '#f8fafc';
      document.head.appendChild(meta);
    }
  }
  
  // Update RGB values for opacity calculations
  document.documentElement.style.setProperty(
    '--bg-secondary-rgb', 
    theme === 'dark' ? '30, 41, 59' : '241, 245, 249'
  );
};

// Toggle between dark and light mode
export const toggleTheme = (): 'dark' | 'light' => {
  const currentTheme = getInitialTheme();
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  applyTheme(newTheme);
  saveThemePreference(newTheme);
  
  return newTheme;
};

// Set up theme listener for system preference changes
export const setupThemeListener = (callback: (isDark: boolean) => void): (() => void) => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  const handleChange = (e: MediaQueryListEvent) => {
    // Only update if user hasn't set a preference
    if (!localStorage.getItem('theme')) {
      callback(e.matches);
    }
  };
  
  // Add listener for system preference changes
  mediaQuery.addEventListener('change', handleChange);
  
  // Return cleanup function
  return () => mediaQuery.removeEventListener('change', handleChange);
};