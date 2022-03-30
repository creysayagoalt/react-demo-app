import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument(); // This will works
});

test("People is excited for the FE Talks", () => {
  const fetchLikes = () => 5;
  const likes = fetchLikes();

  expect(likes).toBeGreaterThanOrEqual(7);
});
