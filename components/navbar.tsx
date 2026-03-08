"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navStyle =
    "text-sm tracking-wide text-[#F7F2EE]/80 hover:text-white transition";

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#2A1F1A]/90 border-b border-[#4A352C]">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-[80px] px-6 md:px-8">

          {/* LEFT DESKTOP */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={navStyle}>Home</Link>
            <Link href="/collections" className={navStyle}>
              Collections
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-[#F7F2EE] text-xl"
          >
            ☰
          </button>

          {/* CENTER LOGO */}
          <div className="text-center select-none">
            <p className="text-xl tracking-[0.25em] text-[#F3EDE7] font-medium">
              PortalSTI
            </p>
            <p className="text-[10px] tracking-[0.4em] text-[#CBB8A9] uppercase">
              Studio
            </p>
          </div>

          {/* RIGHT DESKTOP */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className={navStyle}>About</Link>

            <Link
              href="/"
              className="px-4 py-2 border border-[#CBB8A9]/40 rounded-full
              text-sm text-[#F7F2EE]
              hover:bg-[#F7F2EE] hover:text-[#2A1F1A]
              transition"
            >
              Login
            </Link>
          </div>

          {/* spacer mobile */}
          <div className="md:hidden w-6" />
        </div>
      </nav>

      {/* ================= OVERLAY ================= */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <div
        className={`
        fixed top-0 left-0 h-full w-[260px]
        bg-[#2A1F1A]
        border-r border-[#4A352C]
        z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="p-6 flex flex-col gap-6">

          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="text-[#F7F2EE] text-lg self-end"
          >
            ✕
          </button>

          <Link href="/" onClick={() => setOpen(false)} className={navStyle}>
            Home
          </Link>

          <Link
            href="/collections"
            onClick={() => setOpen(false)}
            className={navStyle}
          >
            Collections
          </Link>

          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className={navStyle}
          >
            About
          </Link>

          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="mt-4 px-4 py-2 border border-[#CBB8A9]/40 rounded-full text-center text-[#F7F2EE]"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}