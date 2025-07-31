// Mobile fullscreen and landscape mode handler
(function() {
  // Create overlay and button elements
  const overlay = document.createElement('div');
  overlay.id = 'fullscreen-overlay';
  
  const button = document.createElement('button');
  button.id = 'fullscreen-button';
  button.textContent = 'TAP TO PLAY FULLSCREEN';
  
  const rotateMsg = document.createElement('div');
  rotateMsg.id = 'rotate-message';
  rotateMsg.textContent = 'Please rotate your device';
  
  const exitButton = document.createElement('button');
  exitButton.id = 'exit-button';
  exitButton.textContent = 'EXIT TO GAMES';
  
  // Style the exit button to match fullscreen button
  exitButton.style.padding = '15px 30px';
  exitButton.style.fontSize = '18px';
  exitButton.style.fontWeight = 'bold';
  exitButton.style.fontFamily = 'Courier New, monospace';
  exitButton.style.backgroundColor = '#4a7c4a';
  exitButton.style.color = '#a8c4a8';
  exitButton.style.border = '3px solid #6b8e6b';
  exitButton.style.borderRadius = '0';
  exitButton.style.cursor = 'pointer';
  exitButton.style.boxShadow = '4px 4px 0 #0f2a0f';
  exitButton.style.transition = 'all 0.3s ease';
  exitButton.style.marginTop = '15px';
  exitButton.style.textShadow = '2px 2px 0px #0f2a0f';
  
  // Add elements to the document
  document.body.appendChild(overlay);
  overlay.appendChild(button);
  overlay.appendChild(exitButton);
  overlay.appendChild(rotateMsg);
  
  // Variables to track state
  let isFullscreen = false;
  let gameStarted = false;
  
  // Function to enter fullscreen mode
  function enterFullscreen() {
    const element = document.documentElement;
    
    // Try all possible methods to enter fullscreen
    const requestMethods = [
      'requestFullscreen',
      'webkitRequestFullscreen',
      'mozRequestFullScreen',
      'msRequestFullscreen'
    ];
    
    requestMethods.forEach(method => {
      if (element[method] && !isFullscreen) {
        element[method]();
        isFullscreen = true;
      }
    });
    
    // Try to lock orientation to landscape
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock('landscape')
        .catch(e => console.log('Orientation lock failed:', e));
    }
    
    // Start the game
    if (!gameStarted) {
      startGame();
      gameStarted = true;
    }
    
    // Hide overlay after a short delay
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 500);
  }
  
  // Function to start the game
  function startGame() {
    // Hide the overlay
    overlay.style.display = 'none';
    
    // Initialize the GDevelop game
    console.log('Game started in fullscreen mode');
    
    // Call the game initialization function
    if (typeof window.initializeGame === 'function') {
      window.initializeGame();
    }
    
    // Make sure the game canvas is visible after initialization
    setTimeout(() => {
      const gameCanvas = document.querySelector('canvas');
      if (gameCanvas) {
        gameCanvas.style.display = 'block';
      }
    }, 100);
  }
  
  // Function to exit to games page
  function exitToGames() {
    window.location.href = '../game.html';
  }
  
  // Function to check if device is in portrait mode
  function isPortrait() {
    return window.matchMedia("(orientation: portrait)").matches;
  }
  
  // Function to update UI based on orientation and fullscreen state
  function updateUI() {
    if (!isFullscreen || isPortrait()) {
      overlay.style.display = 'flex';
      
      if (isPortrait()) {
        rotateMsg.style.display = 'block';
      } else {
        rotateMsg.style.display = 'none';
      }
    } else {
      overlay.style.display = 'none';
    }
  }
  
  // iOS-specific fullscreen handling
  function handleIOSFullscreen() {
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      // Add iOS viewport fix
      const viewportMeta = document.querySelector('meta[name=viewport]');
      if (viewportMeta) {
        viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover, minimal-ui';
      }
      
      // Add status bar meta tag if not present
      if (!document.querySelector('meta[name=apple-mobile-web-app-status-bar-style]')) {
        const metaTag = document.createElement('meta');
        metaTag.name = 'apple-mobile-web-app-status-bar-style';
        metaTag.content = 'black-translucent';
        document.head.appendChild(metaTag);
      }
      
      // Force body to take full height
      document.body.style.height = `${window.innerHeight}px`;
      window.addEventListener('resize', () => {
        document.body.style.height = `${window.innerHeight}px`;
      });
    }
  }
  
  // Event listeners
  button.addEventListener('click', enterFullscreen);
  button.addEventListener('touchend', enterFullscreen);
  
  // Exit button event listeners
  exitButton.addEventListener('click', exitToGames);
  exitButton.addEventListener('touchend', exitToGames);
  
  // Exit button hover effects
  exitButton.addEventListener('mouseenter', function() {
    exitButton.style.transform = 'translateY(-4px)';
    exitButton.style.boxShadow = '8px 8px 0 #0f2a0f, 0 0 15px rgba(139, 195, 74, 0.4)';
    exitButton.style.backgroundColor = '#66bb6a';
    exitButton.style.color = '#ffffff';
    exitButton.style.borderColor = '#8bc34a';
    exitButton.style.textShadow = '0 0 10px rgba(139, 195, 74, 0.8)';
  });
  
  exitButton.addEventListener('mouseleave', function() {
    exitButton.style.transform = 'translateY(0)';
    exitButton.style.boxShadow = '4px 4px 0 #0f2a0f';
    exitButton.style.backgroundColor = '#4a7c4a';
    exitButton.style.color = '#a8c4a8';
    exitButton.style.borderColor = '#6b8e6b';
    exitButton.style.textShadow = '2px 2px 0px #0f2a0f';
  });
  
  exitButton.addEventListener('mousedown', function() {
    exitButton.style.transform = 'translateY(2px)';
    exitButton.style.boxShadow = '2px 2px 0 #0f2a0f';
  });
  
  exitButton.addEventListener('mouseup', function() {
    exitButton.style.transform = 'translateY(-4px)';
    exitButton.style.boxShadow = '8px 8px 0 #0f2a0f, 0 0 15px rgba(139, 195, 74, 0.4)';
  });
  
  // Also try to enter fullscreen on any touch on the document
  document.addEventListener('touchend', function initialTouch(e) {
    enterFullscreen();
    document.removeEventListener('touchend', initialTouch);
  }, { once: true });
  
  // Listen for fullscreen changes
  const fullscreenChangeEvents = [
    'fullscreenchange',
    'webkitfullscreenchange',
    'mozfullscreenchange',
    'MSFullscreenChange'
  ];
  
  fullscreenChangeEvents.forEach(eventName => {
    document.addEventListener(eventName, function() {
      isFullscreen = !!(document.fullscreenElement || 
                      document.webkitFullscreenElement || 
                      document.mozFullScreenElement || 
                      document.msFullscreenElement);
      updateUI();
    });
  });
  
  // Listen for orientation changes
  window.addEventListener('orientationchange', updateUI);
  window.addEventListener('resize', updateUI);
  
  // Initialize iOS handling
  handleIOSFullscreen();
  
  // Initial UI update
  updateUI();
})();