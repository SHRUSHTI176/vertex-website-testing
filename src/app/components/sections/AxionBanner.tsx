"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AxionBanner() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section className="relative w-full overflow-hidden bg-zinc-950 py-20 sm:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Registrations Open · DSCE Dept. of ETE
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 tracking-tight mb-4"
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
        >
          AXION <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">2026</span>
        </motion.h1>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="inline-flex items-center gap-3 text-cyan-400 text-sm sm:text-base font-extrabold tracking-[0.25em] uppercase mb-4"
        >
          <span>INNOVATE</span>
          <span className="text-zinc-600">•</span>
          <span>BUILD</span>
          <span className="text-zinc-600">•</span>
          <span>CONQUER</span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-zinc-400 max-w-2xl mb-4 leading-relaxed"
        >
          Experience hands-on engineering challenges, competitive events, and opportunities to put your technical skills to the test.
        </motion.p>

        {/* Deadline Notice */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10 text-cyan-400 font-medium text-sm flex items-center gap-2 bg-cyan-950/40 border border-cyan-500/30 px-5 py-2 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.15)]"
        >
          <span>⏳</span> Registrations strictly close on October 3rd
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/axionRegistration">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-cyan-400 hover:bg-cyan-300 text-black text-sm font-extrabold uppercase tracking-widest rounded-xl shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all"
            >
              Register Now
            </motion.button>
          </Link>
          <a href="/axion-brochure.pdf" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-transparent border border-cyan-400/80 hover:bg-cyan-500/10 text-white text-sm font-bold uppercase tracking-widest rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all"
            >
              View Brochure
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
