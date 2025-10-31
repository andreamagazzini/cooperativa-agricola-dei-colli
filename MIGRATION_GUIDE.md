# Migration Guide: Vite → Next.js

This guide explains the changes made to convert the project from Vite + React Router to Next.js.

## What Changed

### 1. Configuration Files

- **package.json**: Updated to use Next.js instead of Vite
  - Removed: `vite`, `vite-plugin-remix-router`, `react-router-dom`
  - Added: `next`, `airtable`, `eslint-config-next`
  - Updated scripts: `dev`, `build`, `start`, `lint`

- **tsconfig.json**: Updated for Next.js
  - Changed module resolution to `bundler`
  - Updated paths to work with Next.js
  - Added Next.js plugin

- **tailwind.config.js**: Updated content paths for Next.js app directory

- **next.config.mjs**: New Next.js configuration file

- **.eslintrc.json**: Updated to use Next.js ESLint config

### 2. Project Structure

**Before (Vite + React Router):**
```
src/
├── routes/
│   └── __layout/
│       ├── index.tsx
│       ├── products/
│       ├── story.tsx
│       └── contacts.tsx
├── main.tsx
└── App.tsx
```

**After (Next.js App Router):**
```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── products/
│   │   └── page.tsx        # Products page
│   ├── story/
│   │   └── page.tsx        # Story page
│   ├── contacts/
│   │   └── page.tsx        # Contacts page
│   └── api/
│       ├── products/
│       │   └── route.ts    # API route for products
│       └── images/
│           └── route.ts    # API route for images
└── components/             # Same structure
```

### 3. Routing Changes

**React Router:**
```tsx
import { useNavigate } from 'react-router-dom'
navigate('/products')
```

**Next.js:**
```tsx
import { useRouter } from 'next/navigation'
const router = useRouter()
router.push('/products')
```

**Or use Link component:**
```tsx
import Link from 'next/link'
<Link href="/products">Products</Link>
```

### 4. Component Updates

All client components now need `'use client'` directive:
```tsx
'use client'

import { ... } from 'react'
```

Components that use:
- Navigation → Updated to use Next.js `useRouter` or `Link`
- Images → Can use Next.js `Image` component (optimized)
- Hooks → Mostly unchanged, but check for router dependencies

### 5. API Routes

**Before:** Serverless functions in `/api` directory (for Vercel)

**After:** Next.js API routes in `/src/app/api/` directory:
- `/api/products` → `src/app/api/products/route.ts`
- `/api/images` → `src/app/api/images/route.ts`

These are automatically available as API endpoints.

### 6. Images

**Before:** Imported from `src/images/index.ts` using `import.meta.url`

**After:** Images should be in `public/images/` and referenced as:
```tsx
<img src="/images/mountain.jpg" />
// or with Next.js Image:
<Image src="/images/mountain.jpg" width={800} height={600} alt="..." />
```

### 7. Environment Variables

**Next.js:** Use `.env.local` file:
```bash
AIRTABLE_API_KEY=your_key
AIRTABLE_BASE_ID=your_base_id
AIRTABLE_PRODUCTS_TABLE=Products
AIRTABLE_IMAGES_TABLE=Images
```

### 8. Deployment

**Vercel (Recommended):**
1. Push code to GitHub
2. Import to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

Vercel automatically:
- Detects Next.js
- Runs `next build`
- Deploys API routes
- Handles environment variables

## Migration Checklist

- [x] Update package.json
- [x] Update configuration files (tsconfig, tailwind, eslint)
- [x] Create Next.js app structure
- [x] Migrate pages to Next.js pages
- [x] Update components for Next.js
- [x] Update routing (React Router → Next.js)
- [x] Create API routes for Airtable
- [x] Update image handling
- [ ] Move images to public folder
- [ ] Test all pages
- [ ] Test API routes
- [ ] Update environment variables
- [ ] Deploy to Vercel

## Next Steps

1. **Move images to public folder:**
   ```bash
   cp -r src/images/* public/images/
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Test locally:**
   ```bash
   pnpm dev
   ```

4. **Set up environment variables:**
   - Create `.env.local` file
   - Add Airtable credentials

5. **Deploy to Vercel:**
   - Push to GitHub
   - Import to Vercel
   - Add environment variables
   - Deploy!

## Troubleshooting

**Images not loading?**
- Make sure images are in `public/images/` folder
- Use `/images/filename.jpg` (leading slash)

**API routes not working?**
- Check environment variables are set
- Verify Airtable credentials
- Check browser console for errors

**Routes not working?**
- Make sure you're using `useRouter` from `next/navigation`
- Check file structure matches Next.js conventions

**Build errors?**
- Run `pnpm install` to ensure all dependencies are installed
- Check TypeScript errors: `pnpm build`
