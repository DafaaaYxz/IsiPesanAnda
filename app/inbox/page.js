"use client";
import { useEffect, useState } from 'react';

export default function Inbox() {
  const [pesanMasuk, setPesanMasuk] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const namaUser = urlParams.get('user');
    setUser(namaUser);

    const ambilData = async () => {
      const res = await fetch(`/api/ambil?user=${namaUser}`);
      const data = await res.json();
      setPesanMasuk(data);
    };

    ambilData();
    const interval = setInterval(ambilData, 3000); // Cek pesan baru tiap 3 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <header className="max-w-4xl mx-auto flex justify-between items-center mb-10">
        <h1 className="text-2xl font-black text-yellow-400 italic">INBOX</h1>
        <div className="bg-zinc-800 px-4 py-2 rounded text-xs">User: {user}</div>
      </header>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {pesanMasuk.length === 0 && <p className="text-zinc-600">Belum ada pesan...</p>}
        {pesanMasuk.map((p, i) => (
          <div key={i} className="bg-zinc-900 p-5 rounded-lg border-l-8 border-yellow-400">
            <p className="text-white text-lg">{p.isi}</p>
            <span className="text-xs text-zinc-500 mt-4 block">{new Date(p.tgl).toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
