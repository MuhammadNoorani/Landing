"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function TimelineSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const timelineEvents = [
    {
      date: "April 1",
      title: "Registration Opens",
      description: "Sign up early to secure your spot and get access to exclusive pre-event workshops.",
    },
    {
      date: "May 15",
      title: "Team Formation",
      description: "Find teammates through our matching platform or bring your own team of up to 4 people.",
    },
    {
      date: "June 1",
      title: "Hackathon Kickoff",
      description: "The event begins with opening ceremonies and the official problem statement release.",
    },
    {
      date: "June 3",
      title: "Project Submission",
      description: "Submit your project before the deadline for judging and evaluation.",
    },
    {
      date: "June 10",
      title: "Winners Announced",
      description: "Join us for the closing ceremony where winners will be announced and prizes awarded.",
    },
  ]

  return (
    <section className="py-24 bg-black relative" id="timeline">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ff4d00]/5 via-black to-black"></div>
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-16">
          <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center mr-3">
            <span className="text-[#ff4d00] text-xs">02</span>
          </div>
          <h2 className="text-xl font-medium text-white uppercase tracking-wider">Timeline</h2>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-wide"
          >
            <span className="text-white">EVENT</span> <span className="text-[#ff4d00]">TIMELINE</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-zinc-400 font-sans"
          >
            Mark your calendar with these important dates to stay on track throughout the hackathon journey
          </motion.p>
        </div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: isInView ? "100%" : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[22px] top-0 h-full w-px bg-gradient-to-b from-[#ff4d00] via-zinc-700 to-zinc-800 hidden md:block"
          />

          {/* Timeline events */}
          <div className="space-y-12 relative">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-center justify-center w-11 h-11 rounded-full bg-zinc-900 border border-zinc-800 z-10 shrink-0 group-hover:border-[#ff4d00] transition-colors"
                >
                  <span className="text-[#ff4d00] font-medium">{index + 1}</span>
                  <div className="absolute -inset-1 bg-[#ff4d00]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>

                <div className="flex flex-col space-y-2">
                  <div className="text-xl font-bold text-[#ff4d00] uppercase tracking-wider">{event.date}</div>
                  <div className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 rounded-lg p-6 hover:border-[#ff4d00]/30 transition-all duration-300 group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff4d00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#ff4d00] transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-zinc-400 font-sans">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

