import React, { useState } from 'react';
import { Search, ShieldCheck, AlertTriangle, ExternalLink, Wrench, FileText, CheckCircle2 } from 'lucide-react';
import { getRemediationData } from '../services/geminiService';
import { RemediationData } from '../types';
import { motion } from 'framer-motion';

const RemediationSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState<RemediationData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError('');
    setData(null);

    const result = await getRemediationData(query);
    
    if (result) {
        setData(result);
    } else {
        setError('Unable to fetch remediation data. Please try again.');
    }
    setLoading(false);
  };

  const getSeverityColor = (severity: string) => {
      switch (severity.toLowerCase()) {
          case 'low': return 'text-green-400 bg-green-950/50 border-green-800';
          case 'medium': return 'text-yellow-400 bg-yellow-950/50 border-yellow-800';
          case 'high': return 'text-orange-400 bg-orange-950/50 border-orange-800';
          case 'critical': return 'text-red-400 bg-red-950/50 border-red-800';
          default: return 'text-slate-400 bg-slate-800 border-slate-700';
      }
  };

  return (
    <div className="flex-1 h-full bg-slate-950 relative overflow-y-auto custom-scrollbar p-6 lg:p-12">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
            
            {/* Header Section */}
            <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-emerald-950/30 border border-emerald-500/30 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <ShieldCheck className="w-8 h-8 text-emerald-400" />
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">Remediation Knowledge Base</h1>
                <p className="text-slate-400 max-w-lg mx-auto">
                    Search for vulnerabilities (e.g., "Log4j", "SQL Injection") or attack vectors to generate actionable mitigation strategies.
                </p>
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative mb-12">
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                    <div className="relative flex items-center bg-slate-900 rounded-lg">
                        <Search className="absolute left-4 w-6 h-6 text-slate-500 group-focus-within:text-emerald-400 transition-colors" />
                        <input 
                            type="text" 
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Enter threat name, CVE ID, or vulnerability type..."
                            className="w-full bg-transparent border-0 text-slate-200 px-12 py-4 focus:ring-0 focus:outline-none font-mono placeholder-slate-600 text-lg"
                        />
                        <button 
                            type="submit"
                            disabled={loading}
                            className="absolute right-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2 rounded-md font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Analyzing...' : 'Lookup'}
                        </button>
                    </div>
                </div>
            </form>

            {/* Error Message */}
            {error && (
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-950/30 border border-red-900/50 rounded-lg text-red-400 flex items-center space-x-3 mb-8"
                >
                    <AlertTriangle className="w-5 h-5" />
                    <span>{error}</span>
                </motion.div>
            )}

            {/* Content Display */}
            {data && !loading && (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                >
                    {/* Title & Severity */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                        <div>
                            <h2 className="text-3xl font-bold text-white tracking-tight">{data.title}</h2>
                            <p className="text-slate-400 mt-2 text-lg">{data.description}</p>
                        </div>
                        <div className={`px-4 py-2 rounded-lg border font-mono font-bold uppercase tracking-wider ${getSeverityColor(data.severity)}`}>
                            {data.severity} Severity
                        </div>
                    </div>

                    {/* Remediation Steps */}
                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                        <div className="flex items-center space-x-3 mb-6">
                            <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                            <h3 className="text-xl font-bold text-white">Remediation Strategy</h3>
                        </div>
                        <div className="space-y-4">
                            {data.remediation_steps.map((step, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-mono text-sm border border-slate-700">
                                        {idx + 1}
                                    </span>
                                    <p className="text-slate-300 leading-relaxed pt-1">{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Tools Table */}
                        <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-6">
                            <div className="flex items-center space-x-3 mb-6">
                                <Wrench className="w-5 h-5 text-blue-400" />
                                <h3 className="text-lg font-bold text-white">Recommended Tools</h3>
                            </div>
                            <div className="overflow-hidden rounded-lg border border-slate-800">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-slate-900 text-slate-400">
                                        <tr>
                                            <th className="p-3 font-medium">Tool</th>
                                            <th className="p-3 font-medium">Purpose</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-800 bg-slate-900/20">
                                        {data.prevention_tools.map((item, idx) => (
                                            <tr key={idx}>
                                                <td className="p-3 font-medium text-cyan-400">{item.tool}</td>
                                                <td className="p-3 text-slate-400">{item.purpose}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* References List */}
                        <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-6">
                            <div className="flex items-center space-x-3 mb-6">
                                <FileText className="w-5 h-5 text-purple-400" />
                                <h3 className="text-lg font-bold text-white">Trusted References</h3>
                            </div>
                            <ul className="space-y-3">
                                {data.references.map((ref, idx) => (
                                    <li key={idx}>
                                        <a 
                                            href={ref.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-transparent hover:border-purple-500/30 transition-all group"
                                        >
                                            <span className="text-slate-300 group-hover:text-purple-300 transition-colors font-medium">{ref.source}</span>
                                            <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-purple-400" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            )}

            {!data && !loading && !query && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 opacity-50">
                     {['SQL Injection', 'Ransomware', 'Log4j', 'XSS', 'Phishing', 'DDoS', 'Zero-Day', 'Brute Force'].map((tag) => (
                         <button 
                            key={tag} 
                            onClick={() => { setQuery(tag); }}
                            className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-500 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
                        >
                            {tag}
                         </button>
                     ))}
                </div>
            )}
        </div>
    </div>
  );
};

export default RemediationSearch;