<?php
include 'fetch_meta.php';
include 'db.php';

/* =========================
   FORM PROCESSING FIRST
========================= */
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    require_once __DIR__ . '/includes/mail_helper.php';

    if ($conn) {
        $name     = mysqli_real_escape_string($conn, trim($_POST["name"] ?? ''));
        $email    = mysqli_real_escape_string($conn, trim($_POST["email"] ?? ''));
        $mobile   = mysqli_real_escape_string($conn, trim($_POST["mobile"] ?? ''));
        $location = mysqli_real_escape_string($conn, trim($_POST["location"] ?? ''));
        $industry = mysqli_real_escape_string($conn, trim($_POST["industry"] ?? ''));
        $whatsapp = mysqli_real_escape_string($conn, trim($_POST["whatsapp"] ?? ''));
        $state    = mysqli_real_escape_string($conn, trim($_POST["state"] ?? ''));
        $firm     = mysqli_real_escape_string($conn, trim($_POST["firm"] ?? ''));
        $remark   = mysqli_real_escape_string($conn, trim($_POST["remark"] ?? ''));
        $coords   = mysqli_real_escape_string($conn, trim($_POST["coords"] ?? ''));
        $tdate    = date('Y-m-d');

        $remarkDb = ($coords !== '') ? $remark . "\n[Coordinates: " . $coords . "]" : $remark;

        // Insert lead
        mysqli_query(
            $conn,
            "INSERT INTO sf_lead_master
            (partyid, email, number, whatsappnumber, party_city, industry, party_state, firm, intial_remark, status, tdate)
            VALUES
            ('$name', '$email', '$mobile', '$whatsapp', '$location', '$industry', '$state', '$firm', '$remarkDb', 7,'$tdate')"
        );

        $last_id = mysqli_insert_id($conn);
        $reference = "LD" . str_pad($last_id, 3, "0", STR_PAD_LEFT);
        $insertweb = "
            INSERT INTO website_contact_enquiries 
            (name, email, mobile, whatsapp, location, industry, state, firm, remark, created_at)
            VALUES 
            ('$name', '$email', '$mobile', '$whatsapp', '$location', '$industry', '$state', '$firm', '$remarkDb', NOW())
        ";
        $dbSuccess = mysqli_query($conn, $insertweb);
        mysqli_query($conn, "UPDATE sf_lead_master SET reference='$reference' WHERE lid='$last_id'");

        mysqli_query(
            $conn,
            "INSERT INTO sf_status_history 
             SET party_id='$name',
                 status_id='7',
                 trans_type='add_lead',
                 trans_no='$reference'"
        );
    } else {
        $name     = addslashes(trim($_POST["name"] ?? ''));
        $email    = addslashes(trim($_POST["email"] ?? ''));
        $mobile   = addslashes(trim($_POST["mobile"] ?? ''));
        $location = addslashes(trim($_POST["location"] ?? ''));
        $industry = addslashes(trim($_POST["industry"] ?? ''));
        $whatsapp = addslashes(trim($_POST["whatsapp"] ?? ''));
        $state    = addslashes(trim($_POST["state"] ?? ''));
        $firm     = addslashes(trim($_POST["firm"] ?? ''));
        $remark   = addslashes(trim($_POST["remark"] ?? ''));
        $coords   = addslashes(trim($_POST["coords"] ?? ''));
        $reference = "LD-PENDING";
    }
$to = defined('SMTP_TO_EMAIL') ? SMTP_TO_EMAIL : "gautamalik1@gmail.com,pragatimodi10@gmail.com";
        $subject = "[Contact Us Page] Lead from $name";

        $body  = "You have received a new lead from the Contact Us Page:\n\n";
        $body .= "Name: $name\n";
        $body .= "Email: $email\n";
        $body .= "Industry: $industry\n";
        $body .= "Contact: $mobile\n";
        $body .= "Firm: $firm\n";
        if (trim($_POST["location"] ?? '') !== '') {
            $body .= "Location: " . trim($_POST["location"]) . "\n";
        }
        if (trim($_POST["coords"] ?? '') !== '') {
            $body .= "Coordinates: " . trim($_POST["coords"]) . "\n";
        }
        $body .= "\nMessage:\n$remark\n";

        $headers  = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/plain; charset=UTF-8\r\n";
        $headers .= "From: Digify Website <support-noreply@digify.com>\r\n";

        send_lead_email($to, $subject, $body, $headers);
    header("Location: contact-us.php?success=1&ref=".$reference);
    exit();
}


/* =========================
   NOW LOAD HTML
========================= */

$pageMeta = getPageMeta('contact-us');
$pageTitle = $pageMeta['page_title'] ?? 'Contact Us - Digify Soft Solutions';
$pageDescription = $pageMeta['page_description'] ?? '';

include 'top.php';
include 'header.php';

$msg = '';

if(isset($_GET['success'])){
    if($_GET['success'] == 1){
        $msg = '<div class="alert alert-success mt-3">
           Thank you! We will contact you soon.
        </div>';
    }
    if($_GET['success'] == 2){
        $msg = '<div class="alert alert-danger mt-3">
            Lead already exists with this mobile number.
        </div>';
    }
}
?>



<section class="contact-section-new" style="padding-top: 60px; padding-bottom: 80px; background: #f8f9fa;">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">

        <!-- Contact Form -->
        <div class="contact-form-premium animate__animated animate__fadeInUp mb-5" style="box-shadow: 0 15px 35px rgba(0,0,0,0.05); background: #fff; padding: 40px; border-radius: 20px;">
          <div class="form-header mb-4 text-center">
            <h3 class="fw-bold text-dark mb-1">Send a Message</h3>
            <p class="text-muted small">Required fields are marked with *</p>
          </div>
          <?= $msg ?>
          <form action="" method="post" class="row g-3">
            <div class="col-md-6">
              <div class="premium-input-group">
                <label class="form-label fw-bold small text-muted">FULL NAME*</label>
                <div class="input-with-icon">
                  <i class="fas fa-user"></i>
                  <input type="text" name="name" class="form-control" placeholder="John Doe" required>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="premium-input-group">
                <label class="form-label fw-bold small text-muted">MOBILE NUMBER*</label>
                <div class="input-with-icon">
                  <i class="fas fa-phone"></i>
                  <input type="text" name="mobile" class="form-control" placeholder="+91 0000000000" required>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="premium-input-group">
                <label class="form-label fw-bold small text-muted">EMAIL ADDRESS*</label>
                <div class="input-with-icon">
                  <i class="fas fa-envelope"></i>
                  <input type="email" name="email" class="form-control" placeholder="example@email.com" required>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="premium-input-group">
                <label class="form-label fw-bold small text-muted">INDUSTRY TYPE*</label>
                <div class="input-with-icon">
                  <i class="fas fa-industry"></i>
                  <select name="industry" class="form-select" required>
                    <option value="">Select Industry</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Trading">Trading</option>
                    <option value="Retail">Retail</option>
                    <option value="Services">Services</option>
                    <option value="Any other">Any other</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="premium-input-group">
                <label class="form-label fw-bold small text-muted">CITY / LOCATION*</label>
                <div class="input-group" style="border-radius: 10px; overflow: hidden; border: 1px solid #e2e8f0; background: #f8fafc;">
                  <span class="input-group-text" style="background: transparent; border: none; padding-left: 15px; padding-right: 15px; color: #94a3b8;"><i class="fas fa-map-marker-alt"></i></span>
                  <input type="text" id="contactLocation" name="location" class="form-control" placeholder="Enter City" required style="border: none; background: transparent; height: 50px; font-size: 0.95rem; color: #334155; box-shadow: none;">
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="premium-input-group">
                <label class="form-label fw-bold small text-muted">MESSAGE / REQUIREMENTS</label>
                <textarea name="remark" class="form-control" placeholder="Tell us more about your needs..." style="height: 120px; padding-left: 15px;"></textarea>
              </div>
            </div>
            <div class="col-12 text-center mt-4">
              <button type="submit" class="premium-submit-btn" style="padding: 12px 30px; font-weight: bold;">
                Send Message <i class="fas fa-paper-plane ms-2"></i>
              </button>
            </div>
          </form>
        </div>

        <!-- Contact Info Cards -->
        <div class="contact-info-wrap mt-5">
          <div class="row g-4 justify-content-center">
            <div class="col-md-4">
              <div class="info-card flex-column text-center h-100 animate__animated animate__fadeInUp" style="border-top: 5px solid #0d6efd; padding-top: 30px;">
                <div class="info-icon mx-auto mb-3"><i class="fas fa-envelope"></i></div>
                <div class="info-content">
                  <h5>Email Support</h5>
                  <a href="mailto:sales.digifysoft@digifycrm.in" class="fw-bold text-dark">sales.digifysoft@digifycrm.in</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="info-card flex-column text-center h-100 animate__animated animate__fadeInUp animate__delay-1s" style="border-top: 5px solid #f6a623; padding-top: 30px;">
                <div class="info-icon mx-auto mb-3" style="background: #f6a623;"><i class="fas fa-phone-alt"></i></div>
                <div class="info-content">
                  <h5>Phone Number</h5>
                  <a href="tel:+917425016636" class="fw-bold text-dark">+91 7425016636</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="info-card flex-column text-center h-100 animate__animated animate__fadeInUp animate__delay-2s" style="border-top: 5px solid #28a745; padding-top: 30px;">
                <div class="info-icon mx-auto mb-3" style="background: #28a745;"><i class="fas fa-map-marker-alt"></i></div>
                <div class="info-content">
                  <h5>Our Presence</h5>
                  <p class="mb-2 text-dark"><i class="fas fa-building me-2 text-muted"></i><strong>Noida Office:</strong><br>Knowledge Park V, Sector 12</p>
                  <p class="mb-0 text-dark"><i class="fas fa-building me-2 text-muted"></i><strong>Jaipur Office:</strong><br>Akash Ganga, Civil Lines</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

<!-- Google Map -->
<section class="map-section-new">
  <div class="container-fluid p-0">
    <div class="map-container" style="filter: contrast(1.1); border-top: 1px solid #ddd;">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.406080940807!2d77.49122037533094!3d28.471275991249226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea3b2b2e79e5%3A0x6cf42936c9e132c!2sKnowledge%20Park%20V%2C%20Sector%2012%2C%20Greater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1739851234567!5m2!1sen!2sin"
        width="100%"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy">
      </iframe>
    </div>
  </div>
</section>

<style>
  .info-card {
    background: white;
    padding: 25px;
    border-radius: 15px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.06);
    transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .info-card:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }
  .info-icon {
    width: 55px;
    height: 55px;
    background: #0d6efd;
    color: white;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    flex-shrink: 0;
  }
  .info-content h5 {
    font-size: 1.05rem;
    font-weight: 800;
    color: #2c3e50;
    margin-bottom: 3px;
  }
  .info-content a, .info-content p {
    color: #5d6d7e;
    text-decoration: none;
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  .contact-form-premium {
    background: white;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 30px 60px rgba(0,0,0,0.08);
    border: 1px solid #edf2f7;
  }

  .premium-input-group {
    margin-bottom: 5px;
  }
  .input-with-icon {
    position: relative;
  }
  .input-with-icon > i {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #94a3b8;
    font-size: 14px;
  }
  .input-with-icon .form-control, .input-with-icon .form-select {
    padding-left: 45px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #e2e8f0;
    background: #f8fafc;
    font-size: 0.95rem;
    color: #334155;
  }
  .input-with-icon .form-control:focus {
    background: white;
    border-color: #0d6efd;
    box-shadow: 0 0 0 4px rgba(13, 110, 253, 0.1);
  }
  .form-label {
    letter-spacing: 0.5px;
    margin-bottom: 8px;
  }
  
  .premium-submit-btn {
    background: linear-gradient(135deg, #0d6efd 0%, #0056b3 100%);
    color: white;
    border: none;
    padding: 16px 60px;
    border-radius: 12px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: 0.3s;
    box-shadow: 0 10px 20px rgba(13, 110, 253, 0.2);
  }
  .premium-submit-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(13, 110, 253, 0.3);
    color: white;
  }

  /* Inline button styles are natively styled by Bootstrap 5 */

  @media (max-width: 991px) {
    .premium-contact-hero {
      padding: 100px 0 80px;
    }
    .contact-form-premium {
      padding: 30px 20px;
    }
  }
</style>

<?php include 'footer.php'; ?>
