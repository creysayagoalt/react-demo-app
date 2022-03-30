import { render, screen } from "@testing-library/react";
import App from "./App";

test("People is excited for the FE Talks", () => {
  const fetchLikes = () => 60;
  const likes = fetchLikes();

  expect(likes).toBeGreaterThanOrEqual(7);
});
