import { NonEmptyString } from "@pagopa/ts-commons/lib/strings";
import { DateFromTimestamp } from "@pagopa/ts-commons/lib/dates";
import { extractDate } from "../utils/datetime";

export const apply = (
  name: NonEmptyString,
  dateTime: DateFromTimestamp,
): string => {
  const opportunityName = name;
  const availabilityDate = extractDate(dateTime);
  return `{{TEMPLATE}}`;
};
