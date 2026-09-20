import React, { useRef, useEffect, useState } from 'react';
import { Layers, ZoomIn, ZoomOut, RotateCcw, Eye, Check, AlertCircle } from 'lucide-react';

export default function GerberViewerCanvas({ className = "" }) {
  const canvasRef = useRef(null);
  const [zoom, setZoom] = useState(1);
  const [layers, setLayers] = useState({
    outline: true,
    copper: true,
    solderMask: true,
    silkscreen: true,
    drill: true
  });
  const [activePreset, setActivePreset] = useState("all");

  const toggleLayer = (layerKey) => {
    setLayers(prev => ({ ...prev, [layerKey]: !prev[layerKey] }));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Set high DPR resolution
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;

    // Background
    ctx.fillStyle = '#0F172A'; // Dark PCB inspection canvas background
    ctx.fillRect(0, 0, width, height);

    // Subtle grid lines
    ctx.strokeStyle = '#1E293B';
    ctx.lineWidth = 1;
    const gridSize = 20 * zoom;
    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Centering & Zoom transformation
    ctx.save();
    ctx.translate(width / 2, height / 2);
    ctx.scale(zoom, zoom);
    ctx.translate(-180, -120);

    const pcbW = 360;
    const pcbH = 240;

    // 1. SOLDER MASK / BOARD BASE
    if (layers.solderMask) {
      ctx.fillStyle = '#064E3B'; // Deep PCB Green solder mask
      ctx.beginPath();
      ctx.roundRect(0, 0, pcbW, pcbH, 12);
      ctx.fill();

      // Solder mask texture effect
      ctx.strokeStyle = '#047857';
      ctx.lineWidth = 1;
      ctx.stroke();
    } else {
      // Base substrate (FR-4 yellowish-brown)
      ctx.fillStyle = '#854D0E';
      ctx.beginPath();
      ctx.roundRect(0, 0, pcbW, pcbH, 12);
      ctx.fill();
    }

    // 2. BOARD OUTLINE
    if (layers.outline) {
      ctx.strokeStyle = '#F59E0B'; // Gold outline
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(0, 0, pcbW, pcbH, 12);
      ctx.stroke();

      // Corner mounting holes
      const holeRadius = 8;
      const margin = 16;
      const holes = [
        [margin, margin],
        [pcbW - margin, margin],
        [margin, pcbH - margin],
        [pcbW - margin, pcbH - margin]
      ];
      ctx.fillStyle = '#1E293B';
      holes.forEach(([hx, hy]) => {
        ctx.beginPath();
        ctx.arc(hx, hy, holeRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#D97706';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });
    }

    // 3. TOP COPPER TRACES & PADS
    if (layers.copper) {
      ctx.strokeStyle = '#F59E0B'; // Copper / Gold finish
      ctx.fillStyle = '#F59E0B';
      ctx.lineWidth = 2;

      // Bus traces
      ctx.beginPath();
      ctx.moveTo(40, 60);
      ctx.lineTo(120, 60);
      ctx.lineTo(160, 100);
      ctx.lineTo(160, 140);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(40, 70);
      ctx.lineTo(115, 70);
      ctx.lineTo(150, 105);
      ctx.lineTo(150, 140);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(40, 80);
      ctx.lineTo(110, 80);
      ctx.lineTo(140, 110);
      ctx.lineTo(140, 140);
      ctx.stroke();

      // Main Microcontroller U1 (LQFP-100 footprint)
      const u1x = 180;
      const u1y = 120;
      const u1size = 60;
      ctx.strokeRect(u1x - u1size/2, u1y - u1size/2, u1size, u1size);

      // LQFP Pins around perimeter
      const pinCountPerSide = 12;
      const pinPitch = u1size / (pinCountPerSide + 1);
      
      // Top & Bottom pins
      for (let i = 1; i <= pinCountPerSide; i++) {
        const px = (u1x - u1size/2) + i * pinPitch;
        ctx.fillRect(px - 1, u1y - u1size/2 - 10, 2, 8); // top
        ctx.fillRect(px - 1, u1y + u1size/2 + 2, 2, 8);  // bottom
      }
      // Left & Right pins
      for (let i = 1; i <= pinCountPerSide; i++) {
        const py = (u1y - u1size/2) + i * pinPitch;
        ctx.fillRect(u1x - u1size/2 - 10, py - 1, 8, 2); // left
        ctx.fillRect(u1x + u1size/2 + 2, py - 1, 8, 2);  // right
      }

      // QFN Power IC U2
      const u2x = 280;
      const u2y = 80;
      ctx.fillRect(u2x - 15, u2y - 15, 30, 30);
      
      // USB-C Connector J1 pads
      const j1x = 20;
      const j1y = 110;
      for (let i = 0; i < 12; i++) {
        ctx.fillRect(j1x + (i * 2.5), j1y + (i % 2 === 0 ? 0 : 4), 1.8, 10);
      }

      // 0603 Capacitor & Resistor Pad Arrays
      const passives = [
        [100, 160], [120, 160], [140, 160], [160, 160],
        [100, 180], [120, 180], [140, 180], [160, 180],
        [240, 140], [260, 140], [280, 140], [300, 140]
      ];

      passives.forEach(([cx, cy]) => {
        ctx.fillRect(cx - 5, cy - 3, 4, 6);
        ctx.fillRect(cx + 1, cy - 3, 4, 6);

        // Connective trace to rail
        ctx.beginPath();
        ctx.moveTo(cx + 5, cy);
        ctx.lineTo(cx + 12, cy);
        ctx.stroke();
      });
    }

    // 4. DRILL HOLES & VIAS
    if (layers.drill) {
      ctx.fillStyle = '#0F172A';
      // Via matrix
      const vias = [
        [120, 50], [140, 50], [160, 50],
        [100, 120], [100, 130], [100, 140],
        [220, 100], [240, 100], [260, 100],
        [280, 170], [290, 170], [300, 170]
      ];
      vias.forEach(([vx, vy]) => {
        ctx.beginPath();
        ctx.arc(vx, vy, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#CBD5E1';
        ctx.lineWidth = 1;
        ctx.stroke();
      });
    }

    // 5. TOP SILKSCREEN (White Text & Legends)
    if (layers.silkscreen) {
      ctx.fillStyle = '#FFFFFF';
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 1;
      ctx.font = '9px "JetBrains Mono", monospace';

      // Component Labels
      ctx.fillText('U1 (STM32)', 155, 115);
      ctx.fillText('U2 (TPS62130)', 250, 60);
      ctx.fillText('J1 (USB-C)', 15, 95);
      ctx.fillText('REV 03', 290, 220);
      ctx.fillText('PCB-102 CONTROLLER', 40, 35);
      ctx.fillText('C1-C18', 100, 150);
      ctx.fillText('R1-R24', 240, 130);

      // Component Outlines
      ctx.strokeRect(180 - 32, 120 - 32, 64, 64); // U1 outline
      ctx.strokeRect(280 - 18, 80 - 18, 36, 36);   // U2 outline
      
      // Pin 1 Indicator dots
      ctx.beginPath();
      ctx.arc(150, 90, 2, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(264, 64, 2, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();

  }, [zoom, layers]);

  return (
    <div className={`bg-[#0F172A] rounded-lg border border-slate-800 overflow-hidden flex flex-col ${className}`}>
      {/* Top Toolbar */}
      <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-indigo-400" />
          <span className="font-semibold text-slate-200">Gerber 2D Layer Viewer</span>
          <span className="text-slate-500 font-mono">PCB-102_Rev03.gtl</span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-slate-800 rounded border border-slate-700 p-0.5">
            <button 
              onClick={() => setZoom(prev => Math.min(prev + 0.25, 2.5))}
              className="p-1 hover:bg-slate-700 text-slate-300 rounded transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <span className="px-2 text-[11px] font-mono text-slate-400">{Math.round(zoom * 100)}%</span>
            <button 
              onClick={() => setZoom(prev => Math.max(prev - 0.25, 0.5))}
              className="p-1 hover:bg-slate-700 text-slate-300 rounded transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button 
              onClick={() => setZoom(1)}
              className="p-1 hover:bg-slate-700 text-slate-300 rounded transition-colors border-l border-slate-700 ml-0.5"
              title="Reset View"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="relative flex-1 min-h-[300px] bg-[#0F172A] flex items-center justify-center p-2">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full min-h-[300px] cursor-crosshair rounded"
        />

        {/* Floating Info Overlay */}
        <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur border border-slate-800 rounded-md p-2 text-[11px] text-slate-300 font-mono space-y-1">
          <div className="flex items-center justify-between gap-4">
            <span className="text-slate-500">Board Size:</span>
            <span className="text-emerald-400 font-medium">120.0 x 85.0 mm</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-slate-500">Trace/Space:</span>
            <span className="text-slate-200">5 / 5 mil</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-slate-500">Min Hole:</span>
            <span className="text-slate-200">0.20 mm</span>
          </div>
        </div>
      </div>

      {/* Layer Toggles Footer */}
      <div className="px-4 py-2.5 bg-slate-900 border-t border-slate-800 flex items-center justify-between flex-wrap gap-2 text-xs">
        <span className="text-slate-400 font-medium text-[11px] uppercase tracking-wider">Active Layers:</span>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-1.5 cursor-pointer text-slate-300 hover:text-white">
            <input 
              type="checkbox" 
              checked={layers.copper} 
              onChange={() => toggleLayer('copper')} 
              className="rounded bg-slate-800 border-slate-700 text-amber-500 focus:ring-0 w-3.5 h-3.5" 
            />
            <span className="inline-block w-2 h-2 rounded-full bg-amber-500"></span>
            <span>Top Copper</span>
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer text-slate-300 hover:text-white">
            <input 
              type="checkbox" 
              checked={layers.solderMask} 
              onChange={() => toggleLayer('solderMask')} 
              className="rounded bg-slate-800 border-slate-700 text-emerald-600 focus:ring-0 w-3.5 h-3.5" 
            />
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>Solder Mask</span>
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer text-slate-300 hover:text-white">
            <input 
              type="checkbox" 
              checked={layers.silkscreen} 
              onChange={() => toggleLayer('silkscreen')} 
              className="rounded bg-slate-800 border-slate-700 text-white focus:ring-0 w-3.5 h-3.5" 
            />
            <span className="inline-block w-2 h-2 rounded-full bg-white"></span>
            <span>Silkscreen</span>
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer text-slate-300 hover:text-white">
            <input 
              type="checkbox" 
              checked={layers.drill} 
              onChange={() => toggleLayer('drill')} 
              className="rounded bg-slate-800 border-slate-700 text-slate-400 focus:ring-0 w-3.5 h-3.5" 
            />
            <span className="inline-block w-2 h-2 rounded-full bg-slate-400"></span>
            <span>Drill Holes</span>
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer text-slate-300 hover:text-white">
            <input 
              type="checkbox" 
              checked={layers.outline} 
              onChange={() => toggleLayer('outline')} 
              className="rounded bg-slate-800 border-slate-700 text-amber-400 focus:ring-0 w-3.5 h-3.5" 
            />
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400"></span>
            <span>Outline</span>
          </label>
        </div>
      </div>
    </div>
  );
}

