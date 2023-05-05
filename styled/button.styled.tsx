import styled from "styled-components";

export const Button = styled.button`
  background-color: white;
  border-radius: 10px;
  padding: 20px 32px;
  font-size: 20px;
  color: #0f2027;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: background-color;
  transition-duration: 300ms;
  &:hover {
    background-color: #2c5364;
    color: #f5f5f5;
  }
`;
