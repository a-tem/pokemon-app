import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

const onChangeMock = jest.fn();

test("should exist in DOM", () => {
  render(<SearchBar term="" setTerm={onChangeMock} />);

  const input = screen.getByTestId("search-box");

  expect(input).toBeInTheDocument();
});

test("should receive a props and renders them correctly", () => {
  render(
    <SearchBar term="Input Value" setTerm={onChangeMock}>
      Custom Placeholder
    </SearchBar>
  );

  const input = screen.getByTestId("search-box");

  expect(input).toHaveValue("Input Value");
  expect(input).toHaveAttribute("placeholder", "Custom Placeholder");
});

test("should call a cb function on button click", () => {
  const cbMock = jest.fn();
  render(<SearchBar term="input" setTerm={cbMock} />);

  const btn = screen.getByRole("button") as HTMLButtonElement;
  fireEvent.click(btn);

  expect(cbMock).toHaveBeenCalledTimes(1);
});
