import { Card, CardContent } from "@/components/ui/card";
import { Heart, Brain, Leaf, Building2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const logos = [
  { 
    src: "https://res.cloudinary.com/ecosheane/image/upload/v1744903564/logo-echo_esh6hy.png", 
    alt: "Sodicam", 
    width: 144, 
    height: 80 
  },
  { 
    src: "https://res.cloudinary.com/ecosheane/image/upload/v1744903562/logo-acme_lwmqin.png", 
    alt: "Diagnostics", 
    width: 144, 
    height: 80 
  },
  { 
    src: "https://res.cloudinary.com/ecosheane/image/upload/v1744903562/logo-pulse_feixsm.png", 
    alt: "ITV", 
    width: 144, 
    height: 80 
  },
  { 
    src: "https://res.cloudinary.com/ecosheane/image/upload/v1744903562/logo-apex_qyehhm.png", 
    alt: "FIBA", 
    width: 144, 
    height: 80 
  },
];

export const Partners = () => {
  const [position, setPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const speed = 1; // Pixels per frame
  
  useEffect(() => {
    let animationId: number;
    let lastTime = 0;
    
    const animate = (currentTime: number) => {
      if (lastTime === 0) lastTime = currentTime;
      const deltaTime = currentTime - lastTime;
      
      setPosition(prev => {
        const newPosition = prev - speed * (deltaTime / 16);
        // Reset when first set is completely out of view
        if (Math.abs(newPosition) >= logos.length * 200) {
          return 0;
        }
        return newPosition;
      });
      
      lastTime = currentTime;
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-white dark:from-background dark:to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Logos */}
        <div className="text-center">
          <p className="text-xs sm:text-sm text-slate-500 dark:text-muted-foreground mb-6 sm:mb-8 font-medium">TRUSTED BY LEADING AI COMPANIES</p>
          <div className="relative overflow-hidden" ref={containerRef}>
            <div 
              className="flex items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-10 opacity-70"
              style={{
                transform: `translateX(${position}px)`,
                width: 'max-content'
              }}
            >
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div key={`first-${index}`} className="hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  <div className="w-24 h-14 sm:w-32 sm:h-16 lg:w-36 lg:h-20 flex items-center justify-center bg-transparent border border-gray-500 dark:border-border rounded-full p-2 sm:p-3 lg:p-4 flex-shrink-0">
                    <div className="relative w-full h-full">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className="max-w-full max-h-full object-contain brightness-0 saturate-100 dark:brightness-0 dark:invert"
                      />
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <div key={`second-${index}`} className="hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  <div className="w-24 h-14 sm:w-32 sm:h-16 lg:w-36 lg:h-20 flex items-center justify-center bg-transparent border border-gray-500 dark:border-border rounded-full p-2 sm:p-3 lg:p-4 flex-shrink-0">
                    <div className="relative w-full h-full">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className="max-w-full max-h-full object-contain brightness-0 saturate-100 dark:brightness-0 dark:invert"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-foreground mb-4">
              What Our Partners Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from leading AI companies about their experience with Labilo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="border-border bg-card hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Heart className="w-8 h-8 text-red-500 mr-3" />
                  <div>
                    <h3 className="font-semibold text-foreground">Healthcare AI</h3>
                    <p className="text-sm text-muted-foreground">Medical Imaging</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "Labilo's expertise in medical imaging annotation has been crucial for our diagnostic AI development."
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Brain className="w-8 h-8 text-blue-500 mr-3" />
                  <div>
                    <h3 className="font-semibold text-foreground">TechCorp</h3>
                    <p className="text-sm text-muted-foreground">Autonomous Systems</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "The quality and speed of their computer vision labeling has accelerated our autonomous vehicle development."
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Leaf className="w-8 h-8 text-green-500 mr-3" />
                  <div>
                    <h3 className="font-semibold text-foreground">AgriTech Solutions</h3>
                    <p className="text-sm text-muted-foreground">Precision Agriculture</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "Their agricultural data labeling expertise has been invaluable for our crop monitoring AI systems."
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Building2 className="w-8 h-8 text-purple-500 mr-3" />
                  <div>
                    <h3 className="font-semibold text-foreground">GovTech</h3>
                    <p className="text-sm text-muted-foreground">Public Services</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "Labilo's secure and accurate document processing has transformed our citizen services."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}; 