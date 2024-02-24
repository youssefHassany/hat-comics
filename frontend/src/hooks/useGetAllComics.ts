import { useQuery } from "@tanstack/react-query";
import { ComicType } from "../types/comicType";
import axios from "axios";
import { BASE_URL } from "../api/base-url";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const useGetAllComics = () => {
  return useQuery({
    queryKey: ["comics"],
    queryFn: async () => {
      await wait(1500);
      const { data } = await axios.get(`${BASE_URL}`);
      return data as ComicType[];
    },
  });
};
