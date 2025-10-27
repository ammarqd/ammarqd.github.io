import { Fira_Sans } from 'next/font/google'
import Nav from '@/components/Nav'
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
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 md:px-16 lg:py-0">
          <div className="lg:flex lg:gap-4">
            <header className="lg:sticky lg:top-0 py-10 lg:py-24 lg:w-[38%] lg:max-h-screen flex flex-col gap-16">
              <div className="flex flex-col gap-2 items-start w-full">
                <h1 className="text-[#ddd] text-[2.5rem] font-semibold tracking-wide">
                  Ammar Qadir
                </h1>
                <p className="text-[#999] text-xs uppercase tracking-[3px] font-medium m-0">
                  Software Engineer
                </p>
              </div>
              <Nav />
            </header>
          <main className="lg:w-[52%] py-24 flex flex-col justify-center gap-30">
            {children}
          </main>
          </div>
        </div>
      </body>
    </html>
  )
}