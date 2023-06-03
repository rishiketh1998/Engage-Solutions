import { render, screen } from "@testing-library/react";
import App from "./App";

it("should render Engage Solutions", () => {
  render(<App />);
  const message = screen.getByText(/Engage Solution/i);
  expect(message).toBeVisible();
});
