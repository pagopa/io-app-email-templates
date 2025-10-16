import { ValidUrl } from "@pagopa/ts-commons/lib/url";

export const apply = (
  name: string,
  revocationTime: string,
  revocationDate: string,
  blockAccessLinkURL: ValidUrl,
): string => {
  const blockAccessLink = blockAccessLinkURL.href;
  return `{{TEMPLATE}}`;
};
