import type { Metadata } from 'next'
import './globals.css'
import GoogleAnalytics from '@/components/track/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'Bliqu • Administra tu negocio fácilmente',
  description: 'Administra todo tu negocio desde un mismo lugar.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#ffffff', // initial value; will be updated by Section on scroll
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_MEASUREMENT_ID="G-R200DBBDKQ" />
      <body>{children}</body>
    </html>
  )
}
