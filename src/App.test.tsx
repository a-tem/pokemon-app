import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("App renders layout", async () => {
  render(<App />);
  const header = screen.getByRole("banner");
  const content = screen.getByRole("main");
  const footer = screen.getByRole("contentinfo");

  expect(header).toBeVisible();
  expect(content).toBeVisible();
  expect(footer).toBeVisible();
});
