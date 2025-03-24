import React from "react";

import { Link } from "react-router";
import { useAuth } from "@/context/Auth";
import { FaUserCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";

function DesktopNav() {
  const { userLoggedIn, currentUser } = useAuth();
  return (
    <div className="w-full hidden md:flex items-center justify-between shadow-s">
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
            <div className="flex items-center justify-center">
              {currentUser.photoURL ? (
                <img
                  src={currentUser.photoURL}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <FaUserCircle className=" text-4xl" />
              )}
            </div>
          </Link>
        ) : (
          <Link to="/login">
            <Button
              className={
                "font-medium h-[40px] text-sm hover:bg-teal-900 transition-all duration-300 text-white bg-[#1a1a1a] my-10"
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
