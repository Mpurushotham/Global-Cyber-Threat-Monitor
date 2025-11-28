import React from 'react';
import { Shield, Github, Linkedin, Twitter, Mail, Lock } from 'lucide-react';
import { ViewState } from '../types';

interface FooterProps {
    onNavigate: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 px-6 mt-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-900 to-transparent"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2 text-white">
                <Shield className="w-8 h-8 text-cyan-400" />
                <span className="text-xl font-bold tracking-tighter">THREAT<span className="text-cyan-400">MAP</span> MONITOR</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                A centralized powerhouse for global cyber intelligence. Aggregating live threat data, providing AI-driven analysis, and empowering the community with knowledge.
            </p>
            <div className="flex space-x-4 pt-2">
                <SocialIcon icon={<Linkedin className="w-5 h-5" />} href="https://www.linkedin.com/in/purushotham-muktha/" label="LinkedIn" />
                <SocialIcon icon={<Github className="w-5 h-5" />} href="https://github.com/MPurushotham" label="GitHub" />
                <SocialIcon icon={<Twitter className="w-5 h-5" />} href="#" label="Twitter" />
                <SocialIcon icon={<Mail className="w-5 h-5" />} href="mailto:contact@example.com" label="Contact" />
            </div>
        </div>

        {/* Quick Links */}
        <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Intelligence</h3>
            <ul className="space-y-2 text-sm text-slate-400">
                <FooterButton onClick={() => onNavigate(ViewState.OVERVIEW)}>Global Dashboard</FooterButton>
                <FooterButton onClick={() => onNavigate(ViewState.REMEDIATION_SEARCH)}>Remediation Lookup</FooterButton>
                <FooterButton onClick={() => onNavigate(ViewState.AI_CHAT)}>AI Analyst Chat</FooterButton>
                <FooterButton onClick={() => onNavigate(ViewState.OVERVIEW)}> <a href="https://www.cvedetails.com/vulnerabilities-by-types.php">Vulnerability Database </a> </FooterButton>
            </ul>
        </div>

        {/* Legal / Info */}
        <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Resources</h3>
            <ul className="space-y-2 text-sm text-slate-400">
                <FooterLink href="#">Methodology</FooterLink>
                <FooterLink href="#">Data Sources</FooterLink>
                <FooterLink href="#">API Documentation</FooterLink>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms of Service</FooterLink>
            </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-mono">
        <p>© {new Date().getFullYear()} Global Threat Monitor. Built by Purushotham Muktha.</p>
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <Lock className="w-3 h-3 text-emerald-500" />
            <span>Encrypted Connection</span>
            <span className="mx-2">|</span>
            <span>All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode, href: string, label: string }> = ({ icon, href, label }) => (
    <a 
        href={href} 
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-cyan-600 transition-all duration-300"
    >
        {icon}
    </a>
);

const FooterButton: React.FC<{ children: React.ReactNode, onClick: () => void }> = ({ children, onClick }) => (
    <li>
        <button onClick={onClick} className="hover:text-cyan-400 transition-colors flex items-center group text-left">
            <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
            {children}
        </button>
    </li>
);

const FooterLink: React.FC<{ children: React.ReactNode, href: string }> = ({ children, href }) => (
    <li>
        <a href={href} className="hover:text-cyan-400 transition-colors flex items-center group">
            <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
            {children}
        </a>
    </li>
);

export default Footer;