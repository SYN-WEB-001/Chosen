import testimonialsData from "./data/testimonials.json";

export default function Rezensionen() {
  return (
    <section className="mt-16 py-12 md:py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

      
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Erfahrungsberichte
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsData.map(({ quote, name, location, rating, avatarUrl }, idx) => (

            <div
              key={idx}
              className="flex flex-col h-full p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow rounded-2xl bg-gradient-to-br from-white to-gray-200 text-gray-800 border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={avatarUrl}
                  alt={name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/100x100?text=User"; 
                  }}
                />
                <div>
                  <p className="font-bold text-lg leading-tight">{name}</p>
                  <p className="text-sm text-gray-500">{location}</p>
                </div>
              </div>

              <p className="italic text-gray-700 mb-6 flex-grow leading-relaxed">
                "{quote}"
              </p>

              <div className="flex gap-1 mt-auto">
                {[...Array(rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}