import React from "react";
import { DummyCarsList } from "@/data/FakerData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarItem from "../CarItem";
import { Link } from "react-router";

function TopSearchedCars() {
  return (
    <div>
      <h2 className="font-bold text-3xl text-center py-20">
        Top Searched Cars
      </h2>

      <Carousel className="px-20">
        <CarouselContent>
          {DummyCarsList.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <Link to={`/car/${item.name}`}>
                <CarItem car={item} />p
              </Link>
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
