import { ValidUrl } from "@pagopa/ts-commons/lib/url";

export const apply = (
  helpCenterLinkURL: ValidUrl,
  disableItWalletLinkURL: ValidUrl,
  ioWebAppLinkUrl: ValidUrl,
): string => {
  const helpCenterLink = helpCenterLinkURL.href;
  const disableItWalletLink = disableItWalletLinkURL.href;
  const ioWebAppLink = ioWebAppLinkUrl.href;
  return `{{TEMPLATE}}`;
};
