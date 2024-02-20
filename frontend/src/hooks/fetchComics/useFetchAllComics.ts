import { useQuery } from "@tanstack/react-query";
import { Comic } from "../../types/comicType";
import axios from "axios";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const useFetchAllComics = () => {
  return useQuery({
    queryKey: ["comics"],
    queryFn: async () => {
      await wait(1500);
      const { data } = await axios.get("http://localhost:8000/api/v1/comics");
      return data as Comic[];
    },
  });
};
