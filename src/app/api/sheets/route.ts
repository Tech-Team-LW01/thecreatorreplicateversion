// app/api/sheets/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    
    // Google Apps Script URL (you'll get this after setting up the script)
    const scriptURL = 'https://script.google.com/macros/s/AKfycbykivMQ37_xhFjhb708BNr73nmSQCu97VA4M2FSN5S0g3us0uPOm7bg_uhF8Rp3QRWP/exec';
    
    // Format the data for Google Apps Script
    const params = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
      params.append(key, String(value));
    });
    
    // Add timestamp
    params.append('timestamp', new Date().toISOString());
    
    // Send data to Google Sheets
    const response = await fetch(scriptURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit to Google Sheets');
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to save to Google Sheets' },
      { status: 500 }
    );
  }
}