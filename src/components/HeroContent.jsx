import React from "react";

function HeroContent({ onButtonClick }) {
  return (
    <div className="heroContent w-full h-full bg-gradient-to-r from-violet-200 to-pink-200 flex items-center justify-center relative flex-col gap-10">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="font-playwrite text-4xl md:text-7xl text-center">
          Happy Birthday!
        </h1>
        <h2 className="font-playwrite text-3xl md:text-5xl text-center">
          Alsa
        </h2>
      </div>

      <button
        onClick={onButtonClick}
        className="p-4 bg-pink-200 text-white rounded-full hover:bg-pink-300 transition duration-300 ease-in-out shadow-lg shadow-pink-300/50"
      >
        Click Here
      </button>
    </div>
  );
}

export default HeroContent;
