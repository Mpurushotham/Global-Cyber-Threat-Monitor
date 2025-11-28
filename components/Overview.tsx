import React, { useRef, useState, useEffect } from 'react';
import { INTRO_TEXT, THREAT_CATEGORIES, VULNERABILITY_CATEGORIES } from '../constants';
import { Globe, Shield, Wifi, Zap, User, Heart, ExternalLink, Activity, Lock, Bug, Database, AlertOctagon, Server, ShieldAlert, Code, Cpu, FileWarning, Radio } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ThreatCategory, VulnerabilityCategory, ViewState } from '../types';
import Footer from './Footer';

interface OverviewProps {
  onSelectCategory?: (category: ThreatCategory) => void;
  onSelectVulnerability?: (category: VulnerabilityCategory) => void;
  onNavigate: (view: ViewState) => void;
}

const Overview: React.FC<OverviewProps> = ({ onSelectCategory, onSelectVulnerability, onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ container: containerRef });

  // Parallax effects
  const bgY = useTransform(scrollY, [0, 1000], [0, 300]); 
  const bgOpacity = useTransform(scrollY, [0, 500], [0.3, 0.1]); 
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]); 
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]); 

  return (
    <div ref={containerRef} className="flex-1 overflow-y-auto bg-slate-950 relative custom-scrollbar font-sans selection:bg-cyan-500/30">
        <style>{`
            @keyframes pan-map {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            .animate-pan-map {
                animation: pan-map 120s linear infinite;
            }
            @keyframes ticker {
                0% { transform: translateX(100%); }
                100% { transform: translateX(-100%); }
            }
            .animate-ticker {
                animation: ticker 30s linear infinite;
            }
        `}</style>

      {/* Breaking News Ticker */}
      <div className="bg-slate-900 border-b border-slate-800 h-10 flex items-center relative overflow-hidden z-20">
        <div className="bg-cyan-900/80 px-4 h-full flex items-center z-10 shrink-0 shadow-lg shadow-black/20">
            <Radio className="w-4 h-4 text-cyan-400 mr-2 animate-pulse" />
            <span className="text-xs font-bold text-white tracking-wider uppercase">Breaking Intel</span>
        </div>
        <div className="flex-1 overflow-hidden relative h-full flex items-center">
            <div className="animate-ticker whitespace-nowrap flex items-center space-x-12 text-xs font-mono text-slate-300">
                <span className="flex items-center"><span className="text-red-400 mr-2">[ALERT]</span>New Zero-Day vulnerability detected in Apache Struts frameworks.</span>
                <span className="flex items-center"><span className="text-yellow-400 mr-2">[UPDATE]</span>Global Ransomware activity up by 15% this quarter.</span>
                <span className="flex items-center"><span className="text-cyan-400 mr-2">[INTEL]</span>APT29 group utilizing new evasion techniques in phishing campaigns.</span>
                <span className="flex items-center"><span className="text-green-400 mr-2">[PATCH]</span>Critical security patches released for Windows Server 2022.</span>
                <span className="flex items-center"><span className="text-purple-400 mr-2">[ANALYSIS]</span>IoT Botnets shifting focus to volumetric DDoS attacks on financial institutions.</span>
            </div>
        </div>
      </div>

      {/* Animated World Map Background Layer */}
      <motion.div 
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        style={{ y: bgY, opacity: bgOpacity }}
      >
          {/* Base Map Image */}
          <div 
            className="absolute inset-0 animate-pan-map"
            style={{
                backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')`,
                backgroundSize: '150%',
                backgroundRepeat: 'no-repeat',
                filter: 'invert(1) sepia(1) saturate(5) hue-rotate(190deg) brightness(0.5) contrast(1.2)',
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,0.6)_0%,rgba(2,6,23,1)_100%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-20 space-y-20">
        
        {/* Hero / Author Section */}
        <motion.div 
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="flex flex-col items-center text-center space-y-12"
        >
           <div className="relative">
              <div className="absolute -inset-8 bg-cyan-500/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="relative bg-slate-900 p-6 rounded-full border border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                 <Globe className="w-20 h-20 text-cyan-400 animate-[spin_60s_linear_infinite]" />
              </div>
           </div>

           <div className="space-y-6 max-w-4xl">
             <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter drop-shadow-[0_0_25px_rgba(6,182,212,0.4)] leading-tight">
               GLOBAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">CYBER THREAT</span> MONITOR
             </h1>
             <p className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed border-t border-b border-slate-800/50 py-6">
               A visual understanding of the scale and frequency of global cyberattacks.
             </p>
           </div>

           {/* Author Card */}
           <div className="relative group w-full max-w-2xl mx-auto mt-8">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 flex flex-col items-center text-center shadow-2xl">
                    
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
                    
                    <div className="mb-6 relative">
                         <div className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center border-2 border-slate-700 relative z-10 overflow-hidden group-hover:border-cyan-400 transition-colors duration-300">
                            <User className="w-12 h-12 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
                         </div>
                         <div className="absolute -inset-2 border border-dashed border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Purushotham Muktha</h3>
                    
                    <div className="flex flex-wrap justify-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-cyan-950/50 text-cyan-400 text-xs font-mono rounded border border-cyan-900/50 flex items-center">
                            <Shield className="w-3 h-3 mr-1.5" /> CYBERSECURITY
                        </span>
                        <span className="px-3 py-1 bg-purple-950/50 text-purple-400 text-xs font-mono rounded border border-purple-900/50 flex items-center">
                            <Activity className="w-3 h-3 mr-1.5" /> THREAT INTEL
                        </span>
                        <span className="px-3 py-1 bg-blue-950/50 text-blue-400 text-xs font-mono rounded border border-blue-900/50 flex items-center">
                            <ExternalLink className="w-3 h-3 mr-1.5" /> FRONTEND EXPERT
                        </span>
                    </div>

                    <p className="text-slate-300 font-medium text-lg leading-relaxed max-w-lg italic">
                        "Built with <Heart className="w-5 h-5 text-red-500 fill-red-500 inline-block animate-pulse mx-1 align-text-bottom" /> to share knowledge with the
                        <span className="text-cyan-300 font-semibold mx-1">cybersecurity global community</span>
                        "
                    </p>
                </div>
           </div>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
                icon={<Globe className="w-8 h-8 text-blue-400" />} 
                title="Global Scale" 
                desc="Visualizing millions of threats across international borders daily." 
                color="blue"
                delay={0.1}
            />
            <FeatureCard 
                icon={<Zap className="w-8 h-8 text-red-400" />} 
                title="Live Attacks" 
                desc="Botnets, DDoS, and malware campaigns executing in real-time." 
                color="red"
                delay={0.2}
            />
            <FeatureCard 
                icon={<Lock className="w-8 h-8 text-green-400" />} 
                title="Active Defense" 
                desc="Understanding mitigation strategies and security postures." 
                color="green"
                delay={0.3}
            />
            <FeatureCard 
                icon={<Wifi className="w-8 h-8 text-purple-400" />} 
                title="Infrastructure" 
                desc="Identifying high-bandwidth nations serving as attack launchpads." 
                color="purple"
                delay={0.4}
            />
        </div>

        {/* Real-Time Telemetry Section */}
        <LiveThreatTelemetry onCategoryClick={onSelectCategory} />

        {/* Live Vulnerability Telemetry Section */}
        <LiveVulnerabilityTelemetry onCategoryClick={onSelectVulnerability} />

        {/* Methodology Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-8 border border-slate-800 relative overflow-hidden"
        >
           <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none transform rotate-12">
             <Shield className="w-96 h-96 text-slate-100" />
           </div>
           
           <h2 className="text-3xl font-bold text-white mb-10 flex items-center relative z-10">
             <span className="flex h-3 w-3 relative mr-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
             </span>
             Briefing & Methodology
           </h2>
           
           <div className="grid grid-cols-1 gap-6 relative z-10">
             {INTRO_TEXT.map((paragraph, index) => (
               <motion.div 
                 key={index} 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="flex gap-6 group p-4 rounded-lg hover:bg-slate-800/30 transition-colors border border-transparent hover:border-slate-800/50"
               >
                 <span className="text-slate-700 font-mono text-xl font-bold select-none group-hover:text-cyan-500 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                 </span>
                 <p className="text-slate-300 leading-relaxed text-lg">{paragraph}</p>
               </motion.div>
             ))}
           </div>
        </motion.div>
      </div>

      {/* Main Content Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

const FeatureCard: React.FC<{icon: React.ReactNode, title: string, desc: string, color: string, delay: number}> = ({ icon, title, desc, color, delay }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={`bg-slate-900/40 backdrop-blur-sm border border-slate-800 p-6 rounded-xl hover:bg-slate-900/60 transition-colors group hover:shadow-lg`}
        >
            <div className={`p-3 rounded-lg w-fit mb-4 bg-slate-800/50 group-hover:bg-slate-800 transition-colors`}>
                {icon}
            </div>
            <h3 className="font-bold text-white mb-2 text-lg tracking-wide">{title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
        </motion.div>
    )
}

const LiveThreatTelemetry: React.FC<{onCategoryClick?: (cat: ThreatCategory) => void}> = ({ onCategoryClick }) => {
    // Initializing with estimated daily global figures (simulated base)
    const [stats, setStats] = useState({
        malware: 14523000,
        phishing: 289100,
        ddos: 15400,
        ransomware: 3200,
        iot: 890000,
        crypto: 4500
    });

    // Lookup for rendering icons
    const Icons: any = {
        Bug: <Bug className="w-5 h-5 text-red-500" />,
        AlertOctagon: <AlertOctagon className="w-5 h-5 text-orange-500" />,
        Server: <Server className="w-5 h-5 text-blue-500" />,
        Zap: <Zap className="w-5 h-5 text-yellow-500" />,
        Lock: <Lock className="w-5 h-5 text-purple-500" />,
        Database: <Database className="w-5 h-5 text-cyan-500" />
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => ({
                malware: prev.malware + Math.floor(Math.random() * 15) + 5,
                phishing: prev.phishing + Math.floor(Math.random() * 5) + 1,
                ddos: prev.ddos + (Math.random() > 0.7 ? 1 : 0),
                ransomware: prev.ransomware + (Math.random() > 0.9 ? 1 : 0),
                iot: prev.iot + Math.floor(Math.random() * 8) + 2,
                crypto: prev.crypto + (Math.random() > 0.8 ? 1 : 0)
            }));
        }, 1200);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
        >
            <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                    <span className="w-3 h-3 bg-red-500 rounded-full animate-ping absolute inset-0"></span>
                    <span className="w-3 h-3 bg-red-600 rounded-full relative block"></span>
                </div>
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">Real-Time Threat Telemetry <span className="text-xs text-slate-500 font-normal ml-2 font-mono uppercase border border-slate-800 px-2 py-0.5 rounded">Simulated Live Feed</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {THREAT_CATEGORIES.map((cat) => {
                    const valueKey = cat.id as keyof typeof stats;
                    return (
                        <motion.div 
                            key={cat.id}
                            onClick={() => onCategoryClick && onCategoryClick(cat)}
                            className={`bg-slate-900/50 border border-slate-800 p-5 rounded-lg flex items-center justify-between group hover:bg-slate-800 hover:border-${cat.color}-500/30 transition-all cursor-pointer hover:shadow-lg`}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div>
                                <div className="flex items-center space-x-2 mb-1">
                                    {Icons[cat.icon]}
                                    <span className={`text-sm font-semibold text-${cat.color}-400/80 uppercase tracking-wider`}>{cat.label}</span>
                                </div>
                                <div className="text-3xl font-mono font-bold text-slate-100 tabular-nums">
                                    {stats[valueKey] ? stats[valueKey].toLocaleString() : '---'}
                                </div>
                                <div className="text-xs text-slate-500 mt-1">{cat.sub}</div>
                            </div>
                            <div className="h-full flex flex-col justify-between items-end">
                                <Activity className={`w-6 h-6 text-${cat.color}-500/20 group-hover:text-${cat.color}-500/50 transition-colors`} />
                                <span className="text-[10px] text-slate-600 uppercase tracking-widest font-mono opacity-0 group-hover:opacity-100 transition-opacity">Details &gt;</span>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
}

const LiveVulnerabilityTelemetry: React.FC<{onCategoryClick?: (cat: VulnerabilityCategory) => void}> = ({ onCategoryClick }) => {
    // Simulated active counts for vulnerabilities
    const [counts, setCounts] = useState({
        sql_injection: 12450,
        xss: 45200,
        buffer_overflow: 3200,
        code_execution: 890,
        dos: 5600,
        directory_traversal: 1800
    });

    const Icons: any = {
        ShieldAlert: <ShieldAlert className="w-5 h-5 text-yellow-500" />,
        Code: <Code className="w-5 h-5 text-purple-500" />,
        Database: <Database className="w-5 h-5 text-red-500" />,
        Globe: <Globe className="w-5 h-5 text-orange-500" />,
        Cpu: <Cpu className="w-5 h-5 text-blue-500" />,
        FileWarning: <FileWarning className="w-5 h-5 text-cyan-500" />
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCounts(prev => ({
                sql_injection: prev.sql_injection + Math.floor(Math.random() * 3),
                xss: prev.xss + Math.floor(Math.random() * 8),
                buffer_overflow: prev.buffer_overflow + (Math.random() > 0.5 ? 1 : 0),
                code_execution: prev.code_execution + (Math.random() > 0.8 ? 1 : 0),
                dos: prev.dos + Math.floor(Math.random() * 2),
                directory_traversal: prev.directory_traversal + (Math.random() > 0.7 ? 1 : 0)
            }));
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
        >
             <div className="flex items-center space-x-3 mb-6 border-t border-slate-800 pt-10">
                <div className="relative">
                    <span className="w-3 h-3 bg-purple-500 rounded-full animate-ping absolute inset-0"></span>
                    <span className="w-3 h-3 bg-purple-600 rounded-full relative block"></span>
                </div>
                <h2 className="text-2xl font-bold text-slate-100 tracking-tight">Vulnerability Intelligence <span className="text-xs text-slate-500 font-normal ml-2 font-mono uppercase border border-slate-800 px-2 py-0.5 rounded">Active CVE Tracking</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                 {VULNERABILITY_CATEGORIES.map((cat) => {
                    const countKey = cat.id as keyof typeof counts;
                    return (
                        <motion.div 
                            key={cat.id}
                            onClick={() => onCategoryClick && onCategoryClick(cat)}
                            className={`bg-slate-900/30 border border-slate-800 p-5 rounded-lg flex items-center justify-between group hover:bg-slate-800 hover:border-${cat.color}-500/30 transition-all cursor-pointer hover:shadow-lg`}
                            whileHover={{ scale: 1.02 }}
                        >
                             <div>
                                <div className="flex items-center space-x-2 mb-1">
                                    {Icons[cat.icon]}
                                    <span className={`text-sm font-semibold text-${cat.color}-400/80 uppercase tracking-wider`}>{cat.label}</span>
                                </div>
                                <div className="text-3xl font-mono font-bold text-slate-100 tabular-nums">
                                    {counts[countKey] ? counts[countKey].toLocaleString() : '---'}
                                </div>
                                <div className="text-xs text-slate-500 mt-1">{cat.sub}</div>
                            </div>
                            <div className="h-full flex flex-col justify-between items-end">
                                <Activity className={`w-6 h-6 text-${cat.color}-500/20 group-hover:text-${cat.color}-500/50 transition-colors`} />
                                <span className="text-[10px] text-slate-600 uppercase tracking-widest font-mono opacity-0 group-hover:opacity-100 transition-opacity">Analyze &gt;</span>
                            </div>
                        </motion.div>
                    )
                 })}
            </div>
        </motion.div>
    );
}

export default Overview;