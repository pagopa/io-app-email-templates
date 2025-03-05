import { describe, it, expect } from "vitest";
import * as applier from "../index";
import { ValidUrl } from "@pagopa/ts-commons/lib/url";

describe("Snapshot testing", () => {
  it("should match snapshot", () => {
    const htmlOutput: string = applier.apply(
      { href: "https://test.test/" } as ValidUrl,
      new Date("2022-01-01T00:00:00Z")
    );
    expect(htmlOutput).toMatchSnapshot();
  });
});
