"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function JudgesSection() {
  const judges = [
    {
      name: "Alex Johnson",
      role: "CTO at TechGiant",
      bio: "AI and machine learning expert with 15+ years of experience in the tech industry.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Sarah Chen",
      role: "Founder & CEO at StartupX",
      bio: "Serial entrepreneur who has successfully founded and exited three tech startups.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Michael Rodriguez",
      role: "VP of Engineering at CloudCorp",
      bio: "Cloud computing pioneer and advocate for open source technologies.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Priya Patel",
      role: "Design Director at UXStudio",
      bio: "Award-winning designer specializing in creating intuitive user experiences.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "David Kim",
      role: "Partner at Venture Capital",
      bio: "Investor with a portfolio of successful tech companies and a passion for innovation.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Olivia Wilson",
      role: "AI Research Lead at FutureLabs",
      bio: "PhD in Computer Science with a focus on natural language processing and deep learning.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <section className="py-24 bg-black relative" id="judges">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#ff4d00]/5 via-black to-black"></div>
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-16">
          <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center mr-3">
            <span className="text-[#ff4d00] text-xs">04</span>
          </div>
          <h2 className="text-xl font-medium text-white uppercase tracking-wider">Judges</h2>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-wide"
          >
            <span className="text-white">MEET OUR</span> <span className="text-[#ff4d00]">JUDGES</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-zinc-400 font-sans"
          >
            Our panel of industry experts will evaluate your projects based on innovation, technical complexity, design,
            and real-world impact
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {judges.map((judge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff4d00]/20 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 rounded-lg overflow-hidden group-hover:border-[#ff4d00]/30 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff4d00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full overflow-hidden border border-zinc-700 group-hover:border-[#ff4d00]/30 transition-all duration-300">
                        <Image
                          src={judge.image || "/placeholder.svg"}
                          alt={judge.name}
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#ff4d00] flex items-center justify-center text-white text-xs font-bold">
                        {index + 1}
                      </div>
                    </div>

                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-[#ff4d00] transition-colors duration-300">
                        {judge.name}
                      </h3>
                      <p className="text-zinc-400 text-sm">{judge.role}</p>
                    </div>
                  </div>

                  <p className="text-zinc-400 mb-6 text-sm">{judge.bio}</p>

                  <div className="flex space-x-2">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-[#ff4d00] hover:text-white transition-all duration-300"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-[#ff4d00] hover:text-white transition-all duration-300"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-[#ff4d00] hover:text-white transition-all duration-300"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

