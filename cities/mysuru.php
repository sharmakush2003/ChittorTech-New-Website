<?php 
$cityName = "Mysuru";
$pageTitle = "#No.1 Top ERP Software in Manufacturing & Retail in Mysuru | Digify Soft Solutions";
$pageDescription = "Leading ERP for Manufacturing and Retail industries in Mysuru. Affordable Cloud ERP and AI-powered POS for Mysuru businesses.";
$pageKeywords = "ERP Software Mysuru, Manufacturing ERP, AI POS Mysuru, Cloud ERP Mysuru";

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
        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
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
                    <span class="badge bg-warning text-dark mb-3 px-3 py-2 text-uppercase fw-bold" style="letter-spacing: 2px;">#No.1 ERP Solution for Industry & Retail in Mysuru</span>
                    <h1 class="display-4 fw-bold mb-4">Top ERP Software in Manufacturing & Retail in <span class="text-primary">Mysuru</span></h1>
                    <p class="lead text-muted mb-4 px-lg-5">Mysuru is growing as a key commercial and industrial hub. From local manufacturing units to a booming retail sector, DigifySoft ERP provides the automation tools needed to scale your business efficiently.</p>
                    <div class="hero-btn-wrap">
                        <a href="contact-us.php" class="btn btn-primary btn-lg hero-btn-premium hvr-grow">Get Free Demo</a>
                        <a href="cities/mysuru.php#features" class="btn btn-outline-primary btn-lg hero-btn-premium hero-btn-outline hvr-grow">Explore Features</a>
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
            <h2 class="fw-bold">Supporting Mysuru's Business Ecosystem</h2>
            <p class="text-muted">Specialized ERP solutions for Mysuru's unique business verticals</p>
        </div>
        <div class="row g-4 text-center">
            <?php 
            $industries = ["Manufacturing", "Retail", "Wholesale", "Service Industry", "Logistics", "Textiles", "Engineering"];
            foreach($industries as $ind) {
                echo '<div class="col-lg-3 col-md-4 col-6">
                        <div class="p-3 bg-white border rounded shadow-sm h-100 hvr-pulse-grow">
                            <i class="bi bi-check-circle-fill text-primary me-2"></i>
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
                <h2 class="fw-bold mb-4">Powerful Manufacturing ERP for Mysuru</h2>
                <p class="mb-4">Streamline your production floor with real-time tracking, inventory management, and automated workflows designed for Mysuru's industrial sector.</p>
                
                <div class="row g-4">
                    <div class="col-md-6">
                        <div class="p-4 bg-white border rounded-3 shadow-sm h-100 hvr-float">
                            <h5 class="fw-bold text-primary mb-3">Production Planning</h5>
                            <p class="small text-muted">Optimize schedules and resources for maximum factory output.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-4 bg-white border rounded-3 shadow-sm h-100 hvr-float">
                            <h5 class="fw-bold text-primary mb-3">Inventory Sync</h5>
                            <p class="small text-muted">Real-time stock tracking across multiple warehouses and locations.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-4 bg-white border rounded-3 shadow-sm h-100 hvr-float">
                            <h5 class="fw-bold text-primary mb-3">Quality Control</h5>
                            <p class="small text-muted">Ensure consistent product quality with automated inspection reports.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-4 bg-white border rounded-3 shadow-sm h-100 hvr-float">
                            <h5 class="fw-bold text-primary mb-3">Cost Analysis</h5>
                            <p class="small text-muted">Track every rupee spent on production for better profitability.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="p-5 bg-dark text-white rounded-4 shadow-lg">
                    <h3 class="fw-bold mb-4"><i class="bi bi-cart-check me-2 text-warning"></i> Smart Retail & POS</h3>
                    <p class="mb-4">Empower your Mysuru retail store with our next-gen POS and customer management system.</p>
                    <ul class="list-unstyled">
                        <li class="mb-3"><i class="bi bi-check-circle-fill text-warning me-3"></i> High-Speed GST Billing</li>
                        <li class="mb-3"><i class="bi bi-check-circle-fill text-warning me-3"></i> AI-Powered Inventory Alerts</li>
                        <li class="mb-3"><i class="bi bi-check-circle-fill text-warning me-3"></i> Multi-Store Management</li>
                        <li class="mb-3"><i class="bi bi-check-circle-fill text-warning me-3"></i> WhatsApp Integration</li>
                        <li class="mb-3"><i class="bi bi-check-circle-fill text-warning me-3"></i> Loyalty Program Support</li>
                    </ul>
                    <hr class="border-secondary">
                    <p class="small text-muted">Trusted by retailers across Mysuru.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Call to Action -->
<section class="cta-section py-5 bg-warning text-center">
    <div class="container">
        <h2 class="fw-bold mb-4">Elevate Your Mysuru Business Today</h2>
        <p class="mb-4 lead fw-bold">Transform your operations with the most trusted ERP in Mysuru.</p>
        <a href="contact-us.php" class="btn btn-dark btn-lg px-5 py-3 fw-bold hvr-grow">Book Free Demo</a>
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
