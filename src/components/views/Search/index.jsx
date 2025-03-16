import CarItem from "@/components/CarItem";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import { DummyCarsList } from "@/data/FakerData";
import React from "react";
import { useSearchParams } from "react-router";

function SearchByOptions() {
  const [searchParams] = useSearchParams();

  const brand = searchParams.get("brand");
  const price = searchParams.get("price");

  const filterList = DummyCarsList.filter(
    (item) => item.brand.includes(brand) && item.price <= price
  );

  return (
    <div>
      <Header />
      <div className="w-ful flex flex-col items-center justify-center  p-10 py-20 gap-6">
        <SearchBar />
      </div>
      <div className="p-20">
        <h2 className="font-bold text-4xl mb-10">Search results</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterList.length > 0
            ? filterList.map((item, index) => (
                <CarItem key={index} car={item} />
              ))
            : [1, 2, 3, 4, 5, 6].map(() => (
                <div className="h-[200px] rounded-xl bg-gray-500 animate-pulse"></div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default SearchByOptions;
