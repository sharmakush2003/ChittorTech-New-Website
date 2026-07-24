<?php 
$cityName = "Chennai";
$pageTitle = "No.1 Top ERP Software in Manufacturing & Retail in Chennai | Digify Soft Solutions";
$pageDescription = "Leading ERP for Automobile, Textile, and FMCG industries in Chennai. Cloud ERP with multi-location support for businesses in Chennai, Coimbatore, and Madurai.";
$pageKeywords = "ERP Software Chennai, Automobile ERP India, Manufacturing ERP Chennai, Retail ERP Tamil Nadu, AI POS Chennai";

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
                    <span class="badge bg-primary text-white mb-3 px-3 py-2 text-uppercase fw-bold" style="letter-spacing: 2px;">#No.1 ERP for Automobile & Industry in Chennai</span>
                    <h1 class="display-4 fw-bold mb-4">Top ERP Software in Manufacturing & Retail in <span class="text-primary">Chennai</span></h1>
                    <p class="lead text-muted mb-4 px-lg-5">As the "Detroit of India" and a massive industrial hub, Chennai's businesses demand robust and scalable ERP solutions. DigifySoft ERP powers everything from high-precision automobile manufacturing to bustling retail chains across Tamil Nadu.</p>
                    <div class="hero-btn-wrap">
                        <a href="contact-us.php" class="btn btn-primary btn-lg hero-btn-premium hvr-grow">Get Free Trial</a>
                        <a href="cities/chennai.php#features" class="btn btn-outline-primary btn-lg hero-btn-premium hero-btn-outline hvr-grow">View Modules</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Tamil Nadu Regional Support -->
<section class="tn-regions py-4 bg-light border-bottom">
    <div class="container">
        <div class="row align-items-center justify-content-center">
            <div class="col-auto">
                <h6 class="fw-bold mb-0 text-muted">EXTENDED SUPPORT ACROSS TAMIL NADU:</h6>
            </div>
            <div class="col-auto">
                <div class="d-flex gap-4 flex-wrap">
                    <span class="h6 mb-0 fw-bold text-primary"><i class="bi bi-geo-alt-fill"></i> Coimbatore</span>
                    <span class="h6 mb-0 fw-bold text-primary"><i class="bi bi-geo-alt-fill"></i> Madurai</span>
                    <span class="h6 mb-0 fw-bold text-primary"><i class="bi bi-geo-alt-fill"></i> Trichy</span>
                    <span class="h6 mb-0 fw-bold text-primary"><i class="bi bi-geo-alt-fill"></i> Salem</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Automobile & Industrial Section -->
<section class="industrial-sec py-5">
    <div class="container">
        <div class="row g-5 align-items-center">
            <div class="col-lg-6">
                <h2 class="fw-bold mb-4">Precision ERP for <span class="text-primary">Automobile & Industrial</span> Hubs</h2>
                <p class="mb-4">Chennai is the heart of India's automobile manufacturing. Our ERP is built to handle the complex supply chains and production schedules of the Oragadam and Sriperumbudur industrial corridors.</p>
                <div class="p-4 bg-white border border-primary border-opacity-25 rounded shadow-sm">
                    <h5 class="fw-bold mb-3">Key Features for Manufacturers:</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2"><i class="bi bi-check2-square text-primary me-2"></i> Complex Production Planning (MRP)</li>
                        <li class="mb-2"><i class="bi bi-check2-square text-primary me-2"></i> Real-time Raw Material Tracking</li>
                        <li class="mb-2"><i class="bi bi-check2-square text-primary me-2"></i> Quality Assurance & Compliance</li>
                        <li class="mb-2"><i class="bi bi-check2-square text-primary me-2"></i> Advanced Warehouse Coordination</li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="challenges-box p-4 bg-primary text-white rounded-3 shadow">
                    <h4 class="fw-bold mb-4">Solving Local Business Hurdles</h4>
                    <div class="row g-3">
                        <?php 
                        $challenges = ["Inventory mismatch", "Production delays", "GST compliance", "Warehouse coordination", "Multi-store operations", "Slow billing systems"];
                        foreach($challenges as $ch) {
                            echo '<div class="col-md-6"><div class="p-3 bg-white bg-opacity-10 rounded border border-white border-opacity-25 h-100">'.$ch.'</div></div>';
                        }
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Industries Grid -->
<section class="industries-grid py-5 bg-light">
    <div class="container">
        <div class="text-center mb-5">
            <h2 class="fw-bold">Supporting Chennai's Diverse Economy</h2>
            <p class="text-muted">Specialized modules for established industries and new-age MSMEs</p>
        </div>
        <div class="row g-4 text-center">
            <?php 
            $industries = [
                ["name" => "Automobile Manufacturing", "icon" => "bi-car-front"],
                ["name" => "Textile Industries", "icon" => "bi-palette"],
                ["name" => "Garment Manufacturing", "icon" => "bi-scissors"],
                ["name" => "FMCG Businesses", "icon" => "bi-box-seam"],
                ["name" => "Electronics Industries", "icon" => "bi-cpu"],
                ["name" => "Pharmaceutical Businesses", "icon" => "bi-capsule"],
                ["name" => "Food Industries", "icon" => "bi-egg-fried"],
                ["name" => "MSMEs & Startups", "icon" => "bi-rocket-takeoff"]
            ];
            foreach($industries as $ind) {
                echo '<div class="col-lg-3 col-md-6">
                        <div class="p-4 bg-white border rounded shadow-sm h-100 hvr-sweep-to-right">
                            <i class="bi '.$ind['icon'].' fs-2 text-primary mb-3 d-block"></i>
                            <h6 class="fw-bold mb-0">'.$ind['name'].'</h6>
                        </div>
                    </div>';
            }
            ?>
        </div>
    </div>
</section>

<!-- Features Section -->
<section id="features" class="features-sec py-5 bg-dark text-white">
    <div class="container">
        <div class="text-center mb-5">
            <h2 class="fw-bold">Advanced Features for Chennai's Growth</h2>
            <p class="text-light">Intelligent tools to manage large-scale operations across multiple locations</p>
        </div>
        <div class="row g-4">
            <div class="col-lg-4">
                <div class="p-4 bg-white text-dark rounded-4 h-100 hvr-float">
                    <h5 class="fw-bold text-primary mb-3"><i class="bi bi-shop-window me-2"></i> AI-Powered POS</h5>
                    <p class="small">High-speed billing with AI integrations for predictive inventory replenishment and customer insights.</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="p-4 bg-white text-dark rounded-4 h-100 hvr-float">
                    <h5 class="fw-bold text-primary mb-3"><i class="bi bi-cloud-check me-2"></i> Cloud ERP Systems</h5>
                    <p class="small">Access your business data from anywhere in the world with military-grade security and automatic backups.</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="p-4 bg-white text-dark rounded-4 h-100 hvr-float">
                    <h5 class="fw-bold text-primary mb-3"><i class="bi bi-lightning-charge me-2"></i> Smart Automation</h5>
                    <p class="small">Reduce manual errors by 90% with automated workflows for procurement, sales, and accounts.</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="p-4 bg-white text-dark rounded-4 h-100 hvr-float">
                    <h5 class="fw-bold text-primary mb-3"><i class="bi bi-graph-up-arrow me-2"></i> Predictive Analytics</h5>
                    <p class="small">Sales forecasting and production trend analysis to help you plan for peak seasons in Chennai's markets.</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="p-4 bg-white text-dark rounded-4 h-100 hvr-float">
                    <h5 class="fw-bold text-primary mb-3"><i class="bi bi-buildings me-2"></i> Multi-location Management</h5>
                    <p class="small">Manage your Chennai, Coimbatore, and Madurai stores from a single, centralized dashboard.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Call to Action -->
<section class="cta-section py-5 bg-warning text-center">
    <div class="container">
        <h2 class="fw-bold mb-4">Fuel Your Business Growth in Chennai</h2>
        <p class="mb-4 lead fw-bold">Trusted by leading industrial and retail brands across Tamil Nadu.</p>
        <a href="contact-us.php" class="btn btn-dark btn-lg px-5 py-3 fw-bold hvr-forward">Start Free Demo</a>
    </div>
</section>

<?php include(__DIR__ . '/../footer.php'); ?>

<style>
    .hvr-sweep-to-right:before {
        background: #0d6efd;
    }
    .hvr-sweep-to-right:hover {
        color: #fff !important;
    }
    .hvr-sweep-to-right:hover i {
        color: #fff !important;
    }
    .floating-img {
        animation: float 6s ease-in-out infinite;
    }
    @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
        100% { transform: translateY(0px); }
    }
</style>

</body>
</html>
