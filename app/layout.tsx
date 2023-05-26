import './globals.css'
import './pattern.min.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bookmarks',
  description: 'Collection of Personal Easy Access Bookmarks.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head> */}
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
