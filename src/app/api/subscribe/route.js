import { NextResponse } from 'next/server';

export async function POST(request) {

  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { message: 'Valid email required' },
        { status: 400 }
      );
    }

    const airtableUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`;
   
    const requestBody = {
      "records": [
        {
          "fields": {
            "Email": email,
            "Cohort": "Cohort 2",
            "Source": "Landing Page"
          }
        }
      ]
    };
    
    const airtableResponse = await fetch(airtableUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    const airtableData = await airtableResponse.json();

    if (!airtableResponse.ok) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to save email to Airtable',
          error: airtableData.error?.message || 'Unknown error',
          details: airtableData
        },
        { status: airtableResponse.status }
      );
    }

    const createdRecord = airtableData.records[0];
    
    return NextResponse.json({ 
      success: true, 
      message: 'Email added successfully',
      id: createdRecord.id,
      createdTime: createdRecord.createdTime
    });

  } catch (error) {
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error',
        error: error.message
      },
      { status: 500 }
    );
  }
}