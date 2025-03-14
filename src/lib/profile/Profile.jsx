import React from "react";
import Header from "../header/Header";
import { Button } from "@/components/Button";
import { Link } from "react-router";

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
