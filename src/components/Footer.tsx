"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Quadra Code"
              width={32}
              height={32}
              className="invert brightness-200"
            />
            <span className="text-sm font-bold tracking-wider">
              QUADRA <span className="gradient-text">CODE</span>
            </span>
            <span className="text-sm text-[#8a8a9a]">— FZCO</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-[#8a8a9a]">
            <a href="#" className="hover:text-white transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {t.footer.terms}
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-[#8a8a9a]">
            &copy; {new Date().getFullYear()} Quadracode. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
