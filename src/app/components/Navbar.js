"use client"

import Link from "next/link"
import Logo from "./Logo"
import { useState } from "react"

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="flex justify-between items-center p-8 md:px-12">
        {/* LOGO */}
        <div className="z-50">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-12 font-mono">
          <ul className="flex gap-10 text-[11px] tracking-[0.3em] uppercase">
            <li className="hover:text-[#CCFF00] transition-all">
              <Link href="/shop">[Shop]</Link>
            </li>
            <li className="hover:text-[#CCFF00] transition-all">
              <Link href="/drop">[Drop]</Link>
            </li>
            <li className="hover:text-[#CCFF00] transition-all">
              <Link href="/archive">[Archive]</Link>
            </li>
          </ul>

          <div className="flex items-center gap-6 border-l border-white/10 pl-10 text-[11px]">
            <button className="text-zinc-500 hover:text-[#CCFF00] uppercase tracking-widest transition-all">
              [Search_Index]
            </button>
            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="text-zinc-500 hover:text-white uppercase italic transition-colors"
              >
                Login
              </Link>
              <span className="text-zinc-800">/</span>
              <Link
                href="/register"
                className="text-zinc-500 hover:text-white uppercase italic transition-colors"
              >
                Register
              </Link>
            </div>
            <button className="bg-white text-black px-5 py-2 font-black uppercase tracking-tighter hover:bg-[#CCFF00] transition-all flex items-center gap-3">
              Cart{" "}
              <span className="bg-black text-white px-1.5 py-0.5 text-[8px]">
                0
              </span>
            </button>
          </div>
        </div>

        {/* MOBILE TRIGGER (Hamburger) - AGGIUNTO QUESTO */}
        <div className="lg:hidden flex items-center gap-6 z-50">
          <button className="bg-white text-black px-3 py-1.5 text-[10px] font-black uppercase tracking-tighter">
            Cart(0)
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 justify-center items-center w-8 h-8"
          >
            <span
              className={`h-px w-6 bg-white transition-all ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`h-px w-6 bg-[#CCFF00] transition-all ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-px w-6 bg-white transition-all ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* MENU MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 bg-black z-40 flex flex-col p-8 transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="mt-32 flex flex-col gap-8 bg-black z-60 inset-0">
          <div className="text-[10px] text-zinc-600 tracking-[0.5em] mb-4 uppercase"></div>

          <Link
            href="/shop"
            onClick={() => setIsOpen(false)}
            className="text-4xl font-black italic uppercase hover:text-[#CCFF00]"
          >
            01_Shop
          </Link>
          <Link
            href="/drops"
            onClick={() => setIsOpen(false)}
            className="text-4xl font-black italic uppercase hover:text-[#CCFF00]"
          >
            02_Drops
          </Link>
          <Link
            href="/archive"
            onClick={() => setIsOpen(false)}
            className="text-4xl font-black italic uppercase hover:text-[#CCFF00]"
          >
            03_Archive
          </Link>

          <div className="h-px w-full bg-white/10 my-6"></div>

          <div className="flex flex-col gap-6 uppercase tracking-[0.2em] text-sm italic font-bold text-zinc-400">
            <Link
              href="/search"
              onClick={() => setIsOpen(false)}
              className="hover:text-white"
            >
              [ Search_Index ]
            </Link>
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="hover:text-white"
            >
              [ User_Auth ]
            </Link>
          </div>
        </div>

        <div className="mt-auto text-[9px] text-zinc-700 tracking-[0.4em] uppercase font-mono">
          SNTX_ERROR_SYSTEM // Version_1.0.4
        </div>
      </div>
    </nav>
  )
}
