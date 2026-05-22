import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'
import AccessibilityWidget from '@/components/ui/AccessibilityWidget'
import StickyMobileCTA from '@/components/ui/StickyMobileCTA'
import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import Benefits from '@/components/sections/Benefits'
import Trust from '@/components/sections/Trust'
import HowTo from '@/components/sections/HowTo'
import Pricing from '@/components/sections/Pricing'
import Reviews from '@/components/sections/Reviews'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Benefits />
        <Trust />
        <HowTo />
        <Pricing />
        <Reviews />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
      <AccessibilityWidget />
      <StickyMobileCTA />
    </>
  )
}
