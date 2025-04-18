
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const GroqSettings = () => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState(localStorage.getItem("groq_api_key") || "");

  const handleSaveApiKey = () => {
    if (apiKey.trim()) {
      localStorage.setItem("groq_api_key", apiKey.trim());
      toast({
        title: "API Key Saved",
        description: "Your Groq API key has been saved securely.",
      });
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="border-[#7E69AB]/20 hover:bg-[#7E69AB]/10">
          <Settings className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-[#1A1F2C] border-[#7E69AB]/20">
        <SheetHeader>
          <SheetTitle className="text-white">Groq API Settings</SheetTitle>
        </SheetHeader>
        <div className="space-y-4 mt-4">
          <div>
            <label htmlFor="apiKey" className="text-sm font-medium block mb-2 text-gray-300">
              API Key
            </label>
            <Input
              id="apiKey"
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your Groq API key"
              className="mb-2 bg-[#7E69AB]/10 border-[#7E69AB]/20 text-white"
            />
            <p className="text-xs text-muted-foreground">
              Your API key is stored securely in your browser's local storage.
            </p>
          </div>
          <Button 
            onClick={handleSaveApiKey} 
            className="w-full bg-[#9b87f5] text-[#1A1F2C] hover:bg-[#7E69AB]"
          >
            Save API Key
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
