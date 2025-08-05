import { Card, CardContent } from "@/components/ui/card"
import { Globe, DollarSign, Clock, Award, TrendingUp, Users, Zap, Shield } from "lucide-react"

export function WhyAfrica() {
  const advantages = [
    {
      icon: Globe,
      title: "Global Linguistic Diversity",
      description: "Access to 2,000+ languages and cultural nuances for comprehensive data understanding",
      metric: "Languages"
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Excellence",
      description: "Premium quality at competitive rates, up to 60% more cost-effective than alternatives",
      metric: "60% Savings"
    },
    {
      icon: Clock,
      title: "24/7 Global Coverage",
      description: "Round-the-clock operations across multiple time zones for faster project delivery",
      metric: "24/7 Support"
    },
    {
      icon: Award,
      title: "Expert Workforce",
      description: "Highly skilled professionals with strong technical and multilingual capabilities",
      metric: "50K+ Experts"
    }
  ]

  const stats = [
    { label: "Countries", value: "54", icon: Globe },
    { label: "Languages", value: "2K+", icon: TrendingUp },
    { label: "Population", value: "1.3B", icon: Users },
    { label: "Accuracy", value: "99.5%", icon: Shield }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            The African Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-4 sm:mb-6">
            Why Choose <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Africa</span>?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Africa represents the fastest-growing tech talent pool globally, combining 
            cultural diversity, multilingual expertise, and cost-effective excellence 
            to deliver superior data labeling services.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 sm:p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 hover:border-primary/20 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-light text-foreground mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Advantages List */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 self-start sm:self-auto">
                      <advantage.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 gap-2">
                        <h3 className="text-lg sm:text-xl font-light text-foreground">
                          {advantage.title}
                        </h3>
                        <span className="text-xs sm:text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full self-start sm:self-center">
                          {advantage.metric}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full text-sm font-medium">
            <Shield className="w-4 h-4 mr-2" />
            ISO 27001 Certified & GDPR Compliant
          </div>
        </div>
      </div>
    </section>
  )
} 