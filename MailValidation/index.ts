const capitalize = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1);

const splitAndCap = (s: string): string =>
  s
    .toLowerCase()
    .split(" ")
    .map((e) => capitalize(e))
    .join(" ");

export function apply(
  title: string,
  validationUrl: string,
  unformattedName?: string,
): string {
  const name = unformattedName ? splitAndCap(unformattedName) : "";
  return `<!doctype html>
<html lang="it" dir="auto" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <title>Conferma il tuo indirizzo email</title>
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
          <!-- Title & Main Message -->
              <tr>
                <td
                   align="left" class="title" style="font-size:0px;padding:10px 25px;padding-top:24px;padding-right:0px;padding-bottom:8px;padding-left:0px;word-break:break-word;"
                >
                  
      <div
         style="font-family:Titillium Web, system-ui, sans-serif;font-size:13px;font-weight:bold;line-height:1;text-align:left;color:#17324D;"
      ><!-- H4 Desktop (from MUI Italia)-->
            <h1 style="font-size: 32px; line-height: 40px; margin: 0">
              ${title}
            </h1></div>
    
                </td>
              </tr>
            
              <tr>
                <td
                   align="left" class="text" style="font-size:0px;padding:10px 25px;padding-top:8px;padding-right:0px;padding-bottom:0px;padding-left:0px;word-break:break-word;"
                >
                  
      <div
         style="font-family:Titillium Web, system-ui, sans-serif;font-size:16px;font-weight:regular;line-height:24px;text-align:left;color:#17324D;"
      ><p style="margin-bottom: 0px">Ciao ${name},</p></div>
    
                </td>
              </tr>
            
              <tr>
                <td
                   align="left" class="text" style="font-size:0px;padding:0px;word-break:break-word;"
                >
                  
      <div
         style="font-family:Titillium Web, system-ui, sans-serif;font-size:16px;font-weight:regular;line-height:24px;text-align:left;color:#17324D;"
      ><!-- Body 1 Desktop (from MUI Italia)-->
            <p>
              premi il pulsante qui sotto per confermare il tuo indirizzo email e torna sull'app IO per
              continuare a navigare!
            </p>
            <p>
              Se non hai richiesto tu questa email, ignorala pure.
            </p></div>
    
                </td>
              </tr>
            
              <tr>
                <td
                   align="left" class="cta" style="font-size:0px;padding:10px 25px;padding-right:0px;padding-left:0px;word-break:break-word;"
                >
                  
      <table
         border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;"
      >
        <tbody>
          <tr>
            <td
               align="center" bgcolor="#0073E6" role="presentation" style="border:none;border-radius:4px;cursor:auto;mso-padding-alt:14px 24px;background:#0073E6;" valign="middle"
            >
              <a
                 href="${validationUrl}" style="display:inline-block;background:#0073E6;color:white;font-family:Titillium Web, system-ui, sans-serif;font-size:16px;font-weight:bold;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:14px 24px;mso-padding-alt:0px;border-radius:4px;" target="_blank"
              >
                Procedi con la conferma
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    
                </td>
              </tr>
            
              <tr>
                <td
                   align="left" class="text" style="font-size:0px;padding:0px;word-break:break-word;"
                >
                  
      <div
         style="font-family:Titillium Web, system-ui, sans-serif;font-size:16px;font-weight:regular;line-height:24px;text-align:left;color:#17324D;"
      ><p>
              Se hai problemi, copia e incolla il seguente indirizzo in una nuova
              scheda del browser:
              <a
                href="${validationUrl}"
                style="color: #0073e6"
                class="link"
                >${validationUrl}</a
              >
            </p></div>
    
                </td>
              </tr>
            
              <tr>
                <td
                   align="left" class="text" style="font-size:0px;padding:10px 25px;padding-top:8px;padding-right:0px;padding-left:0px;word-break:break-word;"
                >
                  
      <div
         style="font-family:Titillium Web, system-ui, sans-serif;font-size:16px;line-height:24px;text-align:left;color:#17324D;"
      ><p style="margin-top: 0px">
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
        <!-- Divider --><!-- mj-include fails to read file : ../utils/partials/divider.mjml at /Users/gabriele.mendolia/Desktop/Work/pagopa/utils/partials/divider.mjml --><!-- Footer --><!-- mj-include fails to read file : ../utils/partials/footer-mail-validation.mjml at /Users/gabriele.mendolia/Desktop/Work/pagopa/utils/partials/footer-mail-validation.mjml -->
    
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
}
