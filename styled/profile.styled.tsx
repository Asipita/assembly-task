import Link from "next/link";
import styled from "styled-components";

export const Profile = styled.div`
  border: 1px solid #f5f5f5;
  border-radius: 16px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  max-width: 500px;

  @media (min-width: 640px) {
    flex-direction: row;
    gap: 2rem;
    padding: 2rem;
  }
`;

export const ProfileAvatarContainer = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  background-color: #f5f5f5;
  display: flex;
  flex-shrink: 0;
  position: relative;
`;

export const ProfileLink = styled(Link)`
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;

export const BackLink = styled(ProfileLink)`
  position: absolute;
  top: 1rem;
  left:1rem;
`

export const ProfileBioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.75rem;
`;

export const ProfileName = styled.h3`
  font-size: 1.5rem;
  color: #2c5364;
  font-weight: 700;
`;

export const ProfileUsername = styled(ProfileName)`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const ProfileBio = styled.p`
  font-size: 1rem;
`;

export const ProfileStatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 0.75rem;
  gap: 1rem;
  @media (min-width: 640px) {
    justify-content: space-between;
    gap: 2rem;
  }
`;
