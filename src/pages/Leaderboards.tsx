import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Star, Target, Clock, Award, Medal } from "lucide-react"

export default function Leaderboards() {
  const topLabelers = [
    {
      rank: 1,
      name: "Amina Hassan",
      country: "Kenya",
      points: 15420,
      accuracy: 99.2,
      tasksCompleted: 3420,
      specialties: ["Image Classification", "NLP"],
      badge: "Diamond",
      avatar: "/api/placeholder/40/40"
    },
    {
      rank: 2,
      name: "Kwame Asante",
      country: "Ghana",
      points: 14890,
      accuracy: 98.8,
      tasksCompleted: 3180,
      specialties: ["Object Detection", "Audio"],
      badge: "Diamond",
      avatar: "/api/placeholder/40/40"
    },
    {
      rank: 3,
      name: "Fatima Al-Rashid",
      country: "Morocco",
      points: 14320,
      accuracy: 98.9,
      tasksCompleted: 2980,
      specialties: ["Text Analysis", "Video"],
      badge: "Platinum",
      avatar: "/api/placeholder/40/40"
    },
    {
      rank: 4,
      name: "Olumide Adebayo",
      country: "Nigeria",
      points: 13750,
      accuracy: 98.5,
      tasksCompleted: 2850,
      specialties: ["Image Classification"],
      badge: "Platinum",
      avatar: "/api/placeholder/40/40"
    },
    {
      rank: 5,
      name: "Priya Sharma",
      country: "South Africa",
      points: 13200,
      accuracy: 98.7,
      tasksCompleted: 2720,
      specialties: ["Audio", "NLP"],
      badge: "Platinum",
      avatar: "/api/placeholder/40/40"
    }
  ]

  const topCountries = [
    { country: "Nigeria", labelers: 8420, avgAccuracy: 97.8, totalTasks: 142000 },
    { country: "Kenya", labelers: 6150, avgAccuracy: 98.1, totalTasks: 98500 },
    { country: "South Africa", labelers: 5890, avgAccuracy: 97.9, totalTasks: 89200 },
    { country: "Ghana", labelers: 4320, avgAccuracy: 98.0, totalTasks: 67800 },
    { country: "Egypt", labelers: 3950, avgAccuracy: 97.6, totalTasks: 58900 }
  ]

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case "Diamond": return <Award className="h-4 w-4 text-blue-500" />
      case "Platinum": return <Medal className="h-4 w-4 text-gray-400" />
      case "Gold": return <Trophy className="h-4 w-4 text-yellow-500" />
      default: return <Star className="h-4 w-4 text-green-500" />
    }
  }

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Diamond": return "bg-blue-50 text-blue-700 border-blue-200"
      case "Platinum": return "bg-gray-50 text-gray-700 border-gray-200"
      case "Gold": return "bg-yellow-50 text-yellow-700 border-yellow-200"
      default: return "bg-green-50 text-green-700 border-green-200"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Leaderboards
            </span>
            <br />
            <span className="text-foreground">Top Performers</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Celebrating the exceptional talent and dedication of our top data labelers across Africa.
          </p>
        </div>
      </section>

      {/* Top Labelers */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Top Labelers This Month</h2>
          
          {/* Podium */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {topLabelers.slice(0, 3).map((labeler, index) => (
              <Card key={index} className={`text-center ${index === 0 ? 'border-yellow-500 bg-yellow-50/50' : ''}`}>
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <Avatar className="w-20 h-20 mx-auto">
                      <AvatarImage src={labeler.avatar} />
                      <AvatarFallback>{labeler.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    {index === 0 && (
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                        <Trophy className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-xl">{labeler.name}</CardTitle>
                  <CardDescription>{labeler.country}</CardDescription>
                  <Badge className={`mx-auto mt-2 ${getBadgeColor(labeler.badge)}`}>
                    {getBadgeIcon(labeler.badge)}
                    <span className="ml-1">{labeler.badge}</span>
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">{labeler.points.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Points</div>
                    <div className="flex justify-between text-sm">
                      <span>Accuracy:</span>
                      <span className="font-medium">{labeler.accuracy}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tasks:</span>
                      <span className="font-medium">{labeler.tasksCompleted.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Full Leaderboard */}
          <Card>
            <CardHeader>
              <CardTitle>Complete Rankings</CardTitle>
              <CardDescription>Top 100 labelers ranked by points this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topLabelers.map((labeler, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-muted font-bold">
                        {labeler.rank}
                      </div>
                      <Avatar>
                        <AvatarImage src={labeler.avatar} />
                        <AvatarFallback>{labeler.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{labeler.name}</div>
                        <div className="text-sm text-muted-foreground">{labeler.country}</div>
                      </div>
                      <Badge className={getBadgeColor(labeler.badge)}>
                        {getBadgeIcon(labeler.badge)}
                        <span className="ml-1">{labeler.badge}</span>
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-8 text-center">
                      <div>
                        <div className="font-bold">{labeler.points.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">Points</div>
                      </div>
                      <div>
                        <div className="font-bold">{labeler.accuracy}%</div>
                        <div className="text-xs text-muted-foreground">Accuracy</div>
                      </div>
                      <div>
                        <div className="font-bold">{labeler.tasksCompleted.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">Tasks</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Country Rankings */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Top Countries</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Country Rankings</CardTitle>
                <CardDescription>Countries ranked by total labeler participation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topCountries.map((country, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="font-medium">{country.country}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{country.labelers.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">labelers</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Stats</CardTitle>
                <CardDescription>Key metrics across top performing countries</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Target className="h-4 w-4 text-green-500" />
                      <span>Highest Accuracy</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">98.1%</div>
                      <div className="text-xs text-muted-foreground">Kenya</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <span>Most Tasks Completed</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">142K</div>
                      <div className="text-xs text-muted-foreground">Nigeria</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>Most Active Labelers</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">8,420</div>
                      <div className="text-xs text-muted-foreground">Nigeria</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}