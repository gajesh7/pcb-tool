import React from 'react';
import { CheckCircle2, FileText, ArrowRight, ArrowLeft, Shield, Sparkles, User, Check, Layers, Mail } from 'lucide-react';

export default function Screen5CreateRFQ({ rfq, onCreateRFQ, onBackToReview }) {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-5">
        <div>
          <h1 className="text-xl font-bold text-[#171717] tracking-tight">Create RFQ Confirmation</h1>
          <p className="text-xs text-[#6B6B6B] mt-1">
            Review final parameters before dispatching to Genesis CAM & SAP ERP workflows.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onBackToReview}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-[#F7F7F5] border border-[#E5E5E5] text-[#171717] text-xs font-medium rounded-md shadow-xs transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Review</span>
          </button>

          <button
            onClick={onCreateRFQ}
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-semibold rounded-md shadow-xs transition-colors"
          >
            <Check className="w-4 h-4" />
            <span>Create RFQ</span>
          </button>
        </div>
      </div>

      {/* Structured Summary Card */}
      <div className="bg-white border border-[#E5E5E5] rounded-lg shadow-xs overflow-hidden">
        <div className="p-5 border-b border-[#E5E5E5] bg-[#FAFAFA] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-indigo-600" />
            <span className="text-xs font-semibold text-[#171717] uppercase tracking-wider">Manufacturing RFQ Summary</span>
          </div>
          <span className="font-mono text-xs font-bold text-indigo-600">RFQ-2026-00421</span>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          
          {/* Customer & Part Information */}
          <div className="space-y-4">
            <div>
              <span className="text-[#6B6B6B] block text-[11px]">Customer Account</span>
              <span className="font-bold text-[#171717] text-sm">ABC Electronics</span>
              <span className="text-[#6B6B6B] block font-mono text-[11px]">purchase@abcelectronics.com</span>
            </div>

            <div className="pt-3 border-t border-[#F7F7F5] space-y-2">
              <div className="flex justify-between">
                <span className="text-[#6B6B6B]">PCB Part Number:</span>
                <span className="font-mono font-bold text-[#171717]">PCB-102</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B6B6B]">Revision:</span>
                <span className="font-mono font-semibold text-[#171717]">Rev 03</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B6B6B]">Description:</span>
                <span className="font-medium text-[#171717]">Controller Board</span>
              </div>
            </div>
          </div>

          {/* Delivery & Files Information */}
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-[#6B6B6B]">Quotation Quantity:</span>
                <span className="font-mono font-bold text-indigo-600 text-sm">500 pcs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B6B6B]">Required Delivery:</span>
                <span className="font-semibold text-[#171717]">15 October 2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B6B6B]">Source Email:</span>
                <span className="font-mono text-[#4F46E5]">Gmail Capture</span>
              </div>
            </div>

            {/* Attached Files List */}
            <div className="pt-3 border-t border-[#F7F7F5] space-y-1.5">
              <span className="text-[#6B6B6B] block text-[11px] font-semibold">Attached Files (3):</span>
              <div className="flex items-center gap-1.5 text-emerald-700 font-medium text-[11px]">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Gerber Package (PCB-102_Rev03_Gerber.zip)</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-700 font-medium text-[11px]">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>BOM Spreadsheet (PCB-102_BOM.xlsx)</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-700 font-medium text-[11px]">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Fabrication Drawing (PCB-102_Drawing.pdf)</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Audit Lineage Trail Card */}
      <div className="bg-white border border-[#E5E5E5] rounded-lg p-6 shadow-xs space-y-4">
        <h2 className="text-xs font-semibold text-[#171717] uppercase tracking-wider border-b border-[#E5E5E5] pb-3">
          RFQ Audit Lineage Trail
        </h2>

        <div className="space-y-4 font-sans text-xs">
          
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              ✓
            </div>
            <div>
              <div className="font-semibold text-[#171717]">10:42 AM — Captured from email</div>
              <p className="text-[#6B6B6B] text-[11px]">
                Captured directly from Gmail message (<span className="font-mono">purchase@abcelectronics.com</span>) via RFQ Bridge Browser Extension.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              ✓
            </div>
            <div>
              <div className="font-semibold text-[#171717]">10:43 AM — Information extracted</div>
              <p className="text-[#6B6B6B] text-[11px]">
                AI extraction engine processed 11 PCB attributes with 92% confidence score.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              ✓
            </div>
            <div>
              <div className="font-semibold text-[#171717]">10:44 AM — Files validated</div>
              <p className="text-[#6B6B6B] text-[11px]">
                Gerber 7-layer tree, 124-component BOM, and PDF drawing verified. Stackup warning acknowledged.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              4
            </div>
            <div>
              <div className="font-semibold text-[#171717]">Ready for manufacturing workflow</div>
              <p className="text-[#6B6B6B] text-[11px]">
                Will assign RFQ ID <span className="font-mono font-bold text-indigo-600">RFQ-2026-00421</span> and trigger Frontline Genesis & SAP ERP webhooks.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Final Action Bar */}
      <div className="flex items-center justify-between bg-[#FAFAFA] p-4 rounded-lg border border-[#E5E5E5]">
        <button
          onClick={onBackToReview}
          className="px-4 py-2 bg-white hover:bg-[#F7F7F5] border border-[#E5E5E5] text-[#171717] text-xs font-medium rounded-md transition-colors"
        >
          Back to Review
        </button>

        <button
          onClick={onCreateRFQ}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-bold rounded-md shadow-xs transition-colors"
        >
          <Check className="w-4 h-4" />
          <span>Create RFQ Now</span>
        </button>
      </div>
    </div>
  );
}

