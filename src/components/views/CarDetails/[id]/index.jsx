import Header from "@/components/Header";
import { DummyCarDetails } from "@/data/FakerData";
import React from "react";
import DetailsHeader from "../components/DetailsHeader";
import DetailsImage from "../components/DetailsImage";
import DetailsDescription from "../components/DetailsDescription";
import DetailsFeatures from "../components/DetailsFeatures";
import DetailsPricing from "../components/DetailsPricing";
import CarSpecification from "../components/CarSpecification";
import DetailsCarOwner from "../components/DetailsCarOwner";
import FinancialCalculator from "../components/FinancialCalculator";

function CarDetails() {
  const carDetails = DummyCarDetails;

  return (
    <div className="w-full h-full bg-black">
      <Header />
      <div className="py-10 px-10 md:px-20">
        <DetailsHeader carDetails={carDetails[0]} />
        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
          <div className="col-span-2">
            <DetailsImage />
            <DetailsDescription carDetails={carDetails[0]} />
            <DetailsFeatures carDetails={carDetails[0]} />
            <FinancialCalculator carDetails={carDetails[0]} />
          </div>
          <div>
            <DetailsPricing carDetails={carDetails[0]} />
            <CarSpecification carDetails={carDetails[0]} />
            <DetailsCarOwner />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
