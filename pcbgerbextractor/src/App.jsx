import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopHeader from './components/TopHeader';
import Screen1Inbox from './screens/Screen1Inbox';
import Screen2EmailCapture from './screens/Screen2EmailCapture';
import Screen3AIExtraction from './screens/Screen3AIExtraction';
import Screen4FileValidation from './screens/Screen4FileValidation';
import Screen5CreateRFQ from './screens/Screen5CreateRFQ';
import Screen6RFQCreated from './screens/Screen6RFQCreated';
import Screen7RFQDetail from './screens/Screen7RFQDetail';
import CustomersScreen from './screens/CustomersScreen';
import FilesScreen from './screens/FilesScreen';
import IntegrationsScreen from './screens/IntegrationsScreen';
import SettingsScreen from './screens/SettingsScreen';
import { MOCK_RFQS } from './data/mockData';

export default function App() {
  const [currentNav, setCurrentNav] = useState('inbox');
  const [activeStep, setActiveStep] = useState(1);
  const [selectedRFQ, setSelectedRFQ] = useState(MOCK_RFQS[0]);

  // Handle navigation changes
  const handleSelectNav = (navId) => {
    setCurrentNav(navId);
    if (navId === 'inbox') {
      setActiveStep(1);
    } else if (navId === 'rfqs') {
      setActiveStep(7);
    }
  };

  // Step Switcher Jumps
  const handleJumpStep = (stepNumber) => {
    setActiveStep(stepNumber);
    if (stepNumber === 1) setCurrentNav('inbox');
    else if (stepNumber === 7) setCurrentNav('rfqs');
    else setCurrentNav('inbox');
  };

  // Workflow Action Handlers
  const handleSelectRFQFromInbox = (rfq) => {
    setSelectedRFQ(rfq);
    setActiveStep(2); // Jump to Webmail Capture & Extension
  };

  const handleOpenCaptureSim = () => {
    setSelectedRFQ(MOCK_RFQS[0]);
    setActiveStep(2);
  };

  const handleReviewDetails = () => {
    setActiveStep(3); // AI Extraction Review
  };

  const handleCreateRFQDirect = () => {
    setActiveStep(5); // Create RFQ confirmation directly
  };

  const handleSaveAIReview = (updatedData) => {
    // Optionally update local RFQ state with edited confidence values
    setActiveStep(4); // Move to File Classification & Validation
  };

  const handleContinueFileValidation = () => {
    setActiveStep(5); // Move to Create RFQ
  };

  const handleCreateRFQConfirm = () => {
    setActiveStep(6); // Move to RFQ Created Success Screen
  };

  const handleOpenRFQDetail = () => {
    setActiveStep(7); // Move to RFQ Detail Page
    setCurrentNav('rfqs');
  };

  return (
    <div className="flex min-h-screen bg-[#F7F7F5] font-sans antialiased text-[#171717]">
      {/* Left Sidebar */}
      <Sidebar 
        currentNav={currentNav}
        onSelectNav={handleSelectNav}
        onTriggerCaptureFlow={handleOpenCaptureSim}
      />

      {/* Main App Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Header Bar with Interactive Step Controller */}
        <TopHeader 
          activeStep={activeStep}
          onJumpStep={handleJumpStep}
        />

        {/* Main Content Body */}
        <main className="flex-1 p-6 overflow-y-auto">
          
          {/* Main Navigation Views (when user clicks sidebar tabs) */}
          {currentNav === 'customers' && <CustomersScreen />}
          {currentNav === 'files' && <FilesScreen />}
          {currentNav === 'integrations' && <IntegrationsScreen />}
          {currentNav === 'settings' && <SettingsScreen />}

          {/* Core Interactive 7-Screen Stepper Flow */}
          {(currentNav === 'inbox' || currentNav === 'rfqs') && (
            <>
              {activeStep === 1 && (
                <Screen1Inbox 
                  onSelectRFQ={handleSelectRFQFromInbox}
                  onOpenCaptureSim={handleOpenCaptureSim}
                />
              )}

              {activeStep === 2 && (
                <Screen2EmailCapture 
                  rfq={selectedRFQ}
                  onReviewDetails={handleReviewDetails}
                  onCreateRFQDirect={handleCreateRFQDirect}
                />
              )}

              {activeStep === 3 && (
                <Screen3AIExtraction 
                  rfq={selectedRFQ}
                  onSaveAndContinue={handleSaveAIReview}
                />
              )}

              {activeStep === 4 && (
                <Screen4FileValidation 
                  rfq={selectedRFQ}
                  onContinue={handleContinueFileValidation}
                />
              )}

              {activeStep === 5 && (
                <Screen5CreateRFQ 
                  rfq={selectedRFQ}
                  onCreateRFQ={handleCreateRFQConfirm}
                  onBackToReview={() => setActiveStep(3)}
                />
              )}

              {activeStep === 6 && (
                <Screen6RFQCreated 
                  rfq={selectedRFQ}
                  onOpenRFQDetail={handleOpenRFQDetail}
                  onViewSourceEmail={() => setActiveStep(2)}
                />
              )}

              {activeStep === 7 && (
                <Screen7RFQDetail 
                  rfq={selectedRFQ}
                  onBackToInbox={() => {
                    setCurrentNav('inbox');
                    setActiveStep(1);
                  }}
                />
              )}
            </>
          )}

        </main>
      </div>
    </div>
  );
}

