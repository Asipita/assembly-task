import { Input } from "@/components/input";
import {
  BannerContent,
  BannerTitle,
  Banner as StyledBanner,
} from "@/styled/banner.styled";
import {
  Dispatch,
  FormEvent,
  ReactNode,
  SetStateAction,
} from "react";
export function Banner({
  setQuery,
  button,
}: {
  button: ReactNode;
  setQuery: Dispatch<SetStateAction<string>>;
}) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e?.currentTarget;
    const searchInput = form.elements.namedItem("search") as HTMLInputElement;
    if (!searchInput.value) return;
    setQuery(searchInput.value);

    window.history.pushState(
      null,
      document.title,
      `${window.location.origin}?query=${searchInput.value}`
    );
  }

  return (
    <StyledBanner>
      <BannerTitle>Github Profile Finder</BannerTitle>
      <BannerContent onSubmit={handleSubmit}>
        <Input placeholder="Enter username or org name" name="search" />
        {button}
      </BannerContent>
    </StyledBanner>
  );
}
