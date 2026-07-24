<?php 
$cityName = "Kolkata";
$pageTitle = "#No.1 Top ERP Software in Manufacturing & Retail in Kolkata | Digify Soft Solutions";
$pageDescription = "Leading ERP for Leather, Engineering, and Textile industries in Kolkata. AI-powered POS and Cloud ERP for retail chains and MSMEs in West Bengal.";
$pageKeywords = "ERP Software Kolkata, Leather Industry ERP, Engineering ERP Kolkata, Retail ERP West Bengal, AI POS Kolkata";

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
        padding: 100px 0 140px !important;
        position: relative;
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
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
                    <span class="badge bg-primary text-white mb-3 px-3 py-2 text-uppercase fw-bold" style="letter-spacing: 2px;">#No.1 ERP Solution in West Bengal</span>
                    <h1 class="display-4 fw-bold mb-4">Top ERP Software in Manufacturing & Retail in <span class="text-primary">Kolkata</span></h1>
                    <p class="lead text-muted mb-4 px-lg-5">Kolkata is the commercial heart of Eastern India. From the traditional leather and textile industries to modern multi-store retail chains, DigifySoft ERP provides the AI-powered automation needed to scale your operations and reduce manual dependency.</p>
                    <div class="hero-btn-wrap">
                        <a href="contact-us.php" class="btn btn-primary btn-lg hero-btn-premium hvr-grow">Get Free Demo</a>
                        <a href="cities/kolkata.php#features" class="btn btn-outline-primary btn-lg hero-btn-premium hero-btn-outline hvr-grow">View Modules</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Industry Heritage Section -->
<section class="industry-heritage py-5 bg-light">
    <div class="container">
        <div class="text-center mb-5">
            <h2 class="fw-bold">Supporting Kolkata's Industrial Growth</h2>
            <p class="text-muted">Specialized modules for the city's key commercial sectors</p>
        </div>
        <div class="row g-4 text-center">
            <?php 
            $industries = [
                ["name" => "Leather Industries", "icon" => "bi-briefcase", "desc" => "Integrated supply chain and quality control for leather units."],
                ["name" => "Engineering Businesses", "icon" => "bi-gear-wide-connected", "desc" => "Precision BOM and production planning for engineering firms."],
                ["name" => "Textile & Garment", "icon" => "bi-palette", "desc" => "Manage production workflows from yarn to finished garment."],
                ["name" => "FMCG Businesses", "icon" => "bi-box-seam", "desc" => "Real-time distribution and expiry management for FMCG."],
                ["name" => "Supermarkets & Retail", "icon" => "bi-cart-check", "desc" => "Fast AI-powered POS billing for retail chains."],
                ["name" => "Pharmacies & Food", "icon" => "bi-capsule", "desc" => "Compliance-ready ERP for health and food sectors."]
            ];
            foreach($industries as $ind) {
                echo '<div class="col-lg-4 col-md-6">
                        <div class="p-4 bg-white border-bottom border-primary border-4 rounded shadow-sm h-100 hvr-underline-reveal">
                            <i class="bi '.$ind['icon'].' fs-1 text-primary mb-3 d-block"></i>
                            <h5 class="fw-bold">'.$ind['name'].'</h5>
                            <p class="small text-muted">'.$ind['desc'].'</p>
                        </div>
                    </div>';
            }
            ?>
        </div>
    </div>
</section>

<!-- Manufacturing & AI Section -->
<section class="mfg-ai-sec py-5">
    <div class="container">
        <div class="row g-5 align-items-center">
            <div class="col-lg-6">
                <div class="p-5 bg-primary text-white rounded-4 shadow-lg">
                    <h3 class="fw-bold mb-4">Precision Manufacturing ERP</h3>
                    <p class="mb-4">Kolkata's factories demand efficiency. Our ERP connects every department into one centralized platform.</p>
                    <div class="d-flex flex-column gap-3">
                        <div class="d-flex align-items-center"><i class="bi bi-check-circle-fill text-warning me-3"></i><span>Production Planning & Control (PPC)</span></div>
                        <div class="d-flex align-items-center"><i class="bi bi-check-circle-fill text-warning me-3"></i><span>Bill of Materials (BOM) Management</span></div>
                        <div class="d-flex align-items-center"><i class="bi bi-check-circle-fill text-warning me-3"></i><span>Raw Material & WIP Tracking</span></div>
                        <div class="d-flex align-items-center"><i class="bi bi-check-circle-fill text-warning me-3"></i><span>Batch Manufacturing & Traceability</span></div>
                        <div class="d-flex align-items-center"><i class="bi bi-check-circle-fill text-warning me-3"></i><span>Quality Control & Inspection Records</span></div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <h2 class="fw-bold mb-4">AI-Powered <span class="text-primary">Retail Automation</span></h2>
                <p class="mb-4">Empower your multi-store retail chain in Kolkata with our smart POS and AI-driven analytics.</p>
                <div class="row g-4">
                    <div class="col-md-6">
                        <div class="p-3 border rounded shadow-sm">
                            <h6 class="fw-bold text-primary mb-2">Smart POS Billing</h6>
                            <p class="small text-muted mb-0">Fast barcode and touch billing systems to reduce errors.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-3 border rounded shadow-sm">
                            <h6 class="fw-bold text-primary mb-2">Multi-Store Sync</h6>
                            <p class="small text-muted mb-0">Manage all your Kolkata outlets from a single dashboard.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-3 border rounded shadow-sm">
                            <h6 class="fw-bold text-primary mb-2">Predictive Analytics</h6>
                            <p class="small text-muted mb-0">AI-driven demand forecasting and sales trend analysis.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-3 border rounded shadow-sm">
                            <h6 class="fw-bold text-primary mb-2">CRM & Loyalty</h6>
                            <p class="small text-muted mb-0">Automated WhatsApp notifications and reward programs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Features Spotlight -->
<section id="features" class="features-spotlight py-5 bg-dark text-white text-center">
    <div class="container">
        <h2 class="fw-bold mb-5">Next-Gen ERP Modules</h2>
        <div class="row g-4">
            <div class="col-md-4">
                <div class="p-4 border border-secondary rounded h-100">
                    <i class="bi bi-cloud-check fs-1 text-warning mb-3 d-block"></i>
                    <h5 class="fw-bold">Cloud ERP Access</h5>
                    <p class="small text-light">Anywhere, anytime access with secure mobile and desktop integration.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="p-4 border border-secondary rounded h-100">
                    <i class="bi bi-calculator fs-1 text-warning mb-3 d-block"></i>
                    <h5 class="fw-bold">GST & Accounting</h5>
                    <p class="small text-light">E-invoicing, tax reports, and financial analytics at your fingertips.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="p-4 border border-secondary rounded h-100">
                    <i class="bi bi-person-badge fs-1 text-warning mb-3 d-block"></i>
                    <h5 class="fw-bold">Payroll & HR</h5>
                    <p class="small text-light">Automated attendance, salary management, and performance tracking.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- FAQ Section -->
<section class="faq-sec py-5 bg-light">
    <div class="container">
        <div class="text-center mb-5">
            <h2 class="fw-bold">Kolkata ERP Questions & Answers (2026)</h2>
            <p class="text-muted">Expert guidance for implementing automation in Kolkata's commercial sector</p>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-9">
                <div class="accordion shadow-sm" id="kolkataFaq">
                    <?php 
                    $faqs = [
                        ["q" => "What is ERP software?", "a" => "ERP (Enterprise Resource Planning) software is a centralized business management system that helps businesses manage Manufacturing, Inventory, Billing, Accounting, CRM, and more from one dashboard."],
                        ["q" => "Why do manufacturing businesses in Kolkata need ERP software?", "a" => "Kolkata's industries like Leather and Engineering require ERP to automate production planning, track raw materials, and improve operational visibility."],
                        ["q" => "Why is ERP software important for retail businesses in Kolkata?", "a" => "It ensures fast POS billing, barcode integration, multi-store management, and better customer experience through loyalty programs."],
                        ["q" => "What are the key features of DigifySoft ERP?", "a" => "Includes Manufacturing ERP, Retail ERP, Inventory Management, GST Billing, POS, CRM, Payroll, Warehouse Management, and Cloud Access."],
                        ["q" => "How does manufacturing ERP software work?", "a" => "It connects production planning, inventory, and machine scheduling into one system, allowing real-time monitoring of factory operations."],
                        ["q" => "What is retail ERP software?", "a" => "A system designed to manage POS billing, barcode systems, sales reporting, and customer records for retail outlets."],
                        ["q" => "What is cloud ERP software?", "a" => "An internet-based ERP that allows remote access with lower infrastructure costs and automatic backups."],
                        ["q" => "How does ERP improve inventory management?", "a" => "By tracking stock in real-time, monitoring movement across warehouses, and generating low-stock alerts."],
                        ["q" => "What is POS billing software?", "a" => "Helps generate invoices quickly, scan barcodes, and track daily sales with GST-ready billing."],
                        ["q" => "Does ERP software support GST billing?", "a" => "Yes, it supports GST invoices, E-invoicing, E-way bills, and comprehensive financial tax reports."],
                        ["q" => "What industries in Kolkata can use ERP software?", "a" => "Textile, Leather, Engineering, FMCG, Retail, and Wholesale businesses."],
                        ["q" => "What is Bill of Materials (BOM) in ERP?", "a" => "A feature that manages raw materials, components, and formulas to improve production planning."],
                        ["q" => "How does ERP improve manufacturing operations?", "a" => "By automating planning, tracking machine usage, and monitoring production stages to reduce delays."],
                        ["q" => "What is warehouse management in ERP?", "a" => "Helps manage multiple warehouses, track stock movement, and improve inventory organization."],
                        ["q" => "Can ERP software be customized?", "a" => "Yes, it can be customized with custom dashboards, industry-specific modules, and automated workflows."],
                        ["q" => "How does ERP help small businesses in Kolkata?", "a" => "Reduces manual work, improves inventory accuracy, and automates billing—perfect for growing MSMEs."],
                        ["q" => "What are the advantages of cloud ERP software?", "a" => "Remote access, real-time updates, automatic backups, and scalability from any device."],
                        ["q" => "What reports can ERP software generate?", "a" => "Sales, Production, GST, Inventory, and P&L reports for better decision-making."],
                        ["q" => "How does CRM work in ERP software?", "a" => "Tracks leads, manages customer records, and sends automated notifications to increase sales."],
                        ["q" => "Why choose DigifySoft ERP in Kolkata?", "a" => "It offers a complete integrated suite with AI POS, Cloud ERP, and affordable pricing for Indian businesses."],
                        ["q" => "What common ERP problems do businesses face?", "a" => "High implementation costs, complex interfaces, and poor customization—issues DigifySoft is designed to solve."],
                        ["q" => "Why do Kolkata MSMEs prefer affordable ERP software?", "a" => "To get professional-grade automation without the high cost of enterprise software."],
                        ["q" => "What is the future of ERP software in Kolkata?", "a" => "Increased use of AI-powered automation, mobile apps, and real-time business intelligence."],
                        ["q" => "Why is cloud ERP becoming popular in Kolkata?", "a" => "Due to the need for remote business access and lower hardware maintenance costs."],
                        ["q" => "Why is DigifySoft ERP considered one of the best in Kolkata?", "a" => "Because it combines all critical business functions into one easy-to-use platform designed for the Indian market."]
                    ];
                    foreach($faqs as $i => $faq) {
                        $id = "kq".$i;
                        echo '<div class="accordion-item border-0 mb-2 shadow-sm">
                                <h2 class="accordion-header">
                                  <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#'.$id.'">
                                    '.($i+1).'. '.$faq['q'].'
                                  </button>
                                </h2>
                                <div id="'.$id.'" class="accordion-collapse collapse" data-bs-parent="#kolkataFaq">
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
        <h2 class="fw-bold mb-4">Digitize Your Kolkata Business Today</h2>
        <p class="mb-4 lead fw-bold">Join the community of successful enterprises in West Bengal using DigifySoft ERP.</p>
        <a href="contact-us.php" class="btn btn-dark btn-lg px-5 py-3 fw-bold hvr-grow">Get Started for Free</a>
    </div>
</section>

<?php include(__DIR__ . '/../footer.php'); ?>

<style>
    .hvr-underline-reveal:before {
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
    .accordion-button:not(.collapsed) {
        background-color: #0d6efd;
        color: white;
    }
</style>

</body>
</html>
