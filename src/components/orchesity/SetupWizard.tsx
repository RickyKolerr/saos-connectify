
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowLeft, ArrowRight, Check, Copy } from "lucide-react";

const SetupWizard = () => {
  const [step, setStep] = useState(1);
  const [apiKey, setApiKey] = useState("");
  const [projectName, setProjectName] = useState("");
  const [priority, setPriority] = useState("speed");
  const [setupComplete, setSetupComplete] = useState(false);
  const [endpointUrl, setEndpointUrl] = useState("https://api.orchesity.com/v1/your-project-id");
  const isMobile = useIsMobile();

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Complete setup
      setSetupComplete(true);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(endpointUrl);
    // In real app, add toast notification
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <Label htmlFor="apiKey" className="text-white">API Key</Label>
            <Input
              id="apiKey"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your AI provider API key"
            />
            <div className="text-sm text-white/70">
              Get key from:{" "}
              <a href="#" className="text-white underline hover:text-white/90">Grok</a> |{" "}
              <a href="#" className="text-white underline hover:text-white/90">OpenAI</a> |{" "}
              <a href="#" className="text-white underline hover:text-white/90">Claude</a>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="projectName" className="text-white">Project Name</Label>
              <Input
                id="projectName"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Enter your project name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="priority" className="text-white">Priority</Label>
              <Select value={priority} onValueChange={setPriority}>
                <SelectTrigger id="priority" className="w-full border-white/20 bg-black text-white">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent className="bg-black border border-white/20">
                  <SelectItem value="speed" className="text-white">Speed</SelectItem>
                  <SelectItem value="cost" className="text-white">Cost</SelectItem>
                  <SelectItem value="accuracy" className="text-white">Accuracy</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <Button 
              variant="orchesity" 
              className="w-full"
              onClick={() => setEndpointUrl(`https://api.orchesity.com/v1/${projectName.toLowerCase().replace(/\s+/g, '-')}`)}
            >
              Activate Redis
            </Button>
            
            <div className="space-y-2">
              <Label htmlFor="endpoint" className="text-white">Your API Endpoint</Label>
              <div className="relative">
                <Input
                  id="endpoint"
                  value={endpointUrl}
                  readOnly
                  className="pr-10"
                />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-1 top-1/2 -translate-y-1/2 text-white hover:text-white/80"
                  onClick={copyToClipboard}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (setupComplete) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Check className="h-6 w-6 text-green-400" />
            Setup Complete
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-md border border-white/10 bg-black/50 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-white/70">Project Name</p>
                <p className="text-white font-medium">{projectName}</p>
              </div>
              <div>
                <p className="text-sm text-white/70">Priority</p>
                <p className="text-white font-medium capitalize">{priority}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-white/70">API Endpoint</p>
                <div className="flex items-center gap-2">
                  <p className="text-white font-mono text-sm truncate">{endpointUrl}</p>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-white hover:text-white/80"
                    onClick={copyToClipboard}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/50 border border-white/10 rounded-md p-4">
            <h4 className="font-medium text-white mb-2">Get Started</h4>
            <p className="text-white/70 text-sm mb-4">Make your first request with:</p>
            <pre className="bg-[#1F1F1F] p-3 rounded text-white font-mono text-sm overflow-x-auto">
              {`curl -X POST ${endpointUrl}/ai \\
  -H "Content-Type: application/json" \\
  -d '{"prompt": "Hello, Orchesity!"}'`}
            </pre>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Quick Setup Wizard</CardTitle>
        <div className="mt-2">
          <Progress value={(step / 3) * 100} className="h-2" />
          <p className="text-xs text-white/70 mt-2">Step {step} of 3</p>
        </div>
      </CardHeader>
      <CardContent>
        {renderStepContent()}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          variant="orchesity" 
          onClick={handleBack} 
          disabled={step === 1}
          size={isMobile ? "sm" : "default"}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <Button 
          variant="orchesity" 
          onClick={handleNext} 
          size={isMobile ? "sm" : "default"}
          className="gap-2"
        >
          {step === 3 ? "Complete" : "Next"}
          {step < 3 && <ArrowRight className="h-4 w-4" />}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SetupWizard;
