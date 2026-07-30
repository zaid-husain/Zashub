'use client';

import { motion } from 'framer-motion';
import { Mail, ExternalLink, Code2 } from 'lucide-react';
import { FiGithub as Github, FiLinkedin as Linkedin } from 'react-icons/fi';
import Image from 'next/image';

const socials = [
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:zaidquazi412@gmail.com',
    color: 'hover:text-blue-400',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/zaid-husain/',
    color: 'hover:text-blue-500',
  },
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/zaid-husain',
    color: 'hover:text-purple-400',
  },
  {
    name: 'Portfolio',
    icon: ExternalLink,
    url: 'https://zaidhusain.vercel.app/',
    color: 'hover:text-emerald-400',
  }
];

export function MeetCreator() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08),transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-semibold text-primary-400 backdrop-blur-md shadow-sm">
            <Code2 className="w-4 h-4" />
            <span>Built by Zaid Husain</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Meet the <span className="bg-gradient-to-r from-primary-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">Creator</span>
          </h2>
        </motion.div>

        {/* Creator Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl overflow-hidden p-8 sm:p-12 group hover:border-white/20 transition-all duration-500 relative"
        >
          {/* Subtle gradient border effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center relative z-10">
            
            {/* Avatar Profile */}
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="relative group/avatar">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-3xl blur opacity-30 group-hover/avatar:opacity-60 transition duration-500" />
                <div className="relative w-48 h-48 rounded-3xl overflow-hidden border border-white/10 bg-black/50 p-1">
                  <Image
                    src="/1.png"
                    alt="Zaid Husain"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover/avatar:scale-105"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-white tracking-tight">Zaid Husain</h3>
                <p className="text-sm font-semibold text-primary-400">
                  Founder • Full-Stack Software Engineer
                </p>
              </div>
            </div>

            {/* Bio & Socials */}
            <div className="space-y-8">
              <p className="text-neutral-400 text-lg leading-relaxed font-medium">
                Hi, I'm <strong className="text-white">Zaid Husain</strong>, a passionate Full-Stack Software Engineer focused on building modern, scalable, and user-friendly digital products. I love solving real-world problems through clean design, powerful technology, and thoughtful user experiences. Every Zashly product is built with performance, simplicity, and innovation in mind.
              </p>

              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-widest font-bold text-neutral-500">Connect & Explore</h4>
                <div className="flex flex-wrap gap-4">
                  {socials.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm font-semibold text-neutral-300 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 shadow-sm ${social.color}`}
                      >
                        <Icon className="w-4 h-4" />
                        {social.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
