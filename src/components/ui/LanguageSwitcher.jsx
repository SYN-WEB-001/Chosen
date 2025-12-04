import React, { useState } from "react";
// Importiere die JSON-Datei
import translations from "../data/translations.json"; 

// Exportiere das translations-Objekt, damit HeroSection darauf zugreifen kann
export const allTranslations = translations; 

export default function LanguageSwitcher({ onLanguageChange }) {
    // 1. STATE FÜR DIE AKTUELLE SPRACHE: Standard ist 'de'
    const [language, setLanguage] = useState("de");

    // 2. LOGIK ZUM SPRACHWECHSEL
    const toggleLanguage = () => {
        // Die neue Sprache, auf die gewechselt werden soll
        const newLang = language === "de" ? "en" : "de";
        
        // Aktualisiere den internen State
        setLanguage(newLang);
        
        // Rufe die übergebene Callback-Funktion auf, um die neue Sprache an die Parent-Komponente zu melden
        if (onLanguageChange) {
            onLanguageChange(newLang);
        }
    };
    
    // Die Sprache, auf die als Nächstes gewechselt wird
    const nextLanguageCode = language === 'de' ? 'en' : 'de';
    const nextLanguageText = allTranslations[nextLanguageCode].languageIconText;
    const currentLanguageText = allTranslations[language].languageIconText;

    return (
        <button
            onClick={toggleLanguage}
            // Tailwind-Klassen für Positionierung und Styling
            className="absolute top-4 right-4 sm:right-6 lg:right-8 z-10 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 hover:bg-white transition shadow-md border border-white/50 flex items-center gap-1"
            title={`Zu ${nextLanguageCode.toUpperCase()} wechseln`}
        >
            {/* Globus-Icon */}
            <span role="img" aria-label="Globus-Icon" className="text-base leading-none">
                🌐
            </span>
            {/* Text der nächsten Sprache (große Bildschirme) */}
            <span className="hidden sm:inline">
                 {nextLanguageText}
            </span>
            {/* Aktuelle Sprache (kleine Bildschirme) */}
            <span className="inline sm:hidden text-xs">
                {currentLanguageText}
            </span>
        </button>
    );
}