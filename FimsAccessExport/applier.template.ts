export const apply = (
  date: Date,
): string => {
  const formattedDate = date.toLocaleDateString("it-IT", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit"
  });
  return `{{TEMPLATE}}`;
};
