import axios from "axios";

const appId = "AEA5E609-30D7-4C41-98E2-EC2A416D63F8";
const apiToken = "35958b80da7594ee1ec0cb32d1f05e679f7c7728";

const getSendbirdUser = (userId) => {
  return axios.get(`https://api-${appId}.sendbird.com/v3/users/${userId}`, {
    headers: {
      "content-type": "application/json",
      "Api-token": apiToken,
    },
  });
};

const createSendbirdUser = (userId, nickName, profileUrl) => {
  return axios.post(
    `https://api-${appId}.sendbird.com/v3/users`,
    {
      user_id: userId,
      nickname: nickName,
      profile_url: profileUrl,
      issue_access_token: false,
    },
    {
      headers: {
        "content-type": "application/json",
        "Api-token": apiToken,
      },
    }
  );
};

const createSendbirdChannel = (users, channelName) => {
  return axios.post(
    `https://api-${appId}.sendbird.com/v3/group_channels`,
    {
      user_ids: users,
      is_distinct: true,
      name: channelName,
    },
    {
      headers: {
        "content-type": "application/json",
        "Api-token": apiToken,
      },
    }
  );
};

export { getSendbirdUser, createSendbirdUser, createSendbirdChannel };
