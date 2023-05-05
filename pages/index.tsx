import { createGlobalStyle } from "styled-components";
import { Button } from "@/components/button";
import { Input } from "@/styled/input.styled";
import { Profile } from "@/components/profile";

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
    <div>
      <GlobalStyle />
      <Button isLoading>Search</Button>
      <Input placeholder="Enter username or org name..." />
      <Profile />
    </div>
  );
}
