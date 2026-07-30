'use client';

import { Zap } from 'lucide-react';
import Link from 'next/link';

export function AboutFooter() {
  return (
    <footer className="border-t border-white/10 py-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Left: Brand & Copyright */}
          <div className="space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2 group">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold text-xs shadow-md group-hover:scale-105 transition-transform">
                Z
              </div>
              <span className="font-bold text-white tracking-tight">Zashub</span>
            </div>
            <p className="text-xs text-neutral-500 font-medium">
              © {new Date().getFullYear()} Zashub. All rights reserved.
            </p>
          </div>

          {/* Center: Creator Credit */}
          <div className="text-sm text-neutral-400 font-medium">
            Made with ❤️ by{' '}
            <a
              href="https://github.com/zaid-husain"
              target="_blank"
              rel="noreferrer"
              className="text-white font-semibold hover:text-primary-400 transition-colors underline underline-offset-4"
            >
              Zaid Husain
            </a>
          </div>

          {/* Right: Signature */}
          <div>
            <a
              href="https://zashly.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-tr from-primary-500 to-purple-600 shadow-sm shadow-primary-500/20 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[10px] uppercase tracking-wider font-bold text-neutral-500 leading-none mb-0.5">
                  Powered by
                </span>
                <span className="text-sm font-bold bg-gradient-to-r from-white to-neutral-300 group-hover:from-primary-400 group-hover:to-blue-400 bg-clip-text text-transparent transition-all duration-300 leading-none">
                  Zashly
                </span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
