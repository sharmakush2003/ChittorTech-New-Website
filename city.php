<?php 
include('db.php');
include('fetch_meta.php');

$cityName = isset($_GET['name']) ? htmlspecialchars($_GET['name']) : 'Your City';
$pageTitle = "#No.1 Top ERP Software in Manufacturing & Retail in $cityName | Digify Soft Solutions";

include('header.php'); 
?>

<!-- City Hero Section -->
<section class="inner-banner-sec">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-7">
                <div class="inner-banner-wrap">
                    <span class="badge bg-warning text-dark mb-3">#No.1 ERP Solution in <?php echo $cityName; ?></span>
                    <h1>Top ERP Software in Manufacturing & Retail in <span class="text-primary"><?php echo $cityName; ?></span></h1>
                    <p class="mt-3">Running a manufacturing or retail business in a fast-growing city like <?php echo $cityName; ?> requires more than spreadsheets and manual billing. Empower your business with India's most trusted Cloud-based ERP and CRM solutions.</p>
                    <div class="banner-btn mt-4">
                        <a href="contact-us.php" class="btn btn-primary btn-lg">Get Free Demo</a>
                        <a href="#features" class="btn btn-outline-primary btn-lg ms-3">Explore Features</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-5">
                <div class="inner-banner-img text-center">
                    <img src="assets/images/erp-banner.png" alt="ERP Software <?php echo $cityName; ?>" class="img-fluid">
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
                <p class="lead text-muted">DigifySoft ERP is a cloud-based and customizable ERP solution that helps businesses in <?php echo $cityName; ?> manage their entire operations from one dashboard. Designed specifically for Indian manufacturers, retailers, wholesalers, and SMEs, it supports everything from GST billing to production planning.</p>
            </div>
        </div>
        <div class="row mt-5 g-4">
            <?php 
            $modules = [
                "Manufacturing ERP", "Retail ERP", "POS Billing", "Accounting", 
                "Inventory Management", "CRM", "Payroll", "Warehouse Management", 
                "GST Billing", "Omnichannel Retail", "Reports & Analytics"
            ];
            foreach($modules as $module) {
                echo '<div class="col-md-3 col-6"><div class="module-card text-center p-3 border rounded shadow-sm h-100"><h6 class="mb-0">'.$module.'</h6></div></div>';
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
                <div class="p-4 bg-white rounded shadow-sm h-100 border-top border-primary border-4">
                    <h3 class="fw-bold mb-4">Why Manufacturing Businesses in <?php echo $cityName; ?> Need ERP</h3>
                    <p class="mb-4">Manufacturing industries in <?php echo $cityName; ?> deal with multiple operational challenges. Our ERP automates factory operations and improves productivity through:</p>
                    <ul class="list-unstyled">
                        <li class="mb-2"><i class="bi bi-check-circle-fill text-primary me-2"></i> Production planning & scheduling</li>
                        <li class="mb-2"><i class="bi bi-check-circle-fill text-primary me-2"></i> Raw material tracking & BOM</li>
                        <li class="mb-2"><i class="bi bi-check-circle-fill text-primary me-2"></i> Real-time production tracking</li>
                        <li class="mb-2"><i class="bi bi-check-circle-fill text-primary me-2"></i> Machine & Warehouse coordination</li>
                        <li class="mb-2"><i class="bi bi-check-circle-fill text-primary me-2"></i> GST compliance & Billing</li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="p-4 bg-white rounded shadow-sm h-100 border-top border-warning border-4">
                    <h3 class="fw-bold mb-4">Why Retail Businesses in <?php echo $cityName; ?> Need ERP</h3>
                    <p class="mb-4">Retail stores require fast operations and accurate data. Our retail ERP helps businesses manage invoicing, billing, and omnichannel operations from one system:</p>
                    <ul class="list-unstyled">
                        <li class="mb-2"><i class="bi bi-check-circle-fill text-warning me-2"></i> Fast POS & Barcode billing</li>
                        <li class="mb-2"><i class="bi bi-check-circle-fill text-warning me-2"></i> Multi-store & Stock management</li>
                        <li class="mb-2"><i class="bi bi-check-circle-fill text-warning me-2"></i> CRM & Loyalty programs</li>
                        <li class="mb-2"><i class="bi bi-check-circle-fill text-warning me-2"></i> Sales tracking & Analytics</li>
                        <li class="mb-2"><i class="bi bi-check-circle-fill text-warning me-2"></i> Inventory synchronization</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Features Section -->
<section id="features" class="features-sec py-5">
    <div class="container">
        <div class="text-center mb-5">
            <h2 class="fw-bold">Main Features of DigifySoft ERP</h2>
            <p class="text-muted">Powerful modules designed to scale your business in <?php echo $cityName; ?></p>
        </div>
        <div class="row g-4">
            <div class="col-md-4">
                <div class="feature-box p-4 border rounded shadow-sm h-100">
                    <div class="icon mb-3"><i class="bi bi-receipt fs-2 text-primary"></i></div>
                    <h4>Smart POS Billing</h4>
                    <p>Fast GST billing, barcode support, multi-payment modes, and touch POS integration to improve retail speed.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="feature-box p-4 border rounded shadow-sm h-100">
                    <div class="icon mb-3"><i class="bi bi-box-seam fs-2 text-primary"></i></div>
                    <h4>Inventory Management</h4>
                    <p>Real-time stock tracking, batch/expiry management, low stock alerts, and seamless warehouse transfers.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="feature-box p-4 border rounded shadow-sm h-100">
                    <div class="icon mb-3"><i class="bi bi-gear-wide-connected fs-2 text-primary"></i></div>
                    <h4>Manufacturing ERP</h4>
                    <p>BOM planning, work-in-progress tracking, quality control, and cost management for efficient production.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="feature-box p-4 border rounded shadow-sm h-100">
                    <div class="icon mb-3"><i class="bi bi-people fs-2 text-primary"></i></div>
                    <h4>CRM & Loyalty</h4>
                    <p>Lead management, discount coupons, WhatsApp/SMS notifications, and customer analytics to improve retention.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="feature-box p-4 border rounded shadow-sm h-100">
                    <div class="icon mb-3"><i class="bi bi-calculator fs-2 text-primary"></i></div>
                    <h4>Accounting & GST</h4>
                    <p>GST-ready billing, financial reports, profit & loss, balance sheets, and E-invoice integration.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="feature-box p-4 border rounded shadow-sm h-100">
                    <div class="icon mb-3"><i class="bi bi-building fs-2 text-primary"></i></div>
                    <h4>Warehouse Management</h4>
                    <p>Rack/bin management, physical stock verification, and capacity monitoring to reduce inventory loss.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Workflow Section -->
<section class="workflow-sec py-5 bg-dark text-white">
    <div class="container">
        <div class="text-center mb-5">
            <h2 class="fw-bold">How DigifySoft ERP Works</h2>
            <p class="text-light">A seamless workflow to keep your <?php echo $cityName; ?> business connected</p>
        </div>
        <div class="row text-center g-4">
            <div class="col-md-2 col-6">
                <div class="step">
                    <div class="fs-1 mb-2">01</div>
                    <h6>Sales Order Generated</h6>
                </div>
            </div>
            <div class="col-md-2 col-6">
                <div class="step">
                    <div class="fs-1 mb-2">02</div>
                    <h6>Inventory Updates</h6>
                </div>
            </div>
            <div class="col-md-2 col-6">
                <div class="step">
                    <div class="fs-1 mb-2">03</div>
                    <h6>Billing Synchronize</h6>
                </div>
            </div>
            <div class="col-md-2 col-6">
                <div class="step">
                    <div class="fs-1 mb-2">04</div>
                    <h6>Warehouse Updates</h6>
                </div>
            </div>
            <div class="col-md-2 col-6">
                <div class="step">
                    <div class="fs-1 mb-2">05</div>
                    <h6>Real-time Reports</h6>
                </div>
            </div>
            <div class="col-md-2 col-6">
                <div class="step">
                    <div class="fs-1 mb-2">06</div>
                    <h6>Live Insights</h6>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- FAQ Section -->
<section class="faq-sec py-5">
    <div class="container">
        <div class="text-center mb-5">
            <h2 class="fw-bold">Top ERP Software FAQs for <?php echo $cityName; ?></h2>
            <p class="text-muted">Everything you need to know about our ERP solutions</p>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-9">
                <div class="accordion shadow-sm" id="cityFaq">
                    <?php 
                    $faqs = [
                        ["q" => "What is ERP software?", "a" => "ERP (Enterprise Resource Planning) software is a business management system that helps companies manage inventory, billing, accounting, manufacturing, CRM, payroll, warehouse, and sales operations from one centralized dashboard."],
                        ["q" => "Why do manufacturing companies need ERP software?", "a" => "Manufacturing companies need ERP software to manage production planning, track raw materials, control inventory, monitor production, reduce manual errors, and improve efficiency."],
                        ["q" => "Why is ERP important for retail businesses?", "a" => "Retail businesses use ERP software for POS billing, barcode scanning, inventory tracking, multi-store management, customer loyalty programs, and GST reports."],
                        ["q" => "What are the main features of DigifySoft ERP?", "a" => "According to the official website, it includes Manufacturing ERP, Retail ERP, POS Billing, Inventory Management, CRM, Accounting, GST Billing, Payroll, and an Analytics Dashboard."],
                        ["q" => "How does ERP software work?", "a" => "ERP software connects all departments into one system. When a sales order is created, inventory updates automatically, billing is generated, and accounts update instantly in real-time."],
                        ["q" => "What industries can use ERP software?", "a" => "It is useful for manufacturing, retail, garments, FMCG, furniture, electronics, distributors, wholesalers, supermarkets, and pharmaceutical businesses."],
                        ["q" => "What is Manufacturing ERP?", "a" => "Manufacturing ERP is software designed to manage production planning, BOM, work-in-progress tracking, raw material management, and machine scheduling."],
                        ["q" => "What is Retail ERP?", "a" => "Retail ERP helps retailers manage POS billing, inventory, customer records, promotions, loyalty programs, and multi-store operations."],
                        ["q" => "What is cloud ERP software?", "a" => "Cloud ERP is an online system that allows businesses to access data from anywhere using the internet, offering benefits like remote access and automatic backups."],
                        ["q" => "What are the advantages of ERP software?", "a" => "Benefits include better business control, faster billing, reduced manual work, improved productivity, real-time reports, and inventory accuracy."],
                        ["q" => "Can ERP software be customized?", "a" => "Yes, according to Digify Soft Solutions, ERP software can be customized based on specific business requirements, including reports and workflows."],
                        ["q" => "How does ERP improve inventory management?", "a" => "ERP helps track stock in real-time, manage warehouses, reduce shortages, prevent overstocking, and generate stock alerts."],
                        ["q" => "What is POS billing in ERP?", "a" => "POS (Point of Sale) billing helps retailers create quick invoices, scan barcodes, accept multiple payment modes, and track sales instantly."],
                        ["q" => "Does ERP software support GST billing?", "a" => "Yes, modern ERP software supports GST invoices, e-invoicing, tax reports, and purchase/sales GST reports."],
                        ["q" => "How does ERP help in manufacturing production?", "a" => "ERP improves manufacturing by automating production planning, tracking machine usage, and monitoring work orders to reduce delays."],
                        ["q" => "What is warehouse management in ERP?", "a" => "Warehouse management helps manage multiple warehouses, track stock transfers, monitor inward/outward stock, and improve visibility."],
                        ["q" => "Is ERP software suitable for small businesses?", "a" => "Yes, ERP software is highly useful for small businesses and startups as cloud solutions are affordable and scalable."],
                        ["q" => "How does ERP improve customer management?", "a" => "CRM modules help track customers, manage leads, improve follow-ups, and send offers to increase repeat sales."],
                        ["q" => "What reports can ERP software generate?", "a" => "It generates sales, profit, inventory, production, GST, and employee reports, along with financial statements."],
                        ["q" => "Why choose DigifySoft ERP?", "a" => "Choosing DigifySoft provides affordable solutions, GST-ready billing, multi-store management, and custom development with real-time analytics."],
                        ["q" => "Can ERP software manage multiple branches?", "a" => "Yes, ERP software supports multi-branch businesses with centralized reporting and multi-warehouse inventory control."],
                        ["q" => "How secure is cloud ERP software?", "a" => "Cloud ERP systems provide data backups, user access controls, secure servers, and encrypted data storage with real-time monitoring."],
                        ["q" => "How long does ERP implementation take?", "a" => "Implementation depends on business size and modules, but small businesses can often implement it within a few weeks."],
                        ["q" => "What problems does ERP software solve?", "a" => "It solves manual accounting errors, inventory mismatches, production delays, slow billing, and data duplication."],
                        ["q" => "What is the future of ERP software in India?", "a" => "The future includes AI-powered ERP, mobile accessibility, automation, and industry-specific smart analytics."]
                    ];
                    foreach($faqs as $i => $faq) {
                        $id = "faq".$i;
                        echo '<div class="accordion-item">
                                <h2 class="accordion-header" id="heading'.$id.'">
                                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse'.$id.'" aria-expanded="false" aria-controls="collapse'.$id.'">
                                    '.($i+1).'. '.$faq['q'].'
                                  </button>
                                </h2>
                                <div id="collapse'.$id.'" class="accordion-collapse collapse" aria-labelledby="heading'.$id.'" data-bs-parent="#cityFaq">
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
<section class="cta-section py-5 bg-primary text-white text-center">
    <div class="container">
        <h3 class="mb-4">Ready to transform your business in <?php echo $cityName; ?>?</h3>
        <p class="mb-4 lead">Join hundreds of successful businesses using Digify ERP.</p>
        <a href="contact-us.php" class="btn btn-warning btn-lg px-5 fw-bold">Contact Us Today</a>
    </div>
</section>

<?php include('footer.php'); ?>

