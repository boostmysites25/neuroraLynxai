import React from 'react';

const SectionDivider = ({ variant = 'default', className = '' }) => {
  const variants = {
    default: (
      <div className={`relative w-full h-20 flex items-center justify-center ${className}`}>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
        <div className="absolute w-4 h-4 bg-secondary rounded-full pulse-glow"></div>
      </div>
    ),
    
    circuit: (
      <div className={`relative w-full h-20 flex items-center justify-center ${className}`}>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
        <div className="absolute flex items-center gap-4">
          <div className="w-2 h-2 bg-secondary rounded-full"></div>
          <div className="w-8 h-px bg-secondary"></div>
          <div className="w-3 h-3 border border-secondary rotate-45"></div>
          <div className="w-8 h-px bg-secondary"></div>
          <div className="w-2 h-2 bg-secondary rounded-full"></div>
        </div>
      </div>
    ),
    
    neural: (
      <div className={`relative w-full h-20 flex items-center justify-center ${className}`}>
        <svg width="200" height="80" viewBox="0 0 200 80" className="opacity-60">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#00a1ff" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          
          {/* Neural network nodes */}
          <circle cx="50" cy="40" r="3" fill="#00a1ff" className="pulse-glow">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="100" cy="20" r="2" fill="#808080">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="100" cy="60" r="2" fill="#808080">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="150" cy="40" r="3" fill="#00a1ff" className="pulse-glow">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" repeatCount="indefinite" />
          </circle>
          
          {/* Neural connections */}
          <line x1="50" y1="40" x2="100" y2="20" stroke="url(#neuralGradient)" strokeWidth="1">
            <animate attributeName="stroke-opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
          </line>
          <line x1="50" y1="40" x2="100" y2="60" stroke="url(#neuralGradient)" strokeWidth="1">
            <animate attributeName="stroke-opacity" values="0.2;0.8;0.2" dur="2.5s" repeatCount="indefinite" />
          </line>
          <line x1="100" y1="20" x2="150" y2="40" stroke="url(#neuralGradient)" strokeWidth="1">
            <animate attributeName="stroke-opacity" values="0.2;0.8;0.2" dur="2.8s" repeatCount="indefinite" />
          </line>
          <line x1="100" y1="60" x2="150" y2="40" stroke="url(#neuralGradient)" strokeWidth="1">
            <animate attributeName="stroke-opacity" values="0.2;0.8;0.2" dur="3.2s" repeatCount="indefinite" />
          </line>
        </svg>
      </div>
    ),
    
    data: (
      <div className={`relative w-full h-20 flex items-center justify-center ${className}`}>
        <div className="flex items-center gap-2">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-secondary rounded-full"
              style={{
                height: `${Math.random() * 30 + 10}px`,
                animation: `dataBar ${1 + Math.random()}s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
            ></div>
          ))}
        </div>
        
        <style jsx>{`
          @keyframes dataBar {
            0%, 100% { opacity: 0.3; transform: scaleY(0.5); }
            50% { opacity: 1; transform: scaleY(1); }
          }
        `}</style>
      </div>
    ),
    
    hexagon: (
      <div className={`relative w-full h-20 flex items-center justify-center ${className}`}>
        <div className="flex items-center gap-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-6 h-6 border border-secondary transform rotate-45"
              style={{
                animation: `hexagonPulse ${2 + i * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            ></div>
          ))}
        </div>
        
        <style jsx>{`
          @keyframes hexagonPulse {
            0%, 100% { 
              border-color: rgba(0, 161, 255, 0.3); 
              transform: rotate(45deg) scale(1); 
            }
            50% { 
              border-color: rgba(0, 161, 255, 1); 
              transform: rotate(45deg) scale(1.2); 
            }
          }
        `}</style>
      </div>
    )
  };

  return variants[variant] || variants.default;
};

export default SectionDivider;