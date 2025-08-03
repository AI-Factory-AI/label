import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Play,
  Trophy,
  Star,
  DollarSign,
  Target,
  Clock,
  CheckCircle,
  Image,
  FileText,
  Volume2,
  Monitor
} from "lucide-react"

export default function LabelerDashboard() {
  const availableTasks = [
    {
      id: "task_001",
      title: "African Wildlife Classification",
      type: "image_classification",
      payment: 0.15,
      estimatedTime: "30 sec",
      difficulty: "Easy",
      remainingTasks: 250
    },
    {
      id: "task_002",
      title: "Agricultural Object Detection", 
      type: "object_detection",
      payment: 0.45,
      estimatedTime: "2 min",
      difficulty: "Medium",
      remainingTasks: 89
    },
    {
      id: "task_003",
      title: "Swahili Audio Transcription",
      type: "audio_transcription", 
      payment: 0.80,
      estimatedTime: "5 min",
      difficulty: "Hard",
      remainingTasks: 156
    },
    {
      id: "task_004",
      title: "Text Sentiment Analysis",
      type: "text_classification",
      payment: 0.25,
      estimatedTime: "1 min", 
      difficulty: "Easy",
      remainingTasks: 340
    }
  ]

  const recentEarnings = [
    { date: "Today", amount: 23.45, tasks: 67 },
    { date: "Yesterday", amount: 31.20, tasks: 89 },
    { date: "2 days ago", amount: 28.90, tasks: 78 },
    { date: "3 days ago", amount: 35.60, tasks: 92 }
  ]

  const getTaskIcon = (type: string) => {
    switch (type) {
      case "image_classification": return <Image className="h-4 w-4" />
      case "object_detection": return <Monitor className="h-4 w-4" />
      case "audio_transcription": return <Volume2 className="h-4 w-4" />
      case "text_classification": return <FileText className="h-4 w-4" />
      default: return <FileText className="h-4 w-4" />
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-500"
      case "Medium": return "bg-yellow-500"
      case "Hard": return "bg-red-500"
      default: return "bg-gray-500"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gradient-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">LA</span>
            </div>
            <div>
              <h1 className="font-semibold">Labeler Dashboard</h1>
              <p className="text-sm text-muted-foreground">Welcome back, Sarah!</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-medium">$234.50</p>
              <p className="text-xs text-muted-foreground">Available balance</p>
            </div>
            <div className="w-8 h-8 bg-muted rounded-full"></div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,234.50</div>
              <p className="text-xs text-muted-foreground">+$23.45 today</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3,456</div>
              <p className="text-xs text-muted-foreground">67 today</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Accuracy Rate</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">96.8%</div>
              <p className="text-xs text-muted-foreground">Above 95% target</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Rank</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">#47</div>
              <p className="text-xs text-muted-foreground">Gold tier labeler</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="tasks" className="space-y-6">
          <TabsList>
            <TabsTrigger value="tasks">Available Tasks</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="tasks" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Available Tasks</h2>
              <div className="flex items-center space-x-2">
                <Button variant="outline">Filter</Button>
                <Button variant="outline">Sort by Payment</Button>
              </div>
            </div>

            <div className="grid gap-4">
              {availableTasks.map((task) => (
                <Card key={task.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          {getTaskIcon(task.type)}
                          <h3 className="font-semibold">{task.title}</h3>
                          <Badge className={getDifficultyColor(task.difficulty)}>
                            {task.difficulty}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                          <div>
                            <span className="font-medium text-foreground">${task.payment}</span>
                            <span> per task</span>
                          </div>
                          <div>
                            <Clock className="inline h-3 w-3 mr-1" />
                            {task.estimatedTime}
                          </div>
                          <div>
                            {task.remainingTasks} tasks remaining
                          </div>
                          <div className="text-green-600 font-medium">
                            ${(task.payment * task.remainingTasks).toFixed(2)} potential
                          </div>
                        </div>
                      </div>
                      <Button className="bg-gradient-primary hover:bg-primary/90">
                        <Play className="mr-2 h-4 w-4" />
                        Start Task
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recently Completed Tasks</CardTitle>
                <CardDescription>Your task completion history and feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center text-muted-foreground py-12">
                  Completed tasks history coming soon...
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="earnings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Earnings</CardTitle>
                  <CardDescription>Your daily earnings breakdown</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentEarnings.map((earning, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{earning.date}</p>
                          <p className="text-sm text-muted-foreground">{earning.tasks} tasks</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">${earning.amount}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Achievement Progress</CardTitle>
                  <CardDescription>Your progress towards next tier</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Tasks to Platinum Tier</span>
                      <span className="text-sm">3,456 / 5,000</span>
                    </div>
                    <Progress value={69} />
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Quality Score</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">4.8/5.0</span>
                      </div>
                    </div>
                    <Progress value={96} />
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-2">Next Rewards</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 10% bonus on all tasks</li>
                      <li>• Priority access to high-paying tasks</li>
                      <li>• $50 milestone bonus</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Labeler Profile</CardTitle>
                <CardDescription>Manage your profile and skills</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center text-muted-foreground py-12">
                  Profile management coming soon...
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}