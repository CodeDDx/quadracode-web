"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { label: t.about.stat1Label, value: t.about.stat1Value, icon: "🏢" },
    { label: t.about.stat2Label, value: t.about.stat2Value, icon: "🌍" },
    { label: t.about.stat3Label, value: t.about.stat3Value, icon: "🤖" },
    { label: t.about.stat4Label, value: t.about.stat4Value, icon: "🤝" },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7c5cfc]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          custom={0}
          className="mb-4"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-[#7c5cfc]">
            {t.about.label}
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Title and description */}
          <div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              {t.about.title}
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={2}
              className="mt-6 text-lg text-[#8a8a9a] leading-relaxed"
            >
              {t.about.description}
            </motion.p>
          </div>

          {/* Right - Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                custom={i + 2}
                className="p-6 rounded-2xl bg-[#16161a] border border-white/5 hover:border-[#7c5cfc]/30 transition-all duration-500 group"
              >
                <span className="text-2xl mb-3 block">{stat.icon}</span>
                <p className="text-sm text-[#8a8a9a] mb-1">{stat.label}</p>
                <p className="text-lg font-semibold group-hover:text-[#7c5cfc] transition-colors">
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
