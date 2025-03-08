import { Button } from "@/components/ui/Button";
import { UserButton, useUser } from "@clerk/clerk-react";
import React from "react";

function Header() {
  const { isSigned } = useUser();
  return (
    <div className="flex justify-between items-center py-5 px-10 shadow-sm">
      <img src="vite.svg" className="logo" alt="logo" />
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

      {isSigned ? (
        <div className="flex items-center gap-5 ">
          <UserButton />
          <Button>Submit</Button>
        </div>
      ) : (
        <Button>Login</Button>
      )}
    </div>
  );
}

export default Header;
