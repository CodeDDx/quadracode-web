"use client";

import dynamic from "next/dynamic";
import { LanguageProvider } from "@/lib/LanguageContext";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Services = dynamic(() => import("@/components/Services"), { ssr: false });
const Segments = dynamic(() => import("@/components/Segments"), { ssr: false });
const Founder = dynamic(() => import("@/components/Founder"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  return (
    <LanguageProvider>
      <div className="noise">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Segments />
        <Founder />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
