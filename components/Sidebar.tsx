'use client'
import { useState, useEffect, useRef } from 'react'

interface NavItem {
  name: string
  id: string
}

export default function Sidebar() {
  const navRef = useRef<HTMLElement>(null)
  const orbRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState<string>('about')
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)
  const [orbStyle, setOrbStyle] = useState<{ transform: string }>({ transform: 'translate(0px, 0px)' })

  const navItems: NavItem[] = [
    { name: 'about', id: 'about' },
    { name: 'experience', id: 'experience' },
    { name: 'projects', id: 'projects' },
    { name: 'contact', id: 'contact' }
  ]

  useEffect(() => {
    const targetSection = hoveredSection || activeSection
    const targetLink = navRef.current?.querySelector<HTMLAnchorElement>(`[data-section="${targetSection}"]`)
    const orb = orbRef.current
   
    if (targetLink && orb && navRef.current) {
      const linkRect = targetLink.getBoundingClientRect()
      const navRect = navRef.current.getBoundingClientRect()
      const x = linkRect.left - navRect.left
      const y = linkRect.top - navRect.top - 10
     
      setOrbStyle({
        transform: `translate(${x}px, ${y}px)`
      })
    }
  }, [activeSection, hoveredSection])

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }
    
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }
    
    const observer = new IntersectionObserver(observerCallback, observerOptions)
    
    navItems.forEach((item) => {
      const section = document.getElementById(item.id)
      if (section) observer.observe(section)
    })
    
    return () => observer.disconnect()
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    if (sectionId === 'about') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <aside className="w-[25vw] px-12 pt-[7%] fixed h-screen flex flex-col items-center gap-16">
      <div className="flex flex-col gap-2 items-start w-full">
        <h1 className="text-[#ddd] text-[2.5rem] font-semibold tracking-wide">
          Ammar Qadir
        </h1>
        <p className="text-[#999] text-xs uppercase tracking-[3px] font-medium m-0">
          Software Engineer
        </p>
      </div>

      <nav
        ref={navRef}
        onMouseLeave={() => setHoveredSection(null)}
        className="relative"
      >
        <div className="orb" ref={orbRef} style={orbStyle}></div>
        <ul className="flex flex-col gap-7">
          {navItems.map(item => {
            const isActive = hoveredSection ? hoveredSection === item.id : activeSection === item.id
            return (
              <li key={item.name}>
                <a
                  href={`#${item.id}`}
                  data-section={item.id}
                  onClick={(e) => handleClick(e, item.id)}
                  onMouseEnter={() => setHoveredSection(item.id)}
                  className={`pb-[0.2em] relative text-[0.8em] uppercase tracking-[3px] font-medium no-underline cursor-pointer transition-colors duration-300 ${
                    isActive ? 'text-[#aaa]' : 'text-[#999]'
                  }`}
                >
                  <span className={`absolute top-1/2 -left-40 h-px w-[140px] transition-colors duration-500 ${
                    isActive ? 'bg-[#666]' : 'bg-[#333]'
                  }`}></span>
                  {item.name}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}