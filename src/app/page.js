import "./globals.css"
import NavBar from "./components/Navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <NavBar />

      <div className="h-30 md:h-40"></div>
    </main>
  )
}
