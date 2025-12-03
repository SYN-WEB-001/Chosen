import React, { useState } from 'react';

export default function CTA() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [interests, setInterests] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(`Angemeldet mit:\nName: ${name}\nE-Mail: ${email}\nInteressen: ${interests}\n\nDanke für dein Interesse!`);


        setName('');
        setEmail('');
        setInterests('');
    };

    return (

        <div className="  bg-gradient-to-br from-pink-500 to-purple-600  text-white p-6 md:p-10 lg:p-12 rounded-3xl shadow-2xl max-w-6xl mx-auto my-10 border-4">


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

                <div className="flex flex-col space-y-6">


                    <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                        Early Access sichern!
                        <span className="block text-white mt-2">Werde eine*r der ersten Nutzer*innen.</span>
                    </h1>


                    <div className="text-lg md:text-xl opacity-90">
                        <p className="mb-4">
                            Wir verbringen mehr Zeit online als je zuvor - und trotzdem fühlen sich viele Menschen isolierter an.
                            <strong className="block mt-2 text-white">CHOSEN bringt die echten Begegnungen zurück.</strong>
                        </p>
                        <p className="mb-0">
                            Die App zeigt dir Menschen, die zur gleichen Zeit am gleichen Ort sind wie du.
                            Ganz ohne Swipen. Ohne Chat-Bots. Ohne Oberflächlichkeit.
                            Einfach echte Menschen. Echte Nähe. Echt jetzt.
                        </p>
                    </div>
                </div>


                <div className="p-6  bg-gradient-to-br from-pink-500 to-purple-600/70 rounded-2xl self-stretch"> {/* self-stretch damit der Hintergrund die ganze Höhe einnimmt */}
                    <h2 className="text-2xl font-bold mb-4 text-center leading-tight ttext-white">
                        Jetzt unverbindlich vorregistrieren.
                    </h2>

                    <p className="text-center text-base text-white/90 mb-6 leading-relaxed">
                        Sei eine*r der Ersten und teste <strong className='text-white'>CHOSEN</strong>.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">

                        <input
                            type="text"
                            placeholder="Dein Name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-white text-gray-800 placeholder:text-gray-400 border-none text-base p-4 rounded-xl focus:ring-2 focus:ring-amber-400 focus:outline-none transition-all"
                        />

                        <input
                            type="email"
                            placeholder="E-Mail Adresse"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-white text-gray-800 placeholder:text-gray-400 border-none text-base p-4 rounded-xl focus:ring-2 focus:ring-amber-400 focus:outline-none transition-all"
                        />

                        <input
                            type="text"
                            placeholder="Dein Interesse (z.B. Reisen, Essen) - Optional"
                            value={interests}
                            onChange={(e) => setInterests(e.target.value)}
                            className="w-full bg-white text-gray-800 placeholder:text-gray-400 border-none text-base p-4 rounded-xl focus:ring-2 focus:ring-amber-400 focus:outline-none transition-all"
                        />

                        <button
                            type="submit"
                            className="w-full text-lg font-bold text-white bg-gradient-to-br from-pink-500 to-purple-600/70 border-0 py-4 mt-4 rounded-xl shadow-lg uppercase tracking-wider hover:bg-amber-300 hover:shadow-xl hover:scale-[1.01] active:scale-95 transition-all duration-200"
                        >
                            Jetzt Early Access sichern
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}