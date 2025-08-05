import { Card, CardContent } from "@/components/ui/card"

export function Industries() {
  const industries = [
    {
      image: "https://res.cloudinary.com/ecosheane/image/upload/v1754211694/futuristic-ai-chip-circuit-board_p7sx5h.jpg",
      title: "AI & Machine Learning",
      description: "Training data for computer vision, NLP, and deep learning models",
      projects: "2,500+ Projects"
    },
    {
      
      image: "https://res.cloudinary.com/ecosheane/image/upload/v1754211763/2035_pob1gl.jpg",
      title: "AgriTech",
      description: "Crop monitoring, pest detection, and agricultural automation",
      projects: "800+ Projects"
    },
    {
      image: "https://res.cloudinary.com/ecosheane/image/upload/v1754211688/medical-banner-with-doctor-wearing-goggles_vxau9q.jpg",
      title: "Healthcare",
      description: "Medical imaging, diagnostic tools, and health monitoring systems",
      projects: "1,200+ Projects"
    },
    {
      image: "https://res.cloudinary.com/ecosheane/image/upload/v1754211680/horizontal-shot-desks-inside-scottish-parliament-building_hktrxj.jpg",
      title: "Government",
      description: "Document processing, citizen services, and public safety applications",
      projects: "600+ Projects"
    },
    {
      image: "https://res.cloudinary.com/ecosheane/image/upload/v1754218524/woman-with-tablet-device-illustrating-min_zvux1l.jpg",
      title: "Natural Language",
      description: "Text classification, sentiment analysis, and multilingual processing",
      projects: "1,800+ Projects"
    },
    {
      image: "https://res.cloudinary.com/ecosheane/image/upload/v1754218502/retinal-biometrics-technology-with-man-s-eye-digital-remix-min_dhuks8.jpg",
      title: "Computer Vision",
      description: "Object detection, facial recognition, and autonomous systems",
      projects: "3,200+ Projects"
    }
  ]

  return (
    <section id="industries" className="py-12 sm:py-16 lg:py-24 bg-muted/30">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Specialized Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-4 sm:mb-6">
            Industries We Serve
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Powering AI innovation across diverse sectors with specialized expertise and proven results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="group overflow-hidden border-border bg-card hover:shadow-xl hover:border-primary/20 transition-all duration-500">
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20">
                  <img 
                    src={industry.image} 
                    alt={industry.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                  <h3 className="text-lg sm:text-xl font-light text-foreground group-hover:text-primary transition-colors">
                    {industry.title}
                  </h3>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full self-start sm:self-center">
                    {industry.projects}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
                
                <div className="mt-4 pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-muted-foreground">Success Rate</span>
                    <span className="font-semibold text-green-600">99.5%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 bg-background/80 backdrop-blur-sm rounded-2xl px-6 sm:px-8 py-6 border border-border/50">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-light text-primary mb-1">10,000+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border/50"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-light text-primary mb-1">50+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Industries Served</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border/50"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-light text-primary mb-1">99.5%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 