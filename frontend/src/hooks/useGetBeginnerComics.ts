import { useQuery } from "@tanstack/react-query";
import { ComicType } from "../types/comicType";
import axios from "axios";
import { BASE_URL } from "../api/base-url";

export const useGetBeginnerComics = () => {
  return useQuery({
    queryKey: ["beginner"],
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/beginner`);
      return data as ComicType[];
    },
  });
};
