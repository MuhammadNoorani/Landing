"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FaqSection() {
  const faqs = [
    {
      question: "Who can participate in the hackathon?",
      answer:
        "Anyone can participate! Whether you're a student, professional, or hobbyist, as long as you're passionate about technology and innovation, you're welcome to join. We encourage diversity in skills, backgrounds, and experience levels.",
    },
    {
      question: "Do I need to have a team to register?",
      answer:
        "No, you can register as an individual and we'll help you find teammates through our team formation platform. You can also form your own team of up to 4 people before or during the event.",
    },
    {
      question: "What kind of projects can I build?",
      answer:
        "You can build any type of project that aligns with the hackathon themes and challenges. This includes web applications, mobile apps, hardware projects, AI/ML solutions, blockchain applications, and more. We encourage creativity and innovation!",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "No, participation in the hackathon is completely free. We believe in making technology events accessible to everyone, so there's no cost to register or participate.",
    },
    {
      question: "What resources will be provided during the hackathon?",
      answer:
        "We'll provide access to various APIs, cloud credits, mentorship from industry experts, technical workshops, and networking opportunities. Participants will also receive swag, meals during the event, and access to our online community.",
    },
    {
      question: "How will projects be judged?",
      answer:
        "Projects will be evaluated by our panel of judges based on innovation, technical complexity, design/user experience, practicality/impact, and presentation quality. Each category will have specific criteria that will be shared before the event.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-zinc-950 relative" id="faq">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#ff4d00]/5 via-zinc-950 to-zinc-950"></div>
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-16">
          <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center mr-3">
            <span className="text-[#ff4d00] text-xs">07</span>
          </div>
          <h2 className="text-xl font-medium text-white">FAQ</h2>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            <span className="text-white">Frequently Asked</span>{" "}
            <span className="font-serif italic text-[#ff4d00]">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-zinc-400 font-sans"
          >
            Find answers to common questions about the hackathon
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="card-highlight card-hover overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                  <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center ml-4">
                    {openIndex === index ? (
                      <ChevronUp className="h-4 w-4 text-[#ff4d00]" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-[#ff4d00]" />
                    )}
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-zinc-400 font-sans">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

