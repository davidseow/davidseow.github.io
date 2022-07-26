import React from "react";
import { render } from "@testing-library/react";
import Gallery from "../Gallery";

describe("Gallery", () => {
  it("should render", () => {
    const images = [
      "/photos/DSC01435.jpg",
      "/photos/DSCF0469.jpg",
      "/photos/DSCF1140.jpg",
      "/photos/DSCF1264.jpg",
      "/photos/DSCF3189.jpg",
      "/photos/DSCF3526.jpg",
      "/photos/DSCF5285.jpg",
    ];
    const { asFragment } = render(<Gallery images={images} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
