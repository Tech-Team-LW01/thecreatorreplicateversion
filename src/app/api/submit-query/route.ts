import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: 'New Summer Internship Query',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; text-align: center; padding: 20px 0; background-color: #f8f9fa; margin: 0;">
            New Query Received
          </h2>
          
          <div style="padding: 20px; border: 1px solid #ddd; border-radius: 5px; margin-top: 20px;">
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">Name:</strong>
              <div style="margin-top: 5px;">${body.name}</div>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">WhatsApp Number:</strong>
              <div style="margin-top: 5px;">${body.whatsapp}</div>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">Email:</strong>
              <div style="margin-top: 5px;">${body.email}</div>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #555;">Query:</strong>
              <div style="margin-top: 5px; white-space: pre-wrap;">${body.query}</div>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            This is an automated message from your website's contact form.
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Thank you! Your query has been submitted successfully.'
    });

  } catch (error) {
    // Log error for debugging
    console.error('Failed to send email:', error);

    // Return error response
    return NextResponse.json({
      success: false,
      message: 'Failed to submit query. Please try again later.'
    }, { status: 500 });
  }
}