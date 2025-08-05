import { Card, CardContent } from "@/components/ui/card"
import { CloudUpload, Brain, Shield } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: CloudUpload,
      title: "Upload Your Data",
      description: "Submit your images, audio, video, or text data through our secure platform."
    },
    {
      icon: Brain,
      title: "Expert Annotation",
      description: "Our skilled African labelers process your data with precision and cultural understanding."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality checks ensure 99.5% accuracy before delivery to your project."
    }
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, streamlined process to get your data labeled with the highest quality standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <step.icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-light text-foreground mb-3">
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