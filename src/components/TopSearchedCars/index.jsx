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
    <section className="w-full bg-black px-10 md:px-20">
      <h2 className="font-bold text-3xl text-center my-20">
        Top Searched Cars
      </h2>
      <div>
        <Carousel>
          <CarouselContent>
            {DummyCarsList.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/3 xl:basis-1/4"
              >
                <Link to={`/car/${item.name}`}>
                  <CarItem car={item} />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

export default TopSearchedCars;
