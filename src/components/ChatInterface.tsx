
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  MessageCircle, 
  Send, 
  X, 
  Bot, 
  User, 
  Minimize2, 
  Maximize2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Message = {
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

const ChatInterface = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "Hi there! I'm ORCHESITY's AI assistant. How can I help you today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Simulate AI response
  const simulateResponse = (query: string) => {
    setIsTyping(true);
    
    // Prepare some canned responses based on common queries
    const responses: Record<string, string> = {
      "pricing": "Our pricing plans start at $49/month for the Basic plan. You can check out our pricing page for more details.",
      "features": "ORCHESITY offers AI orchestration, workflow automation, and integration with various AI providers. Visit our features page to learn more.",
      "hello": "Hello! How can I assist you with ORCHESITY today?",
      "hi": "Hi there! How can I help you with our AI orchestration platform?",
      "contact": "You can reach our support team at support@orchesity.com or through the contact form on our website.",
      "trial": "Yes, we offer a 14-day free trial with full access to all features. No credit card required to start!",
      "default": "Thank you for your message. Our AI orchestration platform helps streamline your AI operations. Is there something specific about ORCHESITY you'd like to know?"
    };
    
    // Find the best matching response or use default
    let responseText = responses.default;
    for (const [keyword, response] of Object.entries(responses)) {
      if (query.toLowerCase().includes(keyword)) {
        responseText = response;
        break;
      }
    }
    
    // Simulate typing delay
    setTimeout(() => {
      setMessages(prev => [...prev, {
        content: responseText,
        sender: 'ai',
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    simulateResponse(inputMessage);
    setInputMessage("");
    
    // Focus back on textarea
    setTimeout(() => {
      textareaRef.current?.focus();
    }, 0);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsMinimized(false);
      toast({
        title: "Chat activated",
        description: "Welcome to ORCHESITY AI Assistant",
      });
    } else if (!isMinimized) {
      setIsMinimized(true);
    } else {
      setIsMinimized(false);
    }
  };

  const closeChat = () => {
    setIsOpen(false);
    toast({
      title: "Chat closed",
      description: "You can reopen chat anytime",
    });
  };

  return (
    <>
      {/* Chat button - always visible in bottom-right corner */}
      <div 
        className="fixed bottom-6 right-6 z-50 shadow-lg"
        aria-label="Chat with ORCHESITY AI"
      >
        {!isOpen && (
          <Button
            onClick={toggleChat}
            className="w-14 h-14 rounded-full bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:bg-white/90 transition-all duration-300"
            size="icon"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        )}
      </div>

      {/* Chat interface */}
      {isOpen && (
        <div className={`fixed z-50 ${isMinimized ? 'bottom-6 right-6 w-auto h-auto' : 'bottom-6 right-6 sm:bottom-8 sm:right-8 w-[90vw] sm:w-[400px] h-[500px] max-h-[80vh]'}`}>
          {isMinimized ? (
            <Button
              onClick={toggleChat}
              className="w-14 h-14 rounded-full bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:bg-white/90 transition-all duration-300"
              size="icon"
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
          ) : (
            <div className="flex flex-col h-full rounded-lg overflow-hidden border border-white/20 bg-black/90 backdrop-blur-md shadow-xl">
              {/* Chat header */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/10 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <Bot className="h-5 w-5 text-white" />
                  <h3 className="font-medium text-white">ORCHESITY AI Assistant</h3>
                </div>
                <div className="flex items-center space-x-1">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 rounded-full text-white hover:bg-white/10"
                    onClick={toggleChat}
                  >
                    <Minimize2 className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 rounded-full text-white hover:bg-white/10"
                    onClick={closeChat}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Chat messages */}
              <ScrollArea className="flex-1 p-4 ">
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div 
                      key={index} 
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start max-w-[85%] space-x-2 ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
                        <Avatar className={message.sender === 'ai' ? 'bg-white/10 text-white' : 'bg-white text-black'}>
                          {message.sender === 'ai' ? (
                            <Bot className="h-5 w-5" />
                          ) : (
                            <User className="h-5 w-5" />
                          )}
                        </Avatar>
                        <div className={`rounded-2xl px-4 py-3 ${message.sender === 'user' ? 'bg-white text-black' : 'bg-white/10 text-white'}`}>
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-start max-w-[85%] space-x-2">
                        <Avatar className="bg-white/10 text-white">
                          <Bot className="h-5 w-5" />
                        </Avatar>
                        <div className="rounded-2xl px-4 py-3 bg-white/10 text-white">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 rounded-full bg-white/70 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-2 h-2 rounded-full bg-white/70 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-2 h-2 rounded-full bg-white/70 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>
              
              {/* Chat input */}
              <div className="p-3 border-t border-white/10">
                <div className="flex items-end space-x-2">
                  <Textarea
                    ref={textareaRef}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    className="min-h-[40px] max-h-[120px] resize-none bg-white/5 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-white/30"
                  />
                  <Button 
                    size="icon" 
                    className="h-10 w-10 rounded-full bg-white text-black hover:bg-white/90"
                    onClick={handleSendMessage}
                    disabled={inputMessage.trim() === '' || isTyping}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ChatInterface;
