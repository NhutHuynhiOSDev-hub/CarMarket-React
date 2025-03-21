import React from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import { Link, useParams } from "react-router";
import { DummyCarsList } from "@/data/FakerData";
import CarItem from "@/components/CarItem";

function SearchByCategory() {
  const { category } = useParams();
  const filterList = DummyCarsList.filter((item) =>
    item.type.includes(category)
  );

  return (
    <section className="w-full bg-black">
      <Header />
      <div className="flex text-white flex-col items-center justify-center pt-10 md:pt-30 gap-6">
        <SearchBar />
      </div>
      <div className="px-10 md:px-20">
        <h2 className="font-bold text-4xl">{category}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-10 pb-20">
          {filterList.length > 0
            ? filterList.map((item, index) => (
                <Link to={`/car/${item.name}`}>
                  <CarItem key={index} car={item} />
                </Link>
              ))
            : [1, 2, 3, 4, 5, 6].map(() => (
                <div className="h-[200px] rounded-xl bg-gray-500 animate-pulse"></div>
              ))}
        </div>
      </div>
    </section>
  );
}

export default SearchByCategory;
