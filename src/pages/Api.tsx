import { Header } from "@/components/client/Header"
import { Footer } from "@/components/client/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Copy, Play, BookOpen, Zap, ArrowRight, Terminal, Database, Shield } from "lucide-react"

export default function Api() {
  const endpoints = [
    {
      method: "POST",
      path: "/api/v1/projects",
      description: "Create a new labeling project",
      category: "Projects"
    },
    {
      method: "GET",
      path: "/api/v1/projects",
      description: "List all projects",
      category: "Projects"
    },
    {
      method: "POST",
      path: "/api/v1/tasks",
      description: "Submit tasks for labeling",
      category: "Tasks"
    },
    {
      method: "GET",
      path: "/api/v1/tasks/{task_id}",
      description: "Get task status and results",
      category: "Tasks"
    },
    {
      method: "POST",
      path: "/api/v1/labelers",
      description: "Register a new labeler",
      category: "Labelers"
    },
    {
      method: "GET",
      path: "/api/v1/quality",
      description: "Get quality metrics",
      category: "Quality"
    }
  ]

  const codeExamples = [
    {
      title: "Create Project",
      language: "bash",
      code: `curl -X POST https://api.lable.com/v1/projects \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Image Classification",
    "type": "image_classification",
    "description": "Classify images into categories"
  }'`
    },
    {
      title: "Submit Tasks",
      language: "python",
      code: `import requests

        url = "https://api.lable.com/v1/tasks"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

data = {
    "project_id": "proj_123",
    "tasks": [
        {
            "image_url": "https://example.com/image1.jpg",
            "instructions": "Classify this image"
        }
    ]
}

response = requests.post(url, headers=headers, json=data)
print(response.json())`
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Code className="w-4 h-4 mr-2" />
            API Reference
          </div>
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                              Lable
            </span>
            <br />
            <span className="text-foreground">API Documentation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Integrate Lable's data labeling services into your applications with our comprehensive REST API.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:bg-primary/90">
              <Terminal className="w-4 h-4 mr-2" />
              Get API Key
            </Button>
            <Button variant="outline" size="lg">
              <BookOpen className="w-4 h-4 mr-2" />
              View SDKs
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light mb-6">Quick Start</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Get up and running with Lable's API in minutes. Our RESTful API provides 
                everything you need to integrate data labeling into your workflow.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">1</span>
                  </div>
                  <span className="text-foreground">Get your API key from the dashboard</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">2</span>
                  </div>
                  <span className="text-foreground">Create a new project</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">3</span>
                  </div>
                  <span className="text-foreground">Submit tasks for labeling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">4</span>
                  </div>
                  <span className="text-foreground">Retrieve labeled data</span>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-lg p-6 border border-border">
              <h3 className="text-lg font-semibold mb-4">Base URL</h3>
              <div className="bg-muted p-4 rounded-md font-mono text-sm">
                https://api.lable.com/v1
              </div>
              <h3 className="text-lg font-semibold mb-4 mt-6">Authentication</h3>
              <div className="bg-muted p-4 rounded-md font-mono text-sm">
                Authorization: Bearer YOUR_API_KEY
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">API Endpoints</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete reference of all available API endpoints
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {endpoints.map((endpoint, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Badge 
                        variant={endpoint.method === "GET" ? "secondary" : "default"}
                        className="mb-2"
                      >
                        {endpoint.method}
                      </Badge>
                      <h3 className="font-mono text-sm bg-muted p-2 rounded">
                        {endpoint.path}
                      </h3>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {endpoint.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {endpoint.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">Code Examples</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready-to-use code snippets in multiple languages
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {codeExamples.map((example, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">{example.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {example.language}
                    </Badge>
                  </div>
                  <div className="bg-background rounded-md p-4 border border-border">
                    <pre className="text-sm overflow-x-auto">
                      <code className="text-muted-foreground">
                        {example.code}
                      </code>
                    </pre>
                  </div>
                  <Button variant="ghost" size="sm" className="mt-4">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Code
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">API Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build powerful AI applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-time Updates</h3>
              <p className="text-muted-foreground text-sm">
                Get instant notifications when tasks are completed
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
              <p className="text-muted-foreground text-sm">
                Bank-level encryption and compliance standards
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Scalable Infrastructure</h3>
              <p className="text-muted-foreground text-sm">
                Handle millions of tasks with 99.9% uptime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-light mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers using Lable's API to build the next generation of AI applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:bg-primary/90">
              <Play className="w-4 h-4 mr-2" />
              Start Building
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 