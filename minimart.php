<!-- header -->
   <?php
  include 'db.php';
  include 'fetch_meta.php';

  $pageMeta = getPageMeta('minimart');
  $pageTitle = $pageMeta['page_title'] ?? 'minimart';
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
                  <h1>India’s #No. 1 Best Cloud-Based Minimart POS & Management Software</h1>
                  <h4>Digify Soft Solutions – Streamline Your Minimart Operations & Boost Profits</h4>
                  <p>Simplify billing, manage inventory, engage customers, and grow your Minimart store effortlessly with Digify Soft Solutions’ advanced cloud-based Minimart software.</p>
                  <a class="schedule-btn" href="contact-us.php">👉 Schedule Your Free Demo Today</a>
               </div>
            </div>
         </div>
         <div class="col-md-5">
            <div class="inner-banner-img">
               <figure>
                  <img src="assets/images/img258.png">
               </figure>
            </div>
         </div>
      </div>
   </div>
</section>
<!-- inner banner section end here  -->
<section class="manufacturing-key section-bg py-5">
   <div class="container">
      <div class="row justify-content-center gy-4">
         <!-- Fast & Hassle-Free Billing -->
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3>Fast & Hassle-Free Billing</h3>
               <p>Generate bills instantly with a high-speed POS system. Accept multiple payment modes and stay GST-compliant for smooth checkouts.</p>
               <ul>
                  <li>GST-compliant invoicing</li>
                  <li>Cash, card, and UPI payment support</li>
                  <li>Image-based POS for quick product identification</li>
                  <li>E-invoicing & digital bill sharing</li>
               </ul>
            </div>
         </div>
         <!-- Smart Inventory Management -->
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3>Smart Inventory Management</h3>
               <p>Keep your store organized and avoid stock issues with real-time inventory tracking and automated alerts.</p>
               <ul>
                  <li>Barcode & label generation (EAN13 supported)</li>
                  <li>Categorize products by type, brand, and variant</li>
                  <li>Automated stock notifications & reorder alerts</li>
                  <li>OCR invoice scanning for accurate data entry</li>
               </ul>
            </div>
         </div>
         <!-- Advanced CRM & Customer Engagement -->
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3>Advanced CRM & Customer Engagement</h3>
               <p>Build stronger relationships and boost loyalty with integrated CRM and promotional tools.</p>
               <ul>
                  <li>Loyalty points & redeemable rewards</li>
                  <li>Bulk WhatsApp promotions & notifications</li>
                  <li>Customer segmentation & behavior analysis</li>
                  <li>Personalized offers and birthday greetings</li>
               </ul>
            </div>
         </div>
         <!-- Omnichannel Store Integration -->
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3>Omnichannel Store Integration</h3>
               <p>Manage both physical and online stores seamlessly with cloud-based features.</p>
               <ul>
                  <li>Sync inventory across online & offline stores</li>
                  <li>Handle home delivery and pickup orders efficiently</li>
                  <li>Multiple online payment options</li>
                  <li>Fully integrated e-commerce platform</li>
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
               <h2>Easily oversee all your minimart locations with our centralized billing software for  <span>efficient management across the board.</span> </h2>
               <p>Try our feature-rich Minimart software to tackle the challenges of modern minimart stores.</p>
            </div>
            <div class="desktop-industries">
               <div class="row justify-content-center">
                  <!-- Feature 1: OCR -->
                  <div class="col-md-4 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/b2.png" alt="OCR" class="img-fluid mb-3">
                                 <h4>OCR</h4>
                                 <p>Digify Soft Solutions’ OCR scans invoices, precisely extracts data, and reduces manual data entry for minimart store owners.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- Feature 2: Multiple Payment Gateways -->
                  <div class="col-md-4 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe1.png" alt="Multiple Payment Gateways" class="img-fluid mb-3">
                                 <h4>Multiple Payment Gateways</h4>
                                 <p>Offer customers multiple payment options including cash, card, UPI, and digital wallets.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- Feature 3: Inventory Management -->
                  <div class="col-md-4 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe2.png" alt="Inventory Management" class="img-fluid mb-3">
                                 <h4>Inventory Management</h4>
                                 <p>Track stocks accurately, categorize products and subproducts, and simplify your inventory operations.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- Feature 4: V-Pay -->
                  <div class="col-md-4 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe3.png" alt="V-Pay" class="img-fluid mb-3">
                                 <h4>V-Pay</h4>
                                 <p>Simplify payments with instant QR codes for quick and hassle-free cashless transactions.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- Feature 5: Label/Barcode Generator -->
                  <div class="col-md-4 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe4.png" alt="Label/Barcode Generator" class="img-fluid mb-3">
                                 <h4>Label/Barcode Generator</h4>
                                 <p>Generate labels and barcodes (EAN13) to streamline billing and speed up checkouts.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- Feature 6: WhatsApp Integration -->
                  <div class="col-md-4 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe5.png" alt="WhatsApp Integration" class="img-fluid mb-3">
                                 <h4>WhatsApp Integration</h4>
                                 <p>Stay connected with customers by sending updates, promotions, and reminders directly to their devices.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- Feature 7: Online Store -->
                  <div class="col-md-4 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe6.png" alt="Online Store" class="img-fluid mb-3">
                                 <h4>Online Store</h4>
                                 <p>Enable omnichannel sales with an online store, letting customers purchase your products from anywhere.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- Feature 8: Loyalty/Membership Points -->
                  <div class="col-md-4 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe7.png" alt="Loyalty/Membership Points" class="img-fluid mb-3">
                                 <h4>Loyalty/Membership Points</h4>
                                 <p>Reward loyal customers with points and memberships to boost retention and brand loyalty.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- Feature 9: Image-Based POS -->
                  <div class="col-md-4 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe8.png" alt="Image-Based POS" class="img-fluid mb-3">
                                 <h4>Image-Based POS</h4>
                                 <p>Quickly identify products for faster checkouts with an intuitive image-based POS system.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- Feature 10: GST-Compliant Billing -->
                  <div class="col-md-4 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe9.png" alt="GST-Compliant Billing" class="img-fluid mb-3">
                                 <h4>GST-Compliant Billing</h4>
                                 <p>Ensure all bills comply with GST regulations and streamline tax filing for your minimart.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- Feature 11: E-Invoicing -->
                  <div class="col-md-4 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe10.png" alt="E-Invoicing" class="img-fluid mb-3">
                                 <h4>E-Invoicing</h4>
                                 <p>Share bills instantly via mobile or WhatsApp for convenient customer record-keeping.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- Feature 12: Advanced POS System -->
                  <div class="col-md-4 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe11.png" alt="Advanced POS System" class="img-fluid mb-3">
                                 <h4>Advanced POS System</h4>
                                 <p>Handle all transactions effortlessly with our advanced POS, supporting multiple payment options.</p>
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
         <h2>Experience Now</h2>
      </div>
      <div class="row justify-content-center">
         <!-- Basic Plan -->
         <div class="col-md-4 mb-4">
            <div class="pricing-card basic">
               <div class="pricing-header">
                  <div class="plan-icon-wrap bg-success">
                     <i class="bi bi-shop"></i>
                  </div>
                  <h3>Basic Plan – Small Minimarts</h3>
                  <p>Automated Billing & POS for small shops.</p>
               </div>
               <ul class="pricing-features">
                  <li>✔ Automated Billing & POS</li>
                  <li>✔ Real-time Inventory Management</li>
                  <li>✔ GST-Compliant Invoices</li>
                  <li>✔ Low Stock Alerts</li>
               </ul>
               <div class="price">₹4,999 <span>/month</span></div>
            </div>
         </div>
         <!-- Standard Plan -->
         <div class="col-md-4 mb-4">
            <div class="pricing-card standard">
               <div class="pricing-header">
                  <div class="plan-icon-wrap bg-primary">
                     <i class="bi bi-cart4"></i>
                  </div>
                  <h3>Standard Plan – Medium Minimarts</h3>
                  <p>Everything in Basic, plus advanced features for medium stores.</p>
               </div>
               <ul class="pricing-features">
                  <li>✔ Everything in Basic, plus:</li>
                  <li>✔ Barcode & Label Generator</li>
                  <li>✔ Loyalty & Membership Points</li>
                  <li>✔ WhatsApp Integration</li>
                  <li>✔ Advanced Reporting & Analytics</li>
               </ul>
               <div class="price">₹9,999 <span>/month</span></div>
            </div>
         </div>
         <!-- Premium Plan -->
         <div class="col-md-4 mb-4">
            <div class="pricing-card premium">
               <div class="pricing-header">
                  <div class="plan-icon-wrap bg-danger">
                     <i class="bi bi-building"></i>
                  </div>
                  <h3>Premium Plan – Large Minimart Chains</h3>
                  <p>The ultimate solution for multi-branch stores.</p>
               </div>
               <ul class="pricing-features">
                  <li>✔ Everything in Standard, plus:</li>
                  <li>✔ Multi-Branch Management</li>
                  <li>✔ Omnichannel Online Store Integration</li>
                  <li>✔ OCR Invoice Scanning</li>
                  <li>✔ Dedicated Support & Custom Features</li>
               </ul>
               <div class="price">Custom Pricing</div>
            </div>
         </div>
      </div>
   </div>
</section>
<section class="manufacturing-key section-bg">
   <div class="container">
      <div class="row justify-content-center">
         <div class="col-lg-12 col-9">
            <div class="heading-wrap text-center">
               <h2> Multiple Minimart Management</h2>
                
            </div>
         </div>
      </div>
      <div class="row justify-content-center gy-4">
         <!-- Step 1 -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>Unified Customer Database</h3>
               <p>Maintain a single customer database with all details in one place, including store locations and purchase history.</p>
            </div>
         </div>
         <!-- Step 3 -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>Seamless Stock Transfer & Requests</h3>
               <p>Easily request and transfer products between stores to maintain stock levels and meet customer demands in real-time.</p>
            </div>
         </div>
         <!-- Step 4 -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>Centralized Reporting & Analytics</h3>
               <p>View reports and analytics from all minimart stores on a single, consolidated dashboard for smarter business decisions.</p>
            </div>
         </div>
         <!-- Step 5 -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>Centralized Management</h3>
               <p>Manage all your minimart branches seamlessly from one centralized platform.</p>
            </div>
         </div>
         <!-- Step 6 -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>Simplified Store Management</h3>
               <p>Operate multiple minimart stores efficiently using POS systems designed specifically for minimart operations</p>
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
                  <img src="assets/images/img260.jpg" alt="Local & National SEO Expertise">
               </figure>
            </div>
         </div>
         <div class="col-md-7 order-md-1">
            <div class="heading-wrap text-start">
               <h2>One Smart POS for Every Minimart Requirement
Powerful tools to <span> improve efficiency, control inventory, and drive data-backed growth.</span> </h2>
               <p>Digify Soft Solutions’ Minimart POS software provides everything needed to enhance store operations and make data-driven decisions:</p>
            </div>
            <div class="expertise-wrap bridal-wrap">
               <ul>
                  <li>Powerful POS solution</li>
                  <li>Manage multiple stores anytime, anywhere</li>
                  <li>Inventory & barcode management</li>
                  <li>Multiple payment modes</li>
                  <li>Advanced reporting & analytics</li>
                  <li>Online store integration</li>
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
               <h2> Key  <span>Benefits</span> </h2>
            </div>
            <div class="why-choose-wrap">
               <ul>
                  <li>
                     <figure> <img src="assets/images/platforms1.png" alt=""> </figure>
                     <h3>Revenue Growth: 2X increase in store efficiency</h3>
                  </li>
                  <li>
                     <figure> <img src="assets/images/platforms2.png" alt=""> </figure>
                     <h3>Time Savings: 60+ billing hours saved/month</h3>
                  </li>
                  <li>
                     <figure> <img src="assets/images/platforms3.png" alt=""> </figure>
                     <h3>Faster Processing: 45% faster operations</h3>
                  </li>
                  <li>
                     <figure> <img src="assets/images/platforms4.png" alt=""> </figure>
                     <h3>Reduced Errors: 49% decrease in manual mistakes</h3>
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
                  <img src="assets/images/img259.jpg" alt="Local & National SEO Expertise">
               </figure>
            </div>
         </div>
         <div class="col-md-7">
            <div class="heading-wrap text-start">
               <h2> Why Choose Digify  <span>Soft Solutions?</span> </h2>
            </div>
            <div class="expertise-wrap bridal-wrap">
               <ul>
                  <li><strong>Rated 4.8+ on Google:</strong> Highly trusted by 2K+ reviews</li>
                  <li><strong>Multi-Featured:</strong> Integrates POS with inventory, accounting, invoicing, and more</li>
                  <li><strong>Training & Implementation:</strong> Free guidance to ensure smooth software adoption</li>
                  <li><strong>Cloud-Based Access:</strong> Manage your minimart from anywhere, anytime</li>
                  <li><strong>User-Friendly Interface:</strong> Intuitive and visually appealing</li>
                  <li><strong>Device Compatibility:</strong> Works on tablets, mobiles, desktops, and laptops</li>
                  <li><strong>Data-Driven Insights:</strong> 150+ MIS reports for smarter business strategies</li>
                  <li><strong>Affordable Solutions:</strong> Competitive pricing with exclusive features</li>
                  <li><strong>Dedicated Support:</strong> 24/7 assistance via calls and email</li>
               </ul>
               <p>Join over Thousands satisfied clients who trust Digify Soft Solutions for efficient minimart management.</p>
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
               <h2>Digify Soft Solutions: Boost Your Minimart’s Profitability with Smarter Billing POS Software</h2>
               <p>A minimart is a compact supermarket selling groceries, snacks, personal care items, and other daily essentials. Managing day-to-day operations can be challenging, especially when it comes to ensuring fast, accurate billing and smooth store management.</p>
               <p>This is where Digify Soft Solutions’ POS system for minimarts helps store owners. Our software makes it easier to manage supply chain, accounting, billing, customer service, and online inventory—all from a single platform.</p>
            </div>
         </div>
      </div>
   </div>
</section>
<section class="manufacturing-key section-bg pt-60">
   <div class="container">
      <div class="heading-wrap">
         <h2>How to Use Digify Soft <span>Minimart POS Software</span></h2>
         <p>Our Minimart POS software is designed to be easy, fast, and intuitive for store owners. Follow these simple steps to get started:</p>
      </div>
      <div class="row justify-content-center gy-4">
         <!-- 01. Login & Setup -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>01. Login & Setup</h3>
               <ul>
                  <li>Open the software on your desktop, tablet, or mobile.</li>
                  <li>Enter your store’s username & password.</li>
                  <li>Add store details (store name, GST number, logo, etc.).</li>
                  <li>Tip: If you have multiple branches, connect them during setup for centralized management.</li>
               </ul>
            </div>
         </div>
         <!-- 02. Add Products & Inventory -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>02. Add Products & Inventory</h3>
               <ul>
                  <li>Go to the Inventory Module.</li>
                  <li>Add products with details like name, category, brand, purchase price, selling price, and stock quantity.</li>
                  <li>Generate barcodes/labels for each product using the barcode generator.</li>
                  <li>Example: Add "Amul Butter – 500g" with stock quantity 50, set selling price ₹250, and generate barcode.</li>
               </ul>
            </div>
         </div>
         <!-- 03. Billing & Checkout -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>03. Billing & Checkout</h3>
               <ul>
                  <li>Scan product barcodes or use image-based POS for quick product identification.</li>
                  <li>The system automatically applies GST & discounts.</li>
                  <li>Accept payments via cash, UPI, card, or wallets.</li>
                  <li>Share bills via print, SMS, or WhatsApp.</li>
                  <li>Example: A customer buys 2 dairy products and pays via UPI → Generate invoice → Send e-bill to WhatsApp.</li>
               </ul>
            </div>
         </div>
         <!-- 04. Manage Customers -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>04. Manage Customers</h3>
               <ul>
                  <li>Store customer details in the Customer Database.</li>
                  <li>Launch loyalty programs (points, discounts, memberships).</li>
                  <li>Send promotional offers, new arrivals, and reminders via WhatsApp integration.</li>
                  <li>Example: Add customer “Rahul Sharma” with phone number → System tracks his purchase history → Send him a “20% OFF on snacks” offer via WhatsApp.</li>
               </ul>
            </div>
         </div>
         <!-- 05. Stock Replenishment & Transfers -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>05. Stock Replenishment & Transfers</h3>
               <ul>
                  <li>Get low-stock alerts for fast-moving products.</li>
                  <li>Place reorders directly from suppliers.</li>
                  <li>For multiple branches, request or transfer stock between stores.</li>
               </ul>
            </div>
         </div>
         <!-- 06. Reports & Analytics -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>06. Reports & Analytics</h3>
               <ul>
                  <li>Access 150+ MIS reports for sales, expenses, inventory, and customer behavior.</li>
                  <li>Use dashboards & graphs to analyze performance.</li>
                  <li>Forecast demand for upcoming festive or seasonal sales.</li>
                  <li>Example: Check daily sales report → See that snacks & cold drinks sold the most → Plan bulk purchase for next week.</li>
               </ul>
            </div>
         </div>
         <!-- 07. Online Store Integration -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>07. Online Store Integration</h3>
               <ul>
                  <li>Connect your minimart to an online store.</li>
                  <li>Sync inventory between offline & online sales.</li>
                  <li>Manage orders, deliveries, and returns from one platform.</li>
               </ul>
            </div>
         </div>
         <!-- 08. Continuous Support -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>08. Continuous Support</h3>
               <ul>
                  <li>Get 24/7 expert support for setup, training, and troubleshooting.</li>
                  <li>Free updates & training provided.</li>
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
                        What is Digify Soft Solutions Minimart Software?
                        </button>
                     </h2>
                     <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A cloud-based POS and inventory system to manage billing, stock, CRM, accounting, and online orders for Minimart stores.
                        </div>
                     </div>
                  </div>
                  <!-- FAQ 2 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading2">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                        Does it support GST-compliant billing?
                        </button>
                     </h2>
                     <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           Yes, all bills are GST-compliant, and you can directly file GST returns from the system.
                        </div>
                     </div>
                  </div>
                  <!-- FAQ 3 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading3">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                        Can I manage loyalty programs and promotions?
                        </button>
                     </h2>
                     <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           Absolutely! The software allows loyalty points, membership rewards, and WhatsApp promotions for customer retention.
                        </div>
                     </div>
                  </div>
                  <!-- FAQ 4 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading4">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                        Can I create an online Minimart store?
                        </button>
                     </h2>
                     <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           Yes, the omnichannel feature allows you to run an online store with inventory synchronization.
                        </div>
                     </div>
                  </div>
                  <!-- FAQ 5 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading5">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                        Does it support multiple payment methods?
                        </button>
                     </h2>
                     <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           Yes, customers can pay via cash, card, UPI, V-Pay QR codes, or other integrated gateways.
                        </div>
                     </div>
                  </div>
                  <!-- FAQ 6 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading6">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                        Can I track fast and slow-selling items?
                        </button>
                     </h2>
                     <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           Yes, the software provides stock alerts and analytics for better inventory planning.
                        </div>
                     </div>
                  </div>
                  <!-- FAQ 7 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading7">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                        Is the software suitable for multi-branch Minimarts?
                        </button>
                     </h2>
                     <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           Yes, the Premium Plan includes multi-branch management with centralized monitoring.
                        </div>
                     </div>
                  </div>
                  <!-- FAQ 8 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading8">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                        Does it have mobile POS capabilities?
                        </button>
                     </h2>
                     <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           Yes, the system supports mobile POS, allowing staff to bill anywhere in the store.
                        </div>
                     </div>
                  </div>
                  <!-- FAQ 9 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading9">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                        Can I automate stock reorders?
                        </button>
                     </h2>
                     <div id="collapse9" class="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           Yes, it has automated reordering and notifications to avoid out-of-stock situations.
                        </div>
                     </div>
                  </div>
                  <!-- FAQ 10 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading10">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                        Is the software customizable for my Minimart?
                        </button>
                     </h2>
                     <div id="collapse10" class="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           Yes, Digify Soft Solutions offers full customization for POS, CRM, inventory, accounting, and e-commerce integration.
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