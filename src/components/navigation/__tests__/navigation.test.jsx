import { render } from "@testing-library/react";
import Navigation from "../navigation";

describe("Navigation", () => {
  it("should render", () => {
    const { asFragment } = render(<Navigation />);
    expect(asFragment()).toMatchSnapshot();
  });
});
