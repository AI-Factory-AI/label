export function FeaturesSection() {
  return (
    <div id="features" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end border-gray-200 border-b pb-8 gap-x-6 gap-y-6 items-center justify-center">
          <div className="max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 tracking-tight font-geist mb-4 sm:mb-6 text-center px-4">
              Premium data labeling
              <br />
              <span className="text-blue-500 font-geist font-medium">
                services for AI
              </span>
            </h2>
            <p className="leading-relaxed text-base sm:text-lg mt-3 sm:mt-4 font-geist text-gray-600 text-center px-4">
              From image annotation to NLP training data, our platform provides everything you need to train accurate AI models.
            </p>
          </div>
        </div>

        <div className="group relative mt-12 mb-12">
        <div className="relative w-full">
          <div className="overflow-hidden w-full z-10 relative">
            <div className="z-10 grid md:grid-cols-2 gap-4 sm:gap-6 relative">
              {/* Feature 1: Image Annotation */}
              <div className="md:p-10 bg-gray-50 border-gray-200 border rounded-2xl sm:rounded-[32px] p-6 sm:p-8 relative transition-all duration-200 hover:border-blue-300">
                <div className="max-w-sm relative">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-3 sm:mb-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-900 tracking-tight font-geist mb-2 sm:mb-3">
                    Image & Video Annotation
                  </h3>
                  <p className="leading-relaxed font-geist text-gray-600">
                    Bounding boxes, polygons, semantic segmentation, and keypoint annotation for computer vision models.
                  </p>

                  <ul className="mt-8 space-y-3">
                    <li className="flex items-center gap-3 text-sm font-medium font-geist text-gray-700">
                      <svg className="h-4 w-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                        strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Object detection
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium font-geist text-gray-700">
                      <svg className="h-4 w-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                        strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Instance segmentation
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium font-geist text-gray-700">
                      <svg className="h-4 w-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                        strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Pose estimation
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 2: NLP */}
              <div className="md:p-10 bg-gray-50 border-gray-200 border rounded-2xl sm:rounded-[32px] p-6 sm:p-8 relative transition-all duration-200 hover:border-blue-300">
                <div className="max-w-xs relative">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-3 sm:mb-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-900 tracking-tight font-geist mb-2 sm:mb-3">
                    Text & NLP Annotation
                  </h3>
                  <p className="leading-relaxed font-geist text-gray-600">
                    Named entity recognition, sentiment analysis, text classification, and conversational AI training data.
                  </p>
                </div>
              </div>

              {/* Feature 3: Quality Assurance */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-[32px] border border-gray-200 bg-gray-50 p-6 sm:p-8 md:p-10 transition-all duration-200 hover:border-blue-300">
                <div className="max-w-sm relative">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-3 sm:mb-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-900 tracking-tight font-geist mb-2 sm:mb-3">
                    Quality Assurance
                  </h3>
                  <p className="leading-relaxed font-geist text-gray-600">
                    Multi-tier review process with 99.5% accuracy guarantee. Every annotation verified by expert reviewers.
                  </p>

                  <ul className="mt-8 space-y-3">
                    <li className="flex items-center gap-3 text-sm font-medium font-geist text-gray-700">
                      <svg className="h-4 w-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                        strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      99.5% accuracy
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium font-geist text-gray-700">
                      <svg className="h-4 w-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                        strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Multi-tier review
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium font-geist text-gray-700">
                      <svg className="h-4 w-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                        strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Expert reviewers
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 4: Scalability */}
              <div className="md:p-10 transition-all duration-200 hover:border-blue-300 bg-gray-50 border-gray-200 border rounded-2xl sm:rounded-[32px] p-6 sm:p-8 relative">
                <div className="max-w-xs relative">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-3 sm:mb-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-900 tracking-tight font-geist mb-2 sm:mb-3">
                    Scale On Demand
                  </h3>
                  <p className="leading-relaxed font-geist text-gray-600">
                    50,000+ expert labelers across 54 countries. Handle millions of annotations with fast turnaround times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

