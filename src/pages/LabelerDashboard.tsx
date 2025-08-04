import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { 
  Star, 
  Clock, 
  CheckCircle, 
  DollarSign,
  FileText,
  Image,
  Mic,
  Video,
  MessageSquare,
  Trophy,
  Target,
  TrendingUp,
  Award,
  BarChart3,
  Settings,
  HelpCircle,
  ChevronDown,
  Search,
  Filter,
  User,
  Zap,
  Shield,
  Activity,
  Calendar,
  Play
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function LabelerDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  
  // Mock data for available tasks
  const availableTasks = [
    {
      id: "task_001",
      title: "Wildlife Image Classification",
      description: "Classify animals in African wildlife photos",
      type: "image",
      payment: 0.25,
      difficulty: "Easy",
      remaining: 150,
      timeEstimate: "2-3 min"
    },
    {
      id: "task_002", 
      title: "Swahili Audio Transcription",
      description: "Transcribe Swahili conversations",
      type: "audio",
      payment: 0.50,
      difficulty: "Medium",
      remaining: 75,
      timeEstimate: "5-8 min"
    },
    {
      id: "task_003",
      title: "Agricultural Text Classification",
      description: "Categorize farming-related text data",
      type: "text",
      payment: 0.15,
      difficulty: "Easy",
      remaining: 200,
      timeEstimate: "1-2 min"
    },
    {
      id: "task_004",
      title: "Video Content Moderation",
      description: "Review and moderate video content",
      type: "video",
      payment: 0.75,
      difficulty: "Hard",
      remaining: 25,
      timeEstimate: "10-15 min"
    }
  ]

  // Mock data for recent earnings
  const recentEarnings = [
    { date: "Today", amount: 12.50, tasks: 25 },
    { date: "Yesterday", amount: 18.75, tasks: 38 },
    { date: "Dec 1", amount: 22.25, tasks: 45 },
    { date: "Nov 30", amount: 15.00, tasks: 30 },
  ]

  const menuItems = [
    { name: "Overview", icon: BarChart3, value: "overview" },
    { name: "Available Tasks", icon: FileText, value: "tasks" },
    { name: "Completed Tasks", icon: CheckCircle, value: "completed" },
    { name: "Earnings", icon: DollarSign, value: "earnings" },
    { name: "Leaderboard", icon: Trophy, value: "leaderboard" },
    { name: "Training", icon: Zap, value: "training" },
    { name: "Profile", icon: User, value: "profile" },
    { name: "Settings", icon: Settings, value: "settings" },
  ]

  const quickStats = [
    { label: "Today's Earnings", value: "$24.50", change: "+15%", icon: DollarSign, color: "text-green-600" },
    { label: "Tasks Completed", value: "47", change: "+8%", icon: CheckCircle, color: "text-blue-600" },
    { label: "Accuracy Rate", value: "98.9%", change: "+0.2%", icon: Shield, color: "text-purple-600" },
    { label: "Current Rank", value: "#47", change: "+3", icon: Trophy, color: "text-orange-600" }
  ]

  const getTaskIcon = (type: string) => {
    switch (type) {
      case "image": return <Image className="h-4 w-4" />
      case "audio": return <Mic className="h-4 w-4" />
      case "video": return <Video className="h-4 w-4" />
      case "text": return <FileText className="h-4 w-4" />
      default: return <FileText className="h-4 w-4" />
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "text-green-600 bg-green-50"
      case "Medium": return "text-yellow-600 bg-yellow-50"
      case "Hard": return "text-red-600 bg-red-50"
      default: return "text-gray-600 bg-gray-50"
    }
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        {/* Sidebar */}
        <Sidebar className="border-r">
          <SidebarContent>
            {/* Logo */}
            <div className="p-6 border-b border-border">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">LA</span>
                </div>
                <div>
                  <span className="font-semibold text-lg">Label</span>
                  <div className="text-xs text-muted-foreground">Labeler Portal</div>
                </div>
              </div>
            </div>

            <SidebarGroup>
              <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton 
                        isActive={activeTab === item.value}
                        onClick={() => setActiveTab(item.value)}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* User Profile */}
            <div className="mt-auto p-4 border-t border-border">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">JD</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">Expert Labeler</p>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </SidebarContent>
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <SidebarTrigger />
              <div>
                <h1 className="text-xl font-semibold">Labeler Dashboard</h1>
                <p className="text-sm text-muted-foreground">Track your tasks and earnings</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="text-lg font-light">$127.50</p>
                <p className="text-xs text-muted-foreground">Available balance</p>
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                Withdraw
              </Button>
            </div>
          </header>

          {/* Content */}
          <div className="flex-1 p-6">
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {quickStats.map((stat) => (
                    <Card key={stat.label} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                            <p className="text-2xl font-bold">{stat.value}</p>
                            <p className={`text-xs ${stat.color}`}>{stat.change}</p>
                          </div>
                          <stat.icon className={`h-8 w-8 ${stat.color}`} />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Featured Tasks */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Featured Tasks</CardTitle>
                        <CardDescription>High-paying opportunities available now</CardDescription>
                      </div>
                      <Button variant="outline" size="sm">View All</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {availableTasks.slice(0, 2).map((task) => (
                        <div key={task.id} className="p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                              {getTaskIcon(task.type)}
                            </div>
                            <div>
                              <h3 className="font-medium text-sm">{task.title}</h3>
                              <p className="text-xs text-muted-foreground">${task.payment}/task</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <Badge className={`${getDifficultyColor(task.difficulty)} text-xs border-0`}>
                              {task.difficulty}
                            </Badge>
                            <Button size="sm" className="h-7">
                              <Play className="mr-1 h-3 w-3" />
                              Start
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Performance Overview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">Total Earnings</CardTitle>
                  <DollarSign className="h-5 w-5 text-green-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-2xl font-light">$1,247.50</div>
                  <div className="text-sm text-muted-foreground">+12.5% from last month</div>
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Active earnings</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">Tasks Completed</CardTitle>
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-2xl font-light">2,847</div>
                  <div className="text-sm text-muted-foreground">+18% from last month</div>
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>98.5% accuracy</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">Current Rank</CardTitle>
                  <Trophy className="h-5 w-5 text-purple-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-2xl font-light">#47</div>
                  <div className="text-sm text-muted-foreground">Top 5% of labelers</div>
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Expert level</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">Available Tasks</CardTitle>
                  <FileText className="h-5 w-5 text-orange-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-2xl font-light">450</div>
                  <div className="text-sm text-muted-foreground">Ready to start</div>
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Multiple types</span>
                  </div>
                </div>
              </CardContent>
            </Card>
                </div>
              </div>
            )}

            {activeTab === "tasks" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search available tasks..." className="pl-10" />
                  </div>
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Available Tasks</CardTitle>
                    <CardDescription>Choose from available tasks and start earning</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {availableTasks.map((task) => (
                        <div key={task.id} className="flex flex-col lg:flex-row lg:items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors space-y-4 lg:space-y-0">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                              {getTaskIcon(task.type)}
                            </div>
                            <div>
                              <h3 className="font-medium">{task.title}</h3>
                              <p className="text-sm text-muted-foreground">{task.description}</p>
                              <div className="flex items-center space-x-4 mt-1">
                                <span className="text-xs text-muted-foreground">{task.timeEstimate}</span>
                                <Badge className={`${getDifficultyColor(task.difficulty)} text-xs border-0`}>
                                  {task.difficulty}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row lg:flex-row items-center space-x-4 lg:space-x-6">
                            <div className="text-center lg:text-right">
                              <p className="text-sm font-medium">${task.payment}</p>
                              <p className="text-xs text-muted-foreground">per task</p>
                            </div>
                            <div className="text-center lg:text-right">
                              <p className="text-sm font-medium">{task.remaining}</p>
                              <p className="text-xs text-muted-foreground">remaining</p>
                            </div>
                            <Button className="bg-primary hover:bg-primary/90 w-full lg:w-auto">
                              Start Task
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}