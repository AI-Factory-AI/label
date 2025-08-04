import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Users, 
  FileText, 
  BarChart3,
  Settings,
  Shield,
  Globe,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertTriangle,
  DollarSign,
  Activity,
  Database,
  UserCheck,
  Search,
  Filter,
  Download,
  Plus,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Star,
  MapPin,
  Calendar,
  Zap
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

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data
  const platformStats = {
    totalUsers: 12847,
    activeProjects: 342,
    totalAnnotations: 2847392,
    monthlyRevenue: 847390,
    avgAccuracy: 98.7,
    completionRate: 94.2
  }

  const recentProjects = [
    {
      id: "proj_001",
      name: "Wildlife Conservation Dataset",
      client: "WWF East Africa",
      type: "Image Classification",
      status: "active",
      progress: 87,
      labelers: 45,
      accuracy: 98.9,
      budget: 25000,
      deadline: "2024-01-15"
    },
    {
      id: "proj_002", 
      name: "Agricultural Crop Disease Detection",
      client: "AgriTech Solutions",
      type: "Object Detection",
      status: "review",
      progress: 100,
      labelers: 23,
      accuracy: 99.4,
      budget: 18500,
      deadline: "2024-01-10"
    },
    {
      id: "proj_003",
      name: "Swahili Language Model Training",
      client: "Language AI Corp",
      type: "Text Annotation",
      status: "active",
      progress: 34,
      labelers: 67,
      accuracy: 97.8,
      budget: 45000,
      deadline: "2024-02-28"
    }
  ]

  const topLabelers = [
    { name: "Amara Okonkwo", country: "Nigeria", tasks: 2847, accuracy: 99.2, earnings: 4850 },
    { name: "Kofi Asante", country: "Ghana", tasks: 2634, accuracy: 98.9, earnings: 4620 },
    { name: "Zara Mwangi", country: "Kenya", tasks: 2489, accuracy: 99.1, earnings: 4380 },
    { name: "Fatima Al-Rashid", country: "Egypt", tasks: 2156, accuracy: 98.7, earnings: 3890 }
  ]

  const menuItems = [
    { name: "Overview", icon: BarChart3, value: "overview" },
    { name: "Projects", icon: FileText, value: "projects" },
    { name: "Users", icon: Users, value: "users" },
    { name: "Analytics", icon: TrendingUp, value: "analytics" },
    { name: "Quality Control", icon: Shield, value: "quality" },
    { name: "Financials", icon: DollarSign, value: "financials" },
    { name: "Settings", icon: Settings, value: "settings" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "text-green-600 bg-green-50"
      case "review": return "text-blue-600 bg-blue-50"
      case "completed": return "text-gray-600 bg-gray-50"
      case "paused": return "text-orange-600 bg-orange-50"
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
                  <div className="text-xs text-muted-foreground">Admin Portal</div>
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

            {/* Admin Profile */}
            <div className="mt-auto p-4 border-t border-border">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">AD</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Admin User</p>
                  <p className="text-xs text-muted-foreground">admin@label.africa</p>
                </div>
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
                <h1 className="text-xl font-semibold">Admin Dashboard</h1>
                <p className="text-sm text-muted-foreground">Manage platform operations</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export Data
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
                {/* Platform Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                        <Users className="h-4 w-4 text-blue-600" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{platformStats.totalUsers.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">+12% from last month</div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                        <Activity className="h-4 w-4 text-green-600" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{platformStats.activeProjects}</div>
                      <div className="text-xs text-muted-foreground">+8% from last month</div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-purple-500">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium">Annotations</CardTitle>
                        <Database className="h-4 w-4 text-purple-600" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{(platformStats.totalAnnotations / 1000000).toFixed(1)}M</div>
                      <div className="text-xs text-muted-foreground">+23% from last month</div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-orange-500">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                        <DollarSign className="h-4 w-4 text-orange-600" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">${(platformStats.monthlyRevenue / 1000).toFixed(0)}K</div>
                      <div className="text-xs text-muted-foreground">+18% from last month</div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-teal-500">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium">Avg Accuracy</CardTitle>
                        <Shield className="h-4 w-4 text-teal-600" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{platformStats.avgAccuracy}%</div>
                      <div className="text-xs text-muted-foreground">+0.3% from last month</div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-500">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
                        <CheckCircle className="h-4 w-4 text-red-600" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{platformStats.completionRate}%</div>
                      <div className="text-xs text-muted-foreground">+2.1% from last month</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Projects */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Recent Projects</CardTitle>
                        <CardDescription>Latest data annotation projects</CardDescription>
                      </div>
                      <Button variant="outline" size="sm">View All</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentProjects.map((project) => (
                        <div key={project.id} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                              <FileText className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-medium">{project.name}</h3>
                              <p className="text-sm text-muted-foreground">{project.client}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-6">
                            <div className="text-right">
                              <p className="text-sm font-medium">{project.labelers} labelers</p>
                              <p className="text-xs text-muted-foreground">{project.accuracy}% accuracy</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium">${project.budget.toLocaleString()}</p>
                              <p className="text-xs text-muted-foreground">Budget</p>
                            </div>
                            <div className="w-20">
                              <Progress value={project.progress} className="h-2" />
                              <p className="text-xs text-muted-foreground mt-1">{project.progress}%</p>
                            </div>
                            <Badge className={`${getStatusColor(project.status)} border-0`}>
                              {project.status}
                            </Badge>
                            <Button variant="ghost" size="sm">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Top Labelers */}
                <Card>
                  <CardHeader>
                    <CardTitle>Top Performing Labelers</CardTitle>
                    <CardDescription>Best labelers across Africa this month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topLabelers.map((labeler, index) => (
                        <div key={labeler.name} className="flex items-center justify-between p-3 rounded-lg border">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                index === 0 ? 'bg-yellow-100 text-yellow-800' :
                                index === 1 ? 'bg-gray-100 text-gray-800' :
                                index === 2 ? 'bg-orange-100 text-orange-800' :
                                'bg-muted text-muted-foreground'
                              }`}>
                                {index + 1}
                              </div>
                              {index < 3 && <Star className="h-4 w-4 text-yellow-500" />}
                            </div>
                            <div>
                              <p className="font-medium">{labeler.name}</p>
                              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <MapPin className="h-3 w-3" />
                                <span>{labeler.country}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-6 text-sm">
                            <div className="text-right">
                              <p className="font-medium">{labeler.tasks.toLocaleString()}</p>
                              <p className="text-muted-foreground">Tasks</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">{labeler.accuracy}%</p>
                              <p className="text-muted-foreground">Accuracy</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">${labeler.earnings}</p>
                              <p className="text-muted-foreground">Earned</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "projects" && (
              <Card>
                <CardHeader>
                  <CardTitle>All Projects</CardTitle>
                  <CardDescription>Manage all data annotation projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search projects..." className="pl-10" />
                    </div>
                    <Button variant="outline">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {recentProjects.map((project) => (
                      <div key={project.id} className="flex items-center justify-between p-4 rounded-lg border">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <FileText className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">{project.name}</h3>
                            <p className="text-sm text-muted-foreground">{project.client} • {project.type}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Add other tab content as needed */}
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}