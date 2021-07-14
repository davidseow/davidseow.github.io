import React from "react";
import { render } from "@testing-library/react";
import Gallery from "../Gallery";

describe("Gallery", () => {
  it("should render", () => {
    const { asFragment } = render(<Gallery />);
    expect(asFragment()).toMatchSnapshot();
  });
});
