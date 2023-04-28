import axios from "axios";

const options = (id: number) => ({
  method: "GET",
  url: `${process.env.REACT_APP_BASE_URL}item/${id}.json`,
  headers: {},
});

export const getComments = async (commentsIds: number[]) => {
  const promises = commentsIds.map((id) => axios.request(options(id)));
  const result = await Promise.all(promises);
  return result.map((data) => data.data);
};
