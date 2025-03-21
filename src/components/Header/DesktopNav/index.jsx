import React from "react";

import { useAuth } from "@/context";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

function DesktopNav() {
  const { userLoggedIn } = useAuth();
  return (
    <div className="w-full hidden md:flex shadow-s">
      <ul className="w-full hidden md:flex items-center justify-center gap-16">
        <Link to={"/"}>
          <li className="font-medium hover:scale-110 hover:text-gray-400 transition-all cursor-pointer hover:text-primary">
            Home
          </li>
        </Link>
        <li className="font-medium hover:scale-110 hover:text-gray-400 transition-all cursor-pointer hover:text-primary">
          Search
        </li>
        <li className="font-medium hover:scale-110 hover:text-gray-400 transition-all cursor-pointer hover:text-primary">
          News
        </li>
        <li className="font-medium hover:scale-110 hover:text-gray-400 transition-all cursor-pointer hover:text-primary">
          Preorder
        </li>
      </ul>
      <div>
        {userLoggedIn ? (
          <Link to="/profile">
            <Button>My Profile</Button>
          </Link>
        ) : (
          <Link to="/login">
            <Button
              className={
                "font-semibold hover:scale-110 hover:text-gray-400 text-white bg-[#1a1a1a]"
              }
            >
              Login
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default DesktopNav;
