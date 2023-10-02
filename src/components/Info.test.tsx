import { render, screen } from "@testing-library/react";
import Info from "./Info";
import { Data } from "../models";

const data: Pick<Data, "id" | "height" | "weight" | "abilities" | "types"> = {
  id: 1,
  height: 0,
  weight: 0,
  abilities: [],
  types: [],
};

test("should contain 3 'plain' entries and 2 'list' entries", () => {
  render(<Info data={data} />);
  const plainProps = screen.getAllByTestId("info-plain");
  const listProps = screen.getAllByTestId("info-list");
  expect(plainProps.length).toEqual(3);
  expect(listProps.length).toEqual(2);
});
