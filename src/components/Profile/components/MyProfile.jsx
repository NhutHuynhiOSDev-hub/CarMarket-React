import React from "react";

import { useAuth } from "@/context";
import Button from "@/components/Button";
import { doSignOut } from "@/services/firebase/auth";

function MyProfile() {
  const { currentUser } = useAuth();
  const onLogout = () => {
    doSignOut();
  };
  return (
    <div className="mt-10 flex items-center justify-end">
      <Button>Edit Profile</Button>
    </div>
  );
}

export default MyProfile;
