import { Fira_Sans } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import './globals.css'

const fira_sans = Fira_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Ammar Qadir | Software Developer & Engineer',
  description: 'Portfolio of Ammar Qadir - Software Developer & Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${fira_sans.className} bg-[#111] text-[#999]`}>
        <div>
          <Sidebar />
          <main className="w-3/4 ml-[25%] py-[7%] px-[15%] flex flex-col justify-center gap-20">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}