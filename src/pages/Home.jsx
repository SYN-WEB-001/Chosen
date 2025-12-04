import React, { useState, useCallback } from 'react';
import HeroSection from "../components/HeroSection";

import Rezession from "../components/Rezessionen.jsx";
import BaldVerfuegbar from "../components/BaldVerfügbar.jsx";
import CTA from "../components/CTA.jsx";
import TestimonialsSection from '../components/TestimonialsSection.jsx';

export default function Home() {

       const [appLanguage, setAppLanguage] = useState('de'); 
       const handleLanguageChange = useCallback((newLang) => {
        setAppLanguage(newLang);
    }, []);
    return (
        <div>
            <HeroSection currentLanguage={appLanguage} 
                onLanguageChange={handleLanguageChange}
            />
           <CTA currentLanguage={appLanguage} />

           <TestimonialsSection 
           currentLanguage={appLanguage} 
                onLanguageChange={handleLanguageChange}
            />
            < Rezession />
            <BaldVerfuegbar />
        </div>

    );
}