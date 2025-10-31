# Quick Start: Adding Airtable Integration

## TL;DR Answer

**No, you cannot safely use Airtable API keys in frontend-only code.** They will be exposed and can be abused.

**Solution: Use serverless functions** (Vercel/Netlify) as a backend proxy. Your API keys stay secure on the server, and you can keep your current frontend setup.

## Step-by-Step Setup (Vercel - Recommended)

### 1. Install Dependencies

```bash
# Install Airtable SDK for serverless functions
pnpm add airtable

# Install Vercel types (for TypeScript)
pnpm add -D @vercel/node
```

### 2. Create Airtable Base

1. Go to https://airtable.com and create a new base
2. Create a "Products" table with fields:
   - `Name` (Single line text)
   - `Description` (Long text)
   - `Image` (Attachment - for product images)
   - `Category` (Single select)
   - `Price` (Number, optional)
   - `In Stock` (Checkbox)
   - `Published` (Checkbox - to control what shows on site)
   - `Order` (Number - for sorting)
3. Add your product data

### 3. Get Airtable Credentials

1. **API Key:** Go to https://airtable.com/account → Personal access tokens → Create new token
2. **Base ID:** Open your base → Help → API documentation → Copy the base ID from the URL

### 4. Deploy to Vercel

1. Push your code to GitHub
2. Import project to Vercel (https://vercel.com)
3. In Vercel dashboard → Settings → Environment Variables, add:
   ```
   AIRTABLE_API_KEY=your_api_key_here
   AIRTABLE_BASE_ID=your_base_id_here
   AIRTABLE_PRODUCTS_TABLE=Products
   ```
4. Deploy

Vercel will automatically:
- Detect functions in `/api` directory
- Deploy them as serverless functions
- Make them available at `https://your-app.vercel.app/api/products`

### 5. Update Frontend

The example files show how to:
- Create a service (`src/services/airtable.ts`) to fetch data
- Use it in your React components
- Handle loading and error states

### 6. Local Development

```bash
# Install Vercel CLI
npm i -g vercel

# Run local dev server (includes API functions)
vercel dev

# In another terminal, run your frontend
pnpm dev
```

## Alternative: Netlify

If you prefer Netlify:

1. Create `netlify/functions/products.ts` (see Netlify docs for format)
2. Add environment variables in Netlify dashboard
3. Deploy

## Cost

- **Vercel Free Tier:** 100GB bandwidth/month (usually enough for small-medium sites)
- **Airtable Free Tier:** 1,200 records per base (plenty for products)
- **Total cost:** $0/month for most use cases

## Security Checklist

✅ API keys only in environment variables (never in code)  
✅ Serverless functions validate requests  
✅ CORS headers configured  
✅ Error messages don't expose internals  
✅ Rate limiting (handled by Vercel/Netlify)  

## Next Steps

1. ✅ Review example files in `/api` and `/src/services`
2. ✅ Set up Airtable base with your data
3. ✅ Test locally with `vercel dev`
4. ✅ Deploy to Vercel
5. ✅ Update frontend to use the API service
6. ✅ Test in production

## Troubleshooting

**"Missing Airtable credentials" error:**
- Check environment variables are set in Vercel dashboard
- Redeploy after adding variables

**CORS errors:**
- Check CORS headers in serverless functions
- Verify `VITE_API_BASE_URL` is correct

**Products not showing:**
- Check `Published` checkbox is enabled in Airtable
- Verify table name matches environment variable
- Check browser console for errors

## Example Usage in Component

```tsx
import { fetchProducts } from '@/services/airtable'
import { useEffect, useState } from 'react'

function ProductsPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts().then((response) => {
      if (response.success) {
        setProducts(response.data)
      }
      setLoading(false)
    })
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.label}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  )
}
```
