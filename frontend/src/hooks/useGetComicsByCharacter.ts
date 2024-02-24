import { useQuery } from "@tanstack/react-query";
import { ComicType } from "../types/comicType";
import axios from "axios";
import { BASE_URL } from "../api/base-url";

export const useGetComicsByCharacter = (character: string) => {
  return useQuery({
    queryKey: ["character", character],
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/character/${character}`);
      return data as ComicType[];
    },
  });
};
