import { Button } from "@/components/button";
import { Input } from "@/components/input";
import {
  BannerContent,
  BannerTitle,
  Banner as StyledBanner,
} from "@/styled/banner.styled";
export function Banner() {
  return (
    <StyledBanner>
      <BannerTitle>Github Profile Finder</BannerTitle>
      <BannerContent>
        <Input />
        <Button>Search</Button>
      </BannerContent>
    </StyledBanner>
  );
}
