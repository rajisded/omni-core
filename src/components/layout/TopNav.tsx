import { Bell, Search, UserCircle } from "lucide-react";

export function TopNav() {
  return (
    <div className="h-16 border-b flex items-center justify-between px-6 bg-bg-secondary sticky top-0 z-10 w-full"
         style={{ borderColor: 'var(--border-subtle)' }}>
      <div className="flex-1 max-w-xl flex items-center">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" />
          <input 
            type="text" 
            placeholder="Search agents, tasks, or content..." 
            className="w-full bg-bg-tertiary border border-border-subtle text-text-primary rounded-md pl-10 pr-4 py-2 text-sm outline-none focus:border-accent-blue transition-colors"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="text-text-secondary hover:text-text-primary transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-accent-blue border-2 border-bg-secondary translate-x-1/4 -translate-y-1/4" />
        </button>
        <button className="text-text-secondary hover:text-text-primary transition-colors">
          <UserCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
