import React from "react";

function DetailsDescription({ carDetails }) {
  return (
    <div>
      {carDetails.description ? (
        <div>
          <h2 className="mt-10 font-medium text-2xl">Description</h2>
          <p className="mt-4">{carDetails.description}</p>
        </div>
      ) : (
        <div className="w-full h-[200px] rounded-xl bg-gray-500 mt-10 animate-pulse"></div>
      )}
    </div>
  );
}

export default DetailsDescription;
