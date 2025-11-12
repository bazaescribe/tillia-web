import type { Metadata } from 'next'
import './globals.css'
import GoogleAnalytics from '@/components/track/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'Bliqu • El sistema de tu negocio',
  description: 'Bliqu entiende tu operación y construye tu sistema de gestión sin que tengas que programar nada.',
  keywords: ['ERP', 'AI', 'PyMES', 'Software de Gestión', 'Automatización','Sistema de Gestión', 'Punto de Venta', 'Agentes', 'Notion', 'POS'],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#ffffff', // initial value; will be updated by Section on scroll

  openGraph: {
    title: 'Bliqu • El sistema operativo de tu negocio.',
    description: 'Bliqu entiende tu operación y construye tu sistema de gestión sin que tengas que programar nada.',
    url: 'https://www.bliqu.com',
    siteName: 'Bliqu',
    images: [
      {
        url: 'https://www.bliqu.com/images/bliqu-og-image.jpg', // ¡Asegúrate de que esta imagen exista!
        width: 1200,
        height: 630,
        alt: 'Bliqu: Soluciones inteligentes para PyMES en crecimiento',
      },
    ],
    locale: 'es_LA',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image', // Usa 'summary_large_image' para que la foto destaque
    title: 'Bliqu | El ERP que se construye solo con IA',
    description: 'Sistema de gestión inteligente y fácil de usar para automatizar tu PyME sin código.',
    siteId: 'https://x.com/bliqu_?s=21&t=0JGxMxwRU1O6J29lCdaNHA', // Opcional
    creator: '@bliqu_', // Opcional
    creatorId: '1645242432528281600', // Opcional
    images: ['https://www.bliqu.com/images/bliqu-og-image.jpg'], // Misma imagen
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
