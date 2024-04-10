export const capitalize = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1);

export const splitAndCap = (s: string): string =>
  s.toLowerCase().split(" ").map(capitalize).join(" ");
