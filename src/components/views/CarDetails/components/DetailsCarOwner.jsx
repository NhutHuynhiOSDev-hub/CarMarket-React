import { Button } from "@/components/ui/button";
import { createSendbirdChannel, createSendbirdUser } from "@/services/sendbird";
import React from "react";

function DetailsCarOwner() {
  const onClickMessageOwner = () => {
    // Create curent user
    try {
      const userId = "nhuthq11232243asc";
      const nickName = "Nhut Huynh Quang";
      const profileUrl =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&s";

      createSendbirdUser(userId, nickName, profileUrl).then((res) => {
        console.log("RESPONSE: ", res);
      });
    } catch (e) {
      console.error("CREATE SENDBIRD USER ERROR: ", e);
    }
    // Create car owner user
    try {
      const userId = "nhuthq11232243asc";
      const nickName = "Nhut Huynh Quang";
      const profileUrl =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&s";

      createSendbirdUser(userId, nickName, profileUrl).then((res) => {
        console.log("RESPONSE: ", res);
      });
    } catch (e) {
      console.error("CREATE SENDBIRD USER ERROR: ", e);
    }

    // Create create channel
    // try {
    //   const ownerid = "ownerid";
    //   const nickName = "Nhut Huynh Quang";
    //   const profileUrl =
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&s";

    //   createSendbirdChannel([owneriduser]).then((res) => {
    //     console.log("RESPONSE: ", res);
    //   });
    // } catch (e) {
    //   console.error("CREATE SENDBIRD USER ERROR: ", e);
    // }
  };

  return (
    <div className="mt-10 flex flex-col gap-4">
      <h2 className="font-medium text-2xl">Ownder Details</h2>
      <div className="flex flex-row items-center justify-start gap-4">
        <img
          src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?cs=srgb&dl=pexels-andrewperformance1-697509.jpg&fm=jpg"
          className="w-30 h-30 rounded-full object-cover"
        />
        <div className="flex flex-col gap-2 justify-center items-start">
          <h2 className="font-bold text-xl">Nhut Huynh</h2>
          <h2 className="text-gray-500 font-medium">nhuthq@zigexn.vn</h2>
        </div>
      </div>

      <Button
        onClick={onClickMessageOwner}
        className={
          "font-medium w-full h-[40px] my-10 text-sm hover:bg-teal-900 transition-all duration-300 text-white bg-[#1a1a1a]"
        }
      >
        Send Message
      </Button>
    </div>
  );
}

export default DetailsCarOwner;
