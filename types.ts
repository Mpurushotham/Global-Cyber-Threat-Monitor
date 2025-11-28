export interface ThreatMap {
  id: string;
  name: string;
  url: string;
  provider: string;
  description: string;
  tags: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum ViewState {
  OVERVIEW = 'OVERVIEW',
  MAP_DETAIL = 'MAP_DETAIL',
  AI_CHAT = 'AI_CHAT',
  TELEMETRY_DETAIL = 'TELEMETRY_DETAIL',
  VULNERABILITY_DETAIL = 'VULNERABILITY_DETAIL',
  REMEDIATION_SEARCH = 'REMEDIATION_SEARCH'
}

export interface ThreatSource {
  name: string;
  url: string;
  description: string;
}

export interface ThreatCategory {
  id: string;
  label: string;
  sub: string;
  color: string;
  icon: 'Bug' | 'AlertOctagon' | 'Server' | 'Zap' | 'Lock' | 'Database';
  description: string;
  sources: ThreatSource[];
}

export interface VulnerabilityCategory {
  id: string;
  label: string;
  sub: string;
  color: string;
  icon: 'ShieldAlert' | 'Code' | 'Database' | 'Globe' | 'Cpu' | 'FileWarning';
  description: string;
  sources: ThreatSource[];
}

export interface RemediationData {
    title: string;
    description: string;
    severity: 'Low' | 'Medium' | 'High' | 'Critical';
    remediation_steps: string[];
    prevention_tools: { tool: string; purpose: string }[];
    references: { source: string; url: string }[];
}