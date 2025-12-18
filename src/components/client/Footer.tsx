import { Link } from "react-router-dom";
import { Mail, Phone, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gray-900 mt-8 sm:mt-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="relative overflow-hidden text-white p-4 sm:p-6 md:p-8">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(255,255,255,0.06),transparent_60%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_120%,rgba(255,255,255,0.05),transparent_60%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15]"></div>
          </div>

          <div className="relative">
            <h2 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] xl:text-[9vw] leading-[0.95] sm:leading-[0.9] font-semibold tracking-tighter font-geist">
              <span className="block">Ready to scale</span>
              <span className="block text-white/60">your AI projects</span>
            </h2>

            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Email */}
              <div className="sm:col-span-2 md:col-span-1">
                <p className="text-xs sm:text-sm text-white/60 font-geist">Email Address</p>
                <a
                  href="mailto:info@datos.com"
                  className="mt-2 inline-flex items-center gap-2 sm:gap-3 text-base sm:text-xl md:text-2xl font-medium tracking-tight text-white font-geist break-all"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="break-all">info@datos.com</span>
                </a>
              </div>

              {/* Call */}
              <div className="sm:col-span-2 md:col-span-1">
                <p className="text-xs sm:text-sm text-white/60 font-geist">Phone Numbers</p>
                <a
                  href="tel:+233240027151"
                  className="inline-flex items-center gap-2 hover:bg-white/90 text-xs sm:text-sm font-medium text-gray-900 tracking-tight bg-white border-white/10 border rounded-full mt-2 pt-2.5 sm:pt-3 pr-4 sm:pr-5 pb-2.5 sm:pb-3 pl-4 sm:pl-5 transition-colors duration-200 w-full sm:w-auto justify-center sm:justify-start"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-geist">+(233) 240027151</span>
                </a>
              </div>

              {/* Social */}
              <div className="sm:col-span-2 md:col-span-1">
                <p className="text-xs sm:text-sm text-white/60 font-geist">Follow Along</p>
                <div className="flex flex-wrap gap-2 sm:gap-3 mt-2 items-center">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-gray-900 tracking-tight bg-white border-white/10 border rounded-full pt-2.5 sm:pt-3 pr-3 sm:pr-4 pb-2.5 sm:pb-3 pl-3 sm:pl-4 hover:bg-white/90 transition-colors duration-200"
                  >
                    <Twitter className="w-4 h-4" />
                    <span className="font-geist">Twitter</span>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-gray-900 border border-white/10 hover:bg-white/90 transition-colors duration-200"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-gray-900 border border-white/10 hover:bg-white/90 transition-colors duration-200"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-gray-900 bg-white border-white/10 border rounded-full hover:bg-white/90 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 border-t border-white/10"></div>

            <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Menu */}
              <div>
                <p className="text-xs sm:text-sm text-white/60 font-geist">Platform</p>
                <div className="mt-2 sm:mt-3 grid grid-cols-2 gap-2 text-xs sm:text-sm">
                  <Link to="/" className="font-medium tracking-tight hover:underline font-geist">
                    Home
                  </Link>
                  <Link to="/products" className="font-medium tracking-tight hover:underline font-geist">
                    Products
                  </Link>
                  <Link to="/enterprise" className="font-medium tracking-tight hover:underline font-geist">
                    Enterprise
                  </Link>
                  <Link to="/about" className="font-medium tracking-tight hover:underline font-geist">
                    About
                  </Link>
                </div>
              </div>

              {/* Legal */}
              <div>
                <p className="text-xs sm:text-sm text-white/60 font-geist">Useful Links</p>
                <div className="mt-2 sm:mt-3 grid grid-cols-1 gap-2 text-xs sm:text-sm">
                  <Link to="/documentation" className="font-medium tracking-tight hover:underline font-geist">
                    Documentation
                  </Link>
                  <Link to="/api" className="font-medium tracking-tight hover:underline font-geist">
                    API Reference
                  </Link>
                  <Link to="/support" className="font-medium tracking-tight hover:underline font-geist">
                    Support
                  </Link>
                </div>
              </div>
            </div>

            <p className="mt-4 sm:mt-6 text-center text-[10px] sm:text-xs text-white/70 font-geist px-2">
              © <span>{currentYear}</span> Labilo. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
