import React from "react";
import Search from "../Search";

function Hero() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-ful p-10 py-20 gap-6">
        <h2 className="text-lg">
          Find cars for sale and cars for rent near you
        </h2>
        <h2 className="text-[60px] font-bold text-center">
          Find Your Dream Cars
        </h2>
        <Search />
        <img src="/src/assets/images/tesla.png" className="mt-10" />
      </div>
    </div>
  );
}

export default Hero;
