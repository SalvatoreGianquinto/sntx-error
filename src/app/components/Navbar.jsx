"use client"

import Link from "next/link"
import Logo from "./Logo"
import { useState } from "react"
import { useCartStore } from "../store/useCartStore"

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const cartCount = useCartStore((state) => state.cart.length)
  const setIsCartOpen = useCartStore((state) => state.setIsCartOpen)

  return (
    <nav className="fixed top-0 w-full z-100 bg-black border-b border-white/5">
      <div className="flex justify-between items-center p-6 md:p-8 md:px-12 bg-black relative z-110">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <Logo />
        </Link>

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
            <div className="flex items-center gap-4 text-zinc-500 font-mono">
              <Link href="/login" className="hover:text-white uppercase italic">
                Login
              </Link>
              <span className="text-zinc-800">/</span>
              <Link
                href="/register"
                className="hover:text-white uppercase italic"
              >
                Register
              </Link>
            </div>
            <button
              onClick={() => setIsCartOpen(true)}
              className="bg-white text-black px-5 py-2 font-black uppercase tracking-tighter hover:bg-[#CCFF00] transition-all flex items-center gap-3 group"
            >
              Cart{" "}
              <span
                suppressHydrationWarning
                className="bg-black text-white px-1.5 py-0.5 text-[8px]"
              >
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={() => setIsCartOpen(true)}
            className="bg-white text-black px-3 py-1.5 text-[10px] font-black uppercase tracking-tighter"
          >
            Cart(<span suppressHydrationWarning>{cartCount}</span>)
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 justify-center items-center w-8 h-8"
          >
            <span
              className={`h-0.5 w-6 bg-white transition-all ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-[#CCFF00] transition-all ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-white transition-all ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      <div
        className={`absolute top-full left-0 w-full bg-black border-b border-white/10 transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-8 gap-8 bg-black">
          <div className="flex flex-col gap-4">
            <Link
              href="/shop"
              onClick={() => setIsOpen(false)}
              className="text-4xl font-black italic uppercase text-white hover:text-[#CCFF00]"
            >
              01_Shop
            </Link>
            <Link
              href="/drops"
              onClick={() => setIsOpen(false)}
              className="text-4xl font-black italic uppercase text-white hover:text-[#CCFF00]"
            >
              02_Drops
            </Link>
            <Link
              href="/archive"
              onClick={() => setIsOpen(false)}
              className="text-4xl font-black italic uppercase text-white hover:text-[#CCFF00]"
            >
              03_Archive
            </Link>
          </div>

          <div className="h-px w-full bg-white/5 my-2"></div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] text-[#CCFF00] font-mono tracking-[0.3em] uppercase opacity-50">
                [ Authentication_Required ]
              </span>
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="border border-white/10 bg-zinc-900/50 p-4 text-center hover:border-[#CCFF00] transition-colors"
                >
                  <span className="text-white font-black uppercase italic text-sm">
                    Login
                  </span>
                  <p className="text-[8px] text-zinc-600 font-mono mt-1 uppercase">
                    Existing_Op
                  </p>
                </Link>

                <Link
                  href="/register"
                  onClick={() => setIsOpen(false)}
                  className="border border-white/10 bg-zinc-900/50 p-4 text-center hover:border-[#CCFF00] transition-colors"
                >
                  <span className="text-white font-black uppercase italic text-sm">
                    Register
                  </span>
                  <p className="text-[8px] text-zinc-600 font-mono mt-1 uppercase">
                    New_Identity
                  </p>
                </Link>
              </div>
            </div>

            <Link
              href="/search"
              onClick={() => setIsOpen(false)}
              className="text-zinc-500 font-mono text-xs uppercase tracking-widest hover:text-white flex items-center gap-2"
            >
              <span className="text-[#CCFF00]">{">"}</span> [ Search_Index ]
            </Link>
          </div>

          <div className="mt-auto pb-4 text-[8px] text-zinc-800 tracking-[0.4em] uppercase font-mono">
            SNTX_SYSTEM_STABLE // V.1.0.4
          </div>
        </div>
      </div>
    </nav>
  )
}
