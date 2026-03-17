"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Upload, Settings, Activity, FileText, CheckSquare, Search, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const APPS = {
  "ceo": { name: "CEO Agent", color: "bg-agent-ceo", tags: ["Strategy", "Oversight", "Goals"] },
  "coo": { name: "COO Agent", color: "bg-agent-coo", tags: ["Operations", "Process", "Workflows"] },
  "content": { name: "Content Director", color: "bg-agent-content", tags: ["Media", "SEO", "Copywriting"] },
  "sales": { name: "Sales Agent", color: "bg-agent-sales", tags: ["Lead Gen", "Pipeline", "Analytics"] },
  "developer": { name: "Developer Agent", color: "bg-agent-developer", tags: ["Code", "Architecture", "Review"] },
  "finance": { name: "Finance Agent", color: "bg-agent-finance", tags: ["Budget", "Reports", "Audits"] },
  "client-success": { name: "Client Success", color: "bg-[#8B5CF6]", tags: ["Support", "NPS", "Onboarding"] }
};

export default function AgentInteraction() {
  const params = useParams();
  const id = params.id as string;
  const agent = APPS[id as keyof typeof APPS] || APPS["ceo"];
  
  const [messages, setMessages] = useState([
    { role: "agent", content: `Hello! I'm your ${agent.name}. I've reviewed our latest metrics. How can I assist you with your strategic priorities today?`, time: "9:00 AM" }
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", content: input, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    setInput("");
    
    // Simulate typing
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "agent", content: `I'm analyzing that request now. Based on my current SOPs and the task queue, I will prepare a comprehensive update for you shortly.`, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] bg-bg-primary">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/agents" className="p-2 bg-bg-secondary hover:bg-bg-hover border border-border-medium rounded-md group transition-colors">
          <ChevronLeft className="w-5 h-5 text-text-secondary group-hover:text-text-primary" />
        </Link>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-glow ${agent.color}`}>
          {agent.name.substring(0, 1)}
        </div>
        <div>
          <h1 className="text-text-2xl font-bold font-mono tracking-tight flex items-center gap-2">
            {agent.name}
            <span className="text-accent-green bg-green-500/10 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider h-max flex items-center gap-1">
              <Activity className="w-3 h-3" /> Online
            </span>
          </h1>
          <div className="text-sm text-text-secondary flex gap-2 mt-1">
            {agent.tags.map(t => (
              <span key={t} className="bg-bg-secondary px-2 py-0.5 rounded-sm border border-border-subtle text-xs">{t}</span>
            ))}
          </div>
        </div>
        <div className="ml-auto flex gap-2">
          <button className="p-2 border border-border-medium text-text-secondary hover:text-text-primary rounded-md transition-colors bg-bg-secondary flex gap-2 items-center text-sm font-medium">
            <CheckSquare className="w-4 h-4" /> Task Board
          </button>
          <button className="p-2 border border-border-medium text-text-secondary hover:text-text-primary rounded-md transition-colors bg-bg-secondary flex gap-2 items-center text-sm font-medium">
            <Settings className="w-4 h-4" /> Config
          </button>
        </div>
      </div>

      <div className="flex-1 border border-border-medium rounded-xl flex overflow-hidden bg-bg-secondary">
        {/* Chat Area */}
        <div className="flex-1 flex flex-col relative">
          <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
            {messages.map((m, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={i} 
                className={`flex gap-4 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                {m.role === "agent" && (
                  <div className={`w-8 h-8 rounded mt-1 flex-shrink-0 flex items-center justify-center text-white font-bold text-xs ${agent.color}`}>
                    {agent.name.substring(0, 1)}
                  </div>
                )}
                {m.role === "user" && (
                  <div className="w-8 h-8 rounded bg-bg-tertiary mt-1 flex-shrink-0 flex items-center justify-center border border-border-strong text-text-primary font-bold text-xs">
                    You
                  </div>
                )}
                
                <div className={`max-w-[75%] rounded-2xl p-4 ${m.role === "user" ? "bg-accent-blue/10 border-accent-blue/20 text-text-primary" : "bg-bg-tertiary text-text-secondary"} border border-border-subtle`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold text-sm text-text-primary">{m.role === "agent" ? agent.name : "You"}</span>
                    <span className="text-[10px] text-text-tertiary">{m.time}</span>
                  </div>
                  <div className="text-sm leading-relaxed">{m.content}</div>
                </div>
              </motion.div>
            ))}
            <div ref={endRef} />
          </div>
          
          <div className="p-4 border-t border-border-medium bg-bg-secondary mt-auto">
            <div className="relative flex items-center bg-bg-tertiary border border-border-strong rounded-xl overflow-hidden focus-within:border-accent-blue transition-colors shadow-sm">
              <button className="p-3 text-text-tertiary hover:text-text-primary transition-colors">
                <Upload className="w-5 h-5" />
              </button>
              <input 
                type="text" 
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSend()}
                placeholder="Message your agent or upload files..."
                className="flex-1 bg-transparent border-none py-3 text-sm focus:outline-none text-text-primary"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim()}
                className={`p-3 transition-colors ${input.trim() ? "text-accent-blue hover:text-blue-400" : "text-text-tertiary"}`}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <div className="text-center mt-2 text-[10px] text-text-tertiary font-mono">
              OMNI CORE AI • SHIFT+ENTER TO NEWLINE
            </div>
          </div>
        </div>

        {/* Sidebar Context */}
        <div className="w-72 border-l border-border-medium p-4 hidden lg:flex flex-col gap-6 bg-bg-primary overflow-y-auto">
          <div>
            <h3 className="text-xs font-bold text-text-tertiary uppercase tracking-wider mb-3">Active Tasks</h3>
            <div className="space-y-2 text-sm">
              <div className="bg-bg-secondary border border-border-subtle rounded-md p-3 hover:border-accent-blue transition-colors cursor-pointer group">
                <div className="font-semibold text-text-primary group-hover:text-accent-blue mb-1">Analyze Competitor Pricing</div>
                <div className="text-xs text-text-secondary flex items-center justify-between">
                  <span className="text-accent-amber bg-amber-500/10 px-1.5 py-0.5 rounded">In Progress</span>
                  <span>Due Today</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xs font-bold text-text-tertiary uppercase tracking-wider mb-3 flex justify-between items-center">
              Files In Context
              <button className="text-[10px] uppercase bg-bg-secondary px-2 py-0.5 rounded border border-border-subtle hover:border-border-strong transition-colors">+</button>
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 rounded-md hover:bg-bg-secondary border border-transparent hover:border-border-subtle transition-colors cursor-pointer group">
                <FileText className="w-4 h-4 text-text-secondary group-hover:text-accent-blue" />
                <span className="text-xs font-medium text-text-secondary flex-1 truncate">Q3_Objectives_Draft.pdf</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
