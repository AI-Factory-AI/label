import { Card, CardContent } from "@/components/ui/card"
import { Brain, Leaf, Heart, Building, MessageSquare, Camera } from "lucide-react"

export function Industries() {
  const industries = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Training data for computer vision, NLP, and deep learning models"
    },
    {
      icon: Leaf,
      title: "AgriTech",
      description: "Crop monitoring, pest detection, and agricultural automation"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Medical imaging, diagnostic tools, and health monitoring systems"
    },
    {
      icon: Building,
      title: "Government",
      description: "Document processing, citizen services, and public safety applications"
    },
    {
      icon: MessageSquare,
      title: "Natural Language",
      description: "Text classification, sentiment analysis, and multilingual processing"
    },
    {
      icon: Camera,
      title: "Computer Vision",
      description: "Object detection, facial recognition, and autonomous systems"
    }
  ]

  return (
    <section id="industries" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powering AI innovation across diverse sectors with specialized expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-medium hover:border-primary/20 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="mb-4">
                  <industry.icon className="w-10 h-10 text-primary group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {industry.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}