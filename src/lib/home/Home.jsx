import React from "react";
import Header from "../header/Header";
import Hero from "../../components/ui/Hero";
import Categories from "../categories/Categories";
import TopSearchedCars from "../topSearchedCars/TopSearchedCars";

function home() {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <TopSearchedCars />
    </div>
  );
}

export default home;
