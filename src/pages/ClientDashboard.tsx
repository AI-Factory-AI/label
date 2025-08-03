import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { 
  Upload, 
  FileText, 
  Users, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  BarChart3,
  Download,
  Plus,
  Search,
  Settings,
  HelpCircle,
  ChevronDown,
  Filter
} from "lucide-react"

export default function ClientDashboard() {
  const projects = [
    {
      id: "proj_001",
      name: "Wildlife Classification",
      type: "Image Classification",
      status: "in_progress",
      progress: 75,
      totalTasks: 1000,
      completedTasks: 750,
      accuracy: 98.5,
      estimatedCompletion: "2 days",
      email: "wildlife@example.com"
    },
    {
      id: "proj_002", 
      name: "Agricultural Dataset",
      type: "Object Detection",
      status: "completed",
      progress: 100,
      totalTasks: 500,
      completedTasks: 500,
      accuracy: 99.2,
      estimatedCompletion: "Completed",
      email: "agri@example.com"
    },
    {
      id: "proj_003",
      name: "Text Sentiment Analysis",
      type: "Text Classification", 
      status: "pending",
      progress: 0,
      totalTasks: 2000,
      completedTasks: 0,
      accuracy: 0,
      estimatedCompletion: "Pending approval",
      email: "sentiment@example.com"
    }
  ]

  const menuItems = [
    { name: "Dashboard", icon: BarChart3, active: true },
    { name: "Upload Data", icon: Upload, active: false },
    { name: "Track Projects", icon: FileText, active: false },
    { name: "Analytics", icon: BarChart3, active: false },
    { name: "Settings", icon: Settings, active: false },
    { name: "Help", icon: HelpCircle, active: false },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-green-600 bg-green-50"
      case "in_progress": return "text-blue-600 bg-blue-50"
      case "pending": return "text-orange-600 bg-orange-50"
      default: return "text-gray-600 bg-gray-50"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="h-4 w-4" />
      case "in_progress": return <Clock className="h-4 w-4" />
      case "pending": return <AlertCircle className="h-4 w-4" />
      default: return <Clock className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className="w-64 bg-sidebar border-r border-border flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">LA</span>
            </div>
            <span className="font-semibold text-lg">LabelAfrica</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.name}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                  item.active 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-muted rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm font-medium">Acme Corp</p>
              <p className="text-xs text-muted-foreground">admin@acme.com</p>
            </div>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">Project Analytics</h1>
            <p className="text-sm text-muted-foreground">Track your data labeling projects</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Last 30 days
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="mr-2 h-4 w-4" />
              New Project
            </Button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 p-6 space-y-6">
          {/* Search and Filter */}
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search projects..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>

          {/* Project Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">Completed Projects</CardTitle>
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-2xl font-bold">1</div>
                  <div className="text-sm text-muted-foreground">Agricultural Dataset</div>
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>99.2% accuracy</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">In Progress</CardTitle>
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-2xl font-bold">1</div>
                  <div className="text-sm text-muted-foreground">Wildlife Classification</div>
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>75% complete</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">Pending Approval</CardTitle>
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-2xl font-bold">1</div>
                  <div className="text-sm text-muted-foreground">Text Sentiment Analysis</div>
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Awaiting review</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Project List */}
          <Card>
            <CardHeader>
              <CardTitle>All Projects</CardTitle>
              <CardDescription>Manage and track all your data labeling projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project.id} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium">{project.name}</h3>
                        <p className="text-sm text-muted-foreground">{project.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <p className="text-sm font-medium">{project.completedTasks}</p>
                        <p className="text-xs text-muted-foreground">Tasks completed</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{project.accuracy}%</p>
                        <p className="text-xs text-muted-foreground">Accuracy</p>
                      </div>
                      <Badge className={`${getStatusColor(project.status)} border-0`}>
                        {getStatusIcon(project.status)}
                        <span className="ml-1 capitalize">{project.status.replace('_', ' ')}</span>
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}