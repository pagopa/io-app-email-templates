import { describe, it, expect } from "vitest";
import { NonEmptyString } from "@pagopa/ts-commons/lib/strings";
import * as applier from "../index";

describe("Snapshot testing", () => {
  it("should match snapshot", () => {
    const htmlOutput: string = applier.apply(
      new Date("1970-01-01") as Date,
    );
    expect(htmlOutput).toMatchSnapshot();
  });
});
