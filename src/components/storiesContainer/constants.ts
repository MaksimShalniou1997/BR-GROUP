import axios from "axios";

const options = {
  method: "GET",
  url: 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty&limitToFirst=100&orderBy="$key"',
  headers: {},
};

export const getStoryIds = async () => {
  const response = await axios.request(options);

  return response.data;
};

export const interval = 60000;
