import { ValidUrl } from "@pagopa/ts-commons/lib/url";

export const apply = (
    ctaUrl: ValidUrl,
): string => {
    const cta = ctaUrl.href
    return `{{TEMPLATE}}`;
};