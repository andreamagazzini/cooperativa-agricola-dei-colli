import { NextResponse } from 'next/server'
import Airtable from 'airtable'

const getBase = () => {
  if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
    return null
  }
  return new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
  }).base(process.env.AIRTABLE_BASE_ID)
}

interface AirtableFields {
  Name?: string
  Label?: string
  Description?: string
  Image?: Array<{ url: string }>
  Category?: string
  Price?: number
  'In Stock'?: boolean
  Order?: number
  Published?: number
}

export async function GET() {
  try {
    const base = getBase()
    if (!base) {
      return NextResponse.json(
        {
          success: false,
          error: 'Airtable configuration missing',
          data: [],
        },
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
      const fields = record.fields as AirtableFields
      
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

  } catch (error) {
    console.error('Airtable API error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch products',
        // In production, don't include error details
        ...(process.env.NODE_ENV === 'development' && { details: errorMessage }),
      },
      { status: 500 }
    )
  }
}
