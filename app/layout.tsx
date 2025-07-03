import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Plandir',
  description: 'La forma más fácil de administrar tu negocio',
  themeColor: '#FFFFFF',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.ico',
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
