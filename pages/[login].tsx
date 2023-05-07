import { axiosInstance } from "@/api";
import { IProfile } from "@/components/profile";
import {
  BackLink,
  Profile,
  ProfileAvatarContainer,
  ProfileBio,
  ProfileBioContainer,
  ProfileName,
  ProfileStatsContainer,
  ProfileUsername,
} from "@/styled/profile.styled";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function User({ user }: {user: IProfile}) {
  const router = useRouter();
  const {
    avatar_url,
    name,
    login,
    bio,
    public_repos,
    following,
    followers,
    html_url,
  } = user;
  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <Head>
        <title>{login}`&apos;`s github profile</title>
      </Head>
      <a
        href={html_url}
        target="_blank"
        rel="noopener noreferrer"
        title={`Visit ${login}'s Github page`}
      >
        <Profile>
          <ProfileAvatarContainer>
            <Image src={avatar_url} alt="" className="rounded-full" fill />
          </ProfileAvatarContainer>
          <ProfileBioContainer>
            <ProfileName>{name}</ProfileName>
            <ProfileUsername>{login}</ProfileUsername>
            <ProfileBio>{bio}</ProfileBio>
            <ProfileStatsContainer>
              <span>{public_repos} repos</span>
              <span>{following} following</span>
              <span>{followers} followers</span>
            </ProfileStatsContainer>
          </ProfileBioContainer>
        </Profile>
      </a>
      <BackLink as="span" role="button" onClick={router.back}>
        Back
      </BackLink>
    </main>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const login = ctx.query.login;

  try {
    const response = await axiosInstance.get(`/users/${login}`);
    if (response.statusText === "OK") {
      return {
        props: {
          user: response.data,
        },
      };
    } else {
      return {
        props: {
          notFound: true,
        },
      };
    }
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
