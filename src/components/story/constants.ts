import axios from "axios";

const options = (id: number) => ({
  method: "GET",
  url: `${process.env.REACT_APP_BASE_URL}item/${id}.json`,
  headers: {},
});

export const getStory = async (id: number) => {
  const response = await axios.request(options(id));

  return response.data;
};

export const getLocaleDate = (dateNUmber: number) => {
  return new Date(dateNUmber * 1000).toLocaleDateString();
};
