import { api } from "../configs/apiConfig";

export const catAPI = {
  getRandomCats: async function () {
    const response = await api.request({
      url: `/images/search?limit=10`,
      method: "GET",
    });

    // returning the product returned by the API
    return response.data;
  },
};
