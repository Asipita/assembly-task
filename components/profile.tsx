import {
  Profile as StyledProfile,
  ProfileAvatarContainer,
  ProfileBioContainer,
  ProfileUsername,
  ProfileLink,
} from "@/styled/profile.styled";
import Image from "next/image";

export interface IProfile {
  avatar_url: string;
  login: string;
  id?: number;
  name?: string;
  bio?: string;
  public_repos?: number;
  following?: number;
  followers?: number;
  html_url?: string;
}

export function Profile({ avatar_url, login }: IProfile) {
  return (
    <StyledProfile data-cy={login}>
      <ProfileAvatarContainer>
        <Image src={avatar_url} alt="" className="rounded-full" fill />
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
