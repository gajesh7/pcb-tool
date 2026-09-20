import React, { useState } from 'react';
import { Sliders, Shield, Bell, Sparkles, Key, Save } from 'lucide-react';

export default function SettingsScreen() {
  const [confidenceThreshold, setConfidenceThreshold] = useState(85);
  const [autoApproveHighConfidence, setAutoApproveHighConfidence] = useState(false);
  const [notifyOnMissingStackup, setNotifyOnMissingStackup] = useState(true);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="border-b border-[#E5E5E5] pb-5">
        <h1 className="text-xl font-bold text-[#171717] tracking-tight">System & AI Settings</h1>
        <p className="text-xs text-[#6B6B6B] mt-1">Configure extraction confidence scoring, human-in-the-loop triggers, and webmail rules.</p>
      </div>

      <div className="space-y-6">
        {/* AI Confidence Thresholds */}
        <div className="bg-white border border-[#E5E5E5] rounded-lg p-5 shadow-xs space-y-4">
          <div className="flex items-center gap-2 border-b border-[#E5E5E5] pb-3">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <h2 className="text-xs font-semibold text-[#171717] uppercase tracking-wider">AI Extraction Confidence Rules</h2>
          </div>

          <div className="space-y-4 text-xs">
            <div>
              <div className="flex justify-between font-medium mb-1">
                <span className="text-[#171717]">Minimum High-Confidence Score</span>
                <span className="font-mono text-indigo-600 font-bold">{confidenceThreshold}%</span>
              </div>
              <input 
                type="range" 
                min="60" 
                max="98" 
                value={confidenceThreshold}
                onChange={(e) => setConfidenceThreshold(e.target.value)}
                className="w-full accent-indigo-600"
              />
              <p className="text-[11px] text-[#6B6B6B] mt-1">
                Fields extracted with confidence below {confidenceThreshold}% will automatically trigger the "Needs Confirmation" badge.
              </p>
            </div>

            <div className="pt-3 border-t border-[#F7F7F5] space-y-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={notifyOnMissingStackup}
                  onChange={(e) => setNotifyOnMissingStackup(e.target.checked)}
                  className="rounded text-indigo-600 focus:ring-0"
                />
                <span className="font-semibold text-[#171717]">Flag Missing Stackup Information Automatically</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={autoApproveHighConfidence}
                  onChange={(e) => setAutoApproveHighConfidence(e.target.checked)}
                  className="rounded text-indigo-600 focus:ring-0"
                />
                <span className="font-semibold text-[#171717]">Auto-Approve 100% Matches directly into Genesis CAM</span>
              </label>
            </div>
          </div>
        </div>

        {/* Save Settings Bar */}
        <div className="flex justify-end">
          <button className="px-5 py-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-semibold rounded-md shadow-xs flex items-center gap-1.5">
            <Save className="w-3.5 h-3.5" />
            <span>Save Preferences</span>
          </button>
        </div>
      </div>
    </div>
  );
}

