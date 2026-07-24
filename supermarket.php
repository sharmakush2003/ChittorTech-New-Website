<!-- header -->
   <?php
  include 'db.php';
  include 'fetch_meta.php';

  $pageMeta = getPageMeta('supermarket');
  $pageTitle = $pageMeta['page_title'] ?? 'supermarket';
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
                  <h1>India’s #1 AI-Powered Cloud Supermarket POS & Management Software</h1>
                  <h4>Digify Soft Solutions – AI-Driven Tools to Optimize Supermarket Operations & Boost Profits</h4>
                  <p>Transform your supermarket with AI-powered billing, inventory control, customer management, and online store integration—all managed from a single intelligent cloud platform.</p>
                  <a class="schedule-btn" href="contact-us.php">👉 Schedule Your Free Demo Today</a>
               </div>
            </div>
         </div>
         <div class="col-md-5">
            <div class="inner-banner-img">
               <figure>
                  <img src="assets/images/Cloud-Supermarket.png">
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

    <!-- AI Online & Offline Supermarket Management -->
    <div class="col-md-4 col-sm-6">
        <div class="key-box">
            <h3>AI-Driven Online & Offline Supermarket Management</h3>
            <p>Take your supermarket digital and manage all operations effortlessly with a smart AI-powered platform.</p>
            <ul>
                <li>AI-integrated online stores with Shopify, WooCommerce, or custom e-commerce</li>
                <li>AI-powered bulk B2B & wholesale order handling</li>
                <li>Unified AI inventory control for online & physical stores</li>
                <li>Smart AI payment processing with automated reconciliation</li>
            </ul>
        </div>
    </div>

    <!-- AI Smart Inventory Tracking -->
    <div class="col-md-4 col-sm-6">
        <div class="key-box">
            <h3>AI Smart Inventory Tracking</h3>
            <p>Maintain optimal stock levels and reduce losses using AI-guided inventory intelligence.</p>
            <ul>
                <li>AI stock checks & automated inventory audits</li>
                <li>Instant AI barcode & label creation</li>
                <li>AI-based low-stock and restocking alerts</li>
                <li>AI inventory insights for demand forecasting</li>
            </ul>
        </div>
    </div>

    <!-- AI Customer Retention & Engagement -->
    <div class="col-md-4 col-sm-6">
        <div class="key-box">
            <h3>AI Customer Retention & Engagement</h3>
            <p>Increase customer loyalty and repeat purchases with AI-powered engagement tools.</p>
            <ul>
                <li>AI-personalized promotions, offers & discounts</li>
                <li>AI messaging automation via WhatsApp & SMS</li>
                <li>AI-managed loyalty points & membership programs</li>
                <li>AI shopping behavior analysis for smarter marketing</li>
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
               <h2>India’s    <span>Best Supermarket Billing Software</span> </h2>
               <p>Digify Soft Solutions provides an extensive range of features to help you run your supermarket operations efficiently, improve customer satisfaction, and increase profitability.</p>
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
                                 <p>A simple and intuitive POS software designed for supermarkets. Supports multiple payment options (cash, card, UPI, wallets) and works seamlessly on any device.</p>
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
                                 <p>Maintain accurate stock levels with real-time inventory tracking to avoid shortages or overstocking.</p>
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
                                 <h4>GST-Compliant Billing</h4>
                                 <p>Generate GST-compliant invoices effortlessly with automatic tax calculations across multiple GST slabs.</p>
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
                                 <h4>Customer Relationship Management (CRM)</h4>
                                 <p>Manage your entire customer database, run loyalty programs, and launch personalized marketing campaigns.</p>
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
                                 <img src="assets/images/fe5.png" alt="Label/Barcode Generator" class="img-fluid mb-3">
                                 <h4>Label & Barcode Generator</h4>
                                 <p>Simplify barcoding, supervise stock movement, and reduce losses with quick label and barcode generation.</p>
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
                                 <img src="assets/images/fe6.png" alt="WhatsApp Integration" class="img-fluid mb-3">
                                 <h4>Multiple Billing Counters</h4>
                                 <p>Reduce queues during peak hours with multi-counter billing support.</p>
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
                                 <img src="assets/images/fe7.png" alt="Online Store" class="img-fluid mb-3">
                                 <h4>WhatsApp Integration</h4>
                                 <p>Send invoices, promotional offers, and payment reminders directly to customers via WhatsApp.</p>
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
                                 <img src="assets/images/fe8.png" alt="Loyalty/Membership Points" class="img-fluid mb-3">
                                 <h4>Loyalty & Membership Points</h4>
                                 <p>RBuild long-term customer relationships with customizable loyalty and membership programs.</p>
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
                                 <img src="assets/images/fe9.png" alt="Image-Based POS" class="img-fluid mb-3">
                                 <h4>Omnichannel Integration</h4>
                                 <p>Easily launch your online supermarket store with Shopify or WooCommerce integration</p>
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
                                 <img src="assets/images/fe10.png" alt="GST-Compliant Billing" class="img-fluid mb-3">
                                 <h4>Offers & Discount Management</h4>
                                 <p>Handle in-house offers and promotions from partner brands with ease.</p>
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
                                 <img src="assets/images/fe11.png" alt="E-Invoicing" class="img-fluid mb-3">
                                 <h4>Stock Verification</h4>
                                 <p>Keep your inventory accurate with inbuilt stock verification tools.</p>
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
                                 <img src="assets/images/fe12.png" alt="Advanced POS System" class="img-fluid mb-3">
                                 <h4>Reporting & Analytics</h4>
                                 <p>Access 150+ MIS reports with dashboards and visual analytics to make informed business decisions.</p>
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
         <h2>💰 Pricing & Plans</h2>
      </div>
      <div class="row justify-content-center">
         <!-- Basic Plan -->
         <div class="col-md-4 mb-4">
            <div class="pricing-card basic">
               <div class="pricing-header">
                  <div class="plan-icon-wrap bg-success">
                     <i class="bi bi-shop"></i>
                  </div>
                  <h3>Basic Plan – Small Supermarkets</h3>
                  <div class="price">💳 ₹7,999 <span>/month</span></div>
               </div>
               <ul class="pricing-features">
                  <li>✔ Automated POS billing</li>
                  <li>✔ Real-time inventory management</li>
                  <li>✔ GST-compliant invoices</li>
                  <li>✔ Stock alerts & notifications</li>
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
                  <h3>Standard Plan – Medium Supermarkets</h3>
                  <div class="price">💳 ₹14,999 <span>/month</span></div>
               </div>
               <ul class="pricing-features">
                  <li>✔ Everything in Basic, plus:</li>
                  <li>✔ Barcode & Label Generator</li>
                  <li>✔ Loyalty & Membership Programs</li>
                  <li>✔ Multi-counter billing</li>
                  <li>✔ CRM & WhatsApp Integration</li>
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
                  <h3> Premium Plan – Large Supermarkets & Chains</h3>
                  <div class="price">💳 Custom Pricing</div>
               </div>
               <ul class="pricing-features">
                  <li>✔ Everything in Standard, plus:</li>
                  <li>✔ Omnichannel online store integration</li>
                  <li>✔ Advanced Reporting & Analytics</li>
                  <li>✔ B2B order management</li>
                  <li>✔ Dedicated support & custom feature development</li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>

<section class="manufacturing-key section-bg ">
  <div class="container">
   <div class="heading-wrap">
      <h2>Top Benefits of <span>AI-Powered Supermarket POS Software</span></h2>
      <p>
         A modern AI supermarket POS system does more than billing—it automates operations,
         reduces errors, and increases profitability while enhancing the customer experience.
      </p>
   </div>

   <div class="row justify-content-center gy-4">

      <!-- 01. AI-Powered Business Insights -->
      <div class="col-lg-4 col-md-6">
         <div class="key-box">
            <h3>01. AI-Powered Business Insights</h3>
            <ul>
               <li>Real-time AI insights on sales, inventory, and customer behavior</li>
               <li>Interactive dashboards for data-driven decision-making</li>
               <li>AI trend analysis for pricing, promotions, and stocking</li>
            </ul>
         </div>
      </div>

      <!-- 02. Ultra-Fast AI Billing & Checkout -->
      <div class="col-lg-4 col-md-6">
         <div class="key-box">
            <h3>02. Ultra-Fast AI Billing & Checkout</h3>
            <ul>
               <li>AI-powered billing with weigh-scale & object recognition</li>
               <li>Self-checkout kiosks to reduce queues</li>
               <li>Automatic GST calculation with zero errors</li>
               <li>Multiple payment modes on customer-facing displays</li>
            </ul>
         </div>
      </div>

      <!-- 03. AI Smart Inventory Management -->
      <div class="col-lg-4 col-md-6">
         <div class="key-box">
            <h3>03. AI Smart Inventory Management</h3>
            <ul>
               <li>AI-based categorization by brand, size, and variants</li>
               <li>Real-time inventory tracking across stores & warehouses</li>
               <li>AI-driven auto-reorder to prevent stockouts</li>
            </ul>
         </div>
      </div>

      <!-- 04. AI Compliance & Tax Management -->
      <div class="col-lg-4 col-md-6">
         <div class="key-box">
            <h3>04. AI Compliance & Tax Management</h3>
            <ul>
               <li>Automatic and accurate GST calculations</li>
               <li>AI-generated GSTR-ready compliance reports</li>
               <li>Audit-ready records with minimal manual effort</li>
            </ul>
         </div>
      </div>

      <!-- 05. Enhanced Customer Experience -->
      <div class="col-lg-4 col-md-6">
         <div class="key-box">
            <h3>05. Enhanced Customer Experience with AI</h3>
            <ul>
               <li>Queue-free checkout with AI self-billing</li>
               <li>Personalized offers, loyalty programs & coupons</li>
               <li>Smart in-store experiences for higher satisfaction</li>
            </ul>
         </div>
      </div>

      <!-- 06. AI Financial Management -->
      <div class="col-lg-4 col-md-6">
         <div class="key-box">
            <h3>06. AI Financial Management</h3>
            <ul>
               <li>Automated P&amp;L, bookkeeping, and cash flow tracking</li>
               <li>AI-generated financial & GST reports</li>
               <li>Tally and accounting system integration</li>
            </ul>
         </div>
      </div>

      <!-- 07. AI Multi-Store Supervision -->
      <div class="col-lg-4 col-md-6">
         <div class="key-box">
            <h3>07. AI Multi-Store Supervision</h3>
            <ul>
               <li>Single AI dashboard to manage all branches</li>
               <li>Standardized pricing, offers, and stock transfers</li>
               <li>Unified customer database across outlets</li>
               <li>Centralized analytics for faster decisions</li>
            </ul>
         </div>
      </div>

      <!-- 08. Phygital – Online + Offline -->
      <div class="col-lg-4 col-md-6">
         <div class="key-box">
            <h3>08. Phygital – AI Online + Offline Integration</h3>
            <ul>
               <li>Custom online supermarket synced with physical stores</li>
               <li>Real-time inventory sync across all channels</li>
               <li>Home delivery & pickup options</li>
               <li>Unified view of online and offline operations</li>
            </ul>
         </div>
      </div>

      <!-- 09. Smarter & Profitable Supermarkets -->
      <div class="col-lg-4 col-md-6">
         <div class="key-box">
            <h3>09. Smarter & Profitable Supermarket Operations</h3>
            <ul>
               <li>AI footfall analysis for better store layouts</li>
               <li>Smart carts and kiosks for faster shopping</li>
               <li>AI weight integration & computer vision for accuracy</li>
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
               <h2>Manage Multiple Supermarket Branches and Franchises with Ease</h2>
               <p>Supermarket chains and franchises need more than just billing software — they need a centralized system that streamlines operations across all locations. A modern Supermarket POS software helps you manage multiple branches efficiently, ensuring smooth workflows and better customer experiences.</p>
            </div>
         </div>
      </div>
   </div>
</section>

<section class="manufacturing-key section-bg pt-60">
   <div class="container">
   <div class="row justify-content-center">
      <div class="col-lg-12 col-9">
         <div class="heading-wrap text-center">
            <h2>AI-Powered Features for <span>Multi-Store Supermarket Management</span></h2>
         </div>
      </div>
   </div>

   <div class="row justify-content-center gy-4">

      <!-- AI Unified Customer Database -->
      <div class="col-lg-4 col-md-6">
         <div class="key-box">
            <h3>AI Unified Customer Database</h3>
            <ul>
               <li>Maintain a single AI-driven customer profile across all supermarket branches.</li>
               <li>Run loyalty programs, memberships, and personalized promotions seamlessly.</li>
            </ul>
         </div>
      </div>

      <!-- AI Smart Stock Transfers -->
      <div class="col-lg-4 col-md-6">
         <div class="key-box">
            <h3>AI Smart Stock Transfers & Requests</h3>
            <ul>
               <li>Execute AI-guided inventory transfers between locations without delays.</li>
               <li>Prevent overstocking and shortages with intelligent stock requests.</li>
            </ul>
         </div>
      </div>

      <!-- AI Centralized Reporting -->
      <div class="col-lg-4 col-md-6">
         <div class="key-box">
            <h3>AI Centralized Reporting & Analytics</h3>
            <ul>
               <li>View AI-generated reports from all branches on one dashboard.</li>
               <li>Get real-time insights into sales, inventory, and customer trends.</li>
            </ul>
         </div>
      </div>

      <!-- AI Central Management -->
      <div class="col-lg-4 col-md-6">
         <div class="key-box">
            <h3>AI Centralized Store Management</h3>
            <ul>
               <li>Manage multiple supermarkets and franchises from one AI-powered system.</li>
               <li>Standardize pricing, discounts, and promotions automatically.</li>
            </ul>
         </div>
      </div>

      <!-- AI Inventory Control -->
      <div class="col-lg-4 col-md-6">
         <div class="key-box">
            <h3>AI Inventory Control & Optimization</h3>
            <ul>
               <li>Track real-time inventory levels across all outlets with AI monitoring.</li>
               <li>Receive AI-powered low-stock alerts and smart replenishment suggestions.</li>
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
                  <img src="assets/images/img261.jpg" alt="Local & National SEO Expertise">
               </figure>
            </div>
         </div>
        <div class="col-md-7 order-md-1">
   <div class="heading-wrap text-start">
      <h2>Why Choose Digify Soft Solutions <span>for Supermarket POS?</span></h2>
      <p>Run your supermarket smarter, faster, and more efficiently with our AI-powered all-in-one platform:</p>
   </div>

   <div class="expertise-wrap bridal-wrap">
      <ul>
         <li><strong>AI Smart POS –</strong> Fast, accurate billing with support for multiple payment options.</li>
         <li><strong>AI Multi-Store & Franchise Control –</strong> Manage all branches from a single intelligent dashboard.</li>
         <li><strong>AI Inventory & Barcode Management –</strong> Track stock in real time and optimize replenishment.</li>
         <li><strong>AI Flexible Payments –</strong> Accept cash, cards, UPI, and digital wallets seamlessly.</li>
         <li><strong>AI Centralized Accounting & CRM –</strong> Automate financial management and customer engagement.</li>
         <li><strong>AI Advanced Reports & Analytics –</strong> Make smarter decisions with real-time insights.</li>
         <li><strong>AI Online Store Launch –</strong> Expand digitally with a fully integrated e-commerce platform.</li>
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
               <h2> Business   <span>Impact</span> </h2>
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
                     <h3>99% Decrease in Manual Errors</h3>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>

<section class="manufacturing-key section-bg pt-60">
   <div class="container">
      <div class="heading-wrap">
         <h2>Digify Soft Solutions: Creating Smarter, <span>More Efficient Supermarkets</span></h2>
         <p>Purpose-built for modern supermarkets, our seamless Supermarket Billing Software comes with an easy-to-use and intuitive interface.</p>
         <p>We understand the multiple complexities of running a supermarket—managing stock, streamlining operations, enhancing customer experience, and ensuring smooth billing. That’s why Digify Soft Solutions offers a powerful POS system crafted especially for supermarket needs.</p>
      </div>
      <div class="row justify-content-center gy-4">
         <!-- 01. Login & Setup -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>Setup & Installation</h3>
               <ul>
                  <li>Contact our support team for installation & onboarding.</li>
                  <li>Add your store details, GST info, and product categories into the system.</li>
                  <li>Connect billing counters, barcode scanners, weigh-scale machines, and printers.</li>
               </ul>
            </div>
         </div>
         <!-- 02. Add Products & Inventory -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>Product & Inventory Management</h3>
               <ul>
                  <li>Upload all your products with SKU, brand, size, and price details.</li>
                  <li>Use the barcode generator to label your products.</li>
                  <li>Enable real-time inventory tracking to monitor stock levels.</li>
                  <li>Set auto-reorder alerts when stock is low.</li>
               </ul>
            </div>
         </div>
         <!-- 03. Billing & Checkout -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>Billing & Checkout</h3>
               <ul>
                  <li>Start billing quickly with our POS system.</li>
                  <li>Accept payments via cash, UPI, debit/credit cards, and wallets.</li>
                  <li>Use customer-facing displays & multiple billing counters to reduce queues.</li>
                  <li>Automatically generate GST-compliant invoices.</li>
               </ul>
            </div>
         </div>
         <!-- 04. Manage Customers -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>Customer Relationship Management (CRM)</h3>
               <ul>
                  <li>Build a customer database across all supermarket branches.</li>
                  <li>Run loyalty programs, membership cards, and coupons.</li>
                  <li>Send personalized WhatsApp invoices, offers, and reminders.</li>
               </ul>
            </div>
         </div>
         <!-- 05. Stock Replenishment & Transfers -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>Multi-Store & Franchise Management</h3>
               <ul>
                  <li>Access a single dashboard to manage multiple branches.</li>
                  <li>Transfer stock easily between different store locations.</li>
                  <li>Keep pricing, promotions, and offers consistent across all branches.</li>
                  <li>Monitor store-wise performance & analytics in real time.</li>
               </ul>
            </div>
         </div>
         <!-- 06. Reports & Analytics -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>Reporting & Analytics</h3>
               <ul>
                  <li>Generate custom reports for sales, profits, and inventory.</li>
                  <li>Use interactive dashboards to analyze trends.</li>
                  <li>Get automated GSTR reports for easy tax filing.</li>
                  <li>Make data-driven decisions for store growth.</li>
               </ul>
            </div>
         </div>
         <!-- 07. Online Store Integration -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>Online & Offline Integration</h3>
               <ul>
                  <li>Sync your physical and online supermarket store in real-time.</li>
                  <li>Manage online orders, deliveries, and payments from one system.</li>
                  <li>Expand your business with Shopify & WooCommerce integration.</li>
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
                           1. What is Digify Soft Solutions Supermarket Software?
                        </button>
                     </h2>
                     <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A1. A cloud-based POS & inventory management system designed for supermarkets to handle billing, stock, CRM, accounting, and online sales.
                        </div>
                     </div>
                  </div>
                  <!-- FAQ 2 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading2">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                           2. Does it support GST-compliant billing?
                        </button>
                     </h2>
                     <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A2. Yes, all invoices are GST-compliant, and tax calculations are automated.
                        </div>
                     </div>
                  </div>
                  <!-- FAQ 3 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading3">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                           3. Can I sell online with this software?
                        </button>
                     </h2>
                     <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A3. Yes, it supports Shopify and WooCommerce integrations for seamless online sales.
                        </div>
                     </div>
                  </div>
                  <!-- FAQ 4 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading4">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                           4. Can I manage loyalty programs and membership points?
                        </button>
                     </h2>
                     <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A4. Absolutely! You can reward loyal customers with points, vouchers, and membership benefits.
                        </div>
                     </div>
                  </div>
                  <!-- FAQ 5 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading5">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                           5. Does it support multiple payment methods?
                        </button>
                     </h2>
                     <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A5. Yes, it supports cash, card, UPI, and other integrated payment gateways.
                        </div>
                     </div>
                  </div>
                  <!-- FAQ 6 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading6">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                           6. Can I track stock fast and slow-moving items?
                        </button>
                     </h2>
                     <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A6. Yes, you get real-time stock reports, automated reorders, and stock verification features.
                        </div>
                     </div>
                  </div>
                  <!-- FAQ 7 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading7">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                           7. Is it suitable for multi-branch supermarkets?
                        </button>
                     </h2>
                     <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A7. Yes, the Premium Plan allows centralized management for multiple branches.
                        </div>
                     </div>
                  </div>
                  <!-- FAQ 8 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading8">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                           8. Can I send invoices and promotions via WhatsApp?
                        </button>
                     </h2>
                     <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A8. Yes, the software has built-in WhatsApp integration for invoices, reminders, and promotional messages.
                        </div>
                     </div>
                  </div>
                  <!-- FAQ 9 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading9">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                           9. Does it provide detailed reporting and analytics?
                        </button>
                     </h2>
                     <div id="collapse9" class="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A9. Yes, you get over 150 types of reports including sales, inventory, financials, and customer analytics.
                        </div>
                     </div>
                  </div>
                  <!-- FAQ 10 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading10">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                           10. Is the software customizable for my supermarket?
                        </button>
                     </h2>
                     <div id="collapse10" class="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A10. Yes, Digify Soft Solutions offers full customization for POS, inventory, CRM, accounting, and e-commerce integrations.
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