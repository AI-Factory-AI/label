import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    { label: "Solutions", href: "/#solutions" },
    { label: "Industries", href: "/#industries" },
    { label: "Documentation", href: "/documentation" },
    { label: "Resources", href: "/resources" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-md flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">LA</span>
          </div>
          <span className="text-xl font-bold text-foreground">LabelAfrica</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Link to="/login">
            <Button variant="ghost" size="sm">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button size="sm" className="bg-gradient-primary hover:bg-primary/90">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <Link to="/login">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="sm" className="w-full bg-gradient-primary hover:bg-primary/90">
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}