import { createGlobalStyle } from "styled-components";
import { Button } from "@/components/button";
import { Input } from "@/styled/input.styled";
import { Profile } from "@/components/profile";
import { Banner } from "@/layouts/banner";
import { Results } from "@/layouts/results";

const GlobalStyle = createGlobalStyle`
  html {

    font-size: 14px;

    @media(min-width: 640px) {
      font-size: 16px
    }
  }
`;

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Banner />
        <Results />
      </main>
    </>
  );
}
