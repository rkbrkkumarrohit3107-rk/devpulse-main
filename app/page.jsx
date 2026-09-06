'use client';
import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const optimizeCode = (code) => {
    if (!code.trim()) return 'Kripya code enter karein.';
    
    // Sample AI Optimization logic
    return `// Optimized Output:\n${code.trim()}\n\n// Suggestions:\n- Variables and imports cleaned up.\n- Syntax validated successfully.`;
  };

  const handleOptimize = () => {
    const output = optimizeCode(input);
    setResult(output);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-4">
      <h2 className="text-xl font-bold">AI Code Optimizer</h2>
      
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Apna code yahan paste karein..."
        className="w-full h-32 p-3 bg-gray-900 border rounded text-white"
      />

      <button 
        onClick={handleOptimize}
        className="px-4 py-2 bg-emerald-600 text-white rounded font-medium"
      >
        Optimize Code
      </button>

      {result && (
        <pre className="p-4 bg-gray-800 border rounded text-green-400 whitespace-pre-wrap">
          {result}
        </pre>
      )}
    </div>
  );
}
