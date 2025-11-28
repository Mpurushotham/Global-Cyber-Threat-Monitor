import React from 'react';
import { ThreatCategory } from '../types';
import { Bug, AlertOctagon, Server, Zap, Lock, Database, ArrowLeft, ExternalLink, Activity, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

interface TelemetryDetailProps {
  category: ThreatCategory;
  onBack: () => void;
}

const TelemetryDetail: React.FC<TelemetryDetailProps> = ({ category, onBack }) => {
  const Icons = {
    Bug: Bug,
    AlertOctagon: AlertOctagon,
    Server: Server,
    Zap: Zap,
    Lock: Lock,
    Database: Database
  };

  const IconComponent = Icons[category.icon];

  return (
    <div className="flex-1 overflow-y-auto bg-slate-950 relative custom-scrollbar p-6 lg:p-10">
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors mb-8 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-mono text-sm tracking-wide">RETURN TO DASHBOARD</span>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* Header */}
        <div className="flex items-start space-x-6">
          <div className={`p-6 rounded-2xl bg-${category.color}-950/30 border border-${category.color}-500/30 shadow-[0_0_30px_rgba(0,0,0,0.5)]`}>
            <IconComponent className={`w-12 h-12 text-${category.color}-400`} />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-slate-100 mb-2 tracking-tight">{category.label}</h1>
            <p className={`text-xl text-${category.color}-400/80 font-mono mb-4`}>{category.sub}</p>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
              {category.description}
            </p>
          </div>
        </div>

        {/* Live Terminal Simulation */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden font-mono text-sm shadow-2xl">
            <div className="bg-slate-950 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-slate-500">
                    <Terminal className="w-4 h-4" />
                    <span>live_feed_monitor.sh</span>
                </div>
                <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
            </div>
            <div className="p-4 space-y-2 h-48 overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90 pointer-events-none"></div>
                 <div className="text-slate-500">Initializing connection to global sensor grid... <span className="text-green-500">OK</span></div>
                 <div className="text-slate-500">Loading modules: {category.id}_scanner.mod ... <span className="text-green-500">LOADED</span></div>
                 <div className="text-slate-400">Stream started at {new Date().toISOString()}</div>
                 <div className="text-slate-300 mt-2 opacity-80">
                    <span className="text-cyan-500">[INFO]</span> Detecting elevated traffic from subnet 192.168.x.x
                 </div>
                 <div className="text-slate-300 opacity-70">
                    <span className={`text-${category.color}-500`}>[WARN]</span> Signature match found: {category.label} variant.B
                 </div>
                 <div className="text-slate-300 opacity-60">
                    <span className="text-cyan-500">[INFO]</span> Packet loss detected in region: APAC
                 </div>
                 <div className="text-slate-300 opacity-50">
                    <span className="text-purple-500">[ANALYSIS]</span> Correlating events with threat intel feeds...
                 </div>
                 <div className="animate-pulse mt-2 text-cyan-400">_</div>
            </div>
        </div>

        {/* Sources Grid */}
        <div>
            <div className="flex items-center space-x-3 mb-6">
                <Activity className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">Real-Time Intelligence Sources</h2>
            </div>
            
            <div className="grid gap-4">
                {category.sources.map((source, index) => (
                    <a 
                        key={index}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:bg-slate-800 transition-all hover:border-cyan-500/30 flex items-center justify-between"
                    >
                        <div>
                            <div className="flex items-center space-x-2 mb-2">
                                <h3 className="text-lg font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">{source.name}</h3>
                                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors opacity-0 group-hover:opacity-100" />
                            </div>
                            <p className="text-slate-400">{source.description}</p>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-slate-950 flex items-center justify-center border border-slate-800 group-hover:border-cyan-500/50 transition-colors">
                            <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-cyan-400" />
                        </div>
                    </a>
                ))}
            </div>
        </div>

      </motion.div>
    </div>
  );
};

export default TelemetryDetail;