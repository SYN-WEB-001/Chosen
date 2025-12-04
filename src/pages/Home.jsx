import HeroSection from "../components/HeroSection";

import Rezession from "../components/Rezessionen.jsx";
import BaldVerfuegbar from "../components/BaldVerfügbar.jsx";
import CTA from "../components/CTA.jsx";
export default function Home() {
    return (
        <div>
            <HeroSection />
            <CTA />
         
            < Rezession />
            <BaldVerfuegbar />
        </div>

    );
}