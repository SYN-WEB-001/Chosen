import PhoneMockUp from "./PhoneMockUp";


export default function HeroSection() {
    return (
        <section
            className="hero-section relative flex flex-row text-black py-20 overflow-hidden"
            style={{
                backgroundImage: "url('/Hintergrundbild.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            <div className="relative container mx-auto px-6">
                <h1 className="text-4xl font-bold mb-4">Chosen: Für Verbindungen, die zählen.</h1>
                <h2 className="text-lg mb-8">
                    Das soziale Netzwerk für tiefgehende Passionen. Schluss mit oberflächlichem Scrollen.
                    Finde dein Tribe – mit Purpose.
                </h2>
            </div>
            <div className="relative mt-12 flex mr-40">
                <PhoneMockUp />
            </div>
        </section>
    );
}



