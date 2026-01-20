import { ScrollingTicker } from '@/app/components/ScrollingTicker';
import { Header } from '@/app/components/Header';
import { HeroSection } from '@/app/components/HeroSection';
import { AsSeenOnSection } from '@/app/components/AsSeenOnSection';
import { ProblemSolutionSection } from '@/app/components/ProblemSolutionSection';
import { BenefitsGridSection } from '@/app/components/BenefitsGridSection';
import { BentoGrid } from '@/app/components/BentoGrid';
import { HowItWorksSection } from '@/app/components/HowItWorksSection';
import { BeforeAfterSection } from '@/app/components/BeforeAfterSection';
import { SpecificationsSection } from '@/app/components/SpecificationsSection';
import { GuaranteeSection } from '@/app/components/GuaranteeSection';
import { ScarcitySection } from '@/app/components/ScarcitySection';
import { ShippingInfoSection } from '@/app/components/ShippingInfoSection';
import { ReviewsGrid } from '@/app/components/ReviewsGrid';
import { InstagramFeedSection } from '@/app/components/InstagramFeedSection';
import { FAQSection } from '@/app/components/FAQSection';
import { FinalCTASection } from '@/app/components/FinalCTASection';
import { Footer } from '@/app/components/Footer';
import { StickyCartBar } from '@/app/components/StickyCartBar';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Bar */}
      <ScrollingTicker />
      
      {/* Fixed Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero with Bundle Selector */}
        <HeroSection />
        
        {/* As Seen On Press */}
        <AsSeenOnSection />
        
        {/* Problem vs Solution */}
        <ProblemSolutionSection />
        
        {/* Benefits Grid */}
        <BenefitsGridSection />
        
        {/* Bento Grid Features */}
        <BentoGrid />
        
        {/* How It Works Steps */}
        <HowItWorksSection />
        
        {/* Before/After Comparison */}
        <BeforeAfterSection />
        
        {/* Specifications Section */}
        <SpecificationsSection />
        
        {/* Scarcity/FOMO Section */}
        <ScarcitySection />
        
        {/* Guarantee Section */}
        <GuaranteeSection />
        
        {/* Shipping Info */}
        <ShippingInfoSection />
        
        {/* Reviews Grid */}
        <ReviewsGrid />
        
        {/* Instagram Feed */}
        <InstagramFeedSection />
        
        {/* FAQ Accordion */}
        <FAQSection />
        
        {/* Final CTA Section */}
        <FinalCTASection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Sticky Cart Bar (Mobile Only) */}
      <StickyCartBar />
    </div>
  );
}