import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Input } from "@/styled/input.styled";

it("renders input field", function () {
  const { getByPlaceholderText } = render(
    <Input placeholder="Enter user name or organization name" />
  );
  const input = getByPlaceholderText(/Enter user name/i);
  expect(input).toBeInTheDocument();
});
