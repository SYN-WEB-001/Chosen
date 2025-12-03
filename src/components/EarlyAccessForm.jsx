import React, { useState } from 'react';

export default function EarlyAccessForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Angemeldet mit:\nName: ${name}\nE-Mail: ${email}\nInteressen: ${interests}`);
  };

  return (
    <div className="flex justify-center w-full px-4">
      <div
        className="
            relative w-full max-w-md 
            mt-10 md:mt-20 mb-10
            p-6 md:p-10
            rounded-3xl 
            text-white 
            bg-gradient-to-br from-pink-500 to-purple-600 
            shadow-2xl font-sans"
        style={{
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)', // Etwas stärkerer Schatten für Tiefe
        }}
      >
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center leading-tight">
          Jetzt unverbindlich vorregistrieren.
        </h2>
        
        <p className="text-center text-sm md:text-base text-white/90 mb-6 md:mb-8 leading-relaxed">
          Sei einer der Ersten und teste Chosen – die App, die dich mit Menschen verbindet,
          die gerade jetzt in deiner Nähe sind.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          
          <input
            type="text"
            placeholder="Dein Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="
                input w-full bg-white text-gray-800 
                placeholder:text-gray-400
                border-none text-base p-4 rounded-xl
                focus:ring-2 focus:ring-pink-300 focus:outline-none transition-all"
          />

          <input
            type="email"
            placeholder="E-Mail Adresse"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
                input w-full bg-white text-gray-800 
                placeholder:text-gray-400
                border-none text-base p-4 rounded-xl 
                focus:ring-2 focus:ring-pink-300 focus:outline-none transition-all"
          />

          <input
            type="text"
            placeholder="Dein Interesse (z.B. Reisen, Essen)"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            className="
                input w-full bg-white text-gray-800 
                placeholder:text-gray-400
                border-none text-base p-4 rounded-xl
                focus:ring-2 focus:ring-pink-300 focus:outline-none transition-all"
          />

          <button
            type="submit"
            className="
                btn w-full text-lg font-bold 
                text-white border-0 py-4 mt-2 rounded-xl
                shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-200 bg-gradient-to-br from-pink-500 to-purple-600"
            
          >
            Benachrichtigen Sie mich
          </button>
        </form>
      </div>
    </div>
  );
}