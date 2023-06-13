import '../../styles/globals.scss'
import { Fira_Sans } from 'next/font/google'

const fira = Fira_Sans({ subsets: ['latin'], weight: ["400", "600"] })

export const metadata = {
  title: 'MBTI',
  description: 'MBTI test your personality type',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fira.className}>{children}</body>
    </html>
  )
}
