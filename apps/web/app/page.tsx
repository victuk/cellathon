"use client";

import { CtaSection } from "components/cta-section";
import { FeaturesGrid } from "components/features-grid";
import { HeroSection } from "components/hero-section";
import { StatsSection } from "components/stats-section";
import { TournamentPreview } from "components/tournament-preview";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative flex-1 overflow-hidden bg-linear-to-b from-[#F9FAF9] via-white to-[#E9FDF2] text-foreground">
      {/* === Subtle Animated Gradient Layer === */}
      <motion.div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(53,208,127,0.15),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(251,204,92,0.15),transparent_60%)]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* === Content Sections === */}
      <section className="relative z-10 space-y-24 py-10 md:py-20">
        <HeroSection />
        <FeaturesGrid />
        <StatsSection />
        <TournamentPreview />
        <CtaSection />
      </section>

      {/* === Soft Floating Glow (for premium feel) === */}
      <div className="absolute -top-40 right-0 w-[400px] h-[400px] bg-[#35D07F]/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#FBCC5C]/20 rounded-full blur-[140px] pointer-events-none" />
    </main>
  );
}
