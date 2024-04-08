import { describe, expect, test } from "vitest";

import { echo } from "../echo";

describe("test echo", () => {
  test("to remove", () => {
    expect(echo(1)).toEqual(1);
  });
});
