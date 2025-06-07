import React, { useState } from 'react';

const FuturisticButton = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  disabled = false,
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = `
    relative overflow-hidden px-6 py-3 rounded-lg font-semibold text-sm
    transition-all duration-300 transform cursor-pointer
    border-2 uppercase tracking-wider
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-1'}
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-secondary to-blue-600 text-white
      border-secondary hover:border-blue-400
      shadow-lg hover:shadow-secondary/50
      ${!disabled && 'hover:shadow-2xl'}
    `,
    secondary: `
      bg-transparent text-secondary border-secondary
      hover:bg-secondary/10 hover:text-white
      ${!disabled && 'hover:shadow-lg hover:shadow-secondary/30'}
    `,
    cyberpunk: `
      bg-black text-secondary border-secondary
      hover:bg-gradient-to-r hover:from-black hover:to-gray-900
      ${!disabled && 'hover:shadow-lg hover:shadow-secondary/50'}
    `,
    neon: `
      bg-transparent text-primary_text border-accent
      hover:border-secondary hover:text-secondary
      ${!disabled && 'hover:shadow-lg hover:shadow-secondary/40'}
    `
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {/* Animated background overlay */}
      <div className={`
        absolute inset-0 bg-gradient-to-r from-transparent via-secondary/20 to-transparent
        transform transition-transform duration-500
        ${isHovered ? 'translate-x-full' : '-translate-x-full'}
      `} />
      
      {/* Scan line effect */}
      <div className={`
        absolute top-0 left-0 w-full h-0.5 bg-secondary
        transform transition-transform duration-300
        ${isHovered ? 'translate-x-0' : '-translate-x-full'}
      `} />
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-secondary opacity-60" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-secondary opacity-60" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-secondary opacity-60" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-secondary opacity-60" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
      {/* Pulse effect on hover */}
      {isHovered && (
        <div className="absolute inset-0 animate-ping bg-secondary/20 rounded-lg" />
      )}
    </button>
  );
};

export default FuturisticButton;