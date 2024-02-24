import { useQuery } from "@tanstack/react-query";
import { ComicType } from "../types/comicType";
import axios from "axios";
import { BASE_URL } from "../api/base-url";

export const useGetComicsByCompany = (company: string) => {
  return useQuery({
    queryKey: ["company", company], // Include company in the query key
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/company/${company}`);
      console.log(`company in react query: ${company}`);
      return data as ComicType[];
    },
  });
};
