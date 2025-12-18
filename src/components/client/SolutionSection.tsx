import { Link } from "react-router-dom";

export function SolutionSection() {
  return (
    <section id="solutions" className="z-10 bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start relative z-10">
        {/* Content Section */}
        <div className="flex flex-col min-h-full justify-between order-2 lg:order-1">
          <div>
            <span className="text-sm font-normal text-gray-500 font-geist">Platform</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.9] text-gray-900 tracking-tighter mt-2 font-geist">
              Data labeling built for scale.
            </h2>
            <div className="mt-8 relative">
              <div className="hidden sm:flex flex-col gap-4 relative text-gray-600 bg-transparent pr-4 pl-4">
                {/* Feature 1 */}
                <div className="relative">
                  <div className="absolute left-2 top-8 bottom-0 w-px bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600"></div>
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-4 h-4 z-10 relative bg-white border-blue-400 border-2 rounded-full mt-0.5 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 pb-6">
                      <span className="text-sm font-medium text-blue-600 font-geist">African talent network</span>
                      <p className="text-xs text-gray-500 mt-1 font-geist">50,000+ skilled labelers across 54 countries</p>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="relative">
                  <div className="absolute left-2 top-8 bottom-0 w-px bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600"></div>
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-blue-500 bg-white z-10 relative mt-0.5 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    </div>
                    <div className="flex-1 pb-6">
                      <span className="text-sm font-medium text-blue-600 font-geist">Quality guaranteed</span>
                      <p className="text-xs text-gray-500 mt-1 font-geist">99.5% accuracy with multi-tier review process</p>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-blue-600 bg-white z-10 relative mt-0.5 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-medium text-blue-600 font-geist">Fast turnaround</span>
                      <p className="text-xs text-gray-500 mt-1 font-geist">Scale from 100 to 1M+ annotations quickly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-10">
            <div>
              <p className="text-sm font-medium text-gray-900 tracking-tight font-geist">Power your AI with quality data</p>
              <p className="text-sm text-gray-600 mt-1 max-w-sm font-geist">
                Expert annotation, rigorous quality control, and competitive pricing that keeps you focused on model development.
              </p>
              <Link to="/products"
                className="inline-flex items-center justify-center gap-2 h-10 hover:bg-blue-600 transition text-sm font-normal text-white bg-blue-500 rounded-full mt-4 px-4 max-w-sm font-geist">
                Explore services
                <span className="inline-flex h-2 w-2 rounded-full bg-white"></span>
              </Link>
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 order-1 lg:order-2 relative gap-2 sm:gap-x-4 sm:gap-y-4">
          {/* Card 1 */}
          <article className="group overflow-hidden aspect-[4/3] bg-center transition-transform duration-300 hover:scale-[1.02] bg-[url(/card1.jpg)] bg-cover border-gray-200 rounded-2xl relative shadow-lg">
            <div className="transition-opacity duration-300 group-hover:opacity-90 bg-gradient-to-b from-black/0 via-black/15 to-black/60 absolute top-0 right-0 bottom-0 left-0"></div>
            <div className="absolute top-3 left-3 transition-transform duration-300 group-hover:scale-110">
              <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur">Task Management</span>
            </div>
            <div className="absolute bottom-3 left-3 right-3 transition-transform duration-300 group-hover:translate-y-[-4px]">
              <p className="text-white text-lg font-medium tracking-tight leading-tight">Data annotation workflows</p>
            </div>
          </article>

          {/* Card 2 */}
          <article className="group relative overflow-hidden aspect-[4/3] bg-center bg-cover border-gray-200 rounded-2xl bg-[url(/card2.jpg)] transition-transform duration-300 hover:scale-[1.02] shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60 transition-opacity duration-300 group-hover:opacity-90"></div>
            <div className="absolute top-3 left-3 transition-transform duration-300 group-hover:scale-110">
              <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur">AI</span>
            </div>
            <div className="absolute bottom-3 left-3 right-3 transition-transform duration-300 group-hover:translate-y-[-4px]">
              <p className="text-white text-lg font-medium tracking-tight leading-tight">Generative AI training</p>
            </div>
          </article>

          {/* Card 3 */}
          <article className="group relative overflow-hidden aspect-[4/5] bg-center bg-cover border-gray-200 rounded-2xl bg-[url(/card3.jpg)] transition-transform duration-300 hover:scale-[1.02] shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60 transition-opacity duration-300 group-hover:opacity-90"></div>
            <div className="absolute top-3 left-3 transition-transform duration-300 group-hover:scale-110">
              <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur">Healthcare</span>
            </div>
            <div className="absolute bottom-3 left-3 right-3 transition-transform duration-300 group-hover:translate-y-[-4px]">
              <p className="text-white text-lg font-medium tracking-tight leading-tight">Medical imaging annotation</p>
            </div>
          </article>

          {/* Card 4 */}
          <article className="group relative overflow-hidden aspect-[4/5] bg-center bg-cover border-gray-200 rounded-2xl bg-[url(/card4.jpg)] transition-transform duration-300 hover:scale-[1.02] shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60 transition-opacity duration-300 group-hover:opacity-90"></div>
            <div className="absolute top-3 left-3 transition-transform duration-300 group-hover:scale-110">
              <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur">Automation</span>
            </div>
            <div className="absolute bottom-3 left-3 right-3 transition-transform duration-300 group-hover:translate-y-[-4px]">
              <p className="text-white text-lg font-medium tracking-tight leading-tight">AI-powered labeling tools</p>
            </div>
          </article>
        </div>
      </div>
      </div>
    </section>
  );
}

