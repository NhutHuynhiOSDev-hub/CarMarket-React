import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoSearch } from "react-icons/io5";
import { Separator } from "@/components/ui/separator";

import React from "react";
import { CarModel, Pricing } from "@/data/Data";

function Search() {
  return (
    <div className="flex flex-col md:flex-row gap-10 px-5 itemsce w-[60%] p-5 bg-[#1a1a1a] rounded-md md:rounded-full items-center">
      <Select>
        <SelectTrigger className="w-full text-lg shadow-none outline-none md:border-non">
          <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent className="bg-[#1a1a1a] border-none">
          <SelectItem value="light">New</SelectItem>
          <SelectItem value="dark">Old</SelectItem>
        </SelectContent>
      </Select>
      <Separator orientation="vertical" />
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full text-lg shadow-none">
          <SelectValue placeholder="Brand" />
        </SelectTrigger>
        <SelectContent className="bg-[#1a1a1a] border-none">
          {CarModel.map((item, index) => (
            <SelectItem key={index} value={index}>
              {item.brand}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Separator orientation="vertical" />
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full text-lg shadow-none">
          <SelectValue placeholder="Price" />
        </SelectTrigger>
        <SelectContent className="bg-[#1a1a1a] border-none">
          {Pricing.map((item, index) => (
            <SelectItem key={index} value={index}>
              {item.amount}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div>
        <IoSearch className="p-3 text-[50px] rounded-full bg-white text-[#1a1a1a] hover:scale-105 transition-all cursor-pointer" />
      </div>
    </div>
  );
}

export default Search;
