import { Button } from "@/components/ui/button";
import React from "react";

import { Link } from "react-router";

function MyProducts() {
  return (
    <div className="flex items-center justify-end">
      <Link to={"/add-new-car"}>
        <Button
          className={
            "font-medium h-[40px] text-sm hover:bg-white hover:text-black transition-all duration-300 text-white bg-[#1a1a1a] my-10"
          }
        >
          + Add New Product
        </Button>
      </Link>
    </div>
  );
}

export default MyProducts;
