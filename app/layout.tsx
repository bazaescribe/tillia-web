import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tillia',
  description: 'Run your business from your phone',
  themeColor: '#FFFDFA',
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
