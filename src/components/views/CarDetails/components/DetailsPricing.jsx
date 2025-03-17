import { Button } from "@/components/Button";
import React from "react";
import { IoPricetag } from "react-icons/io5";

function DetailsPricing({ carDetails }) {
  return (
    <div>
      {carDetails.price > 0 ? (
        <div>
          <h2 className="font-medium">Our price</h2>
          <h2 className="font-bold text-4xl">${carDetails.price}</h2>
          <Button className={"w-full mt-4"}>
            <IoPricetag />
            Make an order
          </Button>
        </div>
      ) : (
        <div className="w-full h-[200px] rounded-xl bg-gray-500 animate-pulse mt-10"></div>
      )}
    </div>
  );
}

export default DetailsPricing;
