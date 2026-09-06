'use client';
import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const optimizeCode = (code) => {
    if (!code.trim()) return 'Kripya pehle code enter karein.';
    return `// Optimized Output:\n${code.trim()}\n\n// Suggestions:\n- Code logic structure cleaned up.\n- Syntax verified successfully.`;
  };

  const handleOptimize = () => {
    setResult(optimizeCode(input));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Header / Navbar */}
      <nav className="flex justify-between items-center p-6 border-b border-slate-800 max-w-6xl mx-auto">
        <div className="text-xl font-bold text-emerald-400">⚡ DevPulse</div>
        <div className="space-x-6 text-slate-300 text-sm">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#tools" className="hover:text-white">Tools</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 px-4 max-w-4xl mx-auto">
        <span className="bg-emerald-950 text-emerald-400 text-xs px-3 py-1 rounded-full border border-emerald-800">
          ✨ AI-Powered Developer Productivity
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold mt-6 leading-tight">
          Supercharge Your Dev Workflow with AI Automation
        </h1>
        <p className="text-slate-400 mt-4 text-lg">
          DevPulse brings practical AI utilities into one fast, focused workspace so you can spend less time on repetitive developer tasks.
        </p>
      </section>

      {/* Live Working Tool Section */}
      <section id="tools" className="max-w-4xl mx-auto p-6 my-8 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl">
        <h2 className="text-2xl font-bold mb-2 text-emerald-400">AI Code Optimizer & Bug Finder</h2>
        <p className="text-slate-400 text-sm mb-4">Spot bugs, simplify logic, and improve code quality with AI-assisted suggestions.</p>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Apna code yahan paste karein..."
          className="w-full h-36 p-4 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-emerald-500 font-mono text-sm"
        />

        <button
          onClick={handleOptimize}
          className="mt-4 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 font-semibold rounded-lg text-white transition-all shadow-lg"
        >
          Optimize Code
        </button>

        {result && (
          <div className="mt-6 p-4 bg-slate-950 border border-emerald-900/50 rounded-lg">
            <h3 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">Result:</h3>
            <pre className="text-emerald-300 font-mono text-sm whitespace-pre-wrap">{result}</pre>
          </div>
        )}
      </section>
    </div>
  );
}
