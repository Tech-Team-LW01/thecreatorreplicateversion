// // app/api/submit-application/route.ts

// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';
// // import dbConnect from '@/lib/mongodb';
// // import Application from '../../../../models/Application';
// import { getApplicationEmailTemplate } from '../../../../utils/emailTemplates';

// export async function POST(req: Request) {
//   try {
//     // Connect to database
//     // await dbConnect();

//     // Get form data
//     const formData = await req.json();
//     console.log('Received form data:', formData);

//     // Save to database
//     // const application = new Application(formData);
//     // await application.save();
//     // console.log('Application saved to database');

//     // Configure email transport
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT),
//       secure: false, // true for 465, false for other ports
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASSWORD,
//       },
//     });

//     // Send email to admin
//     await transporter.sendMail({
//       from: `"Summer Program" <${process.env.SMTP_USER}>`,
//       to: process.env.RECIPIENT_EMAIL,
//       subject: `New Summer Program Application - ${formData.fullName}`,
//       html: getApplicationEmailTemplate(formData),
//     });

//     // Send confirmation email to applicant
//     await transporter.sendMail({
//       from: `"Summer Program" <${process.env.SMTP_USER}>`,
//       to: formData.emailAddress,
//       subject: 'Application Received - Summer Program',
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
//           <h2 style="color: #dc2626;">Thank You for Your Application</h2>
//           <p>Dear ${formData.fullName},</p>
//           <p>We have received your application for the Summer Program. Our team will review your application and get back to you soon.</p>
//           <p>Application Details:</p>
//           <ul>
//             <li>Program: ${formData.applyingFor === 'others' ? formData.otherSpecification : formData.applyingFor}</li>
//             <li>Tentative Dates: ${formData.tentativeDates}</li>
//           </ul>
//           <p>If you have any questions, feel free to contact us.</p>
//           <p>Best regards,<br>Summer Program Team</p>
//         </div>
//       `,
//     });

//     // send email to preet mam 

//     await transporter.sendMail({
//       from: `"Summer Program" <${process.env.SMTP_USER}>`,
//       to: process.env.RECIPIENT_EMAIL,
//       subject: 'Application Received - Summer Program',
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
//           <h2 style="color: #dc2626;">New Application Received</h2>
//           <p> Name ${formData.fullName},</p>
//           <p> Whatsapp No ${formData.whatsappNo},</p>
//             <p> college ${formData.collegeName},</p>
//                         <p> Bransh ${formData.branch},</p>
//                                     <p> Semester ${formData.currentSemester},</p>

//                                                                         <p> Applying for ${formData.applyingFor},</p>

//                                                                          <p> Tentative Date ${formData.tentativeDates},</p>

//                                                                           <p> Source ${formData.source},</p>

//                                                                           <p> Query ${formData.query},</p>
                                                                         
          
//           <p>Application Details:</p>
          
//         </div>
//       `,
//     });
//     return NextResponse.json(
//       { message: 'Application submitted successfully' },
//       { status: 200 }
//     );

//   } catch (error) {
//     console.error('API Error:', error);
//     return NextResponse.json(
//       {
//         message: 'Failed to submit application',
//         error: error instanceof Error ? error.message : 'Unknown error'
//       },
//       { status: 500 }
//     );
//   }
// }









import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function getApplicationEmailTemplate(formData: any) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px;">
      <h2 style="color:#dc2626">New Summer Program Application</h2>
      <ul>
        <li><b>Name:</b> ${formData.fullName}</li>
        <li><b>WhatsApp No:</b> ${formData.whatsappNo}</li>
        <li><b>Email:</b> ${formData.emailAddress}</li>
        <li><b>College:</b> ${formData.collegeName}</li>
        <li><b>Branch:</b> ${formData.branch}</li>
        <li><b>Passing Year:</b> ${formData.currentSemester}</li>
        <li><b>Program:</b> ${formData.applyingFor === "others" ? formData.otherSpecification : formData.applyingFor}</li>
        <li><b>Tentative Dates:</b> ${formData.tentativeDates}</li>
        <li><b>Reference Name:</b> ${formData.referenceName || "-"}</li>
        <li><b>Source:</b> ${formData.source}</li>
        <li><b>Query:</b> ${formData.query || "-"}</li>
      </ul>
    </div>
  `;
}

export async function POST(req: Request) {
  try {
    const formData = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false, // Accept self-signed/Gmail's certs in node
      },
    });

    // Admin receives full details
    await transporter.sendMail({
      from: `"Summer Program" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Summer Program Application - ${formData.fullName}`,
      html: getApplicationEmailTemplate(formData),
    });

    // Applicant receives thank-you confirmation
    await transporter.sendMail({
      from: `"Summer Program" <${process.env.SMTP_USER}>`,
      to: formData.emailAddress,
      subject: 'Application Received - Summer Program',
      html: `
        <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto; padding:20px;">
          <h2 style="color:#dc2626;">Thank You for Your Application</h2>
          <p>Dear ${formData.fullName},</p>
          <p>We have received your application for the <b>Summer Program</b>. Our team will review your application and get back to you soon.</p>
          <p><b>Your Application Details:</b></p>
          <ul>
            <li><b>Program:</b> ${formData.applyingFor === "others" ? formData.otherSpecification : formData.applyingFor}</li>
            <li><b>Tentative Dates:</b> ${formData.tentativeDates}</li>
          </ul>
          <p>If you have any questions, feel free to contact us.</p>
          <p><b>Best regards,<br/>Summer Program Team</b></p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Application submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      {
        message: 'Failed to submit application',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}