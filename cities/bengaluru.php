<?php 
$cityName = "Bengaluru";
$pageTitle = "No.1 Top ERP Software in Manufacturing & Retail in Bengaluru | Digify Soft Solutions";
$pageDescription = "Empowering Bengaluru's technology and startup hubs with AI-powered ERP. Support for Textile, Electronics, and MSMEs in Bengaluru, Mysuru, and Hubli.";
$pageKeywords = "ERP Software Bengaluru, Startup ERP India, Manufacturing ERP Karnataka, Retail ERP Bengaluru, AI ERP Solutions";

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
        background: linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%);
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
                    <span class="badge bg-success text-white mb-3 px-3 py-2 text-uppercase fw-bold" style="letter-spacing: 2px;">#No.1 ERP Solution for Bengaluru Startups</span>
                    <h1 class="display-4 fw-bold mb-4">Smart ERP Software for Manufacturing & Retail in <span class="text-primary">Bengaluru</span></h1>
                    <p class="lead text-muted mb-4 px-lg-5">As India's Silicon Valley and a booming manufacturing hub, Bengaluru requires agile, technology-first business management. DigifySoft ERP provides the predictive analytics and mobile-first experience that the city's startups and MSMEs demand.</p>
                    <div class="hero-btn-wrap">
                        <a href="contact-us.php" class="btn btn-primary btn-lg hero-btn-premium hvr-grow">Start Free Trial</a>
                        <a href="cities/bengaluru.php#features" class="btn btn-outline-primary btn-lg hero-btn-premium hero-btn-outline hvr-grow">View Features</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Regional Support Section -->
<section class="regional-support py-4 bg-light border-bottom">
    <div class="container">
        <div class="row align-items-center text-center">
            <div class="col-12">
                <p class="mb-0 fw-bold text-muted text-uppercase small letter-spacing-1">Regional Support in Karnataka: 
                    <span class="text-primary ms-3">Mysuru</span> <span class="mx-2">|</span> 
                    <span class="text-primary">Hubli</span> <span class="mx-2">|</span> 
                    <span class="text-primary">Mangaluru</span> <span class="mx-2">|</span> 
                    <span class="text-primary">Belagavi</span>
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Startup Hub Section -->
<section class="startup-hub-sec py-5">
    <div class="container">
        <div class="row g-4 align-items-center">
            <div class="col-lg-6">
                <div class="p-5 bg-dark text-white rounded-4 shadow-lg">
                    <h2 class="fw-bold mb-4">Built for the <span class="text-warning">Silicon Valley</span> of India</h2>
                    <p class="lead">Bengaluru is not just a city; it's a technology, startup, and manufacturing powerhouse. DigifySoft ERP is engineered to match this speed.</p>
                    <hr class="border-secondary my-4">
                    <div class="d-flex align-items-start mb-3">
                        <i class="bi bi-cpu-fill fs-2 text-warning me-3"></i>
                        <div>
                            <h5 class="fw-bold">Technology-First Approach</h5>
                            <p class="small text-light">Integrated with AI and predictive analytics to help you scale your startup faster.</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-start">
                        <i class="bi bi-phone-vibrate-fill fs-2 text-warning me-3"></i>
                        <div>
                            <h5 class="fw-bold">Mobile ERP for Modern Founders</h5>
                            <p class="small text-light">Manage your entire Peenya factory or Indiranagar store right from your smartphone.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="row g-3">
                    <?php 
                    $challenges = ["Inventory mismatch", "Production delays", "GST compliance", "Warehouse management", "Billing errors", "Employee tracking issues"];
                    foreach($challenges as $ch) {
                        echo '<div class="col-md-6">
                                <div class="p-3 border rounded-3 bg-white h-100">
                                    <h6 class="fw-bold mb-1"><i class="bi bi-dash-circle text-danger me-2"></i> '.$ch.'</h6>
                                    <p class="small text-muted mb-0">Solved by our automated smart workflows.</p>
                                </div>
                            </div>';
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Industry Grid -->
<section class="industries-grid py-5 bg-light">
    <div class="container">
        <div class="text-center mb-5">
            <h2 class="fw-bold">Supporting Bengaluru's Diverse Industries</h2>
            <p class="text-muted">From traditional textiles to high-tech electronics</p>
        </div>
        <div class="row g-4">
            <?php 
            $industries = [
                ["name" => "Textile & Garment", "desc" => "Advanced production tracking for Bengaluru's garment hubs."],
                ["name" => "FMCG Businesses", "desc" => "Real-time distribution and expiry management."],
                ["name" => "Electronics & Tech", "desc" => "Complex BOM management for electronics manufacturers."],
                ["name" => "Furniture & Decor", "desc" => "Customizable ERP for furniture showrooms and factories."],
                ["name" => "Pharmaceuticals", "desc" => "Batch tracking and strict GST/Medical compliance."],
                ["name" => "Startups & MSMEs", "desc" => "Scalable and affordable cloud solutions for growth."]
            ];
            foreach($industries as $ind) {
                echo '<div class="col-md-4">
                        <div class="p-4 bg-white border-bottom border-primary border-4 rounded shadow-sm h-100 hvr-underline-from-left">
                            <h5 class="fw-bold mb-3">'.$ind['name'].'</h5>
                            <p class="small text-muted">'.$ind['desc'].'</p>
                        </div>
                    </div>';
            }
            ?>
        </div>
    </div>
</section>

<!-- Features Section -->
<section id="features" class="features-sec py-5">
    <div class="container">
        <div class="text-center mb-5">
            <h2 class="fw-bold">Smart Features for Smart Businesses</h2>
            <p class="text-muted">Next-generation ERP tools for Bengaluru's retail and manufacturing</p>
        </div>
        <div class="row g-4">
            <div class="col-lg-4">
                <div class="feature-box p-4 border rounded h-100 bg-white shadow-sm">
                    <i class="bi bi-robot fs-1 text-primary mb-3"></i>
                    <h4 class="fw-bold">AI-Powered ERP</h4>
                    <p>Automate repetitive tasks and get smart suggestions for procurement and production scheduling.</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="feature-box p-4 border rounded h-100 bg-white shadow-sm">
                    <i class="bi bi-cart-check fs-1 text-primary mb-3"></i>
                    <h4 class="fw-bold">Omnichannel Retail</h4>
                    <p>Connect your offline store with online marketplaces and manage inventory seamlessly across platforms.</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="feature-box p-4 border rounded h-100 bg-white shadow-sm">
                    <i class="bi bi-bar-chart-line fs-1 text-primary mb-3"></i>
                    <h4 class="fw-bold">Predictive Analytics</h4>
                    <h4 class="fw-bold">Predictive Analytics</h4>
                    <p>Stay ahead of the curve with sales forecasting and production demand planning tools.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Call to Action -->
<section class="cta-section py-5 bg-primary text-white text-center">
    <div class="container">
        <h2 class="fw-bold mb-4">Digitize Your Bengaluru Business Today</h2>
        <p class="mb-4 lead">Join the community of 200+ Bengaluru companies using DigifySoft ERP.</p>
        <a href="contact-us.php" class="btn btn-warning btn-lg px-5 fw-bold hvr-push">Get Started for Free</a>
    </div>
</section>

<?php include(__DIR__ . '/../footer.php'); ?>

<style>
    .hvr-underline-from-left:before {
        background: #0d6efd;
    }
    .floating-img {
        animation: float 6s ease-in-out infinite;
    }
    @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
        100% { transform: translateY(0px); }
    }
    .letter-spacing-1 {
        letter-spacing: 1px;
    }
</style>

</body>
</html>
