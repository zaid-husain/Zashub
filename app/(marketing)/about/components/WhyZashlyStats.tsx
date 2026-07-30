'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Rocket, Zap, Heart } from 'lucide-react';

const stats = [
  {
    label: 'Projects Built',
    value: '3+',
    icon: Rocket,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10'
  },
  {
    label: 'Users Growing',
    value: 'Every Day',
    icon: Heart,
    color: 'text-pink-400',
    bg: 'bg-pink-500/10'
  },
  {
    label: 'Modern Technologies',
    value: '20+',
    icon: ShieldCheck,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10'
  },
  {
    label: 'Focused On',
    value: 'Performance & Simplicity',
    icon: Zap,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10'
  }
];

export function WhyZashlyStats() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-semibold text-primary-400 backdrop-blur-md shadow-sm">
            <Zap className="w-4 h-4" />
            <span>Core Values</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Why <span className="bg-gradient-to-r from-primary-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">Zashly</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 text-center space-y-4 group">
                  <div className={`w-12 h-12 mx-auto rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg ${stat.bg}`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-primary-400 transition-colors">
                      {stat.value}
                    </h3>
                    <p className="text-sm font-medium text-neutral-400">
                      {stat.label}
                    </p>
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
