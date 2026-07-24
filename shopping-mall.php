<!-- header -->
  <?php
  include 'db.php';
  include 'fetch_meta.php';

  $pageMeta = getPageMeta('shopping-mall');
  $pageTitle = $pageMeta['page_title'] ?? 'shopping-mall';
  $pageDescription = $pageMeta['page_description'] ?? '';
  $pageKeywords = $pageMeta['page_keywords'] ?? '';

  include 'top.php';
include 'header.php';
?>
<!-- header -->
<!-- inner banner section start here  -->
<section class="inner-banner-sec">
   <div class="container">
      <div class="row">
         <div class="col-md-7">
            <div class="inner-banner-wrap">
               <img src="assets/images/Banner-2.webp">
               <div class="inner-banner-content">
                  <h1>India’s #No. 1 Best Cloud-Based Shopping Mall Billing Software</h1>
                  <h4>Digify Soft Solutions – Smarter Billing & Operations for Modern Malls</h4>
                  <p>Transform your shopping mall operations with Digify Soft Solutions’ cloud-based software. Automate billing, centralize inventory, streamline finances, and enhance customer engagement—all from a single platform.</p>
                  <a class="schedule-btn" href="contact-us.php">👉 Schedule Your Free Demo Today</a>
               </div>
            </div>
         </div>
         <div class="col-md-5">
            <div class="inner-banner-img">
               <figure>
                  <img src="assets/images/img272.jpg">
               </figure>
            </div>
         </div>
      </div>
   </div>
</section>
<!-- inner banner section end here  -->
<section class="manufacturing-key section-bg">
   <div class="container">
      <div class="row justify-content-center gy-4">

         <!-- Fast & Advanced POS Billing -->
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3>Fast & Advanced POS Billing</h3>
               <p>Ensure error-free, fast billing for high-volume transactions across multiple counters.</p>
               <ul>
                  <li>Speedy, immediate invoicing</li>
                  <li>Integration with real-time inventory</li>
                  <li>Supports high-volume billing</li>
                  <li>Multi-payment options (Cash, Cards, UPI, Wallets)</li>
               </ul>
            </div>
         </div>

         <!-- Seamless Mall-Wide Operations -->
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3>Seamless Mall-Wide Operations</h3>
               <p>Manage multiple stores, departments, and brands efficiently with centralized dashboards.</p>
               <ul>
                  <li>Centralized multi-branch dashboard</li>
                  <li>Automated stock updates & real-time inventory sync</li>
                  <li>Unified sales monitoring for all outlets</li>
                  <li>Effortless data synchronization</li>
               </ul>
            </div>
         </div>

         <!-- Smart Accounting & GST Compliance -->
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3>Smart Accounting & GST Compliance</h3>
               <p>Simplify financial management with automated accounting, real-time reporting, and GST-compliant invoices.</p>
               <ul>
                  <li>Centralized accounting system</li>
                  <li>Automated GST filing & compliance</li>
                  <li>Bank reconciliation & expense tracking</li>
                  <li>Profit & loss reporting</li>
               </ul>
            </div>
         </div>

         <!-- Customer Engagement & Loyalty -->
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3>Customer Engagement & Loyalty</h3>
               <p>Boost customer satisfaction and repeat purchases with CRM and loyalty management tools.</p>
               <ul>
                  <li>Loyalty & membership points</li>
                  <li>Offers, discounts, and promotions management</li>
                  <li>WhatsApp notifications & bulk SMS</li>
                  <li>Customer segmentation and targeted campaigns</li>
               </ul>
            </div>
         </div>

      </div>
   </div>
</section>



<section class="industry new-cards">
   <div class="container">
      <div class="row">
         <div class="col-md-12">
            <div class="heading-wrap">
               <h2>Next-Gen <span>Shopping Mall Billing Software</span></h2>
            </div>
            <div class="desktop-industries">
               <div class="row justify-content-center">

                  <!-- Feature 1: Sales & Purchase Management -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe1.png" alt="Sales & Purchase Management" class="img-fluid mb-3">
                                 <h4>Sales & Purchase Management</h4>
                                 <p>Track all sales and purchases in real-time for accurate inventory and accounting.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Feature 2: Multiple Billing Counters -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe2.png" alt="Multiple Billing Counters" class="img-fluid mb-3">
                                 <h4>Multiple Billing Counters</h4>
                                 <p>Reduce long queues and speed up checkout with multiple billing counters.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Feature 3: Barcode & QR Code Generator -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe3.png" alt="Barcode & QR Code Generator" class="img-fluid mb-3">
                                 <h4>Barcode & QR Code Generator</h4>
                                 <p>Manage inventory efficiently and enable fast scanning at billing counters.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Feature 4: UPI Integration -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe4.png" alt="UPI Integration" class="img-fluid mb-3">
                                 <h4>UPI Integration</h4>
                                 <p>Smooth, secure, and instant payment processing with multiple payment modes.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Feature 5: E-commerce Integration -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe5.png" alt="E-commerce Integration" class="img-fluid mb-3">
                                 <h4>E-commerce Integration</h4>
                                 <p>Sync online and offline inventory seamlessly for smooth omnichannel operations.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Feature 6: Reporting & Analytics -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe6.png" alt="Reporting & Analytics" class="img-fluid mb-3">
                                 <h4>Reporting & Analytics</h4>
                                 <p>Access 150+ actionable reports to track sales, inventory, and customer insights.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Feature 7: Custom Integrations -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe7.png" alt="Custom Integrations" class="img-fluid mb-3">
                                 <h4>Custom Integrations</h4>
                                 <p>Connect third-party systems and APIs to extend software functionality.</p>
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



<section class="pricing-section py-5 pt0">
   <div class="container">
      <div class="heading-wrap text-center">
         <h2> Pricing & Plans</h2>
      </div>
      <div class="row justify-content-center">

         <!-- Basic Plan -->
         <div class="col-md-4 mb-4">
            <div class="pricing-card basic">
               <div class="pricing-header">
                  <div class="plan-icon-wrap bg-success">
                     <i class="bi bi-shop"></i>
                  </div>
                  <h3>Basic Plan – Small Malls / Retail Chains</h3>
                  <div class="price">💳 ₹9,999 <span>/month</span></div>
               </div>
               <ul class="pricing-features">
                  <li>✔ Centralized Billing System</li>
                  <li>✔ POS & Multi-Counter Billing</li>
                  <li>✔ Inventory & Stock Management</li>
                  <li>✔ Basic CRM & Loyalty Features</li>
                  <li>✔ GST-Compliant Invoices</li>
               </ul>
            </div>
         </div>

         <!-- Standard Plan -->
         <div class="col-md-4 mb-4">
            <div class="pricing-card standard">
               <div class="pricing-header">
                  <div class="plan-icon-wrap bg-primary">
                     <i class="bi bi-cart4"></i>
                  </div>
                  <h3> Standard Plan – Medium-Sized Malls</h3>
                  <div class="price">💳 ₹19,999 <span>/month</span></div>
               </div>
               <ul class="pricing-features">
                  <li>✔ Everything in Basic, plus:</li>
                  <li>✔ Automated Stock Updates & Alerts</li>
                  <li>✔ Multi-Branch Management</li>
                  <li>✔ Advanced CRM & Promotions</li>
                  <li>✔ Reporting & Analytics Dashboard</li>
               </ul>
            </div>
         </div>

         <!-- Premium Plan -->
         <div class="col-md-4 mb-4">
            <div class="pricing-card premium">
               <div class="pricing-header">
                  <div class="plan-icon-wrap bg-danger">
                     <i class="bi bi-building"></i>
                  </div>
                  <h3> Premium Plan – Large Mall Networks</h3>
                  <div class="price">💳 Custom Pricing</div>
               </div>
               <ul class="pricing-features">
                  <li>✔ Everything in Standard, plus:</li>
                  <li>✔ Multi-Store Unified Dashboard</li>
                  <li>✔ E-commerce Integration & Omnichannel Sales</li>
                  <li>✔ Bank Reconciliation & Advanced Accounting</li>
                  <li>✔ API & Third-Party System Integration</li>
                  <li>✔ Dedicated Support & Custom Features</li>
               </ul>
            </div>
         </div>

      </div>
   </div>
</section>




<section class="manufacturing-key section-bg">
   <div class="container">
      <div class="row justify-content-center gy-4">

         <!-- Handle Multiple Branches -->
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3> Handle Multiple Branches</h3>
               <p>Operate all your garment and apparel store branches from a single, centralized dashboard. Manage sales, stock, and customer data seamlessly across every outlet.</p>
            </div>
         </div>

         <!-- Stock Transfer & Request -->
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3>Stock Transfer & Request</h3>
               <p>Seamlessly transfer stock between multiple store branches with just a few clicks. Simplify inventory movement and ensure availability across all locations.</p>
            </div>
         </div>

         <!-- Central Reporting & Analytics -->
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3>Central Reporting & Analytics</h3>
               <p>Get real-time, consolidated reports on a single dashboard. Track sales, stock, and performance across all your garment stores for better decision-making.</p>
            </div>
         </div>

         <!-- Centralized Management -->
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3>Centralized Management</h3>
               <p>Control every branch of your garment store chain from one platform. Manage billing, sales, inventory, and operations in a unified system.</p>
            </div>
         </div>

      </div>
   </div>
</section>

<section class="why-choose-sec bridal-sec">
   <div class="container">
      <div class="row align-items-center">

         <div class="col-md-5 order-md-2">
            <div class="expertise-img text-start">
               <figure>
                  <img src="assets/images/img273.jpg" alt="Centralized Billing for Multi-Branch Malls">
               </figure>
            </div>
         </div>

         <div class="col-md-7 order-md-1">
            <div class="heading-wrap text-start">
               <h2>Centralized System to Manage Multi-Branch Shopping Mall Operations</span></h2>
               <p>Streamline billing, inventory, and daily activities across every store with ease:</p>
            </div>
            <div class="expertise-wrap bridal-wrap">
               <ul>
                  <li>Multi-Branch Communication – Streamline communication across stores for faster decisions.</li>
                  <li>Unified Sales Monitoring – Track sales performance of all branches in one place.</li>
                  <li>Automated Stock Updates – Update stock levels instantly to prevent stockouts.</li>
                  <li>Centralized Dashboard – Access real-time data and insights for all branches.</li>
                  <li>Effortless Synchronization – Sync data automatically across branches for accuracy.</li>
               </ul>
            </div>
         </div>

      </div>
   </div>
</section>


<section class="manufacturing-key section-bg ">
   <div class="container">
      <div class="heading-wrap">
         <h2>Benefits of <span>Digify Soft Solutions Shopping Mall Billing Software</span></h2>
         <p>Explore the comprehensive benefits of our shopping mall billing software, designed to streamline operations, enhance customer experience, and support informed decision-making.</p>
      </div>
      <div class="row justify-content-center gy-4">

         <!-- 01. Improved Financial Management -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>01. Improved Financial Management</h3>
               <ul>
                  <li>Monitor sales and expenses in real-time.</li>
                  <li>Generate accurate, GST-compliant invoices.</li>
                  <li>Manage overdue payments with automatic reminders.</li>
                  <li>Simplify bank reconciliation for error-free accounting.</li>
               </ul>
            </div>
         </div>

         <!-- 02. Faster Checkout Process -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>02. Faster Checkout Process</h3>
               <ul>
                  <li>Reduce long queues at billing counters.</li>
                  <li>Accept multiple payment platforms.</li>
                  <li>Process transactions quickly, enhancing overall shopping experience.</li>
               </ul>
            </div>
         </div>

         <!-- 03. Customer Engagement -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>03. Customer Engagement</h3>
               <ul>
                  <li>Manage loyalty programs and membership points.</li>
                  <li>Send personalized notifications via SMS and WhatsApp.</li>
                  <li>Inform customers about discounts and promotions.</li>
                  <li>Build stronger relationships with engagement tools.</li>
               </ul>
            </div>
         </div>

         <!-- 04. Shopping Financial Reporting -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>04. Shopping Financial Reporting</h3>
               <ul>
                  <li>Access real-time insights into store operations.</li>
                  <li>Perform cash flow analysis and demand forecasting.</li>
                  <li>Generate profit and loss reports and product-wise profit margins.</li>
               </ul>
            </div>
         </div>

         <!-- 05. Stronger Mall Management -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>05. Stronger Mall Management</h3>
               <ul>
                  <li>Centralize operations across multiple outlets.</li>
                  <li>Track real-time KPIs and monitor employee performance.</li>
                  <li>Ensure secure multi-user access with defined roles.</li>
                  <li>Facilitate effective communication between staff and management.</li>
               </ul>
            </div>
         </div>

         <!-- 06. Enhanced Revenue Generation -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>06. Enhanced Revenue Generation</h3>
               <ul>
                  <li>Boost sales with targeted promotions.</li>
                  <li>Monitor high-demand products for better stock management.</li>
                  <li>Facilitate repeat purchases via loyalty programs and memberships.</li>
               </ul>
            </div>
         </div>

      </div>
   </div>
</section>



<section class="why-choose-sec">
   <div class="container">
      <div class="row">
         <div class="col-md-12">
            <div class="heading-wrap text-center">
               <h2> Key    <span>Benefits</span> </h2>
            </div>
            <div class="why-choose-wrap">
               <ul>
                  <li>
                     <figure> <img src="assets/images/platforms1.png" alt=""> </figure>
                     <h3>4X Revenue Growth Rate</h3>
                  </li>
                  <li>
                     <figure> <img src="assets/images/platforms2.png" alt=""> </figure>
                     <h3>120+ Billing Hours Saved per Month</h3>
                  </li>
                  <li>
                     <figure> <img src="assets/images/platforms3.png" alt=""> </figure>
                     <h3>90% Faster Processing Time</h3>
                  </li>
                  <li>
                     <figure> <img src="assets/images/platforms4.png" alt=""> </figure>
                     <h3>99% Reduction in Manual Errors</h3>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>

<section class="why-choose-sec bridal-sec">
   <div class="container">
      <div class="row align-items-center">

         <div class="col-md-5">
            <div class="expertise-img text-start">
               <figure>
                  <img src="assets/images/img274.jpg" alt="Shopping Mall Management Software">
               </figure>
            </div>
         </div>

         <div class="col-md-7">
            <div class="heading-wrap text-start">
               <h2>End-to-End Shopping Mall Management from POS to Inventory</span></h2>
               <p>Powerful software to streamline your mall operations across billing, inventory, and reporting:</p>
            </div>
            <div class="expertise-wrap bridal-wrap">
               <ul>
                  <li>Powerful POS Solution</li>
                  <li>Manage Multiple Stores Anywhere, Anytime</li>
                  <li>Organize Your Inventory and Barcodes</li>
                  <li>Support Multiple Payment Modes</li>
                  <li>Generate Reports to Improve Forecasting and Analytics</li>
                  <li>Launch Your Online Store</li>
               </ul>
            </div>
         </div>

      </div>
   </div>
</section>



<section class="manufacturing-key section-bg pt-60">
   <div class="container">
      <div class="heading-wrap">
         <h2>How to Use Digify Soft Solutions <span>Shopping Mall Billing Software</span></h2>
      </div>
      <div class="row justify-content-center gy-4">

         <!-- 01. Sign Up and Login -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>01. Sign Up and Login</h3>
               <ul>
                  <li>Create an account or log in with your credentials.</li>
                  <li>Set up your shopping mall profile, GST details, and payment preferences.</li>
               </ul>
            </div>
         </div>

         <!-- 02. Add Stores and Products -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>02. Add Stores and Products</h3>
               <ul>
                  <li>Add all outlets/branches of your mall to a single dashboard.</li>
                  <li>Upload product details, including SKUs, prices, categories, and stock levels.</li>
                  <li>Assign barcodes for faster billing and accurate inventory tracking.</li>
               </ul>
            </div>
         </div>

         <!-- 03. Multi-Store Management -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>03. Multi-Store Management</h3>
               <ul>
                  <li>Monitor all outlets from a centralized dashboard.</li>
                  <li>Track stock, sales, and transfers across stores in real-time.</li>
                  <li>Manage multi-location pricing, discounts, and promotions.</li>
               </ul>
            </div>
         </div>

         <!-- 04. Billing and POS -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>04. Billing and POS</h3>
               <ul>
                  <li>Scan product barcodes for quick billing.</li>
                  <li>Accept multiple payment options (cash, card, UPI).</li>
                  <li>Print or email invoices to customers instantly.</li>
                  <li>Reduce queues and improve customer checkout experience.</li>
               </ul>
            </div>
         </div>

         <!-- 05. Stock Transfer & Requests -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>05. Stock Transfer & Requests</h3>
               <ul>
                  <li>Move inventory between branches efficiently.</li>
                  <li>Request stock from other outlets when needed.</li>
                  <li>Avoid stockouts and overstocking with automated alerts.</li>
               </ul>
            </div>
         </div>

         <!-- 06. Customer Management -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>06. Customer Management</h3>
               <ul>
                  <li>Maintain a unified customer database across all branches.</li>
                  <li>Track purchase history and manage loyalty programs.</li>
                  <li>Send personalized promotions via SMS, WhatsApp, or email.</li>
               </ul>
            </div>
         </div>

         <!-- 07. Accounting & Financial Management -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>07. Accounting & Financial Management</h3>
               <ul>
                  <li>Monitor cash flow, revenue, and expenses across all branches.</li>
                  <li>Generate GST-compliant invoices and audit-ready reports.</li>
                  <li>Consolidate accounting for easier reconciliation.</li>
               </ul>
            </div>
         </div>

         <!-- 08. Reporting and Analytics -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>08. Reporting and Analytics</h3>
               <ul>
                  <li>Generate detailed reports for sales, inventory, and profits.</li>
                  <li>Analyze trends, popular products, and branch performance.</li>
                  <li>Make informed decisions for inventory and promotions.</li>
               </ul>
            </div>
         </div>

         <!-- 09. Cloud Access Anywhere -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>09. Cloud Access Anywhere</h3>
               <ul>
                  <li>Access your dashboard and data securely from any device.</li>
                  <li>Manage operations remotely in real-time.</li>
               </ul>
            </div>
         </div>

         <!-- 10. Support & Assistance -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>10. Support & Assistance</h3>
               <ul>
                  <li>Contact Digify Soft Solutions experts for setup, training, or troubleshooting.</li>
                  <li>Use free demos to explore features before full implementation.</li>
               </ul>
            </div>
         </div>

      </div>
   </div>
</section>






<!-- FAQ template section -->
<section class="faq-template py-5">
   <div class="container">
      <div class="heading-wrap text-center mb-4">
         <h2>❓ Frequently Asked <span>Questions (FAQ)</span></h2>
      </div>
      <div class="row">
         <div class="col-md-12">
            <div class="faq-section">
               <div class="accordion" id="faqAccordion">

                  <!-- FAQ 1 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading1">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                           1. What is Digify Soft Solutions Shopping Mall Billing Software?
                        </button>
                     </h2>
                     <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A1. A cloud-based POS and ERP software that centralizes billing, inventory, accounting, CRM, and multi-store management for shopping malls.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 2 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading2">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                           2. Can it handle multiple stores and departments?
                        </button>
                     </h2>
                     <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A2. Yes, the Premium Plan supports centralized dashboards, unified sales, and inventory management for all branches.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 3 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading3">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                           3. Is GST-compliant billing supported?
                        </button>
                     </h2>
                     <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A3. Absolutely. The software generates GST-ready invoices, automated tax calculations, and ensures compliance.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 4 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading4">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                           4. Can inventory be automated across multiple stores?
                        </button>
                     </h2>
                     <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A4. Yes, with real-time stock tracking, automated reorders, barcode scanning, and alerts for low-stock items.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 5 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading5">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                           5. Does it include CRM and customer engagement features?
                        </button>
                     </h2>
                     <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A5. Yes, track customer behavior, send personalized offers via WhatsApp & SMS, manage loyalty programs, and segment customers.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 6 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading6">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                           6. Can I integrate online and offline sales channels?
                        </button>
                     </h2>
                     <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A6. Yes, the software supports omnichannel integration, syncing online sales and inventory seamlessly.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 7 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading7">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                           7. Does it support multi-counter billing in high-traffic malls?
                        </button>
                     </h2>
                     <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A7. Yes, the software allows multiple billing counters, reducing queues and speeding up checkouts.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 8 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading8">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                           8. How are financials managed?
                        </button>
                     </h2>
                     <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A8. With centralized accounting, GST-compliant invoices, bank reconciliation, expense tracking, and real-time P&L reporting.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 9 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading9">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                           9. Can I generate reports and analytics for all outlets?
                        </button>
                     </h2>
                     <div id="collapse9" class="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A9. Yes, the system provides 150+ reports including sales trends, inventory, KPIs, and profit analysis.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 10 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading10">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                           10. Is the software customizable for mall-specific requirements?
                        </button>
                     </h2>
                     <div id="collapse10" class="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A10. Yes, Digify Soft Solutions offers full customization of POS, CRM, inventory, and accounting modules to fit your mall operations.
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </div>
   </div>
</section>





<!-- faq template section -->
<?php include 'footer.php'; ?>