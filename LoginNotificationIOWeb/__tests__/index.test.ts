import { describe, it, expect, vi, afterEach } from "vitest";
import * as applier from "../";
import { NonEmptyString } from "@pagopa/ts-commons/lib/strings";

describe("Snapshot testing", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should match snapshot", () => {
    const htmlOutput: string = applier.apply(
      "MARIO" as NonEmptyString,
      "IDP" as NonEmptyString,
      new Date("1970-01-01"),
      "192.168.0.1" as NonEmptyString,
      "https://magiclinkref" as NonEmptyString,
    );
    // expect(mockExtractTime).toHaveBeenCalledTimes(1);
    // expect(mockExtractDate).toHaveBeenCalledTimes(1);

    expect(htmlOutput).toMatchSnapshot();
  });
});
