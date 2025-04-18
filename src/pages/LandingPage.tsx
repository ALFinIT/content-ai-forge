
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, BarChart2, Sparkles, Zap, Users, Shield } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#121420] text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] bg-clip-text text-transparent">
            ROHUM AI Forge
          </div>
          <div className="flex space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-[#7E69AB]/20">
                Log in
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-[#9b87f5] text-[#1A1F2C] hover:bg-[#7E69AB]">
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] bg-clip-text text-transparent">
                AI-Powered Content Creation
              </span> <br />
              Made Simple
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mt-6">
              Create, schedule, and analyze your content with the power of AI. 
              ROHUM AI Forge helps you generate engaging content in seconds.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/signup">
                <Button className="w-full sm:w-auto bg-[#9b87f5] text-[#1A1F2C] hover:bg-[#7E69AB] text-lg px-8 py-2 h-auto">
                  Get Started
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" className="w-full sm:w-auto border-[#7E69AB] text-white hover:bg-[#7E69AB]/20 text-lg px-8 py-2 h-auto">
                  Demo Account
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <div className="bg-[#7E69AB]/10 border border-[#7E69AB]/20 rounded-xl p-4 shadow-lg shadow-[#7E69AB]/5">
              <div className="bg-[#1A1F2C] rounded-lg p-4 border border-[#7E69AB]/10">
                <div className="bg-gradient-to-r from-[#9b87f5]/20 to-[#6E59A5]/20 rounded-md p-6 h-64 flex items-center justify-center">
                  <Sparkles className="h-20 w-20 text-[#9b87f5]" />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-4 bg-[#7E69AB]/30 rounded-full w-3/4"></div>
                  <div className="h-4 bg-[#7E69AB]/20 rounded-full"></div>
                  <div className="h-4 bg-[#7E69AB]/10 rounded-full w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Powerful Features to Enhance Your Content
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#7E69AB]/10 rounded-xl p-6 border border-[#7E69AB]/20">
            <Sparkles className="h-10 w-10 text-[#9b87f5] mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Content Generation</h3>
            <p className="text-gray-400">Create high-quality blog posts, social media updates, and more using advanced AI models.</p>
          </div>
          
          <div className="bg-[#7E69AB]/10 rounded-xl p-6 border border-[#7E69AB]/20">
            <FileText className="h-10 w-10 text-[#9b87f5] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Content Library</h3>
            <p className="text-gray-400">Organize and manage all your content in one centralized library for easy access.</p>
          </div>
          
          <div className="bg-[#7E69AB]/10 rounded-xl p-6 border border-[#7E69AB]/20">
            <BarChart2 className="h-10 w-10 text-[#9b87f5] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
            <p className="text-gray-400">Track content performance with detailed analytics and actionable insights.</p>
          </div>
          
          <div className="bg-[#7E69AB]/10 rounded-xl p-6 border border-[#7E69AB]/20">
            <Zap className="h-10 w-10 text-[#9b87f5] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Automated Workflows</h3>
            <p className="text-gray-400">Streamline your content creation process with automated workflows and templates.</p>
          </div>
          
          <div className="bg-[#7E69AB]/10 rounded-xl p-6 border border-[#7E69AB]/20">
            <Users className="h-10 w-10 text-[#9b87f5] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
            <p className="text-gray-400">Work seamlessly with your team members on content creation and scheduling.</p>
          </div>
          
          <div className="bg-[#7E69AB]/10 rounded-xl p-6 border border-[#7E69AB]/20">
            <Shield className="h-10 w-10 text-[#9b87f5] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
            <p className="text-gray-400">Your content and data are always secure and private with our enterprise-grade security.</p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-[#7E69AB]/30 to-[#9b87f5]/30 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your content strategy?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of content creators and marketers who are already using ROHUM AI Forge.
          </p>
          <Link to="/signup">
            <Button className="bg-[#9b87f5] text-[#1A1F2C] hover:bg-[#7E69AB] text-lg px-8 py-2 h-auto">
              Sign Up Now
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#121420] py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] bg-clip-text text-transparent">
                ROHUM AI Forge
              </div>
              <p className="text-gray-400 mt-2">AI-powered content creation platform</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#9b87f5]">Terms</a>
              <a href="#" className="text-gray-400 hover:text-[#9b87f5]">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-[#9b87f5]">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#7E69AB]/20 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ROHUM AI Forge. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
