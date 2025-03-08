import React from "react";
import CarItem from "@/components/ui/CarItem";
import { DummyCarsList } from "@/data/FakerData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function TopSearchedCars() {
  return (
    <div>
      <h2 className="font-bold text-3xl text-center py-20">
        Top Searched Cars
      </h2>

      <Carousel className="px-20">
        <CarouselContent>
          {DummyCarsList.map((item) => (
            <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
              <CarItem car={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default TopSearchedCars;
