import { Header } from "@/components/client/Header"
import { Footer } from "@/components/client/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Globe, Award, Target, ArrowRight, Heart, Brain, Shield } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Empowering Africa",
      description: "Creating sustainable economic opportunities through AI and technology"
    },
    {
      icon: Brain,
      title: "Innovation First",
      description: "Pioneering new approaches to data labeling and AI development"
    },
    {
      icon: Shield,
      title: "Quality Excellence",
      description: "Maintaining the highest standards in data accuracy and reliability"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Connecting African talent with global AI opportunities"
    }
  ]

  const team = [
    {
      name: "Dr. Sarah Mwangi",
      role: "CEO & Founder",
      bio: "Former AI researcher with 15+ years in machine learning and data science"
    },
    {
      name: "Michael Ochieng",
      role: "CTO",
      bio: "Expert in scalable AI infrastructure and distributed systems"
    },
    {
      name: "Aisha Hassan",
      role: "Head of Operations",
      bio: "Specialist in quality assurance and process optimization"
    },
    {
      name: "David Kimani",
      role: "Head of Business Development",
      bio: "Focused on expanding partnerships and market opportunities"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            About Label
          </div>
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Empowering
            </span>
            <br />
            <span className="text-foreground">African AI Talent</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We're building the bridge between Africa's exceptional talent and the global AI revolution, 
            creating opportunities that benefit both local communities and the worldwide AI ecosystem.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Lable was founded with a simple yet powerful vision: to unlock Africa's potential 
                as a global hub for AI data labeling and machine learning expertise.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                By connecting skilled African professionals with cutting-edge AI projects, we're not just 
                building better AI models—we're building a more inclusive and equitable future for technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="text-sm">
                  <Users className="w-4 h-4 mr-1" />
                  50,000+ Labelers
                </Badge>
                <Badge variant="outline" className="text-sm">
                  <Globe className="w-4 h-4 mr-1" />
                  54 Countries
                </Badge>
                <Badge variant="outline" className="text-sm">
                  <Award className="w-4 h-4 mr-1" />
                  99.5% Accuracy
                </Badge>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="bg-background/50 rounded-lg p-4 flex items-center justify-center">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <div className="bg-background/50 rounded-lg p-4 flex items-center justify-center">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <div className="bg-background/50 rounded-lg p-4 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <div className="bg-background/50 rounded-lg p-4 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Lable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the visionaries driving Lable's mission
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-1">{member.name}</h3>
                  <p className="text-primary text-sm text-center mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm text-center">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-light mb-6">Join Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're a client looking for quality data labeling or a professional seeking 
            opportunities in AI, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:bg-primary/90">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 