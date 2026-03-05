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

export default function Segments() {
  const { t } = useLanguage();

  const segments = [
    {
      title: t.segments.seg1Title,
      subtitle: t.segments.seg1Subtitle,
      items: t.segments.seg1Items,
      accent: "#7c5cfc",
      number: "01",
    },
    {
      title: t.segments.seg2Title,
      subtitle: t.segments.seg2Subtitle,
      items: t.segments.seg2Items,
      accent: "#4d9fff",
      number: "02",
    },
    {
      title: t.segments.seg3Title,
      subtitle: t.segments.seg3Subtitle,
      items: t.segments.seg3Items,
      accent: "#00d4aa",
      number: "03",
    },
  ];

  return (
    <section className="relative py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4aa]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-[#00d4aa]">
            {t.segments.label}
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">{t.segments.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {segments.map((seg, i) => (
            <motion.div
              key={seg.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={i + 1}
              className="group relative p-8 rounded-3xl bg-[#16161a] border border-white/5 hover:border-white/10 transition-all duration-500"
            >
              <span
                className="text-6xl font-black opacity-5 absolute top-4 right-6"
                style={{ color: seg.accent }}
              >
                {seg.number}
              </span>

              <div
                className="w-3 h-3 rounded-full mb-6"
                style={{ backgroundColor: seg.accent }}
              />

              <h3 className="text-xl font-bold mb-2">{seg.title}</h3>
              <p className="text-sm text-[#8a8a9a] mb-6">{seg.subtitle}</p>

              <ul className="space-y-3">
                {seg.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#8a8a9a]">
                    <svg
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: seg.accent }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
