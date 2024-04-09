# io-app-email-templates

This repo contains the mail template(s) sent on behalf of IO App and its services. Templates are created using [MJML](https://mjml.io/) markup language along with typescript files.

## How to apply changes

To edit them, you can choose among these following options:

- [Online editor](https://mjml.io/try-it-live)
- [Local installation](https://mjml.io/download)
- [Visual Studio Code plugin](https://marketplace.visualstudio.com/items?itemName=mjmlio.vscode-mjml)

To generate the HTML output you need to install the following CLI tool:

1. [MJML](https://www.npmjs.com/package/mjml) package:

```shell
$ npm install -g mjml && mjml <MJML_INPUT_FILE> -o <OUTPUT_FILE>
```

## Add a new template
Steps:
1. Create a directory on the root of the project with a name of your choice.
2. Put an `apply` method in a typescript file named `applier.template.ts` inside your template directory.
3. Put a generation step inside `package.json`(follow the other scripts as example). This will generate an `index.ts` file with the template inside. 
   Make sure to put `{{TEMPLATE}}` in the method that is going to be replaced with the HTML generated from the mjml file.
4. Generate a snapshot test to make sure the content doesn't change unexpectedly

## Compatibility

Templates are compatible with the following clients:

- Apple Mail 13+ (dark mode included)
- Gmail Web app
- OL Office 365 (dark mode included, partially supported on Windows)
- Outlook 2013, 2016, 2019, 2021 (dark mode included, partially supported on Windows)
- Windows 10 Mail (dark mode partially supported)
- Windows 11 Mail
- Gmail App (Android 6+, dark mode partially supported)
- Gmail App (iOS 13.1+, dark mode partially supported)
- iPad (iOS 13.1+)
- iPhone (iOS 13.1+)
- AOL Mail
- Outlook.com Mail (dark mode partially supported)
- Yahoo! Mail

### Related mail templates

- [Area Riservata (former SelfCare)](https://github.com/pagopa/selfcare-email-templates)
- [Piattaforma Notifiche](https://github.com/pagopa/pn-email-templates)
- [pagoPA](https://github.com/pagopa/pagopa-email-templates)
