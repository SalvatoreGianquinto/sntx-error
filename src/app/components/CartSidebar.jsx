"use client"
import { useCartStore } from "../store/useCartStore"

export default function CartSidebar() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart } = useCartStore()
  const total = cart.reduce((acc, item) => acc + item.price, 0)

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 z-140 ${
          isCartOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-full md:w-112.5 bg-black border-l border-[#CCFF00]/20 z-150 transition-transform duration-500 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 md:p-8 flex flex-col h-full">
          <div className="flex justify-between items-center mb-12">
            <div>
              <span className="text-[#CCFF00] font-mono text-[10px] tracking-[0.3em] uppercase opacity-50 block mb-1">
                System_Cart
              </span>
              <h2 className="text-xl md:text-2xl font-black italic uppercase text-white">
                Selected_Units
              </h2>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="flex items-center gap-2 border border-white/10 px-4 py-2 hover:border-[#CCFF00] transition-all group"
            >
              <span className="text-[10px] font-mono uppercase text-zinc-500 group-hover:text-white">
                Close
              </span>
              <span className="text-white text-lg leading-none">×</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-6 pr-2 custom-scrollbar">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center opacity-30">
                <p className="text-zinc-600 font-mono italic text-sm text-center">
                  [ CART_EMPTY_ERROR ]
                </p>
              </div>
            ) : (
              cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start border-b border-white/5 pb-6 group"
                >
                  <div className="flex-1">
                    <h4 className="text-white font-bold uppercase text-xs tracking-wider group-hover:text-[#CCFF00] transition-colors">
                      {item.name}
                    </h4>
                    <div className="flex gap-4 mt-2">
                      <p className="text-[#CCFF00] font-mono text-[9px] uppercase border border-[#CCFF00]/30 px-1.5">
                        SIZE: {item.size}
                      </p>
                      <p className="text-zinc-500 font-mono text-[9px] uppercase">
                        QTY: 01
                      </p>
                    </div>
                    <p className="text-zinc-400 font-mono text-xs mt-3">
                      €{item.price}.00
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-zinc-700 hover:text-white p-2 transition-colors font-mono text-xs"
                  >
                    [ REMOVE ]
                  </button>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="mt-auto pt-8 border-t border-white/10 bg-black">
              <div className="flex justify-between items-end mb-6 font-mono">
                <div className="flex flex-col">
                  <span className="text-zinc-500 text-[10px] uppercase tracking-tighter">
                    Net_Total_Amount
                  </span>
                  <span className="text-white font-bold text-2xl tracking-tighter">
                    €{total}.00
                  </span>
                </div>
                <span className="text-zinc-700 text-[8px] mb-1 italic">
                  TAX_INCLUDED_v.1
                </span>
              </div>

              <button className="w-full bg-[#CCFF00] text-black py-5 font-black uppercase italic hover:bg-white transition-all flex items-center justify-center gap-3 group">
                Init_Checkout_Sequence
                <span className="group-hover:translate-x-1 transition-transform">
                  [→]
                </span>
              </button>

              <p className="text-[8px] text-zinc-600 font-mono mt-4 uppercase text-center tracking-[0.3em]">
                Secure_Node // Encrypted_Transaction
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
