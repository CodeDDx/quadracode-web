"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4d9fff]/20 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#7c5cfc]/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium tracking-widest uppercase text-[#4d9fff]">
              {t.contact.label}
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              {t.contact.title}
            </h2>
            <p className="mt-6 text-lg text-[#8a8a9a] leading-relaxed">
              {t.contact.subtitle}
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-full bg-gradient-to-r from-[#7c5cfc] to-[#4d9fff] font-medium text-white hover:shadow-[0_0_40px_rgba(124,92,252,0.3)] transition-all duration-500 group"
            >
              {t.contact.cta}
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Right - Contact details */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Email */}
            <div className="p-6 rounded-2xl bg-[#16161a] border border-white/5 hover:border-white/10 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#7c5cfc]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#7c5cfc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#8a8a9a] mb-1">Email</p>
                  <p className="font-medium group-hover:text-[#7c5cfc] transition-colors">
                    {t.contact.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Phones */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[#16161a] border border-white/5 hover:border-white/10 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#4d9fff]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#4d9fff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#8a8a9a] mb-1">Dubai</p>
                    <p className="font-medium text-sm group-hover:text-[#4d9fff] transition-colors">
                      {t.contact.phoneDubai}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#16161a] border border-white/5 hover:border-white/10 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00d4aa]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#00d4aa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#8a8a9a] mb-1">Slovakia</p>
                    <p className="font-medium text-sm group-hover:text-[#00d4aa] transition-colors">
                      {t.contact.phoneSK}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="p-6 rounded-2xl bg-[#16161a] border border-white/5 hover:border-white/10 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#7c5cfc]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#7c5cfc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#8a8a9a] mb-1">HQ</p>
                  <p className="font-medium text-sm group-hover:text-[#7c5cfc] transition-colors">
                    {t.contact.address}
                  </p>
                  <p className="text-xs text-[#8a8a9a] mt-1">{t.contact.license}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
