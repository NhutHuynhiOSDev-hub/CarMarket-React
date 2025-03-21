import React from "react";
import { CarCategories } from "@/data/Data";
import { Link } from "react-router";
function Categories() {
  return (
    <div className="w-full bg-black px-10 md:px-20">
      <h2 className="font-bold text-3xl text-center my-20">
        Browse by categories
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 justify-center gap-3 md:gap-6">
        {CarCategories.map((item, index) => (
          <Link to={`/search/${item.name}`} key={index}>
            <div
              key={index}
              className="flex flex-col items-center rounded-md bg-[#1a1a1a] p-2 md:p-5 hover:scale-110 transition-all cursor-pointer gap-2"
            >
              <img src={item.icon} className="w-[30px] md:w-[50px]" />
              <h2 className="text-sm text-center">{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
