import { splitAndCap } from "../utils/capitalize";

export function apply(
  title: string,
  validationUrl: string,
  unformattedName?: string
): string {
  const name = unformattedName ? splitAndCap(unformattedName) : "";
  return `{{TEMPLATE}}`;
}
