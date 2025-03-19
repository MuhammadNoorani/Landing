"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 100

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3

        const colors = [
          "rgba(255, 77, 0, 0.3)",
          "rgba(255, 106, 44, 0.3)",
          "rgba(220, 38, 38, 0.3)",
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width

        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const init = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.strokeStyle = "rgba(50, 50, 50, 0.05)"
      ctx.lineWidth = 0.5

      const gridSize = 50
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(255, 77, 0, ${0.05 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    init()
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToRegister = () => {
    const registerSection = document.getElementById("register")
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" id="hero">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black pointer-events-none" />

      <div className="container relative z-10 px-4 sm:px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#ff4d00]/10 text-[#ff4d00] border border-[#ff4d00]/20">
              <span className="w-1.5 h-1.5 bg-[#ff4d00] rounded-full mr-1.5"></span>
              BOOKING FOR JUN'23
            </span>
          </motion.div>

          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight uppercase">
              <div className="text-white">THE WORLD'S</div>
              <div className="text-white">LARGEST</div>
              <div>
                <span className="text-[#ff4d00]">HACKATHON</span>
              </div>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-zinc-400 mb-16 px-4 sm:px-0"
          >
            Join thousands of innovators, creators, and tech enthusiasts to build the future and compete for glory.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-24 sm:mb-32 px-4 sm:px-0"
          >
            <Button variant="orange-gradient" size="lg" className="rounded-full px-8" onClick={scrollToRegister}>
              REGISTER A SPOT
            </Button>
            <Button variant="dark-gradient" size="lg" className="rounded-full px-8" onClick={scrollToAbout}>
              LEARN MORE
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-12 sm:bottom-20 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <span className="text-zinc-500 text-sm">Scroll to explore</span>
          <ArrowDown className="text-[#ff4d00] h-6 w-6 animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}