import React, { useState } from 'react';
import { X, Send, AlertTriangle, FileText, Check } from 'lucide-react';

export default function RequestInfoModal({ isOpen, onClose, rfq, onSend }) {
  const [subject, setSubject] = useState(`Clarification Required: Stackup Details for ${rfq?.partNumber || 'PCB-102'} (${rfq?.rfqNumber || 'RFQ-2026-00421'})`);
  const [message, setMessage] = useState(
    `Hi ${rfq?.contactName || 'Rahul'},\n\n` +
    `Thank you for submitting your RFQ for ${rfq?.partNumber || 'PCB-102'} (${rfq?.description || 'Controller Board'}).\n\n` +
    `During automated file validation, our pre-flight engine detected that dielectric layer stackup and impedance specifications were missing from your Gerber package.\n\n` +
    `To ensure accurate pricing and impedance matching for your USB high-speed lines, could you please provide:\n` +
    ` 1. Desired dielectric material (e.g. FR-4 TG170 or Rogers 4350B)\n` +
    ` 2. Layer thickness stackup table or finished board thickness\n\n` +
    `Once received, we will finalize your quotation immediately.\n\n` +
    `Best regards,\n` +
    `PCB Quotation Team`
  );
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      onSend?.();
      onClose();
      setIsSent(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
      <div className="bg-white rounded-xl shadow-2xl border border-[#E5E5E5] w-full max-w-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E5E5E5] flex items-center justify-between bg-[#FAFAFA]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#171717]">Request Additional Information</h3>
              <p className="text-xs text-[#6B6B6B]">Send inquiry directly to {rfq?.contactEmail || 'purchase@abcelectronics.com'}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-[#E5E5E5] text-[#6B6B6B] rounded-md transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        {isSent ? (
          <div className="p-8 text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="text-base font-semibold text-[#171717]">Inquiry Sent Successfully</h4>
            <p className="text-xs text-[#6B6B6B] max-w-md mx-auto">
              An email request has been sent to {rfq?.contactEmail}. The RFQ status has been updated to "Needs Information".
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#6B6B6B] mb-1">To</label>
              <input 
                type="text" 
                readOnly 
                value={`${rfq?.contactName || 'Rahul Sharma'} <${rfq?.contactEmail || 'purchase@abcelectronics.com'}>`}
                className="w-full text-xs bg-[#F7F7F5] border border-[#E5E5E5] rounded-md px-3 py-2 text-[#171717] font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#6B6B6B] mb-1">Subject</label>
              <input 
                type="text" 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full text-xs bg-white border border-[#E5E5E5] rounded-md px-3 py-2 text-[#171717] focus:outline-none focus:ring-1 focus:ring-indigo-500 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#6B6B6B] mb-1">Email Body</label>
              <textarea 
                rows={8}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full text-xs bg-white border border-[#E5E5E5] rounded-md p-3 text-[#171717] focus:outline-none focus:ring-1 focus:ring-indigo-500 font-mono leading-relaxed"
              />
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center justify-end gap-3 border-t border-[#E5E5E5]">
              <button
                type="button"
                onClick={onClose}
                className="px-3.5 py-2 text-xs font-medium text-[#6B6B6B] hover:text-[#171717] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-medium rounded-md shadow-xs transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Request</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

