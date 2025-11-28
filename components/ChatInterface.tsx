import React, { useState, useRef, useEffect } from 'react';
import { Send, Terminal, User, Bot, Trash2 } from 'lucide-react';
import { chatWithAnalyst } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatInterface: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      role: 'model',
      text: "Identity verified. I am your automated Threat Intelligence Analyst. How can I assist you with threat vectors, map interpretation, or security terminology today?",
      timestamp: new Date()
    }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    // Format history for Gemini
    const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
    }));

    const responseText = await chatWithAnalyst(history, userMsg.text);

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMsg]);
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
      setMessages([
        {
            id: 'init',
            role: 'model',
            text: "Session cleared. Ready for new queries.",
            timestamp: new Date()
        }
      ]);
  }

  return (
    <div className="flex flex-col h-full bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>

      <div className="p-6 border-b border-slate-800 bg-slate-900/80 backdrop-blur z-10 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-purple-900/20 rounded-lg border border-purple-500/30">
            <Terminal className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-100">Threat Analyst AI</h2>
            <p className="text-xs text-purple-400 font-mono">POWERED BY GEMINI AI</p>
          </div>
        </div>
        <button onClick={clearChat} className="text-slate-500 hover:text-red-400 transition-colors" title="Clear Session">
            <Trash2 className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar z-10">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-3xl rounded-xl p-4 shadow-lg flex items-start space-x-4 ${
                msg.role === 'user'
                  ? 'bg-cyan-900/20 border border-cyan-800 text-slate-200'
                  : 'bg-slate-900 border border-slate-800 text-slate-300'
              }`}
            >
                <div className={`mt-1 shrink-0 ${msg.role === 'user' ? 'order-2 ml-4' : 'order-1'}`}>
                    {msg.role === 'user' ? <User className="w-5 h-5 text-cyan-400" /> : <Bot className="w-5 h-5 text-purple-400" />}
                </div>
                <div className={msg.role === 'user' ? 'order-1' : 'order-2'}>
                    <div className="text-sm leading-relaxed whitespace-pre-wrap font-mono text-xs md:text-sm">
                        {msg.text}
                    </div>
                    <div className="mt-2 text-[10px] text-slate-600 font-mono uppercase">
                        {msg.timestamp.toLocaleTimeString()}
                    </div>
                </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
             <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center space-x-3">
                <Bot className="w-5 h-5 text-purple-400" />
                <div className="flex space-x-1">
                    <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-75"></span>
                    <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-150"></span>
                    <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-300"></span>
                </div>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-slate-800 bg-slate-900/50 backdrop-blur z-10">
        <div className="max-w-4xl mx-auto relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about Botnets, DDoS, Ransomware, or Threat Actors..."
            className="w-full bg-slate-950 border border-slate-700 text-slate-200 rounded-lg pl-4 pr-12 py-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono text-sm placeholder-slate-600"
            disabled={loading}
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="absolute right-2 p-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;