import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'
import AccessibilityWidget from '@/components/ui/AccessibilityWidget'
import StickyMobileCTA from '@/components/ui/StickyMobileCTA'
import ExitIntent from '@/components/ui/ExitIntent'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import Problem from '@/components/sections/Problem'
import Benefits from '@/components/sections/Benefits'
import WhyUs from '@/components/sections/WhyUs'
import HowTo from '@/components/sections/HowTo'
import Pricing from '@/components/sections/Pricing'
import SocialProof from '@/components/sections/SocialProof'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Benefits />
        <WhyUs />
        <HowTo />
        <Pricing />
        <SocialProof />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
      <AccessibilityWidget />
      <StickyMobileCTA />
      <ExitIntent />
    </>
  )
}
