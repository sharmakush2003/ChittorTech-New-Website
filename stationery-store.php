<!-- header -->
     <?php
  include 'db.php';
  include 'fetch_meta.php';

  $pageMeta = getPageMeta('stationery-store');
  $pageTitle = $pageMeta['page_title'] ?? 'stationery-store';
  $pageDescription = $pageMeta['page_description'] ?? '';
  $pageKeywords = $pageMeta['page_keywords'] ?? '';

 include 'top.php';
include 'header.php';
?>
<!-- header -->
<!-- inner banner section start here  -->
<section class="inner-banner-sec">
   <div class="container">
      <div class="row align-items-center">
         <div class="col-md-7">
            <div class="inner-banner-wrap">
               <img src="assets/images/Banner-2.webp">
               <div class="inner-banner-content">
                  <h1>India’s #1 AI-Powered Cloud Stationery Management Software</h1>
                  <h4>Digify Soft Solutions delivers an intelligent POS & ERP solution designed specifically for stationery stores, helping you run operations faster, smarter, and with complete control.</h4>
                  <p>Manage billing, inventory, CRM, multi-store operations, and online stationery sales from a single AI-driven, cloud-based platform built to scale your business effortlessly.</p>
                  <a class="schedule-btn" href="contact-us.php">👉 Schedule a Free Demo Today</a>
               </div>
            </div>
         </div>
         <div class="col-md-5">
            <div class="inner-banner-img">
               <figure>
                  <img src="assets/images/Cloud-Stationery-Management.png">
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

   <!-- Smart Inventory Control -->
   <div class="col-md-4 col-sm-6">
      <div class="key-box">
         <h3>Smart Inventory Control</h3>
         <p>
            Monitor store and warehouse stock in real time, keep items organized,
            and receive intelligent alerts before fast-moving products run out.
         </p>
         <ul>
            <li>Centralized stock control across multiple locations</li>
            <li>Brand-based product tracking</li>
            <li>Mobile app–based stock verification</li>
            <li>Barcode & label creation tools</li>
            <li>Intelligent reorder notifications</li>
         </ul>
      </div>
   </div>

   <!-- Smooth & Flexible Billing -->
   <div class="col-md-4 col-sm-6">
      <div class="key-box">
         <h3>Smooth & Flexible Billing</h3>
         <p>
            Create clean, compliant invoices in seconds, apply offers instantly,
            and offer customers multiple convenient payment options.
         </p>
         <ul>
            <li>Support for UPI, cards, wallets, and cash</li>
            <li>Quick handling of returns and replacements</li>
            <li>Instant invoice sharing via WhatsApp or SMS</li>
            <li>Automatic ledger updates for accurate accounting</li>
         </ul>
      </div>
   </div>

   <!-- Customer-Focused CRM Tools -->
   <div class="col-md-4 col-sm-6">
      <div class="key-box">
         <h3>Customer-Focused CRM Tools</h3>
         <p>
            Strengthen customer relationships and increase repeat sales
            with smart engagement and loyalty features.
         </p>
         <ul>
            <li>Automated birthday and special-day greetings</li>
            <li>Digital gift cards, coupons, and promotions</li>
            <li>Invoice links with built-in feedback collection</li>
            <li>Membership programs with reward point tracking</li>
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
               <h2>Feature-Rich Stationery Software</h2>
            </div>
            <div class="desktop-industries">
               <div class="row justify-content-center">

                  <!-- POS System -->
                  <div class="col-md-3 col-sm-6">
                     <div class="boxes mb-4 flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/r1.png" alt="POS System" class="img-fluid mb-3">
                                   <h3>AI Smart POS & Payments</h3>
         <ul>
            <li>AI-assisted billing for faster checkout</li>
            <li>Accept UPI, cards, wallets, and cash</li>
            <li>Mobile POS for fairs and temporary counters</li>
         </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Stock Management -->
                  <div class="col-md-3 col-sm-6">
                     <div class="boxes mb-4 flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/r2.png" alt="Stock Management" class="img-fluid mb-3">
                                 <h3>AI-Driven Stock Control</h3>
         <ul>
            <li>Automatic tracking of all stationery items</li>
            <li>Smart alerts before stock runs low</li>
            <li>Easy handling of thousands of SKUs</li>
         </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Billing -->
                  <div class="col-md-3 col-sm-6">
                     <div class="boxes mb-4 flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/r3.png" alt="Billing" class="img-fluid mb-3">
                                 <h3>AI Billing & Counter Management</h3>
         <ul>
            <li>AI-generated GST & non-GST invoices</li>
            <li>Multiple billing counters without delays</li>
            <li>Fast and error-free billing flow</li>
         </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Supplier Management -->
                  <div class="col-md-3 col-sm-6">
                     <div class="boxes mb-4 flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/r4.png" alt="Supplier Management" class="img-fluid mb-3">
                                  <h3>AI Supplier & Purchase Handling</h3>
         <ul>
            <li>Organized supplier records</li>
            <li>Smart purchase tracking</li>
            <li>AI-based reorder suggestions</li>
         </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Godown/Warehouse Management -->
                  <div class="col-md-3 col-sm-6">
                     <div class="boxes mb-4 flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/r5.png" alt="Warehouse Management" class="img-fluid mb-3">
                                <h3>AI Warehouse & Branch Inventory</h3>
         <ul>
            <li>Single AI dashboard for godown & stores</li>
            <li>Quick stock movement between locations</li>
         </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Financial Management -->
                  <div class="col-md-3 col-sm-6">
                     <div class="boxes mb-4 flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/r6.png" alt="Financial Management" class="img-fluid mb-3">
                                 <h3>AI Financial & Accounts System</h3>
         <ul>
            <li>AI-monitored expenses, income & profit</li>
            <li>Auto-updated ledgers and accounts</li>
         </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Label & Barcode Generator -->
                  <div class="col-md-3 col-sm-6">
                     <div class="boxes mb-4 flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/r7.png" alt="Barcode Generator" class="img-fluid mb-3">
                                  <h3>AI Barcode & Label Creation</h3>
         <ul>
            <li>Instant barcode & label generation</li>
            <li>Supports all product types and variations</li>
         </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Online Store Management -->
                  <div class="col-md-3 col-sm-6">
                     <div class="boxes mb-4 flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/r8.png" alt="Online Store" class="img-fluid mb-3">
                                 <h3>AI Online Store Management</h3>
         <ul>
            <li>AI-enabled online store setup</li>
            <li>Automatic sync of online & offline stock</li>
         </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Stock Verification (Repeat image b1) -->
                  <div class="col-md-3 col-sm-6">
                     <div class="boxes mb-4 flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/r9.png" alt="Stock Verification" class="img-fluid mb-3">
                                <h3>AI WhatsApp Communication</h3>
         <ul>
            <li>Automatic bills, offers & updates</li>
            <li>Real-time customer notifications</li>
         </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- WhatsApp Integration (Repeat image b2) -->
                  <div class="col-md-3 col-sm-6">
                     <div class="boxes mb-4 flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/r10.png" alt="WhatsApp Integration" class="img-fluid mb-3">
                                          <h3>AI Offers & Loyalty Programs</h3>
         <ul>
            <li>Smart discounts and promotional campaigns</li>
            <li>Automatic loyalty points & memberships</li>
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

<section class="pricing-section py-5">
   <div class="container">
      <div class="heading-wrap text-center">
         <h2>Pricing & Plans – Choose Your <span>Stationery Software Plan</span></h2>
         <p>Flexible plans to fit small stores, growing shops, and multi-branch chains.</p>
      </div>
      <div class="row justify-content-center">
         <!-- Basic Plan -->
         <div class="col-md-4 mb-4">
            <div class="pricing-card basic">
               <div class="pricing-header">
                  <div class="plan-icon-wrap bg-success">
                     <i class="bi bi-pencil-square"></i>
                  </div>
                  <h3>Basic Plan</h3>
                  <p>For small stationery stores starting their digital journey.</p>
               </div>
               <ul class="pricing-features">
                  <li>✔ Smart POS Billing</li>
                  <li>✔ Basic Inventory Management (Items, Categories, Brands)</li>
                  <li>✔ Barcode & Label Generator</li>
                  <li>✔ WhatsApp / SMS Billing</li>
                  <li>✔ Single Store Setup</li>
                  <li>✔ Basic Reports & Analytics</li>
                  <li>👉 Ideal for single-location stores.</li>
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
                  <p>For growing stores managing multiple categories & customers.</p>
               </div>
               <ul class="pricing-features">
                  <li>✔ Everything in Basic, plus:</li>
                  <li>✔ Multi-Payment Modes (UPI, Cards, Wallets)</li>
                  <li>✔ Central Accounting & Ledger</li>
                  <li>✔ Loyalty Programs & Membership Management</li>
                  <li>✔ Discounts & Offers Management</li>
                  <li>✔ 150+ Advanced Reports & Analytics</li>
                  <li>✔ Shopify & WooCommerce Integration</li>
                  <li>👉 Perfect for expanding stores.</li>
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
                  <p>For multi-store chains & franchises looking for a centralized ERP solution.</p>
               </div>
               <ul class="pricing-features">
                  <li>✔ Everything in Standard, plus:</li>
                  <li>✔ Multi-Store Centralized ERP Dashboard</li>
                  <li>✔ Unified Customer Database</li>
                  <li>✔ Stock Transfer & Inter-Branch Requests</li>
                  <li>✔ Warehouse & Godown Management</li>
                  <li>✔ mPOS for mobile counters & fairs</li>
                  <li>✔ Dedicated Account Manager & 24/7 Support</li>
                  <li>👉 Schedule a Free Demo to find the best plan for your store.</li>
               </ul>
               <div class="price">Custom Pricing <span>(Contact Sales)</span></div>
            </div>
         </div>
      </div>
   </div>
</section>


<section class="choose-digify-sec core-features-sec">
   <div class="container">
      <div class="heading-wrap text-center">
         <h2>Key Features – Why Choose <span>Our Stationery Software</span></h2>
         <p>Smart solutions to manage small stores, growing shops, and multi-branch stationery chains efficiently.</p>
      </div>
      <div class="row">
         <div class="col-md-12">
            <div class="why-choose-grid">
               <div class="grid-item">
                  <h3>🏬 Manage Multiple Store Branches</h3>
                  <p>Operate all your stationery store branches from a single, centralized dashboard. Track sales, inventory, and customer data seamlessly across every outlet.</p>
               </div>
               <div class="grid-item">
                  <h3>🔄 Stock Transfers & Requests</h3>
                  <p>Transfer inventory between branches effortlessly. Ensure products are available at every store and avoid stockouts with minimal effort.</p>
               </div>
               <div class="grid-item">
                  <h3>📊 Centralized Reporting & Analytics</h3>
                  <p>Access real-time, consolidated reports on sales, inventory, and performance across all branches. Make informed decisions to grow your stationery business.</p>
               </div>
               <div class="grid-item">
                  <h3>🌐 Unified Management Platform</h3>
                  <p>Manage billing, sales, inventory, and operations for all stores in one platform. Streamline your stationery business workflow efficiently.</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>


<section class="why-choose-sec stationery-sec">
   <div class="container">
      <div class="row align-items-center">
         <div class="col-md-5 order-md-2">
            <div class="expertise-img text-start">
               <figure>
                  <img src="assets/images/img221.jpg" alt="Stationery Store Software">
               </figure>
            </div>
         </div>
        <div class="col-md-7 order-md-1">
   <div class="heading-wrap text-start">
      <h2>One AI-Powered System for <span>Complete Stationery Business Management</span></h2>
      <p>
         Digify Soft Solutions brings together billing, inventory, CRM, and online selling
         into one smart platform that helps your stationery business run smoothly and grow steadily.
      </p>
   </div>

   <div class="expertise-wrap stationery-wrap">
      <ul>
         <li>AI-enabled POS for fast and accurate billing</li>
         <li>Centralized control of multiple stationery outlets from any location</li>
         <li>AI-driven inventory tracking with barcode support</li>
         <li>Easy acceptance of all major payment options</li>
         <li>AI-based reports for demand planning and sales forecasting</li>
         <li>Simple setup and management of your online stationery store</li>
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
               <h2>Why Digify Soft Solutions?</h2>
            </div>
            <div class="desktop-industries">
               <div class="row justify-content-center">
                  <!-- 1. Initial Setup -->
                  <div class="col-lg-4 col-md-6 col-6">
                     <div class="boxes mb-4 flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/on1.png" alt="Customer Profiles" class="img-fluid mb-3">
                                 <h4> Client Satisfaction</h4>
                                 <p>Thousands of happy clients trust us to power their stationery businesses.</p>
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
                                 <img src="assets/images/on2.png" alt="Segment Customers" class="img-fluid mb-3">
                                 <h4>Prompt Support</h4>
                                 <p>Our dedicated support team is always available to deliver an unmatched service experience.</p>
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
                                 <img src="assets/images/on3.png" alt="Track Interactions" class="img-fluid mb-3">
                                 <h4>Training & Implementation</h4>
                                 <p>Enjoy hassle-free onboarding with complete training and smooth implementation — at no extra cost.</p>
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
                                 <img src="assets/images/on4.png" alt="Manage Appointments" class="img-fluid mb-3">
                                 <h4> Cloud-Based Software</h4>
                                 <p>Access your stationery store dashboard from anywhere, anytime, and on any device.</p>
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
                                 <img src="assets/images/on5.png" alt="Purchase History" class="img-fluid mb-3">
                                 <h4> Trusted Experience</h4>
                                 <p>Years of expertise in retail solutions designed specifically for stationery shops.</p>
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
                                 <img src="assets/images/on6.png" alt="Purchase History" class="img-fluid mb-3">
                                 <h4>User-Friendly Design</h4>
                                 <p>Built with simplicity in mind so your staff can learn and use it quickly.</p>
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
                                 <img src="assets/images/on7.png" alt="Purchase History" class="img-fluid mb-3">
                                 <h4> Affordable & Feature-Rich</h4>
                                 <p>Get the most advanced and cost-effective stationery store solution in the market.</p>
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

<section class="manufacturing-key section-bg">
   <div class="container">
      <div class="heading-wrap">
          <h2>How Customers Can Use Digify Soft Solutions  <span>Stationery Billing Software</span> </h2>
          <p>Digify Soft Solutions brings you a complete stationery billing software to simplify your store operations, boost efficiency, and improve customer satisfaction. Here’s how your store staff and managers can use it effectively:</p>
      </div>
      <div class="row justify-content-center gy-4">
          <!-- 1. Quick & Accurate Billing -->
          <div class="col-md-4 col-sm-6">
              <div class="key-box">
                  <h3>Quick & Accurate Billing</h3>
                  <ul>
                     <li>Scan or select stationery items instantly</li>
                     <li>Multiple payment options: Cash, Card, UPI, Wallet</li>
                     <li>Generate GST-compliant bills and send via SMS/Email</li>
                  </ul>
              </div>
          </div>

          <!-- 2. Efficient Inventory Management -->
          <div class="col-md-4 col-sm-6">
              <div class="key-box">
                  <h3>Efficient Inventory Management</h3>
                  <ul>
                     <li>Automatically track stock and get low-stock alerts</li>
                     <li>Organize products: Notebooks, pens, office supplies, etc.</li>
                     <li>Manage inventory across multiple stores from one dashboard</li>
                  </ul>
              </div>
          </div>

          <!-- 3. Customer Relationship Management -->
          <div class="col-md-4 col-sm-6">
              <div class="key-box">
                  <h3>Customer Relationship Management</h3>
                  <ul>
                     <li>Maintain customer records and purchase history</li>
                     <li>Apply loyalty points and discounts for repeat customers</li>
                     <li>Send updates, invoices, and promotions via SMS or email automatically</li>
                  </ul>
              </div>
          </div>

          <!-- 4. Insightful Reports & Analytics -->
          <div class="col-md-4 col-sm-6">
              <div class="key-box">
                  <h3>Insightful Reports & Analytics</h3>
                  <ul>
                     <li>Track sales, profits, and high-performing products</li>
                     <li>Analyze fast-moving and slow-selling items</li>
                     <li>Forecast stock and plan purchases with data-driven insights</li>
                  </ul>
              </div>
          </div>

          <!-- 5. Online Integration & Expansion -->
          <div class="col-md-4 col-sm-6">
              <div class="key-box">
                  <h3>Online Integration & Expansion</h3>
                  <ul>
                     <li>Launch and manage your online stationery store easily</li>
                     <li>Sync inventory across physical and online stores</li>
                     <li>Access and manage your store anytime, anywhere via cloud</li>
                  </ul>
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
               <h2>Digify Soft Solutions: Smarter, Profitable Stationery Store Management</h2>
               <p>Showcase your best stationery products while leaving workflow management, billing, and inventory control to Digify Soft Solutions.</p>
               <p>Running a stationery store comes with its challenges—from managing the heavy rush during school seasons to competing with online retailers. With countless product variants, keeping track of inventory, sales, and customer needs can be overwhelming.</p>
            </div>
         </div>
      </div>
   </div>
</section>

<section class="clothing-stores-sec pt-60">
  <div class="container">
       <div class="row align-items-center">
          <div class="col-md-6">
              <div class="clothing-stores-text">
                  <h2>Digify Soft Solutions offers a complete solution for stationery retailers:</h2>
                  <ul>
                     <li><strong>Inventory Management:</strong> Track every product effortlessly, reduce stock-outs, and stay organized.</li>
                     <li><strong>Point of Sale (POS):</strong> Generate bills quickly, handle multiple payment modes, and speed up checkout.</li>
                     <li><strong>Customer Relationship Management (CRM):</strong> Maintain customer records, offer loyalty rewards, and increase repeat business.</li>
                     <li><strong>Accounting:</strong> Simplify bookkeeping and GST-compliant invoicing.</li>
                     <li><strong>Multi-Store Management & Omnichannel eCommerce:</strong> Manage multiple outlets and expand online seamlessly.</li>
                  </ul>
                  <p>Our all-in-one software ensures your stationery business runs efficiently, stays profitable, and is free from operational worries.</p>
              </div>
          </div>
          <div class="col-md-6">
              <div class="clothing-stores-img">
                  <figure>
                     <img src="assets/images/img222.jpg">
                  </figure>
              </div>
          </div>
      </div>
  </div>
</section>

<!--  faq template section -->
<section class="faq-template">
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
                        What is Digify Soft Solutions Stationery Software?
                        </button>
                     </h2>
                     <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           It’s a cloud-based ERP & POS software designed for stationery stores to manage billing, inventory, CRM, multi-store operations, and online sales — all from a single platform.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 2 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading2">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                        Is it easy to use?
                        </button>
                     </h2>
                     <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           Yes. The software is intuitive and user-friendly, with quick onboarding and training for your staff to get started smoothly.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 3 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading3">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                        Can I manage multiple branches?
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
                           Absolutely. Digify automates GST invoicing, including CGST & SGST, and supports seamless returns filing for your stationery store.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 5 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading5">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                        Can I sell stationery online?
                        </button>
                     </h2>
                     <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           Yes. Digify lets you build a custom e-commerce store or integrate with Shopify/WooCommerce to sync your inventory for online sales.
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
                           Yes. You can process payments anywhere using mobile devices for exhibitions, pop-up stores, or mobile counters.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 7 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading7">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                        How can it help increase customer loyalty?
                        </button>
                     </h2>
                     <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           Digify boosts customer loyalty through reward points, membership programs, personalized offers, and automated notifications via WhatsApp or email.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 8 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading8">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                        What types of reports can I generate?
                        </button>
                     </h2>
                     <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           Generate 150+ reports including sales trends, stock alerts, profit & loss statements, and multi-branch analytics for better decision-making.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 9 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading9">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                        Can I customize the software for my store?
                        </button>
                     </h2>
                     <div id="collapse9" class="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           Yes. Customize billing formats, promotions, inventory settings, and loyalty programs to match your stationery store workflow.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 10 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading10">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                        What support is provided?
                        </button>
                     </h2>
                     <div id="collapse10" class="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           24/7 support via chat, email, and phone. Premium clients get a dedicated account manager for quick resolution of issues.
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