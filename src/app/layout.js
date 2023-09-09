import localFont from 'next/font/local'

const koolegant = localFont({
  src: './fonts/koolegant.ttf',
  variable: '--koolegant',
  display: 'swap'
})

const satoshi = localFont({
  src: './fonts/satoshi.otf',
  variable: '--satoshi',
  display: 'swap'
})

export const metadata = {
  title: 'Cass Walters',
  description: 'My portfolio!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${koolegant.variable} ${satoshi.variable}`}>{children}</body>
    </html>
  )
}
