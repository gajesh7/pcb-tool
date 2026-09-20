import React from 'react';
import { Cpu, Database, Workflow, Mail, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import { MOCK_INTEGRATIONS } from '../data/mockData';

export default function IntegrationsScreen() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="border-b border-[#E5E5E5] pb-5">
        <h1 className="text-xl font-bold text-[#171717] tracking-tight">Integrations & Connectors</h1>
        <p className="text-xs text-[#6B6B6B] mt-1">Directly sync captured RFQs into Frontline Genesis CAM, UcamX, SAP ERP, and Salesforce.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {MOCK_INTEGRATIONS.map((item) => (
          <div key={item.id} className="bg-white border border-[#E5E5E5] rounded-lg p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#171717]">{item.name}</h3>
                  <span className="text-[11px] text-[#6B6B6B]">{item.category}</span>
                </div>
              </div>

              <span className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${
                item.status === 'Connected' || item.status === 'Active'
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : 'bg-slate-50 text-slate-600 border-slate-200'
              }`}>
                {item.status}
              </span>
            </div>

            <p className="text-xs text-[#6B6B6B] leading-relaxed">
              {item.description}
            </p>

            <div className="pt-2 border-t border-[#F7F7F5] flex justify-end">
              <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
                <span>Configure Pipeline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

