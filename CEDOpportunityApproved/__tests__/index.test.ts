import { describe, it, expect, vi, afterEach } from "vitest";
import * as applier from "../";
import { NonEmptyString } from "@pagopa/ts-commons/lib/strings";

describe("Snapshot testing", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should match snapshot", () => {
    const htmlOutput: string = applier.apply(
      "Opportunità test" as NonEmptyString,
      new Date("1970-01-01"),
      "PagoPA" as NonEmptyString
    );

    expect(htmlOutput).toMatchSnapshot();
  });
});
