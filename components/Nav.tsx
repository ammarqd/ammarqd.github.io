"use client"

import { useState, useEffect, useRef } from 'react'

interface NavItem {
  name: string
  id: string
}

export default function Nav() {
  const navRef = useRef<HTMLElement>(null)
  const orbRef = useRef<HTMLDivElement>(null)
  const orbDotRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number | null>(null)
  const startTimeRef = useRef<number>(Date.now())
  
  const [activeSection, setActiveSection] = useState<string>('about')
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)
  const [orbStyle, setOrbStyle] = useState<{ transform: string }>({ transform: 'translate(0px, 0px)' })

  const navItems: NavItem[] = [
    { name: 'about', id: 'about' },
    { name: 'experience', id: 'experience' },
    { name: 'projects', id: 'projects' },
    { name: 'contact', id: 'contact' }
  ]

  // Infinity loop animation
  useEffect(() => {
    const a = 10 // width
    const b = 6 // height
    const speed = 3500 // milliseconds

    const animate = () => {
      if (!orbDotRef.current) return
      
      const elapsed = Date.now() - startTimeRef.current
      const t = (elapsed % speed) / speed * Math.PI * 2
      
      // Lemniscate of Gerono (figure-8 curve)
      const x = a * Math.cos(t)
      const y = b * Math.sin(t) * Math.cos(t)
      
      orbDotRef.current.style.transform = `translate(${x}px, ${y}px)`
      
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  // Orb movement logic between nav items
  useEffect(() => {
    const targetSection = hoveredSection || activeSection
    const targetLink = navRef.current?.querySelector<HTMLAnchorElement>(`[data-section="${targetSection}"]`)
    const orb = orbRef.current

    if (targetLink && orb && navRef.current) {
      const linkRect = targetLink.getBoundingClientRect()
      const navRect = navRef.current.getBoundingClientRect()
      const x = linkRect.left - navRect.left - 12
      const y = linkRect.top - navRect.top + 8

      setOrbStyle({ transform: `translate(${x}px, ${y}px)` })
    }
  }, [activeSection, hoveredSection])

  // Intersection observer for section highlighting
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

  // Detect scroll-to-bottom to activate contact
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      const pageHeight = document.documentElement.scrollHeight
      if (scrollPosition >= pageHeight - 5) {
        setActiveSection('contact')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle nav clicks
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    if (sectionId === 'about') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav ref={navRef} onMouseLeave={() => setHoveredSection(null)} className="relative hidden lg:block">
      <div className="orb" ref={orbRef} style={orbStyle}>
        <div className="orb-dot" ref={orbDotRef}></div>
      </div>
      <ul className="flex flex-col gap-6">
        {navItems.map((item) => {
          const isActive = hoveredSection ? hoveredSection === item.id : activeSection === item.id
          return (
            <li key={item.name}>
              <a
                href={`#${item.id}`}
                data-section={item.id}
                onClick={(e) => handleClick(e, item.id)}
                onMouseEnter={() => setHoveredSection(item.id)}
                className={`pb-[0.2em] relative text-[0.8em] uppercase tracking-[3px] font-medium transition-colors duration-300 ${
                  isActive ? 'text-[#ccc]' : 'text-[#999]'
                }`}
              >
                {item.name}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}