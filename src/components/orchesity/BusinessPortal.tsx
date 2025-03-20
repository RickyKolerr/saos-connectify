
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart, BarChart } from "@/components/ui/chart";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DownloadCloud, Zap, Wallet, Clock, AlertCircle, FileDown, User, ExternalLink, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";

const BusinessPortal = () => {
  const { toast } = useToast();
  const { user, signOut } = useAuth();
  const [activePrimaryTab, setActivePrimaryTab] = useState("analytics");
  
  // Sample data for charts - updated to show last 7 days
  const areaChartData = [
    { name: "Mon", value: 240 },
    { name: "Tue", value: 320 },
    { name: "Wed", value: 290 },
    { name: "Thu", value: 420 },
    { name: "Fri", value: 380 },
    { name: "Sat", value: 450 },
    { name: "Sun", value: 560 },
  ];

  const providersData = [
    { name: "OpenAI", value: 65 },
    { name: "Claude", value: 25 },
    { name: "Grok", value: 10 },
  ];

  // Sample api request data for table
  const recentRequests = [
    { id: "req_123", timestamp: "2023-06-12 14:30", provider: "OpenAI", status: "success", latency: 280, tokens: 350 },
    { id: "req_124", timestamp: "2023-06-12 14:28", provider: "Claude", status: "success", latency: 450, tokens: 420 },
    { id: "req_125", timestamp: "2023-06-12 14:25", provider: "Grok", status: "success", latency: 320, tokens: 380 },
    { id: "req_126", timestamp: "2023-06-12 14:20", provider: "OpenAI", status: "error", latency: 0, tokens: 0 },
    { id: "req_127", timestamp: "2023-06-12 14:15", provider: "Claude", status: "success", latency: 510, tokens: 630 },
  ];

  // Sample request history data
  const requestHistoryData = [
    { id: 1, time: "2023-06-12 15:45", endpoint: "POST /api/v1/aiResponse", status: "success" },
    { id: 2, time: "2023-06-12 14:32", endpoint: "GET /api/v1/providers", status: "success" },
    { id: 3, time: "2023-06-12 13:21", endpoint: "POST /api/v1/aiResponse", status: "error" },
    { id: 4, time: "2023-06-12 11:05", endpoint: "POST /api/v1/aiResponse", status: "success" },
    { id: 5, time: "2023-06-12 10:17", endpoint: "GET /api/v1/quota", status: "success" },
    { id: 6, time: "2023-06-11 22:33", endpoint: "POST /api/v1/aiStream", status: "success" },
    { id: 7, time: "2023-06-11 20:19", endpoint: "POST /api/v1/aiResponse", status: "success" },
    { id: 8, time: "2023-06-11 18:45", endpoint: "GET /api/v1/billing", status: "success" },
  ];

  // Request usage data
  const requestUsage = {
    used: 8720,
    total: 10000,
    percentage: 87.2
  };

  // Show usage alert when approaching limit
  useEffect(() => {
    if (requestUsage.percentage > 85) {
      toast({
        title: "Quota Warning",
        description: `You've used ${requestUsage.used}/${requestUsage.total} requests (${requestUsage.percentage}%)`,
        variant: "default",
        className: "border border-white/20 bg-black text-white",
        duration: 5000,
      });
    }
  }, [toast]);

  // Handle export metrics
  const handleExportMetrics = (format: 'csv' | 'pdf') => {
    toast({
      title: "Export Started",
      description: `Your ${format.toUpperCase()} export has started and will download shortly.`,
      variant: "default",
      className: "border border-white/20 bg-black text-white",
    });
    
    // In a real app, this would trigger an actual download
    setTimeout(() => {
      toast({
        title: "Export Complete",
        description: `Your metrics have been exported as ${format.toUpperCase()}.`,
        variant: "default",
        className: "border border-white/20 bg-black text-white",
      });
    }, 2000);
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut();
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
        variant: "default",
        className: "border border-white/20 bg-black text-white",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to log out. Please try again.",
        variant: "default",
        className: "border border-white/20 bg-black text-white",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header with logout button */}
      <div className="w-full flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Business Dashboard</h1>
        <Button 
          variant="orchesity" 
          size="sm" 
          className="gap-2"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
      
      {/* Primary Tabs */}
      <Tabs 
        value={activePrimaryTab} 
        onValueChange={setActivePrimaryTab} 
        className="w-full mb-8"
      >
        <TabsList className="w-full bg-white/5 border border-white/10">
          <TabsTrigger 
            value="analytics" 
            className="flex-1 data-[state=active]:bg-white/10"
          >
            Analytics
          </TabsTrigger>
          <TabsTrigger 
            value="profile" 
            className="flex-1 data-[state=active]:bg-white/10"
          >
            Profile
          </TabsTrigger>
          <TabsTrigger 
            value="history" 
            className="flex-1 data-[state=active]:bg-white/10"
          >
            Request History
          </TabsTrigger>
        </TabsList>
        
        {/* Analytics Tab Content */}
        <TabsContent value="analytics">
          {/* Package & Billing Info */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Package</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold">Pro</div>
                  <Button variant="ghost" size="sm" className="text-white/80">
                    Upgrade
                  </Button>
                </div>
                <div className="mt-2 text-sm text-white/70">Renewed on July 1, 2023</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{requestUsage.used.toLocaleString()} / {requestUsage.total.toLocaleString()}</div>
                <Progress value={requestUsage.percentage} className="h-2 mt-2" />
                <div className="mt-2 text-sm text-white/70">Resets in 19 days</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Tokens</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.2M / 5M</div>
                <Progress value={64} className="h-2 mt-2" />
                <div className="mt-2 text-sm text-white/70">Resets in 19 days</div>
              </CardContent>
            </Card>
            
            {/* Billing Card */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Billing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-2">
                  <div>
                    <div className="font-medium text-sm text-white/70">Current Plan</div>
                    <div className="text-2xl font-bold">Basic</div>
                  </div>
                  <div className="text-sm text-white/70">Next billing: July 1, 2023</div>
                  <Button variant="orchesity" size="sm" className="w-full mt-2">
                    Upgrade Plan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Analytics Tabs */}
          <Tabs defaultValue="overview" className="mb-8">
            <TabsList className="bg-white/5 border border-white/10">
              <TabsTrigger value="overview" className="data-[state=active]:bg-white/10">Overview</TabsTrigger>
              <TabsTrigger value="providers" className="data-[state=active]:bg-white/10">Providers</TabsTrigger>
              <TabsTrigger value="performance" className="data-[state=active]:bg-white/10">Performance</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex justify-between">
                      <span>Daily Requests</span>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="gap-1 text-xs"
                          onClick={() => handleExportMetrics('csv')}
                        >
                          <FileDown className="h-3.5 w-3.5" />
                          CSV
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="gap-1 text-xs"
                          onClick={() => handleExportMetrics('pdf')}
                        >
                          <FileDown className="h-3.5 w-3.5" />
                          PDF
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <AreaChart 
                        data={areaChartData} 
                        index="name" 
                        categories={["value"]}
                        colors={["white"]}
                        yAxisWidth={40}
                        showGrid={true}
                        className="text-white/80"
                      />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex justify-between">
                      <span>API Usage by Provider</span>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="gap-1 text-xs"
                          onClick={() => handleExportMetrics('csv')}
                        >
                          <FileDown className="h-3.5 w-3.5" />
                          CSV
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="gap-1 text-xs"
                          onClick={() => handleExportMetrics('pdf')}
                        >
                          <FileDown className="h-3.5 w-3.5" />
                          PDF
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <BarChart 
                        data={providersData}
                        index="name"
                        categories={["value"]}
                        colors={["white"]}
                        yAxisWidth={40}
                        className="text-white/80"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="providers">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <Card className="border-l-4 border-l-blue-500">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium">OpenAI</div>
                        <div className="text-2xl font-bold mt-1">5,668</div>
                        <div className="text-sm text-white/70 mt-1">Requests this month</div>
                      </div>
                      <div className="bg-blue-500/20 p-2 rounded-full">
                        <Zap className="h-5 w-5 text-blue-400" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-purple-500">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium">Claude</div>
                        <div className="text-2xl font-bold mt-1">2,180</div>
                        <div className="text-sm text-white/70 mt-1">Requests this month</div>
                      </div>
                      <div className="bg-purple-500/20 p-2 rounded-full">
                        <Clock className="h-5 w-5 text-purple-400" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-amber-500">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium">Grok</div>
                        <div className="text-2xl font-bold mt-1">872</div>
                        <div className="text-sm text-white/70 mt-1">Requests this month</div>
                      </div>
                      <div className="bg-amber-500/20 p-2 rounded-full">
                        <Wallet className="h-5 w-5 text-amber-400" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="performance">
              <div className="grid grid-cols-1 gap-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <div className="text-sm text-white/70">Average Latency</div>
                        <div className="text-2xl font-bold">320ms</div>
                        <div className="text-xs text-green-400 flex items-center">
                          <span>↓ 12% from last month</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm text-white/70">Success Rate</div>
                        <div className="text-2xl font-bold">99.8%</div>
                        <div className="text-xs text-green-400 flex items-center">
                          <span>↑ 0.2% from last month</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm text-white/70">Avg. Cost per Request</div>
                        <div className="text-2xl font-bold">$0.012</div>
                        <div className="text-xs text-red-400 flex items-center">
                          <span>↑ 3% from last month</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Recent Requests */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Requests</CardTitle>
              <Button variant="orchesity" size="sm" className="gap-2">
                <DownloadCloud className="h-4 w-4" />
                Export
              </Button>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border border-white/10 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-white/5 bg-white/[0.02]">
                      <TableHead className="text-white/80">Request ID</TableHead>
                      <TableHead className="text-white/80">Timestamp</TableHead>
                      <TableHead className="text-white/80">Provider</TableHead>
                      <TableHead className="text-white/80">Status</TableHead>
                      <TableHead className="text-white/80">Latency</TableHead>
                      <TableHead className="text-white/80">Tokens</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentRequests.map((request) => (
                      <TableRow 
                        key={request.id} 
                        className="hover:bg-white/5"
                      >
                        <TableCell className="font-mono">{request.id}</TableCell>
                        <TableCell>{request.timestamp}</TableCell>
                        <TableCell>{request.provider}</TableCell>
                        <TableCell>
                          {request.status === "success" ? (
                            <span className="flex items-center gap-1 text-green-400">
                              <Zap className="h-3 w-3" />
                              Success
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 text-red-400">
                              <AlertCircle className="h-3 w-3" />
                              Error
                            </span>
                          )}
                        </TableCell>
                        <TableCell>
                          {request.status === "success" ? `${request.latency}ms` : "-"}
                        </TableCell>
                        <TableCell>
                          {request.status === "success" ? request.tokens : "-"}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Profile Tab Content */}
        <TabsContent value="profile">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* User Profile Card */}
            <Card className="border border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <User className="h-5 w-5" />
                  User Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm text-white/70 mb-1">Email</div>
                  <div className="text-lg font-medium">{user?.email || "user@example.com"}</div>
                </div>
                <div>
                  <div className="text-sm text-white/70 mb-1">Name</div>
                  <div className="text-lg font-medium">{user?.name || "Not set"}</div>
                </div>
                <div>
                  <div className="text-sm text-white/70 mb-1">Account Type</div>
                  <div className="text-lg font-medium capitalize">{user?.userType || "Business"}</div>
                </div>
                <Button variant="orchesity" size="sm" className="mt-4 w-full">
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
            
            {/* API Keys Card */}
            <Card className="border border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Zap className="h-5 w-5" />
                  API Keys
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm text-white/70 mb-1">Live API Key</div>
                  <div className="font-mono text-sm bg-white/5 p-2 rounded flex justify-between items-center">
                    <span>or_live_*************xPd9</span>
                    <Button variant="ghost" size="sm" className="h-7 px-2">
                      Copy
                    </Button>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-white/70 mb-1">Test API Key</div>
                  <div className="font-mono text-sm bg-white/5 p-2 rounded flex justify-between items-center">
                    <span>or_test_*************jH2k</span>
                    <Button variant="ghost" size="sm" className="h-7 px-2">
                      Copy
                    </Button>
                  </div>
                </div>
                <div className="pt-2">
                  <Button variant="orchesity" size="sm">
                    Regenerate API Keys
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* History Tab Content */}
        <TabsContent value="history">
          <Card className="border border-white/10">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Request History</CardTitle>
              <div className="flex gap-2">
                <Button variant="orchesity" size="sm" className="gap-2">
                  <DownloadCloud className="h-4 w-4" />
                  Export History
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border border-white/10 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-white/5 bg-white/[0.02]">
                      <TableHead className="text-white/80">Time</TableHead>
                      <TableHead className="text-white/80">Endpoint</TableHead>
                      <TableHead className="text-white/80">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {requestHistoryData.map((request) => (
                      <TableRow 
                        key={request.id} 
                        className="hover:bg-white/5"
                      >
                        <TableCell>{request.time}</TableCell>
                        <TableCell className="font-mono text-sm">{request.endpoint}</TableCell>
                        <TableCell>
                          {request.status === "success" ? (
                            <span className="flex items-center gap-1 text-green-400">
                              <Zap className="h-3 w-3" />
                              Success
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 text-red-400">
                              <AlertCircle className="h-3 w-3" />
                              Error
                            </span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="mt-4 flex justify-center">
                <a href="#" className="text-sm text-white/70 hover:underline hover:text-white flex items-center gap-1">
                  View Full Request History
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Footer */}
      <footer className="border-t border-white/10 p-6 mt-auto">
        <div className="container mx-auto">
          <div className="text-center text-white/60 text-sm">
            © {new Date().getFullYear()} Orchesity. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BusinessPortal;
