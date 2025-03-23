import React from "react";
import SearchBar from "../SearchBar";

function Hero() {
  return (
    <section className="w-full bg-black pt-20 px-10 md:px-20">
      <div className="flex text-white flex-col items-center justify-center py-10 md:py-30 gap-6">
        <h2 className="text-lg">Driven by Quality, Powered by Trust.</h2>
        <h2 className="text-[60px] font-bold text-center">
          Find Your Dream Car Today!
        </h2>
        <SearchBar />
        <img src="/src/assets/images/tesla.png" className="mb-10" />
      </div>
    </section>
  );
}

export default Hero;
