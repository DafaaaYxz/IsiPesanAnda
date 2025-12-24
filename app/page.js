"use client";
import { useState } from 'react';

export default function Home() {
  const [nama, setNama] = useState("");

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-5">
      <h1 className="text-4xl font-black mb-2 text-yellow-400">SIAPA.SAYA?</h1>
      <p className="mb-8 text-gray-400 text-center">Terima pesan anonim dengan gaya keren.</p>
      
      <div className="bg-zinc-900 p-6 rounded-lg w-full max-w-sm border-t-4 border-yellow-400">
        <label className="block mb-2 text-sm">Masukkan Username Kamu:</label>
        <input 
          className="w-full p-3 bg-black border border-zinc-700 rounded mb-4 focus:border-yellow-400 outline-none"
          placeholder="contoh: budi_keren"
          onChange={(e) => setNama(e.target.value)}
        />
        <button 
          onClick={() => window.location.href = `/inbox?user=${nama}`}
          className="w-full bg-yellow-400 text-black font-bold py-3 rounded hover:bg-yellow-300"
        >
          BUAT LINK INBOX!
        </button>
      </div>
    </div>
  );
}
