# Jiwei's Portfolio Website

A modern, animated portfolio website built with React, SCSS, and React Router.  
Showcases projects, skills, work experience, and contact information.

## Features

- **Animated Landing Page:** Eye-catching intro with animated letters and logo.
- **Responsive Design:** Fully responsive for desktop and mobile devices.
- **Project Portfolio:** Displays project cards with images, descriptions, and links.
- **About Section:** Highlights languages, frameworks, and development tools with animated progress bars.
- **Work Timeline:** Interactive, expandable timeline for work experience.
- **Contact Form:** EmailJS-powered contact form with map integration.
- **Sidebar Navigation:** Persistent sidebar with navigation and social links.

## Tech Stack

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [SCSS](https://sass-lang.com/)
- [FontAwesome](https://fontawesome.com/)
- [EmailJS](https://www.emailjs.com/)
- [React Leaflet](https://react-leaflet.js.org/) (for maps)
- [Loaders.css](https://github.com/ConnorAtherton/loaders.css) (for animated loaders)

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/YOUR_GITHUB_USERNAME/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```sh
   npm start
   # or
   yarn start
   ```

4. **Open in your browser:**
   ```
   http://localhost:3000
   ```

## Project Structure

```
src/
  components/
    About/
    AnimatedLetters/
    Contact/
    Home/
    Layout/
    Portfolio/
    Sidebar/
    Work/
  assets/
    fonts/
    images/
  data/
    portfolio.json
  App.js
  App.scss
  ...
```

## Customization

- **Projects:** Edit `src/data/portfolio.json` to add or update portfolio projects.
- **Contact Form:** Update EmailJS credentials in `src/components/Contact/index.js`.
- **Profile Info:** Edit text in `src/components/Home/`, `About/`, and `Work/`.

## License

This project is for personal portfolio use.  
Feel free to fork and adapt for your own portfolio!

---

**Created by Jiwei Cao**