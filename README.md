# Santiago Engineer - Personal CV Website

A modern, responsive CV/Resume website built with **Svelte**, featuring a clean design inspired by professional templates. This project allows you to create a beautiful personal CV that can be easily customized and exported as PDF.

## ✨ Features

- 🎨 **Modern Design**: Clean, professional layout with gradient headers
- 📱 **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- 🖨 **PDF Export**: Generate high-quality PDF versions of your CV
- 🖨 **Print Optimized**: Print-friendly layout with proper page breaks
- 🎯 **Easy Customization**: Simple configuration files for quick updates
- 🛠 **Svelte Powered**: Built with modern web technologies
- 📊 **Modular Structure**: Organized codebase with reusable components
- 🌈 **Theme Support**: Customizable colors and styling
- 📝 **Data Management**: Centralized store for CV data
- 🔍 **SEO Optimized**: Complete SEO implementation with meta tags, structured data, and sitemap

## 🔍 SEO Features

This website includes comprehensive SEO optimization:

- **Meta Tags**: Dynamic meta tags for title, description, and keywords
- **Open Graph**: Complete Open Graph meta tags for social media sharing
- **Twitter Cards**: Twitter card meta tags for better Twitter sharing
- **Structured Data**: JSON-LD structured data for Person and Website schemas
- **Sitemap**: Automatic sitemap.xml generation during build process
- **Robots.txt**: Properly configured robots.txt file
- **Canonical URLs**: Canonical URL tags to prevent duplicate content issues
- **Static Prerendering**: All pages are prerendered for better SEO

### Using SEO Components

#### Meta Tags

```svelte
<MetaTags 
  title="Page Title"
  description="Page description for search engines"
  keywords="keyword1, keyword2, keyword3"
  url="https://toqyang.com/page-path"
  image="https://toqyang.com/image.jpg"
  type="website"
/>
```

#### Structured Data

```svelte
<StructuredData type="website" />
<StructuredData type="person" />
```

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/toqyang-website.git
   cd toqyang-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view your CV

5. **Build for production**
   ```bash
   npm run build
   ```
   This will generate the production build and automatically create the sitemap.xml file.

## 📁 Project Structure

```
toqyang-website/
├── scripts/
│   └── postbuild.js        # Post-build script for sitemap generation
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   └── SEO/        # SEO components
│   │   │       ├── MetaTags.svelte
│   │   │       └── StructuredData.svelte
│   │   ├── config/
│   │   │   └── structured-data.js  # JSON-LD structured data
│   │   └── utils/
│   │       └── sitemap.js   # Sitemap generation utility
│   │   ├── stores/
│   │   │   └── cvData.js          # CV data store
│   │   ├── utils/
│   │   │   └── pdfGenerator.js    # PDF generation utilities
│   │   └── config/
│   │       └── cvConfig.js        # Configuration settings
│   ├── routes/
│   │   ├── +layout.svelte         # Main layout
│   │   └── +page.svelte           # CV page
│   └── app.css                    # Global styles
├── package.json
├── vite.config.js
├── svelte.config.js
└── README.md
```

## 🎨 Customization

### 1. Update Personal Information

Edit the CV data in `src/lib/stores/cvData.js`:

```javascript
// Update personal information
const personalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your.email@example.com',
  phone: '+1 (555) 123-4567',
  location: 'Your City, State',
  website: 'https://yourwebsite.com',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername'
};
```

### 2. Customize Theme Colors

Update colors in `src/lib/config/cvConfig.js`:

```javascript
theme: {
  primary: '#2563eb',      // Main brand color
  secondary: '#1e40af',    // Secondary color
  accent: '#3b82f6',       // Accent color
  // ... other colors
}
```

### 3. Add/Remove Sections

Modify the sections array in `cvConfig.js`:

```javascript
sections: [
  'personal',
  'skills',
  'experience',
  'education',
  'projects',
  'certifications'  // Add custom sections
]
```

### 4. Update Skills

Edit skills in the CV data store:

```javascript
skills: {
  programming: ['JavaScript', 'TypeScript', 'Python'],
  frameworks: ['React', 'Vue.js', 'Svelte'],
  databases: ['MongoDB', 'PostgreSQL'],
  tools: ['Git', 'Docker', 'AWS'],
  languages: ['English', 'Spanish']
}
```

## 🛠 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type check the project
- `npm run lint` - Lint the code
- `npm run format` - Format the code

## 📄 PDF Generation

The CV includes built-in PDF generation functionality:

1. **Download PDF**: Click the "Download PDF" button to generate and download a PDF version
2. **Print CV**: Use the "Print CV" button or browser print (Ctrl/Cmd + P) for printing

### PDF Settings

Customize PDF generation in `src/lib/config/cvConfig.js`:

```javascript
pdf: {
  filename: 'your-name-cv.pdf',
  format: 'a4',
  orientation: 'portrait',
}
```

## 🎯 Features Breakdown

### Responsive Design
- Mobile-first approach
- Breakpoints: 768px (mobile), 1024px (tablet), 1200px (desktop)
- Flexible grid layouts
- Optimized typography scaling

### Print Optimization
- Clean print styles
- Proper page breaks
- Hidden navigation elements
- Optimized colors for printing

### Data Management
- Centralized Svelte store
- Easy data updates
- JSON export/import capability
- Modular structure

### Performance
- Optimized bundle size
- Lazy loading
- Efficient re-renders
- Modern build tools

## 🎨 Design Inspiration

This CV template is inspired by:
- [Modern CV Template](https://meca1.github.io/cv/) - Clean, professional design
- [Awesome CV](https://github.com/posquit0/Awesome-CV) - LaTeX template structure

## 🚀 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `build` folder to Netlify

### GitHub Pages

1. Add GitHub Actions workflow for automatic deployment
2. Configure repository settings for GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Svelte](https://svelte.dev/) - The amazing reactive framework
- [SvelteKit](https://kit.svelte.dev/) - The full-stack framework for Svelte
- [html2pdf.js](https://github.com/eKoopmans/html2pdf.js) - PDF generation library
- [Inter Font](https://rsms.me/inter/) - Beautiful typography
- [Google Fonts](https://fonts.google.com/) - Web font delivery

## 📞 Support

If you have any questions or need help customizing your CV:

1. Check the [Issues](https://github.com/yourusername/toqyang-website/issues) page
2. Create a new issue with your question
3. Contact: your.email@example.com

---

**Made with ❤️ for the developer community**