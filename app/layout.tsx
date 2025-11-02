import type { Metadata, Viewport } from 'next'
import './globals.css'
import PWAHandler from '@/components/shared/PWAHandler'
import ThemeProvider from '@/components/shared/ThemeProvider'

export const metadata: Metadata = {
  title: 'Professional Power BI Course | Master Data Visualization',
  description: 'Comprehensive Power BI training from beginner to advanced. Learn data modeling, DAX, visualization, and become a Power BI expert.',
  keywords: ['power bi', 'data visualization', 'business intelligence', 'bi training', 'power bi course', 'dax', 'data analysis', 'analytics'],
  authors: [{ name: 'Power BI Course' }],
  openGraph: {
    title: 'Professional Power BI Course | Master Data Visualization',
    description: 'Comprehensive Power BI training from beginner to advanced. Learn data modeling, DAX, visualization, and become a Power BI expert.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Power BI Course',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Power BI Course | Master Data Visualization',
    description: 'Comprehensive Power BI training from beginner to advanced. Learn data modeling, DAX, visualization, and become a Power BI expert.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#082434' },
    { media: '(prefers-color-scheme: dark)', color: '#082434' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Course',
              name: 'Professional Power BI Course',
              description: 'Comprehensive Power BI training from beginner to advanced. Learn data modeling, DAX, visualization, and become a Power BI expert.',
              provider: {
                '@type': 'Organization',
                name: 'Power BI Course',
              },
              courseMode: 'online',
              educationalLevel: 'Beginner to Advanced',
              teaches: [
                'Power BI Desktop',
                'Data Visualization',
                'DAX Formulas',
                'Business Intelligence',
                'Data Modeling',
                'Dashboard Design',
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '200',
              },
            }),
          }}
        />
      </head>
      <body className="pb-20 lg:pb-0 overscroll-y-none">
        <ThemeProvider>
          {/* Preconnect to external domains for performance */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="manifest" href="/manifest.json" />
          <PWAHandler />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
