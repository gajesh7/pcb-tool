import React from 'react';
import { Inbox, FileText, Users, Folder, Cpu, Settings, Sparkles, Layers, ChevronRight, Zap } from 'lucide-react';

export default function Sidebar({ currentNav, onSelectNav, onTriggerCaptureFlow }) {
  const navItems = [
    { id: 'inbox', label: 'Inbox', icon: Inbox, count: 5 },
    { id: 'rfqs', label: 'RFQs', icon: FileText },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'files', label: 'Files', icon: Folder },
    { id: 'integrations', label: 'Integrations', icon: Cpu },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <aside className="w-60 bg-[#FAFAFA] border-r border-[#E5E5E5] flex flex-col justify-between shrink-0 min-h-screen select-none">
      <div className="space-y-6 p-4">
        {/* Brand Header */}
        <div className="flex items-center gap-2.5 px-2 py-1">
          <div className="w-7 h-7 rounded-lg bg-[#4F46E5] text-white flex items-center justify-center font-bold text-sm shadow-xs">
            R
          </div>
          <div>
            <span className="font-bold text-sm text-[#171717] tracking-tight block leading-none">RFQ Bridge</span>
            <span className="text-[10px] text-[#6B6B6B] font-mono mt-0.5 block">Email-to-RFQ Automation</span>
          </div>
        </div>

        {/* Quick Email Capture Action Button */}
        <div className="px-1">
          <button
            onClick={onTriggerCaptureFlow}
            className="w-full py-2 px-3 bg-[#171717] hover:bg-black text-white text-xs font-semibold rounded-md shadow-xs transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-indigo-400" />
              <span>Capture Email RFQ</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Main Navigation */}
        <nav className="space-y-1">
          <div className="text-[10px] font-semibold text-[#9CA3AF] uppercase tracking-wider px-2 mb-2">
            Main Workspace
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectNav(item.id)}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-white text-[#171717] font-semibold shadow-subtle border border-[#E5E5E5]'
                    : 'text-[#6B6B6B] hover:text-[#171717] hover:bg-[#F7F7F5]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600' : 'text-[#6B6B6B]'}`} />
                  <span>{item.label}</span>
                </div>

                {item.count && (
                  <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-indigo-50 text-indigo-700 font-semibold border border-indigo-100">
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Extension & Platform Status Footer */}
      <div className="p-4 border-t border-[#E5E5E5] bg-white space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-[11px] text-[#6B6B6B] font-medium">Browser Extension</span>
          <span className="inline-flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-medium border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Connected
          </span>
        </div>

        <div className="text-[10px] text-[#6B6B6B] leading-tight">
          Captures RFQs across Gmail, Outlook, Zoho Mail & Webmail platforms.
        </div>
      </div>
    </aside>
  );
}

