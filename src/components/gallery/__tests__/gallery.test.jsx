import { render } from "@testing-library/react";
import Gallery from "../gallery";

describe("Gallery", () => {
  it("should render", () => {
    const { asFragment } = render(<Gallery />);
    expect(asFragment()).toMatchSnapshot();
  });
});
