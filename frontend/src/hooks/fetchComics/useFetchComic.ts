import { useQuery } from "@tanstack/react-query";
import { Comic } from "../../types/comicType";
import axios from "axios";

export const useFetchComic = (id: number) => {
  return useQuery({
    queryKey: ["comic"],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:8000/api/v1/comics/${id}`
      );
      return data as Comic;
    },
  });
};
