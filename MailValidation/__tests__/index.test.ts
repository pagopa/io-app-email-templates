import { it, expect, describe } from "vitest";
import { apply } from "../";

describe("Snapshot testing", () => {
  it("should match snapshot", () => {
    const htmlOutput: string = apply(
      "A_TITLE",
      "A_VALIDATION_URL",
      "MARIO ROSSI"
    );

    expect(htmlOutput).toMatchSnapshot();
  });
});
