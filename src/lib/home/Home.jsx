import React from "react";
import Header from "../header/Header";
import Hero from "../../components/Hero";
import Categories from "../categories/Categories";
import TopSearchedCars from "../topSearchedCars/TopSearchedCars";
import Info from "../info/Info";
import Footer from "../footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <TopSearchedCars />
      <Info />
      <Footer />
    </div>
  );
}

export default Home;
