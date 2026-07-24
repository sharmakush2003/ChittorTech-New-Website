<?php 
$cityName = "Raipur";
$pageTitle = "#No.1 Top ERP Software in Manufacturing & Retail in Raipur | Digify Soft Solutions";
$pageDescription = "Leading ERP for Steel, Cement, and Rice Mill industries in Raipur. Affordable Cloud ERP and AI-powered POS for Raipur businesses.";
$pageKeywords = "ERP Software Raipur, Steel Industry ERP Chhattisgarh, Cement Plant ERP Raipur, Rice Mill ERP, AI POS Raipur";

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
        background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
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
                    <span class="badge bg-warning text-dark mb-3 px-3 py-2 text-uppercase fw-bold" style="letter-spacing: 2px;">#No.1 ERP Solution for Heavy Industry & Retail in Raipur</span>
                    <h1 class="display-4 fw-bold mb-4">Top ERP Software in Manufacturing & Retail in <span class="text-primary">Raipur</span></h1>
                    <p class="lead text-muted mb-4 px-lg-5">Raipur is the industrial and commercial heart of Chhattisgarh. From massive steel plants and cement factories to a rapidly growing retail sector, DigifySoft ERP provides the automation tools needed to scale Raipur's diverse business landscape.</p>
                    <div class="hero-btn-wrap">
                        <a href="contact-us.php" class="btn btn-primary btn-lg hero-btn-premium hvr-grow">Get Free Demo</a>
                        <a href="cities/raipur.php#features" class="btn btn-outline-primary btn-lg hero-btn-premium hero-btn-outline hvr-grow">Explore Features</a>
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
            <h2 class="fw-bold">Supporting Raipur's Industrial Power</h2>
            <p class="text-muted">Specialized ERP solutions for Chhattisgarh's primary business verticals</p>
        </div>
        <div class="row g-4 text-center">
            <?php 
            $industries = ["Steel & Iron plants", "Cement manufacturing", "Power generation", "Rice mills & processing", "Aluminium industry", "Mining equipment", "Heavy engineering"];
            foreach($industries as $ind) {
                echo '<div class="col-lg-3 col-md-4 col-6">
                        <div class="p-3 bg-white border rounded shadow-sm h-100 hvr-pulse-grow">
                            <i class="bi bi-gear-wide-connected text-primary me-2"></i>
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
                <h2 class="fw-bold mb-4">Industrial-Grade Manufacturing ERP for Raipur</h2>
                <p class="mb-4">Heavy industries in Raipur require robust tracking of production cycles and raw material consumption. Our ERP is built for the scale of Raipur's industrial hubs.</p>
                
                <div class="row g-4">
                    <div class="col-md-6">
                        <div class="p-4 bg-white border rounded-3 shadow-sm h-100 hvr-float">
                            <h5 class="fw-bold text-primary mb-3">Heavy Asset Mgmt</h5>
                            <p class="small text-muted">Track machinery maintenance, downtime, and performance across large-scale factory floors.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-4 bg-white border rounded-3 shadow-sm h-100 hvr-float">
                            <h5 class="fw-bold text-primary mb-3">Supply Chain</h5>
                            <p class="small text-muted">Optimize logistics and raw material procurement for cement, steel, and power sectors.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-4 bg-white border rounded-3 shadow-sm h-100 hvr-float">
                            <h5 class="fw-bold text-primary mb-3">Compliance & Safety</h5>
                            <p class="small text-muted">Manage industrial safety protocols and environmental compliance reporting automatically.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-4 bg-white border rounded-3 shadow-sm h-100 hvr-float">
                            <h5 class="fw-bold text-primary mb-3">Project Costing</h5>
                            <p class="small text-muted">Calculate precise costs for large-scale engineering projects and production batches.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="p-5 bg-dark text-white rounded-4 shadow-lg">
                    <h3 class="fw-bold mb-4"><i class="bi bi-cart-check me-2 text-warning"></i> Smart Retail & POS</h3>
                    <p class="mb-4">Modernize your Raipur retail business with AI-powered billing and multi-store management.</p>
                    <ul class="list-unstyled">
                        <li class="mb-3"><i class="bi bi-check-circle-fill text-warning me-3"></i> High-Speed GST Billing</li>
                        <li class="mb-3"><i class="bi bi-check-circle-fill text-warning me-3"></i> AI Inventory Forecasting</li>
                        <li class="mb-3"><i class="bi bi-check-circle-fill text-warning me-3"></i> Centralized Multi-Branch Control</li>
                        <li class="mb-3"><i class="bi bi-check-circle-fill text-warning me-3"></i> WhatsApp Integration for Customers</li>
                        <li class="mb-3"><i class="bi bi-check-circle-fill text-warning me-3"></i> Offline Billing Capability</li>
                    </ul>
                    <hr class="border-secondary">
                    <p class="small text-muted">Ideal for Steel Trading, Electronics Showrooms, and FMCG Wholesalers.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Features Grid -->
<section id="features" class="features-grid py-5 bg-light">
    <div class="container">
        <div class="text-center mb-5">
            <h2 class="fw-bold">Why Raipur Businesses Trust DigifySoft</h2>
            <p class="text-muted">Scalable ERP solutions designed for the growth of Chhattisgarh</p>
        </div>
        <div class="row g-4 text-center">
            <?php 
            $features = [
                ["t" => "GST & E-Invoicing", "i" => "bi-calculator", "d" => "Stay compliant with Chhattisgarh's tax regulations with one-click reports."],
                ["t" => "Cloud-Based", "i" => "bi-cloud-check", "d" => "Monitor your Siltara industrial area factory from anywhere in India."],
                ["t" => "CRM & Sales", "i" => "bi-people", "d" => "Manage industrial leads and retail customers from a single dashboard."],
                ["t" => "HR & Attendance", "i" => "bi-person-badge", "d" => "Biometric integration for large-scale industrial workforce management."],
                ["t" => "Robust Security", "i" => "bi-shield-check", "d" => "Enterprise-grade data encryption and automated cloud backups."],
                ["t" => "Custom Workflows", "i" => "bi-gear-wide-connected", "d" => "Tailor-made modules for rice mills, steel trading, and more."]
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
            <h2 class="fw-bold">Raipur ERP Questions & Answers (2026)</h2>
            <p class="text-muted">Expert insights for digital transformation in Chhattisgarh</p>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-9">
                <div class="accordion shadow-sm" id="raipurFaq">
                    <?php 
                    $faqs = [
                        ["q" => "What is the best ERP for steel industries in Raipur?", "a" => "DigifySoft offers specialized modules for the steel and iron industry, including raw material tracking, furnace maintenance, and weightbridge integration."],
                        ["q" => "Can rice mills in Chhattisgarh use this ERP?", "a" => "Yes, we have custom modules for rice mills to manage hulling, drying, and inventory of various rice grades."],
                        ["q" => "Is the ERP GST ready for Raipur businesses?", "a" => "Absolutely. It supports GSTR-1, GSTR-3B, E-invoicing, and E-way bills specifically for inter-state trading common in Raipur."],
                        ["q" => "How does cloud ERP help businesses in Raipur?", "a" => "It allows owners to monitor their factories in industrial areas like Siltara or Urla remotely from their offices or mobile phones."],
                        ["q" => "Does DigifySoft support retail businesses in Raipur?", "a" => "Yes, our AI-powered POS is ideal for garment showrooms, electronics stores, and hardware shops in Raipur's busy markets."]
                    ];
                    foreach($faqs as $i => $faq) {
                        $id = "rp".$i;
                        echo '<div class="accordion-item border-0 mb-2 shadow-sm">
                                <h2 class="accordion-header">
                                  <button class="accordion-button collapsed fw-bold rounded" type="button" data-bs-toggle="collapse" data-bs-target="#'.$id.'">
                                    '.($i+1).'. '.$faq['q'].'
                                  </button>
                                </h2>
                                <div id="'.$id.'" class="accordion-collapse collapse" data-bs-parent="#raipurFaq">
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
        <h2 class="fw-bold mb-4">Empower Your Raipur Business Today</h2>
        <p class="mb-4 lead fw-bold">Transform your factory or retail store with Chhattisgarh's leading ERP solution.</p>
        <a href="contact-us.php" class="btn btn-dark btn-lg px-5 py-3 fw-bold hvr-grow">Book Your Free Demo</a>
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
