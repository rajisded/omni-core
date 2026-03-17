"use client";

import { 
  CheckSquare, 
  Clock, 
  CheckCircle2, 
  Target,
  MoreHorizontal,
  Download,
  Share2,
  RefreshCw,
  PlaySquare,
  Instagram,
  Youtube
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "Backlog", value: "142", icon: CheckSquare, color: "text-text-secondary" },
  { label: "In Progress", value: "28", icon: Clock, color: "text-accent-amber" },
  { label: "Completed", value: "89", icon: CheckCircle2, color: "text-accent-green" },
  { label: "Priority", value: "15", icon: Target, color: "text-accent-red" },
];

const activities = [
  { id: 1, agent: "Content Director", roleColor: "bg-agent-content", time: "10 mins ago", action: "Generated new YouTube script for 'AI in 2026'" },
  { id: 2, agent: "Sales Agent", roleColor: "bg-agent-sales", time: "1 hr ago", action: "Analyzed 12 discovery calls and extracted 4 objections" },
  { id: 3, agent: "CEO Agent", roleColor: "bg-agent-ceo", time: "2 hrs ago", action: "Updated Q3 objectives based on competitor analysis" },
  { id: 4, agent: "Developer Agent", roleColor: "bg-agent-developer", time: "3 hrs ago", action: "Completed PR review for the new analytics module" },
];

const deliverables = [
  { id: 1, title: "Q3 Strategic Report", agent: "CEO Agent", type: "PDF", date: "Today, 9:00 AM" },
  { id: 2, title: "Competitor Matrix", agent: "Finance Agent", type: "Spreadsheet", date: "Yesterday, 4:30 PM" },
  { id: 3, title: "Onboarding Flow UI", agent: "Developer Agent", type: "Figma", date: "Mon, 2:15 PM" },
];

export default function Dashboard() {
  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <div>
        <motion.h1 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-text-3xl font-bold tracking-tight mb-2"
        >
          Good morning, Alex 👋
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-text-secondary"
        >
          Here's what your AI team is working on today
        </motion.p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx }}
            className="bg-bg-secondary border border-border-medium rounded-xl p-5 hover:border-accent-blue transition-colors group"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-text-secondary font-medium">{stat.label}</span>
              <stat.icon className={`w-5 h-5 ${stat.color} group-hover:scale-110 transition-transform`} />
            </div>
            <div className="text-text-4xl font-bold">{stat.value}</div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        
        {/* Activity Feed (Left Column) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-3 space-y-4"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-text-xl font-semibold">Real-time Activity</h2>
            <button className="text-text-secondary hover:text-text-primary text-sm flex items-center gap-2 transition-colors">
              <RefreshCw className="w-4 h-4" /> Refresh
            </button>
          </div>
          
          <div className="bg-bg-secondary border border-border-medium rounded-xl p-6">
            <div className="space-y-6">
              {activities.map((activity, idx) => (
                <div key={activity.id} className="flex gap-4 relative">
                  {idx !== activities.length - 1 && (
                    <div className="absolute left-5 top-10 bottom-[-24px] w-px bg-border-subtle" />
                  )}
                  <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold ${activity.roleColor} z-10 shadow-glow`}>
                    {activity.agent[0]}
                  </div>
                  <div className="pt-2 flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold text-text-primary">{activity.agent}</span>
                      <span className="text-xs text-text-tertiary">{activity.time}</span>
                    </div>
                    <p className="text-text-secondary text-sm">{activity.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Deliverables (Right Column) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 space-y-4"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-text-xl font-semibold">Recent Deliverables</h2>
            <button className="text-accent-blue hover:text-blue-400 text-sm font-medium transition-colors">
              View All
            </button>
          </div>
          
          <div className="space-y-3">
            {deliverables.map((item) => (
              <div key={item.id} className="bg-bg-secondary border border-border-medium rounded-xl p-4 hover:bg-bg-hover transition-colors group cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-text-primary group-hover:text-accent-blue transition-colors">{item.title}</h3>
                  <button className="text-text-tertiary hover:text-text-primary">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex justify-between items-end mt-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-text-secondary">{item.agent}</span>
                    <span className="text-[10px] text-text-tertiary">{item.date}</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-1.5 rounded-md bg-bg-tertiary text-text-secondary hover:text-text-primary hover:bg-border-medium transition-colors" title="Share">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 rounded-md bg-bg-tertiary text-text-secondary hover:text-text-primary hover:bg-border-medium transition-colors" title="Download">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Content Preview Cards */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-text-xl font-semibold">Today's Content Queue</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-bg-secondary to-bg-tertiary border border-border-medium rounded-xl p-5 hover:border-accent-purple transition-all group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-purple/10 rounded-bl-full -mr-10 -mt-10 blur-2xl" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F56040] flex items-center justify-center">
                <Instagram className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold">Instagram Script</span>
            </div>
            <h3 className="font-bold text-lg mb-2 group-hover:text-accent-purple transition-colors">"3 AI Tools That Will Replace Your Content Team"</h3>
            <p className="text-text-secondary text-sm mb-4 line-clamp-2">Hook: Are you still manually writing blog posts in 2026? Stop right now. These three AI agents can do it in 5 minutes...</p>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-accent-blue text-white rounded-md text-sm font-medium hover:bg-blue-600 transition-colors">
                Approve & Schedule
              </button>
              <button className="px-4 py-2 bg-bg-tertiary text-text-primary border border-border-strong rounded-md text-sm font-medium hover:bg-bg-hover transition-colors">
                Edit Script
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-bg-secondary to-bg-tertiary border border-border-medium rounded-xl p-5 hover:border-accent-red transition-all group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-red/10 rounded-bl-full -mr-10 -mt-10 blur-2xl" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded bg-accent-red flex items-center justify-center">
                <Youtube className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold">YouTube Outline</span>
            </div>
            <h3 className="font-bold text-lg mb-2 group-hover:text-accent-red transition-colors">"Building an Autonomous Agent Swarm"</h3>
            <p className="text-text-secondary text-sm mb-4 line-clamp-2">Intro (0:00-1:30): Hook the viewer with the concept of agent swarms. Show the diagram of how they interact...</p>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-accent-blue text-white rounded-md text-sm font-medium hover:bg-blue-600 transition-colors">
                Approve & Schedule
              </button>
              <button className="px-4 py-2 bg-bg-tertiary text-text-primary border border-border-strong rounded-md text-sm font-medium hover:bg-bg-hover transition-colors">
                Edit Outline
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
