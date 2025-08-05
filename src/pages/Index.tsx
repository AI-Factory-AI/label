import { Header } from "@/components/client/Header";
import { Hero } from "@/components/client/Hero";
import { Partners } from "@/components/client/Partners";
import { HowItWorks } from "@/components/client/HowItWorks";
import { Industries } from "@/components/client/Industries";
import { WhyAfrica } from "@/components/client/WhyAfrica";
import { Footer } from "@/components/client/Footer";

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
