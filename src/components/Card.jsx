import mockProfiles from "../components/data/mockProfiles.json";
import { Heart, X } from "lucide-react";
import { useState } from "react";

export default function Card() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const currentProfile = mockProfiles[currentIndex];
  const hasMoreProfiles = currentIndex < mockProfiles.length;

 const handleNextProfile = () => {
  setIsLiked(false);

  setCurrentIndex((prev) => {
    if (prev === mockProfiles.length - 1) {
      return 0;      
    }
    return prev + 1; 
  });
};


  const handleLike = () => {
    setIsLiked(true);
    setTimeout(() => {
      handleNextProfile();
    }, 500);
  };

  const handleSkip = () => {
    handleNextProfile();
  };

  return (
    <div className="w-full h-full flex flex-col justify-between">

    
      <div className="card shadow-xl rounded-xl overflow-hidden bg-white flex-1 flex flex-col">

        
        {isLiked && (
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <Heart
              className="text-red-500 w-28 h-28 opacity-0 animate-pulse-grow"
              fill="currentColor"
            />
          </div>
        )}

        
        {hasMoreProfiles ? (
          <>
           
            <figure className="w-full flex-1">
              <img
                src={currentProfile.imageUrl}
                alt={currentProfile.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/300x350/6B7280/white?text=Fehler";
                }}
              />
            </figure>

           
            <div className="p-4 bg-white">
              <h2 className="text-xl font-bold text-gray-800">
                {currentProfile.name}
              </h2>
              <p className="text-gray-500">{currentProfile.location}</p>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <Heart className="w-16 h-16 text-pink-500 mb-4" />
            <h2 className="text-xl font-bold">Alle Profile durchgesehen!</h2>
            <button className="btn btn-primary mt-6" onClick={() => setCurrentIndex(0)}>
              Neu Starten
            </button>
          </div>
        )}
      </div>

     
      {hasMoreProfiles && (
        <div className="flex w-full mt-4 space-x-3 ">

          <button
            className="btn btn-outline flex-1 m-2 rounded-xl"
            onClick={handleSkip}
          >
            <X className="w-5 h-5 mr-2 " />
            < div className="sm:hidden md:block">Skip</div> 
          </button>

          <button
            className="btn flex-1 text-white bg-gradient-to-r from-pink-500 to-purple-600 border-0 hover:from-pink-600 hover:to-purple-700 shadow-md m-2 rounded-xl"
            onClick={handleLike}
          >
            <Heart
              className={`w-5 h-5 mr-2 ${isLiked ? "fill-white" : "fill-none"} transition`}
              stroke="currentColor"
            />
            Like
          </button>

        </div>
      )}

    </div>
  );
}
