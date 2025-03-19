"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showRegisterButton, setShowRegisterButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero')
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        setShowRegisterButton(window.scrollY > heroBottom)
      }
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Timeline", href: "#timeline" },
    { name: "Prizes", href: "#prizes" },
    { name: "Judges", href: "#judges" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "FAQ", href: "#faq" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full pt-6">
      <div
        className={cn(
          "px-4 sm:px-6 py-4 rounded-full transition-all duration-500 max-w-5xl w-full mx-4",
          scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent",
        )}
      >
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-10">
            <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="#ff4d00" strokeWidth="2" />
              </svg>
            </div>
          </Link>

          {/* Desktop Navigation - Center aligned */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-wider font-medium text-zinc-400 hover:text-white transition-all duration-300"
              >
                {index === 3 ? <span className="text-white">{link.name}</span> : link.name}
                {index === 3 && <span className="ml-1 text-xs text-[#ff4d00]">[04]</span>}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {showRegisterButton && (
              <Button 
                variant="orange-gradient" 
                size="sm" 
                className="hidden md:flex rounded-full" 
                onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Register Now →
              </Button>
            )}

            {/* Mobile Navigation Toggle */}
            <button 
              className="md:hidden text-zinc-300 hover:text-white p-2" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-black/95 mt-4 rounded-lg"
            >
              <div className="py-4 flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-zinc-400 hover:text-white py-3 px-4 border-b border-zinc-800/50 last:border-none"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="p-4">
                  <Button 
                    variant="orange-gradient" 
                    className="w-full rounded-full"
                    onClick={() => {
                      document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
                      setIsOpen(false);
                    }}
                  >
                    Register Now →
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}