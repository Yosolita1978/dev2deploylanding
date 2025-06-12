import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Dev2Deploy - Next.js Development Course',
  description: 'Join the second cohort of our FREE development course. Learn to build and deploy real-world Next.js projects.',
  keywords: 'Next.js, React, Web Development, Course, Bootcamp',
  openGraph: {
    title: 'Dev2Deploy - Next.js Development Course',
    description: 'Join the second cohort of our FREE development course.',
    url: 'https://dev2deploylanding.vercel.app',
    images: [
      {
        url: 'https://dev2deploylanding.vercel.app/dev2deploy.png',
        width: 1200,
        height: 630,
        alt: 'Dev2Deploy – Build and Deploy with Next.js',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dev2Deploy - Next.js Development Course',
    description: 'Join the second cohort of our FREE development course.',
    images: ['https://dev2deploylanding.vercel.app/dev2deploy.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
