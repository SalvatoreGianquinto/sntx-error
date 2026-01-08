"use client"

import { useState } from "react"
import { useCartStore } from "../store/useCartStore"

export default function BentoGrid() {
  const addToCart = useCartStore((state) => state.addToCart)
  const [selectedSize, setSelectedSize] = useState("M")

  return (
    <section className="p-4 md:p-8 lg:px-12 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto md:auto-rows-[300px]">
        <div className="md:col-span-2 md:row-span-2 bg-zinc-900 border border-white/5 relative group overflow-hidden flex flex-col">
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-[#CCFF00] text-black text-[10px] font-bold px-2 py-1 uppercase tracking-tighter">
              New_Drop
            </span>
          </div>
          <div className="h-75 md:h-full w-full flex items-center justify-center transition-transform duration-500 md:group-hover:scale-105">
            <div className="text-zinc-800 italic text-xl">[ IMAGE_HOODIE ]</div>
          </div>
          <div className="relative md:absolute md:bottom-0 md:left-0 w-full p-6 bg-black border-t border-[#CCFF00]/20 md:translate-y-[70%] md:group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-20 pb-20">
            <div className="flex justify-between items-end mb-6">
              <div>
                <h3 className="text-xl font-black uppercase italic text-white leading-none">
                  SNTX_Heavy_Hoodie
                </h3>
                <p className="text-[#CCFF00] font-mono text-xs mt-1">€85.00</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`flex-1 border py-2 text-[10px] font-mono transition-colors ${
                      selectedSize === size
                        ? "border-[#CCFF00] text-[#CCFF00] bg-[#CCFF00]/10"
                        : "border-white/10 text-white hover:border-[#CCFF00]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <button
                onClick={() =>
                  addToCart(
                    { id: "h-01", name: "SNTX_Heavy_Hoodie", price: 85 },
                    selectedSize
                  )
                }
                className="bg-[#CCFF00] text-black w-full py-3 font-black uppercase italic text-xs hover:bg-white transition-colors"
              >
                Add_To_Cart [+]
              </button>
            </div>
          </div>
        </div>

        <div className="bg-black border border-white/10 p-6 flex flex-col justify-between font-mono relative overflow-hidden h-75">
          <div className="absolute inset-0 bg-scanline pointer-events-none opacity-20"></div>
          <div className="text-[10px] text-[#CCFF00] space-y-2 relative z-10">
            <div className="flex flex-col">
              <span className="opacity-30 text-white text-[8px]">LOG:</span>
              <span className="animate-typing">{">"} SYSTEM_ONLINE</span>
            </div>
            <div className="flex flex-col">
              <span className="opacity-30 text-white text-[8px]">NET:</span>
              <span className="animate-pulse">{">"} ENCRYPTED_NODE</span>
            </div>
          </div>
          <div className="flex justify-between items-end relative z-10">
            <div className="text-zinc-600 text-[8px] uppercase tracking-[0.4em]">
              SNTX_OS_v1.0
            </div>
            <div className="w-2 h-2 bg-[#CCFF00] animate-ping"></div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-white/5 relative group overflow-hidden flex flex-col h-auto md:h-full">
          <div className="h-48 md:h-full w-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            <div className="text-zinc-800 italic text-xs">[ MUG_IMAGE ]</div>
          </div>
          <div className="hidden md:block absolute bottom-4 left-4 group-hover:opacity-0 transition-opacity duration-300">
            <h4 className="text-[10px] font-bold uppercase text-white tracking-widest leading-none">
              SNTX_Mug_01
            </h4>
            <p className="font-mono text-[10px] text-[#CCFF00] mt-1">€15.00</p>
          </div>
          <div className="relative md:absolute md:inset-0 bg-black/90 p-6 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-center justify-center border-t border-white/5 md:border-t-0 z-20">
            <h4 className="text-white font-black uppercase italic text-center mb-1 text-sm">
              SNTX_CERAMIC_MUG
            </h4>
            <p className="text-[#CCFF00] font-mono text-[10px] mb-4">€15.00</p>
            <button
              onClick={() =>
                addToCart({ id: "m-01", name: "SNTX_Mug", price: 15 }, "OS")
              }
              className="bg-[#CCFF00] text-black w-full py-3 font-black uppercase italic text-[10px] hover:bg-white transition-colors"
            >
              Add_To_Cart [+]
            </button>
          </div>
        </div>

        <div className="lg:row-span-2 bg-[#CCFF00] p-8 flex flex-col justify-end h-75 md:h-full">
          <h2 className="text-black text-4xl font-black uppercase leading-none italic mb-4">
            Error <br /> is the <br /> system.
          </h2>
          <p className="text-black/60 font-mono text-[10px] uppercase tracking-tighter font-bold">
            Designed for those who code the future.
          </p>
        </div>

        <div className="bg-zinc-950 border border-[#CCFF00]/20 p-6 flex items-center justify-center h-37.5 md:h-full">
          <div className="text-center">
            <div className="text-3xl font-black text-white italic">99%</div>
            <div className="text-[8px] text-zinc-500 uppercase tracking-widest">
              Server_Uptime
            </div>
          </div>
        </div>

        <div className="md:col-span-2 bg-zinc-900 border border-white/5 relative group overflow-hidden flex flex-col h-auto md:h-full">
          <div className="absolute top-4 right-4 text-[9px] text-zinc-600 font-mono uppercase tracking-widest group-hover:opacity-0 transition-opacity z-10">
            [ 001_ACC_DIV ]
          </div>
          <div className="h-48 md:h-full w-full flex items-center justify-center transition-transform duration-700 md:group-hover:scale-105">
            <div className="text-zinc-800 italic text-sm">[ HAT_IMAGE ]</div>
          </div>
          <div className="hidden md:block absolute bottom-6 left-6 group-hover:opacity-0 transition-opacity duration-300">
            <h4 className="text-[10px] font-black uppercase text-white tracking-[0.2em] italic">
              SNTX_Tech_Cap_01
            </h4>
            <p className="text-[#CCFF00] font-mono text-[10px] mt-1">€25.00</p>
          </div>
          <div className="relative md:absolute md:inset-0 bg-black/95 p-6 md:translate-x-full md:group-hover:translate-x-0 transition-transform duration-500 flex flex-col md:flex-row items-center justify-between border-t border-[#CCFF00]/20 md:border-t-0 md:px-12 z-20">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-[#CCFF00] font-mono text-[9px] tracking-[0.3em] mb-1">
                UNIT_TYPE: HEADWEAR
              </span>
              <h3 className="text-white text-xl md:text-2xl font-black uppercase italic">
                Adjustable_Cap
              </h3>
              <p className="text-zinc-500 font-mono text-[8px] uppercase mt-1">
                One_Size_Fits_All // OS
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2 w-full md:w-auto mt-4 md:mt-0">
              <span className="text-white font-mono text-xl">€25.00</span>
              <button
                onClick={() =>
                  addToCart({ id: "c-01", name: "SNTX_Cap", price: 25 }, "OS")
                }
                className="bg-[#CCFF00] text-black px-10 py-3 font-black uppercase italic text-[10px] hover:bg-white transition-colors w-full md:w-auto"
              >
                Add_To_Cart [+]
              </button>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-white/5 relative group overflow-hidden flex flex-col h-auto md:h-full">
          <div className="h-48 md:h-full w-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            <div className="text-zinc-800 italic text-xs">[ MOUSE_IMAGE ]</div>
          </div>
          <div className="hidden md:block absolute bottom-4 left-4 group-hover:opacity-0 transition-opacity duration-300">
            <h4 className="text-[10px] font-bold uppercase text-white tracking-widest leading-none">
              SNTX_Mouse_01
            </h4>
            <p className="font-mono text-[10px] text-[#CCFF00] mt-1">€15.00</p>
          </div>
          <div className="relative md:absolute md:inset-0 bg-black/90 p-6 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-center justify-center border-t border-white/5 md:border-t-0 z-20">
            <h4 className="text-white font-black uppercase italic text-center mb-1 text-sm">
              SNTX_MOUSE_V1
            </h4>
            <p className="text-[#CCFF00] font-mono text-[10px] mb-4">€15.00</p>
            <button
              onClick={() =>
                addToCart({ id: "ms-01", name: "SNTX_Mouse", price: 15 }, "OS")
              }
              className="bg-[#CCFF00] text-black w-full py-3 font-black uppercase italic text-[10px] hover:bg-white transition-colors"
            >
              Add_To_Cart [+]
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
