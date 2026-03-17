"use client";

import { motion } from "framer-motion";
import { Phone, Play, FileText, CheckCircle, UploadCloud, Search, List, TrendingUp } from "lucide-react";

export default function SalesHub() {
  const calls = [
    { 
      id: 1, 
      company: "Acme Corp", 
      type: "Discovery Call", 
      duration: "45:23", 
      time: "3:00 PM",
      sentiment: "Positive", 
      sentimentColor: "text-accent-green",
      nextStep: "Follow-up scheduled", 
      status: "Analyzing"
    },
    { 
      id: 2, 
      company: "Beta Inc", 
      type: "Demo Call", 
      duration: "62:10", 
      time: "1:30 PM",
      sentiment: "Neutral", 
      sentimentColor: "text-accent-amber",
      nextStep: "Send pricing proposal", 
      status: "Summarized"
    },
    { 
      id: 3, 
      company: "Globex UI", 
      type: "Discovery Call", 
      duration: "30:05", 
      time: "11:00 AM",
      sentiment: "Positive", 
      sentimentColor: "text-accent-green",
      nextStep: "Technical review", 
      status: "Summarized"
    },
    { 
      id: 4, 
      company: "Cyberdyne", 
      type: "Negotiation", 
      duration: "18:40", 
      time: "9:45 AM",
      sentiment: "Negative", 
      sentimentColor: "text-accent-red",
      nextStep: "Needs review from VP", 
      status: "Action Required"
    }
  ];

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-text-3xl font-bold tracking-tight mb-2 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-agent-sales" />
            Sales Hub
          </h1>
          <p className="text-text-secondary">AI-powered transcriptions, summaries, and deal intelligence</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-agent-sales hover:opacity-90 text-white rounded-md font-medium transition-colors cursor-pointer">
            <UploadCloud className="w-5 h-5" />
            Upload Recording
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Call List */}
        <div className="lg:col-span-1 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-text-xl font-semibold">Today's Calls (8)</h2>
            <div className="flex bg-bg-secondary border border-border-medium rounded-md p-1">
              <button className="p-1 px-2 rounded bg-bg-tertiary text-text-primary shadow-sm"><List className="w-4 h-4" /></button>
            </div>
          </div>
          
          <div className="space-y-3">
            {calls.map((call, idx) => (
              <motion.div 
                key={call.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx }}
                className={`p-4 rounded-xl border border-border-medium bg-bg-secondary hover:border-agent-sales transition-all cursor-pointer ${idx === 0 ? 'border-agent-sales shadow-glow' : ''}`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-text-primary text-lg">{call.company}</h3>
                  <span className="text-xs text-text-tertiary">{call.time}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-text-secondary mb-3">
                  <span className="bg-bg-tertiary px-2 py-0.5 rounded text-xs">{call.type}</span>
                  • <Phone className="w-3 h-3" /> {call.duration}
                </div>
                
                <div className="flex items-center gap-2 text-xs font-medium mb-1">
                  Sentiment: <span className={call.sentimentColor}>{call.sentiment}</span>
                </div>
                <div className="text-xs text-text-secondary truncate">
                  <span className="font-semibold text-text-primary">Next:</span> {call.nextStep}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column - Call Transcript & Analysis */}
        <div className="lg:col-span-2 space-y-4 h-[calc(100vh-220px)] flex flex-col">
          <div className="flex items-center justify-between">
            <h2 className="text-text-xl font-semibold opacity-0">Analysis</h2> {/* Spacer */}
          </div>
          
          <div className="bg-bg-secondary border border-border-medium rounded-xl flex-1 flex flex-col overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-agent-sales opacity-5 blur-[100px] pointer-events-none" />
            
            <div className="p-6 border-b border-border-medium flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold mb-1">Acme Corp - Discovery Call</h2>
                  <p className="text-text-secondary text-sm">Hosted by Sarah M. • Recorded today at 3:00 PM</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 bg-bg-tertiary border border-border-strong text-text-primary rounded text-sm hover:bg-bg-hover transition-colors">
                    <Play className="w-4 h-4 text-agent-sales" /> Play Audio
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-2">
                <div className="bg-bg-primary border border-border-subtle p-3 rounded-lg">
                  <div className="text-xs text-text-tertiary uppercase tracking-wider font-bold mb-1">AI Summary</div>
                  <div className="text-sm font-medium">Strong interest in Enterprise plan. Security review requested.</div>
                </div>
                <div className="bg-bg-primary border border-border-subtle p-3 rounded-lg">
                  <div className="text-xs text-text-tertiary uppercase tracking-wider font-bold mb-1">Talk/Listen</div>
                  <div className="text-sm font-medium text-agent-sales">45% Talk / 55% Listen</div>
                </div>
                <div className="bg-bg-primary border border-border-subtle p-3 rounded-lg">
                  <div className="text-xs text-text-tertiary uppercase tracking-wider font-bold mb-1">Key Objection</div>
                  <div className="text-sm font-medium">Implementation timeline</div>
                </div>
              </div>
            </div>
            
            <div className="flex border-b border-border-subtle">
              <button className="px-6 py-3 border-b-2 border-agent-sales text-text-primary font-medium text-sm">Transcript</button>
              <button className="px-6 py-3 border-b-2 border-transparent text-text-secondary hover:text-text-primary font-medium text-sm transition-colors">Action Items <span className="ml-1 bg-agent-sales text-white px-1.5 py-0.5 rounded text-[10px]">3</span></button>
              <button className="px-6 py-3 border-b-2 border-transparent text-text-secondary hover:text-text-primary font-medium text-sm transition-colors">Insights</button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
              <div className="space-y-4 max-w-2xl text-sm">
                <div className="flex gap-4">
                  <div className="w-10 text-xs font-medium text-text-tertiary text-right pt-0.5 mt-1">00:00</div>
                  <div className="flex-1">
                    <div className="font-bold text-agent-sales mb-1">Sarah (Sales Representative)</div>
                    <div className="text-text-secondary leading-relaxed">Hi John, it's great to meet you. To kick things off, I'd love to learn more about the challenges your team is facing with AI agent orchestration right now.</div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 text-xs font-medium text-text-tertiary text-right pt-0.5 mt-1">00:45</div>
                  <div className="flex-1">
                    <div className="font-bold text-text-primary mb-1">John (Prospect)</div>
                    <div className="text-text-secondary leading-relaxed">Hi Sarah. Yes, so we currently have 3 different teams building standalone LLM wrappers, but there's no centralized way to deploy or track them. We need an OS to handle this. Our main concern is security and deployment timeline.</div>
                  </div>
                </div>
                
                <div className="bg-bg-primary border border-agent-sales/30 p-4 rounded-lg my-6 flex gap-3 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-agent-sales rounded-l-lg" />
                  <CheckCircle className="w-5 h-5 text-agent-sales shrink-0" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-agent-sales mb-1">AI Detected Interest Signal</div>
                    <div className="text-sm">Prospect expressed clear need for "Centralized OS" and highlighted "Security" as main concern. This aligns with Enterprise Tier offering.</div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 text-xs font-medium text-text-tertiary text-right pt-0.5 mt-1">01:30</div>
                  <div className="flex-1">
                    <div className="font-bold text-agent-sales mb-1">Sarah (Sales Representative)</div>
                    <div className="text-text-secondary leading-relaxed">That makes perfect sense. Omni Core actually has a dedicated security review dashboard and we can normally deploy via our private VPC in less than 2 weeks. Would you like me to show you the architecture?</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t border-border-medium bg-bg-tertiary">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" />
                <input type="text" placeholder="Ask AI about this call..." className="w-full bg-bg-primary border border-border-strong rounded-md pl-10 pr-4 py-2.5 text-sm focus:border-agent-sales outline-none transition-all text-text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
