import { ValidUrl } from "@pagopa/ts-commons/lib/url";

export const apply = (
  revocationTime: string,
  revocationDate: string,
  blockAccessLinkURL: ValidUrl,
): string => {
  const blockAccessLink = blockAccessLinkURL.href;
  return `{{TEMPLATE}}`;
};
