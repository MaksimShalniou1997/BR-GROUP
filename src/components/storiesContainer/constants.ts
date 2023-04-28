import axios from "axios";

const options = {
  method: "GET",
  url: `${process.env.REACT_APP_BASE_URL}newstories.json?print=pretty&limitToFirst=100&orderBy="$key"`,
  headers: {},
};

export const getStoryIds = async () => {
  const response = await axios.request(options);

  return response.data;
};

export const interval = 60000;
