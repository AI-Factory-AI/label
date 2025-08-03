import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Users, Globe, Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-card border border-border rounded-full px-4 py-2 mb-8">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Trusted by leading AI companies</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Label Africa's Future:
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Data for AI
            </span>
            <br />
            Annotated by Africans
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Premium data labeling services powered by Africa's talent. Scale your AI projects with 
            high-quality annotations, fast turnaround, and competitive pricing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-border hover:bg-hover">
              Join as a Labeler
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-5 h-5 text-primary mr-2" />
                <span className="text-2xl font-bold text-foreground">50K+</span>
              </div>
              <p className="text-sm text-muted-foreground">Expert Labelers</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Globe className="w-5 h-5 text-accent mr-2" />
                <span className="text-2xl font-bold text-foreground">54</span>
              </div>
              <p className="text-sm text-muted-foreground">African Countries</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-5 h-5 text-primary mr-2" />
                <span className="text-2xl font-bold text-foreground">99.5%</span>
              </div>
              <p className="text-sm text-muted-foreground">Accuracy Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}