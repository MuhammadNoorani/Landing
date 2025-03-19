"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, X } from "lucide-react"
import Link from "next/link"

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800/50 mt-24"
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-center text-sm">
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#ff4d00]/10 text-[#ff4d00]">
                  <span className="w-1.5 h-1.5 bg-[#ff4d00] rounded-full mr-1.5"></span>
                  New
                </span>
                <p className="text-zinc-300">
                  Virtual Hackathon • Registration opens April 1st. Early birds get exclusive workshop access.{" "}
                  <Link href="#register" className="text-[#ff4d00] hover:text-[#ff6a2c] inline-flex items-center ml-1">
                    Learn more <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </p>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="absolute right-4 text-zinc-500 hover:text-white transition-colors"
                aria-label="Close announcement"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

