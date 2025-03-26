import { it, expect, describe } from "vitest";
import { apply } from "../";

describe("Snapshot testing", () => {
  it("should match snapshot", () => {
    const htmlOutput: string = apply("a sample body", "a sample subject", {
      organizationName: "organizationName",
      serviceName: "serviceName",
    });

    expect(htmlOutput).toMatchSnapshot();
  });
});
