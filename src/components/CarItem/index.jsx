import React from "react";
import { IoIosSpeedometer } from "react-icons/io";
import { RxOpenInNewWindow } from "react-icons/rx";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { Separator } from "@/components/ui/separator";
import { TbManualGearboxFilled } from "react-icons/tb";

function CarItem({ car }) {
  return (
    <div className="w-full bg-[#1a1a1a] flex flex-col justify-between rounded-xl hover:bg-gray-900 transition-all duration-300 cursor-pointer">
      <div className="relative overflow-hidden">
        {car.isNew && (
          <div className="absolute right-[-24px] top-2 w-24 h-8 bg-gray-700 text-white text-center text-sm font-bold transform rotate-45  flex items-center justify-center">
            New
          </div>
        )}
        <img
          src={car.image}
          height={250}
          width={"100%"}
          className="rounded-t-xl w-full"
        />
      </div>

      <div className="flex flex-col p-4">
        <h2 className="font-bold text-lg text-white mt-4"> {car.name}</h2>
        <Separator className="bg-gray-400 my-4" />
        <div className="flex flex-row items-center justify-between py-2">
          <div className="flex flex-col lg:flex-row items-center gap-2">
            <BsFillFuelPumpFill />
            <h2 className="text-sm text-center">{car.miles}</h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-2">
            <IoIosSpeedometer />
            <h2 className="text-sm text-center">{car.fuelType}</h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-2">
            <TbManualGearboxFilled />

            <h2 className="text-sm text-center">{car.gearType}</h2>
          </div>
        </div>
        <Separator className="bg-gray-400 my-4" />
        <div className="flex items-center justify-between gap-2">
          <h2 className="font-bold text-xl">${car.price}</h2>
          <h2 className="text-xs md:text-sm font-semibold flex flex-row items-center gap-2">
            {" "}
            <RxOpenInNewWindow /> Details
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CarItem;
