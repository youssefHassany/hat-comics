import { useQuery } from "@tanstack/react-query";
import { ComicType } from "../../types/comicType";
import axios from "axios";

export const useFetchComic = (slug: string) => {
  return useQuery({
    queryKey: ["comic"],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:8000/api/v1/comics/${slug}`
      );
      return data as ComicType;
    },
  });
};
