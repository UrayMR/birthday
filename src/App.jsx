import React, { useState } from "react";
import MainContent from "./components/MainContent";
import HeroContent from "./components/HeroContent";

function App() {
  const [showHero, setShowHero] = useState(true);

  const handleHeroClick = () => {
    setShowHero(false);
  };

  return (
    <>
      <header>
        <nav></nav>
      </header>

      <main className="overflow-x-hidden overflow-y-hidden">
        <section className="hero h-[100dvh] flex items-center justify-center">
          {showHero ? (
            <HeroContent onButtonClick={handleHeroClick} />
          ) : (
            <MainContent />
          )}
        </section>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
