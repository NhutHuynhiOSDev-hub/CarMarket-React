import React from "react";
import Header from "../Header";
import Inbox from "./components/Inbox";
import MyProfile from "./components/MyProfile";
import MyProducts from "./components/MyProducts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Profile() {
  return (
    <div>
      <Header />
      <div className="p-5 px-10 md:px-20 w-screen h-screen">
        <Tabs defaultValue="myProduct" className="w-full h-full bg-amber-600">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="myProduct">My Products</TabsTrigger>
            <TabsTrigger value="inbox">Inbox</TabsTrigger>
            <TabsTrigger value="myProfile">My Profile</TabsTrigger>
          </TabsList>
          <TabsContent value="myProduct">
            <MyProducts />
          </TabsContent>
          <TabsContent value="inbox">
            <Inbox />
          </TabsContent>
          <TabsContent value="myProfile">
            <MyProfile />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Profile;
