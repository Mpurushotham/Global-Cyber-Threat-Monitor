import React from 'react';
import { ShieldAlert, Globe, Activity, Terminal, Shield, LayoutDashboard, Search } from 'lucide-react';
import { THREAT_MAPS } from '../constants';
import { ThreatMap, ViewState } from '../types';
import { motion } from 'framer-motion';

interface SidebarProps {
  currentView: ViewState;
  selectedMapId: string | null;
  onSelectView: (view: ViewState) => void;
  onSelectMap: (map: ThreatMap) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, selectedMapId, onSelectView, onSelectMap }) => {
  return (
    <div className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col h-full overflow-hidden shrink-0 z-20 shadow-xl shadow-black/50">
      <div className="p-6 border-b border-slate-800 flex items-center space-x-3 bg-slate-950/50">
        <ShieldAlert className="w-8 h-8 text-cyan-500" />
        <h1 className="text-xl font-bold text-slate-100 tracking-tighter">THREAT<span className="text-cyan-500">MAP</span></h1>
      </div>

      <div className="flex-1 overflow-y-auto py-4 custom-scrollbar">
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="px-4 mb-2"
        >
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Main</p>
          <button
            onClick={() => onSelectView(ViewState.OVERVIEW)}
            className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 transition-all duration-200 group ${
              currentView === ViewState.OVERVIEW 
                ? 'bg-cyan-900/30 text-cyan-400 border border-cyan-900/50 shadow-[0_0_15px_rgba(6,182,212,0.1)]' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200 hover:translate-x-1'
            }`}
          >
            <LayoutDashboard className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
            <span className="font-medium">Global Dashboard</span>
          </button>
          
          <button
            onClick={() => onSelectView(ViewState.AI_CHAT)}
            className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 transition-all duration-200 mt-2 group ${
              currentView === ViewState.AI_CHAT 
                ? 'bg-purple-900/30 text-purple-400 border border-purple-900/50 shadow-[0_0_15px_rgba(168,85,247,0.1)]' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200 hover:translate-x-1'
            }`}
          >
            <Terminal className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
            <span className="font-medium">AI Threat Analyst</span>
          </button>

           <button
            onClick={() => onSelectView(ViewState.REMEDIATION_SEARCH)}
            className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 transition-all duration-200 mt-2 group ${
              currentView === ViewState.REMEDIATION_SEARCH 
                ? 'bg-emerald-900/30 text-emerald-400 border border-emerald-900/50 shadow-[0_0_15px_rgba(52,211,153,0.1)]' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200 hover:translate-x-1'
            }`}
          >
            <Search className="w-5 h-5 group-hover:text-emerald-400 transition-colors" />
            <span className="font-medium">Remediation Lookup</span>
          </button>
        </motion.div>

        <div className="px-4 mt-6">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Live Maps</p>
          <motion.div 
            className="space-y-1"
            initial="hidden"
            animate="show"
            variants={{
                hidden: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.1
                    }
                }
            }}
          >
            {THREAT_MAPS.map((map) => (
              <motion.button
                key={map.id}
                variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { 
                        opacity: 1, 
                        x: 0,
                        transition: { type: "spring", stiffness: 300, damping: 24 }
                    }
                }}
                onClick={() => onSelectMap(map)}
                className={`w-full text-left px-4 py-2.5 rounded-md flex items-center justify-between text-sm transition-all border border-transparent group ${
                  currentView === ViewState.MAP_DETAIL && selectedMapId === map.id
                    ? 'bg-slate-800 text-cyan-400 border-slate-700 shadow-md shadow-cyan-900/10' 
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 hover:pl-5'
                }`}
              >
                <div className="flex items-center space-x-3 truncate">
                    <Globe className={`w-4 h-4 shrink-0 ${currentView === ViewState.MAP_DETAIL && selectedMapId === map.id ? 'text-cyan-500' : 'text-slate-600 group-hover:text-cyan-500/70'}`} />
                    <span className="truncate">{map.provider}</span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="p-4 border-t border-slate-800 bg-slate-900/50">
        <div className="flex items-center space-x-2 text-xs text-slate-500">
           <Shield className="w-3 h-3" />
           <span>Secure Connection</span>
           <span className="flex-1 text-right text-cyan-500 animate-pulse">● Live</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;