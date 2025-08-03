import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Code, Copy, ExternalLink, BookOpen, Zap, Shield, Database, ArrowRight, CheckCircle, AlertCircle, Info } from "lucide-react"
import { useState } from "react"

export default function Documentation() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const codeBlocks = {
          auth: `curl -X POST https://api.lable.com/v1/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{
    "api_key": "your_api_key_here",
    "client_id": "your_client_id"
  }'`,
    
          createProject: `curl -X POST https://api.lable.com/v1/projects \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "African Wildlife Classification",
    "type": "image_classification",
    "description": "Classify images of African wildlife species",
    "instructions": "Please identify the animal species in each image",
    "labels": ["elephant", "lion", "giraffe", "zebra", "rhino"],
    "quality_threshold": 0.95,
    "metadata": {
      "priority": "high",
      "deadline": "2024-02-01T00:00:00Z"
    }
  }'`,
    
          uploadTasks: `curl -X POST https://api.lable.com/v1/projects/proj_123/tasks \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -F "file=@wildlife_images.zip" \\
  -F "metadata={\\"batch_size\\": 100, \\"priority\\": \\"high\\"}"`,
    
          getResults: `curl -X GET https://api.lable.com/v1/projects/proj_123/results \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Accept: application/json"`,
    
    webhook: `{
  "event": "task.completed",
  "project_id": "proj_123",
  "task_id": "task_456",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "annotations": [...],
    "quality_score": 0.98,
    "labeler_id": "labeler_789"
  }
}`
  }

  const features = [
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Get instant notifications when tasks are completed via webhooks"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption, SOC 2 compliance, and data residency options"
    },
    {
      icon: Database,
      title: "High Availability",
      description: "99.9% uptime SLA with automatic failover and backup systems"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Multi-labeler validation and automated quality checks"
    }
  ]

  const sdks = [
    { name: "Python", version: "v2.1.0", badge: "Popular" },
    { name: "JavaScript", version: "v1.8.2", badge: "Latest" },
    { name: "Java", version: "v1.5.0", badge: "Stable" },
    { name: "Go", version: "v1.2.1", badge: "New" }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background/95 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4 mr-2" />
                API Documentation
              </div>
              <h1 className="text-5xl md:text-7xl font-light text-foreground mb-6">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Lable
                </span>
                <br />
                <span className="text-foreground">API Reference</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Integrate high-quality data labeling into your AI pipeline with our powerful REST API. 
                Grow your machine learning projects with African talent and enterprise-grade infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="bg-gradient-primary hover:bg-primary/90">
                  <Zap className="mr-2 h-5 w-5" />
                  Get API Key
                </Button>
                <Button variant="outline" size="lg">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  OpenAPI Spec
                </Button>
                <Button variant="outline" size="lg">
                  <Code className="mr-2 h-5 w-5" />
                  SDKs
                </Button>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50ms</div>
                  <div className="text-sm text-muted-foreground">Avg Response</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">SOC 2</div>
                  <div className="text-sm text-muted-foreground">Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/20">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SDKs Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light mb-4">Official SDKs</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get started quickly with our official SDKs and libraries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sdks.map((sdk, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">{sdk.name}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {sdk.badge}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      Version {sdk.version}
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Install SDK
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Navigation */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <Card className="border-0 bg-gradient-to-br from-background to-muted/20">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        Quick Navigation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <a href="#authentication" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Authentication
                      </a>
                      <a href="#projects" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Projects
                      </a>
                      <a href="#tasks" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Tasks & Data
                      </a>
                      <a href="#results" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Results & Export
                      </a>
                      <a href="#webhooks" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Webhooks
                      </a>
                      <a href="#errors" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Error Handling
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3 space-y-8">
                <Tabs defaultValue="authentication" className="w-full">
                  <TabsList className="grid w-full grid-cols-6">
                    <TabsTrigger value="authentication">Auth</TabsTrigger>
                    <TabsTrigger value="projects">Projects</TabsTrigger>
                    <TabsTrigger value="tasks">Tasks</TabsTrigger>
                    <TabsTrigger value="results">Results</TabsTrigger>
                    <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
                    <TabsTrigger value="errors">Errors</TabsTrigger>
                  </TabsList>

                  <TabsContent value="authentication" className="space-y-6 mt-6">
                    <Card className="border-0 bg-gradient-to-br from-background to-muted/20">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Shield className="w-5 h-5 mr-2" />
                          Authentication
                        </CardTitle>
                        <CardDescription>
                          Secure your API requests with our token-based authentication system
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6">
                          <h4 className="font-semibold mb-4 flex items-center">
                            <Info className="w-4 h-4 mr-2 text-primary" />
                            Getting Started
                          </h4>
                          <p className="text-muted-foreground mb-4">
                            All API requests require authentication using an access token. 
                            Get your API key from the dashboard and exchange it for an access token.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">1. Get Access Token</h4>
                          <div className="bg-card border rounded-lg">
                            <div className="flex items-center justify-between p-4 border-b">
                              <div className="flex items-center space-x-2">
                                <Code className="h-4 w-4" />
                                <span className="text-sm font-medium">Exchange API Key for Token</span>
                              </div>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => copyToClipboard(codeBlocks.auth, 'auth')}
                              >
                                <Copy className="h-4 w-4" />
                                {copiedCode === 'auth' ? 'Copied!' : ''}
                              </Button>
                            </div>
                            <div className="p-4">
                              <pre className="text-sm text-muted-foreground overflow-x-auto">
                                {codeBlocks.auth}
                              </pre>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">2. Use Access Token</h4>
                          <p className="text-muted-foreground mb-4">
                            Include the access token in the Authorization header for all subsequent requests:
                          </p>
                          <div className="bg-muted p-4 rounded-md font-mono text-sm">
                            Authorization: Bearer YOUR_ACCESS_TOKEN
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-6">
                          <h4 className="font-semibold mb-4 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-2 text-yellow-500" />
                            Security Best Practices
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Store API keys securely and never commit them to version control</li>
                            <li>• Rotate your API keys regularly</li>
                            <li>• Use environment variables for configuration</li>
                            <li>• Monitor API usage and set up alerts for unusual activity</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="projects" className="space-y-6 mt-6">
                    <Card className="border-0 bg-gradient-to-br from-background to-muted/20">
                      <CardHeader>
                        <CardTitle>Project Management</CardTitle>
                        <CardDescription>
                          Create and manage your data labeling projects with full control over settings and quality
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Badge variant="secondary" className="mr-2">POST</Badge>
                            /projects
                          </h4>
                          <p className="text-muted-foreground mb-4">Create a new labeling project</p>
                          
                          <div className="bg-card border rounded-lg">
                            <div className="flex items-center justify-between p-4 border-b">
                              <div className="flex items-center space-x-2">
                                <Code className="h-4 w-4" />
                                <span className="text-sm font-medium">Create Project Example</span>
                              </div>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => copyToClipboard(codeBlocks.createProject, 'createProject')}
                              >
                                <Copy className="h-4 w-4" />
                                {copiedCode === 'createProject' ? 'Copied!' : ''}
                              </Button>
                            </div>
                            <div className="p-4">
                              <pre className="text-sm text-muted-foreground overflow-x-auto">
                                {codeBlocks.createProject}
                              </pre>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-semibold mb-2">Project Types</h5>
                            <div className="space-y-2">
                              <Badge variant="outline">image_classification</Badge>
                              <Badge variant="outline">object_detection</Badge>
                              <Badge variant="outline">text_classification</Badge>
                              <Badge variant="outline">audio_transcription</Badge>
                              <Badge variant="outline">video_labeling</Badge>
                            </div>
                          </div>
                          <div>
                            <h5 className="font-semibold mb-2">Quality Settings</h5>
                            <div className="space-y-2 text-sm text-muted-foreground">
                              <div>• Minimum quality threshold: 0.90-0.99</div>
                              <div>• Multi-labeler validation</div>
                              <div>• Automated quality checks</div>
                              <div>• Human review for edge cases</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="tasks" className="space-y-6 mt-6">
                    <Card className="border-0 bg-gradient-to-br from-background to-muted/20">
                      <CardHeader>
                        <CardTitle>Task Management</CardTitle>
                        <CardDescription>
                          Upload data and manage labeling tasks with batch processing and priority controls
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Badge variant="secondary" className="mr-2">POST</Badge>
                            /projects/{"{project_id}"}/tasks
                          </h4>
                          <p className="text-muted-foreground mb-4">Upload data for labeling</p>
                          
                          <div className="bg-card border rounded-lg">
                            <div className="flex items-center justify-between p-4 border-b">
                              <div className="flex items-center space-x-2">
                                <Code className="h-4 w-4" />
                                <span className="text-sm font-medium">Upload Tasks Example</span>
                              </div>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => copyToClipboard(codeBlocks.uploadTasks, 'uploadTasks')}
                              >
                                <Copy className="h-4 w-4" />
                                {copiedCode === 'uploadTasks' ? 'Copied!' : ''}
                              </Button>
                            </div>
                            <div className="p-4">
                              <pre className="text-sm text-muted-foreground overflow-x-auto">
                                {codeBlocks.uploadTasks}
                              </pre>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-semibold mb-2">Supported Formats</h5>
                            <div className="space-y-2 text-sm text-muted-foreground">
                              <div>• Images: JPG, PNG, WebP, TIFF</div>
                              <div>• Videos: MP4, AVI, MOV</div>
                              <div>• Audio: MP3, WAV, FLAC</div>
                              <div>• Text: TXT, CSV, JSON</div>
                              <div>• Archives: ZIP, TAR.GZ</div>
                            </div>
                          </div>
                          <div>
                            <h5 className="font-semibold mb-2">Batch Processing</h5>
                            <div className="space-y-2 text-sm text-muted-foreground">
                              <div>• Upload up to 10,000 files per batch</div>
                              <div>• Automatic file validation</div>
                              <div>• Progress tracking and notifications</div>
                              <div>• Retry failed uploads automatically</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="results" className="space-y-6 mt-6">
                    <Card className="border-0 bg-gradient-to-br from-background to-muted/20">
                      <CardHeader>
                        <CardTitle>Results & Export</CardTitle>
                        <CardDescription>
                          Retrieve completed annotations and export data in multiple formats
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Badge variant="outline" className="mr-2">GET</Badge>
                            /projects/{"{project_id}"}/results
                          </h4>
                          <p className="text-muted-foreground mb-4">Get completed annotations</p>
                          
                          <div className="bg-card border rounded-lg">
                            <div className="flex items-center justify-between p-4 border-b">
                              <div className="flex items-center space-x-2">
                                <Code className="h-4 w-4" />
                                <span className="text-sm font-medium">Get Results Example</span>
                              </div>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => copyToClipboard(codeBlocks.getResults, 'getResults')}
                              >
                                <Copy className="h-4 w-4" />
                                {copiedCode === 'getResults' ? 'Copied!' : ''}
                              </Button>
                            </div>
                            <div className="p-4">
                              <pre className="text-sm text-muted-foreground overflow-x-auto">
                                {codeBlocks.getResults}
                              </pre>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-semibold mb-2">Export Formats</h5>
                            <div className="space-y-2">
                              <Badge variant="outline">JSON</Badge>
                              <Badge variant="outline">CSV</Badge>
                              <Badge variant="outline">COCO</Badge>
                              <Badge variant="outline">YOLO</Badge>
                              <Badge variant="outline">Pascal VOC</Badge>
                            </div>
                          </div>
                          <div>
                            <h5 className="font-semibold mb-2">Quality Metrics</h5>
                            <div className="space-y-2 text-sm text-muted-foreground">
                              <div>• Per-task quality scores</div>
                              <div>• Labeler performance metrics</div>
                              <div>• Confidence intervals</div>
                              <div>• Disagreement analysis</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="webhooks" className="space-y-6 mt-6">
                    <Card className="border-0 bg-gradient-to-br from-background to-muted/20">
                      <CardHeader>
                        <CardTitle>Webhooks</CardTitle>
                        <CardDescription>
                          Receive real-time notifications when events occur in your projects
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-6">
                          <h4 className="font-semibold mb-4 flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                            Available Events
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="font-medium">task.completed</div>
                              <div className="text-muted-foreground">When a task is finished</div>
                            </div>
                            <div>
                              <div className="font-medium">project.updated</div>
                              <div className="text-muted-foreground">When project settings change</div>
                            </div>
                            <div>
                              <div className="font-medium">quality.failed</div>
                              <div className="text-muted-foreground">When quality checks fail</div>
                            </div>
                            <div>
                              <div className="font-medium">export.ready</div>
                              <div className="text-muted-foreground">When export is complete</div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Webhook Payload Example</h4>
                          <div className="bg-card border rounded-lg">
                            <div className="flex items-center justify-between p-4 border-b">
                              <div className="flex items-center space-x-2">
                                <Code className="h-4 w-4" />
                                <span className="text-sm font-medium">Task Completed Event</span>
                              </div>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => copyToClipboard(codeBlocks.webhook, 'webhook')}
                              >
                                <Copy className="h-4 w-4" />
                                {copiedCode === 'webhook' ? 'Copied!' : ''}
                              </Button>
                            </div>
                            <div className="p-4">
                              <pre className="text-sm text-muted-foreground overflow-x-auto">
                                {codeBlocks.webhook}
                              </pre>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="errors" className="space-y-6 mt-6">
                    <Card className="border-0 bg-gradient-to-br from-background to-muted/20">
                      <CardHeader>
                        <CardTitle>Error Handling</CardTitle>
                        <CardDescription>
                          Understand and handle API errors gracefully
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-semibold mb-4">Common Error Codes</h5>
                            <div className="space-y-3">
                              <div className="bg-red-500/10 rounded-lg p-3">
                                <div className="font-medium text-red-600">401 Unauthorized</div>
                                <div className="text-sm text-muted-foreground">Invalid or expired token</div>
                              </div>
                              <div className="bg-yellow-500/10 rounded-lg p-3">
                                <div className="font-medium text-yellow-600">429 Too Many Requests</div>
                                <div className="text-sm text-muted-foreground">Rate limit exceeded</div>
                              </div>
                              <div className="bg-red-500/10 rounded-lg p-3">
                                <div className="font-medium text-red-600">400 Bad Request</div>
                                <div className="text-sm text-muted-foreground">Invalid request parameters</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h5 className="font-semibold mb-4">Best Practices</h5>
                            <div className="space-y-3 text-sm text-muted-foreground">
                              <div>• Implement exponential backoff for retries</div>
                              <div>• Log all API errors for debugging</div>
                              <div>• Handle rate limits gracefully</div>
                              <div>• Validate responses before processing</div>
                              <div>• Use webhooks for real-time updates</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-light mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of developers using Lable's API to build the next generation of AI applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:bg-primary/90">
                <Zap className="w-5 h-5 mr-2" />
                Get API Key
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                View SDKs
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}