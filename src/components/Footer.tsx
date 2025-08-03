import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react"

export function Footer() {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { label: "Data Labeling", href: "#" },
        { label: "Quality Assurance", href: "#" },
        { label: "API Documentation", href: "#" },
        { label: "Pricing", href: "#" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { label: "Computer Vision", href: "#" },
        { label: "Natural Language", href: "#" },
        { label: "Audio Processing", href: "#" },
        { label: "Custom Projects", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Case Studies", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Support", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" }
      ]
    }
  ]

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <img 
                  src="https://res.cloudinary.com/ecosheane/image/upload/v1754217265/lable_z2geih.png" 
                  alt="Lable Logo" 
                  className="h-6 sm:h-8 w-auto"
                />
                <span className="text-lg sm:text-xl font-bold">Label</span>
              </div>
              
              <p className="text-secondary-foreground/80 mb-6 leading-relaxed text-sm sm:text-base">
                Empowering AI innovation with premium data labeling services from Africa's 
                brightest minds. Join us in building the future of artificial intelligence.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm">info@label.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm">+(233) 240027151</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm">Accra, Ghana</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
                {footerSections.map((section, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-secondary-foreground mb-4 text-sm sm:text-base">
                      {section.title}
                    </h3>
                    <ul className="space-y-2 sm:space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.href}
                            className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-secondary-foreground/10 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Stay Updated</h3>
              <p className="text-sm text-secondary-foreground/70">
                Get the latest updates on AI data labeling trends and platform features.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-background/10 border border-secondary-foreground/20 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 flex-1 sm:flex-none sm:w-64"
              />
              <Button size="sm" className="bg-gradient-primary hover:bg-primary/90 text-sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-secondary-foreground/10 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-secondary-foreground/70 text-center sm:text-left">
              © 2024 Label. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Social Links */}
              <div className="flex space-x-3">
                <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  <Github className="w-4 h-4" />
                </a>
              </div>
              
              <div className="h-4 w-px bg-secondary-foreground/20 hidden sm:block"></div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}