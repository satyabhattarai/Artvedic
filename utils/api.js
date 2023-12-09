import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDatafromApi = async (endpoint) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
    },
  };
  const response = await fetch(`${API_URL}${endpoint}`, options);
  const data = await response.json();
  return data;
};
