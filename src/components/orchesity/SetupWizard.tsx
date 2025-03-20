import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowLeft, ArrowRight, Check, Copy, Settings, AlertCircle, X, RotateCcw } from "lucide-react";
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
  const [apiKeyStatus, setApiKeyStatus] = useState<"idle" | "validating" | "valid" | "invalid">("idle");
  const [projectName, setProjectName] = useState("");
  const [priority, setPriority] = useState("speed");
  const [setupComplete, setSetupComplete] = useState(false);
  const [endpointUrl, setEndpointUrl] = useState("https://api.orchesity.com/v1/your-project-id");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("config");
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showResetDialog, setShowResetDialog] = useState(false);
  const isMobile = useIsMobile();
  const { toast } = useToast();

  useEffect(() => {
    if (apiKey.length > 0) {
      setApiKeyStatus("validating");
      
      const validationTimer = setTimeout(() => {
        if (apiKey.length >= 16 && (
          apiKey.includes("sk-") || 
          apiKey.includes("grok") || 
          apiKey.includes("anthropic") || 
          apiKey.includes("claude") ||
          apiKey.includes("openai")
        )) {
          setApiKeyStatus("valid");
        } else {
          setApiKeyStatus("invalid");
        }
      }, 800);
      
      return () => clearTimeout(validationTimer);
    } else {
      setApiKeyStatus("idle");
    }
  }, [apiKey]);

  const getProviderName = () => {
    if (apiKey.includes("grok")) return "Grok";
    if (apiKey.includes("openai")) return "OpenAI";
    if (apiKey.includes("claude")) return "Claude";
    return "Unknown Provider";
  };

  const handleNext = async () => {
    if (step === 1) {
      setIsLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (apiKeyStatus !== "valid") {
          toast({
            title: "[EN] Invalid API Key",
            description: "[EN] Please enter a valid API key from a provider.",
            variant: "destructive",
          });
          return;
        }
        setStep(2);
      } catch (error) {
        toast({
          title: "[EN] Error",
          description: "[EN] Failed to validate API key. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    } else if (step === 2) {
      if (!projectName.trim()) {
        toast({
          title: "[EN] Missing Information",
          description: "[EN] Please enter a project name.",
          variant: "destructive",
        });
        return;
      }
      setStep(3);
    } else if (step === 3) {
      setShowConfirmDialog(true);
    }
  };

  const handleActivateRedis = async () => {
    setShowConfirmDialog(false);
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setEndpointUrl(`https://api.orchesity.com/v1/${projectName.toLowerCase().replace(/\s+/g, '-')}`);
      setSetupComplete(true);
      toast({
        title: "[EN] Setup Completed!",
        description: "[EN] Your endpoint is ready for use.",
        className: "border border-black/20 bg-white text-black",
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: "[EN] Activation Failed",
        description: "[EN] Failed to activate Redis. Please try again.",
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
      title: "[EN] Copied!",
      description: "[EN] API endpoint copied to clipboard.",
      className: "border border-black/20 bg-white text-black",
    });
  };

  const saveSettings = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "[EN] Settings Saved",
        description: "[EN] Your changes have been saved successfully.",
        className: "border border-black/20 bg-white text-black",
      });
    }, 1000);
  };

  const resetToDefaults = () => {
    setShowResetDialog(true);
  };

  const confirmReset = () => {
    setIsLoading(true);
    setTimeout(() => {
      setApiKey("");
      setProjectName("");
      setPriority("speed");
      setIsLoading(false);
      setShowResetDialog(false);
      toast({
        title: "[EN] Reset Completed",
        description: "[EN] Settings have been reset to defaults.",
        className: "border border-black/20 bg-white text-black",
      });
    }, 1000);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <Label htmlFor="apiKey" className="text-black">[EN] API Key</Label>
            <div className="relative">
              <Input
                id="apiKey"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="[EN] Enter your AI provider API key"
                disabled={isLoading}
                className={apiKeyStatus === "invalid" ? "border-red-500 pr-10" : "pr-10"}
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                {apiKeyStatus === "validating" && (
                  <span className="text-black/70">Validating...</span>
                )}
                {apiKeyStatus === "valid" && (
                  <Check className="h-5 w-5 text-green-500 stroke-[3]" />
                )}
                {apiKeyStatus === "invalid" && apiKey.length > 0 && (
                  <X className="h-5 w-5 text-red-500 stroke-[3]" />
                )}
              </div>
            </div>
            <div className="text-sm text-black/70">
              [EN] Get key from:{" "}
              <a href="#" className="text-black underline hover:text-black/90">Grok</a> |{" "}
              <a href="#" className="text-black underline hover:text-black/90">OpenAI</a> |{" "}
              <a href="#" className="text-black underline hover:text-black/90">Claude</a>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="projectName" className="text-black">[EN] Project Name</Label>
              <Input
                id="projectName"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="[EN] Enter your project name"
                disabled={isLoading}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="priority" className="text-black">[EN] Priority</Label>
              <Select value={priority} onValueChange={setPriority} disabled={isLoading}>
                <SelectTrigger id="priority" className="w-full border-black/20 bg-white text-black">
                  <SelectValue placeholder="[EN] Select priority" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-black/20">
                  <SelectItem value="speed" className="text-black">[EN] Speed</SelectItem>
                  <SelectItem value="cost" className="text-black">[EN] Cost</SelectItem>
                  <SelectItem value="accuracy" className="text-black">[EN] Accuracy</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <Button 
              variant="outline" 
              className="w-full relative"
              onClick={handleNext}
              disabled={isLoading}
            >
              {isLoading ? (
                "[EN] Activating..."
              ) : (
                "[EN] Activate Redis"
              )}
            </Button>
            
            <div className="space-y-2">
              <Label htmlFor="endpoint" className="text-black">[EN] Your API Endpoint</Label>
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
                  className="absolute right-1 top-1/2 -translate-y-1/2 text-black hover:text-black/80"
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
              <Check className="h-6 w-6 text-green-600" />
              [EN] Setup Complete
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full bg-white border border-black/20">
              <TabsTrigger value="config" className="flex-1 data-[state=active]:bg-black/10">
                [EN] Configuration
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex-1 data-[state=active]:bg-black/10">
                <Settings className="h-4 w-4 mr-2" />
                [EN] Settings
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="config" className="mt-4">
              <div className="rounded-md border border-black/10 bg-white/50 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-black/70">[EN] Project Name</p>
                    <p className="text-black font-medium">{projectName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-black/70">[EN] Priority</p>
                    <p className="text-black font-medium capitalize">{priority}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-black/70">[EN] API Endpoint</p>
                    <div className="flex items-center gap-2">
                      <p className="text-black font-mono text-sm truncate">{endpointUrl}</p>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="text-black hover:text-black/80"
                        onClick={copyToClipboard}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 border border-black/10 rounded-md p-4 mt-4">
                <h4 className="font-medium text-black mb-2">[EN] Get Started</h4>
                <p className="text-black/70 text-sm mb-4">[EN] Make your first request with:</p>
                <pre className="bg-gray-100 p-3 rounded text-black font-mono text-sm overflow-x-auto">
                  {`curl -X POST ${endpointUrl}/ai \\
  -H "Content-Type: application/json" \\
  -d '{"prompt": "Hello, Orchesity!"}'`}
                </pre>
              </div>
            </TabsContent>
            
            <TabsContent value="settings" className="mt-4">
              <div className="space-y-4">
                <div className="rounded-md border border-black/10 bg-white/50 p-4 mb-4">
                  <h4 className="font-medium text-black mb-2">[EN] Current Configuration</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-black/70">[EN] Provider</p>
                      <p className="text-black font-medium">{getProviderName()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-black/70">[EN] Priority</p>
                      <p className="text-black font-medium capitalize">{priority}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-black/70">[EN] Project Name</p>
                      <p className="text-black font-medium">{projectName}</p>
                    </div>
                  </div>
                </div>
              
                <div className="bg-white/50 border border-black/10 rounded-md p-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="edit-api-key" className="text-black">[EN] API Key</Label>
                      <Input
                        id="edit-api-key"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        placeholder="[EN] Enter your AI provider API key"
                        disabled={isLoading}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="edit-project-name" className="text-black">[EN] Project Name</Label>
                      <Input
                        id="edit-project-name"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        placeholder="[EN] Enter your project name"
                        disabled={isLoading}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="edit-priority" className="text-black">[EN] Priority</Label>
                      <Select value={priority} onValueChange={setPriority} disabled={isLoading}>
                        <SelectTrigger id="edit-priority" className="w-full border-black/20 bg-white text-black">
                          <SelectValue placeholder="[EN] Select priority" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-black/20">
                          <SelectItem value="speed" className="text-black">[EN] Speed</SelectItem>
                          <SelectItem value="cost" className="text-black">[EN] Cost</SelectItem>
                          <SelectItem value="accuracy" className="text-black">[EN] Accuracy</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={saveSettings}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          "[EN] Saving..."
                        ) : (
                          "[EN] Save Changes"
                        )}
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={resetToDefaults}
                        disabled={isLoading}
                      >
                        <RotateCcw className="h-4 w-4 mr-2" />
                        [EN] Reset to Default
                      </Button>
                    </div>
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
          <CardTitle>[EN] Quick Setup Wizard</CardTitle>
          <div className="mt-2">
            <Progress value={(step / 3) * 100} className="h-2" />
            <p className="text-xs text-black/70 mt-2">[EN] Step {step} of 3</p>
          </div>
        </CardHeader>
        <CardContent>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/50 z-10 rounded-lg">
              <p className="text-black font-medium">Processing...</p>
            </div>
          )}
          {renderStepContent()}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={handleBack} 
            disabled={step === 1 || isLoading}
            size={isMobile ? "sm" : "default"}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            [EN] Back
          </Button>
          <Button 
            variant="outline" 
            onClick={handleNext} 
            disabled={isLoading}
            size={isMobile ? "sm" : "default"}
            className="gap-2"
          >
            {isLoading ? (
              step === 3 ? "[EN] Completing..." : "[EN] Processing..."
            ) : (
              <>
                {step === 3 ? "[EN] Complete" : "[EN] Next"}
                {step < 3 && <ArrowRight className="h-4 w-4" />}
              </>
            )}
          </Button>
        </CardFooter>
      </Card>

      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent className="bg-white text-black border border-black/20">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-black flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-black" />
              [EN] Confirm Activation
            </AlertDialogTitle>
            <AlertDialogDescription className="text-black/80">
              [EN] Are you sure? This will start your service and allocate resources for your project.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-white text-black border border-black/40 hover:bg-black/10">
              [EN] No, Cancel
            </AlertDialogCancel>
            <AlertDialogAction 
              className="bg-white text-black border border-black hover:bg-black/10"
              onClick={handleActivateRedis}
            >
              [EN] Yes, Activate
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={showResetDialog} onOpenChange={setShowResetDialog}>
        <AlertDialogContent className="bg-white text-black border border-black/20">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-black flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-black" />
              [EN] Reset Configuration
            </AlertDialogTitle>
            <AlertDialogDescription className="text-black/80">
              [EN] This will reset all settings to their default values. Are you sure you want to continue?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-white text-black border border-black/40 hover:bg-black/10">
              [EN] No, Cancel
            </AlertDialogCancel>
            <AlertDialogAction 
              className="bg-white text-black border border-black hover:bg-black/10"
              onClick={confirmReset}
            >
              [EN] Yes, Reset
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default SetupWizard;
