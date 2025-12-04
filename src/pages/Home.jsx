import { useRef } from "react"
import HeroSection from "../components/HeroSection";
import CTA from "../components/CTA.jsx"
import Rezession from "../components/Rezessionen.jsx";
import  PlatformsComingSoon from "../components/PlatformsComingSoon.jsx"; 


export default function Home() {
    const ctaRef = useRef(null);
    const scrollToCTA = () => {
        ctaRef.current?.scrollIntoView({ behavior: "smooth"});
    };

    return (
        <div>
           
            <HeroSection />
            <CTA ref={ctaRef}/>

            < Rezession />
            <PlatformsComingSoon scrollToCTA={scrollToCTA} />

        </div>

    );
}