import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Zap } from 'lucide-react';
import { MeetCreator } from './components/MeetCreator';
import { ZashlyEcosystem } from './components/ZashlyEcosystem';
import { WhyZashlyStats } from './components/WhyZashlyStats';
import { AboutFooter } from './components/AboutFooter';

export const metadata: Metadata = {
  title: 'About Zashub | Built by Zaid Husain',
  description:
    'Learn about Zashub, the modern local community platform created by Zaid Husain. Explore the Zashly ecosystem including Zashly, Zashio, and future innovative products.',
  keywords: 'Zashub, Zaid Husain, Zashly, Zashio, Full Stack Developer, Software Engineer, Community Platform, Local Discovery, Web Developer, MERN Developer, Portfolio, AI, Startup, India',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Zashub | Built by Zaid Husain',
    description:
      'Learn about Zashub, the modern local community platform created by Zaid Husain. Explore the Zashly ecosystem.',
    url: 'https://zashub.vercel.app/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Zashub | Built by Zaid Husain',
    description: 'Learn about Zashub, the modern local community platform created by Zaid Husain. Explore the Zashly ecosystem.',
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "name": "Zaid Husain",
        "jobTitle": "Founder & Full-Stack Software Engineer",
        "url": "https://zaidhusain.vercel.app/",
        "sameAs": [
          "https://www.linkedin.com/in/zaid-husain/",
          "https://github.com/zaid-husain"
        ]
      },
      {
        "@type": "Organization",
        "name": "Zashly",
        "url": "https://zashly.vercel.app/",
        "founder": {
          "@type": "Person",
          "name": "Zaid Husain"
        }
      },
      {
        "@type": "WebSite",
        "name": "Zashub",
        "url": "https://zashub.vercel.app/"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Zashub",
        "applicationCategory": "SocialNetworkingApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "0"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-primary-500 selection:text-white flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Header Navigation */}
      <header className="border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center font-bold text-white shadow-md shadow-primary-500/20 group-hover:scale-105 transition-transform">
              Z
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Zashub</span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="flex-grow">
        {/* 1. Hero / Intro specific to Zashub */}
        <section className="relative py-20 lg:py-24 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.15),transparent_50%)] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-primary-400 mb-6">
              <Zap className="w-3.5 h-3.5" />
              Discover Your City. Connect Locally.
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Connecting hometowns through modern technology.
            </h1>

            <p className="text-lg sm:text-xl text-neutral-400 leading-relaxed font-medium max-w-3xl mx-auto">
              Zashub is a modern local community platform where people can discover places, events, businesses, services, jobs, local updates, and connect with their hometown community through a beautiful and fast experience.
            </p>
          </div>
        </section>

        {/* 2. Meet the Creator */}
        <MeetCreator />

        {/* 3. Why Zashly (Stats) */}
        <WhyZashlyStats />

        {/* 4. Explore More Zashly Products */}
        <ZashlyEcosystem />
      </main>

      {/* 5. Custom Footer */}
      <AboutFooter />
    </div>
  );
}
