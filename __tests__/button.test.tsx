import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Button } from "@/components/button";

it("renders button with the correct text", function () {
  const { getByText } = render(<Button>Search</Button>);
  const button = getByText(/search/i);
  expect(button).toBeInTheDocument();
});

it("renders loading svg when loading is set to true", function () {
  const { getByTestId } = render(<Button isLoading>Search</Button>);
  const button = getByTestId("spinner");
  expect(button).toBeInTheDocument();
});
