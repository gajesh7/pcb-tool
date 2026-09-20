import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle, FileText, ChevronDown, ChevronUp, Eye, ArrowRight, Mail, Layers, Cpu, Check, HelpCircle } from 'lucide-react';
import GerberViewerCanvas from '../components/GerberViewerCanvas';
import RequestInfoModal from '../components/RequestInfoModal';

export default function Screen4FileValidation({ rfq, onContinue }) {
  const [isGerberExpanded, setIsGerberExpanded] = useState(true);
  const [isBOMExpanded, setIsBOMExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requestSent, setRequestSent] = useState(false);

  const gerberFile = rfq?.files?.find(f => f.type === 'Gerber Package');
  const bomFile = rfq?.files?.find(f => f.type === 'BOM');
  const drawingFile = rfq?.files?.find(f => f.type === 'Fabrication Drawing');

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E5E5] pb-5">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-[#171717] tracking-tight">Files & Validation</h1>
            <span className="bg-emerald-50 text-emerald-700 text-xs px-2.5 py-0.5 rounded-full font-medium border border-emerald-200">
              3 Files Processed
            </span>
          </div>
          <p className="text-xs text-[#6B6B6B] mt-1">
            Pre-flight classification and layer sanity checks for manufacturing intake.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-[#F7F7F5] border border-[#E5E5E5] text-[#171717] text-xs font-medium rounded-md shadow-xs transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-amber-600" />
            <span>Request Information</span>
          </button>

          <button
            onClick={onContinue}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-semibold rounded-md shadow-xs transition-colors"
          >
            <span>Continue to Confirmation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

        {/* LEFT COLUMN: FILE CARDS & EXPANDABLE DETAILS (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* FILE 1: GERBER PACKAGE */}
          <div className="bg-white border border-[#E5E5E5] rounded-lg shadow-xs overflow-hidden">
            <div 
              onClick={() => setIsGerberExpanded(!isGerberExpanded)}
              className="p-4 bg-white hover:bg-[#F7F7F5] cursor-pointer transition-colors flex items-center justify-between border-b border-[#E5E5E5]"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                  <Layers className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-xs text-[#171717]">PCB-102_Rev03_Gerber.zip</span>
                    <span className="text-[10px] text-[#6B6B6B] font-mono">18.4 MB</span>
                  </div>
                  <div className="text-xs text-[#6B6B6B] flex items-center gap-2 mt-0.5">
                    <span>Type: <strong>Gerber Package</strong></span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Valid package</span>
                </span>
                {isGerberExpanded ? <ChevronUp className="w-4 h-4 text-[#6B6B6B]" /> : <ChevronDown className="w-4 h-4 text-[#6B6B6B]" />}
              </div>
            </div>

            {/* Gerber Expanded View: Layers Tree + 2D Interactive Gerber Viewer */}
            {isGerberExpanded && (
              <div className="p-5 bg-[#FAFAFA] space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Layer Sub-Tree Checklist */}
                  <div className="bg-white p-4 rounded-lg border border-[#E5E5E5] space-y-2.5">
                    <div className="text-[11px] font-semibold text-[#6B6B6B] uppercase tracking-wider border-b border-[#E5E5E5] pb-2">
                      Detected Layer Files (7 / 7)
                    </div>

                    <div className="space-y-1.5 text-xs font-mono">
                      <div className="flex items-center justify-between p-1.5 bg-[#F7F7F5] rounded">
                        <span className="flex items-center gap-2 text-[#171717]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Top Copper</span>
                        </span>
                        <span className="text-[10px] text-[#6B6B6B]">.gtl</span>
                      </div>

                      <div className="flex items-center justify-between p-1.5 bg-[#F7F7F5] rounded">
                        <span className="flex items-center gap-2 text-[#171717]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Bottom Copper</span>
                        </span>
                        <span className="text-[10px] text-[#6B6B6B]">.gbl</span>
                      </div>

                      <div className="flex items-center justify-between p-1.5 bg-[#F7F7F5] rounded">
                        <span className="flex items-center gap-2 text-[#171717]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Top Solder Mask</span>
                        </span>
                        <span className="text-[10px] text-[#6B6B6B]">.gts</span>
                      </div>

                      <div className="flex items-center justify-between p-1.5 bg-[#F7F7F5] rounded">
                        <span className="flex items-center gap-2 text-[#171717]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Bottom Solder Mask</span>
                        </span>
                        <span className="text-[10px] text-[#6B6B6B]">.gbs</span>
                      </div>

                      <div className="flex items-center justify-between p-1.5 bg-[#F7F7F5] rounded">
                        <span className="flex items-center gap-2 text-[#171717]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Top Silkscreen</span>
                        </span>
                        <span className="text-[10px] text-[#6B6B6B]">.gto</span>
                      </div>

                      <div className="flex items-center justify-between p-1.5 bg-[#F7F7F5] rounded">
                        <span className="flex items-center gap-2 text-[#171717]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Board Outline</span>
                        </span>
                        <span className="text-[10px] text-[#6B6B6B]">.gko</span>
                      </div>

                      <div className="flex items-center justify-between p-1.5 bg-[#F7F7F5] rounded">
                        <span className="flex items-center gap-2 text-[#171717]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Drill File</span>
                        </span>
                        <span className="text-[10px] text-[#6B6B6B]">.drl</span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Gerber Canvas Preview */}
                  <div>
                    <GerberViewerCanvas className="h-full min-h-[260px]" />
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* FILE 2: BOM SPREADSHEET */}
          <div className="bg-white border border-[#E5E5E5] rounded-lg shadow-xs overflow-hidden">
            <div 
              onClick={() => setIsBOMExpanded(!isBOMExpanded)}
              className="p-4 bg-white hover:bg-[#F7F7F5] cursor-pointer transition-colors flex items-center justify-between border-b border-[#E5E5E5]"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <Cpu className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-xs text-[#171717]">PCB-102_BOM.xlsx</span>
                    <span className="text-[10px] text-[#6B6B6B] font-mono">1.2 MB</span>
                  </div>
                  <div className="text-xs text-[#6B6B6B] flex items-center gap-2 mt-0.5">
                    <span>Type: <strong>BOM</strong></span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Detected</span>
                </span>
                {isBOMExpanded ? <ChevronUp className="w-4 h-4 text-[#6B6B6B]" /> : <ChevronDown className="w-4 h-4 text-[#6B6B6B]" />}
              </div>
            </div>

            {/* BOM Summary & Sample Parts Table */}
            <div className="p-4 bg-[#FAFAFA] border-b border-[#E5E5E5] flex items-center justify-around text-center">
              <div>
                <span className="text-[11px] text-[#6B6B6B] block">Total Components</span>
                <span className="text-sm font-bold font-mono text-[#171717]">124</span>
              </div>
              <div className="h-6 w-px bg-[#E5E5E5]"></div>
              <div>
                <span className="text-[11px] text-[#6B6B6B] block">Unique Part Numbers</span>
                <span className="text-sm font-bold font-mono text-indigo-600">97</span>
              </div>
              <div className="h-6 w-px bg-[#E5E5E5]"></div>
              <div>
                <span className="text-[11px] text-[#6B6B6B] block">SMT / PTH Breakdown</span>
                <span className="text-xs font-semibold text-[#171717]">112 SMT / 12 PTH</span>
              </div>
            </div>

            {isBOMExpanded && (
              <div className="p-4 bg-white border-t border-[#E5E5E5]">
                <div className="text-[11px] font-semibold text-[#6B6B6B] uppercase tracking-wider mb-2">
                  Sample Component Extracts
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-[#E5E5E5] text-[#6B6B6B] text-[10px]">
                        <th className="py-1.5 px-2">Designator</th>
                        <th className="py-1.5 px-2">MPN</th>
                        <th className="py-1.5 px-2">Manufacturer</th>
                        <th className="py-1.5 px-2 text-right">Qty</th>
                        <th className="py-1.5 px-2">Package</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F7F7F5] font-mono">
                      <tr>
                        <td className="py-1.5 px-2 font-bold text-indigo-600">U1</td>
                        <td className="py-1.5 px-2">STM32F407VGT6</td>
                        <td className="py-1.5 px-2 font-sans text-[#6B6B6B]">STMicroelectronics</td>
                        <td className="py-1.5 px-2 text-right">1</td>
                        <td className="py-1.5 px-2">LQFP-100</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-2 font-bold text-indigo-600">U2</td>
                        <td className="py-1.5 px-2">TPS62130RGTR</td>
                        <td className="py-1.5 px-2 font-sans text-[#6B6B6B]">Texas Instruments</td>
                        <td className="py-1.5 px-2 text-right">1</td>
                        <td className="py-1.5 px-2">QFN-16</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-2 font-bold text-indigo-600">C1-C18</td>
                        <td className="py-1.5 px-2">CL10B104KB8NNNC</td>
                        <td className="py-1.5 px-2 font-sans text-[#6B6B6B]">Samsung</td>
                        <td className="py-1.5 px-2 text-right">18</td>
                        <td className="py-1.5 px-2">0603</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* FILE 3: FABRICATION DRAWING */}
          <div className="bg-white border border-[#E5E5E5] rounded-lg shadow-xs p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-[#F7F7F5] border border-[#E5E5E5] flex items-center justify-center text-red-600 shrink-0">
                <FileText className="w-4.5 h-4.5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-xs text-[#171717]">PCB-102_Drawing.pdf</span>
                  <span className="text-[10px] text-[#6B6B6B] font-mono">3.5 MB</span>
                </div>
                <div className="text-xs text-[#6B6B6B] flex items-center gap-2 mt-0.5">
                  <span>Type: <strong>Fabrication Drawing</strong></span>
                </div>
              </div>
            </div>

            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Detected</span>
            </span>
          </div>

        </div>

        {/* RIGHT COLUMN: VALIDATION SUMMARY & WARNING ALERT (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          
          <div className="bg-white border border-[#E5E5E5] rounded-lg p-5 shadow-xs space-y-4">
            <h2 className="text-xs font-semibold text-[#171717] uppercase tracking-wider border-b border-[#E5E5E5] pb-3">
              Validation Summary
            </h2>

            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2 text-emerald-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Gerber package detected</span>
              </div>

              <div className="flex items-center gap-2 text-emerald-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>BOM detected</span>
              </div>

              <div className="flex items-center gap-2 text-emerald-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Fabrication drawing detected</span>
              </div>

              <div className="flex items-start gap-2 text-amber-700 font-medium pt-2 border-t border-[#F7F7F5]">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>Stackup information not found</span>
              </div>
            </div>

            {/* Warning Box */}
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-md space-y-1.5">
              <div className="text-xs font-semibold text-amber-900 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                <span>Missing Specification Flag</span>
              </div>
              <p className="text-xs text-amber-800 leading-relaxed">
                Stackup dielectric information was not found in the provided files. You may request details from the customer or proceed with standard FR-4 TG170 stackup defaults.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-md shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Request Information from Customer</span>
              </button>

              <button
                onClick={onContinue}
                className="w-full py-2.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-semibold rounded-md shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>Continue with Default Stackup</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Modal for Requesting Info */}
      <RequestInfoModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        rfq={rfq}
        onSend={() => setRequestSent(true)}
      />
    </div>
  );
}

