<!-- header -->
  <?php
 include 'db.php';
  include 'fetch_meta.php';

  $pageMeta = getPageMeta('liquor-store');
  $pageTitle = $pageMeta['page_title'] ?? 'liquor-store';
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
                  <h1>India’s #No. 1 Best Cloud-Based Liquor Store Software</h1>
                  <h4>Digify Soft Solutions – Smart POS & Inventory Management for Liquor Stores</h4>
                  <p> liquor store software. Our cloud-based POS and ERP solution includes automated billing, inventory management, CRM, GST compliance, loyalty programs, multi-location support, and e-commerce integration.</p>
                  <a class="schedule-btn" href="contact-us.php">👉 Schedule a Free Demo Today</a>
               </div>
            </div>
         </div>
         <div class="col-md-5">
            <div class="inner-banner-img">
               <figure>
                  <img src="assets/images/img268.jpg">
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

         <!-- Seamless Inventory Management -->
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3>Seamless Inventory Management</h3>
               <p>Manage liquor stock levels, track product turnover, and avoid overstocking or stockouts with our intelligent liquor store POS software.</p>
               <ul>
                  <li>Product Variants & Categorization</li>
                  <li>Brand-Wise Stock Management</li>
                  <li>Automated Reorders & Alerts</li>
                  <li>Warehouse Management</li>
               </ul>
            </div>
         </div>

         <!-- Automated Billing & POS -->
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3>Automated Billing & POS</h3>
               <p>Experience error-free billing with V-Pay, multiple payment options, and digital invoices.</p>
               <ul>
                  <li>GST-Compliant Billing & Tax Automation</li>
                  <li>Digital Bills & Cash Register Integration</li>
                  <li>Barcode Scanning for Faster Billing</li>
                  <li>Image-Based POS</li>
               </ul>
            </div>
         </div>

         <!-- Customer-Centric CRM & Loyalty -->
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3>Customer-Centric CRM & Loyalty</h3>
               <p>Enhance customer engagement and boost repeat sales with built-in CRM, loyalty points, discount management, and age verification features.</p>
               <ul>
                  <li>Track Customer Interactions</li>
                  <li>Birthday & Anniversary Offers</li>
                  <li>Loyalty Points & Membership Management</li>
                  <li>Age Verification Compliance</li>
               </ul>
            </div>
         </div>

         <!-- Integrated Accounting & Financial Management -->
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3>Integrated Accounting & Financial Management</h3>
               <p>Simplify financial operations with automatic ledger updates, GST returns, and expense tracking.</p>
               <ul>
                  <li>Integrated Accounting Module</li>
                  <li>Real-Time Sales & Expense Tracking</li>
                  <li>Stock-Wise Analysis & Profit Reports</li>
                  <li>OCR for Invoice Data Extraction</li>
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
               <h2>Advanced <span>Features for Liquor Stores</span></h2>
            </div>
            <div class="desktop-industries">
               <div class="row justify-content-center">

                  <!-- Feature 1: WhatsApp Integration -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe1.png" alt="WhatsApp Integration" class="img-fluid mb-3">
                                 <h4>WhatsApp Integration</h4>
                                 <p>Share invoices, promotions, and alerts via WhatsApp to enhance customer engagement.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Feature 2: Purchase Management -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe2.png" alt="Purchase Management" class="img-fluid mb-3">
                                 <h4>Purchase Management</h4>
                                 <p>Track purchase bills, supplier orders, and inventory updates efficiently.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Feature 3: Stock-Wise Analysis -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe3.png" alt="Stock-Wise Analysis" class="img-fluid mb-3">
                                 <h4>Stock-Wise Analysis</h4>
                                 <p>Identify fast and slow-selling products, receive low-stock alerts, and optimize orders.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Feature 4: V-Pay Integration -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe4.png" alt="V-Pay Integration" class="img-fluid mb-3">
                                 <h4>V-Pay Integration</h4>
                                 <p>Enable quick and secure UPI payments for customers at the billing counter.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Feature 5: E-Commerce Integration -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe5.png" alt="E-Commerce Integration" class="img-fluid mb-3">
                                 <h4>E-Commerce Integration</h4>
                                 <p>Option to create an online liquor store with real-time stock sync.</p>
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
                  <h3>Basic Plan – Small Liquor Stores</h3>
                  <div class="price">💳 ₹4,499 <span>/month</span></div>
               </div>
               <ul class="pricing-features">
                  <li>✔ POS & Billing</li>
                  <li>✔ Basic Inventory Management</li>
                  <li>✔ GST-Compliant Digital Invoices</li>
                  <li>✔ Barcode Generator & Label Printing</li>
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
                  <h3> Standard Plan – Growing Liquor Stores</h3>
                  <div class="price">💳 ₹8,999 <span>/month</span></div>
               </div>
               <ul class="pricing-features">
                  <li>✔ Everything in Basic, plus:</li>
                  <li>✔ CRM & Customer Segmentation</li>
                  <li>✔ Loyalty Programs & Discount Management</li>
                  <li>✔ Automated Reorders & Stock Alerts</li>
                  <li>✔ Warehouse Management</li>
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
                  <h3>Premium Plan – Multi-Branch Liquor Chains</h3>
                  <div class="price">💳 Custom Pricing</div>
               </div>
               <ul class="pricing-features">
                  <li>✔ Everything in Standard, plus:</li>
                  <li>✔ Centralized Multi-Store Management</li>
                  <li>✔ Unified Customer Database & Loyalty Programs</li>
                  <li>✔ Integrated Accounting & GST Automation</li>
                  <li>✔ Online Store Integration & Payment Gateways</li>
                  <li>✔ Dedicated Support & Advanced Reporting</li>
               </ul>
            </div>
         </div>

      </div>
   </div>
</section>

<section class="manufacturing-key section-bg">
   <div class="container">
      <div class="heading-wrap">
         <h2>Top Benefits of Digify Soft Solutions <span>Liquor Store Software</span></h2>
         <p>Explore the key benefits that make liquor store management smarter and easier.</p>
      </div>
      <div class="row justify-content-center gy-4">

         <!-- 01. User-Friendly CRM -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>01. User-Friendly CRM</h3>
               <ul>
                  <li>Monitor customers’ buying history.</li>
                  <li>Offer discounts, coupons, loyalty points, and rewards.</li>
                  <li>Store customer contact details for notifications, invoices, and promotions.</li>
               </ul>
            </div>
         </div>

         <!-- 02. Smart Inventory Management -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>02. Smart Inventory Management</h3>
               <ul>
                  <li>Keep real-time records of all liquor products.</li>
                  <li>Receive alerts for low stock or out-of-stock items.</li>
                  <li>Use barcode scanning for fast and accurate stock updates.</li>
                  <li>Easily transfer stock between multiple store locations.</li>
               </ul>
            </div>
         </div>

         <!-- 03. Supplier & Purchase Order Management -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>03. Supplier & Purchase Order Management</h3>
               <ul>
                  <li>Create and manage purchase orders efficiently.</li>
                  <li>Handle supplier tasks across various liquor brands.</li>
                  <li>Connect products with suppliers to simplify restocking.</li>
               </ul>
            </div>
         </div>

         <!-- 04. Accurate Billing & Faster Checkouts -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>04. Accurate Billing & Faster Checkouts</h3>
               <ul>
                  <li>High-speed, GST-compliant billing.</li>
                  <li>Multiple payment integrations for smooth transactions.</li>
                  <li>Barcode scanning ensures precise billing and faster service.</li>
               </ul>
            </div>
         </div>

         <!-- 05. Liquor Store Regulatory Compliance -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>05. Liquor Store Regulatory Compliance</h3>
               <ul>
                  <li>Maintain accurate audit records for simplified tax processes.</li>
                  <li>Perform compulsory age verification before billing.</li>
                  <li>Generate regular and simplified GST reports.</li>
               </ul>
            </div>
         </div>

         <!-- 06. Multi-Store & Multi-Location Management -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>06. Multi-Store & Multi-Location Management</h3>
               <ul>
                  <li>Manage all stores from a single centralized dashboard.</li>
                  <li>Synchronize inventory, pricing, and customer data across all branches.</li>
                  <li>Monitor reports and analytics for each location.</li>
               </ul>
            </div>
         </div>

         <!-- 07. Centralized Accounting -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>07. Centralized Accounting</h3>
               <ul>
                  <li>Consolidate financial data and accounts from all stores into a single database.</li>
               </ul>
            </div>
         </div>

      </div>
   </div>
</section>


<section class="why-choose-sec liquor-sec">
   <div class="container">
      <div class="row align-items-center">


         <div class="col-md-12 order-md-1">
            <div class="heading-wrap text-start">
               <h2>Manage Your <span>Liquor Store Operations</span> in a Single Bottle</h2>
               <p>Our liquor store software combines advanced modules, smart automation, and seamless integrations to give you everything you need to run your business smoothly and profitably.</p>
            </div>
            <div class="expertise-wrap liquor-wrap">
               <ul>
                  <li><strong>Powerful POS Solution</strong> – Speed up billing with barcode scanning and GST-compliant invoicing.</li>
                  <li><strong>Manage Multiple Stores Anywhere, Anytime</strong> – Connect and control multiple outlets from one centralized dashboard.</li>
                  <li><strong>Organize Your Inventory and Barcodes</strong> – Maintain accurate stock levels with real-time updates and barcode tracking.</li>
                  <li><strong>Support Multiple Payment Modes</strong> – Accept payments via cash, cards, UPI, or digital wallets for customer convenience.</li>
                  <li><strong>Generate Reports & Analytics</strong> – Track sales, stock, and branch performance to improve forecasting and profitability.</li>
                  <li><strong>Launch Your Online Store</strong> – Integrate your offline and online sales to maximize your reach and revenue.</li>
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
                     <h3>65+ Billing Hours Saved per Month</h3>
                  </li>
                  <li>
                     <figure> <img src="assets/images/platforms3.png" alt=""> </figure>
                     <h3>49% Faster Processing Time</h3>
                  </li>
                  <li>
                     <figure> <img src="assets/images/platforms4.png" alt=""> </figure>
                     <h3>53% Reduction in Manual Errors</h3>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>


<section class="bridal-store-sec liquor-store-sec">
   <div class="container">
      <div class="row">
         <div class="col-md-12">
            <div class="bridal-store liquor-store">
               <h2>Why Digify Soft Solutions?</h2>
               <p>Digify Soft Solutions liquor store software offers all the features a liquor store owner needs for easy and efficient business management. From inventory and billing to multi-store management, accounting, and customer tracking, our software simplifies every aspect of running your liquor store.</p>
               
               <h2>Digify Soft Solutions: An Automated and Profitable Solution for Liquor Store Retailing</h2>
               <p>Running a liquor store comes with multiple challenges—tracking inventory, staying updated with the latest products, providing multiple payment options, and managing omni-commerce platforms. Digify Soft Solutions’ cloud-based liquor store software automates these operations, reducing manual work and simplifying store management.</p>
               <p>Investing in liquor store POS software is now a smart decision. Our reliable, liquor-specific POS software comes with 24/7 support and tailored features designed for liquor retail operations.</p>
               
               <button  onclick="window.location.href='contact-us.php'" class="cta-button">Avail your free demo today!</button>
            </div>
         </div>
      </div>
   </div>
</section>


<section class="manufacturing-key section-bg pt-60">
   <div class="container">
      <div class="heading-wrap">
         <h2>How to Use Digify Soft Solutions <span>Liquor Store POS Software</span></h2>
      </div>
      <div class="row justify-content-center gy-4">

         <!-- 01. Sign Up and Login -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>01. Sign Up and Login</h3>
               <ul>
                  <li>Create an account or log in with your existing credentials.</li>
                  <li>Set up your liquor store profile, GST information, and payment preferences.</li>
               </ul>
            </div>
         </div>

         <!-- 02. Add Products and Inventory -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>02. Add Products and Inventory</h3>
               <ul>
                  <li>Upload all liquor items with details like SKUs, variants, prices, and stock levels.</li>
                  <li>Assign barcodes for easy billing and inventory tracking.</li>
               </ul>
            </div>
         </div>

         <!-- 03. Multi-Store Management -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>03. Multi-Store Management</h3>
               <ul>
                  <li>Connect multiple store locations or branches to a single dashboard.</li>
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
                  <li>Accept multiple payment modes (cash, card, UPI).</li>
                  <li>Print or email invoices to customers instantly.</li>
               </ul>
            </div>
         </div>

         <!-- 05. Stock Transfer & Requests -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>05. Stock Transfer & Requests</h3>
               <ul>
                  <li>Easily transfer inventory between stores to maintain stock levels.</li>
                  <li>Request stock from other branches as needed.</li>
               </ul>
            </div>
         </div>

         <!-- 06. Supplier & Purchase Management -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>06. Supplier & Purchase Management</h3>
               <ul>
                  <li>Create and track purchase orders for suppliers.</li>
                  <li>Update inventory automatically upon receiving stock.</li>
                  <li>Manage supplier relationships efficiently.</li>
               </ul>
            </div>
         </div>

         <!-- 07. Customer Management -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>07. Customer Management</h3>
               <ul>
                  <li>Maintain a unified database of all customers across stores and online channels.</li>
                  <li>Track purchase history, send promotions, and manage loyalty programs.</li>
               </ul>
            </div>
         </div>

         <!-- 08. Regulatory Compliance -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>08. Regulatory Compliance</h3>
               <ul>
                  <li>Perform compulsory age verification before billing.</li>
                  <li>Maintain accurate audit records for taxes and GST reporting.</li>
               </ul>
            </div>
         </div>

         <!-- 09. Reporting and Analytics -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>09. Reporting and Analytics</h3>
               <ul>
                  <li>Access detailed sales, inventory, and financial reports.</li>
                  <li>Monitor trends to make data-driven business decisions.</li>
               </ul>
            </div>
         </div>

         <!-- 10. Online Store Integration -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>10. Online Store Integration</h3>
               <ul>
                  <li>Sync inventory with your e-commerce website or marketplace.</li>
                  <li>Manage online and offline sales from a single platform.</li>
               </ul>
            </div>
         </div>

         <!-- 11. Cloud Access Anywhere -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>11. Cloud Access Anywhere</h3>
               <ul>
                  <li>Access your dashboard and data anytime, anywhere.</li>
                  <li>Manage your liquor store remotely with secure cloud-based access.</li>
               </ul>
            </div>
         </div>

         <!-- 12. Support & Assistance -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>12. Support & Assistance</h3>
               <ul>
                  <li>Contact Digify Soft Solutions experts for guidance, training, or troubleshooting.</li>
                  <li>Use free demos to explore all features before full implementation.</li>
               </ul>
            </div>
         </div>

      </div>
   </div>
</section>





<!-- FAQ template section -->
<section class="faq-template">
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
                           1. What is Digify Soft Solutions Liquor Store Software?
                        </button>
                     </h2>
                     <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A1. A cloud-based POS and ERP solution designed to manage billing, inventory, CRM, GST compliance, loyalty programs, and multi-store operations for liquor shops.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 2 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading2">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                           2. Can it manage multiple store locations?
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
                           A3. Absolutely. Generate GST invoices, automated tax calculations, and E-Way bills for legal compliance.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 4 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading4">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                           4. Can I track inventory efficiently?
                        </button>
                     </h2>
                     <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A4. Yes, with real-time stock monitoring, automated reorders, and brand-wise stock tracking.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 5 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading5">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                           5. Does it support multiple payment modes?
                        </button>
                     </h2>
                     <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A5. Yes. Accept UPI, debit/credit cards, digital wallets, and cash payments.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 6 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading6">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                           6. Can I run loyalty and discount programs?
                        </button>
                     </h2>
                     <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A6. Yes, the software includes loyalty points, membership management, and discount offers.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 7 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading7">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                           7. Does it have WhatsApp integration?
                        </button>
                     </h2>
                     <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A7. Yes, you can send bills, offers, and notifications directly to customers via WhatsApp.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 8 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading8">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                           8. Can I analyze sales and stock reports?
                        </button>
                     </h2>
                     <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A8. Yes, access 150+ detailed reports covering sales, stock, profits, and customer behavior.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 9 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading9">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                           9. Does it include age verification for customers?
                        </button>
                     </h2>
                     <div id="collapse9" class="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A9. Yes, the software has built-in age verification to prevent underage sales.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 10 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading10">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                           10. Can I customize this software for my liquor store?
                        </button>
                     </h2>
                     <div id="collapse10" class="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A10. Yes. Digify Soft Solutions provides full customization for POS, inventory management, multi-location operations, and CRM modules.
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