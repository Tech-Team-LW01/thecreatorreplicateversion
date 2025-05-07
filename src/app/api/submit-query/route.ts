// app/api/submit-query/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, query, college, program } = body;
    
    console.log('Processing query submission...');
    console.log('Name:', fullName);
    console.log('Email:', email);
    console.log('College:', college);
    console.log('Program:', program);
    
    // Create email transporter with updated configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.EMAIL_PASSWORD
      },
      tls: {
        rejectUnauthorized: false // Only use this in development
      }
    });

    // Verify transporter configuration
    await transporter.verify().catch(console.error);

    // Email content with sanitized input
    const mailOptions = {
      from: `"Query Form" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Query from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #333;">New Query Received</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>College:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${college}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Program:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${program || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Query:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${query}</td>
            </tr>
          </table>
        </div>
      `,
      // Plain text version as fallback
      text: `
        New Query Received
        ------------------
        Name: ${fullName}
        Phone: ${phone}
        Email: ${email}
        College: ${college}
        Program: ${program || 'Not specified'}
        Query: ${query}
      `
    };

    // Send email with error handling
    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ 
        success: true, 
        message: 'Query submitted successfully' 
      });
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to send email' 
      }, { status: 500 });
    }

  } catch (error) {
    console.error('Error processing query:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Server error' 
    }, { status: 500 });
  }
}