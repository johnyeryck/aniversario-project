// src/App.tsx
import { useState } from "react";

export default function App() {
  const [nome, setNome] = useState("");

  function confirmarPresenca() {
    if (!nome.trim()) return;
    alert(`${nome} confirmou presença!`);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900 p-4">
      <div className="bg-blue-800 text-white p-8 rounded-3xl shadow-xl w-full max-w-md text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">🎉 Convite de Aniversário 🎂</h1>
        <p className="mb-6 text-sm md:text-base">Dia 25/08 às 19h - Minha Casa</p>

        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full p-3 rounded-lg mb-4 text-black text-sm md:text-base"
        />

        <button
          onClick={confirmarPresenca}
          className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-bold text-sm md:text-base transition"
        >
          Confirmar Presença
        </button>
      </div>
    </div>
  );
}
