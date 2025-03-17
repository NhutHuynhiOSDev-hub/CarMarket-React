import React from "react";
import { IoCalendar } from "react-icons/io5";
import { IoIosSpeedometer } from "react-icons/io";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { TbManualGearboxFilled } from "react-icons/tb";

function DetailsHeader({ carDetails }) {
  return (
    <div>
      {carDetails.name ? (
        <div>
          <h2 className="font-bold text-3xl ">{carDetails.name}</h2>
          <p className="text-sm">{carDetails.model}</p>
          <div className="flex gap-2 mt-4">
            <div className="flex rounded-full bg-teal-800 items-center gap-2 py-2 px-3">
              <IoCalendar className="h-4 w-4" />
              <h2 className="text-sm font-medium ">{carDetails.year}</h2>
            </div>
            <div className="flex rounded-full bg-teal-800 items-center gap-2 py-2 px-3">
              <IoIosSpeedometer className="h-4 w-4" />
              <h2 className="text-sm font-medium">{carDetails.miles}</h2>
            </div>
            <div className="flex rounded-full bg-teal-800 items-center gap-2 py-2 px-3">
              <TbManualGearboxFilled className="h-4 w-4" />
              <h2 className="text-sm font-medium">{carDetails.gearType}</h2>
            </div>
            <div className="flex rounded-full bg-teal-800 items-center gap-2 py-2 px-3">
              <BsFillFuelPumpFill className="h-4 w-4" />
              <h2 className="text-sm font-medium">{carDetails.fuelType}</h2>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[200px] rounded-xl bg-gray-500 animate-pulse"></div>
      )}
    </div>
  );
}

export default DetailsHeader;
