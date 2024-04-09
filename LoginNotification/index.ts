import moment from "moment-timezone";

import { NonEmptyString } from "@pagopa/ts-commons/lib/strings";
import { DateFromTimestamp } from "@pagopa/ts-commons/lib/dates";
import { ValidUrl } from "@pagopa/ts-commons/lib/url";

const TIME_ZONE = "Europe/Rome";
const TIME_FORMAT = "HH:mm";
const DATE_FORMAT = "DD/MM/YYYY";

const extractTime = (d: Date): string =>
  moment(d).tz(TIME_ZONE).format(TIME_FORMAT);

const extractDate = (d: Date): string =>
  moment(d).tz(TIME_ZONE).format(DATE_FORMAT);

export const apply = (
  name: NonEmptyString,
  identityProvider: NonEmptyString,
  dateTime: DateFromTimestamp,
  ipAddress: NonEmptyString,
  accessRefUrl: ValidUrl,
): string => {
  const identity_provider = identityProvider;
  const date = extractDate(dateTime);
  const time = extractTime(dateTime);
  const date_time = `${date}, ${time}`;
  const ip_address = ipAddress;
  const accessRef = accessRefUrl.href;
  return `<!doctype html>
<html lang="it" dir="auto" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <title>Nuovo accesso a IO</title>
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
      #outlook a { padding:0; }
      body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
      table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
      img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
      p { display:block;margin:13px 0; }
    </style>
    <!--[if mso]>
    <noscript>
    <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    </noscript>
    <![endif]-->
    <!--[if lte mso 11]>
    <style type="text/css">
      .mj-outlook-group-fix { width:100% !important; }
    </style>
    <![endif]-->
    
      <!--[if !mso]><!-->
        <link href="https://selfcare.pagopa.it/assets/font/selfhostedfonts.css" rel="stylesheet" type="text/css">
        <style type="text/css">
          @import url(https://selfcare.pagopa.it/assets/font/selfhostedfonts.css);
        </style>
      <!--<![endif]-->

    
    
    <style type="text/css">
      @media only screen and (min-width:480px) {
        .mj-column-per-100 { width:100% !important; max-width: 100%; }
      }
    </style>
    <style media="screen and (min-width:480px)">
      .moz-text-html .mj-column-per-100 { width:100% !important; max-width: 100%; }
    </style>
    
    
  
    
    
    <meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />
      <meta name="color-scheme" content="light dark" />
      <meta name="supported-color-schemes" content="light dark" />
  </head>
  <body style="word-spacing:normal;">
    
    
      <div
         class="mail-body" style="" lang="it" dir="auto"
      >
        <!-- mj-include fails to read file : ../utils/style.css at /Users/gabriele.mendolia/Desktop/Work/pagopa/utils/style.css -->
      
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    
      
      <div  style="margin:0px auto;max-width:600px;">
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
        >
          <tbody>
            <tr>
              <td
                 style="direction:ltr;font-size:0px;padding:20px 0;padding-left:20px;padding-right:20px;text-align:center;"
              >
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><![endif]-->
                  
      <!-- App IO Logo --><!-- mj-include fails to read file : ../utils/partials/main-logo.mjml at /Users/gabriele.mendolia/Desktop/Work/pagopa/utils/partials/main-logo.mjml -->
          <!--[if mso | IE]><tr><td class="section-outlook" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="section-outlook" role="presentation" style="width:560px;" width="560" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    
      
      <div  class="section" style="margin:0px auto;max-width:560px;">
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
        >
          <tbody>
            <tr>
              <td
                 style="direction:ltr;font-size:0px;padding:0px;padding-bottom:8px;text-align:center;"
              >
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:560px;" ><![endif]-->
            
      <div
         class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
      >
        
      <table
         border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
      >
        <tbody>
          <!-- Title & Main Message -->
              <tr>
                <td
                   align="left" class="title" style="font-size:0px;padding:10px 25px;padding-top:24px;padding-right:0px;padding-bottom:8px;padding-left:0px;word-break:break-word;"
                >
                  
      <div
         style="font-family:Titillium Web, system-ui, sans-serif;font-size:13px;font-weight:bold;line-height:1;text-align:left;color:#17324D;"
      ><!-- H4 Desktop (from MUI Italia)-->
            <h1 style="font-size: 32px; line-height: 36px; margin: 0">
              Nuovo accesso a IO
            </h1></div>
    
                </td>
              </tr>
            
              <tr>
                <td
                   align="left" class="text" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;word-break:break-word;"
                >
                  
      <div
         style="font-family:Titillium Web, system-ui, sans-serif;font-size:16px;font-weight:regular;line-height:24px;text-align:left;color:#17324D;"
      ><!-- Body 1 Desktop (from MUI Italia)-->
            <p>
              Ciao ${name}, <br />
              alle ${time} del ${date}, hai effettuato l'accesso a IO con la tua identità digitale.<br />
              Non eri tu?
              <a href="${accessRef}" style="color: #0073e6" class="link"
                >Accedi a IO dal web e blocca l'accesso.</a
              >
            </p>
            <br />
            <p>Dati di accesso:</p></div>
    
                </td>
              </tr>
            
        </tbody>
      </table>
    
      </div>
    
          <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
      
      <!--[if mso | IE]></td></tr></table></td></tr><tr><td class="message-preview-outlook" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="message-preview-outlook" role="presentation" style="width:560px;" width="560" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    
      
      <div  class="message-preview" style="margin:0px auto;border-radius:8px;max-width:560px;">
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;border-radius:8px;"
        >
          <tbody>
            <tr>
              <td
                 style="direction:ltr;font-size:0px;padding:24px;text-align:left;"
              >
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:512px;" ><![endif]-->
            
      <div
         class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
      >
        
      <table
         border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
      >
        <tbody>
          
              <tr>
                <td
                   align="left" class="text" style="font-size:0px;padding:0;word-break:break-word;"
                >
                  
      <div
         style="font-family:Titillium Web, system-ui, sans-serif;font-size:14px;font-weight:bold;line-height:20px;text-align:left;color:#17324D;"
      >Identity Provider</div>
    
                </td>
              </tr>
            
              <tr>
                <td
                   align="left" class="text" style="font-size:0px;padding:0;word-break:break-word;"
                >
                  
      <div
         style="font-family:Titillium Web, system-ui, sans-serif;font-size:14px;font-weight:regular;line-height:20px;text-align:left;color:#17324D;"
      >${identity_provider}</div>
    
                </td>
              </tr>
            
              <tr>
                <td
                   align="center" class="divider" style="font-size:0px;padding:10px 25px;padding-top:16px;padding-right:0px;padding-bottom:16px;padding-left:0px;word-break:break-word;"
                >
                  
      <p
         style="border-top:solid 1px #E3E7EB;font-size:1px;margin:0px auto;width:100%;"
      >
      </p>
      
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #E3E7EB;font-size:1px;margin:0px auto;width:512px;" role="presentation" width="512px" ><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table><![endif]-->
    
    
                </td>
              </tr>
            
              <tr>
                <td
                   align="left" class="text" style="font-size:0px;padding:0;word-break:break-word;"
                >
                  
      <div
         style="font-family:Titillium Web, system-ui, sans-serif;font-size:14px;font-weight:bold;line-height:20px;text-align:left;color:#17324D;"
      >Data e ora</div>
    
                </td>
              </tr>
            
              <tr>
                <td
                   align="left" class="text" style="font-size:0px;padding:0;word-break:break-word;"
                >
                  
      <div
         style="font-family:Titillium Web, system-ui, sans-serif;font-size:14px;font-weight:regular;line-height:20px;text-align:left;color:#17324D;"
      >${date_time}</div>
    
                </td>
              </tr>
            
              <tr>
                <td
                   align="center" class="divider" style="font-size:0px;padding:10px 25px;padding-top:16px;padding-right:0px;padding-bottom:16px;padding-left:0px;word-break:break-word;"
                >
                  
      <p
         style="border-top:solid 1px #E3E7EB;font-size:1px;margin:0px auto;width:100%;"
      >
      </p>
      
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #E3E7EB;font-size:1px;margin:0px auto;width:512px;" role="presentation" width="512px" ><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table><![endif]-->
    
    
                </td>
              </tr>
            
              <tr>
                <td
                   align="left" class="text" style="font-size:0px;padding:0;word-break:break-word;"
                >
                  
      <div
         style="font-family:Titillium Web, system-ui, sans-serif;font-size:14px;font-weight:bold;line-height:20px;text-align:left;color:#17324D;"
      >Indirizzo IP</div>
    
                </td>
              </tr>
            
              <tr>
                <td
                   align="left" class="text" style="font-size:0px;padding:0;word-break:break-word;"
                >
                  
      <div
         style="font-family:Titillium Web, system-ui, sans-serif;font-size:14px;font-weight:regular;line-height:20px;text-align:left;color:#17324D;"
      >${ip_address}</div>
    
                </td>
              </tr>
            
        </tbody>
      </table>
    
      </div>
    
          <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
      
      <!--[if mso | IE]></td></tr></table></td></tr><tr><td class="section-outlook" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="section-outlook" role="presentation" style="width:560px;" width="560" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    
      
      <div  class="section" style="margin:0px auto;max-width:560px;">
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
        >
          <tbody>
            <tr>
              <td
                 style="direction:ltr;font-size:0px;padding:0px;text-align:center;"
              >
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:560px;" ><![endif]-->
            
      <div
         class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
      >
        
      <table
         border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
      >
        <tbody>
          
              <tr>
                <td
                   align="left" class="text" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;word-break:break-word;"
                >
                  
      <div
         style="font-family:Titillium Web, system-ui, sans-serif;font-size:16px;font-weight:regular;line-height:24px;text-align:left;color:#17324D;"
      ><p style="margin-top: 0px">
              <br />
              A presto,<br aria-hidden="true" />il team di PagoPA S.p.A.
            </p></div>
    
                </td>
              </tr>
            
        </tbody>
      </table>
    
      </div>
    
          <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
      
      <!--[if mso | IE]></td></tr></table></td></tr><![endif]-->
        <!-- Divider --><!-- mj-include fails to read file : ../utils/partials/divider.mjml at /Users/gabriele.mendolia/Desktop/Work/pagopa/utils/partials/divider.mjml --><!-- Footer --><!-- mj-include fails to read file : ../utils/partials/footer-login-notification.mjml at /Users/gabriele.mendolia/Desktop/Work/pagopa/utils/partials/footer-login-notification.mjml -->
    
                <!--[if mso | IE]></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
      
      <!--[if mso | IE]></td></tr></table><![endif]-->
    
    
      </div>
    
  </body>
</html>
  `;
};
