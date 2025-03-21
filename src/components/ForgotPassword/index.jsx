import React from "react";
import { Link } from "react-router";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function ForgotPassword() {
  return (
    <div>
      <div className="absolute mt-5 ml-20">
        <Link to={"/"}>
          <img src="vite.svg" className="logo" alt="logo" />
        </Link>
      </div>
      <div className="w-full h-screen bg-black flex flex-col items-center md:flex-row">
        <div className="absolute md:relative w-full md:w-1/2 xl:w-1/3 flex-col md:flex-row p-20 mt-20">
          <div className="w-full flex flex-col">
            <h1 className="text-2xl text-center md:text-start text-white font-bold mb-4">
              Recover Your Account in Seconds!
            </h1>
            <p className="text-sm text-center md:text-start text-white font-normal">
              Don’t Let a Lost Password Slow You Down.
            </p>
          </div>
          <div className="w-full flex flex-col items-center mt-20 justify-between gap-8">
            <Input
              name="email"
              type="emaill"
              required={true}
              placeholder="Email"
              className={
                "w-full h-[40px] text-white bg-black border-gray-400 border-1 outline-none focus:bg-gray-900"
              }
              // onChange={(e) => handleInputChange(item?.name, e.target.value)}
            />
            <Button
              className={
                "font-medium w-full h-[40px] text-sm hover:bg-gray-900 transition-all duration-300 text-white bg-[#1a1a1a]"
              }
            >
              Submit
            </Button>

            <p className="text-center text-sm">
              Back to{" "}
              <Link to="/login">
                <span className="hover:text-gray-400 transition-all">
                  Login
                </span>
              </Link>
            </p>
          </div>
        </div>

        <img
          src="https://wallpapers.com/images/hd/black-car-4k-kj2vhoesglkyx4a4.jpg"
          className="w-full h-full md:w-1/2 xl:w-2/3 object-cover"
        />
      </div>
    </div>
  );
}

export default ForgotPassword;
