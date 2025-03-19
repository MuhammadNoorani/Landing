"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Users, Clock, Award, Globe } from "lucide-react"

export default function AboutSection() {
  const [count, setCount] = useState(0)
  const targetRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(targetRef, { once: true, amount: 0.3 })
  const countingStarted = useRef(false)

  useEffect(() => {
    if (isInView && !countingStarted.current) {
      countingStarted.current = true
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev >= 1000000) {
            clearInterval(interval)
            return 1000000
          }
          return prev + 25000
        })
      }, 30)

      return () => clearInterval(interval)
    }
  }, [isInView])

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return "$1M+"
    }
    return `$${(num / 1000000).toFixed(1)}M`
  }

  const stats = [
    {
      icon: <Users className="h-8 w-8 text-[#ff4d00]" />,
      value: "10,000+",
      label: "Participants",
    },
    {
      icon: <Clock className="h-8 w-8 text-[#ff4d00]" />,
      value: "48",
      label: "Hours",
    },
    {
      icon: <Award className="h-8 w-8 text-[#ff4d00]" />,
      value: "20+",
      label: "Categories",
    },
    {
      icon: <Globe className="h-8 w-8 text-[#ff4d00]" />,
      value: "100+",
      label: "Countries",
    },
  ]

  return (
    <section className="py-24 bg-zinc-950 relative" id="about">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center mb-16">
          <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center mr-3">
            <span className="text-[#ff4d00] text-xs">01</span>
          </div>
          <h2 className="text-xl font-medium text-white">About</h2>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: "some" }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            <span className="text-white">About The</span>{" "}
            <span className="font-serif italic text-[#ff4d00]">Hackathon</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false, amount: "some" }}
            className="text-lg text-zinc-400 font-sans px-4 sm:px-0"
          >
            Join the world's most innovative minds for 48 hours of coding, creativity, and collaboration. Build
            groundbreaking projects, network with industry leaders, and compete for massive prizes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: "some" }}
              className="card-highlight p-6 card-hover"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-lg bg-zinc-800/50">{stat.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">{stat.value}</h3>
                <p className="text-zinc-400 font-sans">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          ref={targetRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: "some" }}
          className="card-highlight p-8 card-hover"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">Prize Pool</h3>
              <p className="text-zinc-400 max-w-md font-sans">
                Compete for life-changing prizes across multiple categories and special awards
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-[#ff4d00] mb-2">{formatNumber(count)}</div>
              <p className="text-zinc-400 font-sans">Total Prizes</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}