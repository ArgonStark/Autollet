import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Autollet',
  description: 'AI-powered agent wallet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

