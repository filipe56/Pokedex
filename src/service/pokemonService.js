import api from "./api";

export const getListPokemon = (page) => {
  return api.get(page)
};