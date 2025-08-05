import { Header } from "@/components/client/Header"
import { Footer } from "@/components/client/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Play, FileText, Users, Target, Award, Clock, Star, ArrowRight, Calendar, User, Eye, MessageCircle, TrendingUp, Zap, Globe, Shield } from "lucide-react"

export default function Learn() {
  const featuredArticles = [
    {
      title: "The Future of AI Data Labeling in Africa",
      excerpt: "How African talent is revolutionizing the global AI industry through innovative data labeling techniques and cultural insights.",
      author: "Dr. Sarah Mwangi",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Industry Insights",
      image: "https://res.cloudinary.com/ecosheane/image/upload/v1754211688/medical-banner-with-doctor-wearing-goggles_vxau9q.jpg",
      views: 2847,
      comments: 23,
      featured: true
    },
    {
      title: "Best Practices for Computer Vision Annotation",
      excerpt: "A comprehensive guide to creating high-quality training data for computer vision models with real-world examples.",
      author: "Michael Ochieng",
      date: "March 12, 2024",
      readTime: "12 min read",
      category: "Technical Guide",
      image: "https://res.cloudinary.com/ecosheane/image/upload/v1754211694/futuristic-ai-chip-circuit-board_p7sx5h.jpg",
      views: 1956,
      comments: 18,
      featured: true
    },
    {
      title: "Building Trust in AI: The Role of Quality Data",
      excerpt: "Why data quality is the foundation of trustworthy AI systems and how to achieve it through proper labeling.",
      author: "Aisha Hassan",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "AI Ethics",
      image: "https://res.cloudinary.com/ecosheane/image/upload/v1754218502/retinal-biometrics-technology-with-man-s-eye-digital-remix-min_dhuks8.jpg",
      views: 1623,
      comments: 15,
      featured: true
    }
  ]

  const latestArticles = [
    {
      title: "NLP Annotation Techniques for African Languages",
      excerpt: "Specialized approaches for annotating text data in indigenous African languages and dialects.",
      author: "Kwame Asante",
      date: "March 14, 2024",
      readTime: "10 min read",
      category: "NLP",
      image: "https://res.cloudinary.com/ecosheane/image/upload/v1754218524/woman-with-tablet-device-illustrating-min_zvux1l.jpg",
      views: 1247,
      comments: 12
    },
    {
      title: "Quality Assurance in Data Labeling Projects",
      excerpt: "Proven strategies for maintaining high accuracy standards across large-scale annotation projects.",
      author: "Fatima Diallo",
      date: "March 13, 2024",
      readTime: "7 min read",
      category: "Quality Control",
      image: "https://res.cloudinary.com/ecosheane/image/upload/v1754211763/2035_pob1gl.jpg",
      views: 987,
      comments: 8
    },
    {
      title: "The Economics of Data Labeling in Emerging Markets",
      excerpt: "How African data labelers are creating sustainable income while contributing to global AI development.",
      author: "David Kimani",
      date: "March 11, 2024",
      readTime: "9 min read",
      category: "Industry Analysis",
      image: "https://res.cloudinary.com/ecosheane/image/upload/v1754211680/horizontal-shot-desks-inside-scottish-parliament-building_hktrxj.jpg",
      views: 1156,
      comments: 14
    },
    {
      title: "Audio Annotation for Speech Recognition Systems",
      excerpt: "Advanced techniques for labeling audio data to improve speech recognition accuracy in diverse environments.",
      author: "Grace Wanjiku",
      date: "March 9, 2024",
      readTime: "11 min read",
      category: "Audio Processing",
      image: "https://res.cloudinary.com/ecosheane/image/upload/v1754211694/futuristic-ai-chip-circuit-board_p7sx5h.jpg",
      views: 892,
      comments: 6
    }
  ]

  const categories = [
    { name: "Industry Insights", count: 24, icon: TrendingUp },
    { name: "Technical Guides", count: 18, icon: BookOpen },
    { name: "AI Ethics", count: 12, icon: Shield },
    { name: "NLP", count: 15, icon: FileText },
    { name: "Computer Vision", count: 22, icon: Eye },
    { name: "Quality Control", count: 9, icon: Target },
    { name: "Audio Processing", count: 8, icon: Play },
    { name: "Industry Analysis", count: 16, icon: Globe }
  ]

  const courses = [
    {
      title: "Data Labeling Fundamentals",
      description: "Master the basics of data labeling, annotation techniques, and quality standards.",
      duration: "4 hours",
      level: "Beginner",
      lessons: 12,
      rating: 4.8,
      students: 1240,
      icon: BookOpen,
      color: "bg-blue-500"
    },
    {
      title: "Image Classification Mastery",
      description: "Learn advanced image classification techniques and best practices for computer vision.",
      duration: "6 hours",
      level: "Intermediate",
      lessons: 18,
      rating: 4.9,
      students: 890,
      icon: Target,
      color: "bg-green-500"
    },
    {
      title: "NLP Annotation Techniques",
      description: "Comprehensive guide to text annotation, sentiment analysis, and language processing.",
      duration: "5 hours",
      level: "Intermediate",
      lessons: 15,
      rating: 4.7,
      students: 756,
      icon: FileText,
      color: "bg-purple-500"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Latest Insights
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-light mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Learn
            </span>
            <br />
            <span className="text-foreground">from the Experts</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 px-4">
            Discover insights, tutorials, and best practices from Africa's leading data labeling professionals. 
            Stay ahead of the curve in AI and machine learning.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 px-4">
            <Badge variant="outline" className="text-xs sm:text-sm">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              50+ Authors
            </Badge>
            <Badge variant="outline" className="text-xs sm:text-sm">
              <FileText className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              200+ Articles
            </Badge>
            <Badge variant="outline" className="text-xs sm:text-sm">
              <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              100K+ Views
            </Badge>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button size="lg" className="bg-gradient-primary hover:bg-primary/90">
              Start Reading
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Browse Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 gap-4">
            <h2 className="text-2xl sm:text-3xl font-light">Featured Articles</h2>
            <Button variant="ghost" className="text-primary hover:text-primary/80 text-sm">
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm text-xs">
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center text-xs sm:text-sm text-muted-foreground mb-3">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    {article.date}
                    <span className="mx-2">•</span>
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    {article.readTime}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                        <User className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium">{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {article.views.toLocaleString()}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {article.comments}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories & Latest Articles */}
      <section className="py-12 sm:py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Categories</h3>
              <div className="space-y-2 sm:space-y-3">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-2 sm:p-3 rounded-lg hover:bg-background/50 transition-colors cursor-pointer">
                    <div className="flex items-center">
                      <category.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-primary" />
                      <span className="font-medium text-sm sm:text-base">{category.name}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Latest Articles */}
            <div className="lg:col-span-3">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
                <h3 className="text-lg sm:text-xl font-semibold">Latest Articles</h3>
                <Button variant="ghost" size="sm" className="text-sm">
                  View All
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {latestArticles.map((article, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center text-xs text-muted-foreground mb-2">
                            <Badge variant="outline" className="text-xs mr-2">
                              {article.category}
                            </Badge>
                            <span>{article.date}</span>
                            <span className="mx-1">•</span>
                            <span>{article.readTime}</span>
                          </div>
                          <h4 className="font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors text-sm sm:text-base">
                            {article.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2">
                            {article.excerpt}
                          </p>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <span className="text-xs text-muted-foreground">{article.author}</span>
                            <div className="flex items-center space-x-2 sm:space-x-3 text-xs text-muted-foreground">
                              <span>{article.views.toLocaleString()} views</span>
                              <span>{article.comments} comments</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-light mb-4">Featured Courses</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
              Deep dive into specialized topics with our expert-led courses designed for data labeling professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-4 sm:p-6">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 ${course.color} rounded-lg flex items-center justify-center mb-4`}>
                    <course.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <CardTitle className="text-base sm:text-lg">{course.title}</CardTitle>
                  <CardDescription className="text-sm">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-light">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-muted-foreground">Level</span>
                      <Badge variant="secondary" className="text-xs">{course.level}</Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-muted-foreground">Rating</span>
                      <div className="flex items-center">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 mr-1" />
                        <span className="font-light">{course.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-muted-foreground">Students</span>
                      <span className="font-light">{course.students.toLocaleString()}</span>
                    </div>
                    <Button className="w-full mt-4 group-hover:bg-primary/90 text-sm">
                      Enroll Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base px-4">
              Get the latest insights, tutorials, and industry updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 flex-1 max-w-md text-sm"
              />
              <Button size="lg" className="bg-gradient-primary hover:bg-primary/90 text-sm">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4 px-4">
              Join 5,000+ professionals getting weekly insights on AI and data labeling.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}