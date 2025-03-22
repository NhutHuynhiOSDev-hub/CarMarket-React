import { Button } from "@/components/ui/button";
import React from "react";

import { Link } from "react-router";

function MyProducts() {
  return (
    <div className="w-full h-full bg-black py-20 px-10 md:px-20 flex items-center justify-end">
      <Link to={"/add-new-car"}>
        <Button>+ Add New Product</Button>
      </Link>
    </div>
  );
}

export default MyProducts;
