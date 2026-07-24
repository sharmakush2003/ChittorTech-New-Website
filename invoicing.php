<?php
  include 'db.php';
  include 'fetch_meta.php';

  $pageMeta = getPageMeta('invoicing');
  $pageTitle = $pageMeta['page_title'] ?? 'Smart GST-Invoicing Software | Digify Soft Solutions';
  $pageDescription = $pageMeta['page_description'] ?? 'Simplify billing with the best GST-compliant invoicing software by Digify Soft Solutions. Built for retail, wholesale, and multi-store businesses.';
  $pageKeywords = $pageMeta['page_keywords'] ?? 'GST invoicing software, retail billing software, billing POS, cloud invoicing, WhatsApp invoices';

  include 'top.php';
  include 'header.php';
?>

<!-- Hero Section Overhaul -->
<section class="bridal-store-sec pt-60 pb-60">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="bridal-store">
                    <h1>India’s Smartest GST-Invoicing Software for <span>Modern Retail</span></h1>
                    <p>Scale your retail, wholesale, or distribution business with lightning-fast, GST-compliant invoicing, real-time inventory sync, and instant digital delivery via WhatsApp and Email.</p>
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
            <div class="col-md-6 order-md-2">
                <div class="expertise-img text-end">
                    <figure>
                        <img src="assets/images/Simple-Billing.png" class="img-fluid" alt="Digify Simple Billing Illustration" style="max-height: 480px;">
                    </figure>
                </div>
            </div>
            <div class="col-md-6 order-md-1">
                <div class="heading-wrap text-start mobile-a pro-list">
                    <h2>Addressing Every Billing Challenge with a <span>Powerful Invoicing Engine</span></h2>
                </div>
                <div class="expertise-wrap pro-list">
                    <h5>Common Invoicing Challenges We Solve</h5>
                    <ul>
                        <li>
                            <strong>Long Checkout Queues & Counter Friction</strong><br>
                            Traditional billing methods slow down checkouts during peak hours, frustrating customers. Digify's barcode-enabled invoicing processes bills in milliseconds.
                        </li>
                        <li>
                            <strong>Complex Tax Calculations & GST Compliance</strong><br>
                            Manual calculation of SGST, CGST, IGST, and HSN codes often leads to errors. Digify automates HSN mapping and tax splits, ensuring 100% compliance.
                        </li>
                        <li>
                            <strong>Disconnected Inventory & Stockouts</strong><br>
                            Selling items without real-time stock reduction causes discrepancies. Our invoicing module immediately updates inventory levels across all store counters.
                        </li>
                        <li>
                            <strong>High Printing Costs & Paper Waste</strong><br>
                            Printing physical receipts adds recurring overhead. Digify offers instant digital invoices sent directly to customer WhatsApp numbers or emails.
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
                    <h2>Simple & Powerful POS <span>Billing Features</span></h2>
                    <p class="text-muted">High-speed invoicing tools designed for retail, wholesale, and multi-store operations.</p>
                </div>
                <div class="desktop-industries">
                    <div class="row justify-content-center">
                        <div class="col-md-3 col-sm-6">
                            <div class="boxes mb-4 flip-container">
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-back">
                                            <img src="assets/images/fast1.png" alt="Checkout" class="img-fluid mb-3">
                                            <h4>Quick Checkout</h4>
                                            <p>Scan barcodes and checkout customers in seconds without delay.</p>
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
                                            <img src="assets/images/fast2.png" alt="GST" class="img-fluid mb-3">
                                            <h4>GST Automated</h4>
                                            <p>Automatically calculate IGST/CGST/SGST and map correct HSN codes.</p>
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
                                            <img src="assets/images/fast3.png" alt="Returns" class="img-fluid mb-3">
                                            <h4>Easy Returns</h4>
                                            <p>Process product exchanges and generate credit notes instantly.</p>
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
                                            <img src="assets/images/fast4.png" alt="Products" class="img-fluid mb-3">
                                            <h4>Custom Templates</h4>
                                            <p>Choose from multiple invoice designs to match your branding.</p>
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
                                            <img src="assets/images/fast5.png" alt="Payments" class="img-fluid mb-3">
                                            <h4>Multi-Payment</h4>
                                            <p>Accept cards, UPI QR scans, wallets, and store credit tags.</p>
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
                                            <img src="assets/images/fast7.png" alt="WhatsApp" class="img-fluid mb-3">
                                            <h4>WhatsApp Delivery</h4>
                                            <p>Auto-deliver PDF invoices to customer phone numbers instantly.</p>
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
                                            <img src="assets/images/fast10.png" alt="Reports" class="img-fluid mb-3">
                                            <h4>Sales Reports</h4>
                                            <p>Track real-time billing performance, peaks, and cash registers.</p>
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
                                            <img src="assets/images/fast13.png" alt="Loyalty" class="img-fluid mb-3">
                                            <h4>Loyalty Rewards</h4>
                                            <p>Accumulate and redeem points automatically at checkout.</p>
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

<!-- Automated Invoicing Tools -->
<section class="complete-seo-service">
   <div class="container my-5">
      <div class="heading-wrap text-center">
         <h2>Automated Billing with <span>Advanced POS Integration</span></h2>
         <p>Expand operational limits with advanced modules for payments, offline checkouts, and image selection.</p>
      </div>
      <div class="row mt-4">
         <!-- Digi-Pay -->
         <div class="col-md-3 col-sm-6 mb-4">
            <div class="card service-box text-center p-4" style="height:100%; border-radius: 12px; border:1px solid #e2e8f0; background: #fff;">
               <figure><img src="assets/images/auto1.png" class="img-fluid" alt="Digi-Pay" style="max-height: 60px;"></figure>
               <h4 class="mt-3">Digi-Pay</h4>
               <p class="text-muted">Initiate UPI payment and instantly display a dynamic, order-linked QR code on a customer-facing screen.</p>
            </div>
         </div>
         <!-- V-Checkout -->
         <div class="col-md-3 col-sm-6 mb-4">
            <div class="card service-box text-center p-4" style="height:100%; border-radius: 12px; border:1px solid #e2e8f0; background: #fff;">
               <figure><img src="assets/images/auto2.png" class="img-fluid" alt="Digi-Checkout" style="max-height: 60px;"></figure>
               <h4 class="mt-3">Digi-Checkout</h4>
               <p class="text-muted">Enable customers to scan product barcodes with their smartphones, pay online, and bypass billing counter lines.</p>
            </div>
         </div>
         <!-- Hybrid POS -->
         <div class="col-md-3 col-sm-6 mb-4">
            <div class="card service-box text-center p-4" style="height:100%; border-radius: 12px; border:1px solid #e2e8f0; background: #fff;">
               <figure><img src="assets/images/auto3.png" class="img-fluid" alt="Hybrid POS" style="max-height: 60px;"></figure>
               <h4 class="mt-3">Hybrid POS</h4>
               <p class="text-muted">Generate invoices offline during network outages. Data automatically syncs with the cloud once back online.</p>
            </div>
         </div>
         <!-- Image-Based POS -->
         <div class="col-md-3 col-sm-6 mb-4">
            <div class="card service-box text-center p-4" style="height:100%; border-radius: 12px; border:1px solid #e2e8f0; background: #fff;">
               <figure><img src="assets/images/auto4.png" class="img-fluid" alt="Image-Based POS" style="max-height: 60px;"></figure>
               <h4 class="mt-3">Image-Based POS</h4>
               <p class="text-muted">Visual grid layout for products without barcodes. Cashiers can tap images for rapid billing on touch terminals.</p>
            </div>
         </div>
      </div>
   </div>
</section>

<!-- How it works: Step-by-step Process -->
<section class="step-process-tab-main p-0">
   <div class="container">
      <div class="row">
         <div class="col-12">
            <div class="section-title text-center mb-5">
               <h2>Three-Step Billing Process</h2>
               <p class="text-muted">Invoicing has never been faster or simpler. Train billing operators in less than 5 minutes.</p>
            </div>
         </div>
         <div class="col-12">
            <div class="step-box-wrapper" style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
               <div class="step-box text-center p-4" style="flex: 1; min-width: 250px; background:#fff; border-radius:12px; box-shadow: 0 4px 15px rgba(0,0,0,0.02); border:1px solid #e2e8f0;">
                  <img loading="lazy" src="assets/images/scan.gif" alt="scan" class="img-fluid mb-3" style="max-height: 100px;">
                  <h5>Step 1</h5>
                  <p class="text-muted">Scan the item barcode to auto-populate GST and discount parameters.</p>
               </div>
               <div class="step-box text-center p-4" style="flex: 1; min-width: 250px; background:#fff; border-radius:12px; box-shadow: 0 4px 15px rgba(0,0,0,0.02); border:1px solid #e2e8f0;">
                  <img loading="lazy" src="assets/images/payment-method.gif" alt="payment-method" class="img-fluid mb-3" style="max-height: 100px;">
                  <h5>Step 2</h5>
                  <p class="text-muted">Select payment mode (Cash, Card, or Instant QR) and accept payment.</p>
               </div>
               <div class="step-box text-center p-4" style="flex: 1; min-width: 250px; background:#fff; border-radius:12px; box-shadow: 0 4px 15px rgba(0,0,0,0.02); border:1px solid #e2e8f0;">
                  <img loading="lazy" src="assets/images/whatapp.gif" alt="print" class="img-fluid mb-3" style="max-height: 100px;">
                  <h5>Step 3</h5>
                  <p class="text-muted">Invoice auto-delivers to customer WhatsApp & Email while printing.</p>
               </div>
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
               <h2>Traditional Billing vs. Digify Soft Solutions</h2>
               <p class="text-muted">Compare the performance difference between traditional systems and Digify's automated cloud invoicing engine.</p>
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
                             <th>Traditional Billing Systems</th>
                             <th style="color:var(--primary-color);">Digify Soft Solutions</th>
                         </tr>
                     </thead>
                     <tbody>
                         <tr>
                             <td><strong>Invoice Scaling</strong></td>
                             <td>Limited numbers per register, slow loading with large invoices.</td>
                             <td>Unlimited invoices, scalable across distributed chains.</td>
                         </tr>
                         <tr>
                             <td><strong>Hybrid Network Sync</strong></td>
                             <td>Online or offline only. Risk of data conflict on reconnect.</td>
                             <td>Fully hybrid offline billing with automated cloud reconciliation.</td>
                         </tr>
                         <tr>
                             <td><strong>Payment Methods</strong></td>
                             <td>Cash and credit card terminals only. Manual registers.</td>
                             <td>Integrated UPI split payment, dynamic QR scans, cards, and cash ledger.</td>
                         </tr>
                         <tr>
                             <td><strong>Digital Receipts</strong></td>
                             <td>Paper thermal rolls only. Susceptible to damage or loss.</td>
                             <td>Instant paperless delivery via WhatsApp, Email, or SMS with 1-click.</td>
                         </tr>
                         <tr>
                             <td><strong>Multi-Store Counters</strong></td>
                             <td>Requires separate local software setups and complex syncing.</td>
                             <td>Centralized server hosting supporting 1 to 100+ distributed branches.</td>
                         </tr>
                         <tr>
                             <td><strong>Security Backups</strong></td>
                             <td>Local hard drives. At high risk of hardware failure and virus attacks.</td>
                             <td>Cloud-secured storage (Microsoft Azure) with automatic periodic backup encryption.</td>
                         </tr>
                     </tbody>
                 </table>
            </div>
         </div>
      </div>
   </div>
</section>

<!-- Call to Action Section -->
<section class="cta-section">
   <div class="container">
      <div class="row">
         <div class="col-md-12">
            <div class="cta-box text-center">
               <div class="phone-icon mb-4">
                  <i class="fa-solid fa-envelope" style="font-size: 32px; color: var(--primary-color);"></i>
               </div>
               <h2>Start Invoicing Smarter Today</h2>
               <p>Boost checkouts, simplify compliance, and reduce recurring costs. Get started with a personalized demo.</p>
               <button onclick="window.location.href='contact-us.php'" class="cta-button">Explore Pricing Plans</button>
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
                        <img src="assets/images/paytm.webp" class="img-fluid" alt="Paytm" style="max-height: 40px;">
                    </div>
                    <div class="logo-box p-3" style="background:#fff; border-radius:8px; border:1px solid #e2e8f0; display:flex; align-items:center; justify-content:center; width:150px; height:80px;">
                        <img src="assets/images/razorpay.webp" class="img-fluid" alt="Razorpay" style="max-height: 40px;">
                    </div>
                    <div class="logo-box p-3" style="background:#fff; border-radius:8px; border:1px solid #e2e8f0; display:flex; align-items:center; justify-content:center; width:150px; height:80px;">
                        <img src="assets/images/phonepe.webp" class="img-fluid" alt="PhonePe" style="max-height: 40px;">
                    </div>
                    <div class="logo-box p-3" style="background:#fff; border-radius:8px; border:1px solid #e2e8f0; display:flex; align-items:center; justify-content:center; width:150px; height:80px;">
                        <img src="assets/images/pinelabs.webp" class="img-fluid" alt="Pine Labs" style="max-height: 40px;">
                    </div>
                    <div class="logo-box p-3" style="background:#fff; border-radius:8px; border:1px solid #e2e8f0; display:flex; align-items:center; justify-content:center; width:150px; height:80px;">
                        <img src="assets/images/tally.webp" class="img-fluid" alt="Tally" style="max-height: 40px;">
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
         <p class="text-muted">Answers to common invoicing questions.</p>
      </div>
      <div class="row">
         <div class="col-md-12">
            <div class="faq-section">
               <div class="accordion" id="faqAccordion">
                  <div class="accordion-item" style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 12px; overflow: hidden;">
                     <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style="background:#fff; color:#0f172a; font-weight:600;">
                        Is the software GST compliant?
                        </button>
                     </h2>
                     <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                        <div class="accordion-body text-muted" style="background:#f8fafc;">
                           Yes. Digify Soft Solutions generates 100% GST-compliant invoices. It automatically splits IGST, CGST, and SGST, allows setting product-level HSN codes, and exports reports compatible with GSTR-1 and GSTR-3B filings.
                        </div>
                     </div>
                  </div>
                  <div class="accordion-item" style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 12px; overflow: hidden;">
                     <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style="background:#fff; color:#0f172a; font-weight:600;">
                        Does the invoicing software work offline?
                        </button>
                     </h2>
                     <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                        <div class="accordion-body text-muted" style="background:#f8fafc;">
                           Absolutely. Our Hybrid POS database lets you generate billing invoices when internet connectivity is offline. Once the connection is re-established, the records auto-sync with the central cloud dashboard.
                        </div>
                     </div>
                  </div>
                  <div class="accordion-item" style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 12px; overflow: hidden;">
                     <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style="background:#fff; color:#0f172a; font-weight:600;">
                        How are invoices shared digitally?
                        </button>
                     </h2>
                     <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                        <div class="accordion-body text-muted" style="background:#f8fafc;">
                           With CRM and API configurations active, billing slips are automatically formatted into a mobile-responsive PDF and sent directly to the customer's verified WhatsApp number or email address immediately upon completing the checkout.
                        </div>
                     </div>
                  </div>
                  <div class="accordion-item" style="border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 12px; overflow: hidden;">
                     <h2 class="accordion-header" id="headingFour">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style="background:#fff; color:#0f172a; font-weight:600;">
                        Does it support multiple stores or billing counters?
                        </button>
                     </h2>
                     <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                        <div class="accordion-body text-muted" style="background:#f8fafc;">
                           Yes. Digify is designed to grow with your business. You can configure multiple billing terminals within a single store, or manage invoicing analytics across dozens of locations from a single admin account.
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