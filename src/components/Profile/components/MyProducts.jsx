import React from "react";

import { Link } from "react-router";
import { Button } from "@/components/Button";

function MyProducts() {
  return (
    <div className="mt-10 flex items-center justify-end">
      <Link to={"/add-new-car"}>
        <Button>+ Add New Product</Button>
      </Link>
    </div>
  );
}

export default MyProducts;
