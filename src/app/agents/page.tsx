"use client";

import { motion } from "framer-motion";
import { Brain, ArrowRight, Activity, Cpu } from "lucide-react";
import Link from "next/link";

const agents = [
  { id: "ceo", name: "CEO Agent", role: "Strategy & Oversight", color: "bg-agent-ceo", metric: "92% Goals Met", info: "Planning Q3 Objectives" },
  { id: "coo", name: "COO Agent", role: "Operations & Process", color: "bg-agent-coo", metric: "15% Efficiency Incr.", info: "Optimizing Workflows" },
  { id: "content", name: "Content Director", role: "Media & SEO", color: "bg-agent-content", metric: "125k Impressions", info: "Drafting Newsletters" },
  { id: "sales", name: "Sales Agent", role: "Lead Gen & Pipeline", color: "bg-agent-sales", metric: "$45k Pipeline Gen", info: "Analyzing Discovery Calls" },
  { id: "developer", name: "Developer Agent", role: "Code & Architecture", color: "bg-agent-developer", metric: "14 PRs Merged", info: "Refactoring Auth Module" },
  { id: "finance", name: "Finance Agent", role: "Budget & Reports", color: "bg-agent-finance", metric: "$2k Cost Savings", info: "Auditing AWS Spend" },
  { id: "client-success", name: "Client Success", role: "Support & NPS", color: "bg-agent-client-success text-white", metric: "9.2/10 CSAT", info: "Onboarding 5 New Clients" }
];

export default function AgentsHub() {
  return (
    <div className="space-y-8 pb-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-text-3xl font-bold tracking-tight mb-2 flex items-center gap-3">
            <Brain className="w-8 h-8 text-accent-purple" />
            AI Agent Team
          </h1>
          <p className="text-text-secondary">Manage and interact with your specialized AI workforce</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-bg-secondary border border-border-strong hover:bg-bg-hover text-text-primary rounded-md font-medium transition-colors cursor-pointer">
          <Cpu className="w-5 h-5" />
          Train New Agent
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        {agents.map((agent, i) => (
          <Link href={`/agents/${agent.id}`} key={agent.id}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-bg-secondary border border-border-medium rounded-xl p-6 hover:border-accent-purple group transition-all relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-2 h-full ${agent.color} opacity-80 group-hover:w-full group-hover:opacity-5 transition-all duration-300`} />
              
              <div className="flex justify-between items-start mb-6">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-glow ${agent.color}`}>
                  {agent.name.split(' ').map(w => w[0]).join('').substring(0, 2)}
                </div>
                <div className="flex items-center gap-1 text-accent-green bg-green-500/10 px-2 py-1 rounded text-xs font-bold">
                  <Activity className="w-3 h-3" />
                  Online
                </div>
              </div>
              
              <h2 className="text-text-xl font-bold mb-1 group-hover:text-accent-blue transition-colors relative z-10">{agent.name}</h2>
              <p className="text-text-secondary text-sm mb-6 font-medium relative z-10">{agent.role}</p>

              <div className="space-y-3 mb-6 relative z-10">
                <div className="bg-bg-tertiary p-3 rounded-lg border border-border-subtle group-hover:border-border-strong transition-colors">
                  <div className="text-[10px] text-text-tertiary uppercase font-bold tracking-wider mb-1">Weekly Metric</div>
                  <div className="font-semibold text-text-primary text-sm">{agent.metric}</div>
                </div>
                <div className="bg-bg-tertiary p-3 rounded-lg border border-border-subtle group-hover:border-border-strong transition-colors">
                  <div className="text-[10px] text-text-tertiary uppercase font-bold tracking-wider mb-1">Current Focus</div>
                  <div className="font-semibold text-text-primary text-sm line-clamp-1">{agent.info}</div>
                </div>
              </div>

              <div className="flex items-center justify-between text-text-secondary group-hover:text-accent-purple font-medium text-sm transition-colors relative z-10">
                <span>View Dashboard</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
