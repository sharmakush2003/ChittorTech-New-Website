<?php 
$cityName = "Thrissur";
$pageTitle = "#No.1 Top ERP Software in Manufacturing & Retail in Thrissur | Digify Soft Solutions";
$pageDescription = "Empower your Thrissur business with India's most trusted Cloud-based ERP and CRM solutions. Manage inventory, production, GST billing, and more.";
$pageKeywords = "ERP Software Thrissur, Manufacturing ERP Thrissur, Retail ERP Thrissur, POS Billing Thrissur, Cloud ERP India";

// We use base tag to handle relative paths in header/footer since this is in a subfolder
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
        background: linear-gradient(135deg, #fff9f0 0%, #fff0d9 100%);
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
                    <span class="badge bg-warning text-dark mb-3 px-3 py-2 text-uppercase fw-bold" style="letter-spacing: 2px;">#No.1 ERP Solution in Thrissur</span>
                    <h1 class="display-4 fw-bold mb-4">Top ERP Software in Manufacturing & Retail in <span class="text-primary">Thrissur</span></h1>
                    <p class="lead text-muted mb-4 px-lg-5">Running a manufacturing or retail business in Thrissur requires more than spreadsheets and manual systems. Modern businesses now rely on ERP software to manage inventory, production, accounting, billing, CRM, warehouse management, employees, GST compliance, and analytics from a centralized dashboard.</p>
                    <div class="hero-btn-wrap">
                        <a href="contact-us.php" class="btn btn-primary btn-lg hero-btn-premium hvr-grow">Get Free Demo</a>
                        <a href="cities/thrissur.php#features" class="btn btn-outline-primary btn-lg hero-btn-premium hero-btn-outline hvr-grow">Explore Features</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Overview Section -->
<section class="overview-sec py-5">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10 text-center">
                <h2 class="fw-bold mb-4">What Is DigifySoft ERP?</h2>
                <p class="lead text-muted">According to Digify Soft Solutions, DigifySoft ERP is designed for Indian manufacturers, retailers, wholesalers, distributors, and MSMEs looking for affordable, customizable, and cloud-based ERP software. It helps businesses manage operations from one dashboard.</p>
            </div>
        </div>
        <div class="row mt-5 g-4 justify-content-center">
            <?php 
            $modules = [
                ["name" => "Manufacturing ERP", "icon" => "bi-building-gear"],
                ["name" => "Retail ERP", "icon" => "bi-shop"],
                ["name" => "POS Billing", "icon" => "bi-receipt"],
                ["name" => "Accounting", "icon" => "bi-calculator"],
                ["name" => "Inventory Management", "icon" => "bi-box-seam"],
                ["name" => "CRM", "icon" => "bi-people"],
                ["name" => "Payroll", "icon" => "bi-cash-stack"],
                ["name" => "Warehouse Management", "icon" => "bi-house-gear"],
                ["name" => "GST Billing", "icon" => "bi-file-earmark-text"],
                ["name" => "Omnichannel Retail", "icon" => "bi-globe"],
                ["name" => "Reports & Analytics", "icon" => "bi-graph-up-arrow"]
            ];
            foreach($modules as $module) {
                echo '<div class="col-lg-2 col-md-3 col-6">
                        <div class="module-card text-center p-3 border rounded shadow-sm h-100 hvr-float">
                            <i class="bi '.$module['icon'].' fs-3 text-primary mb-2 d-block"></i>
                            <h6 class="mb-0" style="font-size: 14px;">'.$module['name'].'</h6>
                        </div>
                    </div>';
            }
            ?>
        </div>
    </div>
</section>

<!-- Industry Specific Section -->
<section class="industry-needs py-5 bg-light">
    <div class="container">
        <div class="row g-5">
            <div class="col-lg-6">
                <div class="p-4 bg-white rounded shadow-sm h-100 border-top border-primary border-4 animate__animated animate__fadeInUp">
                    <h3 class="fw-bold mb-4">Why Manufacturing Businesses in Thrissur Need ERP</h3>
                    <p class="mb-4">Manufacturing industries in Thrissur face multiple operational challenges. Our ERP automates factory operations and improves productivity through:</p>
                    <div class="row g-3">
                        <?php 
                        $mfg_needs = ["Production planning", "Raw material tracking", "Inventory control", "Machine scheduling", "Warehouse coordination", "Employee monitoring", "GST compliance", "Real-time production tracking"];
                        foreach($mfg_needs as $need) {
                            echo '<div class="col-md-6"><div class="d-flex align-items-center"><i class="bi bi-check-circle-fill text-primary me-2"></i><span>'.$need.'</span></div></div>';
                        }
                        ?>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="p-4 bg-white rounded shadow-sm h-100 border-top border-warning border-4 animate__animated animate__fadeInUp" style="animation-delay: 0.2s;">
                    <h3 class="fw-bold mb-4">Why Retail Businesses Need ERP Software</h3>
                    <p class="mb-4">Retail stores require fast operations and accurate data. Our retail ERP helps businesses manage invoicing, billing, and omnichannel operations from one system:</p>
                    <div class="row g-3">
                        <?php 
                        $retail_needs = ["Fast POS billing", "Barcode billing", "Stock management", "Multi-store management", "CRM", "Loyalty programs", "Sales tracking", "Inventory synchronization"];
                        foreach($retail_needs as $need) {
                            echo '<div class="col-md-6"><div class="d-flex align-items-center"><i class="bi bi-check-circle-fill text-warning me-2"></i><span>'.$need.'</span></div></div>';
                        }
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Main Features Section -->
<section id="features" class="features-sec py-5">
    <div class="container">
        <div class="text-center mb-5">
            <h2 class="fw-bold">Main Features of DigifySoft ERP</h2>
            <p class="text-muted">Powerful modules designed to scale your business in Thrissur</p>
        </div>
        <div class="row g-4">
            <!-- Smart POS -->
            <div class="col-md-4">
                <div class="feature-box p-4 border rounded shadow-sm h-100 hvr-shadow">
                    <div class="icon mb-3"><i class="bi bi-receipt fs-2 text-primary"></i></div>
                    <h4 class="fw-bold">1. Smart POS Billing System</h4>
                    <ul class="list-unstyled">
                        <li><i class="bi bi-dot"></i> Fast GST billing</li>
                        <li><i class="bi bi-dot"></i> Barcode support</li>
                        <li><i class="bi bi-dot"></i> Multi-payment modes</li>
                        <li><i class="bi bi-dot"></i> POS integration</li>
                        <li><i class="bi bi-dot"></i> Omnichannel retail support</li>
                        <li><i class="bi bi-dot"></i> Touch POS system</li>
                    </ul>
                </div>
            </div>
            <!-- Inventory -->
            <div class="col-md-4">
                <div class="feature-box p-4 border rounded shadow-sm h-100 hvr-shadow">
                    <div class="icon mb-3"><i class="bi bi-box-seam fs-2 text-primary"></i></div>
                    <h4 class="fw-bold">2. Inventory Management</h4>
                    <ul class="list-unstyled">
                        <li><i class="bi bi-dot"></i> Real-time stock tracking</li>
                        <li><i class="bi bi-dot"></i> Barcode inventory</li>
                        <li><i class="bi bi-dot"></i> Batch management</li>
                        <li><i class="bi bi-dot"></i> Stock transfer</li>
                        <li><i class="bi bi-dot"></i> Warehouse management</li>
                        <li><i class="bi bi-dot"></i> Low stock alerts</li>
                        <li><i class="bi bi-dot"></i> Expiry management</li>
                    </ul>
                </div>
            </div>
            <!-- Manufacturing -->
            <div class="col-md-4">
                <div class="feature-box p-4 border rounded shadow-sm h-100 hvr-shadow">
                    <div class="icon mb-3"><i class="bi bi-gear-wide-connected fs-2 text-primary"></i></div>
                    <h4 class="fw-bold">3. Manufacturing ERP Features</h4>
                    <ul class="list-unstyled">
                        <li><i class="bi bi-dot"></i> Production planning</li>
                        <li><i class="bi bi-dot"></i> Bill of Materials (BOM)</li>
                        <li><i class="bi bi-dot"></i> Work-in-progress tracking</li>
                        <li><i class="bi bi-dot"></i> Quality control</li>
                        <li><i class="bi bi-dot"></i> Batch manufacturing</li>
                        <li><i class="bi bi-dot"></i> MRP planning</li>
                    </ul>
                </div>
            </div>
            <!-- CRM -->
            <div class="col-md-4">
                <div class="feature-box p-4 border rounded shadow-sm h-100 hvr-shadow">
                    <div class="icon mb-3"><i class="bi bi-people fs-2 text-primary"></i></div>
                    <h4 class="fw-bold">4. CRM & Customer Management</h4>
                    <ul class="list-unstyled">
                        <li><i class="bi bi-dot"></i> Customer management</li>
                        <li><i class="bi bi-dot"></i> Loyalty systems</li>
                        <li><i class="bi bi-dot"></i> Lead management</li>
                        <li><i class="bi bi-dot"></i> Discount coupons</li>
                        <li><i class="bi bi-dot"></i> WhatsApp & SMS notifications</li>
                        <li><i class="bi bi-dot"></i> Customer analytics</li>
                    </ul>
                </div>
            </div>
            <!-- Accounting -->
            <div class="col-md-4">
                <div class="feature-box p-4 border rounded shadow-sm h-100 hvr-shadow">
                    <div class="icon mb-3"><i class="bi bi-calculator fs-2 text-primary"></i></div>
                    <h4 class="fw-bold">5. Accounting & GST</h4>
                    <ul class="list-unstyled">
                        <li><i class="bi bi-dot"></i> GST-ready billing</li>
                        <li><i class="bi bi-dot"></i> Financial reports</li>
                        <li><i class="bi bi-dot"></i> Balance sheets</li>
                        <li><i class="bi bi-dot"></i> Profit & loss reports</li>
                        <li><i class="bi bi-dot"></i> Multi-branch accounting</li>
                        <li><i class="bi bi-dot"></i> E-invoice integration</li>
                    </ul>
                </div>
            </div>
            <!-- Warehouse -->
            <div class="col-md-4">
                <div class="feature-box p-4 border rounded shadow-sm h-100 hvr-shadow">
                    <div class="icon mb-3"><i class="bi bi-building fs-2 text-primary"></i></div>
                    <h4 class="fw-bold">6. Warehouse Management</h4>
                    <ul class="list-unstyled">
                        <li><i class="bi bi-dot"></i> Rack/bin management</li>
                        <li><i class="bi bi-dot"></i> Warehouse transfers</li>
                        <li><i class="bi bi-dot"></i> Goods in transit tracking</li>
                        <li><i class="bi bi-dot"></i> Physical stock verification</li>
                        <li><i class="bi bi-dot"></i> Capacity management</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Advantages Section -->
<section class="advantages-sec py-5 bg-dark text-white">
    <div class="container">
        <div class="text-center mb-5">
            <h2 class="fw-bold">Advantages of DigifySoft ERP</h2>
            <p class="text-light">Why businesses in Thrissur choose our cloud-based solution</p>
        </div>
        <div class="row g-4">
            <div class="col-md-3 text-center">
                <div class="p-3 border border-secondary rounded">
                    <i class="bi bi-speedometer2 fs-1 text-warning mb-3 d-block"></i>
                    <h5>Centralized Dashboard</h5>
                    <p class="small text-light">Manage inventory, sales, production, employees, and accounts from one place.</p>
                </div>
            </div>
            <div class="col-md-3 text-center">
                <div class="p-3 border border-secondary rounded">
                    <i class="bi bi-lightning-charge fs-1 text-warning mb-3 d-block"></i>
                    <h5>Real-Time Reports</h5>
                    <p class="small text-light">Generate sales, inventory, and profit reports instantly with live analytics.</p>
                </div>
            </div>
            <div class="col-md-3 text-center">
                <div class="p-3 border border-secondary rounded">
                    <i class="bi bi-cpu fs-1 text-warning mb-3 d-block"></i>
                    <h5>Reduced Manual Work</h5>
                    <p class="small text-light">Automation reduces manual calculations, duplicate entries, and billing errors.</p>
                </div>
            </div>
            <div class="col-md-3 text-center">
                <div class="p-3 border border-secondary rounded">
                    <i class="bi bi-cloud-check fs-1 text-warning mb-3 d-block"></i>
                    <h5>Cloud-Based Access</h5>
                    <p class="small text-light">Access your ERP anytime, anywhere on mobile, desktop, or laptop.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Industries Supported -->
<section class="industries-sec py-5">
    <div class="container">
        <div class="text-center mb-5">
            <h2 class="fw-bold">Industries Supported</h2>
            <p class="text-muted">Tailored solutions for every business type</p>
        </div>
        <div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-3 text-center">
            <?php 
            $industries = ["Grocery stores", "Garment stores", "Hardware shops", "Electronics businesses", "Furniture stores", "Manufacturing industries", "Supermarkets", "Departmental stores", "Auto spare businesses", "FMCG businesses", "Fashion retailers", "Bakery shops", "Medical stores"];
            foreach($industries as $ind) {
                echo '<div class="col"><div class="p-3 bg-light rounded shadow-sm h-100 d-flex align-items-center justify-content-center"><h6>'.$ind.'</h6></div></div>';
            }
            ?>
        </div>
    </div>
</section>

<!-- Why Cloud & Future -->
<section class="future-sec py-5 bg-primary text-white">
    <div class="container">
        <div class="row g-5 align-items-center">
            <div class="col-lg-6">
                <h3 class="fw-bold mb-4">Why Businesses Prefer Cloud ERP</h3>
                <ul class="list-unstyled">
                    <li class="mb-3"><i class="bi bi-shield-check me-2"></i> Better data security & automatic backups</li>
                    <li class="mb-3"><i class="bi bi-phone me-2"></i> Remote access & real-time monitoring</li>
                    <li class="mb-3"><i class="bi bi-arrow-repeat me-2"></i> Faster updates & zero maintenance</li>
                    <li class="mb-3"><i class="bi bi-currency-dollar me-2"></i> Lower infrastructure & hardware cost</li>
                </ul>
            </div>
            <div class="col-lg-6">
                <div class="p-4 bg-white text-dark rounded shadow">
                    <h3 class="fw-bold mb-3">Future of ERP in India</h3>
                    <p>The future of business management is intelligent and connected. ERP adoption among Indian SMEs is growing rapidly with focus on:</p>
                    <div class="mt-3">
                        <span class="badge bg-primary me-1 mb-1 p-2">AI-Powered ERP</span>
                        <span class="badge bg-primary me-1 mb-1 p-2">Mobile ERP</span>
                        <span class="badge bg-primary me-1 mb-1 p-2">Automation</span>
                        <span class="badge bg-primary me-1 mb-1 p-2">Smart Analytics</span>
                        <span class="badge bg-primary me-1 mb-1 p-2">Industry-Specific Solutions</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Call to Action -->
<section class="cta-section py-5 bg-warning text-center">
    <div class="container">
        <h2 class="fw-bold mb-4">Ready to transform your Thrissur business?</h2>
        <p class="mb-4 lead fw-bold">Join hundreds of successful businesses using Digify ERP.</p>
        <a href="contact-us.php" class="btn btn-dark btn-lg px-5 py-3 fw-bold hvr-grow">Get Free Trial Today</a>
    </div>
</section>

<?php include(__DIR__ . '/../footer.php'); ?>

<style>
    .module-card:hover {
        background-color: #f8f9fa;
        border-color: #0d6efd !important;
    }
    .floating-img {
        animation: float 6s ease-in-out infinite;
    }
    @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
        100% { transform: translateY(0px); }
    }
    .feature-box i {
        transition: 0.3s;
    }
    .feature-box:hover i {
        transform: scale(1.2);
    }
    .feature-box ul li {
        margin-bottom: 5px;
        font-size: 15px;
    }
</style>

</body>
</html>
