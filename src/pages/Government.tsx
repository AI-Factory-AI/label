import { Header } from "@/components/client/Header"
import { Footer } from "@/components/client/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Shield, Users, FileText, Globe, Building, Award, Lock } from "lucide-react"
import { Link } from "react-router-dom"

export default function Government() {
  const services = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Document Digitization",
      description: "Convert government archives, legal documents, and historical records into searchable digital formats with multilingual OCR capabilities."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Census & Survey Analysis",
      description: "Process population data, demographic surveys, and citizen feedback with culturally-aware annotation teams."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Multilingual Services",
      description: "Support for 100+ African languages including Swahili, Hausa, Amharic, Yoruba, and regional dialects."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Healthcare Data",
      description: "Medical image analysis, patient record digitization, and health survey processing with HIPAA compliance."
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Urban Planning",
      description: "Satellite imagery analysis, infrastructure mapping, and urban development planning support."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Education Support",
      description: "Educational content creation, assessment digitization, and learning material annotation in local languages."
    }
  ]

  const compliance = [
    "ISO 27001 Certified",
    "SOC 2 Type II Compliant",
    "GDPR Compliant",
    "Government Security Clearance",
    "Data Residency Options",
    "Audit Trail & Logging"
  ]

  const caseStudies = [
    {
      title: "National Digital ID Program",
      country: "Kenya",
      description: "Processed 50M+ citizen documents with 99.8% accuracy, supporting the national digital identity initiative.",
      impact: "50M+ documents processed",
      timeframe: "18 months"
    },
    {
      title: "Agricultural Census Digitization",
      country: "Nigeria",
      description: "Digitized nationwide agricultural surveys covering 36 states, enabling data-driven policy decisions.",
      impact: "2.5M+ farm records",
      timeframe: "12 months"
    },
    {
      title: "Healthcare Data Integration",
      country: "South Africa",
      description: "Standardized medical records across 200+ healthcare facilities to improve patient outcomes.",
      impact: "10M+ patient records",
      timeframe: "24 months"
    }
  ]

  const benefits = [
    {
      title: "Local Expertise",
      description: "Deep understanding of African contexts, languages, and cultural nuances"
    },
    {
      title: "Cost Effective",
      description: "Competitive pricing with transparent government contract terms"
    },
    {
      title: "Capacity & Growth",
      description: "50,000+ trained labelers across 54 countries for large projects"
    },
    {
      title: "Quality Assurance",
      description: "Multi-layer quality control with 99.5% accuracy guarantee"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="outline" className="mb-6">
            Trusted by 25+ African Governments
          </Badge>
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Government AI
            </span>
            <br />
            <span className="text-foreground">Data Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Empowering African governments with secure, compliant, and culturally-aware data labeling services for digital transformation initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-primary">
                Request Government Demo
              </Button>
            </Link>
            <Link to="/resources">
              <Button size="lg" variant="outline">
                View Compliance Guide
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-light text-center mb-12">Government Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light mb-6">Security & Compliance</h2>
              <p className="text-muted-foreground mb-8">
                We understand the critical importance of data security in government operations. Our platform meets the highest international standards for data protection and compliance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {compliance.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <Lock className="h-5 w-5 mr-2" />
                  <CardTitle className="text-lg">Data Sovereignty</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Data can be processed and stored within African borders, ensuring compliance with local data sovereignty requirements.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <Shield className="h-5 w-5 mr-2" />
                  <CardTitle className="text-lg">End-to-End Encryption</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    All data is encrypted in transit and at rest using military-grade encryption standards.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <FileText className="h-5 w-5 mr-2" />
                  <CardTitle className="text-lg">Audit & Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive audit trails and compliance reporting for government oversight requirements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-light text-center mb-12">Government Success Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index}>
                <CardHeader>
                  <Badge variant="outline" className="w-fit">{study.country}</Badge>
                  <CardTitle className="text-lg">{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{study.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Impact:</span>
                      <span className="font-medium">{study.impact}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Timeline:</span>
                      <span className="font-medium">{study.timeframe}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-light text-center mb-12">Why Governments Choose Lable</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-light text-center mb-12">Government Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-light text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Government Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-primary mb-2">100M+</div>
              <div className="text-muted-foreground">Documents Processed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Languages Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-primary mb-2">54</div>
              <div className="text-muted-foreground">Countries Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-light mb-6">Transform Your Government Services</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with Lable to accelerate your digital transformation initiatives with secure, compliant, and culturally-aware AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-primary">
                Schedule Government Consultation
              </Button>
            </Link>
            <Link to="/resources">
              <Button size="lg" variant="outline">
                Download Government Brochure
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}