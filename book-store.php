<!-- header -->
     <?php
  include 'db.php';
  include 'fetch_meta.php';

  $pageMeta = getPageMeta('book-store');
  $pageTitle = $pageMeta['page_title'] ?? 'book-store';
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
                  <h1>India’s #1 AI-Powered Cloud Bookstore Management Software
</h1>
                  <h4>Digify Soft Solutions delivers a smart, AI-driven POS & ERP platform designed exclusively for bookstores, helping you run faster, smarter, and more profitably.
</h4>
                  <p> Manage billing, inventory, CRM, multi-store operations, and online book sales from one intelligent, cloud-based system built to scale your bookstore business effortlessly.</p>
                  <a class="schedule-btn" href="contact-us.php">👉 Schedule a Free Demo Today</a>
               </div>
            </div>
         </div>
         <div class="col-md-5">
            <div class="inner-banner-img">
               <figure>
                  <img src="assets/images/Cloud-Bookstore.png">
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

   <!-- Accurate Book Inventory Control -->
   <div class="col-md-3 col-sm-6">
      <div class="key-box">
         <h3>Accurate Book Inventory Control</h3>
         <p>Keep shelves stocked at all times with real-time book tracking and smart alerts for fast-moving and slow-selling titles.</p>
         <ul>
            <li>Detailed stock tracking with reports</li>
            <li>Barcode and price label creation</li>
            <li>Automatic replenishment for top-selling books</li>
         </ul>
      </div>
   </div>

   <!-- Smooth & Reliable Billing Experience -->
   <div class="col-md-3 col-sm-6">
      <div class="key-box">
         <h3>Smooth & Reliable Billing Experience</h3>
         <p>Create tax-ready invoices instantly, send them digitally, and offer flexible payment options for every customer.</p>
         <ul>
            <li>High-accuracy billing with zero errors</li>
            <li>Share invoices directly on mobile devices</li>
            <li>Support for UPI, cards, and digital payments</li>
         </ul>
      </div>
   </div>

   <!-- Intelligent Customer Management -->
   <div class="col-md-3 col-sm-6">
      <div class="key-box">
         <h3>Intelligent Customer Management</h3>
         <p>Build stronger relationships with readers using a smart CRM system that manages customer details, rewards, and promotions in one place.</p>
         <ul>
            <li>Loyalty and reward point tracking</li>
            <li>Centralized customer records</li>
            <li>Easy control of discounts and offers</li>
         </ul>
      </div>
   </div>

   <!-- Online Store & Unified Sales Channels -->
   <div class="col-md-3 col-sm-6">
      <div class="key-box">
         <h3>Online Store & Unified Sales Channels</h3>
         <p>Sell books online with ease by launching your own store or connecting with popular e-commerce platforms—while keeping inventory updated everywhere.</p>
         <ul>
            <li>Personalized online bookstore setup</li>
            <li>Real-time sync between online and in-store stock</li>
            <li>Secure multi-payment support</li>
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
               <h2>Feature-Packed Software for Modern Bookstores</h2>
            </div>
            <div class="desktop-industries">
               <div class="row justify-content-center">
                  <!-- 1. Add Customer Profiles -->
                  <div class="col-md-3 col-sm-6">
                     <div class="boxes mb-4 flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/ok1.png" alt="Customer Profiles" class="img-fluid mb-3">
                                <h4>Customer & POS Management</h4>
<ul>
   <li>Intelligent POS with built-in payment gateway support</li>
   <li>Mobile POS for book fairs, pop-ups, and exhibitions</li>
   <li>Smart customer segmentation and interaction tracking</li>
</ul>

                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- 2. Segment Customers -->
                  <div class="col-md-3 col-sm-6">
                     <div class="boxes mb-4 flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/ok2.png" alt="Segment Customers" class="img-fluid mb-3">
                                <h4>Billing & Checkout</h4>
<ul>
   <li>Quick GST-ready invoice generation</li>
   <li>Smooth handling of multiple billing counters</li>
   <li>Complete billing history and transaction records</li>
</ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- 3. Track Customer Interactions -->
                  <div class="col-md-3 col-sm-6">
                     <div class="boxes mb-4 flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/ok3.png" alt="Track Interactions" class="img-fluid mb-3">
                                <h4>Advanced Inventory Control</h4>
<ul>
   <li>Track books by author, genre, publisher, price, and edition</li>
   <li>Automatic replenishment for fast-moving titles</li>
   <li>Real-time inventory monitoring</li>
</ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- 4. Manage Appointments and Fittings -->
                  <div class="col-md-3 col-sm-6">
                     <div class="boxes mb-4 flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/ok4.png" alt="Manage Appointments" class="img-fluid mb-3">
                                <h4>Centralized Accounting</h4>
<ul>
   <li>Unified accounting for all branches</li>
   <li>Auto-managed profit & loss, ledgers, and financial summaries</li>
   <li>Purchase and sales history tracking</li>
</ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- 5. Purchase History -->
                  <div class="col-md-3 col-sm-6">
                     <div class="boxes mb-4 flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/ok5.png" alt="Purchase History" class="img-fluid mb-3">
                                <h4>Barcode & Label Management</h4>
<ul>
   <li>Create ISBN-based EAN-13 and UPC barcodes</li>
   <li>Print labels for book variants and editions</li>
</ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- 6. Loyalty & Membership Programs -->
                  <div class="col-md-3 col-sm-6">
                     <div class="boxes mb-4 flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/ok6.png" alt="Loyalty Program" class="img-fluid mb-3">
                                <h4>Customer Loyalty & Engagement</h4>
<ul>
   <li>Loyalty points and membership programs</li>
   <li>Personalized offers and promotional campaigns</li>
   <li>Customer feedback and review collection</li>
</ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- 7. Send Offers & Notifications -->
                  <div class="col-md-3 col-sm-6">
                     <div class="boxes mb-4 flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/ok7.png" alt="Send Offers" class="img-fluid mb-3">
                               <h4>Online Store & Omnichannel Sales</h4>
<ul>
   <li>Launch an online bookstore with Digify or connect to Shopify / WooCommerce</li>
   <li>Sync online and offline inventory automatically</li>
   <li>Support for multiple digital payment options</li>
</ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- 8. Generate Invoices & Receipts -->
                  <div class="col-md-3 col-sm-6">
                     <div class="boxes mb-4 flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/ok8.png" alt="Invoices" class="img-fluid mb-3">
                                 <h4>Tax & Compliance</h4>
<ul>
   <li>Automatic tax calculations</li>
   <li>GST reporting and return readiness</li>
   <li>Fully compliant invoice management</li>
</ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- 9. Analytics & Reports -->
                  <div class="col-md-3 col-sm-6">
                     <div class="boxes mb-4 flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/ok9.png" alt="Analytics Reports" class="img-fluid mb-3">
                                <h4>Reports & Business Insights</h4>
<ul>
   <li>Access 150+ MIS and analytical reports</li>
   <li>Interactive dashboards for smarter business decisions</li>
   <li>Stock audits and verification through mobile app</li>
</ul>
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
                                 <img src="assets/images/ok10.png" alt="Analytics Reports" class="img-fluid mb-3">
                               <h4>Customer Communication</h4>
<ul>
   <li>WhatsApp integration for offers, updates, and new arrivals</li>
   <li>Instant broadcast of bestsellers and promotions</li>
</ul>
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
<section class="choose-digify-sec core-features-sec">
   <div class="container">
      <div class="row">
         <div class="col-md-12">
            <div class="why-choose-grid">
               <div class="grid-item">
                  <h3>🏬 Handle Multiple Branches</h3>
                  <p>Operate all your garment and apparel store branches from a single, centralized dashboard. Manage sales, stock, and customer data seamlessly across every outlet.</p>
               </div>
               <div class="grid-item">
                  <h3>🔄 Stock Transfer &amp; Request</h3>
                  <p>Seamlessly transfer stock between multiple store branches with just a few clicks. Simplify inventory movement and ensure availability across all locations.</p>
               </div>
               <div class="grid-item">
                  <h3>📊 Central Reporting &amp; Analytics</h3>
                  <p>Get real-time, consolidated reports on a single dashboard. Track sales, stock, and performance across all your garment stores for better decision-making.</p>
               </div>
               <div class="grid-item">
                  <h3>🌐 Centralized Management</h3>
                  <p>Control every branch of your garment store chain from one platform. Manage billing, sales, inventory, and operations in a unified system.</p>
               </div>
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
                  <img src="assets/images/img219.jpg" alt="Local &amp; National SEO Expertise">
               </figure>
            </div>
         </div>
        <div class="col-md-7 order-md-1">
   <div class="heading-wrap text-start">
      <h2>One Smart Platform for Every Stage of <span>Your Bookstore Business</span></h2>
      <p>
         Our all-in-one bookstore management system is designed to keep your operations
         smooth, organized, and profitable—both in-store and online.
      </p>
   </div>
   <div class="expertise-wrap bridal-wrap">
      <ul>
         <li>High-performance POS for fast and accurate billing</li>
         <li>Centralized control of multiple bookstore locations from anywhere</li>
         <li>Intelligent stock tracking with barcode support</li>
         <li>Flexible payment options for seamless checkout</li>
         <li>Insightful reports to guide planning and business decisions</li>
         <li>Easy setup and management of your online bookstore</li>
      </ul>
   </div>
</div>

      </div>
   </div>
</section>
<section class="industry new-cards pt-60">
   <div class="container">
      <div class="row">
         <div class="col-md-12">
            <div class="heading-wrap">
               <h2>How to Use Digify Soft Solutions for Your Bookstore</h2>
               <p>Our ERP for bookstores is designed to be simple, efficient, and practical so you can focus on serving readers while we handle the backend.</p>
            </div>
            <div class="desktop-industries">
               <div class="row justify-content-center">
                  <!-- 1. Initial Setup -->
                  <div class="col-lg-4 col-md-6 col-6">
                     <div class="boxes mb-4 flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/to1.png" alt="Customer Profiles" class="img-fluid mb-3">
                                 <h4>1. Initial Setup</h4>
                                 <ul class="mb20">
                                    <li>Enter bookstore details (branch, GST, staff login).</li>
                                    <li>Upload your catalog of books with ISBN, author, genre, publisher, edition, and price.</li>
                                    <li>Add stock levels and barcode data.</li>
                                 </ul>
                                 <p>👉 Example: Import your entire “Fiction” and “Educational” book catalog to the system at once.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- 2. Billing & Checkout -->
                  <div class="col-lg-4 col-md-6 col-6">
                     <div class="boxes mb-4 flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/to2.png" alt="Segment Customers" class="img-fluid mb-3">
                                 <h4>2. Billing & Checkout</h4>
                                 <ul class="mb20">
                                    <li>Scan product barcode or select garment from catalog.</li>
                                    <li>Add to bill and choose payment mode (Cash, Card, UPI, Wallet, etc.).</li>
                                    <li>Print bill OR share instantly via SMS/WhatsApp.</li>
                                    <li>Generate GST-compliant invoice automatically.</li>
                                 </ul>
                                 <p>👉 Example: A customer buys 2 shirts and 1 trouser → You scan, select UPI payment, and send the bill on WhatsApp in seconds.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- 3. Inventory Management -->
                  <div class="col-lg-4 col-md-6 col-6">
                     <div class="boxes mb-4 flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/to3.png" alt="Track Interactions" class="img-fluid mb-3">
                                 <h4>3. Inventory Management</h4>
                                 <ul class="mb20">
                                    <li>Track garment stock by brand, size, color, style, or category.</li>
                                    <li>Set minimum stock alerts for fast-moving items.</li>
                                    <li>Automate reorders for best-selling apparel.</li>
                                    <li>Use stock transfer between branches when needed.</li>
                                 </ul>
                                 <p>👉 Example: If Store A has extra jeans and Store B is out of stock → transfer stock in ERP with one click.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- 4. Customer Management -->
                  <div class="col-lg-4 col-md-6 col-6">
                     <div class="boxes mb-4 flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/to4.png" alt="Manage Appointments" class="img-fluid mb-3">
                                 <h4>4. Customer Management</h4>
                                 <ul class="mb20">
                                    <li>Maintain a single customer database across branches.</li>
                                    <li>Store purchase history & preferences.</li>
                                    <li>Send offers, discounts, and promotions via WhatsApp or SMS.</li>
                                    <li>Run loyalty programs and reward repeat customers.</li>
                                 </ul>
                                 <p>👉 Example: Send a 10% discount coupon to all customers who bought festive wear last Diwali.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- 5. Accounting & Finance -->
                  <div class="col-lg-4 col-md-6 col-6">
                     <div class="boxes mb-4 flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/to5.png" alt="Purchase History" class="img-fluid mb-3">
                                 <h4>5. Accounting & Finance</h4>
                                 <ul class="mb20">
                                    <li>Manage P&L, balance sheet, ledgers inbuilt into the software.</li>
                                    <li>Track daily sales, expenses, and profit margins.</li>
                                    <li>Export financial reports for GST filing and audits.</li>
                                 </ul>
                                 <p>👉 Example: At month-end, download GST report and directly use it for tax filing.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- 6. Analytics & Reports -->
                  <div class="col-lg-4 col-md-6 col-6">
                     <div class="boxes mb-4 flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/to6.png" alt="Purchase History" class="img-fluid mb-3">
                                 <h4>6. Analytics & Reports</h4>
                                 <ul class="mb20">
                                    <li>Access 150+ MIS reports for sales, stock, and customer insights.</li>
                                    <li>Identify best-selling styles & slow-moving products.</li>
                                    <li>Improve forecasting & purchase planning.</li>
                                 </ul>
                                 <p>👉 Example: ERP shows “Blue Denim Jeans” sold 120 units last month → reorder in advance to avoid stockouts.</p>
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
<section class="pricing-section py-5">
   <div class="container">
      <div class="heading-wrap text-center">
         <h2>Pricing & Plans – Choose Your <span>Bookstore Software Plan</span></h2>
         <p>Smart, simple, and affordable – pay only for what your bookstore needs.</p>
      </div>
      <div class="row justify-content-center">
         <!-- Basic Plan -->
         <div class="col-md-4 mb-4">
            <div class="pricing-card basic">
               <div class="pricing-header">
                  <div class="plan-icon-wrap bg-success">
                     <i class="bi bi-book"></i>
                  </div>
                  <h3>Basic Plan</h3>
                  <p>For small bookstores starting their digital journey.</p>
               </div>
               <ul class="pricing-features">
                  <li>✔ Smart POS Billing (GST-Ready)</li>
                  <li>✔ Basic Inventory Management (ISBN, Genre, Author)</li>
                  <li>✔ Barcode & Label Generator</li>
                  <li>✔ WhatsApp / SMS Billing</li>
                  <li>✔ Single Store Setup</li>
                  <li>✔ Basic Reports & Analytics</li>
                  <li>👉 Ideal for single-location bookstores.</li>
               </ul>
               <div class="price">₹1,999 <span>/month</span></div>
            </div>
         </div>
         <!-- Standard Plan -->
         <div class="col-md-4 mb-4">
            <div class="pricing-card standard">
               <div class="pricing-header">
                  <div class="plan-icon-wrap bg-primary">
                     <i class="bi bi-graph-up-arrow"></i>
                  </div>
                  <h3>Standard Plan</h3>
                  <p>For growing bookstores managing multiple categories & customers.</p>
               </div>
               <ul class="pricing-features">
                  <li>✔ Everything in Basic, plus:</li>
                  <li>✔ Multi-Payment Modes (UPI, Cards, Wallets)</li>
                  <li>✔ Central Accounting & Ledger</li>
                  <li>✔ Loyalty Programs & Membership Management</li>
                  <li>✔ Discounts & Offers Management</li>
                  <li>✔ 150+ Advanced Reports & Analytics</li>
                  <li>✔ Shopify & WooCommerce Integration</li>
                  <li>👉 Perfect for expanding bookstores.</li>
               </ul>
               <div class="price">₹4,999 <span>/month</span></div>
            </div>
         </div>
         <!-- Premium Plan -->
         <div class="col-md-4 mb-4">
            <div class="pricing-card premium">
               <div class="pricing-header">
                  <div class="plan-icon-wrap bg-danger">
                     <i class="bi bi-building"></i>
                  </div>
                  <h3>Premium Plan</h3>
                  <p>The ultimate ERP solution for multi-store bookstore chains.</p>
               </div>
               <ul class="pricing-features">
                  <li>✔ Everything in Standard, plus:</li>
                  <li>✔ Multi-Store ERP Dashboard</li>
                  <li>✔ Centralized Customer Database</li>
                  <li>✔ Stock Transfer & Inter-Branch Requests</li>
                  <li>✔ Warehouse Management & Restocking Alerts</li>
                  <li>✔ mPOS for Mobile & Exhibition Sales</li>
                  <li>✔ Dedicated Account Manager & 24/7 Priority Support</li>
                  <li>👉 Schedule a Free Demo to find the best plan for your bookstore.</li>
               </ul>
               <div class="price">Custom Pricing</div>
            </div>
         </div>
      </div>
   </div>
</section>
<section class="bridal-store-sec">
   <div class="container">
      <div class="row">
         <div class="col-md-12">
            <div class="bridal-store">
               <h2>Digify Soft Solutions – Scripting Real-Life Success Stories for Bookstore Retailers</h2>
               <p>We built Digify Soft Solutions to reduce your in-store workload, give you a platform for online sales, and help you keep customers falling in love with your bookstore!</p>
               <p>We understand that running a bookstore is no easy task. From arranging bookshelves, managing book records, handling daily sales, and maintaining rental registers to ordering new bestsellers, sending customer offers, tracking accounts, and filing GST returns — a bookstore has a lot to juggle</p>
            </div>
         </div>
      </div>
   </div>
</section>
<!--  faq template section -->
<section class="faq-template py-5">
   <div class="container">
      <div class="heading-wrap text-center">
         <h2> Frequently Asked Questions <span> (FAQ) </span> </h2>
      </div>
      <div class="row">
         <div class="col-md-12">
            <div class="faq-section">
               <div class="accordion" id="faqAccordion">
                  <!-- FAQ 1 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading1">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                        What is Digify Soft Solutions Bookstore Software?
                        </button>
                     </h2>
                     <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           It’s a cloud-based ERP & POS software designed for bookstores to manage billing, inventory, CRM, multi-branch operations, and online sales — all in one place.
                        </div>
                     </div>
                  </div>
                  <!-- FAQ 2 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading2">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                        Is it user-friendly?
                        </button>
                     </h2>
                     <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           Yes. Digify is intuitive and easy to use, with quick onboarding and free staff training to help your bookstore get started smoothly.
                        </div>
                     </div>
                  </div>
                  <!-- FAQ 3 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading3">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                        Can I manage multiple bookstore branches?
                        </button>
                     </h2>
                     <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           Yes. With the Premium Plan, you can manage multiple branches, transfer stock between locations, access centralized reports, and maintain a unified customer database.
                        </div>
                     </div>
                  </div>
                  <!-- FAQ 4 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading4">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                        Is it GST-compliant?
                        </button>
                     </h2>
                     <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           Absolutely. All invoices are GST-ready, supporting automatic GST calculations, E-Invoicing, and seamless tax filing for your bookstore.
                        </div>
                     </div>
                  </div>
                  <!-- FAQ 5 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading5">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                        Can I sell books online using this software?
                        </button>
                     </h2>
                     <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           Yes. Digify integrates with Shopify and WooCommerce, or you can use its custom e-commerce platform to sync online and offline bookstore inventory in real time.
                        </div>
                     </div>
                  </div>
                  <!-- FAQ 6 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading6">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                        Does it support mobile POS (mPOS)?
                        </button>
                     </h2>
                     <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           Yes. You can run transactions on mobile devices at exhibitions, pop-up bookstores, or events using Digify’s mPOS functionality.
                        </div>
                     </div>
                  </div>
                  <!-- FAQ 7 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading7">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                        How can it help me increase customer retention?
                        </button>
                     </h2>
                     <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           Digify helps retain customers through loyalty points, personalized offers, membership programs, and automated WhatsApp marketing campaigns.
                        </div>
                     </div>
                  </div>
                  <!-- FAQ 8 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading8">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                        What kind of reports can I generate?
                        </button>
                     </h2>
                     <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           You’ll get 150+ reports including sales trends, top-selling books, stock alerts, profit & loss statements, and consolidated multi-branch analytics.
                        </div>
                     </div>
                  </div>
                  <!-- FAQ 9 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading9">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                        Can I customize the software for my bookstore?
                        </button>
                     </h2>
                     <div id="collapse9" class="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           Yes. You can customize billing formats, promotions, loyalty programs, and inventory settings to perfectly match your bookstore’s workflow.
                        </div>
                     </div>
                  </div>
                  <!-- FAQ 10 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading10">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                        What support is provided if I face issues?
                        </button>
                     </h2>
                     <div id="collapse10" class="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           We offer 24/7 support via chat, email, and phone. Premium clients get priority service with a dedicated account manager to resolve issues quickly.
                        </div>
                     </div>
                  </div>
               </div>
               <!-- /accordion -->
            </div>
         </div>
      </div>
   </div>
</section>
<!-- faq template section -->
<?php include 'footer.php'; ?>