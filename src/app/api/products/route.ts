import { NextRequest, NextResponse } from 'next/server'
import Airtable from 'airtable'

// Initialize Airtable
const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID || '')

export async function GET(request: NextRequest) {
  try {
    // Validate environment variables
    if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
      console.error('Missing Airtable credentials')
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      )
    }

    const tableName = process.env.AIRTABLE_PRODUCTS_TABLE || 'Products'
    
    // Fetch records from Airtable
    const records = await base(tableName)
      .select({
        // Only fetch published products
        filterByFormula: '{Published} = 1',
        // Sort by order field if you have one
        sort: [{ field: 'Order', direction: 'asc' }],
      })
      .all()

    // Transform Airtable records to your Product format
    const products = records.map((record) => {
      const fields = record.fields as any
      
      return {
        id: record.id,
        label: fields.Name || fields.Label || '',
        description: fields.Description || '',
        url: `/products/${record.id}`,
        imageUrl: fields.Image?.[0]?.url || '',
        category: fields.Category || '',
        price: fields.Price || null,
        inStock: fields['In Stock'] || false,
      }
    })

    // Cache for 5 minutes
    const response = NextResponse.json({
      success: true,
      data: products,
    })
    
    response.headers.set('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600')
    
    return response

  } catch (error: any) {
    console.error('Airtable API error:', error)
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch products',
        // In production, don't include error details
        ...(process.env.NODE_ENV === 'development' && { details: error.message }),
      },
      { status: 500 }
    )
  }
}
