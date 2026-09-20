import React, { useState } from 'react';
import { FileText, User, Layers, Mail, Clock, Download, ExternalLink, CheckCircle2, ShieldCheck, Cpu, Sparkles, Check, AlertTriangle, ArrowLeft } from 'lucide-react';
import GerberViewerCanvas from '../components/GerberViewerCanvas';

export default function Screen7RFQDetail({ rfq, onBackToInbox }) {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'pcbData', label: 'PCB Data', icon: Layers },
    { id: 'files', label: 'Files & Gerber', icon: Download },
    { id: 'sourceEmail', label: 'Source Email', icon: Mail },
    { id: 'activity', label: 'Activity Log', icon: Clock }
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Navigation & Header */}
      <div className="space-y-4 border-b border-[#E5E5E5] pb-5">
        <button
          onClick={onBackToInbox}
          className="inline-flex items-center gap-1.5 text-xs text-[#6B6B6B] hover:text-[#171717] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to RFQ Inbox</span>
        </button>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold font-mono text-indigo-600 tracking-tight">
                {rfq?.rfqNumber || 'RFQ-2026-00421'}
              </h1>
              <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Ready for Manufacturing Review</span>
              </span>
            </div>
            <p className="text-xs text-[#6B6B6B] mt-1">
              Customer: <strong className="text-[#171717]">{rfq?.customer || 'ABC Electronics'}</strong> • Part: <strong className="font-mono text-[#171717]">{rfq?.partNumber || 'PCB-102'} ({rfq?.revision || 'Rev 03'})</strong>
            </p>
          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-2">
            <button className="px-3.5 py-2 bg-white hover:bg-[#F7F7F5] border border-[#E5E5E5] text-[#171717] text-xs font-medium rounded-md shadow-xs transition-colors flex items-center gap-1.5">
              <Download className="w-3.5 h-3.5 text-[#6B6B6B]" />
              <span>Export RFQ Package</span>
            </button>

            <button className="px-4 py-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-semibold rounded-md shadow-xs transition-colors flex items-center gap-1.5">
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Send to Genesis CAM</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Navigation Bar */}
      <div className="flex items-center gap-2 border-b border-[#E5E5E5] bg-white p-1 rounded-lg shadow-xs overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs font-medium transition-colors whitespace-nowrap ${
                isActive
                  ? 'bg-[#171717] text-white shadow-xs'
                  : 'text-[#6B6B6B] hover:text-[#171717] hover:bg-[#F7F7F5]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Key Metrics Cards (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white border border-[#E5E5E5] rounded-lg p-4 shadow-xs">
                <span className="text-[11px] text-[#6B6B6B] block">Quantity</span>
                <span className="text-lg font-bold font-mono text-[#171717]">{rfq?.quantity || 500} pcs</span>
              </div>

              <div className="bg-white border border-[#E5E5E5] rounded-lg p-4 shadow-xs">
                <span className="text-[11px] text-[#6B6B6B] block">Layer Count</span>
                <span className="text-lg font-bold font-mono text-indigo-600">4 Layers</span>
              </div>

              <div className="bg-white border border-[#E5E5E5] rounded-lg p-4 shadow-xs">
                <span className="text-[11px] text-[#6B6B6B] block">Required Delivery</span>
                <span className="text-xs font-bold text-[#171717]">{rfq?.deliveryDate || '15 Oct 2026'}</span>
              </div>

              <div className="bg-white border border-[#E5E5E5] rounded-lg p-4 shadow-xs">
                <span className="text-[11px] text-[#6B6B6B] block">Lead Time</span>
                <span className="text-xs font-bold text-[#171717]">{rfq?.leadTime || '15 days'}</span>
              </div>
            </div>

            {/* PCB Information Summary Card */}
            <div className="bg-white border border-[#E5E5E5] rounded-lg p-5 shadow-xs space-y-4">
              <h2 className="text-xs font-semibold text-[#171717] uppercase tracking-wider border-b border-[#E5E5E5] pb-3">
                PCB Manufacturing Specifications Summary
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                <div className="space-y-2">
                  <div className="flex justify-between py-1 border-b border-[#F7F7F5]">
                    <span className="text-[#6B6B6B]">Part Number:</span>
                    <span className="font-mono font-bold text-[#171717]">PCB-102</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#F7F7F5]">
                    <span className="text-[#6B6B6B]">Revision:</span>
                    <span className="font-mono font-semibold text-[#171717]">Rev 03</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#F7F7F5]">
                    <span className="text-[#6B6B6B]">Base Substrate:</span>
                    <span className="font-medium text-[#171717]">FR-4 TG170 High-TG</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#6B6B6B]">Surface Finish:</span>
                    <span className="font-medium text-[#171717]">ENIG (Immersion Gold)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between py-1 border-b border-[#F7F7F5]">
                    <span className="text-[#6B6B6B]">Dimensions:</span>
                    <span className="font-mono font-medium text-[#171717]">120.0 x 85.0 mm</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#F7F7F5]">
                    <span className="text-[#6B6B6B]">Thickness:</span>
                    <span className="font-mono font-medium text-[#171717]">1.6 mm (±10%)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#F7F7F5]">
                    <span className="text-[#6B6B6B]">Outer Copper:</span>
                    <span className="font-mono font-medium text-[#171717]">1 oz (35µm)</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#6B6B6B]">Impedance:</span>
                    <span className="font-semibold text-amber-700">Required (50Ω / 100Ω)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Validation Checklist */}
            <div className="bg-white border border-[#E5E5E5] rounded-lg p-5 shadow-xs space-y-3">
              <h2 className="text-xs font-semibold text-[#171717] uppercase tracking-wider border-b border-[#E5E5E5] pb-3">
                File Pre-Flight Validation Results
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-emerald-50/60 border border-emerald-200 rounded-md flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-semibold text-emerald-900 block">Gerber Package</span>
                    <span className="text-[11px] text-emerald-700">7 Layers Valid</span>
                  </div>
                </div>

                <div className="p-3 bg-emerald-50/60 border border-emerald-200 rounded-md flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-semibold text-emerald-900 block">BOM Spreadsheet</span>
                    <span className="text-[11px] text-emerald-700">124 Parts Extracted</span>
                  </div>
                </div>

                <div className="p-3 bg-emerald-50/60 border border-emerald-200 rounded-md flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-semibold text-emerald-900 block">PDF Drawing</span>
                    <span className="text-[11px] text-emerald-700">Dimensions Verified</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Sidebar Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Customer Contact Box */}
            <div className="bg-white border border-[#E5E5E5] rounded-lg p-5 shadow-xs space-y-3">
              <h2 className="text-xs font-semibold text-[#171717] uppercase tracking-wider border-b border-[#E5E5E5] pb-2">
                Customer Information
              </h2>
              <div className="text-xs space-y-2">
                <div>
                  <span className="text-[#6B6B6B] block text-[11px]">Company</span>
                  <span className="font-bold text-[#171717]">ABC Electronics</span>
                </div>
                <div>
                  <span className="text-[#6B6B6B] block text-[11px]">Contact Person</span>
                  <span className="font-semibold text-[#171717]">Rahul Sharma</span>
                </div>
                <div>
                  <span className="text-[#6B6B6B] block text-[11px]">Email</span>
                  <span className="font-mono text-indigo-600">purchase@abcelectronics.com</span>
                </div>
                <div>
                  <span className="text-[#6B6B6B] block text-[11px]">Phone</span>
                  <span className="font-mono text-[#171717]">+1 (555) 234-8901</span>
                </div>
              </div>
            </div>

            {/* Traceability Audit Card */}
            <div className="bg-white border border-[#E5E5E5] rounded-lg p-5 shadow-xs space-y-3">
              <h2 className="text-xs font-semibold text-[#171717] uppercase tracking-wider border-b border-[#E5E5E5] pb-2">
                Traceability Lineage
              </h2>
              <div className="text-xs space-y-3 font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-[#6B6B6B]">Source Email:</span>
                  <span className="font-semibold text-emerald-600">Gmail</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#6B6B6B]">Captured By:</span>
                  <span className="text-[#171717]">Extension v2.4</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#6B6B6B]">AI Engine:</span>
                  <span className="text-[#171717]">Gemini Flash</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#6B6B6B]">Creation Time:</span>
                  <span className="text-[#171717]">10:45 AM</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* TAB 2: DEEP PCB DATA */}
      {activeTab === 'pcbData' && (
        <div className="bg-white border border-[#E5E5E5] rounded-lg shadow-xs overflow-hidden">
          <div className="p-4 bg-[#FAFAFA] border-b border-[#E5E5E5]">
            <h2 className="text-xs font-semibold text-[#171717] uppercase tracking-wider">
              Deep PCB Fabrication Parameters
            </h2>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              
              <div className="space-y-3">
                <h3 className="font-semibold text-[#171717] text-xs border-b border-[#E5E5E5] pb-1">Board Construction</h3>
                <div className="flex justify-between py-1 border-b border-[#F7F7F5]">
                  <span className="text-[#6B6B6B]">Layer Count:</span>
                  <span className="font-mono font-bold text-indigo-600">4 Layers</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F7F7F5]">
                  <span className="text-[#6B6B6B]">Substrate Material:</span>
                  <span className="font-medium text-[#171717]">FR-4 TG170</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F7F7F5]">
                  <span className="text-[#6B6B6B]">Finished Board Thickness:</span>
                  <span className="font-mono text-[#171717]">1.6 mm ±0.10mm</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F7F7F5]">
                  <span className="text-[#6B6B6B]">Outer Layer Copper:</span>
                  <span className="font-mono text-[#171717]">1 oz (35µm)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#6B6B6B]">Inner Layer Copper:</span>
                  <span className="font-mono text-[#171717]">0.5 oz (18µm)</span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-[#171717] text-xs border-b border-[#E5E5E5] pb-1">Features & Tolerances</h3>
                <div className="flex justify-between py-1 border-b border-[#F7F7F5]">
                  <span className="text-[#6B6B6B]">Minimum Trace / Space:</span>
                  <span className="font-mono font-bold text-[#171717]">5 / 5 mil</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F7F7F5]">
                  <span className="text-[#6B6B6B]">Minimum Hole Diameter:</span>
                  <span className="font-mono font-bold text-[#171717]">0.20 mm (Via)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F7F7F5]">
                  <span className="text-[#6B6B6B]">Solder Mask Color:</span>
                  <span className="font-semibold text-emerald-700">Green</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F7F7F5]">
                  <span className="text-[#6B6B6B]">Silkscreen Color:</span>
                  <span className="font-semibold text-[#171717]">White</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#6B6B6B]">Controlled Impedance:</span>
                  <span className="font-semibold text-amber-700">50Ω Single / 100Ω Differential</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* TAB 3: FILES & GERBER CANVAS */}
      {activeTab === 'files' && (
        <div className="space-y-6">
          {/* Gerber Canvas */}
          <div className="bg-white border border-[#E5E5E5] rounded-lg p-5 shadow-xs space-y-4">
            <h2 className="text-xs font-semibold text-[#171717] uppercase tracking-wider">
              Interactive 2D Gerber Layer Inspection
            </h2>
            <GerberViewerCanvas className="h-[360px]" />
          </div>

          {/* Files Table */}
          <div className="bg-white border border-[#E5E5E5] rounded-lg shadow-xs p-5 space-y-3">
            <h2 className="text-xs font-semibold text-[#171717] uppercase tracking-wider border-b border-[#E5E5E5] pb-2">
              Extracted File Assets
            </h2>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-3 bg-[#FAFAFA] rounded border border-[#E5E5E5]">
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-indigo-600" />
                  <span className="font-mono font-semibold text-[#171717]">PCB-102_Rev03_Gerber.zip</span>
                  <span className="text-[10px] text-[#6B6B6B] font-mono">(18.4 MB)</span>
                </div>
                <button className="text-xs text-indigo-600 font-medium hover:underline flex items-center gap-1">
                  <Download className="w-3.5 h-3.5" /> Download
                </button>
              </div>

              <div className="flex items-center justify-between p-3 bg-[#FAFAFA] rounded border border-[#E5E5E5]">
                <div className="flex items-center gap-2.5">
                  <Cpu className="w-4 h-4 text-emerald-600" />
                  <span className="font-mono font-semibold text-[#171717]">PCB-102_BOM.xlsx</span>
                  <span className="text-[10px] text-[#6B6B6B] font-mono">(1.2 MB — 124 Components)</span>
                </div>
                <button className="text-xs text-indigo-600 font-medium hover:underline flex items-center gap-1">
                  <Download className="w-3.5 h-3.5" /> Download
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: SOURCE EMAIL */}
      {activeTab === 'sourceEmail' && (
        <div className="bg-white border border-[#E5E5E5] rounded-lg p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-3">
            <h2 className="text-xs font-semibold text-[#171717] uppercase tracking-wider">
              Original Customer Email Capture
            </h2>
            <span className="font-mono text-xs text-[#6B6B6B]">Source: Gmail API Capture</span>
          </div>

          <div className="bg-[#F7F7F5] border border-[#E5E5E5] rounded-md p-4 text-xs font-mono space-y-2">
            <div><strong className="text-[#171717]">From:</strong> Rahul Sharma &lt;purchase@abcelectronics.com&gt;</div>
            <div><strong className="text-[#171717]">To:</strong> quotes@pcb-express.com</div>
            <div><strong className="text-[#171717]">Date:</strong> Sunday, 20 Sept 2026 at 10:42 AM</div>
            <div><strong className="text-[#171717]">Subject:</strong> RFQ – PCB-102 Rev 03 – 500 Qty</div>
          </div>

          <div className="bg-white border border-[#E5E5E5] rounded-md p-4 text-xs text-[#171717] font-sans leading-relaxed whitespace-pre-line">
            {rfq?.emailDetails?.body || `Hi Team,

Please provide a quotation for manufacturing 500 pcs of PCB-102 Rev 03.
Required delivery: 15 October 2026.

Please find the Gerber files, BOM and fabrication drawing attached.
Regards,
Rahul`}
          </div>
        </div>
      )}

      {/* TAB 5: ACTIVITY LOG */}
      {activeTab === 'activity' && (
        <div className="bg-white border border-[#E5E5E5] rounded-lg p-6 shadow-xs space-y-4">
          <h2 className="text-xs font-semibold text-[#171717] uppercase tracking-wider border-b border-[#E5E5E5] pb-3">
            RFQ Audit Log & System History
          </h2>

          <div className="space-y-4 font-sans text-xs">
            {rfq?.activityLog?.map((log, index) => (
              <div key={index} className="flex items-start gap-4 pb-3 border-b border-[#F7F7F5] last:border-0">
                <span className="font-mono text-[11px] text-[#6B6B6B] w-20 shrink-0">{log.time}</span>
                <div className="space-y-0.5">
                  <div className="font-semibold text-[#171717]">{log.title}</div>
                  <div className="text-[#6B6B6B] text-[11px]">{log.description}</div>
                  <div className="text-[10px] text-indigo-600 font-mono">Author: {log.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

