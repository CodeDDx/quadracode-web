"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4d9fff]/20 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#7c5cfc]/[0.05] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-[#4d9fff]">
            {t.contact.label}
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-[#8a8a9a] text-lg max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={1}
          >
            <div className="p-8 rounded-3xl bg-[#16161a] border border-white/5">
              <h3 className="text-xl font-bold mb-2">{t.contact.formTitle}</h3>
              <p className="text-sm text-[#8a8a9a] mb-8">{t.contact.formSubtitle}</p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-[#8a8a9a] mb-2">{t.contact.formName} *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0a0b] border border-white/10 text-white placeholder-[#555] focus:border-[#7c5cfc]/50 focus:outline-none transition-colors"
                      placeholder={t.contact.formName}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#8a8a9a] mb-2">{t.contact.formEmail} *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0a0b] border border-white/10 text-white placeholder-[#555] focus:border-[#7c5cfc]/50 focus:outline-none transition-colors"
                      placeholder={t.contact.formEmail}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-[#8a8a9a] mb-2">{t.contact.formPhone}</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0a0b] border border-white/10 text-white placeholder-[#555] focus:border-[#7c5cfc]/50 focus:outline-none transition-colors"
                      placeholder={t.contact.formPhone}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#8a8a9a] mb-2">{t.contact.formProjectType}</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-[#0a0a0b] border border-white/10 text-[#8a8a9a] focus:border-[#7c5cfc]/50 focus:outline-none transition-colors appearance-none">
                      <option value="">{t.contact.formProjectType}</option>
                      {t.contact.formProjectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#8a8a9a] mb-2">{t.contact.formMessage} *</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0b] border border-white/10 text-white placeholder-[#555] focus:border-[#7c5cfc]/50 focus:outline-none transition-colors resize-none"
                    placeholder={t.contact.formMessageMin}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#7c5cfc] to-[#4d9fff] font-medium text-white hover:shadow-[0_0_30px_rgba(124,92,252,0.3)] transition-all duration-300"
                >
                  {t.contact.formSend}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right - Contact info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={2}
            className="space-y-5 lg:pt-4"
          >
            {/* Email */}
            <div className="p-6 rounded-2xl bg-[#16161a] border border-white/5 hover:border-white/10 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#7c5cfc]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#7c5cfc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#8a8a9a] mb-1">Email</p>
                  <p className="font-medium group-hover:text-[#7c5cfc] transition-colors">{t.contact.email}</p>
                </div>
              </div>
            </div>

            {/* Phones */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[#16161a] border border-white/5 hover:border-white/10 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#4d9fff]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#4d9fff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#8a8a9a] mb-1">Dubai</p>
                    <p className="font-medium text-sm group-hover:text-[#4d9fff] transition-colors">{t.contact.phoneDubai}</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-[#16161a] border border-white/5 hover:border-white/10 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00d4aa]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#00d4aa]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#8a8a9a] mb-1">Slovakia</p>
                    <p className="font-medium text-sm group-hover:text-[#00d4aa] transition-colors">{t.contact.phoneSK}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="p-6 rounded-2xl bg-[#16161a] border border-white/5 hover:border-white/10 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#7c5cfc]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#7c5cfc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#8a8a9a] mb-1">HQ</p>
                  <p className="font-medium text-sm group-hover:text-[#7c5cfc] transition-colors">{t.contact.address}</p>
                  <p className="text-xs text-[#8a8a9a] mt-1">{t.contact.license}</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#7c5cfc]/10 to-[#4d9fff]/10 border border-[#7c5cfc]/20">
              <p className="text-lg font-semibold mb-3">{t.contact.subtitle}</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#7c5cfc] to-[#4d9fff] font-medium text-white hover:shadow-[0_0_30px_rgba(124,92,252,0.3)] transition-all duration-300 group"
              >
                {t.contact.cta}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
