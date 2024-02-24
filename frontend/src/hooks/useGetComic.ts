import { useQuery } from "@tanstack/react-query";
import { ComicType } from "../types/comicType";
import axios from "axios";
import { BASE_URL } from "../api/base-url";

export const useGetComic = (slug: string) => {
  return useQuery({
    queryKey: ["comic"],
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/${slug}`);
      return data as ComicType;
    },
  });
};
