import { DateFromTimestamp } from "@pagopa/ts-commons/lib/dates";
import { extractDate } from "../utils/datetime";


export const apply = (
    expirationDateTime: DateFromTimestamp,
): string => {
    const expirationDate = extractDate(expirationDateTime);
    return `{{TEMPLATE}}`;
};