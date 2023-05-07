import { createGlobalStyle } from "styled-components";
import { Button } from "@/components/button";
import { Banner } from "@/layouts/banner";
import { Results } from "@/layouts/results";
import { AppContainer } from "@/styled/app-container.styled";
import { useEffect, useState } from "react";
import { useGetUsers } from "@/api/hooks/users";
import { useRouter } from "next/router";
import { useUpdateQuery } from "@/api/hooks/updateQuery";

import { useInView } from "react-intersection-observer";

const GlobalStyle = createGlobalStyle`
  html {

    font-size: 14px;

    @media(min-width: 640px) {
      font-size: 16px
    }
  }
`;

export default function Home() {
  const [page, setPage] = useState<number>(1);
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const [type, setType] = useState<"individual" | "org">(() =>
    router.asPath.includes("+type:org") ? "org" : "individual"
  );
  useUpdateQuery(() => setQuery(router.query.query as string));
  const { isLoading, fetchStatus, fetchNextPage, hasNextPage, ...rest } =
    useGetUsers(query, type, page);
  const { ref, inView } = useInView({
    threshold: 0,
  });
  useEffect(
    function () {
      if (inView) {
        setPage((page) => page + 1);
        fetchNextPage();
      }
    },
    [inView, fetchNextPage]
  );
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Banner
          setQuery={setQuery}
          setType={setType}
          type={type}
          button={
            <Button isLoading={isLoading && fetchStatus !== "idle"}>
              Search
            </Button>
          }
        />
        <Results {...rest} />
      </AppContainer>
      <div ref={ref} />
    </>
  );
}
