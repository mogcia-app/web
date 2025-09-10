import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import IntroFlow from '@/components/IntroFlow';
import Portfolio from '@/components/Portfolio';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Hero />
      <Services />
      <IntroFlow />
      <Portfolio />
      <CTA />
      <Footer />
    </div>
  );
}
