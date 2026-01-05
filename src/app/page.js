import "./globals.css"
import Logo from "./components/Logo"
export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <header className="p-8 md:px-12 flex justify-between items-center border-b border-white/5">
        <Logo />
        <div className="text-[10px] tracking-[0.4em] text-zinc-600 uppercase"></div>
      </header>
      <section className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-5xl md:text-8xl font-black italic uppercase leading-none mb-6">
          System <br />
          <span className="text-zinc-900 border-b-2 border-zinc-900 font-mono">
            Overload
          </span>
        </h1>
        <p className="max-w-md text-zinc-500 font-mono text-xs tracking-widest uppercase">
          Abbigliamento per developer. <br /> Presto disponibile.
        </p>
        <button className="mt-12 px-10 py-4 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#CCFF00] transition-all">
          Unisciti alla Waitlist
        </button>
      </section>
    </main>
  )
}
