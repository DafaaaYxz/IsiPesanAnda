
"use client";
import { useEffect, useState } from 'react';

export default function Inbox() {
  const [pesan, setPesan] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    const url = new URLSearchParams(window.location.search);
    const namaUser = url.get('u');
    setUser(namaUser);

    const ambilPesan = async () => {
      const res = await fetch(`/api/ambil?u=${namaUser}`);
      const data = await res.json();
      setPesan(data);
    };

    ambilPesan();
    const hitung = setInterval(ambilPesan, 3000); // Cek pesan baru tiap 3 detik
    return () => clearInterval(hitung);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-black mb-2 text-blue-500 uppercase italic">Kotak Pesan : {user}</h1>
        <p className="text-zinc-500 mb-8 font-mono">Link kamu: <span className="text-white underline">/kirim/{user}</span></p>

        <div className="space-y-4">
          {pesan.length === 0 && <p className="animate-pulse">Menunggu pesan masuk...</p>}
          
          {pesan.map((p, i) => (
            <div key={i} className="bg-zinc-900 border-2 border-blue-600 p-6 shadow-[5px_5px_0px_0px_#fff]">
              <p className="text-blue-400 text-[10px] mb-2 font-mono uppercase">Pesan Anonim • {new Date(p.tgl).toLocaleString()}</p>
              <p className="text-xl font-bold italic">"{p.pesan}"</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
