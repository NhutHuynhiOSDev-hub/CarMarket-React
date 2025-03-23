import React from "react";

import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { doSignOut } from "@/services/firebase/auth";

function MyProfile() {
  const navigate = useNavigate();
  const onLogout = () => {
    console.log("LOGOUT");
    doSignOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log("SIGN OUT ERROR:", error);
      });
  };
  return (
    <div className="w-full h-full bg-black mt-10 flex items-center justify-end">
      <Button
        className={
          "font-medium h-[40px] text-sm hover:bg-teal-900 transition-all duration-300 text-white bg-[#1a1a1a] my-10"
        }
      >
        Edit Profile
      </Button>
      <Button
        className={
          "font-medium h-[40px] text-sm hover:bg-teal-900 transition-all duration-300 text-white bg-[#1a1a1a] my-10"
        }
      >
        Change Password
      </Button>
      <Button
        onClick={onLogout}
        className={
          "font-medium h-[40px] text-sm hover:bg-teal-900 transition-all duration-300 text-white bg-[#1a1a1a] my-10"
        }
      >
        Logout
      </Button>
    </div>
  );
}

export default MyProfile;
