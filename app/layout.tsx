import type { Metadata, Viewport } from 'next'
import './globals.css'
import GoogleAnalytics from '@/components/track/GoogleAnalytics'

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: 'Mithry • El sistema de tu negocio',
  description: 'Mithry entiende tu operación y construye tu sistema de gestión sin que tengas que programar nada.',
  keywords: ['ERP', 'AI', 'PyMES', 'Software de Gestión', 'Automatización', 'Sistema de Gestión', 'Punto de Venta', 'Agentes', 'Notion', 'POS'],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },

  openGraph: {
    title: 'Mithry • El sistema operativo de tu negocio.',
    description: 'Mithry entiende tu operación y construye tu sistema de gestión sin que tengas que programar nada.',
    url: 'https://www.mithry.com',
    siteName: 'Mithry',
    images: [
      {
        url: 'https://www.mithry.com/images/mithry-og-image.jpg', // ¡Asegúrate de que esta imagen exista!
        width: 1200,
        height: 630,
        alt: 'Mithry: Soluciones inteligentes para PyMES en crecimiento',
      },
    ],
    locale: 'es_LA',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image', // Usa 'summary_large_image' para que la foto destaque
    title: 'Mithry • El sistema operativo de tu negocio.',
    description: 'Mithry entiende tu operación y construye tu sistema de gestión sin que tengas que programar nada.',
    siteId: 'https://x.com/mithry_?s=21&t=0JGxMxwRU1O6J29lCdaNHA', // Opcional
    creator: '@mithry_', // Opcional
    creatorId: '1645242432528281600', // Opcional
    images: ['https://www.mithry.com/images/mithry-og-image.jpg'], // Misma imagen
  },

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
