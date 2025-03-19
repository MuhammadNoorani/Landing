"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, ChevronDown } from "lucide-react"

export default function RegistrationSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    teamName: "",
    teamSize: "",
    experience: "",
  })
  const [isTeamSizeOpen, setIsTeamSizeOpen] = useState(false)
  const [isExperienceOpen, setIsExperienceOpen] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (field === "teamSize") setIsTeamSizeOpen(false)
    if (field === "experience") setIsExperienceOpen(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Registration submitted successfully!")
    setFormData({
      name: "",
      email: "",
      teamName: "",
      teamSize: "",
      experience: "",
    })
  }

  const teamSizes = [
    { value: "1", label: "Solo (1 person)" },
    { value: "2", label: "2 people" },
    { value: "3", label: "3 people" },
    { value: "4", label: "4 people" },
  ]

  const experienceLevels = [
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
    { value: "expert", label: "Expert" },
  ]

  return (
    <section className="py-24 bg-black relative" id="register">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#ff4d00]/5 via-black to-black"></div>
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-16">
          <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center mr-3">
            <span className="text-[#ff4d00] text-xs">06</span>
          </div>
          <h2 className="text-xl font-medium text-white uppercase tracking-wider">Registration</h2>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-wide"
          >
            <span className="text-white">REGISTER</span> <span className="text-[#ff4d00]">NOW</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-zinc-400 font-sans"
          >
            Secure your spot in the world's largest hackathon and prepare to build something amazing
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 rounded-lg p-8 hover:border-[#ff4d00]/30 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff4d00] to-transparent"></div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white font-medium text-sm uppercase tracking-wider">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-zinc-800/50 border-zinc-700 text-white h-12 rounded-md focus:border-[#ff4d00] focus:ring-[#ff4d00]/20"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-white font-medium text-sm uppercase tracking-wider">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-zinc-800/50 border-zinc-700 text-white h-12 rounded-md focus:border-[#ff4d00] focus:ring-[#ff4d00]/20"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="teamName" className="text-white font-medium text-sm uppercase tracking-wider">
                    Team Name
                  </label>
                  <Input
                    id="teamName"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    placeholder="Awesome Hackers"
                    required
                    className="bg-zinc-800/50 border-zinc-700 text-white h-12 rounded-md focus:border-[#ff4d00] focus:ring-[#ff4d00]/20"
                  />
                </div>

                <div className="space-y-2 relative">
                  <label htmlFor="teamSize" className="text-white font-medium text-sm uppercase tracking-wider">
                    Team Size
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full h-12 px-3 py-2 bg-zinc-800/50 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#ff4d00]/20 focus:border-[#ff4d00]"
                      onClick={() => setIsTeamSizeOpen(!isTeamSizeOpen)}
                    >
                      <span>
                        {formData.teamSize
                          ? teamSizes.find((size) => size.value === formData.teamSize)?.label
                          : "Select team size"}
                      </span>
                      <ChevronDown className="h-4 w-4 text-zinc-400" />
                    </button>

                    {isTeamSizeOpen && (
                      <div className="absolute z-10 w-full mt-1 bg-zinc-800 border border-zinc-700 rounded-md shadow-lg">
                        <ul className="py-1 max-h-60 overflow-auto">
                          {teamSizes.map((size) => (
                            <li
                              key={size.value}
                              className="px-3 py-2 hover:bg-zinc-700 cursor-pointer flex items-center justify-between"
                              onClick={() => handleSelectChange("teamSize", size.value)}
                            >
                              <span className="text-white">{size.label}</span>
                              {formData.teamSize === size.value && <Check className="h-4 w-4 text-[#ff4d00]" />}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2 relative">
                  <label htmlFor="experience" className="text-white font-medium text-sm uppercase tracking-wider">
                    Experience Level
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full h-12 px-3 py-2 bg-zinc-800/50 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#ff4d00]/20 focus:border-[#ff4d00]"
                      onClick={() => setIsExperienceOpen(!isExperienceOpen)}
                    >
                      <span>
                        {formData.experience
                          ? experienceLevels.find((exp) => exp.value === formData.experience)?.label
                          : "Select experience"}
                      </span>
                      <ChevronDown className="h-4 w-4 text-zinc-400" />
                    </button>

                    {isExperienceOpen && (
                      <div className="absolute z-10 w-full mt-1 bg-zinc-800 border border-zinc-700 rounded-md shadow-lg">
                        <ul className="py-1 max-h-60 overflow-auto">
                          {experienceLevels.map((exp) => (
                            <li
                              key={exp.value}
                              className="px-3 py-2 hover:bg-zinc-700 cursor-pointer flex items-center justify-between"
                              onClick={() => handleSelectChange("experience", exp.value)}
                            >
                              <span className="text-white">{exp.label}</span>
                              {formData.experience === exp.value && <Check className="h-4 w-4 text-[#ff4d00]" />}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Button
                  type="submit"
                  variant="orange-gradient"
                  size="lg"
                  className="w-full rounded-full uppercase tracking-wider"
                >
                  REGISTER A SPOT
                </Button>
              </div>

              <p className="text-zinc-400 text-sm text-center pt-4">
                By registering, you agree to our{" "}
                <a href="#" className="text-[#ff4d00] hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#ff4d00] hover:underline">
                  Privacy Policy
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

