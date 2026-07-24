<?php 
$cityName = "Hyderabad";
$pageTitle = "No.1 Top ERP Software in Manufacturing & Retail in Hyderabad (2026) | Digify Soft Solutions";
$pageDescription = "Empower Hyderabad's Pharma, Textile, and Food industries with AI-powered ERP. Cloud ERP solutions for Startups and MSMEs in Hyderabad and Secunderabad.";
$pageKeywords = "ERP Software Hyderabad, Pharma ERP India, Manufacturing ERP Hyderabad, Retail ERP Telangana, AI Billing Hyderabad";

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
        background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
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
                    <span class="badge bg-primary text-white mb-3 px-3 py-2 text-uppercase fw-bold" style="letter-spacing: 2px;">Market Leader in Telangana</span>
                    <h1 class="display-4 fw-bold mb-4">Top ERP Software in Manufacturing & Retail in <span class="text-primary">Hyderabad</span></h1>
                    <p class="lead text-muted mb-4 px-lg-5">Hyderabad is a global leader in Pharmaceuticals and a thriving hub for Manufacturing and Retail. From Genome Valley to the busy markets of Gachibowli, DigifySoft ERP provides the precision and automation needed to scale your operations in the City of Pearls.</p>
                    <div class="hero-btn-wrap">
                        <a href="contact-us.php" class="btn btn-primary btn-lg hero-btn-premium hvr-grow">Get Free Demo</a>
                        <a href="cities/hyderabad.php#features" class="btn btn-outline-primary btn-lg hero-btn-premium hero-btn-outline hvr-grow">Explore Solutions</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Pharma Focus Section -->
<section class="pharma-focus-sec py-5 bg-light">
    <div class="container">
        <div class="row align-items-center g-5">
            <div class="col-lg-6 order-lg-2">
                <h2 class="fw-bold mb-4">Leading ERP for <span class="text-primary">Pharmaceuticals</span> in Hyderabad</h2>
                <p class="mb-4">With Hyderabad being the "Pharmacy of the World," our ERP is specifically optimized for pharmaceutical manufacturing and distribution, ensuring compliance and quality at every step.</p>
                <div class="row g-4">
                    <div class="col-md-6">
                        <div class="p-3 bg-white border-start border-primary border-4 shadow-sm h-100">
                            <h6 class="fw-bold mb-2">Batch Management</h6>
                            <p class="small text-muted mb-0">Complete traceability from raw materials to final packaging.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-3 bg-white border-start border-primary border-4 shadow-sm h-100">
                            <h6 class="fw-bold mb-2">Expiry Tracking</h6>
                            <p class="small text-muted mb-0">Automated alerts for near-expiry products to reduce waste.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-3 bg-white border-start border-primary border-4 shadow-sm h-100">
                            <h6 class="fw-bold mb-2">GST & E-Invoicing</h6>
                            <p class="small text-muted mb-0">Seamless compliance with drug control regulations and GST.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-3 bg-white border-start border-primary border-4 shadow-sm h-100">
                            <h6 class="fw-bold mb-2">Quality Control</h6>
                            <p class="small text-muted mb-0">Integrated QC checkpoints for manufacturing excellence.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 order-lg-1">
                <div class="challenges-box p-4 bg-white rounded-3 shadow">
                    <h4 class="fw-bold mb-4 border-bottom pb-2">Overcoming Local Challenges</h4>
                    <div class="d-flex flex-column gap-3">
                        <?php 
                        $challenges = ["Inventory mismatch in Pharma stores", "Production delays in Textile hubs", "GST compliance for FMCG", "Warehouse coordination issues", "Multi-store management in Retail", "Slow billing in busy markets", "Employee management complexities"];
                        foreach($challenges as $ch) {
                            echo '<div class="d-flex align-items-center"><i class="bi bi-x-circle text-danger me-3"></i><span>'.$ch.'</span></div>';
                        }
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Industries Grid -->
<section class="industries-grid py-5">
    <div class="container">
        <div class="text-center mb-5">
            <h2 class="fw-bold">Supporting Hyderabad's Business Ecosystem</h2>
            <p class="text-muted">Specialized modules for every vertical in Telangana</p>
        </div>
        <div class="row g-4 justify-content-center">
            <?php 
            $industries = [
                ["name" => "Pharmaceutical Industries", "icon" => "bi-capsule"],
                ["name" => "Garment Manufacturing", "icon" => "bi-scissors"],
                ["name" => "Textile Businesses", "icon" => "bi-palette"],
                ["name" => "FMCG Companies", "icon" => "bi-box-seam"],
                ["name" => "Electronics Businesses", "icon" => "bi-cpu"],
                ["name" => "Food Industries", "icon" => "bi-egg-fried"],
                ["name" => "MSMEs & Startups", "icon" => "bi-rocket-takeoff"]
            ];
            foreach($industries as $ind) {
                echo '<div class="col-lg-3 col-md-4 col-6">
                        <div class="text-center p-4 border rounded shadow-sm h-100 hvr-reveal">
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
            <h2 class="fw-bold">Powerful Features for Growth</h2>
            <p class="text-light">Advanced ERP tools to stay ahead in the competitive Hyderabad market</p>
        </div>
        <div class="row g-4">
            <div class="col-md-4">
                <div class="p-4 bg-white text-dark rounded h-100 shadow">
                    <h5 class="fw-bold text-primary mb-3"><i class="bi bi-robot me-2"></i> AI-Powered POS</h5>
                    <p class="small">Faster billing systems integrated with barcode and touch-point technology for busy retail outlets.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="p-4 bg-white text-dark rounded h-100 shadow">
                    <h5 class="fw-bold text-primary mb-3"><i class="bi bi-cart-check me-2"></i> Omnichannel Retail</h5>
                    <p class="small">Sync your inventory across offline stores and online marketplaces in real-time.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="p-4 bg-white text-dark rounded h-100 shadow">
                    <h5 class="fw-bold text-primary mb-3"><i class="bi bi-cloud-check me-2"></i> Cloud ERP Access</h5>
                    <p class="small">Securely access your business data anytime, anywhere with automatic cloud backups.</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="p-4 bg-white text-dark rounded h-100 shadow">
                    <h5 class="fw-bold text-primary mb-3"><i class="bi bi-gear-wide-connected me-2"></i> Inventory Automation</h5>
                    <p class="small">Automated reordering and real-time stock alerts to prevent outages and overstocking.</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="p-4 bg-white text-dark rounded h-100 shadow">
                    <h5 class="fw-bold text-primary mb-3"><i class="bi bi-bar-chart-line me-2"></i> Predictive Analytics</h5>
                    <p class="small">Smart dashboards with sales forecasting and production trends to help you make data-driven decisions.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Call to Action -->
<section class="cta-section py-5 bg-warning text-center">
    <div class="container">
        <h2 class="fw-bold mb-4">Empower Your Hyderabad Business</h2>
        <p class="mb-4 lead fw-bold">Join the community of successful companies using DigifySoft ERP.</p>
        <a href="contact-us.php" class="btn btn-dark btn-lg px-5 py-3 fw-bold hvr-pulse-shrink">Book a Free Demo</a>
    </div>
</section>

<?php include(__DIR__ . '/../footer.php'); ?>

<style>
    .hvr-reveal:hover {
        background: #0d6efd;
        color: #fff !important;
    }
    .hvr-reveal:hover i {
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
