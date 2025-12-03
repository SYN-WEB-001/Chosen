import React from 'react';
import { FcAndroidOs } from "react-icons/fc";
import apple from '../icon/apple.png';
import windows from '../icon/windows.png';

const PlatformsComingSoon = () => {
  return (

    <div
      className="p-6 rounded-2xl w-full max-w-3xl mx-auto 
                shadow-xl text-white 
                bg-gradient-to-r from-pink-500 to-purple-600 
                font-sans text-center bg-gradient-to-br from-pink-500 to-purple-600  text-white p-6 md:p-10 lg:p-12 rounded-3xl shadow-2xl max-w-6xl mx-auto my-10 border-4">

      <h3 className="text-4xl font-semibold mb-4 text-white">
        Bald Verfügbar !
      </h3>
      <div className="flex justify-center items-center text-lg md:text-xl font-medium space-x-4 divide-x divide-white/50">
        <div className="flex items-center space-x-2 pr-4">
          <img src={apple} alt="Apple" className="w-10 h-10 md:w-6 md:h-6" />
          <span>iOS</span>
        </div>
        <div className="flex items-center space-x-2 px-4">
          <FcAndroidOs className="w-12 h-12 md:w-6 md:h-6" />
          <span>Android</span>
        </div>

        <div className="flex items-center space-x-2 pl-4">
          <img src={windows} alt="Windows" className="w-10 h-10 md:w-6 md:h-6" />
          <span> Windows</span>
        </div>
      </div>
    </div>
  );
};

export default PlatformsComingSoon;