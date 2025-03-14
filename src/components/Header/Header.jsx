import { Button } from "@/components/Button";
import { Link } from "react-router";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import React from "react";

function Header() {
  const { isSignedIn } = useUser();

  return (
    <div className="flex justify-between items-center py-5 px-20 shadow-sm">
      <Link to={"/"}>
        <img src="vite.svg" className="logo" alt="logo" />
      </Link>
      <ul className="hidden md:flex gap-16">
        <li className="font-medium hover:scale-110 hover:text-gray-400 transition-all cursor-pointer hover:text-primary">
          Home
        </li>
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

      {isSignedIn ? (
        <div className="flex items-center gap-5 ">
          <UserButton />
          <Link to="/profile">
            <Button>My Profile</Button>
          </Link>
        </div>
      ) : (
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
