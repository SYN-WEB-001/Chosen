
import PhoneMockUp from "../components/PhoneMockUp"; 
// Importiere den LanguageSwitcher und die Translationsdaten
import LanguageSwitcher, { allTranslations } from "../components/ui/LanguageSwitcher"; 


export default function HeroSection({ currentLanguage, onLanguageChange }) {
    
    // Lade die aktuellen Texte basierend auf der Prop
    const texts = allTranslations[currentLanguage];

    return (
        <section
            className="hero-section relative w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: "url('/Hintergrundbild.jpg')",
            }}
        >
            <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]"></div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                {/* 
                Der LanguageSwitcher steuert jetzt den Zustand in der Parent-Komponente 
                über die onLanguageChange Prop. 
                */}
                <LanguageSwitcher onLanguageChange={onLanguageChange} />

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* ... Rest der HeroSection-UI verwendet weiterhin {texts.xxx} ... */}
                    <div className="mb-0 lg:mb-1 mt-12 sm:mt-8 lg:mt-0">
                        <div className="w-full lg:w-3/5 text-center lg:text-left text-gray-900 lg:mb-60">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                <span className="bg-gradient-to-br from-pink-500 to-purple-600 bg-clip-text text-transparent text-5xl">
                                    {texts.heroTitlePart1}
                                </span>
                                <span className="text-gray-900">{texts.heroTitlePart2}</span>
                            </h1>

                            <h2 className="text-lg sm:text-xl lg:text-2xl mb-8 font-medium text-gray-800 leading-relaxed">
                                {texts.heroSubtitle}
                            </h2>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start font-semibold text-black sm:text-base ">
                            <div className="bg-white/50 p-3 rounded-lg backdrop-blur-md shadow-sm border border-white/20 flex-1">
                                <p>{texts.feature1}</p>
                            </div>
                            <div className="bg-white/50 p-3 rounded-lg backdrop-blur-md shadow-sm border border-white/20 flex-1">
                                <p>{texts.feature2}</p>
                            </div>
                            <div className="bg-white/50 p-3 rounded-lg backdrop-blur-md shadow-sm border border-white/20 flex-1">
                                <p>{texts.feature3}</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
                        <div className="transform scale-90 sm:scale-70">
                            <PhoneMockUp />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}