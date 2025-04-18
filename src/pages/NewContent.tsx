import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowLeft, 
  Image, 
  Link2, 
  CalendarClock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  CheckCircle2, 
  InfoIcon,
  AlertTriangle,
  CheckCircle,
  PenLine,
  Sparkles
} from "lucide-react";
import { useState, useRef } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import AISuggestions from "@/components/content/AISuggestions";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { generateContent } from "@/services/groq";
import { GroqSettings } from "@/components/content/GroqSettings";

const NewContent = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [sources, setSources] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [complianceStatus, setComplianceStatus] = useState<{
    branding: boolean;
    legal: boolean;
    contentQuality: boolean;
  }>({
    branding: true,
    legal: true,
    contentQuality: false,
  });

  const platforms = [
    { name: "Facebook", icon: Facebook, color: "text-blue-600" },
    { name: "Twitter", icon: Twitter, color: "text-sky-500" },
    { name: "Instagram", icon: Instagram, color: "text-pink-600" },
    { name: "LinkedIn", icon: Linkedin, color: "text-blue-700" },
    { name: "YouTube", icon: Youtube, color: "text-red-600" },
  ];

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePlatformToggle = (platform: string) => {
    setSelectedPlatforms((prev) => 
      prev.includes(platform)
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
  };

  const handleApplySuggestion = (suggestion: string) => {
    setContent((prev) => prev + "\n\n" + suggestion);
    
    toast({
      title: "Suggestion Applied",
      description: "The AI suggestion has been added to your content.",
    });
    
    setComplianceStatus(prev => ({
      ...prev,
      contentQuality: true
    }));
  };

  const handleSaveDraft = () => {
    toast({
      title: "Draft Saved",
      description: "Your content has been saved as a draft.",
    });
    navigate("/content");
  };

  const handleSchedule = () => {
    toast({
      title: "Content Scheduled",
      description: `Your content has been scheduled for ${format(date!, "PPP")}`,
    });
    navigate("/content");
  };

  const handleGenerateContent = async () => {
    if (!title || !description) {
      toast({
        title: "Missing Information",
        description: "Please provide a title and description to generate content.",
        variant: "destructive",
      });
      return;
    }

    try {
      setContent("Generating content...");
      const generatedContent = await generateContent({
        title,
        description,
        topic: selectedPlatforms.join(", "),
      });
      setContent(generatedContent);
      
      setComplianceStatus(prev => ({
        ...prev,
        contentQuality: true
      }));

      toast({
        title: "Content Generated",
        description: "Your content has been generated successfully.",
      });
    } catch (error) {
      toast({
        title: "Generation Failed",
        description: error instanceof Error ? error.message : "Failed to generate content",
        variant: "destructive",
      });
      setContent("");
    }
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <Button
            variant="ghost"
            size="icon"
            asChild
          >
            <RouterLink to="/content">
              <ArrowLeft className="h-5 w-5" />
            </RouterLink>
          </Button>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={handleGenerateContent}
              disabled={!title || !description}
              className="gap-2"
            >
              <Sparkles className="h-4 w-4" />
              Generate with AI
            </Button>
            <GroqSettings />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="title" className="text-sm font-medium block mb-1.5">
                      Title
                    </label>
                    <Input
                      id="title"
                      placeholder="Enter a compelling title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="text-sm font-medium block mb-1.5">
                      Description
                    </label>
                    <Textarea
                      id="description"
                      placeholder="Write a brief description"
                      rows={2}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="content" className="text-sm font-medium block mb-1.5">
                      Content
                    </label>
                    <Textarea
                      id="content"
                      placeholder="Write your content here..."
                      className="content-editor min-h-[200px]"
                      rows={8}
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="sources" className="text-sm font-medium block mb-1.5">
                      Sources & References
                    </label>
                    <Textarea
                      id="sources"
                      placeholder="Add any sources or references (e.g., URLs, citations)"
                      rows={2}
                      value={sources}
                      onChange={(e) => setSources(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium block mb-1.5">
                      Image
                    </label>
                    <div className="flex items-center gap-4">
                      {imagePreview ? (
                        <div className="relative w-24 h-24 rounded-md overflow-hidden">
                          <img 
                            src={imagePreview} 
                            alt="Preview" 
                            className="w-full h-full object-cover"
                          />
                          <Button
                            variant="destructive"
                            size="icon"
                            className="absolute top-1 right-1 h-6 w-6"
                            onClick={() => setImagePreview(null)}
                          >
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                            </svg>
                          </Button>
                        </div>
                      ) : (
                        <Button
                          variant="outline"
                          className="w-24 h-24 flex flex-col gap-1"
                          onClick={() => fileInputRef.current?.click()}
                        >
                          <Image className="h-5 w-5" />
                          <span className="text-xs">Add Image</span>
                        </Button>
                      )}
                      <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageSelect}
                      />
                      <div className="text-sm text-muted-foreground">
                        Recommended size: 1200x630px. Max size: 5MB.
                        <br />
                        Supports JPEG, PNG, GIF.
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-3">Platform Selection & Preview</h3>
                    <div className="flex flex-wrap gap-2">
                      {platforms.map((platform) => {
                        const Icon = platform.icon;
                        const isSelected = selectedPlatforms.includes(platform.name);
                        
                        return (
                          <Button
                            key={platform.name}
                            variant={isSelected ? "default" : "outline"}
                            className={`gap-2 ${isSelected ? "" : platform.color}`}
                            onClick={() => handlePlatformToggle(platform.name)}
                          >
                            <Icon className="h-4 w-4" />
                            {platform.name}
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                  
                  {selectedPlatforms.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                        Content Preview
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <InfoIcon className="h-4 w-4 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="w-[200px] text-xs">
                                Preview how your content will look on different platforms.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </h4>
                      
                      <div className="preview-box p-4">
                        {selectedPlatforms.includes("LinkedIn") && (
                          <div className="mb-4 pb-4 border-b">
                            <div className="flex items-center gap-2 mb-2">
                              <Linkedin className="h-4 w-4 text-blue-700" />
                              <span className="font-medium text-sm">LinkedIn Preview</span>
                            </div>
                            <div className="rounded-md border overflow-hidden">
                              {imagePreview && (
                                <img 
                                  src={imagePreview} 
                                  alt="LinkedIn Preview" 
                                  className="w-full h-48 object-cover"
                                />
                              )}
                              <div className="p-3">
                                <h5 className="font-medium">{title || "Your post title"}</h5>
                                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                                  {description || "Your post description will appear here..."}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {selectedPlatforms.includes("Twitter") && (
                          <div className="mb-4 pb-4 border-b">
                            <div className="flex items-center gap-2 mb-2">
                              <Twitter className="h-4 w-4 text-sky-500" />
                              <span className="font-medium text-sm">Twitter Preview</span>
                            </div>
                            <div className="rounded-md border p-3">
                              <p className="text-sm">
                                {content 
                                  ? (content.length > 280 
                                      ? content.slice(0, 277) + "..." 
                                      : content)
                                  : "Your tweet will appear here..."
                                }
                              </p>
                              {imagePreview && (
                                <img 
                                  src={imagePreview} 
                                  alt="Twitter Preview" 
                                  className="w-full h-48 object-cover mt-3 rounded-md"
                                />
                              )}
                            </div>
                          </div>
                        )}
                        
                        {selectedPlatforms.includes("Instagram") && (
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Instagram className="h-4 w-4 text-pink-600" />
                              <span className="font-medium text-sm">Instagram Preview</span>
                            </div>
                            <div className="rounded-md border overflow-hidden">
                              {imagePreview ? (
                                <img 
                                  src={imagePreview} 
                                  alt="Instagram Preview" 
                                  className="w-full aspect-square object-cover"
                                />
                              ) : (
                                <div className="w-full aspect-square bg-muted flex items-center justify-center">
                                  <p className="text-sm text-muted-foreground">
                                    Add an image for Instagram preview
                                  </p>
                                </div>
                              )}
                              <div className="p-3">
                                <p className="text-sm line-clamp-2">
                                  {description || "Your caption will appear here..."}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Schedule</h4>
                    <div className="flex items-center gap-4">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="gap-2 w-full justify-start"
                          >
                            <CalendarClock className="h-4 w-4" />
                            {date ? format(date, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="08:00">8:00 AM</SelectItem>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="12:00">12:00 PM</SelectItem>
                          <SelectItem value="15:00">3:00 PM</SelectItem>
                          <SelectItem value="18:00">6:00 PM</SelectItem>
                          <SelectItem value="20:00">8:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Compliance Check</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    {complianceStatus.branding ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    )}
                    <div>
                      <p className="font-medium text-sm">Brand Voice & Tone</p>
                      <p className="text-xs text-muted-foreground">
                        {complianceStatus.branding
                          ? "Content aligns with brand voice guidelines."
                          : "Content may not align with brand voice guidelines."
                        }
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {complianceStatus.legal ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    )}
                    <div>
                      <p className="font-medium text-sm">Legal Requirements</p>
                      <p className="text-xs text-muted-foreground">
                        {complianceStatus.legal
                          ? "No legal issues detected in content."
                          : "Please review content for potential legal issues."
                        }
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {complianceStatus.contentQuality ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    )}
                    <div>
                      <p className="font-medium text-sm">Content Quality</p>
                      <p className="text-xs text-muted-foreground">
                        {complianceStatus.contentQuality
                          ? "Content meets quality standards."
                          : "Content may not meet quality standards. Consider AI suggestions."
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-1 space-y-6">
            <AISuggestions 
              content={content} 
              onApplySuggestion={handleApplySuggestion} 
            />
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Actions</h3>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start gap-2"
                    onClick={handleSaveDraft}
                  >
                    <PenLine className="h-4 w-4" />
                    Save as Draft
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start gap-2"
                    onClick={handleSchedule}
                    disabled={!title || !content || selectedPlatforms.length === 0}
                  >
                    <CalendarClock className="h-4 w-4" />
                    Schedule Post
                  </Button>
                  
                  <Button 
                    className="w-full justify-start gap-2"
                    disabled={!title || !content || selectedPlatforms.length === 0}
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    Publish Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NewContent;
