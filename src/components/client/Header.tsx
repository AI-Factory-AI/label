import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMoreDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navigationItems = [
    { label: "Products", href: "/products" },
    { label: "Enterprise", href: "/enterprise" },
    { label: "Government", href: "/government" },
    { label: "Customers", href: "/customers" },
    { label: "Learn", href: "/learn" },
  ];

  const moreDropdownItems = [
    { label: "About", href: "/about" },
    { label: "Documentation", href: "/documentation" },
    { label: "API Reference", href: "/api" },
    { label: "Support", href: "/support" },
    { label: "Blog", href: "/learn" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-0">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Datos"
              className="md:h-20 h-18 w-auto"
              loading="eager"
              width="120"
              height="40"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm text-gray-900">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="hover:text-gray-700 transition font-geist"
              >
                {item.label}
              </Link>
            ))}
            
            {/* More Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                className="flex items-center gap-1 hover:text-gray-700 transition font-geist"
              >
                <span>More</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMoreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMoreDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                  {moreDropdownItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition font-geist"
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
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/login"
              className="text-sm text-gray-900 hover:text-gray-700 transition font-geist px-4 py-2"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-4 py-2.5 text-sm font-medium hover:bg-blue-600 transition font-geist text-white"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-gray-900 hover:bg-gray-100 rounded-lg transition z-30 relative"
            aria-label="Toggle menu"
            type="button"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 animate-in slide-in-from-top">
            <nav className="flex flex-col gap-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm text-gray-900 hover:text-gray-700 transition font-geist py-2"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile More Section */}
              <div className="border-t border-gray-200 pt-4 mt-2">
                <div className="text-sm font-medium text-gray-500 mb-3 font-geist">More</div>
                {moreDropdownItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block py-2 text-sm text-gray-700 hover:text-gray-900 transition font-geist"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              
              <div className="pt-4 space-y-3 border-t border-gray-200 mt-2">
                <Link
                  to="/login"
                  className="block text-sm text-gray-900 hover:text-gray-700 transition font-geist py-2"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-4 py-2.5 text-sm font-medium hover:bg-blue-600 transition font-geist text-white w-full"
                  onClick={toggleMenu}
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
