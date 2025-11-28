import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Overview from './components/Overview';
import MapDetail from './components/MapDetail';
import TelemetryDetail from './components/TelemetryDetail';
import VulnerabilityDetail from './components/VulnerabilityDetail';
import ChatInterface from './components/ChatInterface';
import RemediationSearch from './components/RemediationSearch';
import { ViewState, ThreatMap, ThreatCategory, VulnerabilityCategory } from './types';
import { Terminal, Clock, Signal, Wifi } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.OVERVIEW);
  const [selectedMap, setSelectedMap] = useState<ThreatMap | null>(null);
  const [selectedTelemetry, setSelectedTelemetry] = useState<ThreatCategory | null>(null);
  const [selectedVulnerability, setSelectedVulnerability] = useState<VulnerabilityCategory | null>(null);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.altKey && e.key === '1') handleSelectView(ViewState.OVERVIEW);
        if (e.altKey && e.key === '2') handleSelectView(ViewState.AI_CHAT);
        if (e.altKey && e.key === '3') handleSelectView(ViewState.REMEDIATION_SEARCH);
        if (e.key === 'Escape') handleSelectView(ViewState.OVERVIEW);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectMap = (map: ThreatMap) => {
    setSelectedMap(map);
    setCurrentView(ViewState.MAP_DETAIL);
  };

  const handleSelectTelemetry = (category: ThreatCategory) => {
    setSelectedTelemetry(category);
    setCurrentView(ViewState.TELEMETRY_DETAIL);
  };

  const handleSelectVulnerability = (category: VulnerabilityCategory) => {
    setSelectedVulnerability(category);
    setCurrentView(ViewState.VULNERABILITY_DETAIL);
  }

  const handleSelectView = (view: ViewState) => {
    setCurrentView(view);
    if (view !== ViewState.MAP_DETAIL) {
      setSelectedMap(null);
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case ViewState.OVERVIEW:
        return <Overview onSelectCategory={handleSelectTelemetry} onSelectVulnerability={handleSelectVulnerability} onNavigate={handleSelectView} />;
      case ViewState.AI_CHAT:
        return <ChatInterface />;
      case ViewState.REMEDIATION_SEARCH:
        return <RemediationSearch />;
      case ViewState.MAP_DETAIL:
        return selectedMap ? <MapDetail map={selectedMap} /> : <Overview onSelectCategory={handleSelectTelemetry} onSelectVulnerability={handleSelectVulnerability} onNavigate={handleSelectView} />;
      case ViewState.TELEMETRY_DETAIL:
        return selectedTelemetry ? (
          <TelemetryDetail 
            category={selectedTelemetry} 
            onBack={() => setCurrentView(ViewState.OVERVIEW)} 
          />
        ) : <Overview onSelectCategory={handleSelectTelemetry} onSelectVulnerability={handleSelectVulnerability} onNavigate={handleSelectView} />;
      case ViewState.VULNERABILITY_DETAIL:
        return selectedVulnerability ? (
            <VulnerabilityDetail 
                category={selectedVulnerability}
                onBack={() => setCurrentView(ViewState.OVERVIEW)}
            />
        ) : <Overview onSelectCategory={handleSelectTelemetry} onSelectVulnerability={handleSelectVulnerability} onNavigate={handleSelectView} />;
      default:
        return <Overview onSelectCategory={handleSelectTelemetry} onSelectVulnerability={handleSelectVulnerability} onNavigate={handleSelectView} />;
    }
  };

  return (
    <div className="flex h-screen w-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-hidden">
      <Sidebar 
        currentView={currentView}
        selectedMapId={selectedMap?.id || null}
        onSelectView={handleSelectView}
        onSelectMap={handleSelectMap}
      />
      
      <main className="flex-1 flex flex-col overflow-hidden relative pb-8">
        {renderContent()}

        {/* Global System Status Bar (Fixed Bottom) */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-slate-900/90 backdrop-blur border-t border-slate-800 flex items-center justify-between px-4 text-[10px] md:text-xs font-mono text-slate-500 z-50 select-none">
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                    <Terminal className="w-3 h-3" />
                    <span className="hidden md:inline">SYSTEM_READY</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Wifi className="w-3 h-3 text-emerald-500" />
                    <span>CONNECTED</span>
                </div>
                <div className="hidden md:flex items-center space-x-1">
                    <span>LATENCY:</span>
                    <span className="text-emerald-400">24ms</span>
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-cyan-500/80">
                    <Signal className="w-3 h-3 animate-pulse" />
                    <span>MONITORING_ACTIVE</span>
                </div>
                <div className="w-px h-3 bg-slate-700"></div>
                <div className="flex items-center space-x-2 text-slate-300">
                    <Clock className="w-3 h-3" />
                    <span>{time.toLocaleTimeString([], { hour12: false })} UTC</span>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default App;