import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { BookOpen, Users, Mail, MapPin, Phone, FileText, Video, Download } from "lucide-react"

export default function Resources() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              Resources & Support
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Everything you need to succeed with LabelAfrica. From getting started guides 
              to contacting our team directly.
            </p>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Documentation */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Documentation</CardTitle>
                  <CardDescription>
                    Complete API reference and integration guides
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    View Docs
                  </Button>
                </CardContent>
              </Card>

              {/* Case Studies */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <FileText className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Case Studies</CardTitle>
                  <CardDescription>
                    Real success stories from our clients
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Read Stories
                  </Button>
                </CardContent>
              </Card>

              {/* Video Tutorials */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Video className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Video Tutorials</CardTitle>
                  <CardDescription>
                    Step-by-step video guides for getting started
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Watch Videos
                  </Button>
                </CardContent>
              </Card>

              {/* White Papers */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Download className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>White Papers</CardTitle>
                  <CardDescription>
                    In-depth research on AI data quality in Africa
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Download
                  </Button>
                </CardContent>
              </Card>

              {/* Community */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Community Forum</CardTitle>
                  <CardDescription>
                    Connect with other developers and labelers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Join Community
                  </Button>
                </CardContent>
              </Card>

              {/* Blog */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Blog</CardTitle>
                  <CardDescription>
                    Latest insights on AI, data labeling, and Africa
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Read Blog
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-light text-center mb-12">About LabelAfrica</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground mb-6">
                    LabelAfrica is bridging the AI data gap by connecting global companies with Africa's 
                    talented workforce. We believe in creating economic opportunities while building 
                    the future of artificial intelligence.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>54 African countries represented</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>50,000+ expert labelers</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>99.5% accuracy rate</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Quality First</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Every annotation goes through multi-stage quality assurance to ensure 
                        the highest standards for your AI models.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Fair Employment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        We provide fair wages and professional development opportunities 
                        to our labeling workforce across Africa.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-light text-center mb-12">Contact Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Get in Touch</CardTitle>
                    <CardDescription>
                      Ready to start your next AI project? Let's talk.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>hello@labelafrica.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>+27 11 123 4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Cape Town, South Africa</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Message</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Name</label>
                      <input className="w-full mt-1 p-2 border rounded-md" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <input className="w-full mt-1 p-2 border rounded-md" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Message</label>
                      <textarea className="w-full mt-1 p-2 border rounded-md h-20" placeholder="How can we help?"></textarea>
                    </div>
                    <Button className="w-full bg-gradient-primary hover:bg-primary/90">
                      Send Message
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}