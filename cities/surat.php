<?php 
$cityName = "Surat";
$pageTitle = "#No.1 Top ERP Software in Manufacturing & Retail in Surat | Digify Soft Solutions";
$pageDescription = "Leading ERP for Textile, Diamond, and Garment industries in Surat. Cloud-based ERP with AI POS for wholesalers and retailers in Surat.";
$pageKeywords = "ERP Software Surat, Textile ERP India, Diamond ERP Surat, Garment ERP Gujarat, AI POS Surat";

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
        background: linear-gradient(135deg, #e3f2fd 0%, #e1bee7 100%);
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
                    <span class="badge bg-warning text-dark mb-3 px-3 py-2 text-uppercase fw-bold" style="letter-spacing: 2px;">#No.1 ERP Solution for Textiles & Diamonds in Surat</span>
                    <h1 class="display-4 fw-bold mb-4">Top ERP Software in Manufacturing & Retail in <span class="text-primary">Surat</span></h1>
                    <p class="lead text-muted mb-4 px-lg-5">Surat is the backbone of India's textile and diamond industries. As businesses in Surat grow rapidly, DigifySoft ERP provides the advanced automation needed to manage complex inventory, multi-location warehouses, and high-speed retail billing from one centralized platform.</p>
                    <div class="hero-btn-wrap">
                        <a href="contact-us.php" class="btn btn-primary btn-lg hero-btn-premium hvr-grow">Get Free Demo</a>
                        <a href="cities/surat.php#features" class="btn btn-outline-primary btn-lg hero-btn-premium hero-btn-outline hvr-grow">Explore Modules</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Industry Hub Section -->
<section class="industry-hub py-5 bg-light">
    <div class="container">
        <div class="text-center mb-5">
            <h2 class="fw-bold">Supporting Surat's Global Powerhouses</h2>
            <p class="text-muted">Tailored ERP solutions for the Textile and Diamond industries</p>
        </div>
        <div class="row g-4 text-center justify-content-center">
            <?php 
            $industries = [
                ["name" => "Textile Manufacturing", "icon" => "bi-palette", "desc" => "Advanced fabric tracking and production planning."],
                ["name" => "Diamond Processing", "icon" => "bi-gem", "desc" => "Precision inventory and grading management."],
                ["name" => "Garment Production", "icon" => "bi-scissors", "desc" => "Integrated WIP tracking for garment units."],
                ["name" => "Wholesale Trading", "icon" => "bi-truck", "desc" => "Bulk order management and multi-location sync."],
                ["name" => "Retail & Showrooms", "icon" => "bi-shop", "desc" => "AI-powered POS for high-speed billing."],
                ["name" => "Chemical Industries", "icon" => "bi-droplet-half", "desc" => "Safe and compliant manufacturing workflows."]
            ];
            foreach($industries as $ind) {
                echo '<div class="col-lg-4 col-md-6">
                        <div class="p-4 bg-white border rounded shadow-sm h-100 hvr-sweep-to-top">
                            <i class="bi '.$ind['icon'].' fs-1 text-primary mb-3 d-block"></i>
                            <h5 class="fw-bold">'.$ind['name'].'</h5>
                            <p class="small text-muted mb-0">'.$ind['desc'].'</p>
                        </div>
                    </div>';
            }
            ?>
        </div>
    </div>
</section>

<!-- Manufacturing & Retail Deep Dive -->
<section class="mfg-retail-sec py-5">
    <div class="container">
        <div class="row g-5">
            <div class="col-lg-6">
                <div class="p-4 bg-white border-top border-primary border-4 rounded shadow-sm h-100">
                    <h3 class="fw-bold mb-4">Manufacturing Excellence</h3>
                    <p class="mb-4">Automate your factory floor in Surat with specialized production tools:</p>
                    <ul class="list-unstyled">
                        <li class="mb-3"><i class="bi bi-check-circle-fill text-primary me-2"></i> <strong>PPC & BOM:</strong> Schedule production and manage complex material formulas.</li>
                        <li class="mb-3"><i class="bi bi-check-circle-fill text-primary me-2"></i> <strong>WIP Tracking:</strong> Monitor semi-finished products and machine utilization.</li>
                        <li class="mb-3"><i class="bi bi-check-circle-fill text-primary me-2"></i> <strong>Quality Control:</strong> Integrated inspections and defect management.</li>
                        <li class="mb-3"><i class="bi bi-check-circle-fill text-primary me-2"></i> <strong>Dispatch Management:</strong> Automate delivery schedules and order fulfillment.</li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="p-4 bg-dark text-white rounded shadow-sm h-100">
                    <h3 class="fw-bold mb-4"><i class="bi bi-lightning-charge text-warning me-2"></i> Smart Retail & POS</h3>
                    <p class="mb-4 text-light">Elevate your customer experience with AI-powered retail automation:</p>
                    <div class="row g-3">
                        <div class="col-6">
                            <div class="p-3 bg-white bg-opacity-10 border border-white border-opacity-25 rounded h-100">
                                <h6 class="fw-bold mb-1">Touch POS</h6>
                                <p class="small text-light mb-0">Fast checkout system.</p>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="p-3 bg-white bg-opacity-10 border border-white border-opacity-25 rounded h-100">
                                <h6 class="fw-bold mb-1">AI Analytics</h6>
                                <p class="small text-light mb-0">Sales trend analysis.</p>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="p-3 bg-white bg-opacity-10 border border-white border-opacity-25 rounded h-100">
                                <h6 class="fw-bold mb-1">Multi-Store</h6>
                                <p class="small text-light mb-0">Centralized stock.</p>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="p-3 bg-white bg-opacity-10 border border-white border-opacity-25 rounded h-100">
                                <h6 class="fw-bold mb-1">GST Billing</h6>
                                <p class="small text-light mb-0">Instant compliance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Features Highlight -->
<section id="features" class="features-highlight py-5 bg-primary text-white">
    <div class="container">
        <div class="row g-4 text-center">
            <div class="col-md-3">
                <i class="bi bi-cloud-arrow-up fs-1 mb-2"></i>
                <h5>Cloud ERP</h5>
                <p class="small">Anywhere access for Surat MSMEs.</p>
            </div>
            <div class="col-md-3">
                <i class="bi bi-calculator-fill fs-1 mb-2"></i>
                <h5>GST Accounting</h5>
                <p class="small">E-invoicing & Financial reports.</p>
            </div>
            <div class="col-md-3">
                <i class="bi bi-person-lines-fill fs-1 mb-2"></i>
                <h5>CRM & Leads</h5>
                <p class="small">WhatsApp & SMS follow-ups.</p>
            </div>
            <div class="col-md-3">
                <i class="bi bi-briefcase-fill fs-1 mb-2"></i>
                <h5>Payroll & HR</h5>
                <p class="small">Automated salary & attendance.</p>
            </div>
        </div>
    </div>
</section>

<!-- FAQ Section -->
<section class="faq-sec py-5">
    <div class="container">
        <div class="text-center mb-5">
            <h2 class="fw-bold">Surat ERP Questions & Answers (2026)</h2>
            <p class="text-muted">Expert insights for implementing ERP in Surat's industrial landscape</p>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-9">
                <div class="accordion shadow-sm" id="suratFaq">
                    <?php 
                    $faqs = [
                        ["q" => "What is ERP software?", "a" => "ERP (Enterprise Resource Planning) software is a centralized business management system that helps businesses manage Manufacturing, Inventory, Billing, Accounting, CRM, and more from one dashboard."],
                        ["q" => "Why do manufacturing businesses in Surat need ERP software?", "a" => "Surat's industries like Textile and Diamond processing require ERP to automate production planning, track raw materials, and improve inventory control."],
                        ["q" => "Why is ERP software important for retail businesses in Surat?", "a" => "It ensures fast POS billing, barcode integration, multi-store management, and better customer experience through loyalty programs."],
                        ["q" => "What are the key features of DigifySoft ERP?", "a" => "Includes Manufacturing ERP, Retail ERP, Inventory Management, GST Billing, POS, CRM, Payroll, Warehouse Management, and Cloud Access."],
                        ["q" => "How does manufacturing ERP software work?", "a" => "It connects production planning, inventory, and machine scheduling into one system, allowing real-time monitoring of factory operations."],
                        ["q" => "What is retail ERP software?", "a" => "A system designed to manage POS billing, barcode systems, sales reporting, and customer records for retail outlets."],
                        ["q" => "What is cloud ERP software?", "a" => "An internet-based ERP that allows remote access with lower infrastructure costs and automatic backups."],
                        ["q" => "How does ERP improve inventory management?", "a" => "By tracking stock in real-time, monitoring movement across warehouses, and generating low-stock alerts."],
                        ["q" => "What is POS billing software?", "a" => "Helps generate invoices quickly, scan barcodes, and track daily sales with GST-ready billing."],
                        ["q" => "Does ERP software support GST billing?", "a" => "Yes, it supports GST invoices, E-invoicing, E-way bills, and comprehensive financial tax reports."],
                        ["q" => "What industries in Surat can use ERP software?", "a" => "Textile, Diamond, Garment, Retail, Wholesale, Chemical, and FMCG businesses."],
                        ["q" => "What is Bill of Materials (BOM) in ERP?", "a" => "A feature that manages raw materials, components, and formulas to improve production planning."],
                        ["q" => "How does ERP improve manufacturing operations?", "a" => "By automating planning, tracking machine usage, and monitoring production stages to reduce delays."],
                        ["q" => "What is warehouse management in ERP?", "a" => "Helps manage multiple warehouses, track stock movement, and improve inventory organization."],
                        ["q" => "Can ERP software be customized?", "a" => "Yes, it can be customized with custom dashboards, industry-specific modules, and automated workflows."],
                        ["q" => "How does ERP help small businesses in Surat?", "a" => "Reduces manual work, improves inventory accuracy, and automates billing—perfect for growing MSMEs."],
                        ["q" => "What are the advantages of cloud ERP software?", "a" => "Remote access, real-time updates, automatic backups, and scalability from any device."],
                        ["q" => "What reports can ERP software generate?", "a" => "Sales, Production, GST, Inventory, and P&L reports for better decision-making."],
                        ["q" => "How does CRM work in ERP software?", "a" => "Tracks leads, manages customer records, and sends automated notifications to increase sales."],
                        ["q" => "Why choose DigifySoft ERP in Surat?", "a" => "It offers a complete integrated suite with AI POS, Cloud ERP, and affordable pricing for Indian businesses."],
                        ["q" => "What common ERP problems do businesses face?", "a" => "High implementation costs, complex interfaces, and poor customization—issues DigifySoft is designed to solve."],
                        ["q" => "Why do Surat MSMEs prefer affordable ERP software?", "a" => "To get professional-grade automation without the high cost of enterprise software."],
                        ["q" => "What is the future of ERP software in Surat?", "a" => "Increased use of AI-powered automation, mobile apps, and real-time business intelligence."],
                        ["q" => "Why is cloud ERP becoming popular in Surat?", "a" => "Due to the need for remote business access and lower hardware maintenance costs."],
                        ["q" => "Why is DigifySoft ERP considered one of the best in Surat?", "a" => "Because it combines all critical business functions into one easy-to-use platform designed for the Indian market."]
                    ];
                    foreach($faqs as $i => $faq) {
                        $id = "sq".$i;
                        echo '<div class="accordion-item">
                                <h2 class="accordion-header">
                                  <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#'.$id.'">
                                    '.($i+1).'. '.$faq['q'].'
                                  </button>
                                </h2>
                                <div id="'.$id.'" class="accordion-collapse collapse" data-bs-parent="#suratFaq">
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
        <h2 class="fw-bold mb-4">Empower Your Surat Business Today</h2>
        <p class="mb-4 lead fw-bold">Scale your textile or diamond enterprise with India's smart ERP.</p>
        <a href="contact-us.php" class="btn btn-dark btn-lg px-5 py-3 fw-bold hvr-grow">Book Your Free Demo</a>
    </div>
</section>

<?php include(__DIR__ . '/../footer.php'); ?>

<style>
    .hvr-sweep-to-top:before {
        background: #0d6efd;
    }
    .hvr-sweep-to-top:hover {
        color: #fff !important;
    }
    .hvr-sweep-to-top:hover i {
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
    .accordion-button:not(.collapsed) {
        background-color: #0d6efd;
        color: white;
    }
</style>

</body>
</html>
