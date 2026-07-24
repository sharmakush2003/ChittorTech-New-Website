<!-- header -->
  <?php
  include 'db.php';
  include 'fetch_meta.php';

  $pageMeta = getPageMeta('pet-shop');
  $pageTitle = $pageMeta['page_title'] ?? 'pet-shop';
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
                  <h1>India’s #No. 1 Best Cloud-Based Pet Shop POS Software</h1>
                  <h4>Digify Soft Solutions – Smart POS & Inventory Management for Modern Pet Stores</h4>
                  <p> Simplify billing, automate inventory, manage finances, and enhance customer engagement—all from one platform.</p>
                  <a class="schedule-btn" href="contact-us.php">👉 Schedule a Free Demo Today</a>
               </div>
            </div>
         </div>
         <div class="col-md-5">
            <div class="inner-banner-img">
               <figure>
                  <img src="assets/images/img269.jpg">
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

         <!-- Fast Billing & POS -->
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3>Fast Billing & POS</h3>
               <p>Offer error-free, fast billing and support multiple payment modes with integrated POS software.</p>
               <ul>
                  <li>GST-Compliant Billing & Invoices</li>
                  <li>Multiple Payment Modes (Cash, Cards, UPI)</li>
                  <li>Mobile POS for on-the-go billing</li>
               </ul>
            </div>
         </div>

         <!-- Efficient Inventory Management -->
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3>Efficient Inventory Management</h3>
               <p>Manage your liquor or pet products in real-time, automate reorders, and generate barcodes and labels for easy stock identification.</p>
               <ul>
                  <li>Low Stock Alerts & Auto-Reordering</li>
                  <li>Expiry Management & Product Tracking</li>
                  <li>Fast & Slow Selling Product Analysis</li>
               </ul>
            </div>
         </div>

         <!-- Accurate Accounting & GST Compliance -->
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3>Accurate Accounting & GST Compliance</h3>
               <p>Simplify financial operations and ensure error-free bookkeeping with integrated GST-compliant accounting software.</p>
               <ul>
                  <li>P&L and Expense Tracking</li>
                  <li>GST Returns & Tax Compliance</li>
                  <li>Financial Reports & Analytics</li>
               </ul>
            </div>
         </div>

         <!-- Smart CRM & Customer Engagement -->
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3>Smart CRM & Customer Engagement</h3>
               <p>Build loyalty and strengthen relationships with your customers using CRM tools designed for liquor or pet stores.</p>
               <ul>
                  <li>Loyalty Points & Discount Offers</li>
                  <li>Feedback & Reviews Collection</li>
                  <li>Membership Management (Digital & Card)</li>
                  <li>Customer Segmentation for Targeted Marketing</li>
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
               <h2>Feature-Rich <span>Pet Shop Software</span></h2>
            </div>
            <div class="desktop-industries">
               <div class="row justify-content-center">

                  <!-- Feature 1: Label & Barcode Generator -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe1.png" alt="Label & Barcode Generator" class="img-fluid mb-3">
                                 <h4>Label & Barcode Generator</h4>
                                 <p>Easily generate custom barcodes and labels to simplify inventory tracking and sales processes.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Feature 2: Auto-Reorders -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe2.png" alt="Auto-Reorders" class="img-fluid mb-3">
                                 <h4>Auto-Reorders</h4>
                                 <p>Maintain optimal stock levels for high-demand products automatically.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Feature 3: Omnichannel Sales -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe3.png" alt="Omnichannel Sales" class="img-fluid mb-3">
                                 <h4>Omnichannel Sales</h4>
                                 <p>Manage orders from your online store, marketplaces, or in-store POS seamlessly.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Feature 4: Mobile Invoice Sharing & UPI Integration -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe4.png" alt="Mobile Invoice Sharing & UPI Integration" class="img-fluid mb-3">
                                 <h4>Mobile Invoice Sharing & UPI Integration</h4>
                                 <p>Share invoices on mobile and accept payments via UPI, cards, or wallets instantly.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Feature 5: Pet-Wise Data Analysis -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe5.png" alt="Pet-Wise Data Analysis" class="img-fluid mb-3">
                                 <h4>Pet-Wise Data Analysis</h4>
                                 <p>Analyze sales trends per pet type, forecast demand, and optimize inventory and promotions.</p>
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
                                 <p>Access 150+ real-time reports to track sales, revenue, inventory, and customer behavior.</p>
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
         <h2>Pricing & Plans</h2>
      </div>
      <div class="row justify-content-center">

         <!-- Basic Plan -->
         <div class="col-md-4 mb-4">
            <div class="pricing-card basic">
               <div class="pricing-header">
                  <div class="plan-icon-wrap bg-success">
                     <i class="bi bi-shop"></i>
                  </div>
                  <h3>Basic Plan – Small Pet Stores</h3>
                  <div class="price">💳 ₹3,999 <span>/month</span></div>
               </div>
               <ul class="pricing-features">
                  <li>✔ POS & Billing</li>
                  <li>✔ Inventory Management (Low Stock Alerts & Reorder)</li>
                  <li>✔ GST-Compliant Billing</li>
                  <li>✔ Barcode & Label Generation</li>
                  <li>✔ Basic Sales & Stock Reports</li>
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
                  <h3>Standard Plan – Growing Pet Stores</h3>
                  <div class="price">💳 ₹7,999 <span>/month</span></div>
               </div>
               <ul class="pricing-features">
                  <li>✔ Everything in Basic, plus:</li>
                  <li>✔ CRM & Customer Segmentation</li>
                  <li>✔ Loyalty Points & Discount Management</li>
                  <li>✔ Expiry Management & Auto-Reorders</li>
                  <li>✔ Advanced Reports & Analytics</li>
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
                  <h3>Premium Plan – Multi-Branch Pet Stores</h3>
                  <div class="price">💳 Custom Pricing</div>
               </div>
               <ul class="pricing-features">
                  <li>✔ Everything in Standard, plus:</li>
                  <li>✔ Centralized Multi-Store Management</li>
                  <li>✔ Unified Customer Database & Loyalty Programs</li>
                  <li>✔ Integrated Accounting & GST Automation</li>
                  <li>✔ Omnichannel Sales & Online Store Integration</li>
                  <li>✔ Dedicated Support & Advanced Reporting</li>
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
               <h3>Handle Multiple Branches</h3>
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
                  <img src="assets/images/img270.jpg" alt="Multi-Store Pet Shop Management">
               </figure>
            </div>
         </div>

         <div class="col-md-7 order-md-1">
            <div class="heading-wrap text-start">
               <h2>Centralized POS Solution for Multi-Store  <span>Pet Shop Management</span></h2>
               <p>Easily manage your pet store branches and franchises across locations from a centralized system with Digify Soft Solutions.</p>
            </div>
            <div class="expertise-wrap bridal-wrap">
               <ul>
                  <li>Stock Transfer & Requests – Effortlessly transfer stock between stores using a centrally managed Pet Shop POS software.</li>
                  <li>Central Accounting – Monitor all pet store accounts from a single system, keeping track of finances across all locations.</li>
                  <li>Central Reporting & Analytics – Generate detailed reports and forecasts for individual stores or combined branches.</li>
                  <li>Multi-Location Management – Track and manage the performance of multiple franchise pet stores efficiently.</li>
                  <li>Centralized Inventory Control – Sync inventory and orders across stores, e-commerce platforms, and marketplaces like Shopify.</li>
                  <li>Unified Customer Database – Maintain a single database across all shopping channels to track customer data centrally.</li>
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
                     <h3>1X Revenue Growth Rate</h3>
                  </li>
                  <li>
                     <figure> <img src="assets/images/platforms2.png" alt=""> </figure>
                     <h3>55+ Billing Hours Saved per Month</h3>
                  </li>
                  <li>
                     <figure> <img src="assets/images/platforms3.png" alt=""> </figure>
                     <h3>41% Faster Processing Time</h3>
                  </li>
                  <li>
                     <figure> <img src="assets/images/platforms4.png" alt=""> </figure>
                     <h3>45% Reduction in Manual Errors</h3>
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
                  <img src="assets/images/img271.jpg" alt="Pet Shop Management Software">
               </figure>
            </div>
         </div>

         <div class="col-md-7">
            <div class="heading-wrap text-start">
               <h2>One Solution for Everything: <span>All-in-One Pet Shop Software</span></h2>
               <p>Simplify, unify, and petify your operations with our comprehensive pet shop software:</p>
            </div>
            <div class="expertise-wrap bridal-wrap">
               <ul>
                  <li>Powerful POS Solution</li>
                  <li>Manage Multiple Stores Anywhere, Anytime</li>
                  <li>Organize Your Inventory and Barcodes</li>
                  <li>Support Multiple Payment Modes</li>
                  <li>Generate Reports to Improve Forecasting and Analytics</li>
                  <li>Launch Your Online Store Easily</li>
               </ul>
            </div>
         </div>

      </div>
   </div>
</section>


<section class="bridal-store-sec hardware-store-sec">
   <div class="container">
      <div class="row">
         <div class="col-md-12">
            <div class="bridal-store hardware-store">
               <h2>Why Digify Soft Solutions?</h2>
               <p>Digify Soft Solutions offers comprehensive features that take the stress out of daily operations for pet store owners. From inventory management to billing, accounting, multi-store tracking, and customer management, our software simplifies every aspect of running a pet store.</p>
            </div>
         </div>
      </div>
   </div>
</section>

<section class="manufacturing-key section-bg pt-60">
   <div class="container">
      <div class="heading-wrap">
         <h2>How to Use Digify Soft Solutions <span>Pet Shop POS Software</span></h2>
      </div>
      <div class="row justify-content-center gy-4">

         <!-- 01. Sign Up and Login -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>01. Sign Up and Login</h3>
               <ul>
                  <li>Create an account or log in with your existing credentials.</li>
                  <li>Set up your pet store details, branches, GST information, and payment preferences.</li>
               </ul>
            </div>
         </div>

         <!-- 02. Add Products and Inventory -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>02. Add Products and Inventory</h3>
               <ul>
                  <li>Upload all pet products, including SKUs, prices, stock levels, and categories.</li>
                  <li>Assign barcodes for easy billing and inventory tracking.</li>
               </ul>
            </div>
         </div>

         <!-- 03. Multi-Store Management -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>03. Multi-Store Management</h3>
               <ul>
                  <li>Connect multiple store locations or franchises to a single dashboard.</li>
                  <li>Track stock, sales, and transfers across all stores in real time.</li>
               </ul>
            </div>
         </div>

         <!-- 04. Billing and POS -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>04. Billing and POS</h3>
               <ul>
                  <li>Scan product barcodes to generate bills quickly.</li>
                  <li>Accept multiple payment modes, including cash, card, and UPI.</li>
                  <li>Print or email invoices to customers instantly.</li>
               </ul>
            </div>
         </div>

         <!-- 05. Stock Transfer & Requests -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>05. Stock Transfer & Requests</h3>
               <ul>
                  <li>Easily move inventory between stores to balance stock.</li>
                  <li>Request stock from other branches as needed.</li>
               </ul>
            </div>
         </div>

         <!-- 06. Accounting & Finance Management -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>06. Accounting & Finance Management</h3>
               <ul>
                  <li>Manage all accounts from a centralized system.</li>
                  <li>Track revenues, expenses, and profit across all branches.</li>
               </ul>
            </div>
         </div>

         <!-- 07. Reporting and Analytics -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>07. Reporting and Analytics</h3>
               <ul>
                  <li>Generate detailed reports for individual stores or all branches combined.</li>
                  <li>Analyze sales trends, popular products, and customer behavior to make smart business decisions.</li>
               </ul>
            </div>
         </div>

         <!-- 08. Customer Management -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>08. Customer Management</h3>
               <ul>
                  <li>Maintain a unified database of all customers across stores and online channels.</li>
                  <li>Track purchase history, manage loyalty programs, and send promotions.</li>
               </ul>
            </div>
         </div>

         <!-- 09. Online Store Integration -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>09. Online Store Integration</h3>
               <ul>
                  <li>Sync inventory with your e-commerce website or marketplaces like Shopify.</li>
                  <li>Manage online and offline sales from a single platform.</li>
               </ul>
            </div>
         </div>

         <!-- 10. Cloud Access Anywhere -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>10. Cloud Access Anywhere</h3>
               <ul>
                  <li>Access your dashboard and data anytime, anywhere.</li>
                  <li>Manage your pet stores remotely with secure cloud-based access.</li>
               </ul>
            </div>
         </div>

         <!-- 11. Support & Assistance -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>11. Support & Assistance</h3>
               <ul>
                  <li>Contact Digify Soft Solutions experts for guidance, training, or troubleshooting.</li>
                  <li>Use free demos to understand all features before full implementation.</li>
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
         <h2>Frequently Asked <span>Questions (FAQ)</span></h2>
      </div>
      <div class="row">
         <div class="col-md-12">
            <div class="faq-section">
               <div class="accordion" id="faqAccordion">

                  <!-- FAQ 1 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading1">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                           1. What is Digify Soft Solutions Pet Shop POS Software?
                        </button>
                     </h2>
                     <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A1. A cloud-based POS and ERP solution designed to manage billing, inventory, accounting, CRM, and online sales for pet stores.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 2 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading2">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                           2. Can it handle multiple store locations?
                        </button>
                     </h2>
                     <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A2. Yes, the Premium Plan allows centralized multi-store management with unified dashboards.
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
                           A3. Absolutely. Generate GST-ready invoices, automated tax calculations, and digital bills.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 4 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading4">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                           4. Can I manage inventory automatically?
                        </button>
                     </h2>
                     <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A4. Yes, with low-stock alerts, auto-reorders, expiry tracking, and barcode-based inventory management.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 5 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading5">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                           5. Does it support mobile billing?
                        </button>
                     </h2>
                     <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A5. Yes, the Mobile POS feature allows billing from any device, anywhere.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 6 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading6">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                           6. Can I run loyalty programs and discounts?
                        </button>
                     </h2>
                     <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A6. Yes, you can manage loyalty points, membership programs, and custom discount offers.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 7 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading7">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                           7. Does it include CRM and customer engagement tools?
                        </button>
                     </h2>
                     <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A7. Yes, track customers, collect feedback, send invoices via WhatsApp, and segment them for targeted campaigns.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 8 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading8">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                           8. Can I analyze sales trends by pet type?
                        </button>
                     </h2>
                     <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A8. Yes, with Pet-Wise Data Analysis to forecast demand and optimize inventory.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 9 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading9">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                           9. Can I integrate online sales channels?
                        </button>
                     </h2>
                     <div id="collapse9" class="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A9. Yes, the software supports omnichannel sales and integration with your online store.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 10 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading10">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                           10. Is the software customizable for my pet store?
                        </button>
                     </h2>
                     <div id="collapse10" class="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A10. Yes. Digify Soft Solutions offers full customization for POS, CRM, inventory management, and accounting modules.
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