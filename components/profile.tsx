import {
  Profile as StyledProfile,
  ProfileAvatarContainer,
  ProfileBio,
  ProfileBioContainer,
  ProfileName,
  ProfileStatsContainer,
  ProfileUsername,
} from "@/styled/profile.styled";

export function Profile() {
  return (
    <StyledProfile>
      <ProfileAvatarContainer />
      <ProfileBioContainer>
        <ProfileName>Shuaib Abdulgafar</ProfileName>
        <ProfileUsername>@asipita</ProfileUsername>
        <ProfileBio>
          Bio: JAMstack Developer [React.js, Nextjs, Typescript] something
          something something
        </ProfileBio>
        <ProfileStatsContainer>
          <span>27 followers</span>
          <span>27 followers</span>
          <span>27 followers</span>
        </ProfileStatsContainer>
      </ProfileBioContainer>
    </StyledProfile>
  );
}
