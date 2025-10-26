# Devura Agency Website

A modern, elegant, and highly secure website for Devura — a premium web and software development solutions agency. Built with Next.js 15, featuring smooth animations, bilingual support (English/Arabic), and a scalable architecture.

> 📋 **Recent Updates**: See [IMPROVEMENTS.md](./IMPROVEMENTS.md) for a detailed list of recent enhancements and improvements.

## Features

- **Modern Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Bilingual Support**: Full internationalization with English and Arabic (RTL support)
- **Smooth Animations**: Framer Motion and GSAP for professional animations
- **Dark Mode**: System-aware theme switching
- **Responsive Design**: Mobile-first approach, works on all devices
- **SEO Optimized**: Meta tags, OpenGraph, and semantic HTML
- **Performance**: Image optimization, lazy loading, and code splitting
- **Accessibility**: ARIA labels, keyboard navigation, and contrast checking
- **Security**: Input sanitization, security headers, and rate limiting ready

## Project Structure

```
devura-agency/
├── app/
│   ├── [locale]/           # Internationalized routes
│   │   ├── page.tsx        # Homepage
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── services/       # Services pages
│   │   └── layout.tsx      # Root layout with i18n
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Shadcn UI components
│   ├── navbar.tsx          # Navigation with language switcher
│   ├── footer.tsx          # Footer component
│   ├── hero-slider.tsx     # Animated project showcase
│   ├── services-section.tsx
│   ├── contact-section.tsx
│   ├── floating-contact.tsx
│   ├── service-detail-client.tsx
│   └── theme-provider.tsx
├── i18n/
│   ├── request.ts          # i18n configuration
│   └── routing.ts          # Routing configuration
├── lib/
│   ├── services.ts         # Service definitions
│   ├── service-details.ts  # Detailed service content
│   └── utils.ts            # Utility functions
├── messages/
│   ├── en.json             # English translations
│   └── ar.json             # Arabic translations
└── public/                 # Static assets

```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd Devura1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   ```bash
   # Windows
   copy env.example .env.local
   
   # macOS/Linux
   cp env.example .env.local
   ```
   Edit `.env.local` to configure:
   - Contact information (email, phone, WhatsApp)
   - Social media links
   - Supabase credentials (if using contact forms with database)
   - Email service configuration (if using email notifications)
   - Analytics IDs (Google Analytics, Facebook Pixel)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Customization Guide

### 1. Brand Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --primary: 242 80% 62%;      /* Indigo */
  --secondary: 45 93% 47%;     /* Gold */
  /* ... other colors */
}
```

### 2. Content & Translations

Edit translation files in `/messages/`:
- `en.json` - English content
- `ar.json` - Arabic content

### 3. Services

Modify services in:
- `/lib/services.ts` - Service list and metadata
- `/lib/service-details.ts` - Detailed service content

### 4. Contact Information

Update contact details in:
- `/components/footer.tsx`
- `/components/floating-contact.tsx`
- `/components/contact-section.tsx`

### 5. Logo and Branding

Replace "DEVURA" text in:
- `/components/navbar.tsx`
- `/components/footer.tsx`

Or add a logo image in `/public/` and update these components.

## Adding New Pages

1. Create a new directory in `app/[locale]/`
2. Add a `page.tsx` file
3. Add translations to `/messages/en.json` and `/messages/ar.json`

Example:
```typescript
// app/[locale]/blog/page.tsx
export default function BlogPage() {
  return <div>Blog content</div>;
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will auto-detect Next.js and deploy

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `.next` folder and dependencies to your server
3. Run: `npm start`

## Environment Variables

For optional features, configure these environment variables:

```env
# Supabase (for contact forms)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# Email (for notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password

# Site URL
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Tech Stack Details

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **Animations**: Framer Motion, GSAP
- **Internationalization**: next-intl
- **Theme**: next-themes
- **Icons**: Lucide React
- **Database** (optional): Supabase
- **Forms**: React Hook Form + Zod

## Performance Optimizations

- ✅ Image optimization with next/image
- ✅ Automatic code splitting
- ✅ Lazy loading components
- ✅ Font optimization
- ✅ CSS minification
- ✅ Server-side rendering
- ✅ Static generation where possible

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Future Enhancements

Prepared for:
- Blog/News section
- Client dashboard
- Admin panel
- CRM integration
- Advanced analytics
- Contact form with database storage
- Email notifications

## Support

For issues or questions:
- Email: info@devura.com
- Website: [devura.com](https://devura.com)

## License

© 2025 Devura Agency. All rights reserved.

---

**Built with ❤️ by Devura**
