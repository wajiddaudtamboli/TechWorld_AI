# TechWorld Portfolio - Vercel Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/wajiddaudtamboli/TechWorld_AI)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **✅ Hosted on Vercel** - [Live Site](https://techworld-ai.vercel.app/)

Professional portfolio website showcasing full-stack development, UI/UX design, and technical projects built with modern web technologies.

## � Features

- **Fully Static** - Optimized for Vercel hosting with <1s load time
- **Responsive Design** - Mobile-first design with Bootstrap 5 and custom CSS
- **SEO Optimized** - Meta tags, Open Graph, structured data for better discoverability
- **PWA Ready** - Progressive Web App with offline support and installability
- **Contact Form** - Integrated with Formspree for reliable form submissions
- **13+ Projects** - Showcasing diverse portfolio including AI/ML, e-commerce, and enterprise apps
- **Performance First** - Lazy loading, optimized assets, Lighthouse 95+ score

## 👨‍💻 About Me

Computer Science professional with expertise in:

- **Full-Stack Development** (MERN, ASP.NET Core, Spring Boot)
- **UI/UX Design** (Figma, Adobe XD, Responsive Design)
- **Technical Support** (Troubleshooting, Documentation, User Experience)
- **Cloud Technologies** (Azure, AWS, Google Cloud)

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Custom styles with CSS variables and animations
- **JavaScript (ES6+)** - Vanilla JS for interactivity
- **Bootstrap 5** - Responsive grid and components
- **BoxIcons** - Icon library for UI elements

### Libraries
- **Typed.js** - Animated typing effect for hero section
- **ScrollReveal** - Smooth scroll animations
- **Formspree** - Contact form backend

### Deployment
- **Vercel** - Static hosting with automatic deployments
- **GitHub** - Version control and CI/CD integration

## 📁 Project Structure

```
📦 Portfolio-Wajid_Daud_Tamboli/
├── 🎯 PortfolioApp/              # Main ASP.NET Core application
│   ├── 📄 Controllers/           # MVC controllers
│   ├── 🖼️ Views/                # Razor views
│   ├── 📊 Data/                  # Database context
│   ├── 📋 Models/                # Data models
│   ├── 🌐 wwwroot/               # Static assets (CSS, JS, Images)
│   └── 📱 frontend-static/       # Static version template
├── 🚀 dist/                      # Generated static files for Vercel
├── ⚙️ vercel.json                # Vercel deployment config
├── 📦 package.json               # Node.js build scripts
├── 🔧 build-static.js            # Static build script
├── 🐳 Dockerfile                 # Container configuration
└── 📖 DEPLOYMENT.md              # Detailed deployment guide
```

## 🌟 Key Features

### 💼 Professional Sections

- **About** - Background and expertise
- **Skills** - Technical proficiencies with links
- **Experience** - Work history and achievements
- **Projects** - 13+ featured projects with live links
- **Achievements** - Hackathon wins and recognition
- **Contact** - Multiple contact methods

### 🎨 Design Features

- **Responsive Design** - Mobile-first approach
- **Dark Theme** - Professional dark mode design
- **Smooth Animations** - Scroll-triggered animations
- **Interactive Elements** - Hover effects and transitions
- **Fast Loading** - Optimized assets and code
- **SEO Optimized** - Meta tags and structured data

### 🔧 Technical Features

- **Dual Deployment** - Static and dynamic versions
- **Contact Form** - Server-side form processing (dynamic version)
- **Database Storage** - Contact submissions stored in SQLite
- **Social Media Integration** - Links to all professional profiles
- **Resume Download** - Direct download link
- **AI Chatbot** - Elfsight AI integration

## � Quick Start

### Prerequisites
- Node.js 18+ (optional, for local development)
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/wajiddaudtamboli/TechWorld_AI.git

# Navigate to project directory
cd TechWorld_AI

# Install dependencies (optional for build scripts)
npm install

# Start local development server
npm run dev
```

### Build for Production

```bash
# Build static files
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

### Deploy to Vercel

1. **Automatic Deployment** (Recommended):
   - Connect GitHub repository to Vercel
   - Vercel auto-detects configuration from `vercel.json`
   - Push to `main` branch triggers deployment

2. **Manual Deployment**:
   ```bash
   # Install Vercel CLI
   npm install -g vercel

   # Deploy to production
   vercel --prod
   ```

### Environment Variables

No environment variables required for static deployment.

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Total Bundle Size**: <1MB (optimized)

## 🔧 Configuration

### Formspree Setup

Update the form action in `index.html`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Get your form ID from [Formspree Dashboard](https://formspree.io/forms).

### CSS Customization

Edit CSS variables in `PortfolioApp/wwwroot/css/site.css`:

```css
:root {
    --main-color: #ff8c00;     /* Primary accent color */
    --bg-color: #081b29;       /* Background color */
    --hover-color: #0ef;       /* Hover states */
    --text-color: #ededed;     /* Text color */
}
```

## ⚠️ Important Notes

- **Dynamic version deprecated** - All features now supported via static hosting
- **No backend required** - Contact form powered by Formspree
- **Vercel-optimized** - Configuration tuned for optimal Vercel performance
- **SEO-ready** - Meta tags, Open Graph, and structured data included

## 📱 Mobile Optimization

- **Responsive Grid Layout** - Adapts to all screen sizes
- **Touch-Friendly Navigation** - Mobile hamburger menu
- **Optimized Images** - Compressed and properly sized
- **Fast Loading** - Minimal bundle size
- **Readable Typography** - Optimal font sizes for mobile

## 🤝 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wajid-daud-tamboli-3217b031a)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/wajiddaudtamboli)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:wajiddaudtamboli123@gmail.com)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/919667033839)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Icons**: [BoxIcons](https://boxicons.com/)
- **Animations**: [Typed.js](https://github.com/mattboldt/typed.js/)
- **Hosting**: [Render.com](https://render.com/) & [Vercel](https://vercel.com/)
- **Framework**: [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/)

---

<div align="center">

**Built with ❤️ by [Wajid Daud Tamboli](https://github.com/wajiddaudtamboli)**

_If you like this project, please give it a ⭐ on GitHub!_

</div>
