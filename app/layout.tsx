import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Woravi | Administra tu negocio fácilmente',
  description: 'Administra tu negocio con facilidad y precisión',
  themeColor: '#FF0095',
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
