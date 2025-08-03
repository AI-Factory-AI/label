import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function Hero() {
  return (
    <section className="relative min-h-screen flex mt-20 items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5">
      {/* Animated Background Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-300" />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary px-4 py-2">
              Trusted by Leading AI Companies
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                African AI Data Labeling
              </span>
              <br />
              <span className="text-foreground">Factory</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Grow your AI projects with premium data labeling services powered by Africa's talent.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-gradient-primary hover:bg-primary/90 text-lg px-8 py-4">
                Request a Quote
              </Button>
            </Link>
            <Link to="/labeler-dashboard">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary/20 hover:bg-primary/5">
                Join as a Labeler
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-primary mb-2">50,000+</div>
              <div className="text-sm text-muted-foreground">Expert Labelers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-primary mb-2">54</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-primary mb-2">99.5%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}