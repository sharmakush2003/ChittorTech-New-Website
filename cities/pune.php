<?php 
$cityName = "Pune";
$pageTitle = "No.1 Top ERP Software in Manufacturing & Retail in Pune | Digify Soft Solutions";
$pageDescription = "Leading ERP for Engineering, Automobile, and Manufacturing industries in Pune. Advanced Payroll, HR, and Production Planning for Pune businesses.";
$pageKeywords = "ERP Software Pune, Engineering ERP India, Manufacturing ERP Pune, Automobile ERP Pune, Payroll Software Pune";

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
        background: linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%);
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
                    <span class="badge bg-warning text-dark mb-3 px-3 py-2 text-uppercase fw-bold" style="letter-spacing: 2px;">#No.1 ERP for Engineering & Automobile in Pune</span>
                    <h1 class="display-4 fw-bold mb-4">Advanced ERP Software for Manufacturing & Retail in <span class="text-primary">Pune</span></h1>
                    <p class="lead text-muted mb-4 px-lg-5">Pune is India's premier engineering and automobile hub. DigifySoft ERP is built to handle the rigorous demands of Pune's industrial sectors, from the Chakan and Bhosari industrial belts to the thriving retail landscape of Hinjewadi.</p>
                    <div class="hero-btn-wrap">
                        <a href="contact-us.php" class="btn btn-primary btn-lg hero-btn-premium hvr-grow">Get Free Demo</a>
                        <a href="cities/pune.php#features" class="btn btn-outline-primary btn-lg hero-btn-premium hero-btn-outline hvr-grow">View Features</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Manufacturing Core Section -->
<section class="mfg-core py-5 bg-light">
    <div class="container">
        <div class="text-center mb-5">
            <h2 class="fw-bold">Precision Manufacturing ERP for Pune</h2>
            <p class="text-muted">Specialized modules for Engineering & Automobile Industries</p>
        </div>
        <div class="row g-4">
            <?php 
            $mfg_features = [
                ["name" => "Production Planning", "desc" => "Streamline your factory floor with automated scheduling and capacity planning."],
                ["name" => "Bill of Materials (BOM)", "desc" => "Manage complex multi-level BOMs with precise cost calculations."],
                ["name" => "Raw Material Management", "desc" => "Real-time tracking of raw materials and automated procurement alerts."],
                ["name" => "WIP Tracking", "desc" => "Monitor every stage of production from raw material to finished goods."],
                ["name" => "Quality Control", "desc" => "Integrated QC checkpoints to ensure high-precision manufacturing standards."],
                ["name" => "Workflow Automation", "desc" => "Automate repetitive tasks and reduce manual errors by 90%."]
            ];
            foreach($mfg_features as $feature) {
                echo '<div class="col-md-4">
                        <div class="p-4 bg-white border-start border-primary border-4 rounded shadow-sm h-100">
                            <h5 class="fw-bold text-primary mb-2">'.$feature['name'].'</h5>
                            <p class="small mb-0">'.$feature['desc'].'</p>
                        </div>
                    </div>';
            }
            ?>
        </div>
    </div>
</section>

<!-- Retail & POS Section -->
<section class="retail-pos py-5">
    <div class="container">
        <div class="row g-5 align-items-center">
            <div class="col-lg-6 order-lg-2">
                <h2 class="fw-bold mb-4">Smart Retail & <span class="text-primary">POS Solutions</span></h2>
                <p class="mb-4">Elevate your retail business in Pune with our AI-powered billing and analytics tools. Designed for speed and customer retention.</p>
                <div class="row g-3">
                    <div class="col-md-6">
                        <div class="p-3 border rounded shadow-sm h-100">
                            <i class="bi bi-upc-scan fs-3 text-warning mb-2 d-block"></i>
                            <h6 class="fw-bold">Barcode Scanning</h6>
                            <p class="small text-muted mb-0">Fast and accurate billing for high-volume stores.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-3 border rounded shadow-sm h-100">
                            <i class="bi bi-display fs-3 text-warning mb-2 d-block"></i>
                            <h6 class="fw-bold">Touch POS System</h6>
                            <p class="small text-muted mb-0">Intuitive interface for faster checkout experience.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-3 border rounded shadow-sm h-100">
                            <i class="bi bi-star-fill fs-3 text-warning mb-2 d-block"></i>
                            <h6 class="fw-bold">Loyalty Programs</h6>
                            <p class="small text-muted mb-0">Keep your customers coming back with smart rewards.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-3 border rounded shadow-sm h-100">
                            <i class="bi bi-bar-chart-fill fs-3 text-warning mb-2 d-block"></i>
                            <h6 class="fw-bold">Billing Analytics</h6>
                            <p class="small text-muted mb-0">AI-driven insights into your sales and customer behavior.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 order-lg-1">
                <div class="p-5 bg-dark text-white rounded-4 shadow-lg animate__animated animate__fadeInLeft">
                    <h3 class="fw-bold mb-4">HR & Payroll Management</h3>
                    <p class="text-light mb-4">Managing a large workforce in Pune? Our integrated HR module takes the pain out of employee management.</p>
                    <ul class="list-unstyled">
                        <li class="mb-3"><i class="bi bi-check-circle-fill text-warning me-3"></i> Automated Attendance Tracking</li>
                        <li class="mb-3"><i class="bi bi-check-circle-fill text-warning me-3"></i> Complex Salary Management & Slips</li>
                        <li class="mb-3"><i class="bi bi-check-circle-fill text-warning me-3"></i> Employee Performance Tracking</li>
                        <li class="mb-3"><i class="bi bi-check-circle-fill text-warning me-3"></i> User Permission & Role Controls</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Customization Section -->
<section class="customization-sec py-5 bg-primary text-white">
    <div class="container">
        <div class="text-center mb-5">
            <h2 class="fw-bold">Tailored to Your Business</h2>
            <p class="text-light">Flexible and customizable ERP to fit Pune's unique industrial requirements</p>
        </div>
        <div class="row g-4 justify-content-center">
            <div class="col-md-4 text-center">
                <div class="p-4 bg-white text-dark rounded-3 shadow">
                    <i class="bi bi-speedometer fs-1 text-primary mb-3 d-block"></i>
                    <h5 class="fw-bold">Custom Dashboards</h5>
                    <p class="small">See the data that matters to you with personalized widgets and reports.</p>
                </div>
            </div>
            <div class="col-md-4 text-center">
                <div class="p-4 bg-white text-dark rounded-3 shadow">
                    <i class="bi bi-puzzle fs-1 text-primary mb-3 d-block"></i>
                    <h5 class="fw-bold">Industry Modules</h5>
                    <p class="small">Pre-built modules for Engineering, Auto, and Pharma sectors.</p>
                </div>
            </div>
            <div class="col-md-4 text-center">
                <div class="p-4 bg-white text-dark rounded-3 shadow">
                    <i class="bi bi-shield-lock fs-1 text-primary mb-3 d-block"></i>
                    <h5 class="fw-bold">Role Permissions</h5>
                    <p class="small">Secure your data with granular access controls for every employee level.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Industries Grid -->
<section class="industries-grid py-5">
    <div class="container">
        <div class="text-center mb-5">
            <h2 class="fw-bold">Industries We Support in Pune</h2>
        </div>
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3 text-center">
            <?php 
            $industries = ["Automobile manufacturing", "Engineering industries", "Textile manufacturing", "Pharmaceutical companies", "Electronics industries", "FMCG businesses"];
            foreach($industries as $ind) {
                echo '<div class="col"><div class="p-3 bg-light rounded shadow-sm h-100 d-flex align-items-center justify-content-center h6 mb-0">'.$ind.'</div></div>';
            }
            ?>
        </div>
    </div>
</section>

<!-- Call to Action -->
<section class="cta-section py-5 bg-warning text-center">
    <div class="container">
        <h2 class="fw-bold mb-4">Scale Your Pune Business Today</h2>
        <p class="mb-4 lead fw-bold">Experience the power of advanced ERP automation.</p>
        <a href="contact-us.php" class="btn btn-dark btn-lg px-5 py-3 fw-bold hvr-grow">Get Started for Free</a>
    </div>
</section>

<?php include(__DIR__ . '/../footer.php'); ?>

<style>
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
