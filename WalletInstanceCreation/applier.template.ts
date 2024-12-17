import { ValidUrl } from "@pagopa/ts-commons/lib/url";

export const apply = (
  faqLinkURL: ValidUrl,
  ioAppLinkURL: ValidUrl,
): string => {
  const faqLink = faqLinkURL.href;
  const ioAppLink = ioAppLinkURL.href;
  return `{{TEMPLATE}}`;
};
