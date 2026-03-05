"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const ServiceIcon1 = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
);

const ServiceIcon2 = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg>
);

const ServiceIcon3 = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
  </svg>
);

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <ServiceIcon1 />,
      title: t.services.s1Title,
      desc: t.services.s1Desc,
      gradient: "from-[#7c5cfc] to-[#a78bfa]",
    },
    {
      icon: <ServiceIcon2 />,
      title: t.services.s2Title,
      desc: t.services.s2Desc,
      gradient: "from-[#4d9fff] to-[#7dd3fc]",
    },
    {
      icon: <ServiceIcon3 />,
      title: t.services.s3Title,
      desc: t.services.s3Desc,
      gradient: "from-[#00d4aa] to-[#6ee7b7]",
    },
  ];

  return (
    <section id="services" className="relative py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4d9fff]/20 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-[#7c5cfc]/[0.04] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-[#4d9fff]">
            {t.services.label}
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">{t.services.title}</h2>
          <p className="mt-4 text-[#8a8a9a] text-lg">{t.services.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={i + 1}
              className="group relative p-8 rounded-3xl bg-[#16161a] border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700`}
              />

              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6`}
              >
                <span className="text-white">{service.icon}</span>
              </div>

              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-[#8a8a9a] leading-relaxed">{service.desc}</p>

              {/* Bottom gradient line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
