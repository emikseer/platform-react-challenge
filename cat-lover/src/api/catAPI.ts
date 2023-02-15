import { api } from "../configs/apiConfig";
import { Breed, Cat } from "../types/types";

export const catAPI = {
  getCats: async function (): Promise<Cat[]> {
    const response = await api.request<Cat[]>({
      url: `/images/search?limit=10`,
      method: "GET",
    });

    return response.data;
  },

  getCat: async function (id: string): Promise<Cat> {
    const response = await api.request<Cat>({
      url: `/images/${id}`,
      method: "GET",
    });

    return response.data;
  },

  getBreeds: async function (): Promise<Breed[]> {
    const response = await api.request<Breed[]>({
      url: `breeds`,
      method: "GET",
    });

    return response.data;
  },

  addCatToFavourite: async function (id: string): Promise<Cat> {
    const response = await api.post<Cat>(`/favourites`, { image_id: id });

    return response.data;
  },
};
