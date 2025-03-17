
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "How quickly can I integrate ORCHESITY with my existing systems?",
      answer: "Most customers complete basic integration within 5 minutes using our SDK. More complex enterprise integrations typically take less than a day with the support of our technical team."
    },
    {
      question: "Which AI providers does ORCHESITY support?",
      answer: "We support all major AI providers including OpenAI (GPT-4), Anthropic (Claude), Grok, Mistral AI, LLaMA, Cohere, AI21 Labs, and many more. Our architecture allows for quick addition of new providers as they emerge."
    },
    {
      question: "How does ORCHESITY help reduce API costs?",
      answer: "ORCHESITY implements intelligent caching, request batching, and model selection based on your cost preferences. Many customers report 30-40% cost savings compared to direct API usage."
    },
    {
      question: "Is ORCHESITY suitable for enterprise deployments?",
      answer: "Absolutely. ORCHESITY is built with enterprise requirements in mind, including SOC 2 compliance, SSO integration, audit logging, and dedicated support. We serve enterprises across financial services, healthcare, and technology sectors."
    },
    {
      question: "Can I self-host ORCHESITY or is it only available as a cloud service?",
      answer: "We offer both deployment options. Our managed cloud service provides the fastest setup with minimal overhead, while our enterprise edition can be deployed in your own cloud account or on-premise infrastructure for maximum control."
    },
    {
      question: "What kind of performance improvements can I expect?",
      answer: "Most customers see 50-70% reduction in latency through our optimized routing and caching layer. Our parallel processing capabilities can also significantly speed up complex AI workflows that require multiple model calls."
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-black/40 to-transparent opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Frequently Asked Questions
          </h2>
          <p className="text-white/70 text-lg">
            Everything you need to know about ORCHESITY and how it can transform your AI integration.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-white/10 rounded-lg bg-black/40 backdrop-blur-sm px-6 overflow-hidden hover:border-white/20 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-medium py-5 text-white hover:text-white/90">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-5 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <p className="text-white/70 mb-6">
              Still have questions? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/5 transition-all duration-300 text-white"
              >
                Contact Support
              </a>
              <a 
                href="/documentation" 
                className="px-6 py-3 rounded-lg bg-white text-black hover:bg-white/90 transition-all duration-300"
              >
                Read Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
