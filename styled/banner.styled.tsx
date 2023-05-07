import styled from "styled-components";

export const Banner = styled.section`
  height: 50vh;
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem;
  background: linear-gradient(
      90.16deg,
      #0f2027 0.12%,
      #203a43 50.04%,
      #2c5364 99.86%
    ),
    linear-gradient(89.9deg, #0f2027 0.08%, #203a43 48.87%, #2c5364 99.91%);
`;

export const BannerTitle = styled.h1`
  text-align: center;
  padding: 1rem;
  font-size: 2rem;
  font-weight: bold;
  color: white;
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const BannerForm = styled.form`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
`;

export const BannerRadioContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  color: #bcbcbc;
`;
