import React from "react";
import { render } from "@testing-library/react";
import Gallery from "../Gallery";

jest.mock('../../../lib/shuffle', () => {
  return jest.fn((images) => images);
})

describe("Gallery", () => {
  it("should render", () => {
    const { asFragment } = render(<Gallery />);
    expect(asFragment()).toMatchSnapshot();
  });
});
