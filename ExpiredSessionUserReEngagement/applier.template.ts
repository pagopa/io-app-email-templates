import { ValidUrl } from "@pagopa/ts-commons/lib/url";
import { DateFromTimestamp } from "@pagopa/ts-commons/lib/dates";
import { extractDate } from "../utils/datetime";

export const apply = (
    ctaUrl: ValidUrl,
    date: DateFromTimestamp,
): string => {
    const cta = ctaUrl.href
    const expirationDate = extractDate(date);
    return `{{TEMPLATE}}`;
};