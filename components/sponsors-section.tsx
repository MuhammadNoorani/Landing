"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function SponsorsSection() {
  const sponsorTiers = [
    {
      tier: "Platinum Sponsors",
      sponsors: [
        { name: "TechGiant", logo: "/placeholder-logo.svg" },
        { name: "CloudCorp", logo: "/placeholder-logo.svg" },
        { name: "InnovateCo", logo: "/placeholder-logo.svg" },
      ],
    },
    {
      tier: "Gold Sponsors",
      sponsors: [
        { name: "DevStudio", logo: "/placeholder-logo.svg" },
        { name: "AILabs", logo: "/placeholder-logo.svg" },
        { name: "BlockChain Inc", logo: "/placeholder-logo.svg" },
        { name: "DataSystems", logo: "/placeholder-logo.svg" },
        { name: "FutureTech", logo: "/placeholder-logo.svg" },
        { name: "WebWorks", logo: "/placeholder-logo.svg" },
      ],
    },
    {
      tier: "Silver Sponsors",
      sponsors: [
        { name: "StartupX", logo: "/placeholder-logo.svg" },
        { name: "CodeCraft", logo: "/placeholder-logo.svg" },
        { name: "DesignHub", logo: "/placeholder-logo.svg" },
        { name: "TechFund", logo: "/placeholder-logo.svg" },
        { name: "CloudHost", logo: "/placeholder-logo.svg" },
        { name: "DevTools", logo: "/placeholder-logo.svg" },
        { name: "AIEngine", logo: "/placeholder-logo.svg" },
        { name: "SecureTech", logo: "/placeholder-logo.svg" },
      ],
    },
  ]

  return (
    <section className="py-24 bg-zinc-950 relative" id="sponsors">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#ff4d00]/5 via-zinc-950 to-zinc-950 pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="flex items-center mb-16">
          <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center mr-3">
            <span className="text-[#ff4d00] text-xs">05</span>
          </div>
          <h2 className="text-xl font-medium text-white uppercase tracking-wider">Sponsors</h2>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-wide"
          >
            <span className="text-white">OUR</span> <span className="text-[#ff4d00]">SPONSORS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-zinc-400 font-sans"
          >
            We're proud to partner with leading companies that are helping make this hackathon possible
          </motion.p>
        </div>

        <div className="space-y-16">
          {sponsorTiers.map((tier, tierIndex) => (
            <div key={tierIndex} className="space-y-6">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-white mb-8"
              >
                {tier.tier}
              </motion.h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <motion.div
                    key={sponsorIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.3, delay: sponsorIndex * 0.05 }}
                    className="card-highlight p-4 card-hover flex items-center justify-center h-16"
                  >
                    <span className="text-white font-medium">{sponsor.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <Button variant="orange-gradient" size="lg" className="rounded-full">
            Become a Sponsor
          </Button>
        </motion.div>
      </div>
    </section>
  )
}