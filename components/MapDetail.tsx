import React, { useEffect, useState } from 'react';
import { ExternalLink, Info, AlertTriangle, ShieldCheck, Cpu } from 'lucide-react';
import { ThreatMap } from '../types';
import { generateSecurityInsight } from '../services/geminiService';

interface MapDetailProps {
  map: ThreatMap;
}

const MapDetail: React.FC<MapDetailProps> = ({ map }) => {
  const [insight, setInsight] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    const fetchInsight = async () => {
      setLoading(true);
      setInsight("");
      const text = await generateSecurityInsight(map.name, `Provider: ${map.provider}. Description: ${map.description}. Tags: ${map.tags.join(', ')}`);
      if (isMounted) {
        setInsight(text);
        setLoading(false);
      }
    };

    fetchInsight();
    return () => { isMounted = false; };
  }, [map]);

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-950 overflow-y-auto custom-scrollbar relative">
      {/* Background Cyber Effect */}
      <div className="absolute inset-0 cyber-scanline pointer-events-none z-10 opacity-30"></div>
      
      {/* Header Banner */}
      <div className="relative h-64 w-full bg-slate-900 overflow-hidden shrink-0">
         <img 
            src={`https://picsum.photos/seed/${map.id}/1200/400?grayscale&blur=2`} 
            alt="Cyber Background" 
            className="w-full h-full object-cover opacity-20"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
         <div className="absolute bottom-6 left-8 right-8 flex justify-between items-end">
            <div>
                <div className="flex items-center space-x-2 mb-2">
                    {map.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 rounded text-xs font-mono bg-cyan-950/50 text-cyan-400 border border-cyan-900/50 uppercase">
                            {tag}
                        </span>
                    ))}
                </div>
                <h2 className="text-4xl font-bold text-white mb-1 tracking-tight">{map.name}</h2>
                <p className="text-lg text-slate-400 flex items-center">
                    by <span className="text-cyan-400 font-semibold ml-1">{map.provider}</span>
                </p>
            </div>
            <a 
                href={map.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-md font-semibold transition-all shadow-lg shadow-cyan-900/20 group"
            >
                <span>Launch Live Map</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
         </div>
      </div>

      <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-4 text-cyan-400">
                    <Info className="w-5 h-5" />
                    <h3 className="text-lg font-semibold uppercase tracking-wider">Operational Intelligence</h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-lg">
                    {map.description}
                </p>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-6 flex flex-col items-center justify-center text-center space-y-4 min-h-[300px]">
                <AlertTriangle className="w-12 h-12 text-yellow-500 opacity-80" />
                <h3 className="text-xl font-semibold text-slate-200">External Visualization Resource</h3>
                <p className="max-w-md text-slate-400">
                    Due to strict security protocols (X-Frame-Options), {map.provider} does not allow their live threat map to be embedded directly inside other dashboards.
                </p>
                <a 
                    href={map.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyan-400 border-b border-cyan-400/30 hover:border-cyan-400 pb-0.5 transition-colors"
                >
                    Open {map.name} in a secure secure window
                </a>
            </div>
        </div>

        {/* AI Sidebar Context */}
        <div className="lg:col-span-1">
             <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 sticky top-6">
                <div className="flex items-center space-x-2 mb-4 text-purple-400">
                    <Cpu className="w-5 h-5" />
                    <h3 className="text-sm font-bold uppercase tracking-wider">AI Analyst Insight</h3>
                </div>
                
                {loading ? (
                    <div className="space-y-3 animate-pulse">
                        <div className="h-4 bg-slate-800 rounded w-3/4"></div>
                        <div className="h-4 bg-slate-800 rounded w-full"></div>
                        <div className="h-4 bg-slate-800 rounded w-5/6"></div>
                    </div>
                ) : (
                    <div className="prose prose-invert prose-sm">
                        <p className="text-slate-300 italic border-l-2 border-purple-500/50 pl-4">
                           "{insight}"
                        </p>
                    </div>
                )}
                
                <div className="mt-6 pt-6 border-t border-slate-800">
                    <div className="flex items-center space-x-2 text-slate-500 mb-2">
                        <ShieldCheck className="w-4 h-4" />
                        <span className="text-xs font-mono uppercase">Map Status</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-sm font-medium text-slate-300">Active Monitoring</span>
                    </div>
                </div>
             </div>
        </div>

      </div>
    </div>
  );
};

export default MapDetail;