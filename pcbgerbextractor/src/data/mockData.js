export const MOCK_RFQS = [
  {
    id: "rfq-102",
    rfqNumber: "RFQ-2026-00421",
    customer: "ABC Electronics",
    contactName: "Rahul Sharma",
    contactEmail: "purchase@abcelectronics.com",
    partNumber: "PCB-102",
    revision: "Rev 03",
    description: "Controller Board",
    quantity: 500,
    filesCount: 3,
    status: "Needs Review",
    statusVariant: "warning",
    received: "10:42 AM",
    dateFull: "2026-09-20 10:42 AM",
    deliveryDate: "15 Oct 2026",
    leadTime: "15 working days",
    hasStackupWarning: true,
    extractedData: {
      quantity: { value: "500 pcs", confidence: "high", confidenceScore: 0.98, status: "High confidence" },
      deliveryDate: { value: "15 Oct 2026", confidence: "high", confidenceScore: 0.95, status: "High confidence" },
      leadTime: { value: "15 working days", confidence: "medium", confidenceScore: 0.84, status: "Medium confidence" },
      partNumber: { value: "PCB-102", confidence: "high", confidenceScore: 0.99, status: "High confidence" },
      revision: { value: "Rev 03", confidence: "high", confidenceScore: 0.97, status: "High confidence" },
      surfaceFinish: { value: "Not found", confidence: "needs_confirmation", confidenceScore: 0.40, status: "Needs confirmation", suggestedValue: "ENIG (Electroless Nickel Immersion Gold)" },
      material: { value: "Not found", confidence: "needs_confirmation", confidenceScore: 0.35, status: "Needs confirmation", suggestedValue: "FR-4 TG170" },
      layerCount: { value: "4 Layers", confidence: "high", confidenceScore: 0.96, status: "High confidence (from Gerber)" },
      boardThickness: { value: "1.6 mm", confidence: "high", confidenceScore: 0.92, status: "High confidence (from Gerber)" },
      copperWeight: { value: "1 oz (35µm)", confidence: "medium", confidenceScore: 0.78, status: "Medium confidence" },
      solderMaskColor: { value: "Green", confidence: "high", confidenceScore: 0.94, status: "High confidence" },
      silkscreenColor: { value: "White", confidence: "high", confidenceScore: 0.94, status: "High confidence" },
      impedanceControl: { value: "Required (50Ω single / 100Ω diff)", confidence: "medium", confidenceScore: 0.81, status: "Medium confidence" }
    },
    files: [
      {
        name: "PCB-102_Rev03_Gerber.zip",
        type: "Gerber Package",
        size: "18.4 MB",
        status: "Valid package",
        statusVariant: "success",
        layers: [
          { name: "Top Copper (F.Cu)", file: "PCB-102_Top.gtl", type: "Copper", detected: true },
          { name: "Bottom Copper (B.Cu)", file: "PCB-102_Bottom.gbl", type: "Copper", detected: true },
          { name: "Top Solder Mask (F.Mask)", file: "PCB-102_TopMask.gts", type: "Solder Mask", detected: true },
          { name: "Bottom Solder Mask (B.Mask)", file: "PCB-102_BottomMask.gbs", type: "Solder Mask", detected: true },
          { name: "Top Silkscreen (F.Silk)", file: "PCB-102_TopSilk.gto", type: "Silkscreen", detected: true },
          { name: "Board Outline (Edge.Cuts)", file: "PCB-102_Outline.gko", type: "Outline", detected: true },
          { name: "Drill File (NCDrill)", file: "PCB-102_Drill.drl", type: "Drill", detected: true }
        ]
      },
      {
        name: "PCB-102_BOM.xlsx",
        type: "BOM",
        size: "1.2 MB",
        status: "Detected",
        statusVariant: "success",
        summary: {
          totalComponents: 124,
          uniquePartNumbers: 97,
          smtCount: 112,
          pthCount: 12
        },
        sampleParts: [
          { designator: "U1", mpn: "STM32F407VGT6", manufacturer: "STMicroelectronics", qty: 1, package: "LQFP-100" },
          { designator: "U2", mpn: "TPS62130RGTR", manufacturer: "Texas Instruments", qty: 1, package: "QFN-16" },
          { designator: "C1-C18", mpn: "CL10B104KB8NNNC", manufacturer: "Samsung", qty: 18, package: "0603" },
          { designator: "R1-R24", mpn: "RC0603FR-0710KL", manufacturer: "Yageo", qty: 24, package: "0603" },
          { designator: "J1", mpn: "USB-C-24P-FEMALE", manufacturer: "Amphenol", qty: 1, package: "SMD-24" }
        ]
      },
      {
        name: "PCB-102_Drawing.pdf",
        type: "Fabrication Drawing",
        size: "3.5 MB",
        status: "Detected",
        statusVariant: "success",
        summary: {
          dimensions: "120.0 x 85.0 mm",
          units: "Metric (mm)",
          notesCount: 8
        }
      }
    ],
    emailDetails: {
      from: "Rahul Sharma <purchase@abcelectronics.com>",
      to: "Sales Team <quotes@pcb-express.com>",
      date: "Sunday, 20 Sept 2026 at 10:42 AM",
      subject: "RFQ – PCB-102 Rev 03 – 500 Qty",
      body: `Hi Team,

Please provide a quotation for manufacturing 500 pcs of PCB-102 Rev 03.
Required delivery: 15 October 2026.

Please find the Gerber files, BOM and fabrication drawing attached.
Note that we have impedance control requirement on the high-speed USB lines.

Regards,
Rahul Sharma
Senior Procurement Specialist
ABC Electronics Inc.
purchase@abcelectronics.com | +1 (555) 234-8901`
    },
    activityLog: [
      { time: "10:42 AM", title: "Email Captured", description: "RFQ email captured automatically via Chrome Extension from Gmail inbox", author: "RFQ Bridge Engine" },
      { time: "10:43 AM", title: "Attachments Detected", description: "Found 3 files: Gerber.zip, BOM.xlsx, Drawing.pdf", author: "AI File Classifier" },
      { time: "10:43 AM", title: "AI Extraction Completed", description: "Extracted 11 parameter fields with 92% average confidence score", author: "Gemini Extraction Engine" },
      { time: "10:44 AM", title: "Files Validated", description: "Gerber layer structure verified (7 layers). Stackup details flagged for review", author: "CAM Pre-flight Engine" },
      { time: "10:45 AM", title: "RFQ Record Created", description: "RFQ-2026-00421 created and assigned to Procurement Queue", author: "Rahul Sharma (Human Verified)" }
    ]
  },
  {
    id: "rfq-204",
    rfqNumber: "RFQ-2026-00420",
    customer: "TechCore Systems",
    contactName: "Sarah Jenkins",
    contactEmail: "s.jenkins@techcoresys.io",
    partNumber: "PCB-204",
    revision: "Rev B",
    description: "Power Distribution Board",
    quantity: 1000,
    filesCount: 4,
    status: "Ready",
    statusVariant: "success",
    received: "9:18 AM",
    dateFull: "2026-09-20 09:18 AM",
    deliveryDate: "28 Oct 2026",
    leadTime: "10 working days",
    hasStackupWarning: false
  },
  {
    id: "rfq-087",
    rfqNumber: "RFQ-2026-00419",
    customer: "Nova Devices",
    contactName: "David Chen",
    contactEmail: "dchen@novadevices.com",
    partNumber: "PCB-087",
    revision: "Rev 01",
    description: "Main Processing Unit",
    quantity: 250,
    filesCount: 2,
    status: "Processing",
    statusVariant: "info",
    received: "Yesterday",
    dateFull: "2026-09-19 04:15 PM",
    deliveryDate: "05 Nov 2026",
    leadTime: "20 working days",
    hasStackupWarning: false
  },
  {
    id: "rfq-301",
    rfqNumber: "RFQ-2026-00418",
    customer: "Apex Robotics",
    contactName: "Elena Rostova",
    contactEmail: "elena@apexrobotics.de",
    partNumber: "PCB-301",
    revision: "Rev 04",
    description: "Motor Driver Array",
    quantity: 1200,
    filesCount: 3,
    status: "Sent",
    statusVariant: "brand",
    received: "19 Sep 2026",
    dateFull: "2026-09-19 11:30 AM",
    deliveryDate: "12 Oct 2026",
    leadTime: "12 working days",
    hasStackupWarning: false
  },
  {
    id: "rfq-512",
    rfqNumber: "RFQ-2026-00415",
    customer: "Signal Dynamics",
    contactName: "Markus Vance",
    contactEmail: "m.vance@signaldynamics.com",
    partNumber: "PCB-512",
    revision: "Rev A2",
    description: "RF Transceiver Module",
    quantity: 2500,
    filesCount: 5,
    status: "Completed",
    statusVariant: "neutral",
    received: "18 Sep 2026",
    dateFull: "2026-09-18 02:20 PM",
    deliveryDate: "01 Nov 2026",
    leadTime: "14 working days",
    hasStackupWarning: false
  }
];

export const MOCK_CUSTOMERS = [
  { id: "c1", name: "ABC Electronics", contact: "Rahul Sharma", email: "purchase@abcelectronics.com", activeRFQs: 2, totalOrders: 14, location: "San Jose, CA" },
  { id: "c2", name: "TechCore Systems", contact: "Sarah Jenkins", email: "s.jenkins@techcoresys.io", activeRFQs: 1, totalOrders: 28, location: "Austin, TX" },
  { id: "c3", name: "Nova Devices", contact: "David Chen", email: "dchen@novadevices.com", activeRFQs: 3, totalOrders: 9, location: "Boston, MA" },
  { id: "c4", name: "Apex Robotics", contact: "Elena Rostova", email: "elena@apexrobotics.de", activeRFQs: 1, totalOrders: 19, location: "Munich, Germany" }
];

export const MOCK_FILES = [
  { name: "PCB-102_Rev03_Gerber.zip", rfq: "RFQ-2026-00421", customer: "ABC Electronics", type: "Gerber Package", size: "18.4 MB", date: "2026-09-20" },
  { name: "PCB-102_BOM.xlsx", rfq: "RFQ-2026-00421", customer: "ABC Electronics", type: "BOM Spreadsheet", size: "1.2 MB", date: "2026-09-20" },
  { name: "PCB-102_Drawing.pdf", rfq: "RFQ-2026-00421", customer: "ABC Electronics", type: "Fabrication Drawing", size: "3.5 MB", date: "2026-09-20" },
  { name: "PCB-204_Gerbers.zip", rfq: "RFQ-2026-00420", customer: "TechCore Systems", type: "Gerber Package", size: "22.1 MB", date: "2026-09-20" }
];

export const MOCK_INTEGRATIONS = [
  { id: "genesis", name: "Frontline Genesis CAM", category: "CAM System", status: "Connected", icon: "Cpu", description: "Direct export of Gerber packages and stackup parameters into Genesis CAM jobs." },
  { id: "ucamco", name: "Ucamco UcamX", category: "CAM System", status: "Connected", icon: "Layers", description: "Automated DRC check and netlist verification output format." },
  { id: "sap", name: "SAP S/4HANA ERP", category: "Enterprise ERP", status: "Connected", icon: "Database", description: "Sync customer master data, line items, and generate manufacturing sales quotes." },
  { id: "salesforce", name: "Salesforce CRM", category: "CRM", status: "Configured", icon: "Workflow", description: "Link incoming email RFQs with CRM opportunities and accounts." },
  { id: "hubspot", name: "HubSpot", category: "CRM", status: "Available", icon: "Mail", description: "Automatic contact log and RFQ lifecycle event webhooks." },
  { id: "webhook", name: "Custom Manufacturing Webhook", category: "API & Webhooks", status: "Active", icon: "Globe", description: "HTTP POST JSON payloads on RFQ creation for internal MES software." }
];

