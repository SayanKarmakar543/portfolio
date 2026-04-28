# Sayan Karmakar - Backend Engineer Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS, showcasing backend engineering expertise and projects.

## Features

- ✨ Modern glassmorphism design with smooth animations
- 📱 Fully responsive across all devices
- 🎨 Custom Tailwind CSS styling
- 📧 Contact form with EmailJS integration
- 🚀 Fast performance with Vite
- 🎯 SEO optimized

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite (Rolldown)
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Email Service**: EmailJS

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SayanKarmakar543/portfolio.git
cd react-tailwind-personal-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your EmailJS credentials:
- Get your credentials from [EmailJS](https://www.emailjs.com/)
- Add your Service ID, Template ID, and Public Key

4. Add your resume:
- Place your resume PDF as `Sayan_Karmakar_Resume.pdf` in the `public` folder

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:5173](http://localhost:5173) in your browser

## Building for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## Customization

### Personal Information

- **Hero Section**: Edit `src/sections/Hero.jsx`
- **About Section**: Edit `src/sections/About.jsx`
- **Projects**: Edit `src/sections/Projects.jsx`
- **Experience**: Edit `src/sections/Experience.jsx`
- **Certifications**: Edit `src/sections/Certifications.jsx`
- **Testimonials**: Edit `src/sections/Testimonials.jsx`
- **Contact Info**: Edit `src/sections/Contact.jsx`

### Images

- Profile photo: `public/profile-photo.jpg`
- Hero background: `public/hero-bg.jpg`
- Project images: `public/projects/`

### Colors & Theme

Edit `src/index.css` to customize the color scheme and design tokens.

## Project Structure

```
src/
├── components/       # Reusable UI components
├── layout/          # Layout components (Navbar, Footer)
├── sections/        # Page sections
├── App.jsx          # Main app component
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## Deployment

This project can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- Email: sayankarmakar543@gmail.com
- GitHub: [@SayanKarmakar543](https://github.com/SayanKarmakar543)
- LinkedIn: [Sayan Karmakar](https://www.linkedin.com/in/sayan-karmakar-6469191b1/)

---

Built with ❤️ by Sayan Karmakar
