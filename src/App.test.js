import { render, screen } from "@testing-library/react";
import App from "./App";

test("how many people likes this talk", () => {
  const likesNumber = 5;
  expect(likesNumber).toBeGreaterThanOrEqual(8);
});
