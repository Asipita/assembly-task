import { Input } from "@/components/input";
import {
  BannerContent,
  BannerForm,
  BannerRadioContainer,
  BannerTitle,
  Banner as StyledBanner,
} from "@/styled/banner.styled";
import { useRouter } from "next/router";
import { Dispatch, FormEvent, ReactNode, SetStateAction } from "react";
export function Banner({
  setQuery,
  button,
  setType,
  type,
}: {
  button: ReactNode;
  setQuery: Dispatch<SetStateAction<string>>;
  type: "individual" | "org";
  setType: Dispatch<SetStateAction<"individual" | "org">>;
}) {
  const router = useRouter();
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form: HTMLFormElement = e?.currentTarget;
    const searchInput = form.elements.namedItem("search") as HTMLInputElement;
    if (!searchInput.value) return;
    setQuery(searchInput.value);

    router.replace(
      `${window.location.origin}?query=${searchInput.value}${
        type === "org" ? "+type:org" : ""
      }`
    );
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setType(event.target?.value as "individual" | "org");
  }

  return (
    <StyledBanner>
      <BannerTitle>Github Profile Finder</BannerTitle>
      <BannerForm onSubmit={handleSubmit}>
        <BannerContent>
          <Input
            placeholder="Enter username or org name"
            aria-label="Enter username or org name"
            name="search"
          />
          {button}
        </BannerContent>
        <BannerContent>
          <BannerRadioContainer>
            <input
              type="radio"
              id="individual"
              value="individual"
              checked={type === "individual"}
              onChange={handleChange}
              name="type"
            />
            <label htmlFor="individual">Individual</label>
          </BannerRadioContainer>
          <BannerRadioContainer>
            <input
              type="radio"
              id="org"
              value="org"
              checked={type === "org"}
              onChange={handleChange}
              name="type"
            />
            <label htmlFor="org">Organization</label>
          </BannerRadioContainer>
        </BannerContent>
      </BannerForm>
    </StyledBanner>
  );
}
