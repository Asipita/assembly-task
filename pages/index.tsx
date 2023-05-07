import { createGlobalStyle } from "styled-components";
import { Button } from "@/components/button";
import { Banner } from "@/layouts/banner";
import { Results } from "@/layouts/results";
import { AppContainer } from "@/styled/app-container.styled";
import { useState } from "react";
import { useGetUsers } from "@/api/hooks/users";
import { useRouter } from "next/router";
import { useUpdateQuery } from "@/api/hooks/updateQuery";

const GlobalStyle = createGlobalStyle`
  html {

    font-size: 14px;

    @media(min-width: 640px) {
      font-size: 16px
    }
  }
`;

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const [type, setType] = useState<"individual" | "org">("individual");
  const updateQuery = useUpdateQuery(() =>
    setQuery(router.query.query as string)
  );
  const { isLoading, fetchStatus, ...rest } = useGetUsers(query, type);

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
        <Results query={query} {...rest} />
      </AppContainer>
    </>
  );
}
