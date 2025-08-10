import { Header } from "@/components/client/Header"
import { Footer } from "@/components/client/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, Phone, Clock, HelpCircle, BookOpen, Users, ArrowRight, Search, FileText, Video, MessageSquare } from "lucide-react"

export default function Support() {
  const supportChannels = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      response: "2-5 minutes",
      badge: "Recommended"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      response: "2-4 hours",
      badge: "24/7"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      response: "Immediate",
      badge: "Enterprise"
    }
  ]

  const faqs = [
    {
      question: "How do I get started with Labilo?",
      answer: "Sign up for an account, complete your profile, and start your first project. Our onboarding team will guide you through the process."
    },
    {
      question: "What types of data can you label?",
      answer: "We support image classification, object detection, text annotation, audio transcription, and video labeling across multiple formats."
    },
    {
      question: "How long does labeling take?",
      answer: "Typical turnaround times range from 24-48 hours for standard projects. Rush orders can be completed in 4-12 hours."
    },
    {
      question: "What quality assurance measures do you have?",
      answer: "We use multiple labelers per task, automated quality checks, and human review processes to ensure 99.5% accuracy."
    },
    {
      question: "Do you support custom annotation types?",
      answer: "Yes, we can accommodate custom labeling requirements. Contact our team to discuss your specific needs."
    },
    {
      question: "How do I integrate with your API?",
      answer: "Our REST API is well-documented with SDKs available for Python, JavaScript, and other popular languages."
    }
  ]

  const resources = [
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Comprehensive guides and tutorials",
      link: "/documentation"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      link: "/learn"
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other users",
      link: "#"
    },
    {
      icon: FileText,
      title: "Knowledge Base",
      description: "Searchable help articles",
      link: "#"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4 mr-2" />
            Support Center
          </div>
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              We're Here
            </span>
            <br />
            <span className="text-foreground">to Help</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Get the support you need to succeed with Labilo. Our team is ready to help 
            you with any questions or challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:bg-primary/90">
              <MessageCircle className="w-4 h-4 mr-2" />
              Start Chat
            </Button>
            <Button variant="outline" size="lg">
              <Search className="w-4 h-4 mr-2" />
              Search Help
            </Button>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">Get Support</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the support channel that works best for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportChannels.map((channel, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <channel.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center justify-center mb-2">
                    <h3 className="text-lg font-semibold">{channel.title}</h3>
                    {channel.badge && (
                      <Badge variant="secondary" className="ml-2 text-xs">
                        {channel.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {channel.description}
                  </p>
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    Response: {channel.response}
                  </div>
                  <Button className="w-full mt-4">
                    Get Help
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">Help Resources</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Self-service resources to help you succeed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <resource.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {resource.description}
                  </p>
                  <Button variant="ghost" size="sm" className="w-full">
                    Access Resource
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">Still Need Help?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our support team is available 24/7 to assist you
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-light mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-foreground">support@labilo.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-foreground">24/7 Support Available</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Response Times</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>• Live Chat: 2-5 minutes</div>
                  <div>• Email: 2-4 hours</div>
                  <div>• Phone: Immediate (Enterprise)</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
              <h3 className="text-2xl font-light mb-6">Send us a Message</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background h-32"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-primary hover:bg-primary/90">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 