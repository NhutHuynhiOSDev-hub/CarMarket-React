import React from "react";
import { CarCategories } from "@/data/Data";
import { Link } from "react-router";
function Categories() {
  return (
    <div>
      <h2 className="font-bold text-3xl text-center py-20">
        Browse by categories
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 justify-center gap-6 px-20">
        {CarCategories.map((item, index) => (
          <Link to={`/search/${item.name}`} key={index}>
            <div
              key={index}
              className="flex flex-col items-center rounded-md bg-[#343131] p-5 hover:scale-110 transition-all cursor-pointer"
            >
              <img src={item.icon} className="w-[40px] h-[40px]" />
              <h2 className="text-center mt-2">{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
