<?php 
$cityName = "Ranchi";
$pageTitle = "#No.1 Top ERP Software in Manufacturing & Retail in Ranchi | Digify Soft Solutions";
$pageDescription = "Leading ERP for Mining, Engineering, and Manufacturing industries in Ranchi. Affordable Cloud ERP and AI-powered POS for Ranchi businesses.";
$pageKeywords = "ERP Software Ranchi, Mining ERP Jharkhand, Heavy Engineering ERP, AI POS Ranchi, Cloud ERP Jharkhand";

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <base href="../">
    <?php include('../fetch_meta.php'); ?>
    <?php include('../header.php'); ?>
</head>
<body>

<style>
    .premium-city-hero {
        padding: 100px 0 160px !important;
        position: relative;
        background: linear-gradient(135deg, #f1f8e9 0%, #dcedc8 100%);
        overflow: visible !important;
    }
    .hero-btn-wrap {
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }
    .hero-btn-premium {
        padding: 15px 40px !important;
        font-weight: 700 !important;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.3s ease;
        border-radius: 8px !important;
    }
    .hero-btn-outline {
        background: #ffffff !important;
        color: #0d6efd !important;
        border: 2px solid #0d6efd !important;
        box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    }
    .hero-btn-outline:hover {
        background: #0d6efd !important;
        color: #ffffff !important;
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(13, 110, 253, 0.2);
    }
    @media (min-width: 576px) {
        .hero-btn-wrap {
            flex-direction: row;
        }
    }
</style>

<!-- City Hero Section -->
<section class="premium-city-hero text-center">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="inner-banner-wrap animate__animated animate__fadeIn">
                    <span class="badge bg-warning text-dark mb-3 px-3 py-2 text-uppercase fw-bold" style="letter-spacing: 2px;">#No.1 ERP Solution for Industry & Education in Ranchi</span>
                    <h1 class="display-4 fw-bold mb-4">Top ERP Software in Manufacturing & Retail in <span class="text-primary">Ranchi</span></h1>
                    <p class="lead text-muted mb-4 px-lg-5">Ranchi is a hub of industrial engineering and educational excellence in Jharkhand. From heavy machinery manufacturing to a booming retail and trading sector, DigifySoft ERP provides the digital tools needed to modernize Ranchi's economy.</p>
                    <div class="hero-btn-wrap">
                        <a href="contact-us.php" class="btn btn-primary btn-lg hero-btn-premium hvr-grow">Get Free Demo</a>
                        <a href="cities/ranchi.php#features" class="btn btn-outline-primary btn-lg hero-btn-premium hero-btn-outline hvr-grow">Explore Features</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Industries Overview -->
<section class="industries-overview py-5 bg-light">
    <div class="container">
        <div class="text-center mb-5">
            <h2 class="fw-bold">Supporting Ranchi's Diverse Economy</h2>
            <p class="text-muted">Specialized ERP solutions for Jharkhand's capital business verticals</p>
        </div>
        <div class="row g-4 text-center">
            <?php 
            $industries = ["Heavy Engineering", "Mining & Minerals", "Educational Institutions", "Metal Fabrication", "Automobile Parts", "Handloom & Textiles", "General Trading"];
            foreach($industries as $ind) {
                echo '<div class="col-lg-3 col-md-4 col-6">
                        <div class="p-3 bg-white border rounded shadow-sm h-100 hvr-pulse-grow">
                            <i class="bi bi-gear-fill text-primary me-2"></i>
                            <span class="fw-bold">'.$ind.'</span>
                        </div>
                    </div>';
            }
            ?>
        </div>
    </div>
</section>

<!-- Manufacturing Section -->
<section class="mfg-sec py-5">
    <div class="container">
        <div class="row g-5 align-items-center">
            <div class="col-lg-6">
                <h2 class="fw-bold mb-4">Industrial ERP for Ranchi's Factories</h2>
                <p class="mb-4">Manufacturing units in Ranchi often face challenges in tracking production stages and vendor management. Our ERP simplifies these complex processes.</p>
                
                <div class="row g-4">
                    <div class="col-md-6">
                        <div class="p-4 bg-white border rounded-3 shadow-sm h-100 hvr-float">
                            <h5 class="fw-bold text-primary mb-3">Job Work Mgmt</h5>
                            <p class="small text-muted">Manage outsourcing and job work orders with precise tracking of raw materials and finished goods.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-4 bg-white border rounded-3 shadow-sm h-100 hvr-float">
                            <h5 class="fw-bold text-primary mb-3">Vendor Portal</h5>
                            <p class="small text-muted">Streamline procurement with a dedicated portal for vendors to track orders and payments.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-4 bg-white border rounded-3 shadow-sm h-100 hvr-float">
                            <h5 class="fw-bold text-primary mb-3">Inventory Accuracy</h5>
                            <p class="small text-muted">Eliminate stock mismatch with real-time tracking across multiple warehouses in Ranchi.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-4 bg-white border rounded-3 shadow-sm h-100 hvr-float">
                            <h5 class="fw-bold text-primary mb-3">Costing Control</h5>
                            <p class="small text-muted">Calculate exact production costs including labor, electricity, and raw material overheads.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="p-5 bg-dark text-white rounded-4 shadow-lg">
                    <h3 class="fw-bold mb-4"><i class="bi bi-cart-check me-2 text-warning"></i> Smart Retail & POS</h3>
                    <p class="mb-4">Enhance your Ranchi retail experience with AI-integrated billing and customer loyalty programs.</p>
                    <ul class="list-unstyled">
                        <li class="mb-3"><i class="bi bi-check-circle-fill text-warning me-3"></i> Quick Barcode Billing</li>
                        <li class="mb-3"><i class="bi bi-check-circle-fill text-warning me-3"></i> Dynamic Pricing & Offers</li>
                        <li class="mb-3"><i class="bi bi-check-circle-fill text-warning me-3"></i> WhatsApp Invoice Sharing</li>
                        <li class="mb-3"><i class="bi bi-check-circle-fill text-warning me-3"></i> Real-time Stock Sync</li>
                        <li class="mb-3"><i class="bi bi-check-circle-fill text-warning me-3"></i> Detailed Sales Analytics</li>
                    </ul>
                    <hr class="border-secondary">
                    <p class="small text-muted">Ideal for Garment Outlets, Electronic Stores, and Supermarkets.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Features Grid -->
<section id="features" class="features-grid py-5 bg-light">
    <div class="container">
        <div class="text-center mb-5">
            <h2 class="fw-bold">Why Ranchi Businesses Choose DigifySoft</h2>
            <p class="text-muted">A complete suite of business tools for the modern entrepreneur</p>
        </div>
        <div class="row g-4 text-center">
            <?php 
            $features = [
                ["t" => "GST & Accounting", "i" => "bi-calculator", "d" => "Automated GSTR reporting and easy E-invoicing for Jharkhand tax norms."],
                ["t" => "Cloud Freedom", "i" => "bi-cloud-check", "d" => "Access your business data from anywhere - home, office, or on the go."],
                ["t" => "CRM & Leads", "i" => "bi-people", "d" => "Track inquiries and convert more leads with automated follow-ups."],
                ["t" => "Payroll & HR", "i" => "bi-person-badge", "d" => "Manage employee attendance, salaries, and statutory compliance."],
                ["t" => "Customizable", "i" => "bi-gear-wide-connected", "d" => "Tailor the ERP to fit your unique business workflows and reporting needs."],
                ["t" => "Data Insights", "i" => "bi-graph-up-arrow", "d" => "Actionable business intelligence to help you make informed decisions."]
            ];
            foreach($features as $f) {
                echo '<div class="col-md-4">
                        <div class="p-4 bg-white rounded shadow-sm h-100">
                            <i class="bi '.$f['i'].' fs-1 text-primary mb-3 d-block"></i>
                            <h5 class="fw-bold">'.$f['t'].'</h5>
                            <p class="small text-muted">'.$f['d'].'</p>
                        </div>
                    </div>';
            }
            ?>
        </div>
    </div>
</section>

<!-- FAQ Section -->
<section class="faq-sec py-5">
    <div class="container">
        <div class="text-center mb-5">
            <h2 class="fw-bold">Ranchi ERP Questions & Answers (2026)</h2>
            <p class="text-muted">Common queries from local business owners</p>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-9">
                <div class="accordion shadow-sm" id="ranchiFaq">
                    <?php 
                    $faqs = [
                        ["q" => "What is the benefit of using ERP for mining industries in Ranchi?", "a" => "ERP helps in tracking equipment maintenance, managing fuel consumption, and coordinating logistics for mineral transport efficiently."],
                        ["q" => "Can schools and colleges in Ranchi use this system?", "a" => "Yes, we have a specialized Education module for student records, fee management, and examination tracking."],
                        ["q" => "Is it suitable for small retail shops in Ranchi?", "a" => "Absolutely. Our AI-powered POS is designed for scale, making it affordable and easy to use for small outlets to large showrooms."],
                        ["q" => "How does it handle GST for Jharkhand?", "a" => "It is fully updated with current GST laws, handling intra-state and inter-state tax calculations and reporting automatically."],
                        ["q" => "Is technical support available in Ranchi?", "a" => "We provide comprehensive remote support and have a dedicated team for on-site assistance if required."]
                    ];
                    foreach($faqs as $i => $faq) {
                        $id = "rn".$i;
                        echo '<div class="accordion-item border-0 mb-2 shadow-sm">
                                <h2 class="accordion-header">
                                  <button class="accordion-button collapsed fw-bold rounded" type="button" data-bs-toggle="collapse" data-bs-target="#'.$id.'">
                                    '.($i+1).'. '.$faq['q'].'
                                  </button>
                                </h2>
                                <div id="'.$id.'" class="accordion-collapse collapse" data-bs-parent="#ranchiFaq">
                                  <div class="accordion-body">
                                    '.$faq['a'].'
                                  </div>
                                </div>
                              </div>';
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Call to Action -->
<section class="cta-section py-5 bg-warning text-center">
    <div class="container">
        <h2 class="fw-bold mb-4">Empower Your Ranchi Business</h2>
        <p class="mb-4 lead fw-bold">Join the digital revolution with Jharkhand's most reliable ERP solution.</p>
        <a href="contact-us.php" class="btn btn-dark btn-lg px-5 py-3 fw-bold hvr-grow">Get Started for Free</a>
    </div>
</section>

<?php include(__DIR__ . '/../footer.php'); ?>

<style>
    .accordion-button:not(.collapsed) {
        background-color: #0d6efd;
        color: white;
    }
    .hvr-pulse-grow:hover {
        background-color: #f8f9fa !important;
        border-color: #0d6efd !important;
    }
</style>

</body>
</html>
