# 🚀 Michael Vincent's Portfolio

A sophisticated, modern React portfolio website showcasing professional experience, skills, and projects with cutting-edge design and functionality.

## 🌟 Live Demo

Visit the live portfolio: [https://micach02.github.io/personal](https://micach02.github.io/personal)

## ✨ Features

### 🎨 Modern Design System
- **Glass Morphism UI** - Semi-transparent glass-like components
- **Dynamic Gradients** - Beautiful color gradients throughout
- **Advanced Animations** - Smooth transitions and micro-interactions
- **Responsive Design** - Optimized for all devices (mobile-first approach)
- **Dark Theme** - Modern dark aesthetic with accent colors

### 🧩 Interactive Components
- **Dynamic Navigation** - Active section tracking with smooth scrolling
- **Hero Section** - Animated introduction with dynamic elements
- **Skills Showcase** - Interactive skills visualization
- **Experience Timeline** - Professional experience with modern layout
- **Education Tabs** - Organized educational background
- **Project Gallery** - Filterable projects with detailed pages
- **Contact Form** - Functional contact form with EmailJS integration
- **Personal Journey** - Detailed personal story section

### ⚡ Performance & UX
- **Lightning Fast** - Vite build system for optimal performance
- **Smooth Animations** - AOS (Animate On Scroll) integration
- **Loading States** - User feedback during operations
- **Error Handling** - Graceful error handling
- **SEO Ready** - Semantic HTML and accessibility features

## 🛠 Tech Stack

### Frontend Framework
- **React 19.1.0** - Latest React with modern features
- **React Router Dom 7.6.3** - Client-side routing for SPA
- **Vite 7.0.0** - Ultra-fast build tool and dev server

### UI & Styling
- **Bootstrap 5.3.7** - Responsive grid system and utilities
- **FontAwesome 6.7.2** - Professional icon library
- **AOS 2.3.4** - Scroll-triggered animations
- **Custom CSS** - Modern CSS with Grid, Flexbox, and animations

### Functionality
- **EmailJS** - Contact form email integration
- **React Hooks** - Modern React patterns (useState, useEffect, useRef)
- **ESLint** - Code quality and consistency

### Development Tools
- **Hot Module Replacement** - Instant development feedback
- **Fast Refresh** - Preserve component state during development
- **Modern ESLint Config** - Latest rules and best practices

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/micach02/personal.git
   cd personal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up EmailJS (Optional)**
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Update the configuration in `src/config/emailjs.js`
   - See `EMAILJS_SETUP.md` for detailed instructions

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
- `npm run deploy` - Deploy to GitHub Pages

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.jsx       # About section
│   ├── Contact.jsx     # Contact form
│   ├── Education.jsx   # Education timeline
│   ├── Experience.jsx  # Work experience
│   ├── Footer.jsx      # Site footer
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── ProjectDetail.jsx   # Individual project pages
│   ├── Projects.jsx        # Projects gallery
│   ├── Skills.jsx      # Skills showcase
│   └── icons/Icon.jsx  # Shared inline SVG icon set
├── config/             # Configuration files
│   └── emailjs.js      # EmailJS configuration
├── styles/             # CSS stylesheets
│   ├── theme.css
│   ├── project-detail.css
│   └── projects-ultra-modern.css
├── App.jsx             # Main app component
└── main.jsx            # App entry point

public/
├── images/             # Project and profile images
├── favicon.svg, favicon-*.png, apple-touch-icon.png, site.webmanifest
├── robots.txt, sitemap.xml, 404.html  # SEO + GitHub Pages SPA routing
└── og-image.png        # Open Graph / social share preview
```

## 🎯 Key Components

### Navigation & Layout
- **Header** - Responsive navigation with active section tracking
- **Footer** - Professional footer with social links
- **Smooth Scrolling** - Enhanced navigation experience

### Content Sections
- **Hero** - Dynamic introduction with animations
- **About** - Personal information and introduction
- **Skills** - Interactive skills visualization
- **Experience** - Professional timeline with company details
- **Education** - Educational background with tab navigation
- **Projects** - Featured projects with filtering and detail pages
- **Contact** - Functional contact form with validation

### Advanced Features
- **Project Detail Pages** - Individual routes for each project
- **Email Integration** - Working contact form
- **Responsive Design** - Mobile-optimized layouts
- **Animation System** - Coordinated animations and transitions

## 🎨 Customization

### Personal Information
Update personal details in the respective component files:
- `src/components/About.jsx` - Personal information
- `src/components/Experience.jsx` - Work experience
- `src/components/Education.jsx` - Educational background
- `src/components/Skills.jsx` - Technical skills
- `src/components/Projects.jsx` - Project portfolio

### Styling
- Modify CSS variables for color schemes
- Update component styles in individual CSS files
- Customize animations and transitions

### Contact Form
- Configure EmailJS in `src/config/emailjs.js`
- Customize form fields in `src/components/Contact.jsx`
- Update email templates as needed

## 🚀 Deployment

### GitHub Pages (Configured)
```bash
npm run deploy
```

### Manual Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service

### Environment Variables
Create a `.env` file for sensitive configurations:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🔧 Configuration Files

- `vite.config.js` - Vite build configuration
- `eslint.config.js` - ESLint rules and settings
- `package.json` - Dependencies and scripts
- `EMAILJS_SETUP.md` - EmailJS setup instructions

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

For questions or feedback, feel free to reach out through the contact form on the website or connect via:
- GitHub: [@micach02](https://github.com/micach02)
- Email: Available through the contact form

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the blazing fast build tool
- FontAwesome for the beautiful icons
- AOS library for smooth animations
- EmailJS for contact form functionality

---

**Built with ❤️ using React, Vite, and modern web technologies**
