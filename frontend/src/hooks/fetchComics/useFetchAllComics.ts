import { useQuery } from "@tanstack/react-query";
import { Comic } from "../../types/comicType";
import axios from "axios";

export const useFetchAllComics = () => {
  return useQuery({
    queryKey: ["comics"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:8000/api/v1/comics");
      return data as Comic[];
    },
  });
};
