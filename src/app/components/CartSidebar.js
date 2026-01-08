"use client"
import { useCartStore } from "../store/useCartStore"

export default function CartSidebar() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart } = useCartStore()

  const total = cart.reduce((acc, item) => acc + item.price, 0)

  return (
    <>
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-60"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full md:w-100 bg-black border-l border-[#CCFF00]/20 z-70 transition-transform duration-500 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-black italic uppercase text-white">
              Your_System_Cart
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-zinc-500 hover:text-[#CCFF00]"
            >
              {" "}
              x
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-6">
            {cart.length === 0 ? (
              <p className="text-zinc-600 font-mono italic text-sm text-center mt-20">
                [ CART_EMPTY_ERROR ]
              </p>
            ) : (
              cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start border-b border-white/5 pb-4"
                >
                  <div>
                    <h4 className="text-white font-bold uppercase text-xs tracking-wider">
                      {item.name}
                    </h4>
                    <p className="text-[#CCFF00] font-mono text-[10px] mt-1">
                      SIZE: {item.size}
                    </p>
                    <p className="text-zinc-400 font-mono text-[10px] mt-1">
                      €{item.price}.00
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-zinc-700 hover:text-red-500 transition-colors"
                  >
                    X
                  </button>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="mt-auto pt-8 border-t border-white/10">
              <div className="flex justify-between items-end mb-6 font-mono text-sm">
                <span className="text-zinc-500">SUBTOTAL_01:</span>
                <span className="text-white font-bold text-xl">
                  €{total}.00
                </span>
              </div>
              <button className="w-full bg-[#CCFF00] text-black py-4 font-black uppercase italic hover:bg-white transition-all flex items-center justify-center gap-2">
                Init_Checkout_Sequence [→]
              </button>
              <p className="text-[8px] text-zinc-600 font-mono mt-4 uppercase text-center tracking-widest">
                Safe_Encryption_Active // 256-bit
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
