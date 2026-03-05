"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#7c5cfc]/[0.07] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#4d9fff]/[0.05] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#00d4aa] animate-pulse" />
          <span className="text-sm text-[#8a8a9a] tracking-widest uppercase">
            {t.hero.tagline}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
        >
          {t.hero.title1}
          <br />
          <span className="gradient-text">{t.hero.title2}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 text-base md:text-lg text-[#8a8a9a] max-w-2xl mx-auto leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#7c5cfc] to-[#4d9fff] font-medium text-white hover:shadow-[0_0_30px_rgba(124,92,252,0.3)] transition-all duration-300"
          >
            {t.hero.cta}
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 text-[#8a8a9a] hover:text-white hover:border-white/20 transition-all duration-300"
          >
            {t.hero.scrollDown}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0b] to-transparent pointer-events-none" />
    </section>
  );
}
