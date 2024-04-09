import * as fs from "fs";
import * as path from "path";
import mjml2html from "mjml";

const LOCAL_ASSET_REGEX = /\.\.\/assets\//g;
const REMOTE_ASSET_BASE_URL = (version: string): string =>
  `https://raw.githubusercontent.com/pagopa/io-messages-email-templates/${version}/assets/`;

const writeFile = (mjmlDirectory: string) => {
  try {
    const mjmlContent: string = fs.readFileSync(
      path.resolve(__dirname, "../" + mjmlDirectory + "/index.mjml"),
      "utf8"
    );
    const html: string = mjml2html(mjmlContent).html.replace(
      LOCAL_ASSET_REGEX,
      REMOTE_ASSET_BASE_URL
    );

    const emailApplierTemplate = fs.readFileSync(
      path.resolve(__dirname, "../" + mjmlDirectory + "/applier.template.ts"),
      "utf8"
    );

    const templatePosition = emailApplierTemplate.indexOf("{{TEMPLATE}}");
    // throw custom error in case template string was not found
    if (templatePosition == -1)
      throw Error(
        "Template string( {{TEMPLATE}} ) not found in template file. Make sure you haven't left empty spaces"
      );
    const content = emailApplierTemplate.replace("{{TEMPLATE}}", html);

    fs.writeFileSync(
      path.resolve(__dirname, "../" + mjmlDirectory + "/index.ts"),
      content
    );
  } catch (e) {
    console.error("Error while executing script");
    console.error(e);
    process.exit(1);
  }
};

writeFile(process.argv[2]);
