
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BlogPost = ({ title, date, excerpt, image, category }: { title: string; date: string; excerpt: string; image: string; category: string }) => (
  <div className="border border-white/10 rounded-lg overflow-hidden group hover:border-white/20 transition-all duration-300 flex flex-col h-full">
    <div className="h-48 bg-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
      <div className="absolute top-3 left-3 bg-white text-black text-xs font-semibold px-2 py-1 rounded">
        {category}
      </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="text-white/60 text-sm mb-2">{date}</div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient transition-all duration-300">{title}</h3>
      <p className="text-white/70 mb-4 flex-grow">{excerpt}</p>
      <div className="flex items-center text-white/60 group-hover:text-white/90 transition-all duration-300">
        <span className="text-sm">Read more</span>
        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </div>
  </div>
);

const Blog = () => {
  const blogPosts = [
    {
      title: "Introducing ORCHESITY: The Future of AI Orchestration",
      date: "September 15, 2023",
      excerpt: "Learn how ORCHESITY is revolutionizing the way organizations integrate and manage multiple AI providers.",
      image: "/blog/intro.jpg",
      category: "Announcements"
    },
    {
      title: "The Cost of AI Integration: How ORCHESITY Reduces TCO",
      date: "October 3, 2023",
      excerpt: "Discover how our platform can significantly reduce the total cost of ownership for AI implementation.",
      image: "/blog/cost.jpg",
      category: "Business"
    },
    {
      title: "Case Study: How Acme Corp Scaled Their AI with ORCHESITY",
      date: "October 21, 2023",
      excerpt: "See how a leading e-commerce company used ORCHESITY to scale their AI capabilities while reducing costs.",
      image: "/blog/case-study.jpg",
      category: "Case Study"
    },
    {
      title: "Best Practices for Multi-Provider AI Strategies",
      date: "November 8, 2023",
      excerpt: "Expert insights on how to effectively implement and manage a multi-provider AI strategy.",
      image: "/blog/best-practices.jpg",
      category: "Technical"
    },
    {
      title: "The Future of Enterprise AI: Trends to Watch in 2024",
      date: "December 1, 2023",
      excerpt: "Our predictions for how enterprise AI adoption will evolve in the coming year.",
      image: "/blog/trends.jpg",
      category: "Insights"
    },
    {
      title: "ORCHESITY SDK: Simplifying AI Integration for Developers",
      date: "January 15, 2024",
      excerpt: "An in-depth look at our new developer SDK and how it simplifies AI integration.",
      image: "/blog/sdk.jpg",
      category: "Technical"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">ORCHESITY Blog</h1>
              <p className="text-xl text-white/70">Insights, news, and perspectives on AI orchestration</p>
            </div>
            
            <div className="flex items-center justify-between mb-10">
              <div className="flex space-x-2">
                <Button variant="outline" className="bg-transparent border-white/10 hover:bg-white/5 text-white">
                  All Posts
                </Button>
                <Button variant="ghost" className="text-white/70 hover:text-white">
                  Technical
                </Button>
                <Button variant="ghost" className="text-white/70 hover:text-white">
                  Business
                </Button>
                <Button variant="ghost" className="text-white/70 hover:text-white">
                  Insights
                </Button>
              </div>
              
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search articles..."
                  className="py-2 px-4 pr-10 bg-transparent border border-white/10 rounded-md text-white placeholder:text-white/50 focus:outline-none focus:border-white/30"
                />
                <svg
                  className="absolute right-3 top-2.5 h-5 w-5 text-white/50"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <div key={index} className="opacity-0 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <BlogPost {...post} />
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-12">
              <Button variant="outline" className="border-white/10 hover:border-white/30 text-white hover:bg-white/5">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
