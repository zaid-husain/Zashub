import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { QueryProvider } from '@/providers/query-provider';
import AuthProvider from '@/components/providers/AuthProvider';
import { SocketProvider } from '@/lib/providers/SocketProvider';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { JsonLdSchema } from '@/components/seo/JsonLdSchema';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://zashub.vercel.app'),
  title: {
    default: 'Zashub – Discover Places, Events & Local Community',
    template: '%s | Zashub',
  },
  description:
    'Discover nearby places, businesses, events, jobs, services and local updates with Zashub. Connect with your hometown community through one modern platform.',
  keywords: [
    'Zashub',
    'local community',
    'community app',
    'hometown',
    'city guide',
    'local events',
    'business directory',
    'local marketplace',
    'nearby services',
    'local jobs',
    'restaurants',
    'travel',
    'community platform',
    'India',
    'discover local',
  ],
  authors: [{ name: 'Zashub', url: 'https://zashub.vercel.app' }],
  creator: 'Zashly',
  publisher: 'Zashly',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Zashub – Discover Places, Events & Local Community',
    description:
      'Discover nearby places, businesses, events, jobs, services and local updates with Zashub. Connect with your hometown community through one modern platform.',
    type: 'website',
    url: 'https://zashub.vercel.app',
    siteName: 'Zashub',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zashub – Discover Places, Events & Local Community',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zashub – Discover Places, Events & Local Community',
    description:
      'Discover nearby places, businesses, events, jobs, services and local updates with Zashub. Connect with your hometown community through one modern platform.',
    images: ['/og-image.png'],
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
};

export const viewport: Viewport = {
  themeColor: '#2563EB',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <JsonLdSchema />
      </head>
      <body className="font-sans antialiased">
        <QueryProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <AuthProvider>
              <SocketProvider>
                {children}
              </SocketProvider>
            </AuthProvider>
          </ThemeProvider>
        </QueryProvider>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'var(--color-surface)',
              color: 'var(--color-text-primary)',
              border: '1px solid var(--color-border)',
              borderRadius: '14px',
              padding: '12px 16px',
              fontSize: '14px',
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.08)',
            },
          }}
        />
      </body>
    </html>
  );
}

