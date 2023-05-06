import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "..";

export function useGetUsers(query) {
  return useQuery(
    ["users", query],
    () => axiosInstance.get(`/search/users?q=${query}`),
    {
      enabled: !!query,
    }
  );
}
