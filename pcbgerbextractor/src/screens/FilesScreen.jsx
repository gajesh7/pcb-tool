import React from 'react';
import { FileText, Download, Layers, Cpu, Search, Filter } from 'lucide-react';
import { MOCK_FILES } from '../data/mockData';

export default function FilesScreen() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-5">
        <div>
          <h1 className="text-xl font-bold text-[#171717] tracking-tight">Files Library</h1>
          <p className="text-xs text-[#6B6B6B] mt-1">Central repository for all parsed Gerber packages, BOM spreadsheets, and drawings.</p>
        </div>
      </div>

      <div className="bg-white border border-[#E5E5E5] rounded-lg shadow-xs overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="bg-[#FAFAFA] border-b border-[#E5E5E5] text-[11px] font-semibold text-[#6B6B6B] uppercase">
              <th className="py-3 px-4">File Name</th>
              <th className="py-3 px-4">RFQ Ref</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Type</th>
              <th className="py-3 px-4 text-right">Size</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E5E5E5] font-sans">
            {MOCK_FILES.map((file, i) => (
              <tr key={i} className="hover:bg-[#F7F7F5] transition-colors">
                <td className="py-3 px-4 font-mono font-bold text-[#171717] flex items-center gap-2">
                  <FileText className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>{file.name}</span>
                </td>
                <td className="py-3 px-4 font-mono text-indigo-600">{file.rfq}</td>
                <td className="py-3 px-4 font-medium text-[#171717]">{file.customer}</td>
                <td className="py-3 px-4 text-[#6B6B6B]">{file.type}</td>
                <td className="py-3 px-4 font-mono text-right text-[#6B6B6B]">{file.size}</td>
                <td className="py-3 px-4 text-right">
                  <button className="text-xs text-indigo-600 font-medium hover:underline flex items-center gap-1 ml-auto">
                    <Download className="w-3.5 h-3.5" /> Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

