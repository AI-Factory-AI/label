import { Card, CardContent } from "@/components/ui/card"
import { Upload, Users, CheckCircle } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Data",
      description: "Submit your images, audio, video, or text data through our secure platform.",
      step: "01"
    },
    {
      icon: Users,
      title: "Expert Annotation",
      description: "Our skilled African labelers process your data with precision and cultural understanding.",
      step: "02"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Rigorous quality checks ensure 99.5% accuracy before delivery to your project.",
      step: "03"
    }
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, streamlined process to get your data labeled with the highest quality standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-border bg-card hover:shadow-medium transition-all duration-300">
              {/* Step Number */}
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">{step.step}</span>
                </div>
              </div>
              
              <CardContent className="pt-8 pb-6">
                <div className="mb-4">
                  <step.icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}