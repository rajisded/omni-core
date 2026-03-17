"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  Users, 
  CheckSquare, 
  PenTool, 
  Briefcase, 
  Search, 
  BarChart, 
  Settings,
  BrainCircuit
} from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "AI Agents", href: "/agents", icon: Users },
    { name: "Task Board", href: "/tasks", icon: CheckSquare },
    { name: "Content Studio", href: "/content", icon: PenTool },
    { name: "Sales Hub", href: "/sales", icon: Briefcase },
    { name: "Competitor Intel", href: "/intel", icon: Search },
    { name: "Analytics", href: "/analytics", icon: BarChart },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <div className="w-[260px] h-screen bg-bg-secondary border-r border-border-subtle flex flex-col hidden md:flex fixed left-0 top-0">
      <div className="p-6 pb-4 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
          <BrainCircuit className="text-white w-5 h-5" />
        </div>
        <span className="font-bold text-xl tracking-wider text-text-primary">OMNI CORE</span>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors ${
                isActive 
                  ? "bg-bg-active text-accent-blue border-l-4 border-accent-blue font-medium" 
                  : "text-text-secondary hover:bg-bg-hover hover:text-text-primary border-l-4 border-transparent"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
