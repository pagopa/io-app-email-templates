import { describe, it, expect, vi, afterEach } from "vitest";
import { ValidUrl } from "@pagopa/ts-commons/lib/url";
import { FiscalCode } from "@pagopa/ts-commons/lib/strings";
import { apply } from "../";

describe("Snapshot testing", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should match snapshot", () => {
    const htmlOutput: string = apply(
      "LVTEST00A00A0001" as FiscalCode,
      "10:00",
      "20/12/2024",
      { href: "https://test.test/" } as ValidUrl
    );

    expect(htmlOutput).toMatchSnapshot();
  });
});
