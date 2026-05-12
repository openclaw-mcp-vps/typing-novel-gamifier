import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TypeQuest — Gamified Typing Through Classic Literature',
  description: 'Level up your typing speed with RPG-style progression, achievements, and classic novels. Join thousands improving their WPM while exploring great literature.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d68373c3-985a-4dc7-a6f5-bee3e4e23e4e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
