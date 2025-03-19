import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import TimelineSection from "@/components/timeline-section"
import PrizesSection from "@/components/prizes-section"
import JudgesSection from "@/components/judges-section"
import SponsorsSection from "@/components/sponsors-section"
import RegistrationSection from "@/components/registration-section"
import FaqSection from "@/components/faq-section"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"
import AnnouncementBar from "@/components/announcement-bar"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <AnnouncementBar />
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <PrizesSection />
        <JudgesSection />
        <SponsorsSection />
        <RegistrationSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}

