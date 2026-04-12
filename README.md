# TechWorld Portfolio - Vercel Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/wajiddaudtamboli/TechWorld_AI)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Professional portfolio website showcasing full-stack development, UI/UX design, and technical projects built with modern web technologies.

## � Features

- **Fully Static** - Optimized for Vercel hosting with <1s load time
- **Responsive Design** - Mobile-first design with Bootstrap 5 and custom CSS
- **SEO Optimized** - Meta tags, Open Graph, structured data for better discoverability
- **PWA Ready** - Progressive Web App with offline support and installability
- **Contact Form** - Integrated with Formspree for reliable form submissions
- **26+ Projects** - Showcasing diverse portfolio across 4 categories:
  - AI/ML projects, e-commerce platforms, enterprise apps
  - UI/UX case studies with Figma prototypes
  - Software testing documentation and automation
  - Data analytics dashboards with Power BI
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
- **Projects** - **26 featured projects** organized in 4 categories:
  - 🚀 Main Portfolio (16 projects)
  - 🎨 UI/UX Case Studies (4 projects)
  - 🧪 Software Testing (2 projects)
  - 📊 Data Analytics (4 projects)
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

## 🔄 Deployment Cycle (GitHub Actions)

This repository now includes an automated deployment cycle via GitHub Actions:

1. `CI` workflow on every push/PR to `main` or `master`:
  - Restores and builds the .NET solution.
  - Installs Node dependencies and builds static output.
2. `Deploy` workflow on push to `main` or `master`:
  - Rebuilds static output.
  - Deploys to Vercel (if Vercel secrets are configured).
  - Triggers Render deploy hook (if Render hook secret is configured).

Workflow files:
- `.github/workflows/ci.yml`
- `.github/workflows/deploy.yml`

Required GitHub repository secrets for full deployment:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
- `RENDER_DEPLOY_HOOK_URL`

If any secret is not set, that deployment step is skipped automatically.

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

## 🎯 Featured Projects

### 🚀 Main Portfolio (16 Projects)

1. **CareerPilot AI** (Patent) - AI career coaching platform
2. **RakshaMitra AI** (Patent) - Disaster relief system
3. **CADD Solutions** - IT educational hub
4. **Saheli Saree Center App** - E-commerce & POS system
5. **AI Career Compass J&K** - Career guidance for J&K students
6. **Imran Usman Shaikh Portfolio** - Design engineer portfolio
7. **ORCHATHON 2K25** - National hackathon (12-13 April 2025)
8. **Sajid Daud Tamboli Portfolio** - Structural engineer portfolio
9. **CareerPilot Resume Generator** - ATS-optimized resume builder
10. **Carbon Guard AI** - Carbon footprint tracking
11. **E-Commerce Platform** - 24 mock products showcase
12. **TechWorld Portfolio** - This website
13. **Weather Forecasting App** - Voice-enabled weather app
14. **GitHub Repositories** - 25+ projects collection

### 🎨 UI/UX Case Studies (4 Projects)

- **Orchidians Shopping Cart** - E-commerce UI/UX design
- **Medical Appointment App** - Healthcare app design
- **Kisan-Groceries Website** - Agricultural e-commerce design
- **Travel Explorer Website** - Travel booking platform design

### 🧪 Software Testing (2 Projects)

- **Software Testing Courses** - Comprehensive testing training
- **VWO App Testing Project** - Real-world QA project

### 📊 Data Analytics (4 Projects)

- **Shield Insurance Dashboard** - Insurance analytics (Power BI)
- **Telecom Analysis** - Telecom industry insights
- **Business Insights 360** - 360° business intelligence
- **Ad-Hoc Insights: Consumer Goods** - SQL-based analysis

---

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
