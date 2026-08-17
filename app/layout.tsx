import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Instrument_Serif } from 'next/font/google'
import './globals.css'

const sans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })
const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', variable: '--font-serif' })

export const metadata: Metadata = {
  title: 'Ramy Mohamed — Backend & Full-Stack Developer',
  description: 'Backend and full-stack developer building secure APIs, real-time systems, and dependable digital products.',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f4ee',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`bg-background ${sans.variable} ${serif.variable}`}>
      <body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body>
    </html>
  )
}
