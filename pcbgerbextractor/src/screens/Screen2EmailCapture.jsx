import React, { useState } from 'react';
import { Mail, Paperclip, FileText, CheckCircle2, ArrowRight, Sparkles, AlertCircle, Shield, ExternalLink, RefreshCw, X, ChevronRight, Download } from 'lucide-react';

export default function Screen2EmailCapture({ rfq, onReviewDetails, onCreateRFQDirect }) {
  const [webmailProvider, setWebmailProvider] = useState('gmail'); // 'gmail' | 'outlook' | 'zoho'
  const [isCapturing, setIsCapturing] = useState(false);
  const [capturedSuccess, setCapturedSuccess] = useState(false);

  const handleCapture = () => {
    setIsCapturing(true);
    setTimeout(() => {
      setIsCapturing(false);
      setCapturedSuccess(true);
    }, 800);
  };

  return (
    <div className="space-y-4 max-w-7xl mx-auto">
      {/* Top Banner explaining extension concept */}
      <div className="bg-[#171717] text-white p-3.5 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-md">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 shrink-0">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="font-semibold text-white">Browser Extension Concept Demonstration:</span>
            <span className="text-slate-300 ml-1">Simulates RFQ Bridge side panel active inside Gmail / Outlook / Webmail.</span>
          </div>
        </div>

        {/* Webmail Provider Selector */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto bg-slate-800 p-1 rounded-md border border-slate-700">
          <span className="text-[10px] text-slate-400 px-1 font-mono">Simulate:</span>
          <button 
            onClick={() => setWebmailProvider('gmail')}
            className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${webmailProvider === 'gmail' ? 'bg-red-600 text-white' : 'text-slate-300 hover:text-white'}`}
          >
            Gmail
          </button>
          <button 
            onClick={() => setWebmailProvider('outlook')}
            className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${webmailProvider === 'outlook' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'}`}
          >
            Outlook
          </button>
          <button 
            onClick={() => setWebmailProvider('zoho')}
            className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${webmailProvider === 'zoho' ? 'bg-emerald-600 text-white' : 'text-slate-300 hover:text-white'}`}
          >
            Zoho / Webmail
          </button>
        </div>
      </div>

      {/* Main Split Layout: Simulated Email (70%) + Extension Panel (30%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

        {/* LEFT AREA: SIMULATED GMAIL / OUTLOOK EMAIL INTERFACE (8 cols on desktop) */}
        <div className="lg:col-span-8 bg-white border border-[#E5E5E5] rounded-lg shadow-xs overflow-hidden">
          
          {/* Webmail Browser Window Chrome */}
          <div className="bg-[#F1F1EF] border-b border-[#E5E5E5] px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400 block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-400 block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-400 block"></span>
              </div>
              <div className="ml-3 text-xs font-mono text-[#6B6B6B] flex items-center gap-2 bg-white px-3 py-1 rounded border border-[#E5E5E5]">
                <Mail className="w-3 h-3 text-red-500" />
                <span>mail.google.com/mail/u/0/#inbox/rfq102</span>
              </div>
            </div>
            <div className="text-[11px] font-medium text-[#6B6B6B]">
              Simulated Customer Inbox
            </div>
          </div>

          {/* Email View Header */}
          <div className="p-6 border-b border-[#E5E5E5]">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-base font-bold text-[#171717] tracking-tight">
                RFQ – PCB-102 Rev 03 – 500 Qty
              </h2>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#F7F7F5] border border-[#E5E5E5] text-[#6B6B6B]">
                Inbox
              </span>
            </div>

            {/* From / To Info */}
            <div className="mt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm shrink-0 border border-indigo-200">
                AE
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#171717]">Rahul Sharma</span>
                  <span className="text-[11px] text-[#6B6B6B]">10:42 AM (3 hours ago)</span>
                </div>
                <div className="text-xs text-[#6B6B6B] truncate font-mono">
                  &lt;purchase@abcelectronics.com&gt;
                </div>
                <div className="text-[11px] text-[#6B6B6B] mt-0.5">
                  To: quotes@pcb-express.com
                </div>
              </div>
            </div>
          </div>

          {/* Email Body Content */}
          <div className="p-6 space-y-4 text-xs text-[#171717] leading-relaxed font-sans border-b border-[#E5E5E5]">
            <p className="font-medium text-[#171717]">Hi Team,</p>
            <p>
              Please provide a quotation for manufacturing <strong>500 pcs</strong> of <strong>PCB-102 Rev 03</strong>.
            </p>
            <p>
              Required delivery: <strong>15 October 2026</strong>.
            </p>
            <p>
              Please find the Gerber files, BOM and fabrication drawing attached.
              Note that we have impedance control requirements on the high-speed USB lines (50Ω single-ended / 100Ω differential).
            </p>
            <div className="pt-4 text-[#6B6B6B] border-t border-[#F7F7F5] space-y-1">
              <p className="font-semibold text-[#171717]">Regards,</p>
              <p className="font-medium text-[#171717]">Rahul Sharma</p>
              <p>Senior Procurement Specialist | ABC Electronics</p>
              <p className="font-mono text-[11px]">purchase@abcelectronics.com | +1 (555) 234-8901</p>
            </div>
          </div>

          {/* Email Attachments Box */}
          <div className="p-6 bg-[#FAFAFA]">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#171717] mb-3">
              <Paperclip className="w-4 h-4 text-[#6B6B6B]" />
              <span>3 Attachments (23.1 MB)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Attachment 1 */}
              <div className="p-3 bg-white rounded border border-[#E5E5E5] flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-medium text-[#171717] truncate">PCB-102_Rev03_Gerber.zip</div>
                  <div className="text-[10px] text-[#6B6B6B] font-mono">18.4 MB</div>
                </div>
              </div>

              {/* Attachment 2 */}
              <div className="p-3 bg-white rounded border border-[#E5E5E5] flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-medium text-[#171717] truncate">PCB-102_BOM.xlsx</div>
                  <div className="text-[10px] text-[#6B6B6B] font-mono">1.2 MB</div>
                </div>
              </div>

              {/* Attachment 3 */}
              <div className="p-3 bg-white rounded border border-[#E5E5E5] flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#F7F7F5] border border-[#E5E5E5] flex items-center justify-center text-red-600 shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-medium text-[#171717] truncate">PCB-102_Drawing.pdf</div>
                  <div className="text-[10px] text-[#6B6B6B] font-mono">3.5 MB</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT AREA: RFQ BRIDGE BROWSER EXTENSION SIDE PANEL (4 cols on desktop, 380px target width) */}
        <div className="lg:col-span-4 bg-white border border-[#E5E5E5] rounded-lg shadow-panel overflow-hidden sticky top-4">
          
          {/* Extension Header */}
          <div className="bg-[#171717] text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center font-bold text-xs text-white">
                R
              </div>
              <span className="font-bold text-sm tracking-tight">RFQ Bridge</span>
              <span className="text-[10px] bg-indigo-500/30 text-indigo-200 border border-indigo-400/40 px-1.5 py-0.2 rounded font-mono">
                v2.4
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[11px] text-emerald-300 font-medium">Extension Active</span>
            </div>
          </div>

          {/* Extension Status Box */}
          <div className="p-4 bg-indigo-50/50 border-b border-indigo-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-xs font-semibold text-indigo-950">RFQ Email Detected</span>
            </div>
            <span className="text-[10px] font-mono bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded font-semibold">
              98% Match
            </span>
          </div>

          {/* Extension Detected Parameters Summary */}
          <div className="p-4 space-y-3 text-xs border-b border-[#E5E5E5]">
            <div className="text-[11px] font-semibold text-[#6B6B6B] uppercase tracking-wider">
              AI Extracted Summary
            </div>

            <div className="space-y-2 font-sans">
              <div className="flex items-center justify-between py-1 border-b border-[#F7F7F5]">
                <span className="text-[#6B6B6B]">Customer</span>
                <span className="font-semibold text-[#171717]">ABC Electronics</span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-[#F7F7F5]">
                <span className="text-[#6B6B6B]">PCB Part</span>
                <span className="font-mono font-bold text-indigo-600">PCB-102</span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-[#F7F7F5]">
                <span className="text-[#6B6B6B]">Revision</span>
                <span className="font-mono font-semibold text-[#171717]">Rev 03</span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-[#F7F7F5]">
                <span className="text-[#6B6B6B]">Quantity</span>
                <span className="font-mono font-bold text-[#171717]">500 pcs</span>
              </div>

              <div className="flex items-center justify-between py-1">
                <span className="text-[#6B6B6B]">Required Delivery</span>
                <span className="font-semibold text-[#171717]">15 Oct 2026</span>
              </div>
            </div>
          </div>

          {/* Extension File Classification Checklist */}
          <div className="p-4 space-y-2.5 text-xs border-b border-[#E5E5E5] bg-[#FAFAFA]">
            <div className="text-[11px] font-semibold text-[#6B6B6B] uppercase tracking-wider flex items-center justify-between">
              <span>Detected Attachments</span>
              <span className="text-emerald-700 font-mono text-[10px]">3 / 3 Valid</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between bg-white p-2 rounded border border-[#E5E5E5]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="font-medium text-[#171717]">Gerber Package</span>
                </div>
                <span className="text-[10px] text-[#6B6B6B] font-mono">.ZIP (7 Layers)</span>
              </div>

              <div className="flex items-center justify-between bg-white p-2 rounded border border-[#E5E5E5]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="font-medium text-[#171717]">BOM Spreadsheet</span>
                </div>
                <span className="text-[10px] text-[#6B6B6B] font-mono">.XLSX (124 Parts)</span>
              </div>

              <div className="flex items-center justify-between bg-white p-2 rounded border border-[#E5E5E5]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="font-medium text-[#171717]">Fabrication Drawing</span>
                </div>
                <span className="text-[10px] text-[#6B6B6B] font-mono">.PDF</span>
              </div>
            </div>
          </div>

          {/* Extension Action Footer */}
          <div className="p-4 space-y-2.5 bg-white">
            {capturedSuccess ? (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-md text-center space-y-2">
                <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-emerald-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>RFQ Captured & Parsed!</span>
                </div>
                <button
                  onClick={onReviewDetails}
                  className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs rounded transition-colors"
                >
                  Proceed to Review Details
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={onCreateRFQDirect}
                  className="w-full py-2.5 bg-[#171717] hover:bg-black text-white text-xs font-semibold rounded-md shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <span>Create RFQ</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onReviewDetails}
                  className="w-full py-2 bg-white hover:bg-[#F7F7F5] border border-[#E5E5E5] text-[#171717] text-xs font-medium rounded-md transition-colors flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3 h-3 text-indigo-600" />
                  <span>Review Details</span>
                </button>
              </>
            )}

            <p className="text-[10px] text-center text-[#6B6B6B]">
              RFQ Bridge automatically syncs captured RFQs with your Genesis CAM & SAP ERP workflows.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

