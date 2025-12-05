import PhoneMockUp from "./PhoneMockUp";

export default function HeroSection() {
    return (
        <section
            className="hero-section relative w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-cover bg-center  "
            style={{
                backgroundImage: "url('/Hintergrundbild.jpg')",
            }}
        >

            <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]"></div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    <div className="mb-0 lg:mb-1">
                        <div className="w-full lg:w-3/5 text-center lg:text-left text-gray-900 lg:mb-60">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">

                                <span className="text-8xl bg-gradient-to-br from-pink-500 to-purple-600 bg-clip-text text-transparent">
                                    Chosen
                                </span>
                                <span className="text-gray-900"> Für Verbindungen, die zählen.</span>
                            </h1>

                            <h2 className="text-lg sm:text-xl lg:text-2xl mb-8 font-medium text-gray-800 leading-relaxed">
                                Das soziale Netzwerk für tiefgehende Passionen. Schluss mit
                                oberflächlichem Scrollen. Finde dein Tribe – mit Purpose.
                            </h2>
                        </div>


                        <div className="flex flex-col sm:flex-row gap-4 text-center sm:gap-6 justify-center lg:justify-start text-black sm:text-base ">
                            <div className="bg-white/50 p-3 rounded-lg backdrop-blur-md shadow-sm border border-white/20 flex-1">
                                <h1 className="font-bold mb-1">Begegnungen in Echtzeit!</h1>
                                <p>Sehe in Echtzeit, wer am selben Ort ist.</p>
                            </div>
                            <div className="bg-white/50 p-3 rounded-lg backdrop-blur-md shadow-sm border border-white/20 flex-1">
                                <h1 className="font-bold mb-1">Keine Planung!</h1>
                                <p> Starte direkt ein Gespräch ohne Hürden.</p>
                            </div>
                            <div className="bg-white/50 p-3 rounded-lg backdrop-blur-md shadow-sm border border-white/20 flex-1">
                                <h1 className="font-bold mb-1">Finde Leute!</h1>
                                <p> Profil in Sekunden, Kontakte in Minuten.</p>
                            </div>
                        </div>
                    </div>


                    <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
                        <div className="transform scale-90 sm:scale-70  hover:scale-80 vibrate">
                            <PhoneMockUp />
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}