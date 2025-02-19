import { describe, it, expect } from "vitest";
import * as applier from "../index";
import { ValidUrl } from "@pagopa/ts-commons/lib/url";

describe("Snapshot testing", () => {
  it("should match snapshot", () => {
    const htmlOutput: string = applier.apply(
      { href: "utm" } as ValidUrl
    );
    expect(htmlOutput).toMatchSnapshot();
  });
});
