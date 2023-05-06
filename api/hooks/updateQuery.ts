import { useRouter } from "next/router";
import { useEffect } from "react";

export function useUpdateQuery(cb) {
  const router = useRouter();

  useEffect(
    function () {
      if (router.query.query) {
        cb();
      }
    },
    [router.query.query, cb]
  );
}
