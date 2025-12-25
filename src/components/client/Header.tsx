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
    { label: "Home", href: "/" },
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
      <div className="relative w-full flex items-center h-20 sm:h-24 md:h-20 lg:h-20">
        {/* Logo - positioned absolutely on mobile to be flush left */}
        <Link to="/" className="absolute sm:static left-0 top-0 h-20 sm:h-24 md:h-20 lg:h-20 flex items-center justify-start flex-shrink-0 m-0 p-0 no-underline z-10">
          <img
            src="/logo.png"
            alt="Datos"
            className="h-24 sm:h-20 md:h-20 lg:h-20 w-auto object-contain m-0 p-0 block"
            loading="eager"
            width="120"
            height="40"
          />
        </Link>
        
        {/* Content container */}
        <div className="flex-1 max-w-7xl pl-28 sm:pl-4 md:mx-auto md:px-6 lg:px-8 pr-3 sm:pr-4">
          <div className="flex items-center justify-end h-20 sm:h-24 md:h-20 lg:h-20">
          
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
              to="/wishlist"
              className="text-sm text-gray-900 hover:text-gray-700 transition font-geist px-4 py-2"
            >
              Wishlist
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-4 py-2.5 text-sm font-medium hover:bg-blue-600 transition font-geist text-white"
            >
              Get Started
            </a>
          </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-gray-900 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition z-30 relative touch-manipulation"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              type="button"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden top-20 sm:top-24 md:top-20 lg:top-20"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Menu */}
        <div className={`lg:hidden border-t border-gray-200 bg-white transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="flex flex-col gap-0 px-4 py-4 sm:py-6">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-base sm:text-sm text-gray-900 hover:text-gray-700 hover:bg-gray-50 transition font-geist py-3 sm:py-2.5 px-2 rounded-lg touch-manipulation"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile More Section */}
            <div className="border-t border-gray-200 pt-4 mt-2">
              <div className="text-sm font-semibold text-gray-500 mb-3 font-geist px-2">More</div>
              {moreDropdownItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block py-3 sm:py-2 px-2 text-base sm:text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition font-geist rounded-lg touch-manipulation"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            <div className="pt-4 space-y-3 border-t border-gray-200 mt-2">
              <Link
                to="/wishlist"
                className="block text-base sm:text-sm text-gray-900 hover:text-gray-700 hover:bg-gray-50 transition font-geist py-3 sm:py-2 px-2 rounded-lg touch-manipulation"
                onClick={toggleMenu}
              >
                Wishlist
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 sm:py-2.5 text-base sm:text-sm font-medium hover:bg-blue-600 active:bg-blue-700 transition font-geist text-white w-full touch-manipulation"
                onClick={toggleMenu}
              >
                Get Started
              </a>
            </div>
          </nav>
        </div>
        </div>
      </div>
    </header>
  );
}
