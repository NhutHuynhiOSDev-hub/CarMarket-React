import React, { useState } from "react";
import { useAuth } from "@/context";
import { Input } from "../ui/input";
import { Link, useNavigate } from "react-router";
import { doSignInWithEmailAndPassword } from "@/services/firebase/auth";
import Button from "../Button";

function Login() {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isSignIn, setIsSignIn] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async () => {
    console.log("EMAIL:", email);
    console.log("PASSWORD:", password);
    // if (!isSignIn) {
    //   setIsSignIn(true);
    //   doSignInWithEmailAndPassword(email, password).then(() => {});
    // }

    // const onSignInwithGoogle = async (e) => {
    //   e.preventDefault();
    //   if (!isSignIn) {
    //     setIsSignIn(true);
    //     doSignInWithGoogle().catch((error) => {
    //       setErrorMessage(error);
    //       console.error("Error signing in with Google:", error);
    //     });
    //   }
  };

  return (
    <>
      <div className="absolute mt-5 ml-20">
        <Link to={"/"}>
          <img src="vite.svg" className="logo" alt="logo" />
        </Link>
      </div>
      <div className="w-full h-screen bg-black flex flex-col md:flex-row">
        <div className="absolute md:relative w-full md:w-1/3 flex-col md:flex-row p-20 mt-20">
          <div className="w-full flex flex-col">
            <h1 className="text-2xl text-center md:text-start text-white font-bold mb-4">
              Find Your Perfect Ride Today!
            </h1>
            <p className="text-sm text-center md:text-start text-white font-medium">
              The Road to Your Next Car Begins Here.
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
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              name="password"
              type="password"
              required={true}
              placeholder="Password"
              className={
                "w-full h-[40px] text-white bg-black border-gray-500 outline-none focus:outline-gray-300"
              }
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={onSubmit} className="w-full h-[40px]">
              Login
            </Button>

            <p className="text-center">
              Don't have an account?{" "}
              <Link to="/register">
                <span>Register</span>
              </Link>
            </p>
            <p className="text-center">
              Forgot password?{" "}
              <Link to="/forgot-password">
                <span>Recover</span>
              </Link>
            </p>
          </div>
        </div>

        <img
          src="https://www.pixelstalk.net/wp-content/uploads/images6/Black-Wallpaper-4K-Wallpaper-Car.jpg"
          className="w-full h-full md:w-2/3 object-cover"
        />
      </div>
    </>
  );
}

export default Login;
