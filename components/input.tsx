import { Input as StyledInput } from "@/styled/input.styled";
export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <StyledInput {...props} />;
}
