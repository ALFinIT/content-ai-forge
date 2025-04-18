
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    try {
      await login(email, password);
      toast({
        title: "Login successful",
        description: "Welcome back to ROHUM AI Forge!",
      });
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password. Hint: use demo@example.com / password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1A1F2C] to-[#121420] p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] bg-clip-text text-transparent">ROHUM AI Forge</h1>
          <p className="text-gray-400 mt-2">Log in to your account</p>
        </div>
        
        <Card className="bg-[#1A1F2C]/50 border-[#7E69AB]/20 text-white">
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle className="text-xl text-center">Login</CardTitle>
              <CardDescription className="text-center text-gray-400">
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {error && (
                <div className="p-3 rounded-md bg-red-500/20 border border-red-500/30 text-white text-sm">
                  {error}
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="demo@example.com"
                  className="bg-[#7E69AB]/10 border-[#7E69AB]/20 text-white"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password" className="text-gray-300">Password</Label>
                  <Link to="#" className="text-xs text-[#9b87f5] hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  className="bg-[#7E69AB]/10 border-[#7E69AB]/20 text-white"
                  required
                />
              </div>
            </CardContent>
            
            <CardFooter className="flex-col space-y-4">
              <Button
                type="submit"
                className="w-full bg-[#9b87f5] text-[#1A1F2C] hover:bg-[#7E69AB]"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Log in"}
              </Button>
              
              <p className="text-sm text-gray-400 text-center">
                Don't have an account?{" "}
                <Link to="/signup" className="text-[#9b87f5] hover:underline">
                  Sign up
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            Demo credentials: <span className="text-[#9b87f5]">demo@example.com / password</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
