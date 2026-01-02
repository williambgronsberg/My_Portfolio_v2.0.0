# William Berge Groensberg - Portfolio

```
 ____   ___  ____ _____ _____ ___  _     ___ ___  
|  _ \ / _ \|  _ \_   _|  ___/ _ \| |   |_ _/ _ \ 
| |_) | | | | |_) || | | |_ | | | | |    | | | | |
|  __/| |_| |  _ < | | |  _|| |_| | |___ | | |_| |
|_|    \___/|_| \_\|_| |_|   \___/|_____|___\___/ 
                                                    
```

A modern, responsive portfolio website showcasing web development projects, photography, 
and personal productivity tools. Built with clean HTML, CSS, and JavaScript.

---

## Table of Contents

```
┌────────────────────────────────────────┐
│  1.  Quick Start                       │
│  2.  Project Structure                 │
│  3.  Features Overview                 │
│  4.  Tech Stack                        │
│  5.  Pages Documentation               │
│  6.  Installation & Setup              │
│  7.  Configuration                     │
│  8.  Customization Guide               │
│  9.  Portfolio Projects                │
│  10. Photography Section               │
│  11. 75 Hard Challenge Tracker         │
│  12. Personal Hub Dashboard            │
│  13. Weather Widget                    │
│  14. Navigation System                 │
│  15. Animation System                  │
│  16. Firebase Integration              │
│  17. API Documentation                 │
│  18. Browser Support                   │
│  19. Performance Optimization          │
│  20. Deployment                        │
│  21. Troubleshooting                   │
│  22. Contributing                      │
│  23. License                           │
│  24. Contact                           │
└────────────────────────────────────────┘
```

---

## Quick Start

```
  ╔═══════════════════════════════════════╗
  ║  STEP 1: Clone the repository         ║
  ║  STEP 2: Open index.html              ║
  ║  STEP 3: Start developing!            ║
  ╚═══════════════════════════════════════╝
```

**No build process required. No npm install. Pure vanilla HTML, CSS, and JavaScript.**

```bash
git clone https://github.com/sneakyturtle270508/My_Portfolio_v2.0.0
cd My_Portfolio_v2.0.0
open index.html
```

Or serve locally:
```bash
# Python 3
python -m http.server 8000

# PHP
php -S localhost:8000

# Node.js
npx http-server
```

Then visit: `http://localhost:8000`

---

## Project Structure

```
portfolio/
│
├── .vscode/
│   └── settings.json           VS Code configuration
│
├── index.html                  Main portfolio landing page
├── style.css                   Global styles & animations
├── script.js                   Menu interactions & overlays
│
├── 75dayhard.html              Fitness challenge tracker
├── aboutmeside.html            Standalone about page
├── blackjack.html              Blackjack game (PyScript)
├── hub.html                    Minimalist hub variant
├── man.html                    Personal dashboard hub
├── nam.html                    Weather widget component
├── new-page.html               Additional content page
├── test.html                   Navigation prototype
├── TESTING.HTML                Testing version of main page
│
├── assets/
│   ├── img/
│   │   ├── one.mp4             Project video 1
│   │   ├── adobe.svg           Adobe icon
│   │   ├── css.svg             CSS3 icon
│   │   ├── html.svg            HTML5 icon
│   │   ├── javascript.png      JavaScript icon
│   │   ├── accessibility.svg   Accessibility icon
│   │   ├── DSC_0072.JPG        Photography sample 1
│   │   └── [other images]      Various project images
│   └── favicon.ico             Site favicon
│
└── README.md                   This file
```

---

## Features Overview

```
╔════════════════════════════════════════════════════════════╗
║  RESPONSIVE DESIGN                                         ║
║  Fully responsive layout that adapts to all screen sizes   ║
║  Mobile-first approach with desktop enhancements           ║
╠════════════════════════════════════════════════════════════╣
║  ANIMATED NAVIGATION                                       ║
║  Morphing hamburger menu with smooth transitions           ║
║  Liquid glass effect with border animations                ║
║  Staggered menu item animations                            ║
╠════════════════════════════════════════════════════════════╣
║  PROJECT SHOWCASES                                         ║
║  Interactive video previews with hover overlays            ║
║  Detailed project information on interaction               ║
║  Live demos and GitHub links                               ║
╠════════════════════════════════════════════════════════════╣
║  PHOTOGRAPHY SECTION                                       ║
║  Professional image gallery                                ║
║  Grayscale to color hover effects                          ║
║  Responsive grid layout                                    ║
╠════════════════════════════════════════════════════════════╣
║  PERSONAL HUB                                              ║
║  Real-time weather integration                             ║
║  Battery status monitoring                                 ║
║  Break schedule tracker                                    ║
║  Quick action dashboard                                    ║
╠════════════════════════════════════════════════════════════╣
║  75 HARD TRACKER                                           ║
║  Daily challenge checklist                                 ║
║  Water intake logging                                      ║
║  Firebase cloud synchronization                            ║
║  Google Sign-In authentication                             ║
╠════════════════════════════════════════════════════════════╣
║  AOS ANIMATIONS                                            ║
║  Scroll-triggered animations                               ║
║  Fade-up, fade-left, fade-right effects                   ║
║  Once-only animation triggers                              ║
╠════════════════════════════════════════════════════════════╣
║  VARIABLE FONT ANIMATIONS                                  ║
║  Breathing text effect on hero section                     ║
║  Dynamic font weight transitions                           ║
║  Custom variable font integration                          ║
╚════════════════════════════════════════════════════════════╝
```

---

## Tech Stack

```
┌─────────────────────┬────────────────────────┬─────────────────────┐
│   CORE FRONTEND     │    LIBRARIES           │    BACKEND          │
├─────────────────────┼────────────────────────┼─────────────────────┤
│ • HTML5             │ • jQuery 3.5.1         │ • Firebase Auth     │
│ • CSS3              │ • AOS (Animate On      │ • Firebase Firestore│
│ • JavaScript ES6    │   Scroll) Library      │                     │
│                     │ • Font Awesome 6       │                     │
│                     │ • PyScript (Blackjack) │                     │
├─────────────────────┼────────────────────────┼─────────────────────┤
│   FONTS             │    APIS                │    TOOLS            │
├─────────────────────┼────────────────────────┼─────────────────────┤
│ • Google Fonts:     │ • OpenWeatherMap API   │ • VS Code           │
│   - Karla           │ • Firebase Realtime    │ • Git               │
│   - Nanum Pen       │   Database API         │                     │
│   - Playfair Display│ • Google Auth API      │                     │
│   - Comic Neue      │                        │                     │
│   - Style Script    │                        │                     │
│   - Inconsolata     │                        │                     │
│   - TF Mix VF       │                        │                     │
└─────────────────────┴────────────────────────┴─────────────────────┘
```

---

## Pages Documentation

### 1. index.html - Main Portfolio

```
┌─[ Main Landing Page ]────────────────────────────────────┐
│                                                           │
│  HEADER SECTION                                          │
│  ├─ Hero with animated variable font                    │
│  ├─ Breathing text animation                            │
│  └─ Scroll indicator                                    │
│                                                           │
│  PROJECTS SECTION                                        │
│  ├─ Nerdy-cmd: Terminal portfolio interface             │
│  ├─ AI Article: Technical writing sample                │
│  ├─ Next Break: Break time tracker                      │
│  └─ Additional projects                                 │
│                                                           │
│  PHOTOGRAPHY SECTION                                     │
│  ├─ Professional image showcase                         │
│  ├─ Hover effects (grayscale to color)                  │
│  └─ Responsive grid layout                              │
│                                                           │
│  ABOUT ME SECTION                                        │
│  ├─ Bio and introduction                                │
│  ├─ Animated "About Me" heading                         │
│  └─ Skills toolkit display                              │
│                                                           │
│  FOOTER                                                  │
│  └─ Credits and contact link                            │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

**Key Features:**
- Responsive breakpoints at 540px, 780px, 1080px
- AOS fade animations on scroll
- Video autoplay with fallback images
- Interactive project overlays
- Mobile-optimized menu system
- Custom scroll lock for navigation

**Code Structure:**
```html
<!-- Header with Variable Font Animation -->
<header data-aos="fade-up">
  <div class="breathe-animation">
    <h1>William B. Groensberg</h1>
  </div>
</header>

<!-- Projects with Video Backgrounds -->
<section class="portfolioProjects">
  <div class="portfolioOne">
    <video autoplay loop muted playsinline>
      <source src="assets/img/one.mp4" type="video/mp4" />
    </video>
    <div class="overlayOne">
      <!-- Project details -->
    </div>
  </div>
</section>
```

---

### 2. 75dayhard.html - Fitness Challenge Tracker

```
┌─[ 75 Hard Challenge Tracker ]────────────────────────────┐
│                                                           │
│  AUTHENTICATION                                          │
│  ├─ Google Sign-In button                               │
│  ├─ Firebase authentication                             │
│  └─ Sign out functionality                              │
│                                                           │
│  PROGRESS TRACKING                                       │
│  ├─ Day counter (0-75)                                   │
│  ├─ Days remaining display                              │
│  └─ Current date tracking                               │
│                                                           │
│  DAILY CHECKLIST                                         │
│  ├─ Follow diet (no cheat meals)                        │
│  ├─ Two workouts (one outdoor)                          │
│  ├─ Drink 3L+ water                                     │
│  ├─ Read 10 pages                                       │
│  └─ Take progress picture                               │
│                                                           │
│  WATER INTAKE TRACKING                                   │
│  ├─ Add water in deciliters                             │
│  ├─ Daily total display                                 │
│  ├─ Last addition timestamp                             │
│  └─ Clear function                                      │
│                                                           │
│  DATA PERSISTENCE                                        │
│  ├─ Local storage fallback                              │
│  ├─ Firebase cloud sync                                 │
│  └─ Automatic daily reset                               │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

**Firebase Configuration (Example placeholder)**:
> Do NOT commit real API keys to public repos. Replace the values below with your own config from the Firebase console and keep them private when needed (use environment variables or a secrets manager for production).

```javascript
const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
  measurementId: "G-XXXXXXX"
};
```

**Data Structure:**
```javascript
{
  checklist: [false, false, false, false, false],
  dayCount: 0,
  water: 0,
  lastSavedDate: "2025-12-10"
}
```

**Key Functions:**
- `buildChecklistUI()` - Renders checklist items
- `saveLocal()` - Persists to localStorage
- `loadRemote()` - Fetches from Firebase
- `saveRemote()` - Syncs to Firebase
- `checkNewDay()` - Handles day transitions
- `updateUI()` - Refreshes display

**Reset Logic:**
```javascript
function checkNewDay() {
  const today = new Date().toDateString();
  if (lastSavedDate !== today) {
    if (!checklistState.every(Boolean) && lastSavedDate) {
      alert('You missed a day — progress resets to Day 1!');
      dayCount = 0;
    } else {
      dayCount = Math.min(DAYS, dayCount + 1);
    }
    checklistState = [false, false, false, false, false];
    waterTotal = 0;
    lastSavedDate = today;
  }
}
```

---

### 3. man.html - Personal Hub Dashboard

```
┌─[ Personal Dashboard Hub ]───────────────────────────────┐
│                                                           │
│  NAVIGATION SIDEBAR                                      │
│  ├─ Fixed left sidebar with glass effect                │
│  ├─ Logo/avatar display                                 │
│  └─ Quick access links                                  │
│                                                           │
│  BATTERY MONITOR CARD                                    │
│  ├─ Real-time battery percentage                        │
│  ├─ Charging status indicator                           │
│  ├─ Time remaining display                              │
│  ├─ Animated progress bars (5 segments)                 │
│  └─ Charging animation when plugged in                  │
│                                                           │
│  BREAK SCHEDULE CARD                                     │
│  ├─ Next break time display                             │
│  ├─ Time until next break                               │
│  ├─ Predefined break schedule                           │
│  └─ Auto-updates every minute                           │
│                                                           │
│  LIQUID GLASS DESIGN                                     │
│  ├─ Frosted glass effect (backdrop-filter: blur)        │
│  ├─ Semi-transparent backgrounds                        │
│  └─ Modern card-based layout                            │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

**Break Schedule:**
```javascript
const breaks = [
  "08:45", 
  "09:35", 
  "10:30", 
  "11:20",
  "12:55", 
  "13:45",
  "14:40"
];
```

**Battery API Integration:**
```javascript
navigator.getBattery().then(function(battery) {
  const level = Math.round(battery.level * 100);
  const charging = battery.charging;
  const chargingTime = battery.chargingTime;
  const dischargingTime = battery.dischargingTime;
  
  // Update UI based on battery state
  updateBatteryDisplay(level, charging, chargingTime);
});
```

**Design Features:**
- Liquid glass morphism effects
- Dynamic charging animations
- Responsive card layout
- Real-time data updates
- Mobile-friendly (disabled below 768px)

---

### 4. hub.html - Minimalist Hub Variant

```
┌─[ Minimalist Hub ]───────────────────────────────────────┐
│                                                           │
│  WEATHER CARD                                            │
│  ├─ Animated weather icons (sun, clouds, rain, etc.)    │
│  ├─ Temperature in Celsius                              │
│  ├─ Location display                                    │
│  └─ Current date                                        │
│                                                           │
│  TIME CARD                                               │
│  ├─ Current time (HH:MM format)                         │
│  ├─ Current date (long format)                          │
│  └─ Local timezone                                      │
│                                                           │
│  ADDITIONAL CARDS                                        │
│  ├─ Calendar/Events                                     │
│  ├─ Music player status                                 │
│  ├─ Quick notes                                         │
│  ├─ Health/fitness stats                                │
│  ├─ Productivity score                                  │
│  └─ Monthly expenses                                    │
│                                                           │
│  QUICK ACTIONS                                           │
│  ├─ Links                                               │
│  ├─ Files                                               │
│  ├─ Settings                                            │
│  ├─ Dark mode toggle                                    │
│  ├─ Analytics                                           │
│  └─ Notifications                                       │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

**Brick Layout Pattern:**
```css
/* First row: wide (2/3) + narrow (1/3) */
.brick-row:nth-child(odd) .card:first-child { flex: 2; }
.brick-row:nth-child(odd) .card:last-child { flex: 1; }

/* Second row: narrow (1/3) + wide (2/3) */
.brick-row:nth-child(even) .card:first-child { flex: 1; }
.brick-row:nth-child(even) .card:last-child { flex: 2; }
```

**Card Themes:**
- Yellow: Default gradient
- Purple: #E8D8FF radial gradient
- Blue: #D8EFFF radial gradient
- Green: #D8FFE8 radial gradient
- Pink: #FFD8E8 radial gradient
- Orange: #FFE8D8 radial gradient

---

### 5. nam.html - Weather Widget

```
┌─[ Standalone Weather Widget ]────────────────────────────┐
│                                                           │
│  WEATHER DISPLAY                                         │
│  ├─ Animated weather icons                              │
│  ├─ Temperature display                                 │
│  ├─ Location (city, country)                            │
│  ├─ Current date                                        │
│  └─ Weather description                                 │
│                                                           │
│  WEATHER CONDITIONS                                      │
│  ├─ Clear (sun with rays)                               │
│  ├─ Clouds (animated clouds)                            │
│  ├─ Rain (water droplets)                               │
│  ├─ Snow (snowflakes)                                   │
│  ├─ Thunder (lightning bolts)                           │
│  └─ Fog/Mist (gradient effect)                          │
│                                                           │
│  GEOLOCATION                                             │
│  ├─ Auto-detect user location                           │
│  ├─ Request permission                                  │
│  └─ Fallback to Lysaker, Norway                         │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

**Weather Icon Mapping:**
```javascript
const iconMap = {
  '01d': 'sun',      // Clear day
  '01n': 'moon',     // Clear night
  '02d': 'sun+cloud', // Few clouds day
  '02n': 'cloud',    // Few clouds night
  '03d': 'clouds',   // Scattered clouds
  '09d': 'rain',     // Shower rain
  '10d': 'sun+rain', // Rain
  '11d': 'thunder',  // Thunderstorm
  '13d': 'snow',     // Snow
  '50d': 'mist'      // Mist
};
```

**API Call:**
```javascript
const response = await fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
);
```

---

### 6. blackjack.html - Card Game

```
┌─[ Blackjack Game ]───────────────────────────────────────┐
│                                                           │
│  GAME INTERFACE                                          │
│  ├─ Card display with ASCII art                         │
│  ├─ Dealer hand (one card hidden)                       │
│  ├─ Player hand                                          │
│  └─ Chip balance display                                │
│                                                           │
│  BETTING SYSTEM                                          │
│  ├─ Place bet input                                     │
│  ├─ Starting balance: 1000 chips                        │
│  └─ Win/lose chip tracking                              │
│                                                           │
│  GAME LOGIC                                              │
│  ├─ Hit (draw card)                                     │
│  ├─ Stand (end turn)                                    │
│  ├─ Dealer AI (hits on <17)                            │
│  └─ Win/lose determination                              │
│                                                           │
│  PYSCRIPT INTEGRATION                                    │
│  ├─ Python in browser                                   │
│  ├─ Game logic in Python                                │
│  └─ DOM manipulation                                    │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

**Technologies:**
- PyScript for Python in browser
- ASCII art card rendering
- Event-driven game flow

---

### 7. new-page.html - Hub Embed

```
┌─[ New Page Template ]────────────────────────────────────┐
│                                                           │
│  PURPOSE                                                 │
│  ├─ Demonstrates navigation transition                  │
│  ├─ Embeds man.html via iframe                          │
│  └─ Menu state management                               │
│                                                           │
│  NAVIGATION BEHAVIOR                                     │
│  ├─ Opens with menu checked (visible)                   │
│  ├─ Auto-closes after 100ms                             │
│  ├─ Switches menu items after close                     │
│  └─ Shows "HOME" link after first close                 │
│                                                           │
│  IFRAME EMBEDDING                                        │
│  └─ <iframe src="man.html" height="1000vh">             │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

**Menu Switching Logic:**
```javascript
$(document).ready(function() {
  setTimeout(function() {
    $("#menu-icon").prop("checked", false);
    setTimeout(function() {
      $('body').addClass('menu-closed-once');
    }, 2000);
  }, 100);
});
```

---

### 8. test.html - Hub Prototype

Full implementation of the personal hub with:
- Complete weather integration
- All card layouts
- Interactive quick actions
- Responsive brick pattern
- Weather icon animations

---

### 9. aboutmeside.html - About Page

Standalone about me section with:
- Variable font animation
- Biography text
- Skills display
- Same navigation system as main page

---

### 10. TESTING.HTML - Main Page Variant

Testing version of index.html with identical structure for development purposes.

---

## Installation & Setup

### Prerequisites

```
┌─────────────────────────────────────┐
│  REQUIRED                           │
├─────────────────────────────────────┤
│  • Modern web browser               │
│  • Text editor (VS Code recommended)│
│  • Git (optional)                   │
└─────────────────────────────────────┘
```

### Step-by-Step Installation

**1. Clone Repository**
```bash
git clone https://github.com/sneakyturtle270508/My_Portfolio_v2.0.0
cd My_Portfolio_v2.0.0
```

**2. Open in Browser**
```bash
# Double-click index.html
# OR use a local server
```

**3. Development Server (Optional)**
```bash
# Python
python -m http.server 8000

# Node.js
npx http-server -p 8000

# PHP
php -S localhost:8000
```

**4. Configure APIs (Optional)**

For weather functionality:
```javascript
// In nam.html and hub.html
const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';
```

For 75 Hard tracker:
```javascript
// In 75dayhard.html
const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  // ... other config
};
```

---

## Configuration

### OpenWeatherMap API Setup

```
┌─[ Weather API Configuration ]────────────────────────────┐
│                                                           │
│  STEP 1: Get API Key                                     │
│  ├─ Visit: https://openweathermap.org/api               │
│  ├─ Create free account                                 │
│  ├─ Generate API key                                    │
│  └─ Copy your API key                                   │
│                                                           │
│  STEP 2: Add to Files                                    │
│  ├─ Open nam.html                                        │
│  ├─ Open hub.html                                        │
│  ├─ Open test.html                                       │
│  └─ Replace placeholder API key                          │
│                                                           │
│  STEP 3: Test                                            │
│  └─ Open file in browser and check weather display      │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

**Example Configuration:**
```javascript
const API_KEY = 'your_api_key_here';

async function getWeatherData(lat, lon) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
  return await response.json();
}
```

### Firebase Setup

```
┌─[ Firebase Configuration ]───────────────────────────────┐
│                                                           │
│  STEP 1: Create Firebase Project                        │
│  ├─ Visit: https://console.firebase.google.com          │
│  ├─ Click "Add project"                                 │
│  ├─ Name your project                                   │
│  └─ Enable Google Analytics (optional)                  │
│                                                           │
│  STEP 2: Enable Authentication                          │
│  ├─ Go to Authentication                                │
│  ├─ Click "Get Started"                                 │
│  ├─ Enable "Google" sign-in method                      │
│  └─ Configure OAuth consent screen                      │
│                                                           │
│  STEP 3: Create Firestore Database                      │
│  ├─ Go to Firestore Database                            │
│  ├─ Click "Create database"                             │
│  ├─ Start in production mode                            │
│  └─ Choose location                                     │
│                                                           │
│  STEP 4: Get Configuration                              │
│  ├─ Go to Project Settings                              │
│  ├─ Scroll to "Your apps"                               │
│  ├─ Click web icon (</>)                                │
│  └─ Copy configuration object                           │
│                                                           │
│  STEP 5: Update 75dayhard.html                          │
│  └─ Replace firebaseConfig object                       │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

**Firestore Security Rules:**
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

---

## Customization Guide

### Changing Colors

**CSS Variables:**
```css
:root {
  /* Main colors */
  --primary-color: #71deff;
  --accent-color: #e96269;
  --background: #f4f4f4;
  
  /* Navigation */
  --nav-bg: #353746;
  --nav-text: #ececee;
  
  /* Project overlays */
  --overlay-bg: rgba(0, 0, 0, 0.8);
}
```

**Find and Replace:**
```
Old Color     →  New Color
#71deff       →  Your primary color
#e96269       →  Your accent color
#353746       →  Your nav background
```

### Adding Projects

**Template Structure:**
```html
<div class="portfolioNew">
  <video autoplay loop muted playsinline class="videoNew">
    <source src="assets/img/your-video.mp4" type="video/mp4" />
  </video>
  
  <div class="overlayNew">
    <i class="fas fa-times fa-2x closeOverlayNew hideDesktop"></i>
    
    <h3>Project Title</h3>
    <p>
      Project description explaining what it does and why it's cool.
    </p>
    
    <ul class="toolsUsed">
      <li>HTML5</li>
      <li>CSS3</li>
      <li>JavaScript</li>
    </ul>
    
    <div class="viewProject">
      <a href="https://live-demo.com" target="_blank" class="button">
        view live
      </a>
      <a href="https://github.com/you/repo" target="_blank" class="button">
        github
      </a>
    </div>
  </div>
</div>
```

**CSS for New Project:**
```css
.portfolioNew {
  width: 100%;
  height: 400px;
  margin-bottom: 10%;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlayNew {
  /* Copy from .overlayOne styles */
}

@media (min-width: 540px) {
  .portfolioNew:hover .overlayNew {
    display: flex;
    opacity: 1;
  }
}
```

**JavaScript for Overlay:**
```javascript
$(".videoNew").click(function() {
  $(".overlayNew").toggleClass("active");
});

$(".closeOverlayNew").click(function() {
  $(".overlayNew").toggleClass("active");
});
```

### Modifying Navigation

**Add Menu Item:**
- Edit the HTML navigation list inside the header or navigation partial.
- Add an <li><a href="new-page.html">New Page</a></li> entry where appropriate.
- Update any JS listeners that track menu indices to include the new item.
- Update AOS or other animation triggers if you want the new menu item to have a staggered entrance.

**Example:**
```html
<nav>
  <ul class="main-nav">
    <li><a href="index.html">Home</a></li>
    <li><a href="projects.html">Projects</a></li>
    <li><a href="aboutmeside.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
    <!-- NEW -->
    <li><a href="new-page.html">New Page</a></li>
  </ul>
</nav>
```

**Menu Animations:**
```css
.main-nav li {
  opacity: 0;
  transform: translateY(-6px);
  transition: opacity 320ms ease, transform 320ms ease;
}
.main-nav li.show {
  opacity: 1;
  transform: translateY(0);
}
```

---

## Accessibility

Accessibility is a priority. Follow these concrete steps to improve a11y across the site:

- Ensure all interactive elements are reachable via keyboard (Tab key).
- Use semantic elements: header, nav, main, section, article, footer.
- Provide descriptive alt attributes for images and aria-labels where necessary.
- Ensure focus outlines are visible and high-contrast.
- Use color contrast checks (WCAG AA minimum of 4.5:1 for normal text).
- Respect prefers-reduced-motion:
```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
```
- Provide skip links at the top of the page for screen-reader users:
```html
<a class="skip-link" href="#main">Skip to main content</a>
```

---

## Testing & Debugging

Recommended checks prior to publishing:

- Cross-browser tests: Chrome, Firefox, Safari, Edge.
- Mobile tests: iOS Safari, Android Chrome.
- Lighthouse audits: Performance, Accessibility, Best Practices, SEO.
- Manual keyboard navigation: ensure no trap focus.
- Console logs: fix JS errors and warnings.
- Responsive images: confirm srcset and sizes attributes work as expected.

Quick debug tips:
- CSS not applying? Check file paths and clear cache.
- JS not running? Confirm script is loaded at the end of body or use DOMContentLoaded.
- Firebase errors? Check project config and console rules/permissions.

---

## Performance Optimization

- Lazy-load offscreen images using loading="lazy" or IntersectionObserver.
- Use compressed images (WebP) and optimized video clips.
- Minimize repaint-heavy CSS (avoid expensive box-shadow on many elements).
- Combine critical CSS inline and defer the rest.
- Use font-display: swap for web fonts to avoid FOIT.
- Limit heavy animations and prefer transform/opacity for GPU-accelerated operations.

---

## Deployment

Simple deployment options:

- GitHub Pages:
  - Push to main branch.
  - Settings → Pages → Select branch main / root.
  - Your site will be available at https://<username>.github.io/<repo> (or a custom domain).

- Netlify:
  - Drag and drop site folder or connect repo.
  - Set build command to empty (no build) and publish directory to / (root).

- Vercel:
  - Connect repo and set project to Static.
  - Vercel will auto-deploy on git pushes.

- Static hosting via any S3-compatible bucket with a CDN for speed.

---

## Troubleshooting

Common problems & solutions:

- Videos autoplay blocked on mobile:
  - Ensure muted & playsinline attributes are present.
- API fails on page load:
  - Confirm API key, CORS policy, and correct endpoint usage.
- Firebase auth issues:
  - Ensure correct OAuth redirect URIs and enabled providers.
- Layout breaks at a specific width:
  - Inspect affected breakpoint CSS and use browser devtools to see computed values.

---

## Contributing

Contributions are welcome — small improvements make a big difference.

How to contribute:
1. Fork the repo.
2. Create a branch: git checkout -b feat/your-feature
3. Make changes with clear commit messages.
4. Open a pull request describing purpose and changes.
5. Tests or screenshots are appreciated.

Coding conventions:
- Keep HTML semantic, CSS modular, JS small and focused.
- Comment non-obvious sections (especially complex animations).
- Keep file and class names descriptive.

---

## License

This repository does not include an explicit license file by default. If you want to release it publicly and allow reuse, some common choices:

- MIT — Permissive, simple, widely used.
- Apache 2.0 — Permissive with patent protection.
- CC-BY-NC — For non-commercial creative works (not recommended for code).

Add a LICENSE file with your chosen terms.

---

## Contact

William Berge Groensberg (Owner / Author)
- GitHub: https://github.com/sneakyturtle270508
- Email: add-your-email@domain.com (optional)
- Portfolio: (add a live URL if deployed)

---

## Changelog (high-level)

```
2025-12-10  v2.0.0
- Major UI rework: glassmorphism + variable fonts
- Added hub dashboard (man.html)
- Added 75 day challenge tracker (75dayhard.html)
- Weather widget improvements (nam.html)
- Performance and accessibility enhancements
```

---

## FAQ (Short)

Q: Do I need Node.js to run this project?
A: No — the project is pure static HTML/CSS/JS. Node is only needed if you want to use auxiliary tooling.

Q: Are there any private keys in the repo?
A: No sensitive keys should be committed. Use placeholder values and store real keys securely.

Q: How do I contribute new projects?
A: Fork, add your project assets and markup following the portfolioNew structure, and open a PR.

---

## Credits & Inspiration

- Thanks to open-source libraries such as AOS, Font Awesome, and PyScript for inspiration and components.
- Design inspirations: modern UI patterns, glassmorphism, and variable-font hero animations.

---

## Final ASCII Footer

```
╔════════════════════════════════════════════════════════════════╗
║  THANK YOU FOR CHECKING OUT THE PORTFOLIO                      ║
║  Want it shorter or more technical? Tell me and I'll adapt it. ║
╚════════════════════════════════════════════════════════════════╝
```

If you'd like, I can:
- Trim this README to a short version suitable for GitHub's preview.
- Generate a LICENSE file (MIT or Apache 2.0).
- Create a CONTRIBUTING.md and ISSUE_TEMPLATE.md for the repo.
- Produce a short deploy guide for GitHub Pages or Netlify.

Tell me which of the above you'd like next and I'll produce the file(s).
