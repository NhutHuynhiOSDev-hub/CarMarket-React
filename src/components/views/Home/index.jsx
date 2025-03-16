import React from "react";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Categories from "@/components/Categories";
import TopSearchedCars from "@/components/TopSearchedCars";

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
