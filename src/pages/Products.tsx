import { Header } from "@/components/client/Header"
import { Footer } from "@/components/client/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Shield, Users, Globe } from "lucide-react"
import { Link } from "react-router-dom"

export default function Products() {
  const products = [
    {
      name: "LabelStudio Pro",
      description: "Advanced data labeling platform for complex AI projects",
      price: "Custom",
      features: [
        "Multi-modal data support",
        "Custom annotation workflows",
        "Quality control systems",
        "Advanced analytics",
        "API integration",
        "24/7 support"
      ],
      popular: true,
      icon: <Star className="h-6 w-6" />
    },
    {
      name: "LabelForce",
      description: "Rapid labeling service for time-sensitive projects",
      price: "$0.15/task",
      features: [
        "Quick turnaround (24-48h)",
        "Pre-screened labelers",
        "Quality guarantee",
        "Bulk discounts",
        "Real-time tracking",
        "Standard support"
      ],
      popular: false,
      icon: <Zap className="h-6 w-6" />
    },
    {
      name: "LabelSecure",
      description: "Enterprise-grade secure labeling for sensitive data",
      price: "Enterprise",
      features: [
        "End-to-end encryption",
        "Compliance certifications",
        "Dedicated infrastructure",
        "Custom security protocols",
        "Audit trails",
        "Premium support"
      ],
      popular: false,
      icon: <Shield className="h-6 w-6" />
    }
  ]

  const capabilities = [
    {
      title: "Image & Video Annotation",
      description: "Bounding boxes, polygons, keypoints, and video frame annotation",
      icon: <Globe className="h-8 w-8" />
    },
    {
      title: "Text & NLP Services", 
      description: "Named entity recognition, sentiment analysis, and text classification",
      icon: <Users className="h-8 w-8" />
    },
    {
      title: "Audio Processing",
      description: "Speech-to-text, audio classification, and sound event detection",
      icon: <Star className="h-8 w-8" />
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="outline" className="mb-6">
            Trusted by 500+ Companies
          </Badge>
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Data Labeling Products
            </span>
            <br />
            <span className="text-foreground">Built for Enterprise</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose from our suite of data labeling products designed to accelerate your AI development with African talent and expertise.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-light text-center mb-12">Our Product Suite</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className={`relative ${product.popular ? 'border-primary' : ''}`}>
                {product.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {product.icon}
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                  <div className="text-3xl font-light text-primary mt-4">
                    {product.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-3" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/signup">
                    <Button className={`w-full ${product.popular ? 'bg-primary' : 'variant-outline'}`}>
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-light text-center mb-12">Our Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {capability.icon}
                  </div>
                  <CardTitle>{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-light mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already using Datos to power their AI initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-primary">
                Start Free Trial
              </Button>
            </Link>
            <Link to="/resources">
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}