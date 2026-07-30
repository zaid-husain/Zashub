'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  { q: 'What is Zashub?', a: 'Zashub is a modern local community platform where people can discover places, events, businesses, services, jobs, local updates, and connect with their hometown community through a beautiful and fast experience.' },
  { q: 'Is Zashub free to use?', a: 'Yes! Zashub is completely free for individuals and local communities. Core features for discovering events, connecting locally, and interacting with neighbor groups will always remain free.' },
  { q: 'How do I create a community on Zashub?', a: 'Simply sign up, click "Create Community", fill in your community details (name, location, description), and invite your neighbors. You can create public or private communities.' },
  { q: 'How is my data protected on Zashub?', a: 'We use industry-standard encryption, secure authentication with JWT tokens, and follow strict data privacy practices. Your personal data is never sold to third parties.' },
  { q: 'Can I moderate my community on Zashub?', a: 'Absolutely! Community owners can appoint moderators, set community rules, approve/reject members and posts, and manage reports. Full moderation tools are included.' },
];

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="border-b border-neutral-200 dark:border-neutral-700 last:border-0">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between py-5 text-left group" aria-expanded={isOpen}>
        <span className="text-body font-semibold text-neutral-900 dark:text-white pr-4 group-hover:text-primary-600 transition-colors">{faq.q}</span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0 text-neutral-400">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </motion.span>
      </button>
      <motion.div initial={false} animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="overflow-hidden">
        <p className="pb-5 text-body text-neutral-500 leading-relaxed pr-8">{faq.a}</p>
      </motion.div>
    </motion.div>
  );
}

export function FAQSection() {
  return (
    <section className="section-padding bg-neutral-50 dark:bg-neutral-950" id="faq-section">
      <div className="container-app max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-caption font-semibold uppercase tracking-widest text-primary-600 mb-3 block">FAQ</span>
          <h2 className="text-h1 text-neutral-900 dark:text-white mb-4">Frequently Asked Questions</h2>
        </motion.div>
        <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6 md:p-8">
          {faqs.map((faq, index) => <FAQItem key={index} faq={faq} index={index} />)}
        </div>
      </div>
    </section>
  );
}
