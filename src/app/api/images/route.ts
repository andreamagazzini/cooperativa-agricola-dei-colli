import { NextRequest, NextResponse } from 'next/server'
import Airtable from 'airtable'

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID || '')

export async function GET(request: NextRequest) {
  try {
    const tableName = process.env.AIRTABLE_IMAGES_TABLE || 'Images'
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get('category')

    let formula = '{Published} = 1'
    if (category) {
      formula = `AND({Published} = 1, {Category} = "${category}")`
    }

    const records = await base(tableName)
      .select({
        filterByFormula: formula,
        sort: [{ field: 'Order', direction: 'asc' }],
      })
      .all()

    const images = records.map((record) => {
      const fields = record.fields as any
      const attachment = fields.Image?.[0]
      
      return {
        id: record.id,
        url: attachment?.url || '',
        alt: fields.Alt || fields.Caption || '',
        caption: fields.Caption || '',
        category: fields.Category || '',
      }
    })

    const response = NextResponse.json({
      success: true,
      data: images,
    })

    response.headers.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=7200')
    
    return response

  } catch (error: any) {
    console.error('Airtable API error:', error)
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch images',
        ...(process.env.NODE_ENV === 'development' && { details: error.message }),
      },
      { status: 500 }
    )
  }
}
