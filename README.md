# 🚀 Portfolio Website - BTech CSE Student

A stunning, interactive portfolio website built with React and Vite. Features modern design aesthetics, smooth animations, and a fully responsive layout.

![Portfolio Preview](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## ✨ Features

- **Modern Design**: Premium dark theme with vibrant gradients and glassmorphism effects
- **Interactive Animations**: Particle background, smooth scrolling, and micro-interactions
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Sections Included**:
  - 🏠 Hero Section with animated particle background
  - 👤 About Me with stats and highlights
  - 💪 Skills with animated progress bars
  - 🎨 Projects showcase with filtering
  - 💼 Experience timeline
  - 📧 Contact form
  - 🔗 Footer with social links

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd f:\port
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 🎨 Customization Guide

### 1. Personal Information

**Update Your Name and Details:**

- Open `src/components/Hero.jsx`
  - Line 82: Change `"Your Name"` to your actual name
  - Line 88-92: Update the description

- Open `src/components/Footer.jsx`
  - Line 101: Update copyright with your name

### 2. Contact Information

**Update Email, Phone, and Location:**

- Open `src/components/Contact.jsx`
  - Lines 31-46: Update email, phone, and location

- Open `src/components/Footer.jsx`
  - Lines 67-85: Update contact details in footer

### 3. Social Media Links

**Update GitHub, LinkedIn, Twitter:**

Replace all instances of placeholder URLs:
- `https://github.com` → Your GitHub profile
- `https://linkedin.com` → Your LinkedIn profile
- `https://twitter.com` → Your Twitter/X profile

Files to update:
- `src/components/Hero.jsx` (lines 97-117)
- `src/components/Contact.jsx` (lines 70-88)
- `src/components/Footer.jsx` (lines 24-42)

### 4. About Section

**Customize Your Story:**

- Open `src/components/About.jsx`
  - Lines 20-33: Update your personal description
  - Lines 37-61: Modify education, interests, and goals
  - Lines 10-15: Update statistics (projects count, CGPA, etc.)

### 5. Skills

**Add/Remove Skills:**

- Open `src/components/Skills.jsx`
  - Lines 5-48: Modify skill categories and levels
  - Lines 93-104: Update additional competencies

### 6. Projects

**Showcase Your Projects:**

- Open `src/components/Projects.jsx`
  - Lines 7-62: Replace with your actual projects
  - Update: title, description, tags, GitHub links, demo links
  - Change emoji icons to match your projects

### 7. Experience

**Add Your Experience:**

- Open `src/components/Experience.jsx`
  - Lines 5-38: Update work experience and internships
  - Lines 40-59: Update achievements and certifications

### 8. Color Scheme

**Customize Colors:**

- Open `src/index.css`
  - Lines 4-5: Change primary and secondary hue values
  - Experiment with different values (0-360) for unique color schemes

### 9. Profile Image

**Add Your Photo:**

Currently using a gradient placeholder. To add your photo:

- Open `src/components/Hero.jsx`
- Lines 129-138: Replace the SVG with an `<img>` tag:
```jsx
<div className="profile-image">
  <img src="/path-to-your-image.jpg" alt="Your Name" />
</div>
```

- Add your image to the `public` folder

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

The build files will be in the `dist` folder, ready for deployment.

## 🚀 Deployment

You can deploy this portfolio to:

- **Vercel**: `npm i -g vercel && vercel`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` package
- **Any static hosting service**

## 🎯 Technologies Used

- **React 19.2.0** - UI Library
- **Vite 7.2.4** - Build Tool
- **CSS3** - Styling with custom properties
- **Canvas API** - Particle animations
- **Google Fonts** - Inter & Space Grotesk

## 📝 Project Structure

```
f:\port
├── src/
│   ├── components/
│   │   ├── Navbar.jsx/css
│   │   ├── Hero.jsx/css
│   │   ├── About.jsx/css
│   │   ├── Skills.jsx/css
│   │   ├── Projects.jsx/css
│   │   ├── Experience.jsx/css
│   │   ├── Contact.jsx/css
│   │   └── Footer.jsx/css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
└── package.json
```

## 🎨 Design Features

- **Glassmorphism** effects on navbar
- **Gradient backgrounds** with animated glow
- **Particle system** using Canvas API
- **Smooth scroll** animations
- **Hover effects** on all interactive elements
- **Mobile-responsive** navigation menu
- **Form validation** on contact form

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 968px
- **Desktop**: > 968px

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available for personal use.

## 💡 Tips

1. **Replace placeholder content** with your actual information
2. **Add real project links** to GitHub and live demos
3. **Update meta tags** in `index.html` for better SEO
4. **Optimize images** before adding them
5. **Test on multiple devices** before deploying
6. **Keep it updated** with your latest projects and skills

---

**Made with ❤️ using React**

For questions or support, feel free to reach out!
