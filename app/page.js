
"use client";
import { useState } from 'react';

export default function Home() {
  const [nama, setNama] = useState("");

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      {/* BOX UTAMA */}
      <div className="w-full max-w-sm border-4 border-blue-600 p-8 bg-zinc-900 shadow-[10px_10px_0px_0px_rgba(37,99,235)]">
        <h1 className="text-4xl font-black mb-6 uppercase tracking-tighter">Bikin <span className="text-blue-500">Link</span> Kamu!</h1>
        
        <p className="text-sm mb-4 text-zinc-400 font-mono">Tulis username untuk mulai:</p>
        
        <input 
          className="w-full p-4 bg-black border-2 border-zinc-700 mb-6 text-white focus:border-blue-500 outline-none font-bold"
          placeholder="username_kamu"
          onChange={(e) => setNama(e.target.value)}
        />
        
        <button 
          onClick={() => window.location.href = `/inbox?u=${nama}`}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 uppercase transition-all active:translate-y-1"
        >
          GAS BUAT LINK!
        </button>
      </div>
    </main>
  );
}
