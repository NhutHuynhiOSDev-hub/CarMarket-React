import React from "react";
import Hero from "@/components/Hero/Hero";
import Info from "@/components/Info/Info";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Categories from "@/components/Categories/Categories";
import TopSearchedCars from "@/components/TopSearchedCars/TopSearchedCars";

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
