"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function Founder() {
  const { t } = useLanguage();

  return (
    <section id="founder" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7c5cfc]/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#7c5cfc]/3 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-[#7c5cfc]">
            {t.founder.label}
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden">
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-3xl animated-border z-10" />
              <Image
                src="/images/marek.jpg"
                alt={t.founder.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 288px, 384px"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/60 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-[#16161a] border border-white/10 rounded-2xl px-5 py-3 backdrop-blur-xl"
            >
              <p className="text-xs text-[#8a8a9a]">QUADRA CODE</p>
              <p className="text-sm font-bold gradient-text">{t.founder.role}</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              {t.founder.name}
            </h2>
            <p className="text-lg text-[#7c5cfc] font-medium mb-8">
              {t.founder.role}
            </p>

            {/* Quote */}
            <div className="relative">
              <svg
                className="absolute -top-4 -left-4 w-10 h-10 text-[#7c5cfc]/20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
              </svg>
              <p className="text-2xl md:text-3xl font-light text-[#8a8a9a] leading-relaxed italic pl-8">
                &ldquo;{t.founder.quote}&rdquo;
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-10 justify-center lg:justify-start">
              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-[#16161a] border border-white/5 flex items-center justify-center hover:border-[#7c5cfc]/30 hover:bg-[#7c5cfc]/10 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-[#8a8a9a] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-[#16161a] border border-white/5 flex items-center justify-center hover:border-[#7c5cfc]/30 hover:bg-[#7c5cfc]/10 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-[#8a8a9a] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
