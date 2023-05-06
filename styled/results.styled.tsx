import styled from "styled-components";

export const ResultsContainer = styled.section`
  display: grid;
  padding: 2rem 0;
  gap: 2rem;
  width: fit-content;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;

  @media (min-width: 640px) {
    padding: 2rem 1rem;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ResultsLoading = styled.section`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
