
"use client";
import { useState } from 'react';

export default function Kirim({ params }) {
  const [isi, setIsi] = useState("");
  const [status, setStatus] = useState("KIRIM ANONIM!");

  const kirimPesan = async () => {
    setStatus("LAGI KIRIM...");
    await fetch('/api/simpan', {
      method: 'POST',
      body: JSON.stringify({ untuk: params.user, pesan: isi }),
    });
    setStatus("BERHASIL TERKIRIM! ✅");
    setIsi("");
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-zinc-900 border-2 border-white p-6 rounded-none">
        <div className="bg-blue-600 text-white p-2 inline-block mb-4 font-bold text-xs">@ {params.user} sedang menunggu pesanmu...</div>
        
        <textarea 
          className="w-full h-40 bg-zinc-800 p-4 text-white border-2 border-zinc-700 focus:border-blue-500 outline-none mb-4"
          placeholder="Tulis pesan rahasia di sini..."
          value={isi}
          onChange={(e) => setIsi(e.target.value)}
        />
        
        <button 
          onClick={kirimPesan}
          className="w-full bg-white text-black font-black py-4 hover:bg-blue-500 hover:text-white transition-all"
        >
          {status}
        </button>
      </div>
    </main>
  );
}
