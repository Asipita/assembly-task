import { Button as StyledButton } from "@/styled/button.styled";
import { ReactNode } from "react";
import { Spinner } from "./spinner";

export interface ButtonProps {
  isLoading?: boolean;
  children: ReactNode;
}

export function Button({ isLoading, children }: ButtonProps) {
  return (
    <StyledButton type="submit">
      {children}
      {isLoading && <Spinner />}
    </StyledButton>
  );
}
