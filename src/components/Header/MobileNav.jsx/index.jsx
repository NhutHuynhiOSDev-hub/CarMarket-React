import React, { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { IoMenu } from "react-icons/io5";
import { useAuth } from "@/context/Auth";
import { IoClose } from "react-icons/io5";
import { Button } from "@/components/ui/button";

function MobileNav() {
  const { userLoggedIn } = useAuth();
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <div className="md:hidden">
      <div className="relative w-8 h-8 flex items-center justify-center">
        <motion.div
          className="relative"
          initial={{ opacity: 1 }}
          animate={{ opacity: isShowMenu ? 0 : 1 }}
          exit={{ opacity: 1, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <IoMenu className="text-3xl text-center cursor-pointer md:hidden" />
        </motion.div>
        <motion.div
          onClick={() => {
            setIsShowMenu(!isShowMenu);
            console.log("HERE:", isShowMenu);
          }}
          className="absolute top-0 right-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isShowMenu ? 1 : 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <IoClose className="text-3xl text-center cursor-pointer md:hidden" />
        </motion.div>
      </div>
      <div
        className={`fixed bg-black border-white border-l-1 border-b-1  w-[300px] ${
          isShowMenu ? "right-0" : "right-[-300px]"
        } shadow-sm top-22 right-0 pt-5 pb-10 px-10 md:px-20 md:hidden z-20 rounded-bl-2xl duration-300 ease-in-out overflow-hidden`}
      >
        <div className="flex flex-col justify-center items-center gap-8">
          <ul className="flex flex-col gap-8">
            <li className="font-medium hover:scale-110 hover:text-gray-400 transition-all cursor-pointer ">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="font-medium hover:scale-110 hover:text-gray-400 transition-all cursor-pointer ">
              Search
            </li>
            <li className="font-medium hover:scale-110 hover:text-gray-400 transition-all cursor-pointer ">
              News
            </li>
            <li className="font-medium hover:scale-110 hover:text-gray-400 transition-all cursor-pointer ">
              Preoder
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
      </div>
    </div>
  );
}

export default MobileNav;
