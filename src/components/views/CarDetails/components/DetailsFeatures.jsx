import React from "react";
import { FaCheck } from "react-icons/fa6";

const DetailsFeatures = ({ carDetails }) => {
  return (
    <div>
      {carDetails.features.features.length > 0 ? (
        <div className="mt-10">
          <h2 className="font-medium text-2xl">Features</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-3">
            {carDetails.features.features.map((item, index) => (
              <div
                key={index}
                className="flex flex-row gap-2 items-center  justify-start"
              >
                <FaCheck className="text-lg p-1 rounded-full bg-amber-600" />
                <p className="line-clamp-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full h-[200px] rounded-xl bg-gray-500 animate-pulse mt-10"></div>
      )}
    </div>
  );
};

export default DetailsFeatures;
