import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen w-full flex items-center pt-12 sm:pt-24 md:pt-20 lg:pt-20 z-20">
      <div className="relative z-20 w-full mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 text-left">
        {/* Social Proof */}
        <div className="mb-3 sm:mb-4">
          <p className="text-xs sm:text-sm text-gray-600 font-geist">TRUSTED BY 50,000+ EXPERT LABELERS ACROSS 54 COUNTRIES</p>
        </div>

        {/* Main Headline */}
        <h1 className="text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[6vw] xl:text-[5.5vw] leading-[0.95] sm:leading-[0.9] font-semibold tracking-tighter font-geist text-black">
          <span className="block">African AI <span className="text-blue-500">Data Labeling</span></span>
          <span className="block text-black/60 text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[4.5vw] xl:text-[4vw]">Factory for Your AI Projects</span>
        </h1>

        {/* Supporting Copy */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-black/70 max-w-3xl font-geist">
          Grow your AI projects with premium data labeling services powered by Africa's talent. 50,000+ expert labelers across 54 countries with 99.5% accuracy rate.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4">
          <Link
            to="/signup"
            className="inline-flex items-center justify-start sm:justify-center gap-2 rounded-full bg-blue-500 text-white px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold hover:bg-blue-600 transition-all duration-200 font-geist shadow-lg hover:shadow-xl w-auto"
          >
            Get Started! <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-start text-sm sm:text-base font-medium text-black hover:text-black/80 transition font-geist border-b-2 border-black/30 hover:border-black pb-1 w-auto"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
