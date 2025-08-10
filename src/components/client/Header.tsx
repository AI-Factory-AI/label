import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMoreDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const navigationItems = [
    { label: "Products", href: "/products" },
    { label: "Enterprise", href: "/enterprise" },
    { label: "Government", href: "/government" },
    { label: "Customers", href: "/customers" },
    { label: "Learn", href: "/learn" },
  ]

  const moreDropdownItems = [
    { label: "About", href: "/about" },
    { label: "Documentation", href: "/documentation" },
    { label: "API Reference", href: "/api" },
    { label: "Support", href: "/support" },
    { label: "Blog", href: "/learn" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-lg border-b border-border">
      <div className="w-full px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
          <img 
            src="https://res.cloudinary.com/ecosheane/image/upload/v1754217265/lable_z2geih.png" 
            alt="Labilo Logo" 
            className="h-6 sm:h-8 w-auto"
          />
          <span className="text-lg sm:text-xl font-bold text-foreground">Label</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm xl:text-base"
            >
              {item.label}
            </Link>
          ))}
          
          {/* More Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
              className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors text-sm xl:text-base"
            >
              <span>More</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMoreDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isMoreDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                {moreDropdownItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    onClick={() => setIsMoreDropdownOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
          <ThemeToggle />
          <Link to="/login">
            <Button variant="ghost" size="sm" className="text-sm">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button size="sm" className="bg-gradient-primary hover:bg-primary/90 text-sm">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-2 flex-shrink-0">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 h-9 w-9 flex items-center justify-center"
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-lg border-b border-border">
          <nav className="w-full px-3 sm:px-6 lg:px-8 py-6 space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block text-muted-foreground hover:text-foreground transition-colors py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile More Section */}
            <div className="border-t border-border pt-4 mt-4">
              <div className="text-sm font-medium text-muted-foreground mb-3">More</div>
              {moreDropdownItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            <div className="pt-6 space-y-3 border-t border-border mt-4">
              <Link to="/login">
                <Button variant="ghost" size="sm" className="w-full justify-start text-base">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="sm" className="w-full bg-gradient-primary hover:bg-primary/90 text-base">
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