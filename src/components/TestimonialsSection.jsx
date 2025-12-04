import React from 'react';
// Importiere die neue, lokalisierte Datenstruktur
import testimonials from './data/testimonials.json'; 

// Übersetzungen für den Sektions-Header (bleibt gleich)
// const testimonials = {
//     de: {
//         title: "Was unsere Early Birds sagen.",
//         subtitle: "Echte Stimmen. Echte Verbindungen. Echte Erfahrungen."
//     },
//     en: {
//         title: "What our Early Birds say.",
//         subtitle: "Real voices. Real connections. Real experiences."
//     }
// };

// Hilfskomponente für die Sterne-Bewertung (bleibt gleich)
// const StarRating = ({ rating }) => {
//     const totalStars = 5;
//     const filledStars = Array(rating).fill('★');
//     const emptyStars = Array(totalStars - rating).fill('☆');

//     return (
//         <div className="flex text-amber-400 text-xl leading-none">
//             <span aria-hidden="true" className="text-pink-500">{filledStars.join('')}</span>
//             <span aria-hidden="true" className="text-gray-300">{emptyStars.join('')}</span>
//             <span className="sr-only">Bewertung: {rating} von 5 Sternen</span>
//         </div>
//     );
// };


export default function TestimonialsSection({ currentLanguage = 'de' }) {
    
    // Wähle die richtigen Header-Texte basierend auf der aktuellen Sprache
    const headerTexts = TestimonialsSection[currentLanguage] || TestimonialsSection['de'];

    // Bereite die Testimonial-Daten für das Rendering vor:
    // Mappe über die Schlüssel des JSON-Objekts und extrahiere die sprachspezifischen Texte.
    const testimonialToRender = Object.values(testimonials).map(item => ({
        // Lade die sprachspezifischen Texte (Quote, Name, Location)
        ...item[currentLanguage] || item['de'], 
        // Lade die sprachunabhängigen Daten (Rating, Avatar)
        rating: item.rating,
        avatarUrl: item.avatarUrl
    }));


    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                
                {/* Header-Sektion */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                        {headerTexts.title}
                    </h2>
                    <p className="text-xl text-gray-600">
                        {headerTexts.subtitle}
                    </p>
                </div>
                
                {/* Testimonial-Gitter */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Rendere die vorbereiteten, sprachspezifischen Testimonials */}
                    {testimonialToRender.map((testimonial, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col"
                        >
                            
                            {/* Sterne-Bewertung */}
                            <div className="mb-4">
                                <StarRating rating={testimonial.rating} />
                            </div>
                            
                            {/* Zitat */}
                            <blockquote className="text-lg text-gray-700 italic mb-6 flex-grow">
                                "{testimonial.quote}"
                            </blockquote>

                            {/* Profil-Info */}
                            <div className="flex items-center mt-auto">
                                <img 
                                    src={testimonial.avatarUrl} 
                                    alt={testimonial.name} 
                                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-pink-500 shadow-md"
                                />
                                <div>
                                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}