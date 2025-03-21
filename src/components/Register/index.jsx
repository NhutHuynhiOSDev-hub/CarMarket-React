import React from "react";
import { Input } from "../ui/input";
import { Link } from "react-router";
import { Button } from "../ui/button";

function Register() {
  return (
    <div className="w-full h-full bg-black">
      <div className="absolute mt-5 ml-20">
        <Link to={"/"}>
          <img src="vite.svg" className="logo" alt="logo" />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="absolute md:relative w-full md:w-1/2 xl:w-1/3 flex-col md:flex-row p-20 mt-20">
          <div className="w-full flex flex-col">
            <h1 className="text-2xl text-center md:text-start text-white font-bold mb-4">
              Join Us & Start Your Journey!
            </h1>
            <p className="text-sm text-center md:text-start text-white font-medium">
              Register Today & Drive Tomorrow!
            </p>
          </div>
          <div className="w-full flex flex-col items-center mt-10 justify-between gap-8">
            <Input
              name="name"
              type="text"
              required={true}
              placeholder="Full name"
              className={
                "w-full h-[40px] text-white bg-black border-gray-400 border-1 outline-none focus:bg-gray-900"
              }
              // onChange={(e) => handleInputChange(item?.name, e.target.value)}
            />
            <Input
              name="email"
              type="email"
              required={true}
              placeholder="Email"
              className={
                "w-full h-[40px] text-white bg-black border-gray-400 border-1 outline-none focus:bg-gray-900"
              }
              // onChange={(e) => handleInputChange(item?.name, e.target.value)}
            />
            <Input
              name="password"
              type="password"
              required={true}
              placeholder="Password"
              className={
                "w-full h-[40px] text-white bg-black border-gray-400 border-1 outline-none focus:bg-gray-900"
              }
              // onCshange={(e) => handleInputChange(item?.name, e.target.value)}
            />

            <Input
              name="confirm_password"
              type="password"
              required={true}
              placeholder="Conform password"
              className={
                "w-full h-[40px] text-white bg-black border-gray-400 border-1 outline-none focus:bg-gray-900"
              }
              // onCshange={(e) => handleInputChange(item?.name, e.target.value)}
            />
            <Button
              className={
                "font-medium w-full h-[40px] text-sm hover:bg-gray-900 transition-all duration-300 text-white bg-[#1a1a1a]"
              }
            >
              Register
            </Button>

            <p className="text-center text-sm">
              Already have an account?{" "}
              <Link to="/login">
                <span className="hover:text-gray-400 transition-all">
                  Login
                </span>
              </Link>
            </p>
          </div>
        </div>

        <img
          src="https://wallpapercave.com/wp/wp12950289.jpg"
          className="w-full md:w-1/2 xl:w-2/3 object-cover"
        />
      </div>
    </div>
  );
}

export default Register;
