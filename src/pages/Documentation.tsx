import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Code, Copy, ExternalLink } from "lucide-react"

export default function Documentation() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4">API Documentation</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                LabelAfrica API
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Integrate high-quality data labeling into your AI pipeline with our powerful REST API.
                Scale your machine learning projects with African talent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:bg-primary/90">
                  Get API Key
                </Button>
                <Button variant="outline" size="lg">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  OpenAPI Spec
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Navigation */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Navigation</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <a href="#getting-started" className="block text-sm text-muted-foreground hover:text-foreground">
                      Getting Started
                    </a>
                    <a href="#authentication" className="block text-sm text-muted-foreground hover:text-foreground">
                      Authentication
                    </a>
                    <a href="#endpoints" className="block text-sm text-muted-foreground hover:text-foreground">
                      API Endpoints
                    </a>
                    <a href="#examples" className="block text-sm text-muted-foreground hover:text-foreground">
                      Code Examples
                    </a>
                    <a href="#webhooks" className="block text-sm text-muted-foreground hover:text-foreground">
                      Webhooks
                    </a>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3 space-y-8">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="projects">Projects</TabsTrigger>
                    <TabsTrigger value="tasks">Tasks</TabsTrigger>
                    <TabsTrigger value="results">Results</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-6 mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Getting Started</CardTitle>
                        <CardDescription>
                          Learn how to integrate with the LabelAfrica API in minutes
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Base URL</h4>
                          <div className="bg-muted p-3 rounded-md font-mono text-sm">
                            https://api.labelafrica.com/v1
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Authentication</h4>
                          <p className="text-muted-foreground mb-2">
                            All API requests require an API key in the Authorization header:
                          </p>
                          <div className="bg-muted p-3 rounded-md font-mono text-sm">
                            Authorization: Bearer YOUR_API_KEY
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Quick Example</h4>
                          <div className="bg-card border rounded-md">
                            <div className="flex items-center justify-between p-3 border-b">
                              <div className="flex items-center space-x-2">
                                <Code className="h-4 w-4" />
                                <span className="text-sm font-medium">Create Project</span>
                              </div>
                              <Button variant="ghost" size="sm">
                                <Copy className="h-4 w-4" />
                              </Button>
                            </div>
                            <div className="p-3">
                              <pre className="text-sm text-muted-foreground overflow-x-auto">
{`curl -X POST https://api.labelafrica.com/v1/projects \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Image Classification Project",
    "type": "image_classification",
    "description": "Classify images of African wildlife"
  }'`}
                              </pre>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="projects" className="space-y-6 mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Project Management</CardTitle>
                        <CardDescription>
                          Create and manage your labeling projects
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Badge variant="secondary" className="mr-2">POST</Badge>
                            /projects
                          </h4>
                          <p className="text-muted-foreground mb-4">Create a new labeling project</p>
                          
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-medium mb-2">Request Body</h5>
                              <div className="bg-muted p-3 rounded-md font-mono text-sm">
{`{
  "name": "string",
  "type": "image_classification | object_detection | text_classification",
  "description": "string",
  "instructions": "string",
  "labels": ["label1", "label2"],
  "quality_threshold": 0.95
}`}
                              </div>
                            </div>
                            
                            <div>
                              <h5 className="font-medium mb-2">Response</h5>
                              <div className="bg-muted p-3 rounded-md font-mono text-sm">
{`{
  "id": "proj_123456",
  "name": "Image Classification Project",
  "status": "active",
  "created_at": "2024-01-01T00:00:00Z"
}`}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Badge variant="outline" className="mr-2">GET</Badge>
                            /projects
                          </h4>
                          <p className="text-muted-foreground">List all your projects</p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Badge variant="outline" className="mr-2">GET</Badge>
                            /projects/{"{id}"}
                          </h4>
                          <p className="text-muted-foreground">Get project details</p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="tasks" className="space-y-6 mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Task Management</CardTitle>
                        <CardDescription>
                          Upload data and manage labeling tasks
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Badge variant="secondary" className="mr-2">POST</Badge>
                            /projects/{"{project_id}"}/tasks
                          </h4>
                          <p className="text-muted-foreground mb-4">Upload data for labeling</p>
                          
                          <div className="bg-muted p-3 rounded-md font-mono text-sm">
{`curl -X POST https://api.labelafrica.com/v1/projects/proj_123/tasks \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "file=@image.jpg" \\
  -F "metadata={\"priority\": \"high\"}"`}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Badge variant="outline" className="mr-2">GET</Badge>
                            /projects/{"{project_id}"}/tasks
                          </h4>
                          <p className="text-muted-foreground">List tasks in a project</p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="results" className="space-y-6 mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Results & Export</CardTitle>
                        <CardDescription>
                          Retrieve completed annotations and export data
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Badge variant="outline" className="mr-2">GET</Badge>
                            /projects/{"{project_id}"}/results
                          </h4>
                          <p className="text-muted-foreground mb-4">Get completed annotations</p>
                          
                          <div className="bg-muted p-3 rounded-md font-mono text-sm">
{`{
  "results": [
    {
      "task_id": "task_123",
      "annotations": [
        {
          "label": "elephant",
          "confidence": 0.98,
          "coordinates": {"x": 100, "y": 150, "width": 200, "height": 300}
        }
      ],
      "quality_score": 0.96,
      "completed_at": "2024-01-01T12:00:00Z"
    }
  ]
}`}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Badge variant="outline" className="mr-2">GET</Badge>
                            /projects/{"{project_id}"}/export
                          </h4>
                          <p className="text-muted-foreground">Export all project data in various formats (JSON, CSV, COCO)</p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}