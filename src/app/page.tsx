import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import CompanyStrengths from '@/components/CompanyStrengths';
import News from '@/components/News';
import IntroFlow from '@/components/IntroFlow';

import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CompanyStrengths />
      <News />
      <IntroFlow />
      
      <CTA />
      <Footer />
    </div>
  );
}
