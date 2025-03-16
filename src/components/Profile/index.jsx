import React from "react";
import Header from "../Header";

import { Link } from "react-router";
import { Button } from "@/components/Button";
import { doSignOut } from "@/services/firebase/auth";
import { useAuth } from "@/context";

function Profile() {
  const { currentUser } = useAuth();
  const onLogout = () => {
    doSignOut();
  };
  return (
    <div>
      <Header />
      <div className="p-10">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-4xl">
            Hello{" "}
            <span>
              {currentUser.displayName
                ? currentUser.displayName
                : currentUser.email}
            </span>
          </h2>
          <div className="flex flex-row items-center justify-between gap-4">
            <Link to={"/add-new"}>
              <Button>+ Add New Product</Button>
            </Link>
            <Button onClick={onLogout}>Log out</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
