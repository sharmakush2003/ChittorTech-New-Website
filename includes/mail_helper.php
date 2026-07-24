<?php
// Reusable mail helper using PHPMailer with SMTP and native mail fallback

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

function send_lead_email($to, $subject, $body, $headers = '') {
    $configFile = __DIR__ . '/../mail_config.php';
    
    // Check if configuration exists and credentials are not default placeholders
    $useSMTP = false;
    if (file_exists($configFile)) {
        require_once $configFile;
        if (defined('SMTP_USER') && SMTP_USER !== 'your-company-email@gmail.com' && defined('SMTP_PASS') && SMTP_PASS !== '') {
            $useSMTP = true;
        }
    }

    if (!$useSMTP) {
        // Fallback to native PHP mail function if config is missing
        return @mail($to, $subject, $body, $headers);
    }

    // Require PHPMailer classes
    require_once __DIR__ . '/PHPMailer/Exception.php';
    require_once __DIR__ . '/PHPMailer/PHPMailer.php';
    require_once __DIR__ . '/PHPMailer/SMTP.php';

    $mail = new PHPMailer(true);

    try {
        // SMTP Server settings
        $mail->isSMTP();
        $mail->Host       = SMTP_HOST;
        $mail->SMTPAuth   = true;
        $mail->Username   = SMTP_USER;
        $mail->Password   = SMTP_PASS;
        $mail->SMTPSecure = (SMTP_PORT == 465) ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = SMTP_PORT;

        // Sender details
        $mail->setFrom(SMTP_USER, SMTP_FROM_NAME);

        // Embed the cropped colorful company logo icon if it exists
        $logoPath = __DIR__ . '/../assets/images/logo_icon.png';
        $hasLogo = false;
        if (file_exists($logoPath)) {
            try {
                $mail->addEmbeddedImage($logoPath, 'digify_logo');
                $hasLogo = true;
            } catch (Exception $e) {
                $hasLogo = false;
            }
        }

        // Add multiple recipients if comma-separated
        $recipients = explode(',', $to);
        foreach ($recipients as $recipient) {
            $trimmed = trim($recipient);
            if ($trimmed !== '') {
                $mail->addAddress($trimmed);
            }
        }

        // Add BCC if defined
        if (defined('SMTP_BCC_EMAIL') && SMTP_BCC_EMAIL !== '') {
            $mail->addBCC(SMTP_BCC_EMAIL);
        }

        // Parse the plaintext body into structured HTML format
        $title = "New Lead Captured";
        if (preg_match('/^(You have received.*)$/m', $body, $titleMatch)) {
            $title = trim($titleMatch[1]);
        }

        $rowsHtml = '';
        $messageHtml = '';
        
        $messageText = '';
        if (preg_match('/(?:Message|Remark):\s*\n?(.*)$/is', $body, $messageMatch)) {
            $messageText = trim($messageMatch[1]);
        }

        $cleanBody = $body;
        $cleanBody = preg_replace('/^You have received.*$/m', '', $cleanBody);
        $cleanBody = preg_replace('/(?:Message|Remark):\s*\n?.*$/is', '', $cleanBody);

        if (preg_match_all('/^([\w\s\-]+):\s*(.+)$/m', $cleanBody, $matches, PREG_SET_ORDER)) {
            $total = count($matches);
            $i = 0;
            foreach ($matches as $match) {
                $key = htmlspecialchars(trim($match[1]));
                $rawVal = trim($match[2]);
                if (filter_var($rawVal, FILTER_VALIDATE_URL)) {
                    $valHtml = "<a href='" . htmlspecialchars($rawVal, ENT_QUOTES) . "' target='_blank' style='color: #0d6efd; text-decoration: underline; word-break: break-all;'>" . htmlspecialchars($rawVal) . "</a>";
                } else {
                    $valHtml = htmlspecialchars($rawVal);
                }
                $isLast = ($i === $total - 1);
                $borderStyle = $isLast ? '' : "border-bottom: 1px solid #f1f3f5; padding-bottom: 10px; margin-bottom: 12px;";
                $rowsHtml .= "
                <div style='text-align: left; {$borderStyle}'>
                    <strong style='color: #495057; font-size: 14px;'>{$key}:</strong>
                    <span style='color: #212529; font-size: 14px; margin-left: 5px; word-break: break-all;'>{$valHtml}</span>
                </div>";
                $i++;
            }
        }

        if ($messageText !== '') {
            $escapedMessage = nl2br(htmlspecialchars($messageText));
            $messageHtml = "
            <div style='background: #fff8f2; border-left: 4px solid #fd7e14; padding: 15px; border-radius: 6px; margin-top: 20px; text-align: left;'>
                <div style='font-weight: 600; color: #fd7e14; margin-bottom: 5px; font-size: 13px; text-transform: uppercase;'>Message / Requirements</div>
                <div style='color: #495057; font-size: 14px; line-height: 1.5;'>{$escapedMessage}</div>
            </div>";
        }

        $logoHeader = "";
        if ($hasLogo) {
            $logoHeader = "
            <div style='background: #ffffff; padding: 18px 20px; text-align: center; border-bottom: 1px solid #e9ecef; line-height: 1.5;'>
                <div style='display: inline-block; vertical-align: middle; margin: 5px 2px;'>
                    <img src='cid:digify_logo' alt='Digify' style='height: 40px; max-height: 40px; width: auto; display: block; margin: 0 auto;'>
                </div>
                <div style='display: inline-block; vertical-align: middle; margin: 5px 2px; font-weight: 700; font-size: 18px; color: #212529; letter-spacing: 0.5px;'>
                    Digify Soft Solutions
                </div>
            </div>";
        } else {
            $logoHeader = "
            <div style='background: #ffffff; padding: 18px 20px; text-align: center; border-bottom: 1px solid #e9ecef; line-height: 1.5;'>
                <div style='display: inline-block; vertical-align: middle; margin: 5px 2px;'>
                    <span style='background-color: #0d6efd; color: #ffffff; font-weight: 800; font-size: 20px; padding: 6px 14px; border-radius: 8px; display: inline-block; box-shadow: 0 2px 4px rgba(13,110,253,0.15);'>D</span>
                </div>
                <div style='display: inline-block; vertical-align: middle; margin: 5px 2px; font-weight: 700; font-size: 18px; color: #212529; letter-spacing: 0.5px;'>
                    Digify Soft Solutions
                </div>
            </div>";
        }

        $htmlContent = "
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset='utf-8'>
        </head>
        <body style=\"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f9; color: #333333; margin: 0; padding: 20px;\">
            <div style='max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #e9ecef;'>
                {$logoHeader}
                <div style='background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%); color: #ffffff; padding: 25px 20px; text-align: center;'>
                    <h1 style='margin: 0; font-size: 20px; font-weight: 700;'>{$title}</h1>
                    <p style='margin: 5px 0 0 0; font-size: 13px; opacity: 0.9;'>Digify CRM Lead System</p>
                </div>
                <div style='padding: 25px 20px;'>
                    <div style='background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 20px 20px; box-sizing: border-box;'>
                        {$rowsHtml}
                    </div>
                    {$messageHtml}
                </div>
                <div style='text-align: center; padding: 15px; font-size: 12px; color: #adb5bd; background-color: #f8f9fa; border-top: 1px solid #e9ecef;'>
                    This is an automated lead notification from our Digify Website made with ❤️ by Kush Sharma.
                </div>
            </div>
        </body>
        </html>";

        // Set HTML format
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $htmlContent;
        $mail->AltBody = strip_tags($body);

        $mail->send();
        return true;
    } catch (Exception $e) {
        // Log the error and fallback to PHP mail if SMTP fails
        error_log("PHPMailer SMTP Error: " . $mail->ErrorInfo . ". Falling back to native mail().");
        if (defined('SMTP_BCC_EMAIL') && SMTP_BCC_EMAIL !== '') {
            $headers = trim($headers);
            $headers .= ($headers !== '' ? "\r\n" : "") . "Bcc: " . SMTP_BCC_EMAIL;
        }
        return @mail($to, $subject, $body, $headers);
    }
}
