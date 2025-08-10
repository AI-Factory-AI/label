import { Header } from "@/components/client/Header"
import { Footer } from "@/components/client/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Shield, Users, Zap, Globe, Clock, Award, BarChart3 } from "lucide-react"
import { Link } from "react-router-dom"

export default function Enterprise() {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "SOC 2 Type II, GDPR compliant with end-to-end encryption and private cloud deployment options."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Dedicated Team",
      description: "Assigned project managers and dedicated labeling teams for consistent quality and communication."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Custom Workflows",
      description: "Tailored annotation workflows and quality assurance processes designed for your specific use case."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Reach",
      description: "Access to 50,000+ expert labelers across 54 African countries with multilingual capabilities."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Priority Support",
      description: "24/7 dedicated support with guaranteed response times and direct access to technical experts."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Advanced Analytics",
      description: "Real-time dashboards, quality metrics, and detailed reporting for enterprise visibility."
    }
  ]

  const plans = [
    {
      name: "Enterprise Starter",
      price: "Custom",
      description: "For growing companies with moderate data needs",
      features: [
        "Up to 100K tasks/month",
        "Standard quality assurance",
        "API access",
        "Email support",
        "Basic analytics",
        "Standard SLA"
      ]
    },
    {
      name: "Enterprise Pro",
      price: "Custom",
      description: "For established companies with high-volume needs",
      features: [
        "Up to 1M tasks/month",
        "Enhanced quality assurance",
        "Priority API access",
        "Phone & email support",
        "Advanced analytics",
        "Priority SLA",
        "Dedicated account manager"
      ],
      popular: true
    },
    {
      name: "Enterprise Elite",
      price: "Custom",
      description: "For large organizations with mission-critical data",
      features: [
        "Unlimited tasks",
        "Premium quality assurance",
        "Private cloud deployment",
        "24/7 dedicated support",
        "Custom analytics & reporting",
        "Premium SLA",
        "Dedicated project team",
        "On-site training"
      ]
    }
  ]

  const testimonials = [
    {
      quote: "Labilo's enterprise solution helped us grow our computer vision models 10x faster than our previous approach.",
      author: "Sarah Chen",
      title: "Head of AI, TechCorp",
      company: "Fortune 500 Technology Company"
    },
    {
      quote: "The quality and speed of their labeling services, combined with their understanding of African markets, made them our ideal partner.",
      author: "Michael Rodriguez",
      title: "VP of Data Science",
      company: "Global Financial Services"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="outline" className="mb-6">
            Trusted by Fortune 500 Companies
          </Badge>
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Enterprise AI
            </span>
            <br />
            <span className="text-foreground">Data Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Grow your AI initiatives with enterprise-grade data labeling services. Secure, reliable, and designed for mission-critical applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-primary">
                Schedule Demo
              </Button>
            </Link>
            <Link to="/resources">
              <Button size="lg" variant="outline">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-light text-center mb-12">Enterprise Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-light text-center mb-4">Enterprise Plans</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Flexible pricing options designed to grow with your business needs. All plans include our core enterprise features.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="text-3xl font-light text-primary mt-4">
                    {plan.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-3" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/signup">
                    <Button className={`w-full ${plan.popular ? 'bg-primary' : 'variant-outline'}`}>
                      Contact Sales
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-light text-center mb-12">What Our Enterprise Clients Say</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <blockquote className="text-lg mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-light text-center mb-12">Enterprise Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-light text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-primary mb-2">10M+</div>
              <div className="text-muted-foreground">Tasks Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-primary mb-2">99.5%</div>
              <div className="text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-light mb-6">Ready to Grow Your AI?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of enterprise clients who trust Labilo with their most important AI initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-primary">
                Schedule Enterprise Demo
              </Button>
            </Link>
            <Link to="/resources">
              <Button size="lg" variant="outline">
                Download Enterprise Guide
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}