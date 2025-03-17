import { Button } from "@/components/Button";
import React from "react";

function DetailsCarOwner() {
  return (
    <div className="p-5 mt-10 rounded-xl shadow-md flex flex-col gap-2">
      <h2 className="font-medium text-2xl">Ownder Details</h2>
      <img
        src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?cs=srgb&dl=pexels-andrewperformance1-697509.jpg&fm=jpg"
        className="w-30 h-30 rounded-full object-cover"
      />
      <h2 className="font-bold text-xl">Nhut Huynh</h2>
      <h2 className="text-gray-500 font-medium">nhuthq@zigexn.vn</h2>

      <Button className={"w-full mt-5"}>Send Message</Button>
    </div>
  );
}

export default DetailsCarOwner;
