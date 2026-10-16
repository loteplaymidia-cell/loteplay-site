import { Benefits } from '@/components/landing/benefits'
import { Faq } from '@/components/landing/faq'
import { FinalCta } from '@/components/landing/final-cta'
import { Footer } from '@/components/landing/footer'
import { Header } from '@/components/landing/header'
import { Hero } from '@/components/landing/hero'
import { HowItWorks } from '@/components/landing/how-it-works'
import { Offer } from '@/components/landing/offer'
import { Plans } from '@/components/landing/plans'
import { Referral } from '@/components/landing/referral'
import { Services } from '@/components/landing/services'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <Benefits />
        <Plans />
        <Referral />
        <Offer />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
