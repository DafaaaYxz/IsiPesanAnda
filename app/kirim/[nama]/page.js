"use client";
import { useState } from 'react';

export default function KirimPesan({ params }) {
  const [pesan, setPesan] = useState("");
  const [status, setStatus] = useState("Kirim!");

  const kirimPesan = async () => {
    setStatus("Mengirim...");
    await fetch('/api/simpan', {
      method: 'POST',
      body: JSON.stringify({ penerima: params.nama, isi: pesan }),
    });
    setStatus("Terkirim! ✅");
    setPesan("");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-5">
      <div className="bg-white text-black p-8 rounded-2xl w-full max-w-sm">
        <h2 className="font-bold mb-4">Kirim pesan rahasia ke @{params.nama}</h2>
        <textarea 
          className="w-full h-32 p-4 bg-gray-100 rounded-xl mb-4 outline-none focus:ring-2 ring-black"
          placeholder="Tulis pesan jujur kamu di sini..."
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
        />
        <button 
          onClick={kirimPesan}
          className="w-full bg-black text-white py-4 rounded-full font-bold hover:opacity-80 transition"
        >
          {status}
        </button>
      </div>
    </div>
  );
}
