import NavBar from "./components/Navbar"
import BentoGrid from "./components/BentoGrid"
import CartSidebar from "./components/CartSidebar"

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <NavBar />
      <div className="h-30 md:h-40"></div>
      <BentoGrid />

      <CartSidebar />
    </main>
  )
}
