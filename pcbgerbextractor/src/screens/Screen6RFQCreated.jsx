import React from 'react';
import { CheckCircle2, ArrowRight, ExternalLink, Send, Mail, FileText, Check, ShieldCheck } from 'lucide-react';

export default function Screen6RFQCreated({ rfq, onOpenRFQDetail, onViewSourceEmail }) {
  return (
    <div className="max-w-2xl mx-auto space-y-6 py-4">
      {/* Large Minimal Success Banner */}
      <div className="bg-white border border-[#E5E5E5] rounded-xl p-8 shadow-subtle text-center space-y-4">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs border border-emerald-200">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-[#171717] tracking-tight">RFQ Created</h1>
          <p className="text-xs text-[#6B6B6B]">
            The customer email has been successfully transformed into a structured manufacturing RFQ.
          </p>
        </div>

        {/* Highlight Specs Box */}
        <div className="bg-[#F7F7F5] border border-[#E5E5E5] rounded-lg p-4 max-w-lg mx-auto text-left space-y-2 text-xs">
          <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-2">
            <span className="text-[#6B6B6B]">RFQ Reference Number:</span>
            <span className="font-mono font-bold text-indigo-600 text-sm">RFQ-2026-00421</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[#6B6B6B]">Customer Account:</span>
            <span className="font-semibold text-[#171717]">ABC Electronics</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[#6B6B6B]">PCB Part Number:</span>
            <span className="font-mono font-bold text-[#171717]">PCB-102 (Rev 03)</span>
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-[#6B6B6B]">Lifecycle Status:</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Ready for Manufacturing Review</span>
            </span>
          </div>
        </div>

        {/* Processed Timeline Checklist */}
        <div className="pt-2 text-left max-w-md mx-auto space-y-2.5 border-t border-[#E5E5E5] text-xs">
          <div className="text-[11px] font-semibold text-[#6B6B6B] uppercase tracking-wider mb-3">
            Automation Pipeline Status
          </div>

          <div className="flex items-center gap-2.5 text-emerald-700 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Email captured from Gmail (purchase@abcelectronics.com)</span>
          </div>

          <div className="flex items-center gap-2.5 text-emerald-700 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>RFQ information extracted (11 attributes verified)</span>
          </div>

          <div className="flex items-center gap-2.5 text-emerald-700 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Files classified (Gerber, BOM, PDF Drawing)</span>
          </div>

          <div className="flex items-center gap-2.5 text-emerald-700 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Files validated & layer pre-flight check passed</span>
          </div>

          <div className="flex items-center gap-2.5 text-emerald-700 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>RFQ record created in database</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onOpenRFQDetail}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-bold rounded-md shadow-xs transition-colors"
          >
            <span>Open RFQ Detail Page</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onViewSourceEmail}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white hover:bg-[#F7F7F5] border border-[#E5E5E5] text-[#171717] text-xs font-medium rounded-md transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#6B6B6B]" />
            <span>View Source Email</span>
          </button>
        </div>

        <div className="pt-2 text-[11px] text-[#6B6B6B]">
          Payload automatically dispatched to Genesis CAM & SAP ERP integrations.
        </div>
      </div>
    </div>
  );
}

