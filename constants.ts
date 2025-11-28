import { ThreatMap, ThreatCategory, VulnerabilityCategory } from './types';

export const THREAT_MAPS: ThreatMap[] = [
  {
    id: 'kaspersky',
    name: 'Cyberthreat Real-Time Map',
    provider: 'Kaspersky',
    url: 'https://cybermap.kaspersky.com/',
    description: 'A stunning 3D interactive globe showing cyber threats detected by Kaspersky Lab in real-time. Supports various visualization modes.',
    tags: ['3D Globe', 'Malware', 'Visual']
  },
  {
    id: 'fortinet',
    name: 'Threat Map',
    provider: 'Fortinet',
    url: 'https://threatmap.fortiguard.com/',
    description: 'Real-time display of attacks detected by Fortinet devices worldwide. One of the most recognizable "pew-pew" style maps.',
    tags: ['IPS', 'Botnet', 'Malware']
  },
  {
    id: 'digital-attack-map',
    name: 'Digital Attack Map',
    provider: 'Google / Arbor Networks',
    url: 'https://www.digitalattackmap.com/',
    description: 'A live data visualization of DDoS attacks around the globe, built through a collaboration between Google Ideas and Arbor Networks.',
    tags: ['DDoS', 'Historical', 'Visual']
  },
  {
    id: 'greynoise',
    name: 'GreyNoise Visualizer',
    provider: 'GreyNoise',
    url: 'https://viz.greynoise.io/',
    description: 'Visualizes internet "background noise"—scanners, bots, and worms—distinguishing harmless noise from targeted threats.',
    tags: ['Scanners', 'Noise', '3D Visual']
  },
  {
    id: 'crowdstrike',
    name: 'Adversary Universe',
    provider: 'CrowdStrike',
    url: 'https://adversary.crowdstrike.com/en-us/',
    description: 'A highly detailed visual database of nation-state, eCrime, and hacktivist threat actors, mapping their origins and targets.',
    tags: ['Actors', 'Intel', 'Profiles']
  },
  {
    id: 'ibm-xforce',
    name: 'X-Force Exchange',
    provider: 'IBM',
    url: 'https://exchange.xforce.ibmcloud.com/',
    description: 'Cloud-based threat intelligence platform that allows you to research threats, collaborate with peers, and take action.',
    tags: ['Enterprise', 'Intel', 'Research']
  },
  {
    id: 'checkpoint',
    name: 'Live Cyber Threat Map',
    provider: 'Check Point',
    url: 'https://threatmap.checkpoint.com/',
    description: 'Displays daily attacks and top targeted countries based on ThreatCloud data with a clean, modern interface.',
    tags: ['Daily Stats', 'Targeted Countries']
  },
  {
    id: 'netscout',
    name: 'Cyber Threat Horizon',
    provider: 'NETSCOUT',
    url: 'https://horizon.netscout.com/',
    description: 'High-level 3D view of DDoS attacks and macro-level internet events, highly professional and detailed.',
    tags: ['DDoS', 'Macro', 'Events']
  },
  {
    id: 'bitdefender',
    name: 'Cyberthreat Real-Time Map',
    provider: 'Bitdefender',
    url: 'https://threatmap.bitdefender.com/',
    description: 'Visual representation of global infections and attacks, focusing on speed and infection propagation.',
    tags: ['Infections', 'Global']
  },
  {
    id: 'imperva',
    name: 'Cyber Threat Attack Map',
    provider: 'Imperva',
    url: 'https://www.imperva.com/cyber-threat-attack-map/',
    description: 'Visualizes DDoS, bot, and vulnerability attacks blocked by Imperva in real-time.',
    tags: ['DDoS', 'WAF', 'Bots']
  },
  {
    id: 'rapid7',
    name: 'Threat Intelligence',
    provider: 'Rapid7',
    url: 'https://www.rapid7.com/solutions/threat-intelligence/',
    description: 'Comprehensive threat intelligence and vulnerability research from Rapid7 labs.',
    tags: ['Vulnerabilities', 'Research', 'Intel']
  },
  {
    id: 'sans-isc',
    name: 'Internet Storm Center',
    provider: 'SANS Institute',
    url: 'https://isc.sans.edu/',
    description: 'The "weather map" of the internet. Monitors global port scanning activities, IP sources, and emerging threat trends.',
    tags: ['Ports', 'Scanning', 'Trends']
  },
  {
    id: 'alienvault',
    name: 'Open Threat Exchange',
    provider: 'AT&T AlienVault',
    url: 'https://otx.alienvault.com/',
    description: 'Visualizes the community-driven Open Threat Exchange (OTX) data, showing real-time pulses of threat indicators.',
    tags: ['OTX', 'Indicators', 'Community']
  },
  {
    id: 'sonicwall',
    name: 'Worldwide Attacks',
    provider: 'SonicWall',
    url: 'https://attackmap.sonicwall.com/live-attack-map/',
    description: 'Live visualization of ransomware, malware, and encrypted threats with detailed regional breakdown.',
    tags: ['Ransomware', 'Encrypted', 'Live']
  },
  {
    id: 'shadowserver',
    name: 'Shadowserver Dashboard',
    provider: 'The Shadowserver Foundation',
    url: 'https://dashboard.shadowserver.org/',
    description: 'Comprehensive statistics on botnets, honeypots, and misconfigured services. Vital for infrastructure defense.',
    tags: ['IoT', 'Honeypots', 'Stats']
  },
  {
    id: 'radware',
    name: 'Live Threat Map',
    provider: 'Radware',
    url: 'https://livethreatmap.radware.com/',
    description: 'Visualizes DDoS attacks and other threats in real-time, focusing on source and destination vectors.',
    tags: ['DDoS', 'Real-time', 'Attacks']
  },
  {
    id: 'sophos',
    name: 'Threat Tracking',
    provider: 'Sophos',
    url: 'https://www.sophos.com/en-us/threat-center/threat-tracking',
    description: 'Latest research and statistics on malware, spam, and web threats from SophosLabs.',
    tags: ['Labs', 'Malware', 'Spam']
  },
  {
    id: 'lookingglass',
    name: 'LookingGlass Map',
    provider: 'LookingGlass',
    url: 'https://map.lookingglasscyber.com/',
    description: 'Real-time visualization of infection records, botnets, and C&C servers overlaid on a world map.',
    tags: ['C&C', 'Infections', 'Feeds']
  },
  {
    id: 'sicherheitstacho',
    name: 'Sicherheitstacho',
    provider: 'Deutsche Telekom',
    url: 'https://www.sicherheitstacho.eu/',
    description: 'Visualizes global cyber attacks on honeypot sensors deployed by Deutsche Telekom.',
    tags: ['Honeypot', 'Sensors', 'Europe']
  },
  {
    id: 'threatbutt',
    name: 'Internet Hacking Attack Map',
    provider: 'Threatbutt',
    url: 'http://threatbutt.com/map/',
    description: 'A satirical yet functional visualization of "pew pew" cyber attacks. Uses retro sounds and graphics.',
    tags: ['Visual', 'Satire', 'Retro']
  },
  {
    id: 'akamai',
    name: 'Internet Station',
    provider: 'Akamai',
    url: 'https://www.akamai.com/internet-station',
    description: 'Real-time monitor of global internet traffic volume and attack traffic trends.',
    tags: ['Traffic', 'Volume', 'Trends']
  },
  {
    id: 'talos',
    name: 'Talos Cyber Attack Map',
    provider: 'Cisco Talos',
    url: 'https://talosintelligence.com/',
    description: 'Top sender IPs and threat data from Cisco Talos Intelligence. Focuses on email and spam reputation.',
    tags: ['Email', 'Spam', 'IP Reputation']
  },
  {
    id: 'spamhaus',
    name: 'Live Botnet Threat',
    provider: 'Spamhaus',
    url: 'https://www.spamhaus.org/statistics/botnet-cc/',
    description: 'Focuses specifically on Botnet Command & Controller (C&C) locations and ISP statistics.',
    tags: ['Botnet', 'C&C', 'Infrastructure']
  },
  {
    id: 'lionic',
    name: 'Cyber Threat Map',
    provider: 'Lionic',
    url: 'https://www.lionic.com/threatmap/',
    description: 'Shows real-time network threats and virus activities with a focus on Asian traffic.',
    tags: ['Viruses', 'Network', 'Asia']
  },
  {
    id: 'httpcs',
    name: 'Cyber Map',
    provider: 'HTTPCS',
    url: 'https://map.httpcs.com/',
    description: 'Real-time monitor of hacks and breaches detected by HTTPCS auditors.',
    tags: ['Hacks', 'Breaches']
  },
  {
    id: 'zscaler',
    name: 'Global Internet Threats',
    provider: 'Zscaler',
    url: 'https://www.zscaler.com/blogs/security-research/zscaler-threatlabz-2024-ransomware-report',
    description: 'Insights into blocked threats across the Zscaler cloud (Report/Dashboard view).',
    tags: ['Cloud', 'Enterprise', 'Blocks']
  },
  {
    id: 'kaspersky-stats',
    name: 'Securelist Statistics',
    provider: 'Kaspersky',
    url: 'https://securelist.com/statistics/',
    description: 'Detailed statistical data on malware, spam, and network attacks. Great for deep analysis.',
    tags: ['Statistics', 'Reports', 'Analysis']
  },
];

export const INTRO_TEXT = [
  "A Cyber Attack/Threat Map is just a graphical way to show how the Internet is hostile. Day by day, millions of cyber threats hit new victims, some of them performing counter-attacks, others mitigating the attacks and remaining passive.",
  "While some malicious activities are manually targeted cyber attacks, most are botnets dedicated to shutting down infrastructures and causing organizational chaos.",
  "Most current Cyber Attack/Threat Maps are wrongly advertised as 'live maps'— most do not show live attack data but records of past attacks. However, they give users a visual understanding of the scale and frequency of global cyberattacks.",
  "Something essential to remember about the source of the attacks: while these maps locate specific countries launching attacks against others, that doesn't mean the actual source of the attack is the same as the attacker's location.",
  "Another interesting fact: the most significant attacks often come from high bandwidth nations, ideally suited to launching giant attacks from thousands of infected devices commanded from remote locations."
];

export const THREAT_CATEGORIES: ThreatCategory[] = [
    {
        id: 'malware',
        label: 'Malware Detected',
        sub: 'Trojans, Viruses, Worms',
        color: 'red',
        icon: 'Bug',
        description: 'Malicious software intentionally designed to cause damage to a computer, server, client, or computer network. Common types include viruses, worms, Trojan horses, ransomware, spyware, adware, and rogue software.',
        sources: [
            { name: 'AV-TEST', url: 'https://www.av-test.org/en/statistics/malware/', description: 'Real-time statistics on malware growth and detection rates.' },
            { name: 'MalwareBazaar', url: 'https://bazaar.abuse.ch/', description: 'A project from abuse.ch allowing the community to share malware samples.' },
            { name: 'VirusTotal', url: 'https://www.virustotal.com/gui/stats', description: 'Global statistics on file and URL analysis submissions.' }
        ]
    },
    {
        id: 'phishing',
        label: 'Phishing Attempts',
        sub: 'Email & Social Engineering',
        color: 'orange',
        icon: 'AlertOctagon',
        description: 'Phishing is a type of social engineering where an attacker sends a fraudulent message designed to trick a person into revealing sensitive information to the attacker or to deploy malicious software on the victim\'s infrastructure.',
        sources: [
            { name: 'PhishTank', url: 'https://www.phishtank.com/stats.php', description: 'Collaborative clearing house for data and information about phishing on the Internet.' },
            { name: 'OpenPhish', url: 'https://openphish.com/', description: 'Real-time phishing threat intelligence feeds.' },
            { name: 'APWG', url: 'https://apwg.org/trendsreports/', description: 'Anti-Phishing Working Group global phishing activity trends.' }
        ]
    },
    {
        id: 'iot',
        label: 'IoT Botnet Traffic',
        sub: 'Compromised Smart Devices',
        color: 'blue',
        icon: 'Server',
        description: 'A collection of internet-connected devices, which may include PCs, servers, mobile devices, and internet of things devices that are infected and controlled by a common type of malware.',
        sources: [
            { name: 'Shadowserver', url: 'https://dashboard.shadowserver.org/statistics/honeypot/', description: 'Daily statistics on IoT honeypot activity and botnet sensors.' },
            { name: 'Spamhaus Botnet Controller List', url: 'https://www.spamhaus.org/statistics/botnet-cc/', description: 'Tracks the location of botnet Command & Control servers.' }
        ]
    },
    {
        id: 'ddos',
        label: 'DDoS Attacks',
        sub: 'Volumetric L3/L4 Floods',
        color: 'yellow',
        icon: 'Zap',
        description: 'A distributed denial-of-service (DDoS) attack is a malicious attempt to disrupt the normal traffic of a targeted server, service or network by overwhelming the target or its surrounding infrastructure with a flood of Internet traffic.',
        sources: [
            { name: 'Cloudflare Radar', url: 'https://radar.cloudflare.com/security/attacks', description: 'Global DDoS attack trends and traffic anomalies observed by Cloudflare.' },
            { name: 'NETSCOUT Horizon', url: 'https://horizon.netscout.com/', description: 'Real-time visibility into global DDoS attacks and internet events.' },
            { name: 'Digital Attack Map', url: 'https://www.digitalattackmap.com/', description: 'Visualization of top daily DDoS attacks worldwide.' }
        ]
    },
    {
        id: 'ransomware',
        label: 'Ransomware Events',
        sub: 'File Encryption Activities',
        color: 'purple',
        icon: 'Lock',
        description: 'Ransomware is a type of malware from cryptovirology that threatens to publish the victim\'s data or perpetually block access to it unless a ransom is paid.',
        sources: [
            { name: 'ID Ransomware', url: 'https://id-ransomware.malwarehunterteam.com/', description: 'Service to identify what ransomware has encrypted files.' },
            { name: 'Ransomwhere', url: 'https://ransomwhe.re/', description: 'Crowdsourced ransomware payment tracker.' }
        ]
    },
    {
        id: 'crypto',
        label: 'Cryptojacking',
        sub: 'Unauthorized Mining',
        color: 'cyan',
        icon: 'Database',
        description: 'Cryptojacking is the unauthorized use of a computer to mine cryptocurrency. Hackers do this by either getting the victim to click on a malicious link or by infecting a website or online ad with JavaScript code.',
        sources: [
            { name: 'CoinWarz Mining Stats', url: 'https://www.coinwarz.com/charts', description: 'Global network hashrate and difficulty charts (indicative of mining activity).' },
            { name: 'SonicWall Threat Report', url: 'https://www.sonicwall.com/threat-report/', description: 'Reports on cryptojacking attempts blocked by firewalls.' }
        ]
    }
];

export const VULNERABILITY_CATEGORIES: VulnerabilityCategory[] = [
  {
      id: 'sql_injection',
      label: 'SQL Injection',
      sub: 'Database Manipulation',
      color: 'red',
      icon: 'Database',
      description: 'SQL injection is a code injection technique that might destroy your database. It is one of the most common web hacking techniques.',
      sources: [
          { name: 'OWASP SQLi', url: 'https://owasp.org/www-community/attacks/SQL_Injection', description: 'Detailed technical analysis and prevention cheat sheets.' },
          { name: 'CWE-89', url: 'https://cwe.mitre.org/data/definitions/89.html', description: 'MITRE Common Weakness Enumeration entry for SQL Injection.' }
      ]
  },
  {
      id: 'xss',
      label: 'XSS (Cross-Site Scripting)',
      sub: 'Client-Side Execution',
      color: 'orange',
      icon: 'Globe',
      description: 'Cross-Site Scripting (XSS) attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites.',
      sources: [
          { name: 'OWASP XSS', url: 'https://owasp.org/www-community/attacks/xss/', description: 'Official OWASP documentation on Cross Site Scripting.' },
          { name: 'CVE Details XSS', url: 'https://www.cvedetails.com/vulnerability-list/opxss-1/XSS.html', description: 'List of registered CVEs related to XSS vulnerabilities.' }
      ]
  },
  {
      id: 'buffer_overflow',
      label: 'Buffer Overflow',
      sub: 'Memory Corruption',
      color: 'blue',
      icon: 'Cpu',
      description: 'A buffer overflow is an anomaly where a program, while writing data to a buffer, overruns the buffer\'s boundary and overwrites adjacent memory locations.',
      sources: [
          { name: 'NVD Buffer Overflow', url: 'https://nvd.nist.gov/vuln/search/results?form_type=Basic&results_type=overview&query=buffer+overflow&search_type=all', description: 'NIST National Vulnerability Database search for buffer overflows.' },
          { name: 'CWE-120', url: 'https://cwe.mitre.org/data/definitions/120.html', description: 'Classic Buffer Overflow weakness enumeration.' }
      ]
  },
  {
      id: 'code_execution',
      label: 'Remote Code Execution',
      sub: 'Arbitrary Code Run',
      color: 'purple',
      icon: 'Code',
      description: 'Remote Code Execution (RCE) vulnerabilities allow an attacker to execute arbitrary code on a remote device. This is often the most critical type of vulnerability.',
      sources: [
          { name: 'Exploit Database', url: 'https://www.exploit-db.com/', description: 'Archive of exploits and proof-of-concept code for RCEs.' },
          { name: 'CISA Known Exploited', url: 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog', description: 'Catalog of vulnerabilities that have been exploited in the wild.' }
      ]
  },
  {
      id: 'dos',
      label: 'Denial of Service',
      sub: 'Availability Impact',
      color: 'yellow',
      icon: 'ShieldAlert',
      description: 'Vulnerabilities that cause a Denial of Service (DoS) crash a service or make it unresponsive, differing from DDoS which typically relies on volume.',
      sources: [
          { name: 'CVE Details DoS', url: 'https://www.cvedetails.com/vulnerability-list/opdos-1/Denial-of-service.html', description: 'List of CVEs specifically categorized as causing Denial of Service.' }
      ]
  },
  {
      id: 'directory_traversal',
      label: 'Directory Traversal',
      sub: 'File System Access',
      color: 'cyan',
      icon: 'FileWarning',
      description: 'Directory traversal (or path traversal) allows attackers to read arbitrary files on the server that is running an application.',
      sources: [
          { name: 'PortSwigger Traversal', url: 'https://portswigger.net/web-security/file-path-traversal', description: 'In-depth guide on File Path Traversal attacks.' },
          { name: 'CWE-22', url: 'https://cwe.mitre.org/data/definitions/22.html', description: 'Improper Limitation of a Pathname to a Restricted Directory.' }
      ]
  }
];