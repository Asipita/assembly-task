import { useRouter } from "next/router";
import { useEffect } from "react";

export function useUpdateQuery(cb: (arg0: string) => void) {
  const router = useRouter();

  useEffect(
    function () {
      if (router.query.query) {
        cb(router.query.query as string);
      }
    },
    [router.query.query, cb]
  );
}
