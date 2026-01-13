"use client"

import Link from "next/link"
import Logo from "../components/Logo"

export default function RegisterPage() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md border border-white/10 bg-zinc-950 p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-scanline pointer-events-none opacity-10"></div>
        <div className="flex flex-col items-center mb-10">
          <Logo />
          <span className="text-[10px] text-[#CCFF00] tracking-[0.3em] uppercase mt-4">
            [ Initializing_New_Identity ]
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="flex flex-col gap-2">
            <label className="text-zinc-500 text-[10px] uppercase tracking-widest">
              _User_Access_ID
            </label>
            <input
              type="text"
              placeholder="IDENTITY_NAME"
              className="bg-black border border-white/10 p-4 text-white text-sm focus:border-[#CCFF00] outline-none transition-colors uppercase"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-zinc-500 text-[10px] uppercase tracking-widest">
              _Secure_Email
            </label>
            <input
              type="email"
              placeholder="OP_ADDR@SNTX.COM"
              className="bg-black border border-white/10 p-4 text-white text-sm focus:border-[#CCFF00] outline-none transition-colors uppercase"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-zinc-500 text-[10px] uppercase tracking-widest">
              _Access_Key
            </label>
            <input
              type="password"
              placeholder="********"
              className="bg-black border border-white/10 p-4 text-white text-sm focus:border-[#CCFF00] outline-none transition-colors uppercase"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#CCFF00] text-black py-4 font-black uppercase italic hover:bg-white transition-all"
          >
            Execute_Registration [+]
          </button>
        </form>

        <div className="mt-30 pt-6 border-t border-white/5 text-center">
          <p className="text-zinc-600 text-[10px] uppercase">
            Already registered?{" "}
            <Link
              href="/login"
              className="text-white hover:text-[#CCFF00] italic underline underline-offset-4"
            >
              Access_Terminal
            </Link>
          </p>
        </div>
      </div>
      <div className="mt-8 text-[8px] text-zinc-800 font-mono uppercase tracking-[0.5em]">
        SNTX_SECURE_REGISTRATION_PROTOCOL
      </div>
    </main>
  )
}
