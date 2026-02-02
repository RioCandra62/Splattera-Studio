"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1], // ✨ luxury easing
    },
  },
};

const fade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// const fadeUp = {
//   hidden: { opacity: 0, y: 28 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.9, ease: "easeOut" },
//   },
// };

// const fade = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { duration: 0.8, ease: "easeOut" },
//   },
// };

export default function Home() {
  return (
    <main className="bg-[#FAFAF8] text-[#1E1E1E]">
      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center px-6 sm:px-8 md:px-16">
        <div className="max-w-6xl">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-light
              leading-tight
            "
          >
            Reconstructing <br /> Reality from Space
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15 }}
            className="
              mt-6
              max-w-xl
              text-base
              sm:text-lg
              text-[#6B6B6B]
            "
          >
            A spatial visualization studio transforming PortalCam survey data
            into immersive 3D surfaces using Gaussian Splatting.
          </motion.p>
        </div>
      </section>

      {/* ================= STATEMENT ================= */}
      <motion.section
        variants={fade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-8 md:px-16 py-32 bg-[#F2EEE9]"
      >
        <p className="max-w-3xl text-2xl font-light leading-relaxed text-center mx-auto">
          We treat spatial data not merely as measurements, but as curated
          artifacts — reconstructed, refined, and presented with clarity.
        </p>
      </motion.section>

      {/* ================= FEATURED TECHNOLOGY ================= */}
      <section className="px-6 sm:px-8 md:px-16 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <span className="text-xs tracking-widest uppercase text-[#9C6B4E]">
              Featured Technology
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-light">PortalCam</h2>

            <p className="mt-6 max-w-md mx-auto md:mx-0 text-[#6B6B6B] leading-relaxed">
              A mobile spatial scanning device designed for rapid on-site 3D
              data acquisition, optimized for precision and efficiency.
            </p>

            <div className="mt-10 w-24 h-px bg-[#9C6B4E] mx-auto md:mx-0" />
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 border border-[#E3DDD6] translate-x-4 translate-y-4" />
              <div className="relative bg-white p-10 md:p-14 shadow-sm">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0754/1882/9074/files/PortalCam.png?v=1757527583"
                  width={620}
                  height={480}
                  alt="PortalCam Device"
                  unoptimized
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= COLLECTIONS ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fade}
        className="px-8 md:px-16 py-32 bg-[#F2EEE9]"
      >
        <h2 className="text-4xl font-light mb-16">Spatial Collections</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-14">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white border border-[#E3DDD6] hover:shadow-md transition"
            >
              <div className="h-64 flex items-center justify-center border-b border-[#E3DDD6]">
                <span className="text-sm text-[#6B6B6B]">
                  3D Dataset Preview
                </span>
              </div>

              <div className="p-6">
                <p className="text-lg">Dataset Title</p>
                <p className="mt-1 text-xs text-[#6B6B6B]">
                  Gaussian Splat · PortalCam
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= USE CASES ================= */}
      <section className="px-8 md:px-16 py-32 bg-[#FAFAF8]">
        <h2 className="text-4xl font-light mb-16">Applications & Use Cases</h2>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            "Site Documentation",
            "Geohazard Monitoring",
            "Survey Validation",
          ].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-[#E3DDD6] p-8"
            >
              <p className="text-xl">{item}</p>
              <p className="mt-4 text-sm text-[#6B6B6B]">
                High-fidelity spatial visualization designed for professional
                survey workflows.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fade}
        className="px-8 md:px-16 py-40 text-center bg-[#F2EEE9]"
      >
        <h2 className="text-4xl font-light">Explore Spatial Reality</h2>

        <p className="mt-6 text-[#6B6B6B]">
          Discover how spatial data can be transformed into immersive digital
          artifacts.
        </p>

        <button className="mt-12 px-10 py-4 bg-[#9C6B4E] text-white tracking-wide hover:opacity-90 transition">
          Request Demo
        </button>
      </motion.section>

      {/* ================= FOOTER ================= */}
      <footer className="px-8 md:px-16 py-12 border-t border-[#E3DDD6] text-sm text-[#6B6B6B] bg-[#FAFAF8]">
        © 2026 TerraSplat Studio — Spatial Visualization Platform
      </footer>
    </main>
  );
}
