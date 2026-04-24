'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = ['home', 'about', 'gallery', 'contact']
      const scrollPosition = window.scrollY + 120
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    closeMenu()
    const target = document.querySelector(href)
    if (target) {
      const offset = 80
      window.scrollTo({ 
        top: (target as HTMLElement).offsetTop - offset, 
        behavior: 'smooth' 
      })
    }
  }

  const navItems = [
    { href: '#home', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '#gallery', label: 'Galeria' },
    { href: '#contact', label: 'Contato' },
  ]

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img
              src="https://i.ibb.co/Wbrpc91/Logotipo-Juracema-neumann.jpg"
              alt="Juracema Neumann"
              width={scrolled ? 45 : 55}
              height={scrolled ? 45 : 55}
              className="logo-img"
              style={{ borderRadius: '50%', transition: 'all 0.4s' }}
            />
            <span className="logo-text">
              Cantinho do <span>Artesanato</span>
            </span>
          </div>

          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <a 
                  href={href} 
                  className={`nav-link ${activeSection === href.slice(1) ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </nav>
    </header>
  )
}