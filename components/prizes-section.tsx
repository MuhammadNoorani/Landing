"use client"

import { motion } from "framer-motion"
import { Trophy, Award, Star, Zap, Code, Lightbulb } from "lucide-react"

export default function PrizesSection() {
  const mainPrizes = [
    {
      icon: <Trophy className="h-10 w-10 text-[#ff4d00]" />,
      title: "Grand Prize",
      amount: "$250,000",
      description:
        "For the overall best project that demonstrates exceptional innovation, technical complexity, and real-world impact.",
    },
    {
      icon: <Award className="h-10 w-10 text-zinc-300" />,
      title: "Runner Up",
      amount: "$100,000",
      description: "For the second-place project that shows outstanding quality and potential for future development.",
    },
    {
      icon: <Star className="h-10 w-10 text-[#ff6a2c]" />,
      title: "Third Place",
      amount: "$50,000",
      description: "For the third-place project that exhibits remarkable creativity and technical execution.",
    },
  ]

  const categoryPrizes = [
    {
      icon: <Zap className="h-8 w-8 text-[#ff4d00]" />,
      title: "Best AI Implementation",
      amount: "$75,000",
    },
    {
      icon: <Code className="h-8 w-8 text-[#ff6a2c]" />,
      title: "Best Web3 Project",
      amount: "$75,000",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-[#ff4d00]" />,
      title: "Most Innovative",
      amount: "$75,000",
    },
    {
      icon: <Star className="h-8 w-8 text-[#ff6a2c]" />,
      title: "Best UI/UX",
      amount: "$50,000",
    },
    {
      icon: <Trophy className="h-8 w-8 text-[#ff4d00]" />,
      title: "Best Hardware Hack",
      amount: "$50,000",
    },
    {
      icon: <Award className="h-8 w-8 text-[#ff6a2c]" />,
      title: "Social Impact Award",
      amount: "$50,000",
    },
  ]

  return (
    <section className="py-24 bg-zinc-950 relative" id="prizes">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ff4d00]/5 via-zinc-950 to-zinc-950"></div>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center mb-16">
          <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center mr-3">
            <span className="text-[#ff4d00] text-xs">03</span>
          </div>
          <h2 className="text-xl font-medium text-white">Prizes</h2>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            <span className="text-white">$1M+ in</span> <span className="font-serif italic text-[#ff4d00]">Prizes</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-zinc-400 font-sans"
          >
            Compete for life-changing prizes across multiple categories and special awards
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {mainPrizes.map((prize, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="card-highlight p-8 card-hover"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 rounded-lg bg-zinc-800/50">{prize.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{prize.title}</h3>
                <div className="text-3xl md:text-4xl font-bold mb-4 text-[#ff4d00]">{prize.amount}</div>
                <p className="text-zinc-400 font-sans">{prize.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryPrizes.map((prize, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="card-highlight p-6 card-hover"
            >
              <div className="flex items-center">
                <div className="mr-4 p-3 rounded-lg bg-zinc-800/50">{prize.icon}</div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-white">{prize.title}</h3>
                  <div className="text-xl font-bold text-[#ff4d00]">{prize.amount}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}