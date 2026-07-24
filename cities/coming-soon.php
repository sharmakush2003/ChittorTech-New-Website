<?php 
$requestedCity = isset($_GET['city']) ? htmlspecialchars($_GET['city']) : "Your City";
$pageTitle = "ERP Software in $requestedCity | Coming Soon | Digify Soft Solutions";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <base href="../">
    <?php include('../fetch_meta.php'); ?>
    <?php include('../header.php'); ?>
    <!-- Additional Google Fonts for premium feel -->
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>
<body>

<section class="coming-soon-premium">
    <!-- Animated Background Shapes -->
    <div class="bg-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
    </div>

    <div class="container">
        <div class="row justify-content-center align-items-center" style="min-height: 85vh;">
            <div class="col-lg-7 text-center">
                <div class="content-card animate__animated animate__fadeInUp">
                    <div class="location-icon-wrapper mb-4">
                        <div class="pulse-ring"></div>
                        <i class="bi bi-geo-alt-fill"></i>
                    </div>
                    
                    <h4 class="text-primary fw-bold text-uppercase tracking-wider mb-2">Expansion in Progress</h4>
                    <h1 class="display-4 fw-bold mb-3">ERP Software in <span class="gradient-text"><?php echo $requestedCity; ?></span></h1>
                    <div class="coming-soon-badge mb-4">Coming Soon</div>
                    
                    <p class="lead text-muted mb-5 px-lg-5">We are currently perfecting our industry-leading ERP and POS solutions for the unique business landscape of <?php echo $requestedCity; ?>. Stay tuned for a localized experience designed to scale your success.</p>
                    
                    <div class="cta-wrapper d-flex flex-column flex-sm-row gap-3 justify-content-center">
                        <a href="contact-us.php" class="btn-premium primary">
                            <span>Get Free Demo Now</span>
                            <i class="bi bi-arrow-right-short"></i>
                        </a>
                        <a href="index.php" class="btn-premium secondary">
                            <span>Back to Home</span>
                        </a>
                    </div>

                    <div class="contact-strip mt-5 pt-4 border-top">
                        <p class="small text-muted mb-0">Immediate query? Call us at <a href="tel:+917425016636" class="text-primary fw-bold">+91 7425016636</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php include(__DIR__ . '/../footer.php'); ?>

<style>
    :root {
        --primary-gradient: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);
        --accent-gradient: linear-gradient(135deg, #fbc145 0%, #e06930 100%);
    }

    .coming-soon-premium {
        position: relative;
        overflow: hidden;
        background: #fdfdfd;
        font-family: 'Outfit', sans-serif;
        padding: 60px 0;
    }

    .bg-shapes {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        opacity: 0.4;
    }

    .shape {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px);
    }

    .shape-1 {
        width: 400px;
        height: 400px;
        background: rgba(13, 110, 253, 0.1);
        top: -100px;
        right: -100px;
    }

    .shape-2 {
        width: 300px;
        height: 300px;
        background: rgba(251, 193, 69, 0.1);
        bottom: -50px;
        left: -50px;
    }

    .shape-3 {
        width: 250px;
        height: 250px;
        background: rgba(13, 110, 253, 0.05);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .content-card {
        position: relative;
        z-index: 1;
        padding: 40px;
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(10px);
        border-radius: 30px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.05);
    }

    .location-icon-wrapper {
        position: relative;
        width: 80px;
        height: 80px;
        margin: 0 auto;
        background: var(--primary-gradient);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 2.5rem;
        box-shadow: 0 10px 20px rgba(13, 110, 253, 0.3);
    }

    .pulse-ring {
        position: absolute;
        width: 100%;
        height: 100%;
        border: 2px solid #0d6efd;
        border-radius: 50%;
        animation: pulse 2s infinite;
    }

    @keyframes pulse {
        0% { transform: scale(1); opacity: 1; }
        100% { transform: scale(1.8); opacity: 0; }
    }

    .gradient-text {
        background: var(--primary-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .coming-soon-badge {
        display: inline-block;
        padding: 8px 24px;
        background: #f8f9fa;
        border: 1px solid #dee2e6;
        border-radius: 100px;
        font-weight: 600;
        color: #6c757d;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 0.8rem;
    }

    .tracking-wider { letter-spacing: 0.1em; }

    .btn-premium {
        padding: 16px 32px;
        border-radius: 12px;
        font-weight: 700;
        text-decoration: none;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 1rem;
    }

    .btn-premium.primary {
        background: var(--primary-gradient);
        color: white;
        box-shadow: 0 10px 15px -3px rgba(13, 110, 253, 0.4);
    }

    .btn-premium.secondary {
        background: white;
        color: #333;
        border: 1px solid #dee2e6;
    }

    .btn-premium:hover {
        transform: translateY(-3px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    }

    .btn-premium.primary:hover {
        background: linear-gradient(135deg, #0a58ca 0%, #084298 100%);
    }

    @media (max-width: 576px) {
        .content-card {
            padding: 30px 20px;
            border-radius: 20px;
        }
        .display-4 {
            font-size: 2.2rem;
        }
        .btn-premium {
            width: 100%;
        }
    }
</style>

</body>
</html>
