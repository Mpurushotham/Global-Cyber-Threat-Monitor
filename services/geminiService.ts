import { GoogleGenAI } from "@google/genai";
import { RemediationData } from "../types";

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing from environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateSecurityInsight = async (topic: string, context?: string): Promise<string> => {
  const ai = getAiClient();
  if (!ai) return "Error: API Key not configured.";

  try {
    const prompt = `
      You are a world-class Cybersecurity Intelligence Analyst. 
      The user is viewing a dashboard of Cyber Attack Maps.
      
      Topic: ${topic}
      Context: ${context || 'General Cyber Threat landscape'}

      Provide a concise, professional, and insightful explanation about this specific threat map provider or the type of threats they visualize (e.g., DDoS, Botnets, Malware). 
      Explain why visualizing this specific data is important for threat intelligence.
      Keep it under 150 words. Use technical but accessible language.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "No insight generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Unable to retrieve threat intelligence at this time.";
  }
};

export const chatWithAnalyst = async (history: {role: string, parts: {text: string}[]}[], message: string): Promise<string> => {
    const ai = getAiClient();
    if (!ai) return "Error: API Key not configured.";

    try {
        const chat = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: "You are a Senior Cyber Threat Hunter and Security Analyst. You help users understand cyber attacks, maps, and terminology (like DDoS, Botnet, C2, APT). Be concise, professional, and slightly paranoid but helpful."
            },
            history: history
        });

        const result = await chat.sendMessage({ message });
        return result.text || "No response received.";
    } catch (error) {
        console.error("Chat Error:", error);
        return "System offline. Unable to process query.";
    }
}

export const getRemediationData = async (query: string): Promise<RemediationData | null> => {
    const ai = getAiClient();
    if (!ai) return null;

    try {
        const prompt = `
            Act as a Lead Security Engineer. The user needs specific remediation advice for: "${query}".
            
            Provide a response in strictly valid JSON format with the following structure:
            {
                "title": "Technical Name of the Issue",
                "description": "A concise technical explanation of the vulnerability or attack vector.",
                "severity": "Low" | "Medium" | "High" | "Critical",
                "remediation_steps": ["Step 1...", "Step 2...", "Step 3..."],
                "prevention_tools": [
                    { "tool": "Tool Name", "purpose": "How it helps" }
                ],
                "references": [
                    { "source": "Source Name (e.g., OWASP, NIST, CVEDetails)", "url": "Valid URL" }
                ]
            }

            Ensure "remediation_steps" are actionable and technical.
            Ensure "references" point to reputable sources like cvedetails.com, nvd.nist.gov, owasp.org, or microsoft.com/security where applicable.
            Do not include Markdown formatting (like \`\`\`json) in the response, just the raw JSON string.
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: 'application/json'
            }
        });

        const text = response.text || "{}";
        return JSON.parse(text) as RemediationData;
    } catch (error) {
        console.error("Remediation Lookup Error:", error);
        return null;
    }
}