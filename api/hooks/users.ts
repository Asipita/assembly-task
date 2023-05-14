import { useInfiniteQuery } from "@tanstack/react-query";
import { axiosInstance } from "..";

export function useGetUsers(query: string, type: string, page: number = 1) {
  const perPage = 50;
  return useInfiniteQuery({
    queryKey: ["users", query],
    queryFn: ({ pageParam = 1 }) => {
      const url = createUrl(query, perPage, pageParam);
      return axiosInstance.get(type === "individual" ? url : url + "+type:org");
    },
    getNextPageParam: (lastPage) =>
      page < lastPage.data.total_count / perPage ? page + 1 : undefined,
    enabled: !!query,
  });
}

function createUrl(query: string, perPage: number, pageParam: any) {
  return `/search/users?q=${query}&per_page=${perPage}&page=${pageParam}`;
}