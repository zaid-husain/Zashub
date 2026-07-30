'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Layers, Sparkles, MapPin, Briefcase } from 'lucide-react';

const products = [
  {
    id: 'zashly',
    name: 'Zashly',
    category: 'Communication',
    description: 'Connect instantly with friends through secure messaging, real-time chat, voice & video calling, and a modern social experience.',
    icon: Sparkles,
    gradient: 'from-blue-500 to-cyan-400',
    cta: 'Explore Zashly',
    url: 'https://zashly.vercel.app/',
    isHere: false,
  },
  {
    id: 'zashio',
    name: 'Zashio',
    category: 'AI & Hiring',
    description: 'An AI-powered recruitment and campus placement platform helping students, recruiters, and companies hire smarter and faster.',
    icon: Briefcase,
    gradient: 'from-indigo-500 to-primary-500',
    cta: 'Explore Zashio',
    url: 'https://zashio.com',
    isHere: false,
  },
  {
    id: 'zashub',
    name: 'Zashub',
    category: 'Local Discovery',
    description: 'Discover places, events, businesses, jobs, services, and everything happening around your city in one beautifully designed platform.',
    icon: MapPin,
    gradient: 'from-emerald-500 to-teal-400',
    cta: 'You\'re Here',
    url: '#',
    isHere: true,
  },
];

export function ZashlyEcosystem() {
  return (
    <section className="py-24 relative overflow-hidden border-t border-white/5 bg-[#0a0a0a]">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-semibold text-primary-400 backdrop-blur-md shadow-sm">
            <Layers className="w-4 h-4" />
            <span>Product Showcase</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Explore More from <span className="bg-gradient-to-r from-primary-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">Zashly</span>
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Discover more products designed to make everyday life smarter, faster, and more connected.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, idx) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="h-full"
              >
                <div className="h-full p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group flex flex-col relative overflow-hidden">
                  
                  {/* Subtle top glow line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon & Category */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.gradient} p-0.5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full bg-[#0a0a0a] rounded-[14px] flex items-center justify-center text-white">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-neutral-500 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      {product.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-3 mb-8 flex-grow">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-6 border-t border-white/5 mt-auto">
                    <a
                      href={product.url}
                      target={product.isHere ? undefined : '_blank'}
                      rel={product.isHere ? undefined : 'noreferrer'}
                      className={`inline-flex items-center justify-center w-full gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-sm ${
                        product.isHere
                          ? 'bg-white/5 text-neutral-400 border border-white/5 cursor-default'
                          : 'bg-white/[0.05] border border-white/10 text-white hover:bg-white/[0.1] hover:border-white/20 hover:text-primary-400'
                      }`}
                    >
                      {product.cta}
                      {!product.isHere && <ExternalLink className="w-4 h-4 opacity-75" />}
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
