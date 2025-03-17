
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ApiReference = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">API Reference</h1>
              <p className="text-xl text-white/70">Complete documentation for the ORCHESITY API</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="introduction" className="w-full">
                <TabsList className="w-full grid grid-cols-4 mb-8 bg-white/5 p-1 rounded-lg">
                  <TabsTrigger value="introduction" className="data-[state=active]:bg-white/10">Introduction</TabsTrigger>
                  <TabsTrigger value="authentication" className="data-[state=active]:bg-white/10">Authentication</TabsTrigger>
                  <TabsTrigger value="endpoints" className="data-[state=active]:bg-white/10">Endpoints</TabsTrigger>
                  <TabsTrigger value="examples" className="data-[state=active]:bg-white/10">Examples</TabsTrigger>
                </TabsList>
                
                <TabsContent value="introduction" className="p-6 border border-white/10 rounded-lg bg-white/5">
                  <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                  <p className="text-white/70 mb-4">
                    The ORCHESITY API allows you to integrate our AI orchestration capabilities directly into your applications. Our RESTful API provides programmatic access to all the features available in our web interface.
                  </p>
                  <h3 className="text-xl font-medium mt-6 mb-2">Base URL</h3>
                  <div className="bg-black p-4 rounded-md border border-white/20 font-mono text-white/80 mb-4">
                    https://api.orchesity.com/v1
                  </div>
                  <h3 className="text-xl font-medium mt-6 mb-2">Rate Limits</h3>
                  <p className="text-white/70">
                    Rate limits vary depending on your subscription plan. See the rate limits section in your dashboard for details specific to your account.
                  </p>
                </TabsContent>
                
                <TabsContent value="authentication" className="p-6 border border-white/10 rounded-lg bg-white/5">
                  <h2 className="text-2xl font-semibold mb-4">Authentication</h2>
                  <p className="text-white/70 mb-4">
                    The ORCHESITY API uses API keys for authentication. You can generate API keys from your account dashboard.
                  </p>
                  <h3 className="text-xl font-medium mt-6 mb-2">API Key Authentication</h3>
                  <p className="text-white/70 mb-2">Include your API key in the request header:</p>
                  <div className="bg-black p-4 rounded-md border border-white/20 font-mono text-white/80">
                    Authorization: Bearer YOUR_API_KEY
                  </div>
                </TabsContent>
                
                <TabsContent value="endpoints" className="p-6 border border-white/10 rounded-lg bg-white/5">
                  <h2 className="text-2xl font-semibold mb-4">Endpoints</h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-medium mb-2">Models</h3>
                      <div className="border border-white/10 rounded-md overflow-hidden">
                        <div className="bg-white/10 p-3 flex justify-between items-center">
                          <span className="font-mono text-white/90">GET /models</span>
                          <span className="text-white/60 text-sm">List available models</span>
                        </div>
                        <div className="p-4 bg-black">
                          <p className="text-white/70 text-sm">Returns a list of models available for use with your API key.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-medium mb-2">Completions</h3>
                      <div className="border border-white/10 rounded-md overflow-hidden">
                        <div className="bg-white/10 p-3 flex justify-between items-center">
                          <span className="font-mono text-white/90">POST /completions</span>
                          <span className="text-white/60 text-sm">Generate completions</span>
                        </div>
                        <div className="p-4 bg-black">
                          <p className="text-white/70 text-sm">Creates a completion for the provided prompt and parameters.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-medium mb-2">Chat</h3>
                      <div className="border border-white/10 rounded-md overflow-hidden">
                        <div className="bg-white/10 p-3 flex justify-between items-center">
                          <span className="font-mono text-white/90">POST /chat</span>
                          <span className="text-white/60 text-sm">Create chat completions</span>
                        </div>
                        <div className="p-4 bg-black">
                          <p className="text-white/70 text-sm">Creates a model response for the given chat conversation.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="examples" className="p-6 border border-white/10 rounded-lg bg-white/5">
                  <h2 className="text-2xl font-semibold mb-4">Examples</h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-medium mb-2">Chat Completion Example</h3>
                      <p className="text-white/70 mb-2">Request:</p>
                      <div className="bg-black p-4 rounded-md border border-white/20 font-mono text-white/80 text-sm mb-4 overflow-x-auto">
{`curl -X POST https://api.orchesity.com/v1/chat \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "model": "gpt-4",
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "Hello!"}
    ],
    "max_tokens": 150
  }'`}
                      </div>
                      <p className="text-white/70 mb-2">Response:</p>
                      <div className="bg-black p-4 rounded-md border border-white/20 font-mono text-white/80 text-sm overflow-x-auto">
{`{
  "id": "chat-12345",
  "object": "chat.completion",
  "created": 1677858242,
  "model": "gpt-4",
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "Hello! How can I assist you today?"
      },
      "finish_reason": "stop",
      "index": 0
    }
  ],
  "usage": {
    "prompt_tokens": 15,
    "completion_tokens": 9,
    "total_tokens": 24
  }
}`}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ApiReference;
