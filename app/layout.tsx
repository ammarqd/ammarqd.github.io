import { Fira_Sans } from 'next/font/google'
import Header from '@/components/Header'
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
      <body className={`${fira_sans.className} bg-[#111] text-neutral-400`}>
        <div className="lg:flex lg:justify-apart lg:gap-4 px-12">
          <Header />
          <main className="lg:w-[55%] py-[7%] px-[5%] flex flex-col justify-center gap-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}