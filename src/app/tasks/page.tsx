"use client";

import { motion } from "framer-motion";
import { Plus, MoreVertical, Calendar } from "lucide-react";

interface Task {
  id: string;
  title: string;
  desc: string;
  agent: string;
  agentInitials: string;
  agentColor: string;
  due: string;
  priority: "High" | "Medium" | "Low";
  status: "BACKLOG" | "IN_PROGRESS" | "COMPLETED";
}

const tasks: Task[] = [
  {
    id: "t1", title: "Analyze Competitor Pricing", desc: "Review pricing changes for top 3 competitors this quarter.", agent: "CEO Agent", agentInitials: "C", agentColor: "bg-agent-ceo text-white", due: "Tomorrow", priority: "High", status: "BACKLOG"
  },
  {
    id: "t2", title: "Create Content Calendar", desc: "Plan social media posts for next week based on trending topics.", agent: "Content Director", agentInitials: "CD", agentColor: "bg-agent-content text-white", due: "In 2 days", priority: "Medium", status: "BACKLOG"
  },
  {
    id: "t3", title: "Write Newsletter Script", desc: "Draft weekly AI trends newsletter.", agent: "Content Director", agentInitials: "CD", agentColor: "bg-agent-content text-white", due: "Today", priority: "High", status: "IN_PROGRESS"
  },
  {
    id: "t4", title: "Review Sales Calls", desc: "Extract common objections from yesterday's 10 discovery calls.", agent: "Sales Agent", agentInitials: "S", agentColor: "bg-agent-sales text-white", due: "Tomorrow", priority: "Medium", status: "IN_PROGRESS"
  },
  {
    id: "t5", title: "Update Onboarding Flow", desc: "Implement feedback from recent client success tickets.", agent: "Developer Agent", agentInitials: "D", agentColor: "bg-agent-developer text-white", due: "Next week", priority: "Low", status: "COMPLETED"
  },
];

const priorityColors = {
  High: "bg-red-500/10 text-red-500 border border-red-500/20",
  Medium: "bg-amber-500/10 text-amber-500 border border-amber-500/20",
  Low: "bg-green-500/10 text-green-500 border border-green-500/20",
};

export default function KanbanBoard() {
  const columns = ["BACKLOG", "IN_PROGRESS", "COMPLETED"] as const;

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-text-3xl font-bold tracking-tight mb-2">Task Board</h1>
          <p className="text-text-secondary">Manage and track your AI team's deliverables</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-accent-blue hover:bg-blue-600 text-white rounded-md font-medium transition-colors">
          <Plus className="w-5 h-5" />
          New Task
        </button>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-hidden">
        {columns.map((col, colIdx) => {
          const columnTasks = tasks.filter(t => t.status === col);
          const colLabel = col.replace("_", " ");
          
          return (
            <motion.div 
              key={col}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * colIdx }}
              className="bg-bg-secondary border border-border-medium rounded-xl p-4 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-text-primary flex items-center gap-2">
                  {colLabel}
                  <span className="bg-bg-tertiary text-text-secondary px-2 py-0.5 rounded-full text-xs font-bold">
                    {columnTasks.length}
                  </span>
                </h2>
                <button className="text-text-tertiary hover:text-text-primary transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-3 pb-2 pr-1 custom-scrollbar">
                {columnTasks.map((task) => (
                  <div 
                    key={task.id}
                    className="bg-bg-primary border border-border-subtle hover:border-border-strong rounded-lg p-4 cursor-grab active:cursor-grabbing transition-all hover:shadow-md group relative overflow-hidden"
                  >
                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${task.agentColor.split(" ")[0]} opacity-70 group-hover:opacity-100 transition-opacity`} />
                    
                    <div className="flex justify-between items-start mb-2 ml-1">
                      <h3 className="font-medium text-text-primary text-sm leading-tight group-hover:text-accent-blue transition-colors">{task.title}</h3>
                    </div>
                    
                    <p className="text-xs text-text-secondary mb-4 line-clamp-2 ml-1">{task.desc}</p>
                    
                    <div className="flex items-center justify-between ml-1">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${task.agentColor}`}>
                            {task.agentInitials}
                          </div>
                          <span className="text-xs font-medium text-text-secondary">{task.agent}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-text-tertiary">
                          <Calendar className="w-3.5 h-3.5" />
                          {task.due}
                        </div>
                      </div>
                      
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${priorityColors[task.priority]}`}>
                        {task.priority}
                      </span>
                    </div>
                  </div>
                ))}
                
                {columnTasks.length === 0 && (
                  <div className="h-full flex items-center justify-center text-text-tertiary text-sm border-2 border-dashed border-border-medium rounded-lg p-6 text-center">
                    No tasks in {colLabel.toLowerCase()}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
