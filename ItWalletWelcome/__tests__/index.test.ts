import { describe, it, expect, vi, afterEach } from "vitest";
import { ValidUrl } from "@pagopa/ts-commons/lib/url";
import { apply } from "../";

describe("Snapshot testing", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should match snapshot", () => {
    const htmlOutput: string = apply(
      {
        href: "https://test.test/help-center",
      } as ValidUrl,
      {
        href: "https://test.test/disable-it-wallet",
      } as ValidUrl,
      {
        href: "https://test.test/io-web-app",
      } as ValidUrl
    );

    expect(htmlOutput).toMatchSnapshot();
  });

  it("should include every link in the right place", () => {
    const htmlOutput: string = apply(
      {
        href: "https://test.test/help-center",
      } as ValidUrl,
      {
        href: "https://test.test/disable-it-wallet",
      } as ValidUrl,
      {
        href: "https://test.test/io-web-app",
      } as ValidUrl
    );

    expect(htmlOutput).toMatch(
      /href="https:\/\/test\.test\/help-center"[^>]*>\s*Centro assistenza di IO/
    );
    expect(htmlOutput).toMatch(
      /href="https:\/\/test\.test\/disable-it-wallet"[^>]*>\s*disattivare questa funzionalità/
    );
    expect(htmlOutput).toMatch(
      /href="https:\/\/test\.test\/io-web-app"[^>]*>\s*visita il sito di IO/
    );
  });
});
