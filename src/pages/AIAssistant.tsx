
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { 
  SendHorizonal, 
  Sparkles, 
  Calendar, 
  Wand2, 
  Lightbulb, 
  MessageSquare, 
  PenLine, 
  AlertCircle, 
  ThumbsUp, 
  RefreshCw,
  ChevronDown
} from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";

const AIAssistant = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");
  const [analysisResults, setAnalysisResults] = useState<null | {
    sentiment: string;
    tone: string;
    engagement: number;
    suggestions: string[];
  }>(null);

  const contentTypes = [
    {
      name: "Blog Post",
      icon: PenLine,
      promptExamples: [
        "Write a blog post about emerging trends in remote work technology",
        "Create a step-by-step guide for optimizing social media profiles",
        "Draft a thought leadership article on sustainability in business"
      ]
    },
    {
      name: "Social Media",
      icon: MessageSquare,
      promptExamples: [
        "Create a LinkedIn post announcing our new product launch",
        "Write a Twitter thread about industry insights",
        "Draft an Instagram caption highlighting team achievements"
      ]
    },
    {
      name: "Insights",
      icon: Lightbulb,
      promptExamples: [
        "Analyze our content performance and suggest improvements",
        "What are the best posting times for our audience demographic?",
        "Suggest content themes based on current industry trends"
      ]
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) {
      toast({
        title: "Empty prompt",
        description: "Please enter a prompt to generate content.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // Simulate AI content generation (would be a real API call in production)
    setTimeout(() => {
      // Generate demo content based on the prompt
      let content = "";
      
      if (prompt.toLowerCase().includes("blog post")) {
        content = `# The Future of Remote Work Technology\n\nAs organizations continue to adapt to the evolving workplace landscape, technology plays a crucial role in enabling productive remote work. Here are the key trends shaping the future of remote collaboration:\n\n## 1. AI-Powered Productivity Tools\n\nArtificial intelligence is revolutionizing how remote teams work together. From smart scheduling assistants to automated workflow management, AI tools are helping teams focus on high-value tasks while reducing administrative burden.\n\n## 2. Virtual Reality Workspaces\n\nVR technology is creating immersive collaboration experiences that go beyond video calls. Virtual offices allow team members to feel present together, facilitating the spontaneous interactions that traditional remote work often lacks.\n\n## 3. Asynchronous Collaboration Platforms\n\nThe future of remote work isn't just about replicating office experiences online—it's about embracing new ways of working that offer greater flexibility. Asynchronous collaboration tools enable teams across time zones to contribute on their own schedules while maintaining project momentum.`;
      } else if (prompt.toLowerCase().includes("social media")) {
        content = `📢 Exciting News: We're thrilled to announce the launch of our new product line! After months of development and customer feedback, we've created something that truly addresses the challenges our users face every day.\n\n🔍 What makes it special:\n- Intuitive design that reduces learning curve by 45%\n- Advanced automation features that save 5+ hours weekly\n- Seamless integration with your existing workflow\n- Enterprise-grade security\n\nEarly adopters are already seeing incredible results. @TechCorp reported a 32% productivity increase within the first month!\n\n🚀 Limited special pricing for our network - click the link in bio to learn more.\n\n#ProductLaunch #Innovation #Productivity`;
      } else if (prompt.toLowerCase().includes("analysis") || prompt.toLowerCase().includes("insights")) {
        content = `Based on the analysis of your recent content performance, here are key insights and recommendations:\n\n1. Your audience engages most actively between 9-11am and 7-8pm on weekdays\n\n2. Posts with visual elements (infographics, charts) receive 37% higher engagement than text-only posts\n\n3. Content addressing industry challenges and providing actionable solutions performs consistently well\n\n4. Your LinkedIn audience responds best to longer, thought leadership content while Twitter and Instagram users prefer concise, visually-driven posts\n\nRecommended content themes for next month:\n- Industry trend analysis (particularly in remote work technologies)\n- Customer success stories with measurable outcomes\n- Behind-the-scenes team content\n- Quick tips and actionable advice series`;
      } else {
        content = `Here's a draft based on your prompt:\n\n"${prompt}"\n\nThis is where AI-generated content would appear based on your specific request. In a fully implemented system, this would analyze your brand voice, target audience, and content history to generate highly relevant, on-brand content tailored to your specific needs and marketing objectives.`;
      }
      
      setGeneratedContent(content);
      
      // Simulate content analysis results
      setAnalysisResults({
        sentiment: "Positive",
        tone: "Professional, Informative",
        engagement: 85,
        suggestions: [
          "Add a clear call-to-action at the end",
          "Include relevant statistics to support key points",
          "Consider adding more industry-specific keywords",
          "Break up longer paragraphs for better readability"
        ]
      });
      
      setLoading(false);
    }, 2000);
  };

  const handleUseExample = (example: string) => {
    setPrompt(example);
  };

  const handleRegenerate = () => {
    if (prompt) {
      handleSubmit(new Event('submit') as unknown as React.FormEvent);
    }
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Content Assistant</h1>
          <p className="text-muted-foreground">
            Generate, analyze, and optimize content with AI
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Content Generator</CardTitle>
                <CardDescription>
                  Use AI to create high-quality content for your marketing channels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex gap-4">
                    <Select defaultValue="text">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Content type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="text">Text Content</SelectItem>
                        <SelectItem value="image">Image Prompt</SelectItem>
                        <SelectItem value="video">Video Script</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select defaultValue="professional">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Tone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="friendly">Friendly</SelectItem>
                        <SelectItem value="formal">Formal</SelectItem>
                        <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Textarea
                      placeholder="Enter your prompt or content request..."
                      className="min-h-[150px]"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                    />
                    <div className="text-xs text-muted-foreground mt-1">
                      Tip: Be specific about your audience, goals, and key points.
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-2">
                    <Button 
                      type="submit" 
                      className="gap-2"
                      disabled={loading || !prompt.trim()}
                    >
                      {loading ? (
                        <>
                          <div className="h-4 w-4 rounded-full border-2 border-current border-r-transparent animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Sparkles className="h-4 w-4" />
                          Generate Content
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            
            {generatedContent && (
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Generated Content</CardTitle>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="gap-1"
                        onClick={handleRegenerate}
                      >
                        <RefreshCw className="h-3.5 w-3.5" />
                        Regenerate
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="gap-1"
                        onClick={() => {
                          navigator.clipboard.writeText(generatedContent);
                          toast({
                            title: "Content copied",
                            description: "The generated content has been copied to your clipboard.",
                          });
                        }}
                      >
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 2V1H10V2H5ZM4.75 0C4.33579 0 4 0.335786 4 0.75V1H3.5C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V2.5C13 1.67157 12.3284 1 11.5 1H11V0.75C11 0.335786 10.6642 0 10.25 0H4.75ZM11 2V2.25C11 2.66421 10.6642 3 10.25 3H4.75C4.33579 3 4 2.66421 4 2.25V2H3.5C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V2.5C12 2.22386 11.7761 2 11.5 2H11Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                        </svg>
                        Copy
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="whitespace-pre-wrap bg-muted/30 rounded-md p-4">
                    {generatedContent}
                  </div>
                </CardContent>
              </Card>
            )}
            
            {analysisResults && (
              <Card>
                <CardHeader>
                  <CardTitle>Content Analysis</CardTitle>
                  <CardDescription>
                    AI-powered insights about your generated content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-3 mb-6">
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Sentiment</div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                          {analysisResults.sentiment}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Tone</div>
                      <div className="flex flex-wrap gap-2">
                        {analysisResults.tone.split(", ").map((tone) => (
                          <Badge key={tone} variant="outline">
                            {tone}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Predicted Engagement</div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{analysisResults.engagement}%</span>
                        <div className="w-full bg-muted rounded-full h-2 max-w-[100px]">
                          <div className="bg-primary h-2 rounded-full" style={{ width: `${analysisResults.engagement}%` }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Improvement Suggestions</h4>
                    <div className="space-y-2">
                      {analysisResults.suggestions.map((suggestion, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 text-primary">
                            <Lightbulb className="h-4 w-4" />
                          </div>
                          <p className="text-sm">{suggestion}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-6">
                  <Button variant="outline" size="sm" className="gap-1">
                    <ThumbsUp className="h-3.5 w-3.5" />
                    Apply Suggestions
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    Schedule Post
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Prompt Examples</CardTitle>
                <CardDescription>
                  Get inspired with these prompt ideas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible defaultValue="item-0">
                  {contentTypes.map((type, index) => {
                    const Icon = type.icon;
                    
                    return (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-center gap-2">
                            <div className="p-1 rounded-md bg-secondary/10 text-secondary">
                              <Icon className="h-4 w-4" />
                            </div>
                            <span>{type.name}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pt-2 space-y-2">
                            {type.promptExamples.map((example, i) => (
                              <Button 
                                key={i}
                                variant="outline" 
                                className="w-full justify-start h-auto text-sm normal-case py-2 px-3"
                                onClick={() => handleUseExample(example)}
                              >
                                {example}
                              </Button>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>AI Content Enhancer</CardTitle>
                <CardDescription>
                  Improve your existing content with AI
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Select defaultValue="improve">
                  <SelectTrigger>
                    <SelectValue placeholder="Select enhancement" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="improve">Improve Writing</SelectItem>
                    <SelectItem value="tone">Adjust Tone</SelectItem>
                    <SelectItem value="headline">Generate Headlines</SelectItem>
                    <SelectItem value="seo">SEO Optimization</SelectItem>
                  </SelectContent>
                </Select>
                
                <Textarea 
                  placeholder="Paste your existing content here for enhancement..." 
                  className="min-h-[120px]"
                />
                
                <Button className="w-full gap-1">
                  <Wand2 className="h-4 w-4" />
                  Enhance Content
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>AI Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Calendar className="h-4 w-4" />
                  Generate Content Calendar
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <AlertCircle className="h-4 w-4" />
                  Compliance Check
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <MessageSquare className="h-4 w-4" />
                  AI Conversation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AIAssistant;
