<?php
  include 'db.php';
  include 'fetch_meta.php';

  $pageMeta = getPageMeta('logistics');
  $pageTitle = $pageMeta['page_title'] ?? 'Logistics & Warehouse Management Software | Digify Soft Solutions';
  $pageDescription = $pageMeta['page_description'] ?? 'Optimize inventory, track expiry dates, and manage multi-location warehouse operations with Digify Soft Solutions Logistics Management Software.';
  $pageKeywords = $pageMeta['page_keywords'] ?? 'logistics management software, warehouse inventory tracking, rack and bin system, expiry date tracker, multi-store stock sync';

  include 'top.php';
  include 'header.php';
?>

<!-- Hero Section Overhaul -->
<section class="bridal-store-sec pt-60 pb-60">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="bridal-store">
                    <h1>Logistics & Warehouse Management <span>Software for Modern Retail</span></h1>
                    <p>Optimize stock levels, control multi-location transfers, and streamline warehouse fulfillment with a robust centralized logistics platform.</p>
                    <div class="btn-wrap">
                        <a href="contact-us.php" class="schedule-btn">Schedule Free Demo</a>
                        <a href="#features" class="schedule-btn">Explore Features</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Challenge & Solutions Section -->
<section class="why-choose-sec">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6">
                <div class="expertise-img text-start">
                    <figure>
                        <img src="assets/images/Centralized-Inventory.png" class="img-fluid" alt="Centralized Inventory Management" style="max-height: 480px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
                    </figure>
                </div>
            </div>
            <div class="col-md-6">
                <div class="expertise-wrap pro-list">
                    <h5>Common Logistics Challenges We Solve</h5>
                    <ul>
                        <li>
                            <strong>Disorganized Storage & Shelf Chaos</strong><br>
                            Misplaced inventory increases pick times and slows order fulfillment. Digify's Rack & Bin system maps precise product coordinates.
                        </li>
                        <li>
                            <strong>Multi-Warehouse & Branch Invisibility</strong><br>
                            Managing stocks across branches manually leads to inconsistencies. Consolidate multi-hub stock records into a single live dashboard.
                        </li>
                        <li>
                            <strong>Product Waste & Expiry Overlooks</strong><br>
                            Unmonitored batch lifespans result in wasted inventory. Our system tracks batch dates and sends auto-alerts for items nearing expiry.
                        </li>
                        <li>
                            <strong>Delayed Orders & Inefficient Picking</strong><br>
                            Inaccurate pick routes exhaust cashiers and pickers. Digify generates optimized picklists to guide warehouse staff on the fastest paths.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Second Challenge/Solution Block (Alternating style) -->
<section class="why-choose-sec" style="background:#ffffff !important;">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6 order-md-2">
                <div class="expertise-img text-end">
                    <figure>
                        <img src="assets/images/Centralized-Multilocation.png" class="img-fluid" alt="Centralized Multi-location Sync" style="max-height: 480px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
                    </figure>
                </div>
            </div>
            <div class="col-md-6 order-md-1">
                <div class="expertise-wrap pro-list">
                    <h5>Digify Logistics – Scaled for Growth</h5>
                    <ul>
                        <li>
                            <strong>Automated Stock Reordering</strong><br>
                            Establish reorder limits for separate channels. Digify automatically notifies procurement before stock levels reach critical bounds.
                        </li>
                        <li>
                            <strong>Integrated Stock Reconciliation</strong><br>
                            Frictionless audits and adjustments. Keep real-time counts synced with cash registers, minimizing data mismatches.
                        </li>
                        <li>
                            <strong>Secure Multi-user Hierarchy</strong><br>
                            Assign custom permissions for staff roles (picker, stock controller, admin). Limit sensitive financial info to designated executives.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Core Features Card Grid Section -->
<section id="features" class="industry new-cards accounting-sec">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="heading-wrap text-center mb-5">
                    <h2>Advanced Logistics <span>Management Features</span></h2>
                    <p class="text-muted">Optimize storage density, dispatch velocities, and tax compliance across all locations.</p>
                </div>
                <div class="desktop-industries">
                    <div class="row justify-content-center">
                        <div class="col-md-3 col-sm-6">
                            <div class="boxes mb-4 flip-container">
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-back">
                                            <img src="assets/images/fast1.png" alt="Rack & Bin" class="img-fluid mb-3">
                                            <h4>Rack & Bin System</h4>
                                            <p>Map items to exact shelves, compartments, and aisles for rapid extraction.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="boxes mb-4 flip-container">
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-back">
                                            <img src="assets/images/fast2.png" alt="Expiry Tracking" class="img-fluid mb-3">
                                            <h4>Expiry Monitoring</h4>
                                            <p>Track batch numbers and receive proactive alerts to prevent expired write-offs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="boxes mb-4 flip-container">
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-back">
                                            <img src="assets/images/fast3.png" alt="Access Control" class="img-fluid mb-3">
                                            <h4>Role Accountability</h4>
                                            <p>Limit data access permissions for pickers, stock managers, and cashiers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="boxes mb-4 flip-container">
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-back">
                                            <img src="assets/images/fast4.png" alt="Rack Transfers" class="img-fluid mb-3">
                                            <h4>Internal Transfers</h4>
                                            <p>Track stock movements between racks and stores with seamless logs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="boxes mb-4 flip-container">
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-back">
                                            <img src="assets/images/fast5.png" alt="Reorder Alerts" class="img-fluid mb-3">
                                            <h4>Reorder Alerts</h4>
                                            <p>Receive notifications when warehouse supplies cross low-limit values.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="boxes mb-4 flip-container">
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-back">
                                            <img src="assets/images/fast10.png" alt="GST Transfers" class="img-fluid mb-3">
                                            <h4>GST Compliance</h4>
                                            <p>Generate compliant bills and stock declarations for inter-state transfers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="boxes mb-4 flip-container">
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-back">
                                            <img src="assets/images/fast13.png" alt="Auto Picklist" class="img-fluid mb-3">
                                            <h4>Auto Picklists</h4>
                                            <p>Generate optimized order picklists mapped to shelf location indices.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="boxes mb-4 flip-container">
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-back">
                                            <img src="assets/images/fast17.png" alt="Multi-Store Control" class="img-fluid mb-3">
                                            <h4>Central Console</h4>
                                            <p>Track transfers, stock values, and movements across all hubs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Space Management Features -->
<section class="complete-seo-service">
   <div class="container my-5">
      <div class="heading-wrap text-center">
         <h2>Structured Warehouse Capacity <span>Management Tools</span></h2>
         <p>Maximize layout efficiency, utilize raw capacity parameters, and prevent structural overloading.</p>
      </div>
      <div class="row mt-4">
         <!-- Rack & Bin Management -->
         <div class="col-md-3 col-sm-6 mb-4">
            <div class="card service-box text-center p-4" style="height:100%; border-radius: 12px; border:1px solid #e2e8f0; background: #fff;">
               <figure><img src="assets/images/rk1.png" class="img-fluid" alt="Rack Location" style="max-height: 60px;"></figure>
               <h4 class="mt-3">Rack Planning</h4>
               <p class="text-muted">Log shelf dimensions, and assign dynamic Rack IDs to allocate appropriate stock sizes.</p>
            </div>
         </div>
         <!-- Bin Capacity -->
         <div class="col-md-3 col-sm-6 mb-4">
            <div class="card service-box text-center p-4" style="height:100%; border-radius: 12px; border:1px solid #e2e8f0; background: #fff;">
               <figure><img src="assets/images/rk2.png" class="img-fluid" alt="Capacity Control" style="max-height: 60px;"></figure>
               <h4 class="mt-3">Capacity Limits</h4>
               <p class="text-muted">Define stock count thresholds for bins to prevent overload wear and inventory damage.</p>
            </div>
         </div>
         <!-- Multi-Hub control -->
         <div class="col-md-3 col-sm-6 mb-4">
            <div class="card service-box text-center p-4" style="height:100%; border-radius: 12px; border:1px solid #e2e8f0; background: #fff;">
               <figure><img src="assets/images/rk3.png" class="img-fluid" alt="Multi-Hub Control" style="max-height: 60px;"></figure>
               <h4 class="mt-3">Multi-Hub Sync</h4>
               <p class="text-muted">Transfer stocks between multi-tier warehouses with auto-logged shipment manifests.</p>
            </div>
         </div>
         <!-- Picklist Auto-generation -->
         <div class="col-md-3 col-sm-6 mb-4">
            <div class="card service-box text-center p-4" style="height:100%; border-radius: 12px; border:1px solid #e2e8f0; background: #fff;">
               <figure><img src="assets/images/rk4.png" class="img-fluid" alt="Picklist" style="max-height: 60px;"></figure>
               <h4 class="mt-3">Aisle Navigation</h4>
               <p class="text-muted">Calculate optimal routes to reduce warehouse walk times by grouping neighboring SKU bins.</p>
            </div>
         </div>
      </div>
   </div>
</section>

<!-- Comparison Table -->
<section class="features-table-main pt-60 pb-60 d-none d-md-block">
   <div class="container">
      <div class="row">
         <div class="col-12">
            <div class="section-title text-center mb-5">
               <h2>Traditional Warehousing vs. Digify Soft Solutions</h2>
               <p class="text-muted">Compare the performance difference between traditional systems and Digify's automated cloud logistics solution.</p>
            </div>
         </div>
      </div>
      <div class="row">
         <div class="col-12">
            <div class="comp-table-responsive">
                 <table class="comp-table mb-0">
                     <thead>
                         <tr>
                             <th>Feature Parameter</th>
                             <th>Traditional Warehousing</th>
                             <th style="color:var(--primary-color);">Digify Soft Solutions</th>
                         </tr>
                     </thead>
                     <tbody>
                         <tr>
                             <td><strong>Location Accuracy</strong></td>
                             <td>Aisles are noted broadly. Items frequently get misplaced.</td>
                             <td>Specific Rack IDs and Bin codes for exact SKU mapping.</td>
                         </tr>
                         <tr>
                             <td><strong>Space Optimization</strong></td>
                             <td>Ad-hoc stacking, leading to underutilized vertical capacity.</td>
                             <td>Automated capacity limit controls and height planning.</td>
                         </tr>
                         <tr>
                             <td><strong>Internal Transfers</strong></td>
                             <td>Manual tracking with high transcription error rates.</td>
                             <td>1-click mobile barcode scans for instant rack-to-rack allocation.</td>
                         </tr>
                         <tr>
                             <td><strong>Inventory Visibility</strong></td>
                             <td>Delayed syncing, leading to over-selling or shelf stockouts.</td>
                             <td>Real-time live multi-hub dashboard updates instantly upon sale.</td>
                         </tr>
                         <tr>
                             <td><strong>Stock Reordering</strong></td>
                             <td>Periodic manual audits which often delay vendor purchase orders.</td>
                             <td>Automatic low-stock threshold triggers and email notifications.</td>
                         </tr>
                         <tr>
                             <td><strong>Picking Route Speed</strong></td>
                             <td>Staff walk aimlessly search-matching items using printed orders.</td>
                             <td>Optimized, grouped SKU picklists matching natural aisle steps.</td>
                         </tr>
                     </tbody>
                 </table>
            </div>
         </div>
      </div>
   </div>
</section>

<!-- Call to Action Section -->
<section class="bridal-store-sec pb-60" style="border-top: 1px solid #e2e8f0; border-bottom: none; background: #fff !important;">
   <div class="container">
      <div class="row">
         <div class="col-md-12">
            <div class="bridal-store text-center">
               <h2>Ready to Make Your Logistics Super-Efficient?</h2>
               <p>Schedule a detailed walk-through with our product experts and see how Digify can streamline your supply chain.</p>
               <button onclick="window.location.href='contact-us.php'" class="cta-button" style="border-radius: 50px; padding: 14px 32px; font-weight:600; background: var(--primary-gradient); color:#fff; border:none; box-shadow: 0 4px 15px rgba(12, 166, 120, 0.25);">Schedule a Free Demo</button>
            </div>
         </div>
      </div>
   </div>
</section>

<!-- Integration Partners -->
<section class="partners-sec">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-12">
                <div class="heading-wrap text-center mb-5">
                    <h2>Our Integration <span>Partners</span></h2>
                    <p class="text-muted">Digify Soft Solutions integrates seamlessly with standard business, payment, and logistics platforms to keep your operations unified.</p>
                </div>
            </div>
        </div>
        <div class="integration-sec">
            <div class="container">
                <div class="logo-grid" style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
                    <div class="logo-box p-3" style="background:#fff; border-radius:8px; border:1px solid #e2e8f0; display:flex; align-items:center; justify-content:center; width:150px; height:80px;">
                        <img src="assets/images/shiprocket.webp" class="img-fluid" alt="Shiprocket" style="max-height: 40px;">
                    </div>
                    <div class="logo-box p-3" style="background:#fff; border-radius:8px; border:1px solid #e2e8f0; display:flex; align-items:center; justify-content:center; width:150px; height:80px;">
                        <img src="assets/images/e-invoice.webp" class="img-fluid" alt="E-Invoice" style="max-height: 40px;">
                    </div>
                    <div class="logo-box p-3" style="background:#fff; border-radius:8px; border:1px solid #e2e8f0; display:flex; align-items:center; justify-content:center; width:150px; height:80px;">
                        <img src="assets/images/eway-bill.webp" class="img-fluid" alt="E-Way Bill" style="max-height: 40px;">
                    </div>
                    <div class="logo-box p-3" style="background:#fff; border-radius:8px; border:1px solid #e2e8f0; display:flex; align-items:center; justify-content:center; width:150px; height:80px;">
                        <img src="assets/images/shopify.webp" class="img-fluid" alt="Shopify" style="max-height: 40px;">
                    </div>
                    <div class="logo-box p-3" style="background:#fff; border-radius:8px; border:1px solid #e2e8f0; display:flex; align-items:center; justify-content:center; width:150px; height:80px;">
                        <img src="assets/images/woocommerce.webp" class="img-fluid" alt="Woocommerce" style="max-height: 40px;">
                    </div>
                </div>
            </div>
        </div>
</section>

<!-- FAQ section -->
<section class="faq-template pb-60">
   <div class="container">
      <div class="heading-wrap text-center mb-5">
         <h2>Frequently Asked <span>Questions</span></h2>
         <p class="text-muted">Answers to common logistics and storage management questions.</p>
      </div>
      <div class="row">
         <div class="col-md-12">
            <div class="faq-section">
               <div class="accordion" id="faqAccordion">
                  <div class="accordion-item" style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 12px; overflow: hidden;">
                     <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style="background:#fff; color:#0f172a; font-weight:600;">
                        How does Rack & Bin management improve picking efficiency?
                        </button>
                     </h2>
                     <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                        <div class="accordion-body text-muted" style="background:#f8fafc;">
                           Instead of cashiers or pickers walking aimlessly searching matching boxes, every SKU is registered with specific Rack IDs and Bin codes. When orders are processed, picklists are generated with items grouped by location order, streamlining routes.
                        </div>
                     </div>
                  </div>
                  <div class="accordion-item" style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 12px; overflow: hidden;">
                     <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style="background:#fff; color:#0f172a; font-weight:600;">
                        Can I track batch expiry thresholds?
                        </button>
                     </h2>
                     <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                        <div class="accordion-body text-muted" style="background:#f8fafc;">
                           Yes. For businesses handling groceries, pharmaceuticals, or perishable items, Digify logs specific batch numbers and expiration metrics. It triggers auto-alerts to notify procurement teams before stock expiries occur.
                        </div>
                     </div>
                  </div>
                  <div class="accordion-item" style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 12px; overflow: hidden;">
                     <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style="background:#fff; color:#0f172a; font-weight:600;">
                        Does the system support inter-branch stock transfers?
                        </button>
                     </h2>
                     <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                        <div class="accordion-body text-muted" style="background:#f8fafc;">
                           Absolutely. If you manage multiple store outlets or secondary storage depots, you can transfer product stock logs with a single mobile barcode scan. The system automatically updates counts on both terminals and logs inter-branch GST manifests.
                        </div>
                     </div>
                  </div>
                  <div class="accordion-item" style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 12px; overflow: hidden;">
                     <h2 class="accordion-header" id="headingFour">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style="background:#fff; color:#0f172a; font-weight:600;">
                        How secure is multi-user access?
                        </button>
                     </h2>
                     <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                        <div class="accordion-body text-muted" style="background:#f8fafc;">
                           Super secure. The platform allows setting up distinct role profiles (e.g. stock picker, manager, admin) and restricts access to specific areas (such as invoicing settings, inventory valuations, or financial summaries) depending on credentials.
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>

<!-- Footer -->
<?php include 'footer.php'; ?>