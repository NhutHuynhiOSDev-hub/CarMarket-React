import React from "react";
import { Input } from "../ui/input";
import { Link } from "react-router";
import { Button } from "../Button";

function Login() {
  return (
    <div>
      <div className="absolute mt-5 ml-20">
        <Link to={"/"}>
          <img src="vite.svg" className="logo" alt="logo" />
        </Link>
      </div>
      <div className="w-full h-screen bg-black flex flex-col md:flex-row">
        <div className="absolute md:relative w-full md:w-1/3 flex-col md:flex-row p-20 mt-20">
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
              name="email"
              type="emaill"
              required={true}
              placeholder="Email"
              className={
                "w-full h-[40px] text-white bg-black border-gray-500 outline-none focus:outline-gray-300"
              }
              // onChange={(e) => handleInputChange(item?.name, e.target.value)}
            />
            <Input
              name="password"
              type="password"
              required={true}
              placeholder="Password"
              className={
                "w-full h-[40px] text-white bg-black border-gray-500 outline-none focus:outline-gray-300"
              }
              // onCshange={(e) => handleInputChange(item?.name, e.target.value)}
            />
            <Input
              name="email"
              type="emaill"
              required={true}
              placeholder="Email"
              className={
                "w-full h-[40px] text-white bg-black border-gray-500 outline-none focus:outline-gray-300"
              }
              // onChange={(e) => handleInputChange(item?.name, e.target.value)}
            />
            <Input
              name="password"
              type="password"
              required={true}
              placeholder="Password"
              className={
                "w-full h-[40px] text-white bg-black border-gray-500 outline-none focus:outline-gray-300"
              }
              // onCshange={(e) => handleInputChange(item?.name, e.target.value)}
            />
            <Button className="w-full h-[40px]">Login</Button>

            <p className="text-center">
              Already have an account?{" "}
              <Link to="/login">
                <span>Login</span>
              </Link>
            </p>
          </div>
        </div>

        <img
          src="https://wallpapers.com/images/hd/black-car-4k-wnfjwxcbybpwbs08.jpg"
          className="w-full h-full md:w-2/3 object-cover"
        />
      </div>
    </div>
  );
}

export default Login;
