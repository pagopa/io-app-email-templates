import { NonEmptyString } from "@pagopa/ts-commons/lib/strings";
import { DateFromTimestamp } from "@pagopa/ts-commons/lib/dates";
import { ValidUrl } from "@pagopa/ts-commons/lib/url";
import { extractDate, extractTime } from "../utils/datetime";

export const apply = (
  name: NonEmptyString,
  identityProvider: NonEmptyString,
  dateTime: DateFromTimestamp,
  ipAddress: NonEmptyString,
  accessRefUrl: ValidUrl
): string => {
  const identity_provider = identityProvider;
  const date = extractDate(dateTime);
  const time = extractTime(dateTime);
  const date_time = `${date}, ${time}`;
  const ip_address = ipAddress;
  const accessRef = accessRefUrl.href;
  return `{{TEMPLATE}}`;
};
