import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, Users, Building, Zap, TrendingUp } from "lucide-react"
import { Link } from "react-router-dom"

export default function Customers() {
  const testimonials = [
    {
      quote: "LabelAfrica transformed our computer vision capabilities. Their understanding of African contexts and multilingual expertise was exactly what our agricultural AI needed.",
      author: "Dr. Sarah Chen",
      title: "Head of AI Research",
      company: "AgriTech Solutions",
      industry: "Agriculture",
      rating: 5,
      results: "300% faster model training, 99.2% accuracy",
      avatar: "/api/placeholder/60/60"
    },
    {
      quote: "The quality and speed of their annotation services helped us launch our healthcare AI product 6 months ahead of schedule.",
      author: "Michael Rodriguez",
      title: "VP of Product",
      company: "HealthAI Corp",
      industry: "Healthcare",
      rating: 5,
      results: "6 months ahead of schedule, $2M cost savings",
      avatar: "/api/placeholder/60/60"
    },
    {
      quote: "Working with LabelAfrica on our fintech models was seamless. Their team understood our compliance requirements and delivered exceptional results.",
      author: "Amara Okafor",
      title: "Chief Data Officer",
      company: "Paystack",
      industry: "Fintech",
      rating: 5,
      results: "40% reduction in false positives",
      avatar: "/api/placeholder/60/60"
    },
    {
      quote: "LabelAfrica's government solutions team helped us digitize 50 years of archives with incredible accuracy and cultural sensitivity.",
      author: "Joseph Mbeki",
      title: "Director of Digital Services",
      company: "Department of Records",
      industry: "Government",
      rating: 5,
      results: "2M+ documents digitized, 99.8% accuracy",
      avatar: "/api/placeholder/60/60"
    },
    {
      quote: "Their e-commerce annotation services scaled perfectly with our rapid growth. The quality consistency across millions of products was impressive.",
      author: "Elena Vasquez",
      title: "Head of Machine Learning",
      company: "Jumia",
      industry: "E-commerce",
      rating: 5,
      results: "5M+ products annotated, 25% improvement in search relevance",
      avatar: "/api/placeholder/60/60"
    },
    {
      quote: "The educational content annotation for our learning platform exceeded expectations. Native language expertise made all the difference.",
      author: "David Kim",
      title: "Founder & CEO",
      company: "LearnAfrica",
      industry: "EdTech",
      rating: 5,
      results: "100+ languages supported, 95% user satisfaction",
      avatar: "/api/placeholder/60/60"
    }
  ]

  const industries = [
    {
      name: "Agriculture",
      clients: 45,
      description: "Crop monitoring, livestock tracking, and agricultural automation",
      icon: "🌱"
    },
    {
      name: "Healthcare",
      clients: 32,
      description: "Medical imaging, diagnostic assistance, and patient data analysis",
      icon: "🏥"
    },
    {
      name: "Fintech",
      clients: 28,
      description: "Fraud detection, document verification, and risk assessment",
      icon: "💳"
    },
    {
      name: "Government",
      clients: 25,
      description: "Digital transformation, document digitization, and citizen services",
      icon: "🏛️"
    },
    {
      name: "E-commerce",
      clients: 38,
      description: "Product categorization, visual search, and recommendation systems",
      icon: "🛒"
    },
    {
      name: "Education",
      clients: 22,
      description: "Content creation, assessment tools, and learning analytics",
      icon: "📚"
    }
  ]

  const successMetrics = [
    {
      metric: "99.5%",
      label: "Average Accuracy",
      description: "Across all customer projects"
    },
    {
      metric: "48hr",
      label: "Average Turnaround",
      description: "For standard projects"
    },
    {
      metric: "500+",
      label: "Active Customers",
      description: "Across 54 countries"
    },
    {
      metric: "10M+",
      label: "Tasks Completed",
      description: "Monthly volume"
    }
  ]

  const caseStudies = [
    {
      company: "AgriVision AI",
      industry: "Agriculture",
      challenge: "Needed to train computer vision models to identify crop diseases across 20+ African crops with 95%+ accuracy.",
      solution: "Custom annotation workflows with agricultural experts, multilingual labeling in 15 local languages.",
      results: [
        "99.2% disease detection accuracy",
        "Reduced training time by 70%",
        "Expanded to 15 countries"
      ],
      logo: "/api/placeholder/80/40"
    },
    {
      company: "MedAI Systems",
      industry: "Healthcare", 
      challenge: "Required medical image annotation for diagnostic AI with strict compliance and accuracy requirements.",
      solution: "HIPAA-compliant platform with certified medical annotators and multi-layer quality control.",
      results: [
        "FDA approval achieved",
        "99.8% diagnostic accuracy",
        "50% faster development cycle"
      ],
      logo: "/api/placeholder/80/40"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="outline" className="mb-6">
            500+ Happy Customers
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Customer Success
            </span>
            <br />
            <span className="text-foreground">Stories</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover how leading companies across Africa and beyond are using LabelAfrica to accelerate their AI initiatives and achieve remarkable results.
          </p>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Customer Success by the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{metric.metric}</div>
                <div className="font-medium mb-1">{metric.label}</div>
                <div className="text-sm text-muted-foreground">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                        <span className="font-bold text-sm">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <CardTitle className="text-lg">{testimonial.author}</CardTitle>
                        <CardDescription>{testimonial.title}</CardDescription>
                        <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                      </div>
                    </div>
                    <Badge variant="outline">{testimonial.industry}</Badge>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <Quote className="h-6 w-6 text-muted-foreground mb-3" />
                  <blockquote className="text-muted-foreground mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <div className="text-sm font-medium text-green-600">{testimonial.results}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index}>
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <CardTitle>{industry.name}</CardTitle>
                  <CardDescription>{industry.clients} active clients</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Detailed Case Studies</h2>
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-8 bg-muted rounded flex items-center justify-center">
                          <span className="text-xs font-bold">{study.company}</span>
                        </div>
                        <Badge variant="outline">{study.industry}</Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-2">The Challenge</h3>
                      <p className="text-muted-foreground text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Our Solution</h3>
                      <p className="text-muted-foreground text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Success Stories</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to accelerate your AI initiatives? Join hundreds of companies already achieving remarkable results with LabelAfrica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-primary">
                Start Your Success Story
              </Button>
            </Link>
            <Link to="/resources">
              <Button size="lg" variant="outline">
                Download Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}