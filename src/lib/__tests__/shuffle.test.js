import shuffle from "../shuffle";

describe("shuffle", () => {
  beforeEach(() => {
    jest.spyOn(global.Math, "random").mockReturnValue(0.5);
  });

  afterEach(() => {
    jest.spyOn(global.Math, "random").mockRestore();
  });

  it("should shuffle order", () => {
    const list = ["item 1", "item 2", "item 3", "item 4", "item 5"];

    expect(shuffle(list)).toEqual([
      "item 1",
      "item 4",
      "item 2",
      "item 5",
      "item 3",
    ]);
  });
});
