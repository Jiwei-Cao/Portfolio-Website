# 💼 Jiwei's Portfolio Website

A modern, animated portfolio website built with React and SCSS.  
Showcases projects, skills, experience, and contact information in a clean, responsive UI.

## 🛠 Built With

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)  
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)  
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)  
[![FontAwesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)](https://fontawesome.com/)  
[![EmailJS](https://img.shields.io/badge/EmailJS-3730A3?style=for-the-badge)](https://www.emailjs.com/)  
[![React Leaflet](https://img.shields.io/badge/React_Leaflet-00A877?style=for-the-badge&logo=leaflet&logoColor=white)](https://react-leaflet.js.org/)  
[![Loaders.css](https://img.shields.io/badge/Loaders.css-FF6F61?style=for-the-badge)](https://github.com/ConnorAtherton/loaders.css)

## 🔗 Live Demo

[https://jiwei-portfolio.vercel.app](https://jiwei-portfolio.vercel.app)

## 🚀 Getting Started

This section explains how to run the portfolio site locally.

### 🧰 Prerequisites

- Node.js (v16+ recommended)  
- npm or yarn  

## 🛠️ Installation

### 1. Clone the repo
```bash
git clone https://github.com/jiwei-cao/portfolio-website.git
cd portfolio-website
2. Install dependencies
bash
Copy
Edit
npm install
# or
yarn install
3. Start the development server
bash
Copy
Edit
npm start
# or
yarn start
4. Open in your browser
http://localhost:3000

🧪 Features
Animated landing page with interactive logo

Responsive layout for desktop and mobile

Dynamic portfolio project cards

Work experience timeline with expand/collapse

Skills and tools with animated progress bars

Sidebar with navigation and social icons

Contact form via EmailJS with map integration

🗂️ Project Structure
pgsql
Copy
Edit
portfolio-website/
├── public/
│   └── index.html, favicon, assets
├── src/
│   ├── components/
│   │   ├── About/
│   │   ├── AnimatedLetters/
│   │   ├── Contact/
│   │   ├── Home/
│   │   ├── Layout/
│   │   ├── Portfolio/
│   │   ├── Sidebar/
│   │   └── Work/
│   ├── assets/
│   │   ├── fonts/
│   │   └── images/
│   ├── data/
│   │   └── portfolio.json
│   ├── App.js
│   ├── App.scss
│   └── index.js
├── package.json
└── README.md
⚙️ Customization
Projects:
Edit src/data/portfolio.json to add or modify portfolio projects.

Contact Form:
Set your EmailJS service ID, template ID, and public key in src/components/Contact/index.js.

Profile Info:
Edit text and content in src/components/Home/, About/, and Work/.

📄 License
This project is for personal portfolio use.
You’re welcome to fork and modify it for your own portfolio.

Created by Jiwei Cao
