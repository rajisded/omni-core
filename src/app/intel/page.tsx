"use client";

import { motion } from "framer-motion";
import { Search, Flame, LineChart, ExternalLink, BookmarkPlus, Copy, Heart, MessageCircle } from "lucide-react";

export default function CompetitorIntelligence() {
  const competitors = [
    { 
      id: 1, 
      name: "AcmeAI", 
      handle: "@acme_ai", 
      platform: "Twitter", 
      time: "2 hours ago",
      content: "The future isn't just about large models, it's about specialized agent swarms working together. Here's a thread on how we orchestrated 15 agents to replace our entire marketing department... 🧵 👇", 
      stats: { likes: "12k", comments: "450" },
      highlight: true
    },
    { 
      id: 2, 
      name: "Synapse Labs", 
      handle: "@synapselabs", 
      platform: "LinkedIn", 
      time: "6 hours ago",
      content: "Excited to announce our new framework for deterministic LLM outputs in financial workflows. We achieved 99.9% accuracy parsing 10Ks. Read the whitepaper.", 
      stats: { likes: "4.2k", comments: "180" },
      highlight: false
    },
    { 
      id: 3, 
      name: "AgentOS", 
      handle: "@agent_os_tech", 
      platform: "YouTube", 
      time: "1 day ago",
      content: "How to Build a Coding Agent From Scratch (Python Tutorial)", 
      stats: { likes: "45k", comments: "2.1k" },
      highlight: false
    }
  ];

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-text-3xl font-bold tracking-tight mb-2 flex items-center gap-3">
            <Search className="w-8 h-8 text-accent-blue" />
            Competitor Intelligence
          </h1>
          <p className="text-text-secondary">Track, analyze, and learn from top industry content</p>
        </div>
        
        <div className="flex bg-bg-secondary p-1 rounded-lg border border-border-strong items-center gap-1.5 transition-colors">
          <button className="px-4 py-1.5 rounded-md bg-bg-tertiary text-text-primary text-sm font-medium shadow-sm transition-all">Feed</button>
          <button className="px-4 py-1.5 rounded-md text-text-secondary hover:text-text-primary text-sm font-medium transition-all">Trend Analysis</button>
          <button className="px-4 py-1.5 rounded-md text-text-secondary hover:text-text-primary text-sm font-medium transition-all">Gap Report</button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Feed */}
        <div className="lg:w-2/3 space-y-4">
          <div className="flex items-center justify-between mt-2">
             <div className="flex items-center gap-2 px-3 py-1.5 bg-accent-blue/10 text-accent-blue border border-accent-blue/20 rounded-full font-bold text-xs uppercase tracking-wider h-max">
                <Flame className="w-3.5 h-3.5" /> High Engagement
              </div>
            <div className="flex gap-2">
              <select className="bg-bg-secondary border border-border-medium rounded-md px-3 py-1.5 text-sm text-text-secondary outline-none focus:border-accent-blue transition-colors">
                <option>All Competitors</option>
                <option>AcmeAI</option>
                <option>Synapse Labs</option>
              </select>
               <select className="bg-bg-secondary border border-border-medium rounded-md px-3 py-1.5 text-sm text-text-secondary outline-none focus:border-accent-blue transition-colors">
                <option>Last 24 Hours</option>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-5">
            {competitors.map((post, idx) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className={`bg-bg-secondary border rounded-xl p-6 transition-all group ${post.highlight ? 'border-accent-blue/50 shadow-[0_0_15px_-3px_rgba(14,165,233,0.1)]' : 'border-border-medium hover:border-border-strong'}`}
              >
                <div className="flex justify-between items-start mb-4">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-bg-tertiary border border-border-subtle flex items-center justify-center font-bold text-lg">{post.name[0]}</div>
                     <div>
                       <div className="font-bold flex items-center gap-2">{post.name}</div>
                       <div className="text-sm text-text-secondary flex gap-2">
                         <span>{post.handle}</span> • <span>{post.platform}</span> • <span>{post.time}</span>
                       </div>
                     </div>
                   </div>
                   <button className="text-text-tertiary hover:text-text-primary p-2 transition-colors">
                     <ExternalLink className="w-5 h-5" />
                   </button>
                </div>
                
                <p className="text-text-primary leading-relaxed text-[15px] mb-6 whitespace-pre-line">{post.content}</p>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-border-subtle pt-4">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5 text-text-secondary text-sm font-medium">
                      <Heart className="w-4 h-4 text-accent-red" /> {post.stats.likes}
                    </div>
                    <div className="flex items-center gap-1.5 text-text-secondary text-sm font-medium">
                      <MessageCircle className="w-4 h-4" /> {post.stats.comments}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors text-sm font-medium bg-bg-tertiary border border-border-subtle hover:border-border-strong px-3 py-1.5 rounded-md">
                       <BookmarkPlus className="w-4 h-4" /> Save
                    </button>
                    <button className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors text-sm font-medium bg-bg-tertiary border border-border-subtle hover:border-border-strong px-3 py-1.5 rounded-md">
                       <LineChart className="w-4 h-4" /> Analyze
                    </button>
                    <button className="flex items-center gap-2 text-white transition-colors text-sm font-medium bg-accent-blue hover:bg-blue-600 px-3 py-1.5 rounded-md shadow-sm">
                       <Copy className="w-4 h-4" /> Generate Similar
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Sidebar - Analytics */}
        <div className="lg:w-1/3 space-y-6">
          <div className="bg-bg-secondary border border-border-medium rounded-xl p-6">
             <h3 className="font-bold text-text-primary mb-4 flex items-center gap-2">
               <LineChart className="w-5 h-5 text-accent-purple" />
               Trending Topics
             </h3>
             <div className="space-y-4">
               {[
                 { topic: "Multi-Agent Systems", volume: "+125%", intent: "High" },
                 { topic: "RAG in Finance", volume: "+84%", intent: "Medium" },
                 { topic: "Evaluating Coding Agents", volume: "+42%", intent: "High" },
               ].map(t => (
                 <div key={t.topic} className="flex flex-col gap-1 border-b border-border-subtle pb-3 last:border-0 last:pb-0">
                   <div className="font-medium text-text-primary flex justify-between">
                     {t.topic}
                     <span className="text-accent-green text-sm font-bold">{t.volume}</span>
                   </div>
                   <div className="text-xs text-text-tertiary uppercase font-bold tracking-wider">Purchase Intent: {t.intent}</div>
                 </div>
               ))}
             </div>
          </div>
          
           <div className="bg-bg-secondary border border-border-medium rounded-xl p-6">
             <h3 className="font-bold text-text-primary mb-4">Competitor Volume (7d)</h3>
             <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium">AcmeAI</span>
                    <span className="text-text-secondary">42 posts</span>
                  </div>
                  <div className="w-full bg-bg-tertiary rounded-full h-2 overflow-hidden">
                    <div className="bg-accent-blue h-full w-[85%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium">Synapse Labs</span>
                    <span className="text-text-secondary">28 posts</span>
                  </div>
                  <div className="w-full bg-bg-tertiary rounded-full h-2 overflow-hidden">
                    <div className="bg-accent-purple h-full w-[55%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium">AgentOS</span>
                    <span className="text-text-secondary">15 posts</span>
                  </div>
                  <div className="w-full bg-bg-tertiary rounded-full h-2 overflow-hidden">
                    <div className="bg-agent-sales h-full w-[35%]" />
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
