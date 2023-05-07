import { useInfiniteQuery } from "@tanstack/react-query";
import { axiosInstance } from "..";

// export function useGetUsers(query: string, type: string, page: number) {
//   const url = `/search/users?q=${query}&per_page=50&page=${page}`;
//   return useQuery(
//     ["users", query, page],
//     () => axiosInstance.get(type === "individual" ? url : url + "+type:org"),
//     {
//       //   onSuccess: function (data) {
//       //     queryClient.setQueryData(["results", query], function (oldData) {
//       //       console.log({ oldData, data });
//       //       return [...oldData.data.items, ...data.data.items];
//       //     });
//       //   },
//       enabled: !!query,
//     }
//   );
// }

export function useGetUsers(query: string, type: string, page: number = 1) {
  const perPage = 50;
  return useInfiniteQuery({
    queryKey: ["users", query],
    queryFn: ({ pageParam = 1 }) => {
      const url = `/search/users?q=${query}&per_page=${perPage}&page=${pageParam}`;
      return axiosInstance.get(type === "individual" ? url : url + "+type:org");
    },
    getNextPageParam: (lastPage) =>
      page < lastPage.data.total_count / perPage ? page + 1 : undefined,
    enabled: !!query,
  });
}
