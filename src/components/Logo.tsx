import React from 'react';

interface LogoProps {
  variant?: 'default' | 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', size = 'md' }) => {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colors = {
    default: 'text-blue-400',
    light: 'text-white',
    dark: 'text-slate-900'
  };

  return (
    <div className="flex items-center gap-2">
      <svg 
        className={`${sizes[size]} ${colors[variant]}`}
        viewBox="0 0 500 500" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          {/* Neural Network Nodes and Lines */}
          <circle cx="250" cy="100" r="30" fill="currentColor"/>
          <circle cx="150" cy="200" r="30" fill="currentColor"/>
          <circle cx="350" cy="200" r="30" fill="currentColor"/>
          <circle cx="250" cy="300" r="30" fill="currentColor"/>
          <circle cx="150" cy="400" r="30" fill="currentColor"/>
          <circle cx="350" cy="400" r="30" fill="currentColor"/>
          <circle cx="250" cy="200" r="30" fill="currentColor"/>

          {/* Connection Lines */}
          <path d="M250 130L150 170" stroke="currentColor" strokeWidth="8"/>
          <path d="M250 130L350 170" stroke="currentColor" strokeWidth="8"/>
          <path d="M150 230L250 270" stroke="currentColor" strokeWidth="8"/>
          <path d="M350 230L250 270" stroke="currentColor" strokeWidth="8"/>
          <path d="M250 330L150 370" stroke="currentColor" strokeWidth="8"/>
          <path d="M250 330L350 370" stroke="currentColor" strokeWidth="8"/>
          <path d="M250 130L250 170" stroke="currentColor" strokeWidth="8"/>
          <path d="M250 230L250 270" stroke="currentColor" strokeWidth="8"/>

          {/* Gear Icon */}
          <path d="M420 250C420 220 400 200 380 200C360 200 340 220 340 250C340 280 360 300 380 300C400 300 420 280 420 250Z" fill="currentColor"/>
          <path d="M380 180V320M340 250H420" stroke="currentColor" strokeWidth="8"/>
        </g>
      </svg>
      <div className="flex flex-col">
        <span className={`font-bold ${size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : size === 'xl' ? 'text-3xl' : 'text-xl'} ${colors[variant]}`}>
          AIMUB Solutions
        </span>
        <span className={`text-sm ${colors[variant]} opacity-80`}>
          Automating Success
        </span>
      </div>
    </div>
  );
};

export default Logo;