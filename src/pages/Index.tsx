import { Header } from "@/components/client/Header";
import { Hero } from "@/components/client/Hero";
import { SplineBackground } from "@/components/client/SplineBackground";
import { FeaturesSection } from "@/components/client/FeaturesSection";
import { SolutionSection } from "@/components/client/SolutionSection";
import { Testimonials } from "@/components/client/Testimonials";
import { ContactForm } from "@/components/client/ContactForm";
import { Footer } from "@/components/client/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section with Spline Background */}
        <div className="relative min-h-screen w-full" style={{ backgroundColor: '#fff' }}>
          <SplineBackground />
          <Hero />
        </div>
        
        {/* Features Section */}
        <FeaturesSection />
        
        {/* Solution Section */}
        <SolutionSection />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* Contact Form Section */}
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
