import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
  Filter,
  Target,
  Zap,
  Shield,
  Globe,
  TrendingUp,
  DollarSign,
  Eye,
  Edit,
  MoreVertical,
  Calendar,
  Layers,
  Database,
  ExternalLink,
  Code,
  Copy,
  Key,
  Webhook,
  Activity,
  CreditCard,
  Bell,
  Lock,
  ArrowUpRight,
  Sparkles,
  Crown,
  Star,
  Trophy
} from "lucide-react"
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
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

export default function ClientDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  
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
    { name: "Overview", icon: BarChart3, value: "overview" },
    { name: "Projects", icon: FileText, value: "projects" },
    { name: "Upload Data", icon: Upload, value: "upload" },
    { name: "Analytics", icon: TrendingUp, value: "analytics" },
    { name: "API & Integration", icon: Code, value: "api" },
    { name: "Quality Control", icon: Shield, value: "quality" },
    { name: "Billing", icon: DollarSign, value: "billing" },
    { name: "Settings", icon: Settings, value: "settings" },
    { name: "Help", icon: HelpCircle, value: "help" },
  ]

  const clientStats = {
    totalEarnings: 124750,
    earningsGrowth: 12.5,
    tasksCompleted: 2847,
    tasksGrowth: 18,
    accuracy: 98.5,
    currentRank: 47,
    rankPercent: 5,
    level: "Expert"
  }

  const datasetTypes = [
    { name: "Image Classification", icon: Eye, count: 45, color: "bg-blue-500" },
    { name: "Object Detection", icon: Target, count: 23, color: "bg-green-500" },
    { name: "Text Annotation", icon: FileText, count: 12, color: "bg-purple-500" },
    { name: "Audio Transcription", icon: Database, count: 8, color: "bg-orange-500" }
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
                  <div className="text-xs text-muted-foreground">Client Portal</div>
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
                  <span className="text-primary-foreground font-bold text-sm">AC</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Acme Corp</p>
                  <p className="text-xs text-muted-foreground">Enterprise Client</p>
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
                <h1 className="text-xl font-semibold">Client Dashboard</h1>
                <p className="text-sm text-muted-foreground">Manage your AI data projects</p>
              </div>
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

          {/* Content */}
          <div className="flex-1 p-6">
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* Modern Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-muted-foreground">Tasks Completed</p>
                          <p className="text-3xl font-bold tracking-tight">{clientStats.tasksCompleted.toLocaleString()}</p>
                          <div className="flex items-center space-x-2">
                            <ArrowUpRight className="h-4 w-4 text-green-600" />
                            <span className="text-sm text-green-600 font-medium">+{clientStats.tasksGrowth}% from last month</span>
                          </div>
                        </div>
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                          <CheckCircle className="h-6 w-6 text-green-600" />
                        </div>
                      </div>
                      <div className="mt-4 text-xs text-muted-foreground">{clientStats.accuracy}% accuracy</div>
                    </CardContent>
                  </Card>

                  <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-cyan-50">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-muted-foreground">Current Rank</p>
                          <p className="text-3xl font-bold tracking-tight">#{clientStats.currentRank}</p>
                          <div className="flex items-center space-x-2">
                            <Crown className="h-4 w-4 text-blue-600" />
                            <span className="text-sm text-blue-600 font-medium">Top {clientStats.rankPercent}% of labelers</span>
                          </div>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                          <Trophy className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="mt-4 text-xs text-muted-foreground">{clientStats.level} level</div>
                    </CardContent>
                  </Card>

                  <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-violet-50">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-muted-foreground">Available Tasks</p>
                          <p className="text-3xl font-bold tracking-tight">47</p>
                          <div className="flex items-center space-x-2">
                            <Sparkles className="h-4 w-4 text-purple-600" />
                            <span className="text-sm text-purple-600 font-medium">Premium tasks available</span>
                          </div>
                        </div>
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                          <Activity className="h-6 w-6 text-purple-600" />
                        </div>
                      </div>
                      <div className="mt-4 text-xs text-muted-foreground">High-value projects</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {datasetTypes.map((type) => (
                    <Card key={type.name} className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 ${type.color} rounded-lg flex items-center justify-center`}>
                            <type.icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{type.name}</p>
                            <p className="text-xs text-muted-foreground">{type.count} projects</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
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
                  <div className="text-2xl font-light">1</div>
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
                  <div className="text-2xl font-light">1</div>
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
                  <div className="text-2xl font-light">1</div>
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
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" />
                            Export Data
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <ExternalLink className="mr-2 h-4 w-4" />
                            API Access
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Project
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
                </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "projects" && (
              <div className="space-y-6">
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
                            <div className="flex items-center space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "api" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Code className="h-5 w-5" />
                      <span>API Keys</span>
                    </CardTitle>
                    <CardDescription>Manage your API keys for programmatic access</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <p className="font-medium">Production API Key</p>
                        <p className="text-sm text-muted-foreground">sk-prod-•••••••••••••••••••••••••••••••••••••••••••</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Key className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Create New API Key
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Webhook className="h-5 w-5" />
                      <span>Webhooks</span>
                    </CardTitle>
                    <CardDescription>Configure webhooks for real-time notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="webhook-url">Webhook URL</Label>
                        <Input id="webhook-url" placeholder="https://your-api.com/webhooks" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Events</Label>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Switch id="project-completed" />
                              <Label htmlFor="project-completed" className="text-sm">Project Completed</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Switch id="task-updated" />
                              <Label htmlFor="task-updated" className="text-sm">Task Updated</Label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button>Save Webhook</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>API Documentation</CardTitle>
                    <CardDescription>Complete API reference and examples</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-medium mb-2">Quick Start</h4>
                        <pre className="text-sm bg-background p-3 rounded border overflow-x-auto">
{`curl -X GET https://api.label.africa/v1/projects \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                        </pre>
                      </div>
                      <Button variant="outline">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Full Documentation
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>Manage your account preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company-name">Company Name</Label>
                          <Input id="company-name" defaultValue="Acme Corp" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contact-email">Contact Email</Label>
                          <Input id="contact-email" defaultValue="admin@acmecorp.com" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description">Company Description</Label>
                        <Textarea id="description" placeholder="Tell us about your company..." />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>Configure how you receive updates</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">Receive project updates via email</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Push Notifications</Label>
                        <p className="text-sm text-muted-foreground">Browser notifications for urgent updates</p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Weekly Reports</Label>
                        <p className="text-sm text-muted-foreground">Summary of your projects and performance</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Security</CardTitle>
                    <CardDescription>Manage your account security</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline">
                      <Lock className="mr-2 h-4 w-4" />
                      Change Password
                    </Button>
                    <Button variant="outline">
                      <Shield className="mr-2 h-4 w-4" />
                      Enable Two-Factor Authentication
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "upload" && (
              <Card>
                <CardHeader>
                  <CardTitle>Upload Dataset</CardTitle>
                  <CardDescription>Upload your data for annotation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-12 text-center">
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Drop your files here</h3>
                    <p className="text-muted-foreground mb-4">or click to browse</p>
                    <Button>Choose Files</Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}