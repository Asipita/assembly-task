import { Button as StyledButton } from "@/styled/button.styled";
import { Rotate } from "@/styled/rotate";
import { ReactNode } from "react";

export interface ButtonProps {
  isLoading?: boolean;
  children: ReactNode;
}

export function Button({ isLoading, children }: ButtonProps) {
  return (
    <StyledButton>
      {children}
      {isLoading && (
        <Rotate>
          <svg
            data-testid="spinner"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
          >
            <path
              fill="#212121"
              fillRule="nonzero"
              strokeWidth={0}
              d="M10 3.5A6.5 6.5 0 0 0 3.5 10 .75.75 0 0 1 2 10a8 8 0 1 1 8 8 .75.75 0 0 1 0-1.5 6.5 6.5 0 1 0 0-13Z"
            />
          </svg>
        </Rotate>
      )}
    </StyledButton>
  );
}
