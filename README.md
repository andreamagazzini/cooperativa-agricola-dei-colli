# Cooperativa Agricola dei Colli - Website

A modern, responsive Next.js website for Cooperativa Agricola dei Colli, showcasing their agricultural products and services with improved UX/UI, accessibility, and performance.

## 🚀 Live Demo

The site is live at: https://andreamagazzini.github.io/cooperativa-agricola-dei-colli/

## ✨ Key Features

### 🎨 **Modern UI/UX Design**
- **Redesigned visual hierarchy** with better typography and spacing
- **Modern color palette** with primary green tones reflecting agricultural themes
- **Glass morphism effects** and backdrop blur for modern aesthetics
- **Improved responsive design** with mobile-first approach
- **Better visual feedback** with hover states and transitions

### 🧩 **Component Architecture**
- **Reusable UI components** (Button, Card, Input, LoadingSpinner)
- **Custom hooks** for form handling, scroll effects, and performance monitoring
- **Proper TypeScript types** for better type safety
- **Error boundaries** for graceful error handling
- **Next.js Image optimization** for better performance

### ♿ **Accessibility Improvements**
- **ARIA labels** and semantic HTML structure
- **Keyboard navigation** support
- **Skip links** for screen readers
- **Focus management** and visual indicators
- **Screen reader friendly** content structure

### 📱 **Mobile Experience**
- **Touch-friendly interactions** with haptic feedback
- **Optimized viewport** configuration
- **Mobile-specific navigation** patterns
- **Gesture support** for image interactions
- **Responsive images** with proper sizing

### ⚡ **Performance Optimizations**
- **Next.js Image optimization** built-in
- **Automatic code splitting**
- **Server-side rendering** for better SEO
- **API routes** for Airtable integration
- **Efficient re-renders** with proper React patterns

### 🎭 **Modern Features**
- **Framer Motion animations** for smooth interactions
- **Staggered animations** for content reveals
- **Hover animations** and micro-interactions
- **Loading states** and skeleton screens
- **Form validation** with real-time feedback

## 🛠 **Technology Stack**

- **Next.js 14** with TypeScript
- **React 18** with App Router
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Headless UI** for accessible components
- **Airtable** for content management (optional)

## 📁 **Project Structure**

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── products/          # Products pages
│   ├── story/             # Story page
│   ├── contacts/          # Contacts page
│   └── api/               # API routes
│       ├── products/      # Products API
│       └── images/         # Images API
├── components/            # React components
│   ├── ui/                # Reusable UI components
│   └── animations/        # Animation components
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript type definitions
├── constants/            # Application constants
└── utils/                # Utility functions
```

## 🎯 **Key Features**

### **Homepage**
- Hero section with animated text
- Interactive product showcase with hover effects
- Call-to-action sections
- Responsive grid layout

### **Products Page**
- Tabbed interface for product categories
- Detailed product descriptions
- Nutritional information cards
- Usage suggestions
- Can be managed via Airtable

### **Contact Page**
- Interactive contact form with validation
- Contact information cards
- Embedded Google Maps
- WhatsApp integration

### **Story Page**
- Interactive page flip component
- Responsive text layout
- Navigation controls

## 🔧 **Development**

### **Prerequisites**
- Node.js 18+
- pnpm (recommended) or npm

### **Installation**

```bash
# Clone the repository
git clone <repository-url>
cd cooperativa-agricola-dei-colli

# Install dependencies
pnpm install

# Copy environment variables (if using Airtable)
cp .env.local.example .env.local
# Edit .env.local with your Airtable credentials

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

### **Available Scripts**
- `pnpm dev` - Start development server (http://localhost:3000)
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🚀 **Deployment to Vercel**

### **Automatic Deployment**

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Convert to Next.js"
   git push origin main
   ```

2. **Import to Vercel:**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Add Environment Variables:**
   - In Vercel dashboard → Settings → Environment Variables
   - Add:
     - `AIRTABLE_API_KEY`
     - `AIRTABLE_BASE_ID`
     - `AIRTABLE_PRODUCTS_TABLE`
     - `AIRTABLE_IMAGES_TABLE`

4. **Deploy!**
   - Click "Deploy"
   - Your site will be live in minutes

### **Manual Deployment**

```bash
# Build the project
pnpm build

# The .next folder contains the production build
# Deploy this to your hosting provider
```

## 📱 **Responsive Design**

The website is fully responsive with breakpoints:
- **Mobile**: 320px - 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px+

## ♿ **Accessibility Features**

- **WCAG 2.1 AA compliant** design
- **Screen reader support** with proper ARIA labels
- **Keyboard navigation** throughout the site
- **High contrast** color schemes
- **Focus indicators** for interactive elements
- **Skip links** for main content

## 🚀 **Performance**

- **Next.js optimizations** built-in
- **Image optimization** with next/image
- **Automatic code splitting**
- **Server-side rendering** for SEO
- **API route caching** for Airtable data

## 🎨 **Design System**

### **Colors**
- **Primary**: Green tones (#16a34a - #052e16)
- **Secondary**: Yellow/amber tones (#eab308 - #422006)
- **Neutral**: Gray tones (#fafafa - #0a0a0a)

### **Typography**
- **Primary Font**: Inter (Google Fonts)
- **Fallback**: system-ui, sans-serif
- **Responsive sizing** with clamp() functions

### **Spacing**
- **Consistent spacing scale** (4px base unit)
- **Responsive margins** and padding
- **Container max-widths** for readability

## 📊 **CMS Integration (Airtable)**

The site supports Airtable integration for content management:

1. **Set up Airtable:**
   - Create a base with Products and Images tables
   - Add required fields (Name, Description, Image, Published, etc.)

2. **Configure Environment Variables:**
   - Add credentials to `.env.local` (development)
   - Add to Vercel dashboard (production)

3. **API Routes:**
   - `/api/products` - Fetch products from Airtable
   - `/api/images` - Fetch images from Airtable

See `docs/CMS_COMPARISON.md` for CMS options and `docs/AIRTABLE_INTEGRATION.md` for setup guide.

## 🔮 **Future Enhancements**

- [x] **Next.js migration** ✅
- [x] **CMS integration** (Airtable) ✅
- [ ] **E-commerce functionality** for product sales
- [ ] **Multi-language support** (Italian/English)
- [ ] **Blog section** for news and updates
- [ ] **Product search** and filtering
- [ ] **Analytics integration** for insights
- [ ] **PWA features** for offline access

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 **Contributing**

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 **Contact**

For questions about this project, please contact:
- **Email**: cooperativaagricoladeicolli@gmail.com
- **Phone**: +39 347 449 7023
- **Website**: https://andreamagazzini.github.io/cooperativa-agricola-dei-colli/

---

**Built with ❤️ for Cooperativa Agricola dei Colli**
