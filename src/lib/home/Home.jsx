import React from "react";
import Header from "../header/Header";
import Hero from "../../components/ui/Hero";
import Categories from "../categories/Categories";

function home() {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
    </div>
  );
}

export default home;
