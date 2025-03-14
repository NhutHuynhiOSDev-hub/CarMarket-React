import React from "react";
import Header from "../Header/Header";

import { Link } from "react-router";
import { Button } from "@/components/Button";

function Profile() {
  return (
    <div>
      <Header />
      <div className="p-10">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-4xl">My Profile</h2>
          <Link to={"/add-new"}>
            <Button>+ Add New Product</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
