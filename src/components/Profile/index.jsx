import React from "react";
import Header from "../Header";
import Inbox from "./components/Inbox";
import MyProfile from "./components/MyProfile";
import MyProducts from "./components/MyProducts";
import "react-tabs/style/react-tabs.css";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
function Profile() {
  return (
    <div className="w-full h-full bg-black">
      <Header />
      <div className="pb-20 pt-[140px] px-10 md:px-20">
        <Tabs>
          <TabList>
            <Tab>My Products</Tab>
            <Tab>My Profile</Tab>
            <Tab>Inbox</Tab>
          </TabList>

          <TabPanel>
            <MyProducts />
          </TabPanel>
          <TabPanel>
            <MyProfile />
          </TabPanel>
          <TabPanel>
            <Inbox />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default Profile;
