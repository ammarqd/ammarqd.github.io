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
  const [orbStyle, setOrbStyle] = useState<{ transform: string }>({ transform: 'translate(0px, 0px)' })
  const manualScrollRef = useRef<boolean>(false)

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

    // Snappy easing with moderate speed variation
    const easeWithSnapBack = (t: number): number => {
      // Split the loop into two halves (left and right side of infinity)
      const halfProgress = (t * 2) % 1
      
      // Asymmetric easing - keeps minimum speed higher while maintaining snappy acceleration
      const eased = halfProgress < 0.5
        ? 4 * halfProgress * halfProgress * halfProgress * 0.4 + halfProgress * 0.6
        : 1 - 4 * Math.pow(1 - halfProgress, 3) * 0.4 - (1 - halfProgress) * 0.6
      
      // Return the full progress with easing applied to each half
      return (Math.floor(t * 2) + eased) / 2
    }

    const animate = () => {
      if (!orbDotRef.current) return
      
      const elapsed = Date.now() - startTimeRef.current
      const progress = (elapsed % speed) / speed
      
      // Apply snap-back easing
      const easedProgress = easeWithSnapBack(progress)
      const t = easedProgress * Math.PI * 2
      
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

  // Orb positioning - only based on activeSection now
  useEffect(() => {
    const targetLink = navRef.current?.querySelector<HTMLAnchorElement>(`[data-section="${activeSection}"]`)
    const orb = orbRef.current

    if (targetLink && orb && navRef.current) {
      const linkRect = targetLink.getBoundingClientRect()
      const navRect = navRef.current.getBoundingClientRect()
      const x = linkRect.left - navRect.left - 12
      const y = linkRect.top - navRect.top + 8

      setOrbStyle({ transform: `translate(${x}px, ${y}px)` })
    }
  }, [activeSection])

 useEffect(() => {
    let prevAtBottom = false
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (manualScrollRef.current) return
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-30% 0px -70% 0px',
        threshold: 0
      }
    )

    const elements = navItems
      .map(item => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)
    
    elements.forEach(el => observer.observe(el))


    const handleScroll = () => {
      const isAtBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight
      
      if (isAtBottom) {
        setActiveSection('contact')
        prevAtBottom = true
      } else if (prevAtBottom) {
        observer.disconnect()
        elements.forEach(el => observer.observe(el))
        prevAtBottom = false
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/ammarqadir"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#999] hover:text-[#ccc] transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        <div className="h-4 w-px bg-[#333]"></div>
        <a
          href="mailto:ammarqd@outlook.com"
          className="text-[#999] hover:text-[#ccc] transition-colors duration-300"
          aria-label="Email"
        >
          <MdMail size={24} />
        </a>
      </div>

      {/* Desktop navigation */}
      <nav ref={navRef} className="relative hidden lg:block">
        <div className="orb" ref={orbRef} style={orbStyle}>
          <div className="orb-dot" ref={orbDotRef}></div>
        </div>
        <ul className="flex flex-col w-max -my-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <li key={item.name}>
                <a
                  href={`#${item.id}`}
                  data-section={item.id}
                  onClick={() => {
                    manualScrollRef.current = true
                    setActiveSection(item.id)
                    setTimeout(() => {
                      manualScrollRef.current = false
                    }, 200)
                  }}
                  className={`block py-3 relative text-[0.8em] uppercase tracking-[3px] font-medium transition-colors duration-300 hover:text-[#ccc] ${
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
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/ammarqadir"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#999] hover:text-[#ccc] transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        <div className="h-4 w-px bg-[#333]"></div>
        <a
          href="mailto:ammarqd@outlook.com"
          className="text-[#999] hover:text-[#ccc] transition-colors duration-300"
          aria-label="Email"
        >
          <MdMail size={24} />
        </a>
      </div>
    </div>
  )
}