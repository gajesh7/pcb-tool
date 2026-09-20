import React from 'react';
import { Sparkles, Layers, ChevronRight, Search, Bell, ExternalLink, HelpCircle } from 'lucide-react';

export default function TopHeader({ activeStep, onJumpStep }) {
  const steps = [
    { num: 1, label: 'Inbox' },
    { num: 2, label: 'Email Capture & Extension' },
    { num: 3, label: 'AI Review' },
    { num: 4, label: 'File Validation' },
    { num: 5, label: 'Create RFQ' },
    { num: 6, label: 'Created Success' },
    { num: 7, label: 'RFQ Detail' }
  ];

  return (
    <header className="bg-white border-b border-[#E5E5E5] px-6 py-2.5 flex items-center justify-between sticky top-0 z-30 shadow-subtle">
      {/* Prototype Step Controller */}
      <div className="flex items-center gap-1.5 overflow-x-auto text-xs py-1">
        <span className="text-[10px] font-semibold text-[#6B6B6B] uppercase tracking-wider mr-1.5 shrink-0 hidden md:inline">
          Interactive Flow:
        </span>

        {steps.map((s) => {
          const isActive = activeStep === s.num;
          return (
            <React.Fragment key={s.num}>
              <button
                onClick={() => onJumpStep(s.num)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-[#171717] text-white font-bold shadow-xs'
                    : 'bg-[#F7F7F5] text-[#6B6B6B] hover:text-[#171717] hover:bg-[#E5E5E5]'
                }`}
              >
                <span className="w-4 h-4 rounded-full bg-white/20 text-current flex items-center justify-center text-[10px] font-mono">
                  {s.num}
                </span>
                <span>{s.label}</span>
              </button>
              {s.num < 7 && <ChevronRight className="w-3 h-3 text-[#D4D4D4] shrink-0" />}
            </React.Fragment>
          );
        })}
      </div>

      {/* Right User & System Controls */}
      <div className="flex items-center gap-3 shrink-0 ml-4">
        <span className="text-[11px] text-[#6B6B6B] hidden lg:inline font-mono">
          PCB Quote Engine: <strong className="text-emerald-600">Online</strong>
        </span>

        <div className="w-7 h-7 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 font-bold text-xs flex items-center justify-center">
          AG
        </div>
      </div>
    </header>
  );
}

