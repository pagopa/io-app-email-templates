type SenderMetadata = {
  organizationName: string;
  serviceName: string;
};

export function apply(
  body: string,
  subject: string,
  senderMetadata: SenderMetadata
): string {
  return `{{TEMPLATE}}`;
}
