# 📊 Time Tracking Dashboard

A responsive time tracking dashboard built with HTML, CSS, and JavaScript. The project allows monitoring activity in various categories (Work, Play, Study, etc.) with the ability to switch between daily, weekly, and monthly statistics.

![Design preview](preview.jpg)

## 🎯 Features

- **Fully responsive design** — optimized for mobile devices and desktop
- **Dynamic data updates** — switching between Daily/Weekly/Monthly without reloading
- **Interactive elements** — hover effects, active button states
- **Accessibility (A11y)** — semantic markup, ARIA attributes, keyboard support
- **Optimized performance** — lazy loading images, CSS Grid/Flexbox

## 🚀 Technologies

- **HTML5** — semantic markup
- **CSS3** — Custom Properties, Grid, Flexbox, Mobile-first
- **JavaScript (ES6+)** — Fetch API, DOM manipulation, Event handling
- **JSON** — structured data storage

## 🎨 Design

### Color Palette
- **Main background:** Dark Blue `hsl(226, 43%, 10%)`
- **Cards:** Dark Desaturated Blue `hsl(235, 46%, 20%)`
- **Card accent colors:**
  - Work: Light Red `hsl(15, 100%, 70%)`
  - Play: Soft Blue `hsl(195, 74%, 62%)`
  - Study: Light Red `hsl(348, 100%, 68%)`
  - Exercise: Lime Green `hsl(145, 58%, 55%)`
  - Social: Violet `hsl(264, 64%, 52%)`
  - Self Care: Soft Orange `hsl(43, 84%, 65%)`
- **Text:** White `hsl(0, 0%, 100%)`, Pale Blue `hsl(236, 100%, 87%)`

### Typography
- **Font:** Rubik (300, 400, 500)
- **Sizes:** 18px (body), 32-48px (numbers), 15px (secondary text)

## ⚙️ Functionality

### Main features:
1. **Data loading** — dynamic loading from `data.json`
2. **Period switching** — Daily, Weekly, Monthly
3. **Automatic updates** — real-time data changes
4. **Adaptive interface** — from mobile to large screens

### JavaScript logic:
```javascript
// Main functions
- fetchData()        // Loading data from JSON
- updateCards()      // Updating all cards
- setActiveButton()  // Managing active buttons
- handleTimeframe()  // Handling period switching
```

## 📱 Responsiveness

### Breakpoints:
- **Mobile:** < 768px — vertical layout
- **Tablets:** 768px - 1024px — adaptive grid
- **Desktop:** > 1024px — 4-column grid

### Mobile version features:
- Vertical card arrangement
- Reduced element sizes
- Optimized touch targets
- Vertical statistics layout

## ♿ Accessibility

### Implemented features:
- **Semantic tags** — `<article>`, `<section>`, `<button>`
- **ARIA attributes** — `aria-label`, `aria-pressed`, `aria-labelledby`
- **Keyboard navigation** — Tab, Enter, Space
- **Contrast** — WCAG AA compliant
- **Screen reader support** — logical reading order

## 📝 How the code works

### HTML structure:
```html
<main class="dashboard">
  <section class="user-profile">...</section>
  <article class="activity-card card-work">...</article>
  <article class="activity-card card-play">...</article>
  <!-- ... other cards -->
</main>
```

### CSS architecture:
```css
/* Mobile-first approach */
.dashboard {
  display: flex;
  flex-direction: column;
}

@media (min-width: 1024px) {
  .dashboard {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### JavaScript data flow:
```
JSON data → Fetch API → Parsing → DOM Update
           ↓
Button click → State update → Card redraw
```

## 🔧 Data Configuration

Data is stored in `data.json`:
```json
{
  "title": "Work",
  "timeframes": {
    "daily": {"current": 5, "previous": 7},
    "weekly": {"current": 32, "previous": 36},
    "monthly": {"current": 103, "previous": 128}
  }
}
```

To add a new activity:
1. Add a new object to the `data.json` array
2. Create a corresponding card in HTML
3. Add a CSS class with the color

## 🧪 Testing

### What has been tested:
- [x] Loading on mobile devices
- [x] Correct period switching
- [x] Hover states of elements
- [x] Keyboard accessibility
- [x] Proper display in different browsers

### Browser support:
- Chrome 90+ ✅
- Firefox 88+ ✅
- Safari 14+ ✅
- Edge 90+ ✅

## 📈 Performance

### Optimizations:
- **Images:** SVG icons, optimized PNG
- **CSS:** Minification, use of variables
- **JavaScript:** Deferred loading, efficient DOM operations
- **Fonts:** `font-display: swap`, system fallbacks

### Metrics:
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Lighthouse Score: 95+

## 📄 License

This project was created as part of a challenge from [Frontend Mentor](https://www.frontendmentor.io). All images and design are provided by Frontend Mentor.

## 🎓 What I learned

### Technical skills:
- Working with CSS Grid and Flexbox for complex layouts
- Using Fetch API for data loading
- DOM manipulations based on JSON data
- Implementing interactive elements without reloading
- Mobile-first approach to layout

### Professional skills:
- Code structuring for maintainability
- Performance optimization
- Adherence to accessibility standards
- Working with Git and project structure

## ✨ Future Development

Potential improvements:
1. Adding dark/light theme
2. Integration with backend for real data
3. Transition animations between states
4. Drag & drop for card rearrangement
5. Data export to PDF/CSV

---

*Developed with ❤️ for frontend development practice*  
*Design inspired by Frontend Mentor*