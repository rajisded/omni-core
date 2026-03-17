"use client";

import { motion } from "framer-motion";
import {
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  Mail,
  PenTool,
  Search,
  Filter,
  Play
} from "lucide-react";

const templates = [
  { id: 1, platform: "Instagram", name: "Hook-Value-CTA Reel", icon: Instagram, color: "text-pink-500", bg: "bg-pink-500/10", tag: "Video" },
  { id: 2, platform: "YouTube", name: "Problem-Solution", icon: Youtube, color: "text-red-500", bg: "bg-red-500/10", tag: "Long-form" },
  { id: 3, platform: "LinkedIn", name: "Thought Leadership", icon: Linkedin, color: "text-blue-500", bg: "bg-blue-500/10", tag: "Post" },
  { id: 4, platform: "Twitter", name: "Viral Thread", icon: Twitter, color: "text-sky-500", bg: "bg-sky-500/10", tag: "Thread" },
  { id: 5, platform: "Newsletter", name: "Weekly Digest", icon: Mail, color: "text-amber-500", bg: "bg-amber-500/10", tag: "Email" },
  { id: 6, platform: "Instagram", name: "Carousel Tutorial", icon: Instagram, color: "text-pink-500", bg: "bg-pink-500/10", tag: "Carousel" },
  { id: 7, platform: "YouTube", name: "Top 10 Listicle", icon: Youtube, color: "text-red-500", bg: "bg-red-500/10", tag: "Long-form" },
  { id: 8, platform: "Blog", name: "SEO Deep Dive", icon: PenTool, color: "text-emerald-500", bg: "bg-emerald-500/10", tag: "Article" },
];

export default function ContentStudio() {
  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-text-3xl font-bold tracking-tight mb-2">Content Studio</h1>
          <p className="text-text-secondary">Generate, edit, and schedule high-performing content</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-text-tertiary absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search templates..."
              className="bg-bg-tertiary border border-border-medium rounded-md pl-9 pr-4 py-2 text-sm focus:border-accent-blue outline-none transition-colors"
            />
          </div>
          <button className="p-2 bg-bg-secondary border border-border-medium rounded-md text-text-secondary hover:text-text-primary transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {templates.map((tpl, idx) => (
          <motion.div
            key={tpl.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05 * idx }}
            className="bg-bg-secondary border border-border-medium rounded-xl p-5 hover:border-accent-blue hover:shadow-glow transition-all group flex flex-col relative overflow-hidden"
          >
            <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full ${tpl.bg} blur-2xl group-hover:bg-accent-blue/20 transition-colors`} />
            
            <div className="flex justify-between items-start mb-4">
              <div className={`w-10 h-10 rounded-lg ${tpl.bg} flex items-center justify-center`}>
                <tpl.icon className={`w-5 h-5 ${tpl.color}`} />
              </div>
              <span className="text-[10px] uppercase tracking-wider font-bold bg-bg-tertiary border border-border-subtle px-2 py-1 rounded-full text-text-secondary">
                {tpl.tag}
              </span>
            </div>
            
            <h3 className="font-semibold text-text-primary mb-1 text-lg group-hover:text-accent-blue transition-colors">
              {tpl.name}
            </h3>
            <p className="text-sm text-text-secondary mb-6 flex-1">
              AI-optimized template for {tpl.platform} maximum engagement.
            </p>
            
            <div className="flex gap-2 w-full mt-auto">
              <button className="flex-1 bg-accent-blue text-white py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                <Play className="w-4 h-4 fill-current" /> Use
              </button>
              <button className="px-3 bg-bg-tertiary text-text-primary border border-border-strong rounded-md text-sm font-medium hover:bg-bg-hover transition-colors">
                Preview
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-10"
      >
        <h2 className="text-text-xl font-semibold mb-4">Content Calendar</h2>
        <div className="bg-bg-secondary border border-border-medium rounded-xl h-64 flex items-center justify-center text-text-secondary italic">
          (Timeline views and calendar drag-and-drop will be rendered here)
        </div>
      </motion.div>
    </div>
  );
}
