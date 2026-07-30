'use client';

import React from 'react';
import Link from 'next/link';

export function FooterSection() {
  return (
    <footer className="bg-[#0a0a0a] text-neutral-400 border-t border-white/5" id="footer-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8 mb-20">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                Z
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Zashub</span>
            </div>
            <p className="text-neutral-500 font-medium leading-relaxed mb-8">
              Discover Your City. Connect Locally. Modern local community platform for places, events, businesses, services, and jobs.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
                <a key={social} href="#" className="text-neutral-500 hover:text-white transition-colors text-sm font-medium">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-16 w-full lg:w-auto">
            {[
              {
                title: 'Platform',
                links: [
                  { label: 'Features', href: '#features' },
                  { label: 'Communities', href: '/communities' },
                  { label: 'Events', href: '/events' },
                  { label: 'Feed', href: '/feed' },
                ],
              },
              {
                title: 'Company',
                links: [
                  { label: 'About', href: '/about' },
                  { label: 'Blog', href: '#' },
                  { label: 'Careers', href: '#' },
                  { label: 'Contact', href: '#' },
                ],
              },
              {
                title: 'Legal',
                links: [
                  { label: 'Privacy Policy', href: '#' },
                  { label: 'Terms of Service', href: '#' },
                  { label: 'Cookie Policy', href: '#' },
                ],
              },
            ].map((group) => (
              <div key={group.title}>
                <h4 className="text-white font-bold mb-6">{group.title}</h4>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-neutral-500 hover:text-white transition-colors text-sm font-medium">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
          <p className="text-neutral-500 text-sm font-medium">
            © 2026 Zashub. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium">
            <a
              href="https://zashly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-neutral-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 shadow-sm group"
            >
              <span className="text-amber-400 group-hover:animate-pulse">⚡</span> Powered by <span className="text-white font-bold tracking-tight">Zashly</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

