import axios from "axios";
export const baseURL = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "07ef1e1789msh33ab6b7b7fca8e6p1528e6jsn16267a81183c",
    },
  });
  return data;
};
