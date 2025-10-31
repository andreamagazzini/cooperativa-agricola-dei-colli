# Environment Variables Setup

## For Local Development

Create a `.env.local` file in the root directory:

```bash
# API Configuration
# Point to your local serverless function server
VITE_API_BASE_URL=http://localhost:3000/api
```

**⚠️ Never commit `.env.local` to git** (it should be in `.gitignore`)

## For Production (Vercel/Netlify)

Set these in your hosting platform's dashboard:

### Vercel
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add:
   - `AIRTABLE_API_KEY` - Your Airtable API key
   - `AIRTABLE_BASE_ID` - Your Airtable base ID
   - `AIRTABLE_PRODUCTS_TABLE` - Table name (e.g., "Products")
   - `AIRTABLE_IMAGES_TABLE` - Table name (e.g., "Images")
   - `VITE_API_BASE_URL` - Your deployed function URL (e.g., `https://your-app.vercel.app/api`)

### Netlify
1. Go to Site settings → Build & deploy → Environment
2. Add the same variables as above

## Getting Your Airtable Credentials

1. **API Key:**
   - Go to https://airtable.com/api
   - Click on your base
   - Find "API Key" in the documentation
   - Or go to https://airtable.com/account → Personal access tokens

2. **Base ID:**
   - Go to your Airtable base
   - Click "Help" → "API documentation"
   - The base ID is in the URL: `https://airtable.com/{BASE_ID}/api/docs/...`

3. **Table Names:**
   - Use the exact table names as they appear in Airtable
   - Case-sensitive
