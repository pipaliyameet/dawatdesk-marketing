import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://dawatdesk.vercel.app'),
  title: {
    default: 'DawatDesk — The Digital Control Desk of Your Restaurant | Restaurant POS & Operations SaaS',
    template: '%s | DawatDesk Restaurant Management'
  },
  description: 'Run Your Restaurant. Not Behind It. DawatDesk brings your dining floor, kitchen display tickets, cashier billing counter, and owner performance metrics into one integrated, real-time platform.',
  keywords: [
    'restaurant management software',
    'restaurant POS software',
    'restaurant billing software',
    'restaurant order management system',
    'kitchen display system',
    'KDS software',
    'KOT printing software',
    'restaurant POS India',
    'table management system',
    'cafe billing software',
    'restaurant CRM software'
  ],
  authors: [{ name: 'DawatDesk Technologies' }],
  creator: 'DawatDesk Technologies',
  publisher: 'DawatDesk',
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
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://dawatdesk.vercel.app',
    siteName: 'DawatDesk',
    title: 'DawatDesk — The Digital Control Desk of Your Restaurant',
    description: 'Connect your front-of-house waitstaff, paperless kitchen tickets, and instant POS billing into one synchronized restaurant management platform.',
    images: [
      {
        url: '/images/screenshots/02_restaurant_dashboard.png',
        width: 1440,
        height: 900,
        alt: 'DawatDesk Restaurant Control Desk Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DawatDesk — The Digital Control Desk of Your Restaurant',
    description: 'Empower your restaurant team with synchronized table ordering, kitchen display system, and rapid POS checkout.',
    images: ['/images/screenshots/02_restaurant_dashboard.png'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'DawatDesk',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web Browser, iOS, Android, macOS, Windows',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: 'Personalized consultation and flexible outlet tiers'
    },
    description: 'DawatDesk is a modern, unified restaurant management and POS platform connecting floor waitstaff, kitchen display systems, cashier billing counters, and multi-outlet administrators.',
    url: 'https://dawatdesk.vercel.app',
    screenshot: 'https://dawatdesk.vercel.app/images/screenshots/02_restaurant_dashboard.png',
    author: {
      '@type': 'Organization',
      name: 'DawatDesk',
      url: 'https://dawatdesk.vercel.app'
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-[#c89b3c]/20 selection:text-[#744d20]">
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
