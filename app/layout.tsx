import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CineFlux Studio - Premium Video Editing Agency</title>
        <meta name="description" content="High-performance video editing for YouTube creators and brands. Cinematic, fast-paced, and engineered for retention." />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden selection:bg-primary selection:text-white`}>
        {children}
      </body>
    </html>
  )
}