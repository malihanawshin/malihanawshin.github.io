"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
    <div>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass py-4" : "bg-transparent py-6"
        }`}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold glow-text">
            Maliha Nawshin Rahman
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#education" className="text-muted-foreground hover:text-foreground transition-colors">
                Education
              </Link>
            </li>
            <li>
              <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
                Experience
              </Link>
            </li>
            <li>
              <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden w-8 h-8 relative flex flex-col justify-between items-center"
            onClick={toggleMobileMenu}
          >
            <span
              className={`block h-1 w-full bg-foreground rounded transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-3" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-full bg-foreground rounded transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-1 w-full bg-foreground rounded transition-transform duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-3" : ""
              }`}
            ></span>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-background/90 backdrop-blur-md flex flex-col items-center justify-center gap-8 transition-transform duration-300 z-40 ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="text-2xl text-muted-foreground hover:text-foreground transition-colors">
          About
        </Link>
        <Link href="#education" onClick={() => setMobileMenuOpen(false)} className="text-2xl text-muted-foreground hover:text-foreground transition-colors">
          Education
        </Link>
        <Link href="#experience" onClick={() => setMobileMenuOpen(false)} className="text-2xl text-muted-foreground hover:text-foreground transition-colors">
          Experience
        </Link>
        <Link href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-2xl text-muted-foreground hover:text-foreground transition-colors">
          Projects
        </Link>
        <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-2xl text-muted-foreground hover:text-foreground transition-colors">
          Contact
        </Link>
      </div>
    </div>
  )
}
