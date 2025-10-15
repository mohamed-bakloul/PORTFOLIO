# Mohamed Bakloul - Data Analyst Portfolio

A modern, SEO-optimized portfolio website showcasing Mohamed Bakloul's expertise in data analysis, business intelligence, and data visualization.

## 🚀 Features

- **SEO Optimized**: Comprehensive meta tags, structured data, and sitemap
- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Performance**: Optimized for fast loading and Core Web Vitals
- **Accessibility**: WCAG compliant with proper alt tags and semantic HTML
- **PWA Ready**: Progressive Web App capabilities

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Projects.tsx        # Projects showcase
│   └── Contact.tsx         # Contact form and info
├── public/
│   ├── assets/             # Project images
│   ├── sitemap.xml         # SEO sitemap
│   ├── robots.txt          # SEO robots file
│   └── manifest.json       # PWA manifest
└── assets/                 # Resume files and project images
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📊 SEO Features

### Meta Tags
- Comprehensive title and description
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs
- Language alternatives (EN/FR)

### Structured Data
- Person schema markup
- Professional skills and expertise
- Contact information
- Social media profiles

### Performance
- Optimized images with proper alt tags
- Sitemap.xml for search engines
- Robots.txt for crawler guidance
- PWA manifest for mobile experience

## 🎨 Customization

### Personal Information
Update the following files with your information:

1. **app/layout.tsx**: Update metadata, structured data, and contact info
2. **components/Hero.tsx**: Update name, title, and contact details
3. **components/About.tsx**: Update bio, skills, and statistics
4. **components/Projects.tsx**: Update project information and images
5. **components/Contact.tsx**: Update contact form and social links

### Styling
- Modify `tailwind.config.js` for custom colors and themes
- Update `app/globals.css` for global styles
- Each component uses Tailwind classes for easy customization

### Images
- Add your project images to the `public/assets/` directory
- Update image paths in `components/Projects.tsx`
- Ensure images are optimized for web (WebP format recommended)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📈 SEO Optimization Tips

1. **Update Domain**: Replace `mohamed-bakloul.com` with your actual domain
2. **Google Analytics**: Add Google Analytics tracking code
3. **Google Search Console**: Submit your sitemap
4. **Social Media**: Update Open Graph images
5. **Performance**: Monitor Core Web Vitals
6. **Content**: Regularly update project portfolio

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any sensitive data:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
GOOGLE_ANALYTICS_ID=your-ga-id
```

### Google Verification
Update the Google verification code in `app/layout.tsx`:
```typescript
verification: {
  google: 'your-google-verification-code',
},
```

## 📱 Mobile Optimization

- Responsive design for all screen sizes
- Touch-friendly navigation
- Optimized images for mobile
- PWA capabilities for app-like experience

## 🌐 Internationalization

The site is prepared for multiple languages:
- English (default)
- French (ready for implementation)
- Easy to add more languages

## 📞 Support

For questions or support, contact:
- Email: bakloul.mohamed.100@gmail.com
- LinkedIn: [Mohamed Bakloul](https://www.linkedin.com/in/mohamed-bakloul/)
- GitHub: [mohamed-bakloul](https://github.com/mohamed-bakloul)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Mohamed Bakloul**

