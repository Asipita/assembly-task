import {
  Profile as StyledProfile,
  ProfileAvatarContainer,
  ProfileBioContainer,
  ProfileUsername,
  ProfileLink,
} from "@/styled/profile.styled";
import Image from "next/image";

export function Profile({ imageUrl, login }) {
  return (
    <StyledProfile>
      <ProfileAvatarContainer>
        <Image src={imageUrl} alt="" className="rounded-full" fill />
      </ProfileAvatarContainer>
      <ProfileBioContainer>
        <ProfileUsername>@{login}</ProfileUsername>
        <ProfileLink href={`/${login}`}>view details</ProfileLink>
      </ProfileBioContainer>
    </StyledProfile>
  );
}
