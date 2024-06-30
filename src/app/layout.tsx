export const metadata = {
  title: 'Cass Walters',
  description: 'My portfolio!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
