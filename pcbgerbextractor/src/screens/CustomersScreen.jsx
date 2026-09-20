import React from 'react';
import { Users, Mail, MapPin, FileText, Plus, Search } from 'lucide-react';
import { MOCK_CUSTOMERS } from '../data/mockData';

export default function CustomersScreen() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-5">
        <div>
          <h1 className="text-xl font-bold text-[#171717] tracking-tight">Customers Directory</h1>
          <p className="text-xs text-[#6B6B6B] mt-1">Manage PCB customer accounts, RFQ history, and procurement contacts.</p>
        </div>
        <button className="px-3.5 py-1.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-semibold rounded-md shadow-xs flex items-center gap-1.5">
          <Plus className="w-3.5 h-3.5" />
          <span>Add Customer</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {MOCK_CUSTOMERS.map((cust) => (
          <div key={cust.id} className="bg-white border border-[#E5E5E5] rounded-lg p-5 shadow-xs space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm font-bold text-[#171717]">{cust.name}</h3>
                <span className="text-xs text-[#6B6B6B] flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-[#6B6B6B]" />
                  <span>{cust.location}</span>
                </span>
              </div>
              <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-[11px] font-semibold rounded font-mono border border-indigo-100">
                {cust.activeRFQs} Active RFQs
              </span>
            </div>

            <div className="space-y-2 text-xs pt-2 border-t border-[#F7F7F5]">
              <div className="flex justify-between">
                <span className="text-[#6B6B6B]">Primary Contact:</span>
                <span className="font-semibold text-[#171717]">{cust.contact}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B6B6B]">Email:</span>
                <span className="font-mono text-indigo-600">{cust.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B6B6B]">Total Orders Completed:</span>
                <span className="font-mono font-bold text-[#171717]">{cust.totalOrders}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

