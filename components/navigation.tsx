"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-lg" : "bg-background/80 backdrop-blur-sm"
      } border-b border-border/50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12 transition-transform group-hover:scale-110">
                <Image src="/logo-epace.jpg" alt="ePACE Logo" fill className="object-contain rounded-lg" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">ePACE</span>
                <span className="text-xs text-muted-foreground hidden sm:block">Pentru România</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link
                href="/"
                className="relative text-foreground hover:text-primary px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-primary/5 group"
              >
                Acasă
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link
                href="/despre-noi"
                className="relative text-foreground hover:text-primary px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-primary/5 group"
              >
                Despre Noi
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link
                href="/platforma"
                className="relative text-foreground hover:text-primary px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-primary/5 group"
              >
                Platforma Politică
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link
                href="/implica-te"
                className="relative text-foreground hover:text-primary px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-primary/5 group"
              >
                Implică-te
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </Link>
              
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="hover:bg-primary/10">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-effect border-t border-border/50">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link
              href="/"
              className="text-foreground hover:text-primary hover:bg-primary/5 block px-4 py-3 rounded-lg text-base font-medium transition-all"
              onClick={() => setIsOpen(false)}
            >
              Acasă
            </Link>
            <Link
              href="/despre-noi"
              className="text-foreground hover:text-primary hover:bg-primary/5 block px-4 py-3 rounded-lg text-base font-medium transition-all"
              onClick={() => setIsOpen(false)}
            >
              Despre Noi
            </Link>
            <Link
              href="/platforma"
              className="text-foreground hover:text-primary hover:bg-primary/5 block px-4 py-3 rounded-lg text-base font-medium transition-all"
              onClick={() => setIsOpen(false)}
            >
              Platforma Politică
            </Link>
            <Link
              href="/implica-te"
              className="text-foreground hover:text-primary hover:bg-primary/5 block px-4 py-3 rounded-lg text-base font-medium transition-all"
              onClick={() => setIsOpen(false)}
            >
              Implică-te
            </Link>
            <div className="pt-4">
              <Button className="w-full" onClick={() => setIsOpen(false)}>
                Susține-ne
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
