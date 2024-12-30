import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://kingdomnamegenerator.pro'),
  title: 'Best Kingdom Name Generator Online | Instant Empire Name Generator with Cultural Significance',
  description: 'Unleash your creativity with the ultimate kingdom name generator! Our tool provides a diverse range of 10 random names per click, tailored to literature, games, or other endeavors. Try it now & get unique names that set your story apart!',
  keywords: 'kingdom name generator, fantasy names, kingdom names, fantasy kingdom generator, medieval names',
  authors: [{ name: 'Kingdom Name Generator' }],
  creator: 'Kingdom Name Generator',
  publisher: 'Kingdom Name Generator',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Kingdom Name Generator',
    description: 'Generate majestic and unique names for your fantasy kingdoms',
    url: 'https://kingdomnamegenerator.pro',
    siteName: 'Kingdom Name Generator',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Kingdom Name Generator - Create unique names for your fantasy kingdoms',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kingdom Name Generator',
    description: 'Generate majestic and unique names for your fantasy kingdoms',
    creator: '@kingdomnamegen',
    images: ['/api/og'],
  },
  verification: {
    google: 'TDYtDY0_Wc7kS1Hw6DgU_VKPxUCpnphlN7Tdux3rS6k',
  },
  alternates: {
    canonical: 'https://kingdomnamegenerator.pro/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-royal-50 text-royal-900`}>
        {children}
      </body>
    </html>
  )
}
