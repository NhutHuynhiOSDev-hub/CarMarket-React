import React, { useState } from "react";
import { Link } from "react-router";
import { IoSearch } from "react-icons/io5";
import { CarModel, Pricing } from "@/data/Data";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SearchBar() {
  const [isNew, setIsNew] = useState(null);
  const [brand, setBrand] = useState(null);
  const [price, setPrice] = useState(null);

  return (
    <div className="flex flex-col md:flex-row gap-10 p-5 my-16 w-[60%] bg-[#1a1a1a] rounded-md md:rounded-full items-center">
      <Select onValueChange={(value) => setIsNew(value)}>
        <SelectTrigger className="w-full text-lg shadow-none border-2 border-white md:border-none">
          <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent className="bg-[#1a1a1a] border-non">
          <SelectItem
            value={true}
            className={"hover:bg-teal-900 transition-all duration-300"}
          >
            New
          </SelectItem>
          <SelectItem
            value={false}
            className={"hover:bg-teal-900 transition-all duration-300"}
          >
            Used
          </SelectItem>
        </SelectContent>
      </Select>
      <Select onValueChange={(value) => setBrand(value)}>
        <SelectTrigger className="w-full text-lg shadow-none border-2 border-white md:border-none">
          <SelectValue placeholder="Brand" />
        </SelectTrigger>
        <SelectContent className="bg-[#1a1a1a] border-none">
          {CarModel.map((item, index) => (
            <SelectItem
              key={index}
              value={item.brand}
              className={"hover:bg-teal-900 transition-all duration-300"}
            >
              {item.brand}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select onValueChange={(value) => setPrice(value)}>
        <SelectTrigger className="w-full text-lg shadow-none border-2 border-white md:border-none">
          <SelectValue placeholder="Price" />
        </SelectTrigger>
        <SelectContent className="bg-[#1a1a1a] border-none">
          {Pricing.map((item, index) => (
            <SelectItem
              key={index}
              value={item.amount}
              className={"hover:bg-teal-900 transition-all duration-300"}
            >
              {"$" + item.amount}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Link to={`/search/?new=${isNew}&brand=${brand}&price=${price}`}>
        <IoSearch className="p-3 text-[50px] rounded-full bg-white text-[#1a1a1a] hover:scale-105 transition-all cursor-pointer" />
      </Link>
    </div>
  );
}

export default SearchBar;
