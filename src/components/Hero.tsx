import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69fabf212b617e14cc0b2fd2651b2583e&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-primary/20" />
      </div>
      
      {/* Animated Background Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary px-4 py-2">
              Trusted by Leading AI Companies
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                African AI Data Labeling
              </span>
              <br />
              <span className="text-foreground">Made Simple</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Scale your AI projects with premium data labeling services powered by Africa's talent.
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
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50,000+</div>
              <div className="text-sm text-muted-foreground">Expert Labelers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">54</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.5%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}