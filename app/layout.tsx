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
<div className="mx-auto min-h-screen max-w-screen-xl px-6 md:px-16 py-12 lg:py-0">
  <div className="lg:flex">
    <header className="lg:sticky lg:top-0 lg:w-[40%] lg:py-24 lg:max-h-screen flex flex-col gap-16">
      <div className="flex flex-col gap-2 items-start w-full">
        <h1 className="text-[#ddd] text-[2.5em] lg:text-[3em] font-semibold tracking-wide">
          Ammar Qadir
        </h1>
        <h2 className="text-[#ccc] text-[0.9em] lg:text-[1.1em] uppercase tracking-[3px] font-medium">
          Software Engineer
        </h2>
      </div>
      <Nav />
    </header>

    <main className="lg:flex-1 lg:max-w-[52%] lg:py-24 py-12 flex flex-col justify-center gap-15 lg:gap-30">
      {children}
    </main>
  </div>
</div>

      </body>
    </html>
  )
}