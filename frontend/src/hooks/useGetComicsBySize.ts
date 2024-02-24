import { useQuery } from "@tanstack/react-query";
import { ComicType } from "../types/comicType";
import axios from "axios";
import { BASE_URL } from "../api/base-url";

export const useGetComicsBySize = (size: string) => {
  return useQuery({
    queryKey: ["size", size],
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/size/${size}`);
      return data as ComicType[];
    },
  });
};
