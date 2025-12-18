import { Header } from "@/components/client/Header";
import { Hero } from "@/components/client/Hero";
import { SplineBackground } from "@/components/client/SplineBackground";
import { HowItWorks } from "@/components/client/HowItWorks";
import { Industries } from "@/components/client/Industries";
import { WhyAfrica } from "@/components/client/WhyAfrica";
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
        <HowItWorks />
        <Industries />
        <WhyAfrica />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
