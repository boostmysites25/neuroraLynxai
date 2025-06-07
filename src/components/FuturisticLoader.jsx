import React from 'react';

const FuturisticLoader = () => {
  return (
    <div className="spinner-parent">
      <div className="flex flex-col items-center justify-center">
        {/* Main loader with enhanced effects */}
        <div className="relative">
          {/* Outer ring */}
          <div className="w-20 h-20 border-4 border-transparent border-t-secondary border-r-secondary rounded-full animate-spin"></div>
          
          {/* Middle ring */}
          <div className="absolute top-2 left-2 w-16 h-16 border-4 border-transparent border-b-accent border-l-accent rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
          
          {/* Inner ring */}
          <div className="absolute top-4 left-4 w-12 h-12 border-4 border-transparent border-t-primary_text rounded-full animate-spin" style={{animationDuration: '0.8s'}}></div>
          
          {/* Center dot with pulse */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-secondary rounded-full pulse-glow"></div>
        </div>

        {/* Loading text with typing animation */}
        <div className="mt-8 text-center">
          <div className="text-secondary text-lg font-semibold mb-2">
            <span className="typing-animation inline-block">Initializing Neural Network...</span>
          </div>
          
          {/* Progress bar */}
          <div className="w-64 h-1 bg-dark_surface rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-secondary to-accent rounded-full animate-pulse" style={{
              animation: 'progressBar 2s ease-in-out infinite'
            }}></div>
          </div>
        </div>

        {/* Floating data points */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-secondary rounded-full opacity-30"
              style={{
                left: `${20 + (i * 10)}%`,
                top: `${30 + (i % 3) * 20}%`,
                animation: `floatUpDown ${2 + (i * 0.3)}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes progressBar {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default FuturisticLoader;