

import 'bulma/css/bulma.css';
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Página Personal',
  description: 'Lotus Creado',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
      
      <Script src="/js/main-scripts.js"/>
    </html>
  )
}
