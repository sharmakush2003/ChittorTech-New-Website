<!-- header -->
  <?php
  include 'db.php';
  include 'fetch_meta.php';

  $pageMeta = getPageMeta('gift-shop');
  $pageTitle = $pageMeta['page_title'] ?? 'gift-shop';
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
                  <h1>India’s #No. 1 Best Cloud-Based Gift Shop Software</h1>
                  <h4>Digify Soft Solutions – Smart POS & ERP for Gift Shops</h4>
                  <p>Let your gift shop flourish with cloud-based gift shop software from Digify Soft Solutions, featuring billing, POS, inventory management, CRM, loyalty programs, and e-commerce capabilities.</p>
                  <a class="schedule-btn" href="contact-us.php">👉 Schedule a Free Demo Today</a>
               </div>
            </div>
         </div>
         <div class="col-md-5">
            <div class="inner-banner-img">
               <figure>
                  <img src="assets/images/img262.jpg">
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
         <!-- Fast & Hassle-Free Billing -->
         <div class="col-md-4 col-sm-6">
            <div class="key-box">
               <h3>Automated Stock Management</h3>
               <p>Stay on top of fast-selling products, track inventory in real-time, and avoid stockouts even during festive seasons.</p>
               <ul>
                  <li>Barcode & Label Generator</li>
                  <li>Product Images for Stock Catalog</li>
                  <li>Multi-Price Management</li>
                  <li>Real-Time Stock Alerts</li>
               </ul>
            </div>
         </div>
         <!-- Smart Inventory Management -->
         <div class="col-md-4 col-sm-6">
            <div class="key-box">
               <h3>Customer-Centric CRM</h3>
               <p>Build a loyal customer base with CRM features, customer segmentation, and personalized engagement tools.</p>
               <ul>
                     <li>Customer Profiles & Segmentation</li>
                     <li>Gift Vouchers & Loyalty Points</li>
                     <li>Birthday/Anniversary Promotions</li>

               </ul>
            </div>
         </div>
         <!-- Advanced CRM & Customer Engagement -->
         <div class="col-md-4 col-sm-6">
            <div class="key-box">
               <h3> Paperless Billing</h3>
               <p>Generate digital invoices, manage discounts, offers, and loyalty points while ensuring GST compliance. Accept multiple payment methods including UPI and card payments.</p>
               <ul>
                  <li>Digital Invoices on WhatsApp</li>
                  <li>Error-Free GST-Compliant Billing</li>
                  <li>Modern mPOS</li>
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
               <h2>Feature-Rich Gift  <span>Shop Software</span> </h2>
            </div>
            <div class="desktop-industries">
               <div class="row justify-content-center">
                  <!-- Feature 1: OCR -->
                  <div class="col-md-4 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe1.png" alt="OCR" class="img-fluid mb-3">
                                 <h4>Point of Sale (POS) System</h4>
                                 <p>Accept multiple payment modes, integrate mobile POS, and accelerate checkout processes.</p>
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
                                 <img src="assets/images/fe2.png" alt="Multiple Payment Gateways" class="img-fluid mb-3">
                                 <h4>Stock Management</h4>
                                 <p>Manage in-store and warehouse inventory, track stock levels, and automate reorder alerts.</p>
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
                                 <img src="assets/images/fe3.png" alt="Inventory Management" class="img-fluid mb-3">
                                 <h4>Billing & Invoice Management</h4>
                                 <p>Create GST-compliant invoices with discounts, offers, and loyalty point integration.</p>
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
                                 <img src="assets/images/fe4.png" alt="V-Pay" class="img-fluid mb-3">
                                 <h4>Card Swipe & UPI Integration</h4>
                                 <p>Enable payments via cards, UPI, or wallets for faster, hassle-free checkouts.</p>
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
                                 <h4>Label & Barcode Generator</h4>
                                 <p>Generate barcodes and labels for products to simplify billing and inventory tracking.</p>
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
                                 <p>Send invoices, promotions, and event reminders directly to customers’ WhatsApp.</p>
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
                                 <h4>Loyalty & Membership Points</h4>
                                 <p>Run loyalty campaigns, reward repeat customers, and track memberships.</p>
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
                                 <h4>Event Reminders</h4>
                                 <p>Send reminders for birthdays, anniversaries, or other special occasions to boost repeat sales.</p>
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
                                 <h4>Offers & Discount Management</h4>
                                 <p>Easily create promotional vouchers, coupon codes, and seasonal discounts.</p>
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
                                 <h4>Reporting & Analytics</h4>
                                 <p>Access 150+ reports, view analytics for sales, stock, and customer behavior on an interactive dashboard.</p>
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
                                 <h4>Customer Feedback & Reviews</h4>
                                 <p>Collect feedback and ratings directly from invoices to improve service.</p>
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
                                 <h4>Online Store Management</h4>
                                 <p>Create an online gift store or integrate with Shopify and WooCommerce for omnichannel sales.</p>
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
         <h2>💰 Pricing &amp; Plans</h2>
      </div>
      <div class="row justify-content-center">
         <!-- Basic Plan -->
         <div class="col-md-4 mb-4">
            <div class="pricing-card basic">
               <div class="pricing-header">
                  <div class="plan-icon-wrap bg-success">
                     <i class="bi bi-shop"></i>
                  </div>
                  <h3> Basic Plan – Small Gift Shops</h3>
                  <div class="price">💳 ₹2,999 <span>/month</span></div>
               </div>
               <ul class="pricing-features">
                  <li>✔ Smart POS &amp; Billing</li>
                  <li>✔ Basic Inventory Management &amp; Stock Alerts</li>
                  <li>✔ Digital GST-Compliant Invoices</li>
                  <li>✔ WhatsApp Notifications</li>
                  <li>✔ Basic Reports</li>
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
                  <h3> Standard Plan – Growing Gift Shops</h3>
                  <div class="price">💳 ₹5,999 <span>/month</span></div>
               </div>
               <ul class="pricing-features">
                  <li>✔ Everything in Basic, plus:</li>
                  <li>✔ Customer Segmentation &amp; CRM Features</li>
                  <li>✔ Loyalty &amp; Membership Management</li>
                  <li>✔ Multi-Price &amp; Barcode Management</li>
                  <li>✔ Online Store Integration</li>
                  <li>✔ Advanced Reports &amp; Analytics</li>
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
                  <h3> Premium Plan – Multi-Branch &amp; Franchise Owners</h3>
                  <div class="price">💳 Custom Pricing</div>
               </div>
               <ul class="pricing-features">
                  <li>✔ Everything in Standard, plus:</li>
                  <li>✔ Centralized Multi-Store Management</li>
                  <li>✔ Unified Customer Database &amp; Event Reminders</li>
                  <li>✔ Centralized Accounting &amp; Stock Control</li>
                  <li>✔ Advanced Analytics &amp; Dedicated Support</li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>

<section class="manufacturing-key section-bg">
   <div class="container">
      <div class="row justify-content-center gy-4">
         <!-- Fast & Hassle-Free Billing -->
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3> Handle Multiple Branches</h3>
               <p>Operate all your garment and apparel store branches from a single, centralized dashboard. Manage sales, stock, and customer data seamlessly across every outlet</p>
            </div>
         </div>
         <!-- Smart Inventory Management -->
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3> Stock Transfer & Request</h3>
               <p>Seamlessly transfer stock between multiple store branches with just a few clicks. Simplify inventory movement and ensure availability across all locations.</p>
            </div>
         </div>
         <!-- Advanced CRM & Customer Engagement -->
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3>Central Reporting & Analytics</h3>
               <p>Get real-time, consolidated reports on a single dashboard. Track sales, stock, and performance across all your garment stores for better decision-making.</p>
            </div>
         </div>
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3> Centralized Managemen</h3>
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
                  <img src="assets/images/img263.jpg" alt="Local & National SEO Expertise">
               </figure>
            </div>
         </div>
         <div class="col-md-7 order-md-1">
            <div class="heading-wrap text-start">
               <h2> Complete Store Management from POS to Inventory: Everything  <span>Covered in One Solution</span> </h2>
               <p>Our integrated Gift Shop POS billing software from Digify Soft Solutions has everything your store needs to run smoothly and efficiently.</p>
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
                  <img src="assets/images/img264.jpg" alt="Local & National SEO Expertise">
               </figure>
            </div>
         </div>
         <div class="col-md-7">
            <div class="heading-wrap text-start">
               <h2> Why Digify Soft Solutions? <span>Solutions?</span> </h2>
            </div>
            <div class="expertise-wrap bridal-wrap">
               <ul>
                  <li><strong>Client Satisfaction :</strong> Our customers are our brand ambassadors. Thousands of happy clients trust us for top-end services.</li>

                  <li><strong>Prompt Support :</strong> Experience superb customer service with our dedicated support team.</li>

                  <li><strong>Training & Implementation :</strong> Get full training to operate the software like a pro, with smooth implementation at no extra cost.</li>

                  <li><strong>Cloud-Based Gift-Store Software :</strong> Access your store dashboard anytime, anywhere with secure cloud data storage.</li>

                  <li><strong>Proven Experience :</strong> Benefit from years of expertise in engineering software solutions for retail businesses.</li>

                  <li><strong>User-Friendly Design :</strong> Our solutions follow an “anyone can use” philosophy, making them simple and intuitive.</li>

                  <li><strong>Affordable & Feature-Rich :</strong> Get the most comprehensive gift-store software at competitive prices.</li>
               </ul>
               <p> <strong>Grow your retail business now with Digify Soft Solutions!</strong> </p>
            </div>
         </div>
      </div>
   </div>
</section>


<section class="manufacturing-key section-bg ">
   <div class="container">
      <div class="heading-wrap">
         <h2>How to Use Digify Soft Solutions <span>Gift Shop Software</span></h2>
      </div>
         <div class="row justify-content-center gy-4">
            <!-- 01. Sign Up and Login -->
            <div class="col-lg-4 col-md-6">
               <div class="key-box">
                  <h3>01. Sign Up and Login</h3>
                  <ul>
                     <li>Create an account with Digify Soft Solutions or log in if you already have one.</li>
                     <li>Set up your gift shop details, including store information, GST, and payment preferences.</li>
                  </ul>
               </div>
            </div>

            <!-- 02. Add Products and Inventory -->
            <div class="col-lg-4 col-md-6">
               <div class="key-box">
                  <h3>02. Add Products and Inventory</h3>
                  <ul>
                     <li>Upload all your gift items with details like SKU, price, and stock quantity.</li>
                     <li>Assign barcodes to products for easy tracking and faster billing.</li>
                  </ul>
               </div>
            </div>

            <!-- 03. Manage Multiple Stores (Optional) -->
            <div class="col-lg-4 col-md-6">
               <div class="key-box">
                  <h3>03. Manage Multiple Stores (Optional)</h3>
                  <ul>
                     <li>Connect multiple store locations in a single dashboard.</li>
                     <li>Track stock levels, sales, and transfers across stores in real time.</li>
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
                     <li>Print invoices or send them digitally to customers.</li>
                  </ul>
               </div>
            </div>

            <!-- 05. Purchase and Vendor Management -->
            <div class="col-lg-4 col-md-6">
               <div class="key-box">
                  <h3>05. Purchase and Vendor Management</h3>
                  <ul>
                     <li>Create purchase orders for suppliers.</li>
                     <li>Track deliveries and update stock automatically.</li>
                     <li>Monitor vendor performance to ensure timely restocking.</li>
                  </ul>
               </div>
            </div>

            <!-- 06. Customer Management -->
            <div class="col-lg-4 col-md-6">
               <div class="key-box">
                  <h3>06. Customer Management</h3>
                  <ul>
                     <li>Maintain customer records for repeat business.</li>
                     <li>Send automated purchase reminders or offers.</li>
                  </ul>
               </div>
            </div>

            <!-- 07. Reporting and Analytics -->
            <div class="col-lg-4 col-md-6">
               <div class="key-box">
                  <h3>07. Reporting and Analytics</h3>
                  <ul>
                     <li>Access sales reports, inventory summaries, and profit/loss statements.</li>
                     <li>Analyze trends to identify top-selling products and improve decisions.</li>
                  </ul>
               </div>
            </div>

            <!-- 08. Online Store Integration -->
            <div class="col-lg-4 col-md-6">
               <div class="key-box">
                  <h3>08. Online Store Integration</h3>
                  <ul>
                     <li>Launch your online store with synced inventory.</li>
                     <li>Expand your reach to customers beyond your physical store.</li>
                  </ul>
               </div>
            </div>

            <!-- 09. Cloud Access Anywhere -->
            <div class="col-lg-4 col-md-6">
               <div class="key-box">
                  <h3>09. Cloud Access Anywhere</h3>
                  <ul>
                     <li>Manage your shop from anywhere using cloud-based access.</li>
                     <li>Securely access your data 24/7 on any device.</li>
                  </ul>
               </div>
            </div>

            <!-- 10. Support & Assistance -->
            <div class="col-lg-4 col-md-6">
               <div class="key-box">
                  <h3>10. Support &amp; Assistance</h3>
                  <ul>
                     <li>Reach out to Digify Soft Solutions experts for guidance or troubleshooting.</li>
                     <li>Use free demos and training sessions to get started confidently.</li>
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
               <h2>Digify Soft Solutions: A ‘Special Present’ for Smarter and Profitable Gift Store Retailing</h2>
               <p>We created Digify Soft Solutions to simplify your gift shop operations, reduce work-related worries, and keep your customers delighted!</p>
               <p>Gift shops are special places where people come to choose ‘happiness’ for their loved ones. Every gift item is priceless to your customers, and so should be their shopping experience—from browsing to checkout.</p>
               <p>Digify Soft Solutions frees gift shop owners from the hassle of managing inventory, accounts, billing, and returns, allowing you to focus entirely on catering to your customer’s needs and preferences. Showcase the best products, and leave the workflows and operations to us.</p>
               <p>From managing your online store to keeping your physical store customer-ready, Digify Soft Solutions provides all the features you need to run your gift shop like a pro.</p>
               <p>Eliminate all operational issues with our all-in-one gift store solution and give your customers an exceptional shopping experience.</p>
               <p>Our implementation team is always ready to assist with any queries or concerns you might have.</p>
               <button  onclick="window.location.href='contact-us.php'"  class="cta-button">Avail your free demo today!</button>
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
                           1. What is Digify Soft Solutions Gift Shop Software?
                        </button>
                     </h2>
                     <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A1. A cloud-based POS &amp; ERP solution to manage billing, inventory, CRM, loyalty, and e-commerce for gift shops.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 2 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading2">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                           2. Can it track fast-selling products and stock alerts?
                        </button>
                     </h2>
                     <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A2. Yes. The software provides real-time stock alerts and inventory tracking for top-selling products.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 3 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading3">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                           3. Is GST-compliant billing available?
                        </button>
                     </h2>
                     <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A3. Yes. The software generates error-free GST-compliant invoices with integrated discounts and loyalty points.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 4 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading4">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                           4. Can I manage multiple branches with this software?
                        </button>
                     </h2>
                     <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A4. Yes, the Premium Plan offers centralized multi-branch management.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 5 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading5">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                           5. Does it support loyalty programs and membership points?
                        </button>
                     </h2>
                     <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A5. Yes. You can run loyalty campaigns, reward repeat customers, and manage memberships.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 6 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading6">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                           6. Can I send invoices and promotions via WhatsApp?
                        </button>
                     </h2>
                     <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A6. Absolutely. The software has WhatsApp integration for sending bills, discounts, and event reminders.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 7 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading7">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                           7. Can I create an online store with this software?
                        </button>
                     </h2>
                     <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A7. Yes. You can create a custom online store or integrate with Shopify/WooCommerce.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 8 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading8">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                           8. Does it include reporting and analytics?
                        </button>
                     </h2>
                     <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A8. Yes. Access 150+ reports on sales, inventory, customer behavior, and financials from an interactive dashboard.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 9 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading9">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                           9. Can it manage event-based promotions and reminders?
                        </button>
                     </h2>
                     <div id="collapse9" class="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A9. Yes. The software can send birthday, anniversary, and event-based reminders to customers.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 10 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading10">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                           10. Can the software be customized for my gift shop?
                        </button>
                     </h2>
                     <div id="collapse10" class="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A10. Yes. Digify Soft Solutions offers full customization for POS, inventory, CRM, e-commerce, and multi-branch features.
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