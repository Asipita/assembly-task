import styled from "styled-components";

export const ResultsContainer = styled.section`
  display: grid;
  padding: 2rem 0;
  gap: 2rem;
  width: fit-content;
  margin: 0 auto;
  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    padding: 2rem 1rem;
    grid-template-columns: repeat(2, 1fr);
  }
`;
