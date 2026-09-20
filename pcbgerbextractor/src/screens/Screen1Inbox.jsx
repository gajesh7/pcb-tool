import React, { useState } from 'react';
import { Search, Plus, Filter, FileText, ArrowRight, CheckCircle2, AlertCircle, Clock, Check, Sparkles } from 'lucide-react';
import { MOCK_RFQS } from '../data/mockData';

export default function Screen1Inbox({ onSelectRFQ, onOpenCaptureSim }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'New', 'Needs Review', 'Ready', 'Sent', 'Completed'];

  const filteredRFQs = MOCK_RFQS.filter(rfq => {
    const matchesSearch = 
      rfq.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rfq.partNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rfq.rfqNumber.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeFilter === 'All') return matchesSearch;
    return matchesSearch && rfq.status === activeFilter;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Needs Review':
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-amber-50 text-amber-700 border border-amber-200">Needs Review</span>;
      case 'Ready':
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">Ready</span>;
      case 'Processing':
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-blue-50 text-blue-700 border border-blue-200">Processing</span>;
      case 'Sent':
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-indigo-50 text-indigo-700 border border-indigo-200">Sent</span>;
      case 'Completed':
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200">Completed</span>;
      default:
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-slate-50 text-slate-700 border border-slate-200">{status}</span>;
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E5E5] pb-5">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-[#171717] tracking-tight">RFQ Inbox</h1>
            <span className="bg-indigo-50 text-indigo-700 text-xs px-2 py-0.5 rounded-full font-medium border border-indigo-100">
              5 Active
            </span>
          </div>
          <p className="text-xs text-[#6B6B6B] mt-1">Capture and process customer RFQs from email.</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCaptureSim}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-white hover:bg-[#F7F7F5] border border-[#E5E5E5] text-[#171717] text-xs font-medium rounded-md shadow-xs transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Simulate Webmail Capture</span>
          </button>

          <button
            onClick={onOpenCaptureSim}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-medium rounded-md shadow-xs transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New RFQ</span>
          </button>
        </div>
      </div>

      {/* Concept Banner */}
      <div className="bg-white border border-[#E5E5E5] rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-md bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 mt-0.5">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="space-y-1">
            <h2 className="text-xs font-semibold text-[#171717]">RFQ Bridge — Universal Email-to-RFQ Transformation</h2>
            <p className="text-xs text-[#6B6B6B] leading-relaxed">
              Open any customer email in Gmail, Outlook, or webmail. The RFQ Bridge browser extension captures unstructured emails & Gerber/BOM attachments, converting them into structured manufacturing RFQs instantly.
            </p>
          </div>
        </div>

        <button
          onClick={onOpenCaptureSim}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4F46E5] hover:text-[#4338CA] whitespace-nowrap self-start md:self-center"
        >
          <span>Try Email Capture Flow</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3 rounded-lg border border-[#E5E5E5] shadow-xs">
        {/* Filter Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeFilter === filter
                  ? 'bg-[#171717] text-white'
                  : 'text-[#6B6B6B] hover:text-[#171717] hover:bg-[#F7F7F5]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#6B6B6B]" />
          <input
            type="text"
            placeholder="Search RFQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 bg-[#F7F7F5] border border-[#E5E5E5] rounded-md text-xs text-[#171717] placeholder-[#6B6B6B] focus:outline-none focus:ring-1 focus:ring-indigo-500 font-medium"
          />
        </div>
      </div>

      {/* RFQ List Table */}
      <div className="bg-white rounded-lg border border-[#E5E5E5] shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#FAFAFA] border-b border-[#E5E5E5] text-[11px] font-semibold text-[#6B6B6B] uppercase tracking-wider">
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">RFQ</th>
                <th className="py-3 px-4">PCB</th>
                <th className="py-3 px-4 text-right">Quantity</th>
                <th className="py-3 px-4 text-center">Files</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Received</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E5E5] text-xs">
              {filteredRFQs.map((rfq) => (
                <tr 
                  key={rfq.id}
                  onClick={() => onSelectRFQ(rfq)}
                  className="hover:bg-[#F7F7F5]/80 cursor-pointer transition-colors group"
                >
                  {/* Customer */}
                  <td className="py-3.5 px-4 font-medium text-[#171717]">
                    <div>{rfq.customer}</div>
                    <div className="text-[11px] text-[#6B6B6B] font-normal">{rfq.contactEmail}</div>
                  </td>

                  {/* RFQ */}
                  <td className="py-3.5 px-4 font-mono font-medium text-indigo-600">
                    {rfq.rfqNumber}
                  </td>

                  {/* PCB */}
                  <td className="py-3.5 px-4">
                    <div className="font-semibold text-[#171717]">{rfq.partNumber} <span className="text-[11px] font-normal text-[#6B6B6B]">({rfq.revision})</span></div>
                    <div className="text-[11px] text-[#6B6B6B]">{rfq.description}</div>
                  </td>

                  {/* Quantity */}
                  <td className="py-3.5 px-4 text-right font-mono font-medium text-[#171717]">
                    {rfq.quantity.toLocaleString()}
                  </td>

                  {/* Files */}
                  <td className="py-3.5 px-4 text-center">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#F7F7F5] rounded border border-[#E5E5E5] text-[11px] font-mono text-[#6B6B6B]">
                      <FileText className="w-3 h-3 text-indigo-500" />
                      <span>{rfq.filesCount}</span>
                    </span>
                  </td>

                  {/* Status */}
                  <td className="py-3.5 px-4">
                    {getStatusBadge(rfq.status)}
                  </td>

                  {/* Received */}
                  <td className="py-3.5 px-4 text-right text-[#6B6B6B] font-mono text-[11px]">
                    {rfq.received}
                  </td>

                  {/* Action */}
                  <td className="py-3.5 px-4 text-right">
                    <span className="text-xs text-[#4F46E5] font-medium group-hover:underline inline-flex items-center gap-1">
                      <span>View</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </td>
                </tr>
              ))}

              {filteredRFQs.length === 0 && (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-[#6B6B6B]">
                    No RFQs match your search query.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

