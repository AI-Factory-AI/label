export function Testimonials() {
  const testimonialsRow1 = [
    {
      name: "David Chen",
      title: "AI Lead, TechCorp",
      quote: "Datos helped us label 2M+ images for our autonomous driving project. Quality was exceptional and turnaround was fast."
    },
    {
      name: "Sarah Williams",
      title: "ML Engineer, HealthAI",
      quote: "The medical imaging annotations were incredibly accurate. Their expert labelers understood the domain well."
    },
    {
      name: "Michael Johnson",
      title: "CTO, AgriTech Solutions",
      quote: "We scaled from 10K to 500K annotations seamlessly. Their African talent network is a game changer."
    },
    {
      name: "Emily Rodriguez",
      title: "Data Science Lead, RetailAI",
      quote: "99.5% accuracy on our product classification project. Best data labeling partner we've worked with."
    },
    {
      name: "David Chen",
      title: "AI Lead, TechCorp",
      quote: "Datos helped us label 2M+ images for our autonomous driving project. Quality was exceptional and turnaround was fast."
    },
    {
      name: "Sarah Williams",
      title: "ML Engineer, HealthAI",
      quote: "The medical imaging annotations were incredibly accurate. Their expert labelers understood the domain well."
    },
  ];

  const testimonialsRow2 = [
    {
      name: "James Park",
      title: "VP Engineering, FinanceAI",
      quote: "Document processing annotations were done with precision. Helped us launch our OCR product 2 months early."
    },
    {
      name: "Lisa Martinez",
      title: "AI Product Manager, E-commerce Co",
      quote: "Their NLP annotations for sentiment analysis were spot on. Great communication throughout the project."
    },
    {
      name: "Robert Kim",
      title: "Founder, Robotics Startup",
      quote: "Keypoint annotations for our pose estimation model were perfect. Would highly recommend Datos."
    },
    {
      name: "Amanda Foster",
      title: "Data Lead, Security AI",
      quote: "Fast, accurate, and affordable. Datos is now our go-to partner for all data labeling needs."
    },
    {
      name: "James Park",
      title: "VP Engineering, FinanceAI",
      quote: "Document processing annotations were done with precision. Helped us launch our OCR product 2 months early."
    },
    {
      name: "Lisa Martinez",
      title: "AI Product Manager, E-commerce Co",
      quote: "Their NLP annotations for sentiment analysis were spot on. Great communication throughout the project."
    },
  ];

  return (
    <section id="testimonials" className="pt-12 pb-12 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
        <div className="space-y-1">
          <p className="text-xs uppercase text-gray-500 tracking-widest font-geist">
            What clients say
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-geist tracking-tighter font-medium text-gray-900">
            Testimonials
          </h2>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-gray-400 flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path
              d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
            ></path>
            <path
              d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
            ></path>
          </svg>
          <span className="text-sm font-geist">Real feedback from AI companies</span>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="relative py-6 sm:py-8">
          <div className="flex gap-4 sm:gap-5 will-change-transform animate-marquee-ltr">
            {testimonialsRow1.map((testimonial, index) => (
              <article
                key={`row1-${index}`}
                className="shrink-0 w-[260px] xs:w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] rounded-xl sm:rounded-2xl border border-gray-200 bg-gray-50 p-4 sm:p-5"
              >
                <div className="flex items-center gap-3">
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium text-gray-900 font-geist">
                        {testimonial.name}
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                        className="w-3.5 h-3.5 text-blue-500">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <p className="text-xs text-gray-500 font-geist">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm sm:text-base text-gray-700 font-geist">
                  {testimonial.quote}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200"></div>

        <div className="relative py-6 sm:py-8">
          <div className="flex gap-4 sm:gap-5 will-change-transform animate-marquee-rtl">
            {testimonialsRow2.map((testimonial, index) => (
              <article
                key={`row2-${index}`}
                className="shrink-0 w-[260px] xs:w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] rounded-xl sm:rounded-2xl border border-gray-200 bg-gray-50 p-4 sm:p-5"
              >
                <div className="flex items-center gap-3">
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium text-gray-900 font-geist">
                        {testimonial.name}
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                        className="w-3.5 h-3.5 text-blue-500">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <p className="text-xs text-gray-500 font-geist">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm sm:text-base text-gray-700 font-geist">
                  {testimonial.quote}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

