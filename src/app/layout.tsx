import type { Metadata } from "next";
import React from "react";
import localFont from "next/font/local";
import { Roboto } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/customComponents/Navbar";
import Footer from "@/components/customComponents/Footer";
import Footer2 from "@/components/customComponents/Footer2";
import Footer3 from "@/components/Footer3";
import WhatsAppBot from "@/components/customComponents/Whatsapp/Whatsapp";

import Script from "next/script";
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const khandFont = localFont(
  {
    src: './fonts/Khand-SemiBold.woff',
    weight: '100 900',
  }
)

export const metadata: Metadata = {
  title: "The Creator",
  description: "Summer Internship Industrial Training Program 2025 | Exclusively for Engineering Students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TJ4GNXH7');`}
        </Script>
        {/* End Google Tag Manager */}
        
        {/* Google Analytics Script - Your existing code */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-1011251689" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-1011251689');
          `}
        </Script>
      </head>
      <body
        className={`${khandFont.className} bg-black overflow-x-hidden antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript dangerouslySetInnerHTML={{ __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TJ4GNXH7"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `}} />
        {/* End Google Tag Manager (noscript) */}

        <div className="overflow-x-hidden">
          <Navbar/>
          {children}
          <WhatsAppBot/>
          <Footer/>
          <Footer3/>
          {/* <Footer2/> */}
        </div>
      </body>
    </html>
  );
}