import { FiscalCode } from "@pagopa/ts-commons/lib/strings";
import { ValidUrl } from "@pagopa/ts-commons/lib/url";

export const apply = (
  fiscalCode: FiscalCode,
  revocationTime: string,
  revocationDate: string,
  blockAccessLinkURL: ValidUrl,
): string => {
  const blockAccessLink = blockAccessLinkURL.href;
  return `{{TEMPLATE}}`;
};
