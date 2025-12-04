import React from 'react';
import { DiAndroid } from "react-icons/di";
import { FaApple } from "react-icons/fa";
import { BsWindows } from "react-icons/bs";

const PlatformsComingSoon = ({scrollToCTA}) => {
  return (
    <>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 mt-30">
          Bald verfügbar sei einer der Ersten!
        </h1>
        <p className="text-xl text-center font-bold mt-2">
          Melde dich jetzt an und teste CHOSEN vor dem offiziellen Start.
        </p>
      </div>

      <div
        className="rounded-2xl w-full max-w-3xl mx-auto 
                shadow-xl
                
                font-sans text-center bg-gray-200 p-6 md:p-10 lg:p-12  my-10 border-none">

        <div className="flex justify-center items-center text-lg md:text-xl font-medium space-x-4 divide-x divide-white/50">
          <div className="flex items-center space-x-2 pr-4">
            < FaApple className="w-10 h-10 md:w-14 md:h-14" />
            <span>iOS</span>
          </div>
          <div className="flex items-center space-x-2 px-4">
            <DiAndroid className="w-10 h-10 md:w-14 md:h-14" />
            <span>Android</span>
          </div>

          <div className="flex items-center space-x-2 pl-4">
            <BsWindows className="w-10 h-10 md:w-14 md:h-14" />
            <span> Windows</span>
          </div>
        </div>
      </div>
       <button
        type="button"
        onClick={scrollToCTA}
        className="btn text-lg font-bold text-white border-none h-auto p-4 rounded-xl shadow-lg m-auto flex justify-center items-center mb-10"
        style={{ background: 'linear-gradient(145deg,#8a5ee0,#cc69e7)', boxShadow:'0 5px 15px rgba(0,0,0,0.2)'}}
      >
        JETZT REGISTRIEREN
      </button>
     
    </>
  );
};

export default PlatformsComingSoon;