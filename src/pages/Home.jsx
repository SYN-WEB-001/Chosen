import HeroSection from "../components/HeroSection";
import EarlyAccessForm from "../components/EarlyAccessForm.jsx";
import Rezession from "../components/Rezessionen.jsx";
import BaldVerfuegbar from "../components/BaldVerfügbar.jsx";
import CTA from "../components/CTA.jsx";
export default function Home() {
    return (
        <div>
            <HeroSection />
            <CTA />
            {/* <EarlyAccessForm /> */}
            < Rezession />
            <BaldVerfuegbar />
        </div>

    );
}