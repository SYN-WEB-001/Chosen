import PhoneMockUp from "./PhoneMockUp";

export default function HeroSection() {
    return (
        <section className="hero-section flex flex-row text-black bg-gray-100 py-20">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold mb-4">Chosen: Für Verbindungen, die zählen.</h1>
                <h2 className="text-lg mb-8">Das soziale Netzwerk für tiefgehende Passionen. Schluss mit oberflächlichem Scrollen. Finde dein Tribe – mit Purpose.</h2>
                <a href="#get-started" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">Get Started</a>
            </div>
            <div className="mt-12 flex  mr-40">
                <PhoneMockUp />
            </div>
        </section>
    );
}