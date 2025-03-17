import { useUser } from "@clerk/clerk-react";
import { SendBirdProvider, App as SendbirdApp } from "@sendbird/uikit-react";
import GroupChannelList from "@sendbird/uikit-react/GroupChannelList";
import { GroupChannel } from "@sendbird/uikit-react/GroupChannel";
import "@sendbird/uikit-react/dist/index.css";
import { setUserId } from "firebase/analytics";
import React, { useEffect, useState } from "react";

function Inbox() {
  const [userId, setUserID] = useState("nhuthq");
  const [channel, setChannel] = useState(null);

  // useEffect(() => {
  //   if (user) {
  //     const id = user?.primaryEmailAddress?.emailAddress.split("@")[0];
  //     setUserID(id);
  //   }
  // }, [user]);

  return (
    <div className="w-full h-full bg-red-500">
      <SendBirdProvider
        appId="AEA5E609-30D7-4C41-98E2-EC2A416D63F8"
        userId={userId}
        theme="dark"
        nickname={"Nhut Huynh"}
        // profileUrl={user?.imageUrl}
        allowProfileEdit={true}
      >
        <div className="flex flex-row items-center justify-start">
          <div className="w-full h-full">
            <GroupChannelList
              onChannelSelect={(channel) => {
                console.log("channelURL:", channel.url);
                setChannel(channel?.url);
              }}
              channelListQueryParams={{ includeEmpty: true }}
            />
          </div>
          <div className="w-full h-full">
            <GroupChannel channelUrl={channel} />
          </div>
        </div>
      </SendBirdProvider>
    </div>
  );
}

export default Inbox;
