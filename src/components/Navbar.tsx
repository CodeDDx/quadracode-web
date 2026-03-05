"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { Lang } from "@/lib/translations";

const langLabels: Record<Lang, string> = { sk: "SK", en: "EN", de: "DE" };

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#founder", label: t.nav.founder },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0b]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <Image
            src="/images/logo.png"
            alt="Quadra Code"
            width={40}
            height={40}
            className="invert brightness-200 transition-transform group-hover:scale-110"
          />
          <span className="text-lg font-bold tracking-wider hidden sm:block">
            QUADRA <span className="gradient-text">CODE</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#8a8a9a] hover:text-white transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </a>
          ))}

          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="text-sm text-[#8a8a9a] hover:text-white transition-colors border border-white/10 rounded-lg px-3 py-1.5 flex items-center gap-1.5"
            >
              {langLabels[lang]}
              <svg
                className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="absolute top-full mt-2 right-0 bg-[#16161a] border border-white/10 rounded-lg overflow-hidden"
                >
                  {(Object.keys(langLabels) as Lang[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        setLang(l);
                        setLangOpen(false);
                      }}
                      className={`block w-full px-4 py-2 text-sm text-left hover:bg-white/5 transition-colors ${
                        lang === l ? "text-white bg-white/5" : "text-[#8a8a9a]"
                      }`}
                    >
                      {langLabels[l]}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="#contact"
            className="text-sm font-medium px-5 py-2 rounded-full bg-gradient-to-r from-[#7c5cfc] to-[#4d9fff] hover:opacity-90 transition-opacity"
          >
            {t.nav.bookCall}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0b]/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#8a8a9a] hover:text-white transition-colors text-lg"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-2 pt-2">
                {(Object.keys(langLabels) as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLang(l);
                      setMenuOpen(false);
                    }}
                    className={`px-3 py-1 rounded-lg text-sm border transition-colors ${
                      lang === l
                        ? "border-[#7c5cfc] text-white"
                        : "border-white/10 text-[#8a8a9a]"
                    }`}
                  >
                    {langLabels[l]}
                  </button>
                ))}
              </div>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-center font-medium px-5 py-3 rounded-full bg-gradient-to-r from-[#7c5cfc] to-[#4d9fff] mt-2"
              >
                {t.nav.bookCall}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
