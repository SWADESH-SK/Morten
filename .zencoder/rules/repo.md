---
description: Repository Information Overview
alwaysApply: true
---

# Pixel Quest Information

## Summary
A responsive, pixel art-style landing page for a retro adventure game with a forest green color palette and smooth animations. The repository contains a main landing page and a Snake game component, both built with React.

## Structure
- **/** - Main landing page files (index.html, LandingPage.jsx, LandingPage.css)
- **/snake** - Forest Snake game implementation
- **/.zencoder** - Configuration directory for the project

## Language & Runtime
**Language**: JavaScript (React)
**Version**: React 18.2.0
**Build System**: Simple HTML/JS/CSS with CDN-loaded React
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- react: ^18.2.0
- react-dom: ^18.2.0

**Development Dependencies**:
- serve: ^14.2.0
- live-server: ^1.2.2

## Build & Installation
```bash
# Install dependencies
npm install

# Start development server
npm start

# Or use live-server for hot reload
npm run dev
```

## Main Components

### Landing Page
**Entry Point**: index.html
**Main Files**:
- index.html - HTML structure with inline React component
- LandingPage.jsx - React component (referenced in index.html)
- LandingPage.css - Styling with animations and responsive design

**Features**:
- Responsive design for desktop, tablet, and mobile
- Pixel art aesthetic with forest green color palette
- Animated background and decorative elements
- Interactive start button with sophisticated hover animations

### Snake Game
**Entry Point**: snake/index.html
**Technology**: React with Tailwind CSS (loaded via CDN)
**Features**:
- Grid-based snake game with pixel art styling
- Multiple egg types with different effects
- Bomb obstacles and lethal bombs
- Score tracking and game state management
- Sound effects using Web Audio API
- Responsive controls

## Browser Support
- Modern browsers (Chrome 80+, Firefox 74+, Safari 13+, Edge 80+)
- Mobile-optimized with touch controls
- High-DPI display support
- Accessibility features including keyboard navigation and reduced motion support

## Performance
- Critical CSS inlined for faster first paint
- Hardware-accelerated animations
- Optimized for 60fps performance
- Responsive breakpoints for different device sizes