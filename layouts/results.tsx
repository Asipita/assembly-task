import { IProfile, Profile } from "@/components/profile";
import { Spinner } from "@/components/spinner";
import { ResultsContainer, ResultsLoading } from "@/styled/results.styled";
import { AxiosResponse } from "axios";

export function Results({ isLoading, fetchStatus, isError, data }: any) {
  if (isLoading && fetchStatus !== "idle")
    return (
      <ResultsLoading>
        <Spinner />
      </ResultsLoading>
    );

  if (isError) {
    return (
      <ResultsLoading>
        <span>An error occured trying to fetch this data</span>
      </ResultsLoading>
    );
  }

  if (data?.pages.length === 0) {
    return (
      <ResultsLoading>
        <span>No users by that name was found</span>
      </ResultsLoading>
    );
  }
  return (
    <ResultsContainer>
      {data?.pages.map((page: AxiosResponse) => {
        return page.data.items.map(({ avatar_url, id, login }: IProfile) => (
          <Profile key={id} avatar_url={avatar_url} login={login} />
        ));
      })}
    </ResultsContainer>
  );
}
