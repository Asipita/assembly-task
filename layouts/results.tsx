import { Profile } from "@/components/profile";
import { Spinner } from "@/components/spinner";
import { ResultsContainer, ResultsLoading } from "@/styled/results.styled";

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

  if (data?.data.total_count === 0) {
    return (
      <ResultsLoading>
        <span>No users by that name was found</span>
      </ResultsLoading>
    );
  }
  return (
    <ResultsContainer>
      {data?.data.items.map(({ avatar_url, id, login }) => (
        <Profile key={id} imageUrl={avatar_url} login={login} />
      ))}
    </ResultsContainer>
  );
}
