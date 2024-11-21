import { describe, it, expect } from "vitest";
import * as applier from "../index";

describe("Snapshot testing", () => {
  it("should match snapshot", () => {
    const htmlOutput: string = applier.apply(
      new Date("1970-01-01"),
    );
    expect(htmlOutput).toMatchSnapshot();
  });
});
