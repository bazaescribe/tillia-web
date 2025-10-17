import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bliqu | Administra tu negocio fácilmente',
  description: 'Administra todo tu negocio desde un mismo lugar.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
