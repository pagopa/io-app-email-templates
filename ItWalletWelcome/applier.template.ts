import { ValidUrl } from "@pagopa/ts-commons/lib/url";

export const apply = (
  disableItWalletLinkURL: ValidUrl,
  ioWebAppLinkUrl: ValidUrl
): string => {
  const disableItWalletLink = disableItWalletLinkURL.href;
  const ioWebAppLink = ioWebAppLinkUrl.href;
  return `{{TEMPLATE}}`;
};
