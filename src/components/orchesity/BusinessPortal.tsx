
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Download, Filter, Search, User, FileType, ChevronLeft, ChevronRight } from "lucide-react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useToast } from "@/hooks/use-toast";

// Sample data for the chart
const data = [
  { name: "Jan 1", requests: 400 },
  { name: "Jan 2", requests: 300 },
  { name: "Jan 3", requests: 500 },
  { name: "Jan 4", requests: 280 },
  { name: "Jan 5", requests: 590 },
  { name: "Jan 6", requests: 350 },
  { name: "Jan 7", requests: 470 },
];

// Sample data for the history table
const historyData = Array.from({ length: 30 }, (_, i) => ({
  id: `req_${Math.random().toString(36).substring(2, 8)}`,
  timestamp: new Date(Date.now() - i * 3600000).toISOString(),
  endpoint: Math.random() > 0.5 ? "POST /api/v1/ai" : "GET /api/v1/models",
  status: Math.random() > 0.2 ? "Success" : "Failed",
  latency: Math.floor(Math.random() * 1000) + 100,
}));

const BusinessPortal = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [timeRange, setTimeRange] = useState("7days");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [exportFormat, setExportFormat] = useState("csv");
  const itemsPerPage = 10;
  const { toast } = useToast();

  const startIndex = (currentPage - 1) * itemsPerPage;
  const filteredHistory = historyData.filter(item => 
    item.endpoint.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.status.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const paginatedHistory = filteredHistory.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredHistory.length / itemsPerPage);

  const handleExport = () => {
    toast({
      title: "[EN] Export Started",
      description: `[EN] Your data is being exported as ${exportFormat.toUpperCase()}. Download will begin shortly.`,
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">[EN] Business Portal</h1>

      {/* Profile Card */}
      <Card className="bg-black border border-white/10">
        <CardHeader className="pb-3">
          <CardTitle className="text-xl flex items-center gap-2">
            <User className="h-5 w-5" />
            [EN] Profile
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label className="text-sm text-white/70">[EN] Email</Label>
              <p className="text-white">user@example.com</p>
            </div>
            <div>
              <Label className="text-sm text-white/70">[EN] Account Type</Label>
              <p className="text-white">Business</p>
            </div>
          </div>
          <Button variant="orchesity" className="mt-4">
            [EN] Edit Profile
          </Button>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="bg-black border border-white/20 w-full">
          <TabsTrigger value="overview" className="flex-1 data-[state=active]:bg-white/10">
            [EN] Overview
          </TabsTrigger>
          <TabsTrigger value="history" className="flex-1 data-[state=active]:bg-white/10">
            [EN] Request History
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="mt-6 space-y-6">
          <Card className="bg-black border border-white/10">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl">[EN] Usage Analytics</CardTitle>
                <div className="flex items-center gap-4">
                  <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger className="w-[150px] bg-black border-white/20 text-white">
                      <SelectValue placeholder="[EN] Select Range" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-white/20 text-white">
                      <SelectItem value="1day">[EN] 1 Day</SelectItem>
                      <SelectItem value="7days">[EN] 7 Days</SelectItem>
                      <SelectItem value="30days">[EN] 30 Days</SelectItem>
                      <SelectItem value="custom">[EN] Custom</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select value={exportFormat} onValueChange={setExportFormat}>
                    <SelectTrigger className="w-[100px] bg-black border-white/20 text-white">
                      <SelectValue placeholder="[EN] Format" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-white/20 text-white">
                      <SelectItem value="csv">[EN] CSV</SelectItem>
                      <SelectItem value="pdf">[EN] PDF</SelectItem>
                      <SelectItem value="json">[EN] JSON</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Button variant="orchesity" size="sm" onClick={handleExport}>
                    <Download className="h-4 w-4 mr-2" />
                    [EN] Export Metrics
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ffffff" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="#ffffff" />
                    <YAxis stroke="#ffffff" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#000', borderColor: '#ffffff40', color: '#fff' }}
                      labelStyle={{ color: '#fff' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="requests" 
                      stroke="#ffffff" 
                      fillOpacity={1} 
                      fill="url(#colorRequests)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-black border border-white/10">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">[EN] Total Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">2,459</p>
                <p className="text-sm text-white/70 mt-1">+18% from last period</p>
              </CardContent>
            </Card>
            <Card className="bg-black border border-white/10">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">[EN] Avg. Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">320ms</p>
                <p className="text-sm text-white/70 mt-1">-5% from last period</p>
              </CardContent>
            </Card>
            <Card className="bg-black border border-white/10">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">[EN] Success Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">99.2%</p>
                <p className="text-sm text-white/70 mt-1">+0.5% from last period</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="history" className="mt-6">
          <Card className="bg-black border border-white/10">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <CardTitle className="text-xl">[EN] Request History</CardTitle>
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                  <Input 
                    placeholder="[EN] Search requests..." 
                    className="pl-9 w-full"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1); // Reset to first page on search
                    }}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-white/70 text-sm">[EN] Time</th>
                      <th className="text-left py-3 px-4 text-white/70 text-sm">[EN] Endpoint</th>
                      <th className="text-left py-3 px-4 text-white/70 text-sm">[EN] Status</th>
                      <th className="text-right py-3 px-4 text-white/70 text-sm">[EN] Latency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedHistory.map((item) => (
                      <tr key={item.id} className="border-b border-white/10">
                        <td className="py-3 px-4 text-sm">{formatDate(item.timestamp)}</td>
                        <td className="py-3 px-4 text-sm font-mono">{item.endpoint}</td>
                        <td className="py-3 px-4 text-sm">
                          <span className={`inline-block px-2 py-1 rounded text-xs ${
                            item.status === "Success" 
                              ? "bg-green-900/30 text-green-300" 
                              : "bg-red-900/30 text-red-300"
                          }`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-right">{item.latency}ms</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {filteredHistory.length === 0 && (
                <div className="text-center py-8 text-white/60">
                  [EN] No results found for your search.
                </div>
              )}
              
              {filteredHistory.length > 0 && (
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-sm text-white/70">
                    [EN] Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredHistory.length)} of {filteredHistory.length} results
                  </p>
                  
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious 
                          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                          className={`${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''} bg-black text-white border border-white hover:bg-white/10`}
                        />
                      </PaginationItem>
                      
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        let pageNum = i + 1;
                        if (totalPages > 5 && currentPage > 3) {
                          pageNum = currentPage - 3 + i;
                        }
                        if (pageNum > totalPages) return null;
                        
                        return (
                          <PaginationItem key={pageNum}>
                            <PaginationLink
                              onClick={() => setCurrentPage(pageNum)} 
                              isActive={currentPage === pageNum}
                              className="bg-black text-white border border-white hover:bg-white/10"
                            >
                              {pageNum}
                            </PaginationLink>
                          </PaginationItem>
                        );
                      })}
                      
                      <PaginationItem>
                        <PaginationNext 
                          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                          className={`${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''} bg-black text-white border border-white hover:bg-white/10`}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BusinessPortal;
