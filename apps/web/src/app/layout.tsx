import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OnPlan',
  description: 'Turn AI-generated plans into scheduled, trackable actions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
