import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, query, college, program } = body; // Added program field
    
    console.log('Processing contact form submission...');
    console.log('Name:', fullName);
    console.log('Email:', email);
    console.log('College:', college);
    console.log('Program:', program); // Log program field

    // Create transporter with more detailed configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        // Do not fail on invalid certificates
        rejectUnauthorized: false,
      },
      debug: true // Enable verbose logging
    });

    // Verify transporter configuration
    await transporter.verify().catch(error => {
      console.error('Transporter verification failed:', error);
      throw new Error(`SMTP Configuration Error: ${error instanceof Error ? error.message : String(error)}`);
    });

    // Email content
    const mailOptions = {
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Summerinternship.in New Query from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Query Received of Summer Internship </h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>College Name:</strong> ${college}</p>
          <p><strong>Program:</strong> ${program || 'Not specified'}</p>
          <p><strong>Query:</strong> ${query}</p>
        </div>
      `,
      // Add text version for email clients that don't support HTML
      text: `
        New Query Received
        ------------------
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        College Name: ${college}
        Program: ${program || 'Not specified'}
        Query: ${query}
      `,
    };

    // Send email with better error handling
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.messageId);
      return NextResponse.json(
        { success: true, message: 'Query submitted successfully' },
        { status: 200 }
      );
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error('Error in sendMail:', errorMessage);
      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to send email', 
          error: errorMessage 
        },
        { status: 500 }
      );
    }
    
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('Error processing request:', errorMessage);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Server error processing your request', 
        error: errorMessage 
      },
      { status: 500 }
    );
  }
}