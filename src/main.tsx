import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { getInitialTheme, applyTheme } from './lib/themeUtils';

// Apply the initial theme before rendering to prevent flash of wrong theme
const initialTheme = getInitialTheme();
applyTheme(initialTheme);

// Add CSS variables for RGB values needed for opacity
document.documentElement.style.setProperty('--bg-secondary-rgb', initialTheme === 'dark' ? '30, 41, 59' : '241, 245, 249');

// Get the root element
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

// Create the root only once
const root = createRoot(rootElement);

// Render your app
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);