import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Github, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">Join Our Newsletter</h3>
            <p className="text-zinc-400 font-sans">
              Stay updated with hackathon news, important dates, and exclusive tips to help you prepare for the event.
            </p>
            <form className="space-y-2">
              <div className="flex">
                <Input
                  placeholder="Enter your email"
                  className="bg-zinc-800 border-zinc-700 text-white focus:ring-[#ff4d00] focus:border-[#ff4d00] rounded-r-none"
                />
                <Button type="submit" variant="orange-gradient" className="rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">Hackathon</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-zinc-400 hover:text-[#ff4d00] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#timeline" className="text-zinc-400 hover:text-[#ff4d00] transition-colors">
                  Timeline
                </Link>
              </li>
              <li>
                <Link href="#prizes" className="text-zinc-400 hover:text-[#ff4d00] transition-colors">
                  Prizes
                </Link>
              </li>
              <li>
                <Link href="#register" className="text-zinc-400 hover:text-[#ff4d00] transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-zinc-400 hover:text-[#ff4d00] transition-colors">
                  Starter Kits
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-[#ff4d00] transition-colors">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-[#ff4d00] transition-colors">
                  API Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-[#ff4d00] transition-colors">
                  Code of Conduct
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-[#ff4d00] hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-[#ff4d00] hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-[#ff4d00] hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-[#ff4d00] hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="pt-4">
              <Button variant="orange-gradient" className="w-full rounded-full uppercase tracking-wider">
                Contact Us →
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} World's Largest Hackathon. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-zinc-500 hover:text-[#ff4d00] transition-colors text-sm">
              Terms
            </a>
            <a href="#" className="text-zinc-500 hover:text-[#ff4d00] transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-zinc-500 hover:text-[#ff4d00] transition-colors text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

