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
    <StyledProfile data-cy={login}>
      <ProfileAvatarContainer>
        <Image src={imageUrl} alt="" className="rounded-full" fill />
      </ProfileAvatarContainer>
      <ProfileBioContainer>
        <ProfileUsername>@{login}</ProfileUsername>
        <ProfileLink href={`/${login}`} data-cy={`${login}_details`}>
          view details
        </ProfileLink>
      </ProfileBioContainer>
    </StyledProfile>
  );
}
