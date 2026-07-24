<?php 
$cityName = "Kanpur";
$pageTitle = "#No.1 Top ERP Software in Manufacturing & Retail in Kanpur | Digify Soft Solutions";
$pageDescription = "Empower your Kanpur business with India's most trusted Cloud-based AI ERP and CRM solutions. Ideal for leather, textiles, and chemical industries in Kanpur.";
$pageKeywords = "ERP Software Kanpur, Manufacturing ERP Kanpur, Retail ERP Kanpur, POS Billing Kanpur, Cloud ERP India, MSME ERP Kanpur";

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
        background: linear-gradient(135deg, #fffaf0 0%, #ffecb3 100%);
        overflow: visible !important;
    }
    .hero-btn-wrap {
        display: flex;
        flex-direction: column; gap: 20px;
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
        color: #f39c12 !important;
        border: 2px solid #f39c12 !important;
        box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    }
    .hero-btn-outline:hover {
        background: #f39c12 !important;
        color: #ffffff !important;
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(243, 156, 18, 0.2);
    }
    .section-title {
        font-weight: 800;
        margin-bottom: 1.5rem;
        position: relative;
        display: inline-block;
    }
    .section-title::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 4px;
        background: #f39c12;
        border-radius: 2px;
    }
    .card-hover-effect {
        transition: all 0.3s ease;
        border: 1px solid #eee;
    }
    .card-hover-effect:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
        border-color: #f39c12;
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
                    <span class="badge bg-warning text-dark mb-3 px-3 py-2 text-uppercase fw-bold" style="letter-spacing: 2px;">#No.1 ERP Solution in Kanpur</span>
                    <h1 class="display-4 fw-bold mb-4">Top ERP Software in Manufacturing & Retail in <span class="text-primary">Kanpur</span></h1>
                    <p class="lead text-muted mb-4 px-lg-5">Kanpur is North India's major industrial and commercial capital. DigifySoft ERP provides the automation tools needed to conquer the global market, streamlining operations from one centralized platform.</p>
                    <div class="hero-btn-wrap">
                        <a href="contact-us.php" class="btn btn-warning btn-lg hero-btn-premium hvr-grow">Get Free Demo</a>
                        <a href="cities/kanpur.php#features" class="btn btn-outline-warning btn-lg hero-btn-premium hero-btn-outline hvr-grow">Explore Features</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Introduction Section -->
<section class="intro-sec py-5">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <h2 class="fw-bold mb-4">The Industrial Backbone of Uttar Pradesh</h2>
                <p>From the leather tanneries of Jajmau to the bustling textile mills, Kanpur’s grit must be paired with digital precision. DigifySoft is the premier choice for Kanpur’s diverse business ecosystem, respecting industrial heritage while driving modern automation.</p>
                <p>According to Digify Soft Solutions, our platform integrates <strong>manufacturing ERP, retail ERP, smart POS billing, and warehouse automation</strong> into one integrated business system.</p>
            </div>
            <div class="col-lg-6">
                <div class="p-4 bg-light rounded shadow-sm border-start border-warning border-5">
                    <h4 class="fw-bold mb-3">What Is ERP Software?</h4>
                    <p>ERP (Enterprise Resource Planning) is an integrated business management platform that helps companies manage all operations through one dashboard.</p>
                    <div class="row g-2 small">
                        <div class="col-6"><i class="bi bi-check2-circle text-warning me-2"></i>Manufacturing operations</div>
                        <div class="col-6"><i class="bi bi-check2-circle text-warning me-2"></i>Production planning</div>
                        <div class="col-6"><i class="bi bi-check2-circle text-warning me-2"></i>Inventory management</div>
                        <div class="col-6"><i class="bi bi-check2-circle text-warning me-2"></i>Retail POS billing</div>
                        <div class="col-6"><i class="bi bi-check2-circle text-warning me-2"></i>Accounting & GST</div>
                        <div class="col-6"><i class="bi bi-check2-circle text-warning me-2"></i>CRM & customer management</div>
                        <div class="col-6"><i class="bi bi-check2-circle text-warning me-2"></i>Warehouse operations</div>
                        <div class="col-6"><i class="bi bi-check2-circle text-warning me-2"></i>Payroll & HR</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Why Kanpur Needs ERP -->
<section class="needs-sec py-5 bg-white">
    <div class="container">
        <div class="text-center mb-5">
            <h2 class="section-title">Why Businesses in Kanpur Need ERP</h2>
        </div>
        <div class="row g-4">
            <?php 
            $challenges = [
                ["title" => "Inventory Mismatch", "icon" => "bi-box-seam"],
                ["title" => "Manual Errors", "icon" => "bi-calculator"],
                ["title" => "Production Delays", "icon" => "bi-clock-history"],
                ["title" => "Billing Mistakes", "icon" => "bi-receipt"],
                ["title" => "Warehouse Issues", "icon" => "bi-building-up"],
                ["title" => "Multi-location Management", "icon" => "bi-shop"],
                ["title" => "GST Compliance", "icon" => "bi-file-earmark-text"],
                ["title" => "Limited Visibility", "icon" => "bi-eye"]
            ];
            foreach($challenges as $ch) {
                echo '<div class="col-lg-3 col-md-6">
                        <div class="p-4 text-center border rounded card-hover-effect h-100">
                            <i class="bi '.$ch['icon'].' fs-1 text-warning mb-3 d-block"></i>
                            <h5 class="fw-bold">'.$ch['title'].'</h5>
                            <p class="small text-muted mb-0">Automate operations and solve complex hurdles with centralized automation.</p>
                        </div>
                    </div>';
            }
            ?>
        </div>
    </div>
</section>

<!-- Manufacturing Section -->
<section class="mfg-sec py-5 bg-light">
    <div class="container">
        <div class="text-center mb-5">
            <h2 class="section-title">Best Manufacturing ERP Software in Kanpur</h2>
            <p class="lead">From leather and textiles to chemical and food processing industries.</p>
        </div>
        <div class="row g-4">
            <div class="col-md-4">
                <div class="p-4 bg-white rounded shadow-sm h-100 border-top border-warning border-4">
                    <h4 class="fw-bold mb-3">Leather & Textile</h4>
                    <ul class="list-unstyled">
                        <li class="mb-2"><i class="bi bi-check-lg text-warning me-2"></i>Track raw hides through stages</li>
                        <li class="mb-2"><i class="bi bi-check-lg text-warning me-2"></i>Manage complex SKUs (color, size)</li>
                        <li class="mb-2"><i class="bi bi-check-lg text-warning me-2"></i>Wastage & Yield optimization</li>
                        <li class="mb-2"><i class="bi bi-check-lg text-warning me-2"></i>Environmental compliance tracking</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-4">
                <div class="p-4 bg-white rounded shadow-sm h-100 border-top border-warning border-4">
                    <h4 class="fw-bold mb-3">Production Planning</h4>
                    <ul class="list-unstyled">
                        <li class="mb-2"><i class="bi bi-check-lg text-warning me-2"></i>Schedule tasks & allocate resources</li>
                        <li class="mb-2"><i class="bi bi-check-lg text-warning me-2"></i>Bill of Materials (BOM) tracking</li>
                        <li class="mb-2"><i class="bi bi-check-lg text-warning me-2"></i>Preventive machinery maintenance</li>
                        <li class="mb-2"><i class="bi bi-check-lg text-warning me-2"></i>Monitor work orders in real-time</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-4">
                <div class="p-4 bg-white rounded shadow-sm h-100 border-top border-warning border-4">
                    <h4 class="fw-bold mb-3">Quality & Inventory</h4>
                    <ul class="list-unstyled">
                        <li class="mb-2"><i class="bi bi-check-lg text-warning me-2"></i>Monitor inspections & defects</li>
                        <li class="mb-2"><i class="bi bi-check-lg text-warning me-2"></i>Batch production traceability</li>
                        <li class="mb-2"><i class="bi bi-check-lg text-warning me-2"></i>Real-time stock consumption</li>
                        <li class="mb-2"><i class="bi bi-check-lg text-warning me-2"></i>Warehouse visibility improvement</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Retail Section -->
<section class="retail-sec py-5">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <h2 class="fw-bold mb-4">Best Retail ERP Software in Kanpur</h2>
                <p class="lead">Dominating the UP market from General Ganj to Z Square Mall.</p>
                <div class="row g-3">
                    <div class="col-md-6">
                        <div class="p-3 border rounded">
                            <h6 class="fw-bold">Wholesale Portals</h6>
                            <p class="small text-muted mb-0">Manage massive dealer networks with tiered pricing and credit limits.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-3 border rounded">
                            <h6 class="fw-bold">High-Velocity POS</h6>
                            <p class="small text-muted mb-0">Lightning-fast billing for legendary retail crowds and peak rushes.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-3 border rounded">
                            <h6 class="fw-bold">Centralized Control</h6>
                            <p class="small text-muted mb-0">100% accurate view of Panki godowns and Civil Lines storefronts.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-3 border rounded">
                            <h6 class="fw-bold">Dynamic CRM</h6>
                            <p class="small text-muted mb-0">Targeted Holi and Diwali campaigns via WhatsApp and SMS.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 text-center">
                <div class="p-5 bg-warning text-dark rounded-3 shadow">
                    <h3 class="fw-bold mb-4">AI-Powered ERP & POS</h3>
                    <p>DigifySoft ERP integrates artificial intelligence into POS, inventory, and reporting to help Kanpur businesses:</p>
                    <ul class="list-unstyled text-start">
                        <li class="mb-3"><i class="bi bi-lightning-fill me-2"></i> Improve transaction speed</li>
                        <li class="mb-3"><i class="bi bi-cpu-fill me-2"></i> Predict inventory demand</li>
                        <li class="mb-3"><i class="bi bi-graph-up-arrow me-2"></i> Analyze business trends</li>
                        <li class="mb-3"><i class="bi bi-shield-check-fill me-2"></i> Reduce manual errors by 90%</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Advantages Grid -->
<section class="adv-sec py-5 bg-dark text-white">
    <div class="container">
        <div class="text-center mb-5">
            <h2 class="fw-bold">Efficiency You Can Bank On</h2>
            <p class="text-light">Pragmatic results for Kanpur’s result-oriented business owners.</p>
        </div>
        <div class="row g-4 text-center">
            <?php 
            $advs = [
                ["t" => "20% Material Wastage Reduction", "i" => "bi-graph-down-arrow"],
                ["t" => "35% Faster Order Cycles", "i" => "bi-lightning-charge"],
                ["t" => "100% Stock Audit Accuracy", "i" => "bi-check-all"],
                ["t" => "Mobile Real-Time Analytics", "i" => "bi-phone"],
                ["t" => "Cloud ERP Access Anywhere", "i" => "bi-cloud-check"],
                ["t" => "GST & E-Way Bill Ready", "i" => "bi-file-earmark-check"],
                ["t" => "Custom ERP Modules", "i" => "bi-sliders"],
                ["t" => "On-site Local Training", "i" => "bi-people"]
            ];
            foreach($advs as $a) {
                echo '<div class="col-lg-3 col-md-6">
                        <div class="p-3 border border-secondary rounded h-100">
                            <i class="bi '.$a['i'].' fs-2 text-warning mb-2 d-block"></i>
                            <h6 class="fw-bold">'.$a['t'].'</h6>
                        </div>
                    </div>';
            }
            ?>
        </div>
    </div>
</section>

<!-- FAQ Section -->
<section class="faq-sec py-5 bg-light">
    <div class="container">
        <div class="text-center mb-5">
            <h2 class="section-title">Kanpur ERP Software FAQs (2026)</h2>
            <p class="text-muted">Common questions about ERP implementation in Kanpur</p>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="accordion shadow-sm" id="cityFaq">
                    <?php 
                    $faqs = [
                        ["q" => "What is ERP software?", "a" => "ERP (Enterprise Resource Planning) software is a centralized business management system that helps businesses manage manufacturing, inventory, billing, accounting, CRM, and payroll from one dashboard. DigifySoft ERP helps automate workflows and improve productivity."],
                        ["q" => "Why do manufacturing businesses in Kanpur need ERP software?", "a" => "Manufacturing businesses require ERP to automate production planning, track raw materials, manage work orders, improve inventory accuracy, and reduce delays with real-time reports."],
                        ["q" => "Why do retail businesses in Kanpur need ERP software?", "a" => "Retail businesses use ERP to speed up billing, track inventory, generate GST invoices, manage customer records, and control multiple stores to simplify operations."],
                        ["q" => "What are the major features of DigifySoft ERP?", "a" => "Key features include Manufacturing ERP, Retail ERP, Inventory Management, POS Billing, CRM Integration, Warehouse Management, Payroll, and AI Analytics."],
                        ["q" => "How does manufacturing ERP software work?", "a" => "It integrates production planning, raw material tracking, inventory, and accounting into one centralized platform for factory efficiency."],
                        ["q" => "What is retail ERP software?", "a" => "Retail ERP software helps businesses manage POS billing, barcode scanning, inventory tracking, customer records, and loyalty programs."],
                        ["q" => "What is cloud ERP software?", "a" => "Cloud ERP is an internet-based solution allowing remote access with benefits like automatic backups and lower maintenance costs."],
                        ["q" => "What is POS billing software?", "a" => "POS software helps generate invoices quickly, process payments, scan barcodes, and reduce billing mistakes."],
                        ["q" => "Does ERP software support GST billing?", "a" => "Yes, it supports GST invoices, e-invoicing, tax reports, and purchase/sales reports for compliance."],
                        ["q" => "How does ERP improve inventory management?", "a" => "By tracking stock levels, managing warehouses, reducing shortages, and preventing overstocking with high accuracy."],
                        ["q" => "What is BOM in ERP?", "a" => "BOM (Bill of Materials) helps manufacturers track raw materials, manage product components, and calculate requirements for better planning."],
                        ["q" => "What is warehouse management ERP?", "a" => "Warehouse ERP helps businesses manage warehouses, track stock movement, and monitor inventory transfers for efficient dispatch."],
                        ["q" => "Can ERP software be customized?", "a" => "Yes, DigifySoft ERP can be customized with custom dashboards, workflow setup, and industry-specific modules."],
                        ["q" => "What is CRM in ERP software?", "a" => "CRM helps manage customer information, track leads, improve follow-ups, and increase customer retention."],
                        ["q" => "How does ERP help small businesses in Kanpur?", "a" => "It reduces manual work, improves inventory management, automates billing, and generates reports to increase productivity."],
                        ["q" => "What are the advantages of cloud ERP?", "a" => "Advantages include remote access, better security, lower maintenance costs, and automatic software updates."],
                        ["q" => "What reports can ERP software generate?", "a" => "It generates sales, inventory, GST, production, and financial statements like profit & loss reports."],
                        ["q" => "Why choose DigifySoft ERP in Kanpur?", "a" => "It offers a complete suite (Manufacturing, Retail, AI-POS, Cloud) designed for Indian manufacturers, retailers, and MSMEs."],
                        ["q" => "What business problems does ERP solve?", "a" => "It solves inventory mismatch, billing mistakes, production delays, manual accounting issues, and reporting problems."],
                        ["q" => "What is the future of ERP software in Kanpur?", "a" => "The future includes AI-powered automation, mobile ERP systems, cloud-based platforms, and smart analytics for real-time reporting."]
                    ];
                    foreach($faqs as $i => $faq) {
                        $id = "faq".$i;
                        echo '<div class="accordion-item border-0 mb-2 shadow-sm">
                                <h2 class="accordion-header" id="heading'.$id.'">
                                  <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapse'.$id.'" aria-expanded="false" aria-controls="collapse'.$id.'">
                                    '.($i+1).'. '.$faq['q'].'
                                  </button>
                                </h2>
                                <div id="collapse'.$id.'" class="accordion-collapse collapse" aria-labelledby="heading'.$id.'" data-bs-parent="#cityFaq">
                                  <div class="accordion-body text-muted">
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
        <h2 class="fw-bold mb-4">Ready to transform your Kanpur business?</h2>
        <p class="mb-4 lead fw-bold text-dark">Join hundreds of successful businesses in Kanpur using Digify ERP.</p>
        <a href="contact-us.php" class="btn btn-dark btn-lg px-5 py-3 fw-bold hvr-grow">Get Your Free Trial Today</a>
    </div>
</section>

<?php include(__DIR__ . '/../footer.php'); ?>

</body>
</html>
