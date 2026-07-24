<?php 
$cityName = "Shimla";
$pageTitle = "#No.1 Top ERP Software in Manufacturing & Retail in Shimla | Digify Soft Solutions";
$pageDescription = "Leading ERP for Manufacturing and Retail industries in Shimla. Affordable Cloud ERP and AI-powered POS for Shimla businesses.";
$pageKeywords = "ERP Software Shimla, Manufacturing ERP, AI POS Shimla, Cloud ERP Shimla";

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
                    <span class="badge bg-warning text-dark mb-3 px-3 py-2 text-uppercase fw-bold" style="letter-spacing: 2px;">#No.1 ERP Solution for Industry & Retail in Shimla</span>
                    <h1 class="display-4 fw-bold mb-4">Top ERP Software in Manufacturing & Retail in <span class="text-primary">Shimla</span></h1>
                    <p class="lead text-muted mb-4 px-lg-5">Shimla is growing as a key commercial and industrial hub. From local manufacturing units to a booming retail sector, DigifySoft ERP provides the automation tools needed to scale your business efficiently.</p>
                    <div class="hero-btn-wrap">
                        <a href="contact-us.php" class="btn btn-primary btn-lg hero-btn-premium hvr-grow">Get Free Demo</a>
                        <a href="cities/shimla.php#features" class="btn btn-outline-primary btn-lg hero-btn-premium hero-btn-outline hvr-grow">Explore Features</a>
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
            <h2 class="fw-bold">Supporting Shimla's Business Ecosystem</h2>
            <p class="text-muted">Specialized ERP solutions for Shimla's unique business verticals</p>
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

<!-- Call to Action -->
<section class="cta-section py-5 bg-warning text-center">
    <div class="container">
        <h2 class="fw-bold mb-4">Elevate Your Shimla Business Today</h2>
        <p class="mb-4 lead fw-bold">Transform your operations with the most trusted ERP in Shimla.</p>
        <a href="contact-us.php" class="btn btn-dark btn-lg px-5 py-3 fw-bold hvr-grow">Book Free Demo</a>
    </div>
</section>

<?php include(__DIR__ . '/../footer.php'); ?>

</body>
</html>
