import { describe, it, expect, vi, afterEach } from "vitest";
import { ValidUrl } from "@pagopa/ts-commons/lib/url";
import { apply } from "../";

describe("Snapshot testing", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should match snapshot", () => {
    const htmlOutput: string = apply("10:00", "20/12/2024", {
      href: "https://test.test/",
    } as ValidUrl);

    expect(htmlOutput).toMatchSnapshot();
  });
});
