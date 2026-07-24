      <!-- header -->
          <?php
  include 'db.php';
  include 'fetch_meta.php';

  $pageMeta = getPageMeta('footwear-store');
  $pageTitle = $pageMeta['page_title'] ?? 'footwear-store';
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
                            <h1>India’s Best #1 AI-Powered Footwear Retail Software</h1>
                            <h4>Digify Soft Solutions offers an intelligent POS & ERP system built for modern footwear businesses, combining speed, accuracy, and automation.</h4>
                            <p>Manage your entire operation from one smart platform — AI-driven billing, inventory tracking, customer management, multi-store control, and online sales — all designed to help your footwear brand grow faster and smarter.</p>
                            <a class="schedule-btn" href="contact-us.php">👉 Schedule a Free Demo Today</a>
                        </div>
                     </div>
                 </div>
                 <div class="col-md-5">
                     <div class="inner-banner-img">
                         <figure>
                            <img src="assets/images/AI-Powered-Footwear.png">
                         </figure>
                     </div>
                 </div>
              </div>
          </div>
      </section>
      <!-- inner banner section end here  -->

      <section class="manufacturing-key section-bg">
            <div class="container">
                     <div class="heading-wrap">
                         <h2>Modern Garment Billing POS by <span>Digify Soft Solutions</span> </h2>
                     </div>
               <div class="row justify-content-center gy-4">
                   <!-- Simplified GST Compliance -->
                   <div class="col-md-4 col-sm-6">
                       <div class="key-box">
                           <h3>Simplify Billing & Checkout</h3>
                           <p>Now billing and checkouts are no longer pain points with Digify Soft Solutions’ automated invoicing features and integrated payment gateways, all powered by our advanced POS software.</p>
                           <ul>
                              <li>Quick sales invoices</li>
                              <li>Multiple payment modes</li>
                              <li>UPI integration</li>
                           </ul>
                       </div>
                   </div>

                   <!-- Real-Time Financial Reporting -->
                   <div class="col-md-4 col-sm-6">
                       <div class="key-box">
                           <h3>Smarter Garment Inventory Management</h3>
                           <p>Sort and organize inventory by brand, size, color, and pattern with our intelligent inventory management system. Stay ahead of trends and automate reorders with ease.</p>
                           <ul>
                              <li>Manage product variants</li>
                              <li>Barcode & label generator</li>
                              <li>Stock audit & verification</li>
                           </ul>
                       </div>
                   </div>

                   <!-- Centralized Multi-Store Management -->
                   <div class="col-md-4 col-sm-6">
                       <div class="key-box">
                           <h3>Omnichannel Retail – Online & Offline</h3>
                           <p>Expand your garment business with our omnichannel POS solution. Manage both physical stores and online shops effortlessly with seamless Shopify and WooCommerce integrations.</p>
                           <ul>
                              <li>Easy online store setup</li>
                              <li>Shopify & WooCommerce integration</li>
                              <li>Integrated payment gateways</li>
                           </ul>
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
                              <img src="assets/images/img215.jpg" alt="Local &amp; National SEO Expertise">
                           </figure>
                       </div>
                  </div>
                  <div class="col-md-7 order-md-1">
                      <div class="heading-wrap text-start">
                          <h2>Key  <span>Features</span> </h2>
                       </div>
                       <div class="expertise-wrap bridal-wrap">
                           <ul>
                              <li> <strong>Effortless Billing :</strong> Create invoices with a few clicks and share them instantly via SMS, WhatsApp, or print.</li>

                              <li> <strong>Inbuilt Accounting Modules :</strong> Keep your balance sheet, P&L, ledgers, and bookkeeping accurate with integrated accounting tools.</li>

                              <li> <strong>Organized Clothing Stock :</strong> Categorize and manage stock for Men, Women, Kids or by season (Winter, Summer) and style (Sports, Casual, Party).</li>

                              <li> <strong>Best-Selling Apparel Insights :</strong> Track top-selling products by brand, style, and color, and automate restocking for bestsellers.</li>
                              <li> <strong>Offers & Discount Management :</strong> Easily manage brand promotions, seasonal discounts, and loyalty offers.</li>

                              <li> <strong>Style-Wise Sorting :</strong> Know which designs are trending and discontinue outdated stock with style-based sorting.</li>

                              <li> <strong>WhatsApp Integration  :</strong> Engage with customers directly via WhatsApp for invoices, updates, and promotions.</li>

                              <li> <strong>GST-Ready Billing :</strong> Generate GST-compliant invoices with automated CGST and SGST calculations.</li>

                              <li> <strong>Multi-Counter Billing :</strong> Run multiple billing counters without long queues or delays.</li>

                              <li> <strong>Returns & Exchanges :</strong> Process returns and exchanges seamlessly with instant inventory updates.</li>

                              <li> <strong>Stock Verification :</strong> Verify inventory in real time with our mPOS-enabled stock verification feature.</li>

                              
                              <li> <strong>Real-Time Reports : Get access to 150+ MIS reports and actionable insights to make smarter business decisions.</strong>

                           </ul>
                       </div>
                  </div>
              </div>
          </div>
      </section>

      <section class="cta-section">
         <div class="container">
             <div class="row">
                 <div class="col-md-12">
                     <div class="cta-box">
                        <h2>Start Managing Your Business the Smarter Way – Without Overpaying</h2>
                        <p>A powerful, easy-to-use, and cost-effective solution designed to help your garment business operate efficiently and scale with confidence.</p>
                        <button  onclick="window.location.href='contact-us.php'"   class="cta-button"> Select the Plan That Fits You</button>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      <!-- Clothing Stores section start here -->
      <section class="clothing-stores-sec">
           <div class="container">
                <div class="row align-items-center">
                   <div class="col-md-6 order-md-2">
                       <div class="clothing-stores-text">
                          <h2> Manage Multiple Garment Store <span>Branches with Ease</span> </h2>
                          <p>Operate all your clothing outlet branches, stock, and customer data from one centralized dashboard.</p>
                           <ul>
                              <li><strong>Single Customer Database –</strong> Manage customer details across all locations in one place.</li>
                              <li><strong>Stock Transfer & Requests –</strong> Seamlessly move inventory between branches with minimal effort.</li>
                              <li><strong>Centralized Reporting & Analytics –</strong> Get consolidated business reports for all stores in real-time.</li>
                              <li><strong>Centralized Management –</strong> Control billing, sales, and operations of multiple outlets from one platform.</li>
                              <li><strong>Centralized Inventory Control –</strong> Access complete stock visibility across all branches instantly.</li>
                           </ul>
                       </div>
                   </div>
                   <div class="col-md-6 order-md-1">
                       <div class="clothing-stores-img">
                           <figure>
                              <img src="assets/images/img216.jpg">
                           </figure>
                       </div>
                   </div>
               </div>
           </div>
      </section>

      <!-- Clothing Stores section start here -->
      <section class="clothing-stores-sec">
           <div class="container">
                <div class="row align-items-center">
                   <div class="col-md-6">
                      <div class="clothing-stores-text">
    <h2>One Complete Software for Every Garment Store Operation</h2>
    <p>
        Digify Soft Solutions delivers an all-in-one garment POS and management system that brings every
        daily task—sales, stock, payments, and online selling—onto one smart platform.
    </p>
    <ul>
        <li>High-speed POS for smooth and accurate billing</li>
        <li>Centralized control of multiple outlets from any location</li>
        <li>Real-time inventory tracking with barcode support</li>
        <li>Support for all major payment options</li>
        <li>Intelligent reports with sales trends and future insights</li>
        <li>Fast and easy setup for online garment stores</li>
    </ul>
</div>

                   </div>
                   <div class="col-md-6">
                       <div class="clothing-stores-img">
                           <figure>
                              <img src="assets/images/img217.jpg">
                           </figure>
                       </div>
                   </div>
               </div>
           </div>
      </section>
      <!-- Clothing Stores section end here -->

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
                        <h3>🔄 Stock Transfer & Request</h3>
                        <p>Seamlessly transfer stock between multiple store branches with just a few clicks. Simplify inventory movement and ensure availability across all locations.</p>
                     </div>
                     <div class="grid-item">
                        <h3>📊 Central Reporting & Analytics</h3>
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

     
      <section class="bridal-store-sec">
         <div class="container">
             <div class="row">
                 <div class="col-md-12">
                   <div class="bridal-store">
                      <h2>Digify Soft Solutions that Simplify Garment Store Management</h2>
                      <h5>An All-Inclusive POS Solution for Readymade Garment, Clothing & Fashion Stores</h5>
                      <p>Running a readymade garment or clothing store can be hectic. You’re constantly assisting customers, showcasing multiple garment options, generating bills, and offering different payment modes for a smooth checkout. Slow processes and outdated systems simply don’t work for modern apparel businesses.</p>
                      <p>What you need is a solution that keeps everything organized, speeds up billing, manages inventory, and ensures seamless operations. You need Digify Soft Solutions!</p>
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
                     <h2>How to Use Digify Soft Solutions Garment ERP</h2>
                     <p>Our ERP is designed to be user-friendly, fast, and practical for garment and apparel store owners. Here’s how you can use it effectively:</p>
                  </div>

                  <div class="desktop-industries">
                     <div class="row justify-content-center">

                        <!-- 1. Add Customer Profiles -->
                        <div class="col-lg-4 col-md-6 col-6">
                           <div class="boxes mb-4 flip-container">
                              <div class="flip-card">
                                 <div class="flip-card-inner">
                                    <div class="flip-card-back">
                                       <img src="assets/images/me1.png" alt="Customer Profiles" class="img-fluid mb-3">
                                       <h4>1. Setup & Onboarding</h4>
                                       <ul class="mb20">
                                          <li>Install the software on your system or access it via cloud login.</li>
                                          <li>Add your store details (name, GST info, branch details).</li>
                                          <li>Import or enter your product catalog (with brand, size, color, style, price).</li>
                                          <li>Set up billing counters and user access for staff.</li>
                                       </ul>
                                       <p>👉 Example: If you own 3 apparel outlets, you can create all 3 branches in one dashboard and manage them centrally.</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <!-- 2. Segment Customers -->
                        <div class="col-lg-4 col-md-6 col-6">
                           <div class="boxes mb-4 flip-container">
                              <div class="flip-card">
                                 <div class="flip-card-inner">
                                    <div class="flip-card-back">
                                       <img src="assets/images/me2.png" alt="Segment Customers" class="img-fluid mb-3">
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

                        <!-- 3. Track Customer Interactions -->
                        <div class="col-lg-4 col-md-6 col-6">
                           <div class="boxes mb-4 flip-container">
                              <div class="flip-card">
                                 <div class="flip-card-inner">
                                    <div class="flip-card-back">
                                       <img src="assets/images/me3.png" alt="Track Interactions" class="img-fluid mb-3">
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

                        <!-- 4. Manage Appointments and Fittings -->
                        <div class="col-lg-4 col-md-6 col-6">
                           <div class="boxes mb-4 flip-container">
                              <div class="flip-card">
                                 <div class="flip-card-inner">
                                    <div class="flip-card-back">
                                       <img src="assets/images/me4.png" alt="Manage Appointments" class="img-fluid mb-3">
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

                        <!-- 5. Purchase History -->
                        <div class="col-lg-4 col-md-6 col-6">
                           <div class="boxes mb-4 flip-container">
                              <div class="flip-card">
                                 <div class="flip-card-inner">
                                    <div class="flip-card-back">
                                       <img src="assets/images/me5.png" alt="Purchase History" class="img-fluid mb-3">
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

                        <div class="col-lg-4 col-md-6 col-6">
                           <div class="boxes mb-4 flip-container">
                              <div class="flip-card">
                                 <div class="flip-card-inner">
                                    <div class="flip-card-back">
                                       <img src="assets/images/me6.png" alt="Purchase History" class="img-fluid mb-3">
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

      <section class="clothing-stores-sec software-sec">
           <div class="container">
               <div class="row align-items-center">
                   <div class="col-md-7 order-md-2">
                       <div class="clothing-stores-text software-wrap specialized-box">
                           <h2>Benefits for Customers Using ERP</h2>
                           <ul>
                              <li>Save time with faster billing.</li>
                              <li>Reduce manual errors.</li>
                              <li>Improve customer experience with smooth checkout & WhatsApp billing.</li>
                              <li>Increase sales by tracking top-selling apparel.</li>
                              <li>Get real-time visibility across all store branches.</li>
                           </ul>
                       </div>
                   </div>
                   <div class="col-md-5 order-md-1">
                       <div class="clothing-stores-img text-end">
                           <figure>
                              <img src="assets/images/img104.jpg">
                           </figure>
                       </div>
                   </div>
               </div>
           </div>
      </section>

      <section class="pricing-section py-5">
        <div class="container">
          <div class="heading-wrap text-center">
            <h2>Pricing Plans – Choose What Fits Your <span>Footwear Store Best</span></h2>
            <p>Our footwear ERP software is designed to scale with your business. Whether you run a single shop or manage a multi-store chain, we have a plan tailored to your needs.</p>
          </div>

          <div class="row justify-content-center">
            <!-- Basic Plan -->
            <div class="col-md-4 mb-4">
              <div class="pricing-card basic">
                <div class="pricing-header">
                  <div class="plan-icon-wrap bg-success">
                    <i class="bi bi-bag-check"></i>
                  </div>
                  <h3>Basic Plan</h3>
                  <p>Ideal for small footwear shops looking for essential tools.</p>
                </div>
                <ul class="pricing-features">
                  <li>✔ Smart POS Billing (GST-Compliant)</li>
                  <li>✔ Single Store Setup</li>
                  <li>✔ Manage Basic Inventory (Size, Color, Category)</li>
                  <li>✔ Barcode & Label Generator</li>
                  <li>✔ WhatsApp / SMS Billing</li>
                  <li>✔ Basic Reports & Analytics</li>
                  <li>👉 Best for single-location footwear stores starting out.</li>
                </ul>
                <div class="price">₹1,999 <span>/month</span></div>
                <div class="price-alt">₹19,999 /year</div>
                <a href="#" class="btn btn-success mt-3">Get Started</a>
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
                  <p>Perfect for growing footwear retailers managing multiple categories.</p>
                </div>
                <ul class="pricing-features">
                  <li>✔ Everything in Basic, plus:</li>
                  <li>✔ Multi-Payment Modes (UPI, Cards, Wallets)</li>
                  <li>✔ Inbuilt Accounting Module (P&L, Balance Sheet, Ledgers)</li>
                  <li>✔ Loyalty Programs & Membership Management</li>
                  <li>✔ Offers & Discount Management</li>
                  <li>✔ WhatsApp Promotions & Customer Engagement</li>
                  <li>✔ 150+ Advanced Reports & Analytics</li>
                  <li>✔ Shopify & WooCommerce Integration</li>
                  <li>👉 Best for mid-sized footwear retailers expanding their reach.</li>
                </ul>
                <div class="price">₹4,999 <span>/month</span></div>
                <div class="price-alt">₹49,999 /year</div>
                <a href="#" class="btn btn-primary mt-3">Get Started</a>
              </div>
            </div>

            <!-- Premium Plan -->
            <div class="col-md-4 mb-4">
              <div class="pricing-card premium">
                <div class="pricing-header">
                  <div class="plan-icon-wrap bg-danger">
                    <i class="bi bi-building-gear"></i>
                  </div>
                  <h3>Premium Plan</h3>
                  <p>The ultimate ERP solution for multi-store chains and franchises.</p>
                </div>
                <ul class="pricing-features">
                  <li>✔ Everything in Standard, plus:</li>
                  <li>✔ Multi-Store Centralized ERP Dashboard</li>
                  <li>✔ Centralized Customer Database</li>
                  <li>✔ Stock Transfer & Inter-Branch Requests</li>
                  <li>✔ Warehouse & Real-Time Stock Management</li>
                  <li>✔ mPOS for Exhibitions, Fairs & Mobile Sales</li>
                  <li>✔ Advanced Analytics & Sales Forecasting</li>
                  <li>✔ Dedicated Account Manager & 24/7 Priority Support</li>
                  <li>👉 Ideal for large footwear chains & franchise networks.</li>
                </ul>
                <div class="price">Custom Pricing</div>
                <div class="price-alt">Contact Sales for Quote</div>
                <a href="#" class="btn btn-danger mt-3">Contact Sales</a>
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
                  What is Digify Soft Solutions Footwear Software?
                </button>
              </h2>
              <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  It’s a cloud-based ERP and POS software designed for footwear retailers to manage billing, inventory, CRM, multi-store operations, and online sales efficiently.
                </div>
              </div>
            </div>

            <!-- FAQ 2 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading2">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                  Do I need technical skills to use this software?
                </button>
              </h2>
              <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  No. The software is user-friendly and intuitive, with quick onboarding and free staff training to get you started smoothly.
                </div>
              </div>
            </div>

            <!-- FAQ 3 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading3">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                  Can I manage multiple footwear stores from one system?
                </button>
              </h2>
              <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Yes. With the Premium Plan, you can manage multiple branches, transfer stock, access centralized reports, and maintain a unified customer database.
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
                  Absolutely. All invoices are GST-ready, supporting CGST/SGST calculations, E-Invoicing, and seamless tax filing.
                </div>
              </div>
            </div>

            <!-- FAQ 5 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading5">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                  Can I sell online using this software?
                </button>
              </h2>
              <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Yes. Digify integrates with Shopify and WooCommerce, enabling real-time inventory sync between your retail and online footwear stores.
                </div>
              </div>
            </div>

            <!-- FAQ 6 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading6">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                  Does it work on mobiles and tablets?
                </button>
              </h2>
              <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Yes. It runs seamlessly on desktops, laptops, tablets, and mobiles. You can even use mPOS for mobile billing during exhibitions or fairs.
                </div>
              </div>
            </div>

            <!-- FAQ 7 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading7">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                  How can it help me attract more customers?
                </button>
              </h2>
              <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Through loyalty programs, membership points, targeted discounts, and WhatsApp marketing campaigns, you can retain existing customers and bring in new buyers.
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
                  You’ll get 150+ detailed reports including sales trends, top-selling footwear, stock levels, profit & loss statements, and consolidated multi-store analytics.
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
                  Yes. Digify allows customization of billing formats, loyalty schemes, and inventory settings to perfectly match your store’s workflow.
                </div>
              </div>
            </div>

            <!-- FAQ 10 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading10">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                  What support is available if I face issues?
                </button>
              </h2>
              <div id="collapse10" class="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  We offer 24/7 customer support through chat, email, and phone. Premium customers receive priority service with a dedicated account manager.
                </div>
              </div>
            </div>

          </div><!-- /accordion -->
        </div>
      </div>
    </div>
  </div>
</section>

      <!-- faq template section -->
      
      <?php include 'footer.php'; ?>

