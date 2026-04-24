import type { Metadata } from 'next'
import './globals.css'  // ← CORRIGIDO: removido ".app/"

export const metadata: Metadata = {
  title: 'Cantinho das Bonecas - Juracema Neumann',
  description: 'Artesanatos e decoração únicos. Bonecas artesanais feitas com amor e carinho pela Juracema Neumann.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Dancing+Script:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}