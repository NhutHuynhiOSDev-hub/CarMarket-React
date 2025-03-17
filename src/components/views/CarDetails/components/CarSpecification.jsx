import React from "react";
import CarSpecificationJSON from "@/data/CarSpecification";
import { IoInformationCircle } from "react-icons/io5";

function CarSpecification({ carDetails }) {
  return (
    <div className="p-5 mt-10">
      <h2 className="font-medium text-2xl">Ownder Details</h2>
      {CarSpecificationJSON.map((item, index) => (
        <div
          key={index}
          className="flex flex-row items-center justify-between mt-2"
        >
          <div className="flex flex-row gap-2 items-center ">
            <IoInformationCircle />
            <h2>{item.label}</h2>
          </div>
          <h2>{carDetails[item.name]}</h2>
        </div>
      ))}
    </div>
  );
}

export default CarSpecification;
