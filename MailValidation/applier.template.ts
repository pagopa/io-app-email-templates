const capitalize = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1);

const splitAndCap = (s: string): string =>
  s
    .toLowerCase()
    .split(" ")
    .map((e) => capitalize(e))
    .join(" ");

export function apply(
  title: string,
  validationUrl: string,
  unformattedName?: string,
): string {
  const name = unformattedName ? splitAndCap(unformattedName) : "";
  return `{{TEMPLATE}}`;
}
