import React, { useState } from 'react';
// Importiere die Lokalisierungsdaten
import ctaTranslations from './data/cta-translations.json';

// Prop: 'currentLanguage' (z.B. 'de' oder 'en')
export default function CTA({ currentLanguage = 'de' }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [interests, setInterests] = useState('');

    // Wähle die richtigen Texte basierend auf der aktuellen Sprache
    const texts = ctaTranslations[currentLanguage] || ctaTranslations['de'];

    // Hilfsfunktion zur Ersetzung von Platzhaltern im Alert-Text
    const formatAlertMessage = () => {
        let message = texts.alertMessage;
        message = message.replace('{name}', name);
        message = message.replace('{email}', email);
        message = message.replace('{interests}', interests || '-'); // Füge '-' ein, falls Interessen leer sind
        return message;
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        // Zeige den übersetzten Alert
        alert(formatAlertMessage());

        // Formular zurücksetzen
        setName('');
        setEmail('');
        setInterests('');
    };

    return (
        <>
            <div>

            </div>

            <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white p-6 md:p-10 lg:p-12 rounded-3xl shadow-2xl max-w-6xl mx-auto my-10 border-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

                    <div className="flex flex-col space-y-6">
                        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                            {texts.title1}
                            <span className="block text-white mt-2">{texts.title2}</span>
                        </h1>

                        <div className="text-lg md:text-xl opacity-90">
                            <p className="mb-4">
                                {texts.p1_part1}
                                <strong className="block mt-2 text-white">{texts.p1_strong}</strong>
                            </p>
                            <p className="mb-0">
                                {texts.p2}
                            </p>
                        </div>
                    </div>


                    <div className="p-6 bg-gradient-to-br from-pink-500 to-purple-600/70 rounded-2xl self-stretch">
                        <h2 className="text-2xl font-bold mb-4 text-center leading-tight ttext-white">
                            {texts.formTitle}
                        </h2>

                        <p className="text-center text-base text-white/90 mb-6 leading-relaxed">
                            {texts.formSubtitle.split('CHOSEN')[0]}
                            <strong className='text-white'>CHOSEN</strong>
                            {texts.formSubtitle.split('CHOSEN')[1]}
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                            <input
                                type="text"
                                placeholder={texts.inputNamePlaceholder}
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-white text-gray-800 placeholder:text-gray-400 border-none text-base p-4 rounded-xl focus:ring-2 focus:ring-amber-400 focus:outline-none transition-all"
                            />

                            <input
                                type="email"
                                placeholder={texts.inputEmailPlaceholder}
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-white text-gray-800 placeholder:text-gray-400 border-none text-base p-4 rounded-xl focus:ring-2 focus:ring-amber-400 focus:outline-none transition-all"
                            />

                            <input
                                type="text"
                                placeholder={texts.inputInterestsPlaceholder}
                                value={interests}
                                onChange={(e) => setInterests(e.target.value)}
                                className="w-full bg-white text-gray-800 placeholder:text-gray-400 border-none text-base p-4 rounded-xl focus:ring-2 focus:ring-amber-400 focus:outline-none transition-all"
                            />

                            <button
                                type="submit"
                                className="w-full text-lg font-bold text-white bg-gradient-to-br from-pink-500 to-purple-600/70 border-0 py-4 mt-4 rounded-xl shadow-lg uppercase tracking-wider hover:bg-amber-300 hover:shadow-xl hover:scale-[1.01] active:scale-95 transition-all duration-200"
                            >
                                {texts.buttonText}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}