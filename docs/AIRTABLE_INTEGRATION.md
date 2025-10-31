# Airtable Integration Guide

## Overview

This guide explains how to securely integrate Airtable with your frontend application using serverless functions as a backend proxy. This approach keeps your API keys secure while allowing you to manage content through Airtable.

## Why You Need a Backend Proxy

**❌ Never put API keys in frontend code:**
- API keys are exposed in the browser bundle
- Anyone can view them in DevTools → Sources
- They can be abused to hit rate limits or access your data
- Your Airtable account could be compromised

**✅ Use serverless functions instead:**
- API keys stay on the server (never sent to browser)
- You can add rate limiting and validation
- Better security and control
- Easy to add to your existing setup

## Implementation Options

### Option 1: Vercel Serverless Functions (Recommended)

**Pros:**
- Free tier includes 100GB bandwidth
- Automatic HTTPS
- Easy GitHub integration
- TypeScript support out of the box
- Deploy with same repo

**Setup Steps:**

1. **Install Airtable SDK:**
```bash
pnpm add airtable
```

2. **Create API directory structure:**
```
api/
  products/
    index.ts      # Serverless function
  images/
    index.ts      # Serverless function for images
```

3. **Set environment variables in Vercel:**
   - `AIRTABLE_API_KEY` - Your Airtable API key
   - `AIRTABLE_BASE_ID` - Your Airtable base ID
   - `AIRTABLE_PRODUCTS_TABLE` - Table name (e.g., "Products")

4. **Update `vite.config.ts`** to proxy API calls in development

5. **Deploy to Vercel** - Functions auto-deploy with your frontend

### Option 2: Netlify Functions

**Pros:**
- Free tier with 125k requests/month
- Similar setup to Vercel
- Good GitHub integration

**Setup:**
- Create `netlify/functions/` directory
- Similar structure to Vercel functions
- Add `netlify.toml` configuration

### Option 3: Cloudflare Workers

**Pros:**
- Very fast global edge network
- Generous free tier
- Lower latency

### Option 4: Simple Node.js Backend

**Pros:**
- Full control
- Can host on Railway, Render, Fly.io

**Cons:**
- More setup and maintenance
- Separate deployment

## Recommended Architecture

```
┌─────────────┐
│   Browser   │
│  (React App)│
└──────┬──────┘
       │ HTTPS
       │ (no API keys)
       ▼
┌─────────────────┐
│  Serverless API │
│  (Vercel/Netlify)│
│  - Validates     │
│  - Rate limits   │
│  - Caches        │
└──────┬──────────┘
       │ API Key (secure)
       ▼
┌─────────────┐
│  Airtable   │
│   API       │
└─────────────┘
```

## Example Implementation

See the example files in this directory:
- `example-vercel-function.ts` - Vercel serverless function
- `example-airtable-service.ts` - Client-side service to fetch data
- `example-types.ts` - TypeScript types for Airtable data

## Migration Path

1. **Phase 1:** Set up serverless functions (start with products)
2. **Phase 2:** Test with development data
3. **Phase 3:** Migrate existing product data to Airtable
4. **Phase 4:** Update frontend to fetch from API
5. **Phase 5:** Add image management
6. **Phase 6:** Add other content types (story, contacts, etc.)

## Security Best Practices

1. **Never commit API keys** - Use environment variables
2. **Add rate limiting** - Prevent abuse (Vercel does this automatically)
3. **Validate requests** - Check request origin, add CORS
4. **Cache responses** - Reduce Airtable API calls (better performance + cost)
5. **Error handling** - Don't expose internal errors to clients

## Cost Considerations

- **Airtable Free Tier:** 1,200 records per base, unlimited bases
- **Vercel Free Tier:** 100GB bandwidth, unlimited requests
- **Netlify Free Tier:** 125k requests/month
- Most small-medium sites stay within free tiers

## Alternative: Airtable Public Bases

If your data is **truly public** (no sensitive info), you can use Airtable's public API without authentication. However, this is **not recommended** because:
- Anyone can see all your data
- No access control
- You still need to manage data structure changes
- Less flexibility

## Next Steps

1. Choose your platform (Vercel recommended)
2. Create Airtable base and structure your tables
3. Set up serverless functions
4. Create client-side service
5. Test locally
6. Deploy and verify
