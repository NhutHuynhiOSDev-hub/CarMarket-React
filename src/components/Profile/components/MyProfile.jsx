import React from "react";

import { useAuth } from "@/context";
import { doSignOut } from "@/services/firebase/auth";
import { Button } from "@/components/ui/button";

function MyProfile() {
  const { currentUser } = useAuth();
  const onLogout = () => {
    doSignOut();
  };
  return (
    <div className="w-full h-full bg-black mt-10 flex items-center justify-end">
      <Button>Edit Profile</Button>
    </div>
  );
}

export default MyProfile;
