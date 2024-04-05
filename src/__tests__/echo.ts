import { echo } from "../echo";

describe("test echo", () => {
  it("to remove", () => {
    expect(echo(1)).toEqual(1);
  });
});
