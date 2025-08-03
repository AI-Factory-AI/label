import { Card, CardContent } from "@/components/ui/card"
import { Globe, DollarSign, Clock, Award } from "lucide-react"

export function WhyAfrica() {
  const advantages = [
    {
      icon: Globe,
      title: "Linguistic Diversity",
      description: "Access to 2,000+ languages and cultural nuances for comprehensive data understanding"
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Premium quality at competitive rates, up to 60% more cost-effective than alternatives"
    },
    {
      icon: Clock,
      title: "Time Zone Coverage",
      description: "24/7 operations across multiple time zones for faster project delivery"
    },
    {
      icon: Award,
      title: "Educated Workforce",
      description: "Highly skilled professionals with strong technical and multilingual capabilities"
    }
  ]

  return (
    <section className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose <span className="text-primary">Africa</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Africa represents the fastest-growing tech talent pool globally, combining 
              cultural diversity, multilingual expertise, and cost-effective excellence 
              to deliver superior data labeling services.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <advantage.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Visualization */}
          <div className="relative">
            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Globe className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">54 Countries</h3>
                  <p className="text-muted-foreground mb-6">Connected across the continent</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-xl font-bold text-primary">2K+</div>
                      <div className="text-muted-foreground">Languages</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-accent">1.3B</div>
                      <div className="text-muted-foreground">Population</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}