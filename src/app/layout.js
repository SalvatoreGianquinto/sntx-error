import { JetBrains_Mono } from "next/font/google"
import "./globals.css"

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata = {
  title: "SNTX ERROR | System Ready",
  description: "Techwear for developers",
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={`${jetBrainsMono.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
