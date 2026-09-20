import React, { useState } from 'react';
import { Sparkles, CheckCircle2, AlertCircle, Edit2, Check, ArrowRight, User, FileText, Clock, HelpCircle, Layers } from 'lucide-react';

export default function Screen3AIExtraction({ rfq, onSaveAndContinue }) {
  // Local editable state for AI parameters
  const [extractedData, setExtractedData] = useState({
    quantity: rfq?.extractedData?.quantity?.value || "500 pcs",
    deliveryDate: rfq?.extractedData?.deliveryDate?.value || "15 Oct 2026",
    leadTime: rfq?.extractedData?.leadTime?.value || "15 working days",
    surfaceFinish: rfq?.extractedData?.surfaceFinish?.suggestedValue || "ENIG (Electroless Nickel Immersion Gold)",
    material: rfq?.extractedData?.material?.suggestedValue || "FR-4 TG170",
    layerCount: rfq?.extractedData?.layerCount?.value || "4 Layers",
    thickness: rfq?.extractedData?.boardThickness?.value || "1.6 mm",
    copperWeight: rfq?.extractedData?.copperWeight?.value || "1 oz (35µm)",
    solderMask: rfq?.extractedData?.solderMaskColor?.value || "Green",
    silkscreen: rfq?.extractedData?.silkscreenColor?.value || "White"
  });

  const [editingField, setEditingField] = useState(null);

  const handleFieldChange = (field, value) => {
    setExtractedData(prev => ({ ...prev, [field]: value }));
  };

  const getConfidenceBadge = (confidence, score) => {
    if (confidence === 'high') {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
          <span>High confidence ({Math.round(score * 100)}%)</span>
        </span>
      );
    }
    if (confidence === 'medium') {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-blue-50 text-blue-700 border border-blue-200">
          <CheckCircle2 className="w-3 h-3 text-blue-600" />
          <span>Medium confidence ({Math.round(score * 100)}%)</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-amber-50 text-amber-700 border border-amber-200">
        <AlertCircle className="w-3 h-3 text-amber-600" />
        <span>Needs confirmation</span>
      </span>
    );
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E5E5] pb-5">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-xl font-bold text-[#171717] tracking-tight">Review RFQ</h1>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-200">
              <Sparkles className="w-3 h-3 text-indigo-600" />
              <span>Captured from email</span>
            </span>
          </div>
          <p className="text-xs text-[#6B6B6B] mt-1">
            Review and approve AI-extracted manufacturing parameters before file classification.
          </p>
        </div>

        <button
          onClick={() => onSaveAndContinue(extractedData)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-semibold rounded-md shadow-xs transition-colors self-start sm:self-auto"
        >
          <span>Save & Continue</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Human-in-the-loop UX Principle Callout */}
      <div className="bg-amber-50/70 border border-amber-200/80 rounded-lg p-3.5 flex items-start gap-3">
        <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <div className="text-xs text-amber-900 space-y-0.5">
          <span className="font-semibold">Human Approval Principle:</span> AI has extracted 11 attributes from the customer email and Gerber headers. Please verify fields marked with <span className="font-semibold text-amber-800 font-mono">Needs confirmation</span> prior to committing to manufacturing.
        </div>
      </div>

      {/* Main Grid: Left Customer & Basic Specs (4 cols) | Right AI Extracted Specs (8 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

        {/* LEFT COLUMN: CUSTOMER & BASIC RFQ DETAILS */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Customer Card */}
          <div className="bg-white border border-[#E5E5E5] rounded-lg p-5 shadow-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-[#E5E5E5] pb-3">
              <User className="w-4 h-4 text-[#6B6B6B]" />
              <h2 className="text-xs font-semibold text-[#171717] uppercase tracking-wider">Customer</h2>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-[#6B6B6B] block text-[11px]">Company Name</span>
                <span className="font-bold text-[#171717] text-sm">{rfq?.customer || 'ABC Electronics'}</span>
              </div>

              <div>
                <span className="text-[#6B6B6B] block text-[11px]">Contact Person</span>
                <span className="font-semibold text-[#171717]">{rfq?.contactName || 'Rahul Sharma'}</span>
              </div>

              <div>
                <span className="text-[#6B6B6B] block text-[11px]">Email Address</span>
                <span className="font-mono text-[#4F46E5]">{rfq?.contactEmail || 'purchase@abcelectronics.com'}</span>
              </div>
            </div>
          </div>

          {/* RFQ Details Card */}
          <div className="bg-white border border-[#E5E5E5] rounded-lg p-5 shadow-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-[#E5E5E5] pb-3">
              <FileText className="w-4 h-4 text-[#6B6B6B]" />
              <h2 className="text-xs font-semibold text-[#171717] uppercase tracking-wider">RFQ Details</h2>
            </div>

            <div className="space-y-3 text-xs font-sans">
              <div className="flex justify-between py-1 border-b border-[#F7F7F5]">
                <span className="text-[#6B6B6B]">RFQ Number</span>
                <span className="font-mono font-bold text-indigo-600">{rfq?.rfqNumber || 'RFQ-2026-00421'}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-[#F7F7F5]">
                <span className="text-[#6B6B6B]">PCB Part Number</span>
                <span className="font-mono font-bold text-[#171717]">{rfq?.partNumber || 'PCB-102'}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-[#F7F7F5]">
                <span className="text-[#6B6B6B]">Revision</span>
                <span className="font-mono font-semibold text-[#171717]">{rfq?.revision || 'Rev 03'}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-[#F7F7F5]">
                <span className="text-[#6B6B6B]">PCB Description</span>
                <span className="font-medium text-[#171717]">{rfq?.description || 'Controller Board'}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-[#F7F7F5]">
                <span className="text-[#6B6B6B]">Quantity</span>
                <span className="font-mono font-bold text-[#171717]">{rfq?.quantity || 500} pcs</span>
              </div>

              <div className="flex justify-between py-1 border-b border-[#F7F7F5]">
                <span className="text-[#6B6B6B]">Required Delivery</span>
                <span className="font-semibold text-[#171717]">{rfq?.deliveryDate || '15 October 2026'}</span>
              </div>

              <div className="flex justify-between py-1">
                <span className="text-[#6B6B6B]">Requested Lead Time</span>
                <span className="font-semibold text-[#171717]">{rfq?.leadTime || '15 working days'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: AI EXTRACTION TABLE & INLINE EDITING */}
        <div className="lg:col-span-8 bg-white border border-[#E5E5E5] rounded-lg shadow-xs overflow-hidden">
          
          <div className="p-4 bg-[#FAFAFA] border-b border-[#E5E5E5] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <h2 className="text-xs font-semibold text-[#171717] uppercase tracking-wider">AI Extracted Information</h2>
            </div>
            <span className="text-[11px] text-[#6B6B6B]">
              Click any field to edit value
            </span>
          </div>

          <div className="divide-y divide-[#E5E5E5] text-xs">
            
            {/* Field 1: Quantity */}
            <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#F7F7F5]/50 transition-colors">
              <div className="w-48 shrink-0">
                <span className="font-semibold text-[#171717] block">Quantity</span>
                <span className="text-[11px] text-[#6B6B6B]">Parsed from email body</span>
              </div>

              <div className="flex-1 font-mono font-medium text-[#171717]">
                {editingField === 'quantity' ? (
                  <input
                    type="text"
                    value={extractedData.quantity}
                    onChange={(e) => handleFieldChange('quantity', e.target.value)}
                    onBlur={() => setEditingField(null)}
                    autoFocus
                    className="px-2 py-1 border border-indigo-500 rounded bg-white font-mono text-xs w-full focus:outline-none"
                  />
                ) : (
                  <span 
                    onClick={() => setEditingField('quantity')} 
                    className="cursor-pointer hover:text-indigo-600 hover:underline flex items-center gap-1.5"
                  >
                    <span>{extractedData.quantity}</span>
                    <Edit2 className="w-3 h-3 text-slate-400 opacity-0 group-hover:opacity-100" />
                  </span>
                )}
              </div>

              <div>
                {getConfidenceBadge('high', 0.98)}
              </div>
            </div>

            {/* Field 2: Required Delivery */}
            <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#F7F7F5]/50 transition-colors">
              <div className="w-48 shrink-0">
                <span className="font-semibold text-[#171717] block">Required Delivery</span>
                <span className="text-[11px] text-[#6B6B6B]">Parsed from email body</span>
              </div>

              <div className="flex-1 font-mono font-medium text-[#171717]">
                {editingField === 'deliveryDate' ? (
                  <input
                    type="text"
                    value={extractedData.deliveryDate}
                    onChange={(e) => handleFieldChange('deliveryDate', e.target.value)}
                    onBlur={() => setEditingField(null)}
                    autoFocus
                    className="px-2 py-1 border border-indigo-500 rounded bg-white text-xs w-full focus:outline-none"
                  />
                ) : (
                  <span onClick={() => setEditingField('deliveryDate')} className="cursor-pointer hover:text-indigo-600 hover:underline">
                    {extractedData.deliveryDate}
                  </span>
                )}
              </div>

              <div>
                {getConfidenceBadge('high', 0.95)}
              </div>
            </div>

            {/* Field 3: Surface Finish (Needs Confirmation) */}
            <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-amber-50/40 hover:bg-amber-50/70 transition-colors">
              <div className="w-48 shrink-0">
                <span className="font-semibold text-[#171717] flex items-center gap-1">
                  <span>Surface Finish</span>
                  <span className="text-amber-600 text-[10px] bg-amber-100 px-1 rounded font-normal">Action Needed</span>
                </span>
                <span className="text-[11px] text-amber-800">Not found in email body</span>
              </div>

              <div className="flex-1 font-sans">
                <select
                  value={extractedData.surfaceFinish}
                  onChange={(e) => handleFieldChange('surfaceFinish', e.target.value)}
                  className="w-full text-xs font-medium text-[#171717] bg-white border border-amber-300 rounded px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-amber-500"
                >
                  <option value="ENIG (Electroless Nickel Immersion Gold)">ENIG (Electroless Nickel Immersion Gold) — Suggested</option>
                  <option value="Lead-Free HASL">Lead-Free HASL (Hot Air Solder Leveling)</option>
                  <option value="OSP (Organic Solderability Preservative)">OSP (Organic Solderability Preservative)</option>
                  <option value="Immersion Silver">Immersion Silver</option>
                </select>
              </div>

              <div>
                {getConfidenceBadge('needs_confirmation', 0.40)}
              </div>
            </div>

            {/* Field 4: Material (Needs Confirmation) */}
            <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-amber-50/40 hover:bg-amber-50/70 transition-colors">
              <div className="w-48 shrink-0">
                <span className="font-semibold text-[#171717] flex items-center gap-1">
                  <span>Base Material</span>
                  <span className="text-amber-600 text-[10px] bg-amber-100 px-1 rounded font-normal">Action Needed</span>
                </span>
                <span className="text-[11px] text-amber-800">Not found in email body</span>
              </div>

              <div className="flex-1 font-sans">
                <select
                  value={extractedData.material}
                  onChange={(e) => handleFieldChange('material', e.target.value)}
                  className="w-full text-xs font-medium text-[#171717] bg-white border border-amber-300 rounded px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-amber-500"
                >
                  <option value="FR-4 TG170">FR-4 TG170 (High TG Standard) — Suggested</option>
                  <option value="FR-4 Standard TG130">FR-4 Standard TG130</option>
                  <option value="Rogers 4350B High Frequency">Rogers 4350B (High Frequency RF)</option>
                  <option value="Aluminum Core">Aluminum Metal Core</option>
                </select>
              </div>

              <div>
                {getConfidenceBadge('needs_confirmation', 0.35)}
              </div>
            </div>

            {/* Field 5: Layer Count */}
            <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#F7F7F5]/50 transition-colors">
              <div className="w-48 shrink-0">
                <span className="font-semibold text-[#171717] block">Layer Count</span>
                <span className="text-[11px] text-[#6B6B6B]">Parsed from Gerber files</span>
              </div>

              <div className="flex-1 font-mono font-medium text-[#171717]">
                {extractedData.layerCount}
              </div>

              <div>
                {getConfidenceBadge('high', 0.96)}
              </div>
            </div>

            {/* Field 6: Board Thickness */}
            <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#F7F7F5]/50 transition-colors">
              <div className="w-48 shrink-0">
                <span className="font-semibold text-[#171717] block">Finished Thickness</span>
                <span className="text-[11px] text-[#6B6B6B]">Parsed from Drawing.pdf</span>
              </div>

              <div className="flex-1 font-mono font-medium text-[#171717]">
                {extractedData.thickness}
              </div>

              <div>
                {getConfidenceBadge('high', 0.92)}
              </div>
            </div>

            {/* Field 7: Copper Weight */}
            <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#F7F7F5]/50 transition-colors">
              <div className="w-48 shrink-0">
                <span className="font-semibold text-[#171717] block">Copper Weight</span>
                <span className="text-[11px] text-[#6B6B6B]">Standard outer copper</span>
              </div>

              <div className="flex-1 font-mono font-medium text-[#171717]">
                {extractedData.copperWeight}
              </div>

              <div>
                {getConfidenceBadge('medium', 0.78)}
              </div>
            </div>

          </div>

          {/* Footer Action */}
          <div className="p-4 bg-[#FAFAFA] border-t border-[#E5E5E5] flex items-center justify-between">
            <span className="text-xs text-[#6B6B6B]">
              11 of 11 fields verified & approved
            </span>

            <button
              onClick={() => onSaveAndContinue(extractedData)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-semibold rounded-md shadow-xs transition-colors"
            >
              <span>Save & Continue to File Validation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

