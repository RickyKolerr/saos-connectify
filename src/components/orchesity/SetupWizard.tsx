
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowLeft, ArrowRight, Check, Copy, Loader2, Settings, AlertCircle, Sparkle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle 
} from "@/components/ui/alert-dialog";

const SetupWizard = () => {
  const [step, setStep] = useState(1);
  const [apiKey, setApiKey] = useState("");
  const [projectName, setProjectName] = useState("");
  const [priority, setPriority] = useState("speed");
  const [setupComplete, setSetupComplete] = useState(false);
  const [endpointUrl, setEndpointUrl] = useState("https://api.orchesity.com/v1/your-project-id");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("config");
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const isMobile = useIsMobile();
  const { toast } = useToast();

  const getProviderName = () => {
    if (apiKey.includes("grok")) return "Grok";
    if (apiKey.includes("openai")) return "OpenAI";
    if (apiKey.includes("claude")) return "Claude";
    return "Unknown Provider";
  };

  const handleNext = async () => {
    if (step === 1) {
      // Validate API key
      setIsLoading(true);
      try {
        // Simulate API key validation with a timeout
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // For demo purposes, fail if the key is too short
        if (apiKey.length < 3) {
          toast({
            title: "Invalid API Key",
            description: "Please enter a valid API key from a provider.",
            variant: "destructive",
          });
          return;
        }
        
        setStep(2);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to validate API key. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    } else if (step === 2) {
      // Validate project details
      if (!projectName.trim()) {
        toast({
          title: "Missing Information",
          description: "Please enter a project name.",
          variant: "destructive",
        });
        return;
      }
      setStep(3);
    } else if (step === 3) {
      // Show confirmation dialog before activation
      setShowConfirmDialog(true);
    }
  };

  const handleActivateRedis = async () => {
    setShowConfirmDialog(false);
    setIsLoading(true);
    try {
      // Simulate Redis activation
      await new Promise(resolve => setTimeout(resolve, 1500));
      setEndpointUrl(`https://api.orchesity.com/v1/${projectName.toLowerCase().replace(/\s+/g, '-')}`);
      setSetupComplete(true);

      // Show success toast
      toast({
        title: "Setup Completed!",
        description: "Your endpoint is ready for use.",
        className: "border border-white/20 bg-black text-white",
        icon: <Sparkle className="h-4 w-4 text-white" />,
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: "Activation Failed",
        description: "Failed to activate Redis. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(endpointUrl);
    toast({
      title: "Copied!",
      description: "API endpoint copied to clipboard.",
      className: "border border-white/20 bg-black text-white",
    });
  };

  const saveSettings = () => {
    setIsLoading(true);
    // Simulate saving settings
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Settings Saved",
        description: "Your changes have been saved successfully.",
        className: "border border-white/20 bg-black text-white",
      });
    }, 1000);
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
              disabled={isLoading}
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
                disabled={isLoading}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="priority" className="text-white">Priority</Label>
              <Select value={priority} onValueChange={setPriority} disabled={isLoading}>
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
              className="w-full relative"
              onClick={handleNext}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Activating...
                </>
              ) : (
                "Activate Redis"
              )}
            </Button>
            
            <div className="space-y-2">
              <Label htmlFor="endpoint" className="text-white">Your API Endpoint</Label>
              <div className="relative">
                <Input
                  id="endpoint"
                  value={endpointUrl}
                  readOnly
                  className="pr-10"
                  disabled={isLoading}
                />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-1 top-1/2 -translate-y-1/2 text-white hover:text-white/80"
                  onClick={copyToClipboard}
                  disabled={isLoading}
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
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center gap-2">
              <Check className="h-6 w-6 text-green-400" />
              Setup Complete
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full bg-black border border-white/20">
              <TabsTrigger value="config" className="flex-1 data-[state=active]:bg-white/10">
                Configuration
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex-1 data-[state=active]:bg-white/10">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="config" className="mt-4">
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

              <div className="bg-black/50 border border-white/10 rounded-md p-4 mt-4">
                <h4 className="font-medium text-white mb-2">Get Started</h4>
                <p className="text-white/70 text-sm mb-4">Make your first request with:</p>
                <pre className="bg-[#1F1F1F] p-3 rounded text-white font-mono text-sm overflow-x-auto">
                  {`curl -X POST ${endpointUrl}/ai \\
  -H "Content-Type: application/json" \\
  -d '{"prompt": "Hello, Orchesity!"}'`}
                </pre>
              </div>
            </TabsContent>
            
            <TabsContent value="settings" className="mt-4">
              <div className="space-y-4">
                <div className="rounded-md border border-white/10 bg-black/50 p-4 mb-4">
                  <h4 className="font-medium text-white mb-2">Current Configuration</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-white/70">Provider</p>
                      <p className="text-white font-medium">{getProviderName()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/70">Priority</p>
                      <p className="text-white font-medium capitalize">{priority}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-white/70">Project Name</p>
                      <p className="text-white font-medium">{projectName}</p>
                    </div>
                  </div>
                </div>
              
                <div className="bg-black/50 border border-white/10 rounded-md p-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="edit-api-key" className="text-white">API Key</Label>
                      <Input
                        id="edit-api-key"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        placeholder="Enter your AI provider API key"
                        disabled={isLoading}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="edit-project-name" className="text-white">Project Name</Label>
                      <Input
                        id="edit-project-name"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        placeholder="Enter your project name"
                        disabled={isLoading}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="edit-priority" className="text-white">Priority</Label>
                      <Select value={priority} onValueChange={setPriority} disabled={isLoading}>
                        <SelectTrigger id="edit-priority" className="w-full border-white/20 bg-black text-white">
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent className="bg-black border border-white/20">
                          <SelectItem value="speed" className="text-white">Speed</SelectItem>
                          <SelectItem value="cost" className="text-white">Cost</SelectItem>
                          <SelectItem value="accuracy" className="text-white">Accuracy</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Button 
                      variant="orchesity" 
                      className="w-full"
                      onClick={saveSettings}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin mr-2" />
                          Saving...
                        </>
                      ) : (
                        "Save Changes"
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Quick Setup Wizard</CardTitle>
          <div className="mt-2">
            <Progress value={(step / 3) * 100} className="h-2" />
            <p className="text-xs text-white/70 mt-2">Step {step} of 3</p>
          </div>
        </CardHeader>
        <CardContent>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10 rounded-lg">
              <Loader2 className="h-8 w-8 animate-spin text-white" />
            </div>
          )}
          {renderStepContent()}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button 
            variant="orchesity" 
            onClick={handleBack} 
            disabled={step === 1 || isLoading}
            size={isMobile ? "sm" : "default"}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <Button 
            variant="orchesity" 
            onClick={handleNext} 
            disabled={isLoading}
            size={isMobile ? "sm" : "default"}
            className="gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                {step === 3 ? "Completing..." : "Processing..."}
              </>
            ) : (
              <>
                {step === 3 ? "Complete" : "Next"}
                {step < 3 && <ArrowRight className="h-4 w-4" />}
              </>
            )}
          </Button>
        </CardFooter>
      </Card>

      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent className="bg-black text-white border border-white/20">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-white" />
              Confirm Activation
            </AlertDialogTitle>
            <AlertDialogDescription className="text-white/80">
              Are you sure? This will start your service and allocate resources for your project.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-black text-white border border-white/40 hover:bg-white/10">
              No, Cancel
            </AlertDialogCancel>
            <AlertDialogAction 
              className="bg-black text-white border border-white hover:bg-white/10"
              onClick={handleActivateRedis}
            >
              Yes, Activate
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default SetupWizard;
