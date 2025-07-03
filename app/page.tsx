import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ServiceNavigationSection from '@/components/ServiceNavigationSection'
import AIPersonalAdvisorSection from '@/components/AIPersonalAdvisorSection'
import AITrainingSection from '@/components/AITrainingSection'
import AIDevelopmentSection from '@/components/AIDevelopmentSection'
import ICTDevelopmentSection from '@/components/ICTDevelopmentSection'
import AIMarketingSection from '@/components/AIMarketingSection'
import AICoursesSection from '@/components/AICoursesSection'
import TakumiWorkshopSection from '@/components/TakumiWorkshopSection'
import InokuraSection from '@/components/InokuraSection'
import AIImplementationSection from '@/components/AIImplementationSection'
import FAQSection from '@/components/FAQSection'
import CompanyInfoSection from '@/components/CompanyInfoSection'
import ContactSection from '@/components/ContactSection'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="overflow-x-hidden">
        <section id="hero">
          <HeroSection />
        </section>
        <section id="services">
          <ServiceNavigationSection />
        </section>
        <section id="ai-advisor">
          <AIPersonalAdvisorSection />
        </section>
        <section id="ai-training">
          <AITrainingSection />
        </section>
        <section id="development">
          <AIDevelopmentSection />
        </section>
        <section id="ict">
          <ICTDevelopmentSection />
        </section>
        <section id="marketing">
          <AIMarketingSection />
        </section>
        <section id="courses">
          <AICoursesSection />
        </section>
        <section id="takumi">
          <TakumiWorkshopSection />
        </section>
        <section id="inokura">
          <InokuraSection />
        </section>
        <section id="implementation">
          <AIImplementationSection />
        </section>
        <section id="faq">
          <FAQSection />
        </section>
        <section id="company">
          <CompanyInfoSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </>
  )
}