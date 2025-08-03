import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { HowItWorks } from "@/components/HowItWorks";
import { Industries } from "@/components/Industries";
import { WhyAfrica } from "@/components/WhyAfrica";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Partners />
        <HowItWorks />
        <Industries />
        <WhyAfrica />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
