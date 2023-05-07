import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "..";

export function useGetUsers(query: string, type: string) {
  const url = `/search/users?q=${query}&per_page=50`;
  return useQuery(
    ["users", query],
    () => axiosInstance.get(type === "individual" ? url : url + "+type:org"),
    {
      enabled: !!query,
    }
  );
}
