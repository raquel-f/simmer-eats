import Head from 'next/head';
import { Montserrat } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

// components
import Footer from './_components/footer';

// style
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Simmer Eats',
  description: 'Sim-tastic cuisine',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className={`${montserrat.className} h-screen w-screen`} suppressHydrationWarning={true} >

        {/* Content */}
        {children}

        {/* Footer */}
        <Footer />

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  )
}
