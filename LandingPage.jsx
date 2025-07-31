import React, { useState, useEffect } from 'react';
import './LandingPage.css';

function LandingPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add loading animation delay for smooth entrance
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleStartClick = () => {
    // Navigation logic - replace with your routing logic
    console.log('Starting game...');
    // Example: window.location.href = '/game';
    // Or using React Router: navigate('/game');
  };

  return (
    <div className={`landing-page ${isLoaded ? 'loaded' : ''}`}>
      <div className="pixel-background">
        <div className="background-pattern"></div>
        
        {/* Game Title */}
        <header className="game-header">
          <h1 className="pixel-title">PIXEL QUEST</h1>
          <p className="pixel-subtitle">An Adventure Awaits</p>
        </header>

        {/* Decorative Elements */}
        <div className="pixel-decorations">
          <div className="pixel-tree pixel-tree-left"></div>
          <div className="pixel-tree pixel-tree-right"></div>
          <div className="pixel-rocks"></div>
        </div>

        {/* Main Start Button */}
        <div className="start-button-container">
          <button 
            className="pixel-start-button" 
            onClick={handleStartClick}
            aria-label="Start the pixel art adventure game"
          >
            <span className="button-text">START</span>
            <div className="button-glow"></div>
            <div className="button-particles">
              <span className="particle"></span>
              <span className="particle"></span>
              <span className="particle"></span>
              <span className="particle"></span>
            </div>
          </button>
        </div>

        {/* Footer */}
        <footer className="game-footer">
          <p className="pixel-text">Press START to begin your journey</p>
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;