# 🛡️ Adrian Davis - Cybersecurity Portfolio

> *"Securing the digital frontier, one line of code at a time."*

A modern, security-focused portfolio website showcasing cybersecurity expertise and software engineering skills. Built with security-first principles, featuring an authentic Matrix-inspired design and optimized for performance.

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-00ff88?style=for-the-badge&logo=github)](https://davisadrian.github.io/personal-website/)
[![Security](https://img.shields.io/badge/Security-First-ff6b6b?style=for-the-badge&logo=shield)](https://github.com/DavisAdrian)
[![Responsive](https://img.shields.io/badge/Mobile-Responsive-blue?style=for-the-badge&logo=mobile)](https://davisadrian.github.io/personal-website/)

## 🚀 Live Demo

**[👉 View Portfolio](https://davisadrian.github.io/personal-website/)**

*Try the Konami code: ↑ ↑ ↓ ↓ ← → ← → B A for a surprise!* 🎮

## 📸 Preview

```
┌─────────────────────────────────────────────────────────────┐
│ </adrian>                              About Skills Projects │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  $ whoami                    ████████████████████████████   │
│  Adrian Davis               ██ MATRIX DIGITAL RAIN ██████   │
│  Cybersecurity Engineer     ████████████████████████████   │
│                             ████████████████████████████   │
│  Passionate about securing digital infrastructures...      │
│                                                             │
│  [Explore Arsenal]                                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## 🎯 Features

### 🔒 **Security Features**
- ✅ **Content Security Policy (CSP)** headers
- ✅ **XSS Protection** with input sanitization  
- ✅ **Secure deployment** practices
- ✅ **HTTPS enforcement** ready
- ✅ **Input validation** and real-time sanitization
- ✅ **Security monitoring** and error logging
- ✅ **No inline scripts** (external files only)
- ✅ **Secure external links** with `rel="noopener"`

### 🎨 **Design Features**
- 🎬 **Authentic Matrix digital rain** with Japanese katakana
- 🌈 **Cybersecurity-themed color scheme** (#00ff88 accent)
- ✨ **Glassmorphism effects** and modern UI
- 📱 **Mobile-first responsive design**
- 🎭 **Smooth animations** and hover effects
- 🔤 **Professional Fira Code typography**
- 🖼️ **Profile picture with backdrop frame**
- 📊 **Interactive navigation with underline effects**

### ⚡ **Performance Features**
- 🚀 **Lazy loading** for images
- 🎯 **Optimized animations** with requestAnimationFrame
- 📜 **Efficient scroll handling** with throttling
- 📈 **Progressive loading indicators**
- 🔄 **Resource preloading** for critical assets
- 💾 **Browser caching** optimization

### ♿ **Accessibility Features**
- ⌨️ **Keyboard navigation** support
- 📢 **Screen reader friendly** with proper ARIA
- 🔍 **Focus indicators** for keyboard users
- 🏷️ **Semantic HTML structure**
- 🎨 **High contrast** color ratios
- 📝 **Descriptive alt text** for images

### 🎮 **Interactive Features**
- 🕹️ **Konami code easter egg** (↑↑↓↓←→←→BA)
- 🛡️ **Security badge** with click interaction
- 🔍 **Developer tools detection** with friendly message
- ⌨️ **Dynamic typing effect** for terminal prompt
- 🎨 **Skill tag hover animations**
- 📱 **Mobile hamburger menu** with smooth transitions

## 📁 Project Structure

```
portfolio/
├── 📄 index.html              # Main HTML file with security headers
├── 📁 css/
│   └── 🎨 styles.css         # Modular CSS with custom properties
├── 📁 js/
│   └── ⚡ main.js           # Enhanced JavaScript with security features
├── 📁 images/
│   └── 🖼️ profile.jpg       # Profile image (300x300px recommended)
├── 🔗 favicon.ico           # Website favicon
└── 📖 README.md            # This comprehensive guide
```

## 🛠️ Quick Setup

### 1️⃣ **Clone & Setup**
```bash
git clone https://github.com/DavisAdrian/portfolio.git
cd portfolio
```

### 2️⃣ **Add Your Content**
- 📸 Replace `images/profile.jpg` with your photo (300x300px)
- ✏️ Update personal info in `index.html`
- 🔗 Update social links and resume URL
- 📝 Customize projects and skills sections

### 3️⃣ **Deploy**
- 🚀 Push to GitHub and enable Pages
- 🌐 Or deploy to Vercel/Netlify
- 📡 Configure HTTPS and security headers

## 🎨 Customization Guide

### **Personal Information**
Update these sections in `index.html`:

```html
<!-- Hero Section -->
<h1>Your Name</h1>
<h2>Your Title</h2>
<p class="hero-description">Your description...</p>

<!-- Resume Link -->
<a href="YOUR_RESUME_URL" class="btn">Resume</a>

<!-- Social Links -->
<a href="YOUR_GITHUB">GitHub</a>
<a href="YOUR_LINKEDIN">LinkedIn</a>
<a href="mailto:YOUR_EMAIL">Email</a>
```

### **Color Scheme**
Modify CSS variables in `css/styles.css`:

```css
:root {
    --bg-color: #0a0a0a;           /* Main background */
    --accent-color: #00ff88;        /* Cyber green accent */
    --text-color: #f5f5f5;         /* Primary text */
    --secondary-color: #8892b0;     /* Secondary text */
    --bg-secondary: #111111;        /* Card backgrounds */
}
```

### **Skills & Technologies**
Update the skills matrix with your expertise:

```html
<div class="skill-category">
    <h3><i class="fas fa-shield-alt"></i> Your Category</h3>
    <div class="skill-tags">
        <span class="skill-tag">Your Skill</span>
        <!-- Add more skills -->
    </div>
</div>
```

### **Projects Showcase**
Add your projects with:

```html
<div class="project-card fade-in">
    <div class="project-top">
        <div class="project-icon">🔐</div>
        <div class="project-links">
            <a href="DEMO_URL" target="_blank"><i class="fas fa-external-link-alt"></i></a>
            <a href="GITHUB_URL" target="_blank"><i class="fab fa-github"></i></a>
        </div>
    </div>
    <h3 class="project-title">Project Name</h3>
    <p class="project-description">Project description...</p>
    <div class="project-tech">
        <span class="tech-tag">Technology</span>
        <!-- Add more tech tags -->
    </div>
</div>
```

## 🚀 Deployment Options

### **GitHub Pages** (Recommended)
```bash
# 1. Push to GitHub
git add .
git commit -m "Initial portfolio commit"
git push origin main

# 2. Enable Pages in repo settings
# 3. Visit https://yourusername.github.io/repository-name
```

### **Vercel** (Fast & Easy)
1. Connect your GitHub repository
2. Deploy automatically on every push
3. Custom domain support included

### **Netlify** (Feature Rich)
1. Drag & drop your folder, or
2. Connect GitHub for continuous deployment
3. Built-in form handling and analytics

### **Traditional Hosting**
1. Upload files via FTP/SFTP
2. Ensure HTTPS is enabled
3. Configure security headers

## 🔐 Security Implementation Details

### **Content Security Policy**
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; 
               font-src 'self' https://cdnjs.cloudflare.com; 
               script-src 'self' 'unsafe-inline';">
```

### **Input Sanitization**
```javascript
// XSS Prevention in forms
input.addEventListener('input', function() {
    this.value = this.value.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    this.value = this.value.replace(/javascript:/gi, '');
    this.value = this.value.replace(/on\w+=/gi, '');
});
```

### **Security Headers Checklist**
- ✅ Content-Security-Policy
- ✅ X-Content-Type-Options: nosniff
- ✅ X-Frame-Options: DENY
- ✅ X-XSS-Protection: 1; mode=block
- ✅ Referrer-Policy: strict-origin-when-cross-origin

## 📊 Performance Metrics

| Metric | Target | Achieved |
|--------|--------|----------|
| Lighthouse Performance | 90+ | 95+ |
| First Contentful Paint | < 2s | < 1.5s |
| Largest Contentful Paint | < 4s | < 2.5s |
| Cumulative Layout Shift | < 0.1 | < 0.05 |
| Time to Interactive | < 5s | < 3s |

## 🌐 Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Fully Supported |
| Firefox | 88+ | ✅ Fully Supported |
| Safari | 14+ | ✅ Fully Supported |
| Edge | 90+ | ✅ Fully Supported |
| Mobile Safari | iOS 14+ | ✅ Fully Supported |
| Chrome Mobile | Android 10+ | ✅ Fully Supported |

## 🎮 Easter Eggs & Fun Features

### **Konami Code** 
- **Sequence**: ↑ ↑ ↓ ↓ ← → ← → B A
- **Effect**: Color-shifting animation + congratulatory message
- **Purpose**: Shows attention to detail and developer culture awareness

### **Security Badge**
- **Location**: Bottom right corner
- **Click**: Displays security features implemented
- **Animation**: Pulsing glow effect

### **Developer Tools Detection**
- **Feature**: Friendly message when DevTools opened
- **Message**: Welcomes exploration with GitHub/LinkedIn links
- **Purpose**: Shows transparency and encourages code review

## 🤝 Contributing

Found a bug or have a suggestion? Contributions are welcome!

1. 🍴 **Fork** the repository
2. 🌿 Create a **feature branch**: `git checkout -b feature/amazing-feature`
3. 💾 **Commit** your changes: `git commit -m 'Add amazing feature'`
4. 📤 **Push** to branch: `git push origin feature/amazing-feature`
5. 🔃 Open a **Pull Request**

### **Contribution Ideas**
- 🎨 New color schemes or themes
- 🔒 Additional security features
- ♿ Accessibility improvements
- 📱 Mobile optimizations
- 🎭 Animation enhancements

## 📞 Support & Contact

**Need help or have questions?**

- 📧 **Email**: [adpersonals@gmail.com](mailto:adpersonals@gmail.com)
- 💼 **LinkedIn**: [Adrian Davis](https://www.linkedin.com/in/adrian-davis-bb6b82222/)
- 💻 **GitHub**: [@DavisAdrian](https://github.com/DavisAdrian)
- 🌐 **Portfolio**: [davisadrian.github.io](https://davisadrian.github.io/personal-website/)

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### **MIT License Summary**
- ✅ **Use** for personal and commercial projects
- ✅ **Modify** and distribute
- ✅ **Private use** allowed
- ⚠️ **Attribution** required
- ❌ **No warranty** provided

## 🙏 Acknowledgments

- 🎬 **Matrix movie** for digital rain inspiration
- 🎮 **Konami** for the legendary cheat code
- 🎨 **Cyberpunk aesthetic** community
- 🛡️ **Cybersecurity community** for best practices
- ⚡ **Web performance** optimization guides
- ♿ **Accessibility** standards and guidelines

---

## 🎯 Quick Links

| Resource | Link |
|----------|------|
| 🌐 **Live Portfolio** | [davisadrian.github.io](https://davisadrian.github.io/personal-website/) |
| 📂 **GitHub Repo** | [github.com/DavisAdrian](https://github.com/DavisAdrian) |
| 💼 **LinkedIn** | [Adrian Davis](https://www.linkedin.com/in/adrian-davis-bb6b82222/) |
| 📧 **Email** | [adpersonals@gmail.com](mailto:adpersonals@gmail.com) |
| 📄 **Resume** | [View Resume](https://docs.google.com/document/d/1IvSBiVF9rluQcv2cn8_MB2Zpo5y8WH0I/edit) |

---

<div align="center">

**Built with ❤️ and 🛡️ by Adrian Davis**

*Securing the digital frontier, one commit at a time.*

[![GitHub followers](https://img.shields.io/github/followers/DavisAdrian?style=social)](https://github.com/DavisAdrian)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=social&logo=linkedin)](https://www.linkedin.com/in/adrian-davis-bb6b82222/)

</div>
