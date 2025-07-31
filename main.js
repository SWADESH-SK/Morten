// Main React component for MORTEN GAMES landing page
const { useState, useEffect } = React;

function LandingPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
            document.getElementById('loading').style.display = 'none';
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleStartClick = () => {
        console.log('Starting game...');
        window.location.href = 'game.html';
    };

    return React.createElement(
        'div',
        { className: `landing-page ${isLoaded ? 'loaded' : ''}` },
        React.createElement(
            'div',
            { className: 'pixel-background' },
            React.createElement('div', { className: 'background-pattern' }),
            
            // Game Title
            React.createElement(
                'header',
                { className: 'game-header' },
                React.createElement('h1', { className: 'pixel-title' }, 'MORTEN GAMES'),
                React.createElement('p', { className: 'pixel-subtitle' }, 'An Adventure Awaits')
            ),

            // Decorative Elements
            React.createElement(
                'div',
                { className: 'pixel-decorations' },
                React.createElement('div', { className: 'pixel-tree pixel-tree-left' }),
                React.createElement('div', { className: 'pixel-tree pixel-tree-right' }),
                React.createElement('div', { className: 'pixel-rocks' })
            ),

            // Main Start Button
            React.createElement(
                'div',
                { className: 'start-button-container' },
                React.createElement(
                    'button',
                    {
                        className: 'pixel-start-button',
                        onClick: handleStartClick,
                        'aria-label': 'Start the pixel art adventure game'
                    },
                    React.createElement('span', { className: 'button-text' }, 'START'),
                    React.createElement('div', { className: 'button-glow' }),
                    React.createElement(
                        'div',
                        { className: 'button-particles' },
                        React.createElement('span', { className: 'particle' }),
                        React.createElement('span', { className: 'particle' }),
                        React.createElement('span', { className: 'particle' }),
                        React.createElement('span', { className: 'particle' })
                    )
                ),
                React.createElement('p', { className: 'pixel-text-below-button' }, 'Press START to begin your journey')
            ),

            // Footer
            React.createElement('footer', { className: 'game-footer' })
        )
    );
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(React.createElement(LandingPage));
});