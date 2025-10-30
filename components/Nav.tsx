"use client"

import { useState, useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdMail} from 'react-icons/md'


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
    const a = 10
    const b = 6
    const speed = 3500

    const animate = () => {
      if (!orbDotRef.current) return
      
      const elapsed = Date.now() - startTimeRef.current
      const t = (elapsed % speed) / speed * Math.PI * 2
      
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

  // Unified scroll handler for section detection
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight
      const scrollPosition = window.scrollY + window.innerHeight
      const pageHeight = document.documentElement.scrollHeight
      const isAtBottom = scrollPosition >= pageHeight - 10
      
      if (isAtBottom) {
        setActiveSection('contact')
        return
      }
      
      const sections = navItems.map(item => {
        const element = document.getElementById(item.id)
        if (!element) return null
        
        const rect = element.getBoundingClientRect()
        
        return {
          id: item.id,
          element,
          rect,
          distanceFromTop: rect.top
        }
      }).filter(Boolean) as Array<{ id: string; element: HTMLElement; rect: DOMRect; distanceFromTop: number }>

      let currentSection = 'about'
      
      for (const section of sections) {
        if (section.distanceFromTop <= viewportHeight * 0.3 && section.rect.bottom > 0) {
          currentSection = section.id
        }
      }
      
      setActiveSection(currentSection)
    }

    handleScroll()
    
    window.addEventListener('scroll', handleScroll, { passive: true })
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
    <div className="flex flex-col justify-between h-full">
      {/* Mobile social links - shown only on mobile */}
      <div className="flex lg:hidden items-center gap-5 mt-8">
        <a
          href="https://github.com/ammarqd"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#999] hover:text-[#ccc] transition-colors duration-300"
          aria-label="GitHub"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://linkedin.com/in/ammarqadir"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#999] hover:text-[#ccc] transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={20} />
        </a>
        <div className="h-4 w-px bg-[#333]"></div>
        <a
          href="mailto:ammarqd@outlook.com"
          className="text-[#999] hover:text-[#ccc] transition-colors duration-300"
          aria-label="Email"
        >
          <MdMail size={20} />
        </a>
      </div>

      {/* Desktop navigation */}
      <nav ref={navRef} onMouseLeave={() => setHoveredSection(null)} className="relative hidden lg:block">
        <div className="orb" ref={orbRef} style={orbStyle}>
          <div className="orb-dot" ref={orbDotRef}></div>
        </div>
        <ul className="flex flex-col gap-5">
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

      {/* Desktop social links */}
      <div className="hidden lg:flex items-center gap-5">
        <a
          href="https://github.com/ammarqd"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#999] hover:text-[#ccc] transition-colors duration-300"
          aria-label="GitHub"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://linkedin.com/in/ammarqadir"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#999] hover:text-[#ccc] transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={20} />
        </a>
        <div className="h-4 w-px bg-[#333]"></div>
        <a
          href="mailto:ammarqd@outlook.com"
          className="text-[#999] hover:text-[#ccc] transition-colors duration-300"
          aria-label="Email"
        >
          <MdMail size={20} />
        </a>
      </div>
    </div>
  )
}