<!-- header -->
  <?php
  include 'db.php';
  include 'fetch_meta.php';

  $pageMeta = getPageMeta('hardware-store');
  $pageTitle = $pageMeta['page_title'] ?? 'hardware-store';
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
                  <h1>India’s #No. 1 Best Cloud-Based Hardware Store Billing Software</h1>
                  <h4>Digify Soft Solutions – Smart POS & ERP for Hardware Stores</h4>
                  <p> Our cloud-based billing software includes POS, inventory management, CRM, GST-compliant billing, multi-location support, and e-commerce integration.</p>
                  <a class="schedule-btn" href="contact-us.php">👉 Schedule a Free Demo Today</a>
               </div>
            </div>
         </div>
         <div class="col-md-5">
            <div class="inner-banner-img">
               <figure>
                  <img src="assets/images/img265.jpg">
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

         <!-- Effortless Inventory Management -->
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3>Effortless Inventory Management</h3>
               <p>Handle hardware and sanitaryware inventory, generate barcodes and labels, and automate stock reorders with ease.</p>
               <ul>
                  <li>Product Variant & Category Sorting</li>
                  <li>Multi-Location Stock Management</li>
                  <li>Warehouse/Godown Management</li>
                  <li>Auto-Reorder Alerts</li>
               </ul>
            </div>
         </div>

         <!-- Hi-Speed Billing POS -->
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3>Hi-Speed Billing POS</h3>
               <p>Enjoy faster and accurate billing with image-based POS, and accept multiple payment modes including UPI, cards, and digital wallets.</p>
               <ul>
                  <li>GST-Compliant Billing</li>
                  <li>Multiple Payment Options</li>
                  <li>Customizable Bills & mPOS</li>
               </ul>
            </div>
         </div>

         <!-- Seamless Omnichannel E-Commerce -->
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3>Seamless Omnichannel E-Commerce</h3>
               <p>Take your hardware store online with a custom e-commerce platform integrated with payment gateways.</p>
               <ul>
                  <li>Custom Online Store Setup</li>
                  <li>Online Payment Integrations</li>
                  <li>Real-Time Stock Sync</li>
               </ul>
            </div>
         </div>

         <!-- Flawless GST Accounting -->
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3>Flawless GST Accounting</h3>
               <p>Automate GST compliance, manage financial accounts, track expenses, and generate centralized accounting reports for multiple stores.</p>
               <ul>
                  <li>Balance Sheet & P&L Statements</li>
                  <li>E-File GST Returns</li>
                  <li>Expense & Cashflow Management</li>
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
               <h2>Feature-Packed <span>Hardware Store Software</span></h2>
            </div>
            <div class="desktop-industries">
               <div class="row justify-content-center">

                  <!-- Feature 1: Faster Billing -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe1.png" alt="Faster Billing" class="img-fluid mb-3">
                                 <h4>Faster Billing</h4>
                                 <p>Ensure swift checkout and GST-compliant billing for in-store and online sales.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Feature 2: Multiple Payment Options -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe2.png" alt="Multiple Payment Options" class="img-fluid mb-3">
                                 <h4>Multiple Payment Options</h4>
                                 <p>Accept payments via cards, UPI, cash, and digital wallets.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Feature 3: Inventory Monitoring -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe3.png" alt="Inventory Monitoring" class="img-fluid mb-3">
                                 <h4>Inventory Monitoring</h4>
                                 <p>Track real-time stock levels, avoid stockouts, and optimize warehouse efficiency.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Feature 4: Supply Chain Management -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe4.png" alt="Supply Chain Management" class="img-fluid mb-3">
                                 <h4>Supply Chain Management</h4>
                                 <p>Oversee suppliers, procurement, and product flows from warehouse to store.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Feature 5: Warehouse Management -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe5.png" alt="Warehouse Management" class="img-fluid mb-3">
                                 <h4>Warehouse Management</h4>
                                 <p>Centralize inventory across multiple locations and manage stock efficiently.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Feature 6: Purchase Management -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe6.png" alt="Purchase Management" class="img-fluid mb-3">
                                 <h4>Purchase Management</h4>
                                 <p>Track purchase orders, supplier payments, and procurement efficiently.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Feature 7: Integrated Accounting -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe7.png" alt="Integrated Accounting" class="img-fluid mb-3">
                                 <h4>Integrated Accounting</h4>
                                 <p>Monitor finances, payables, receivables, expenses, and GST reporting seamlessly.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Feature 8: Label & Barcode Generation -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe8.png" alt="Label & Barcode Generation" class="img-fluid mb-3">
                                 <h4>Label & Barcode Generation</h4>
                                 <p>Create barcodes and labels for products to speed up checkout.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Feature 9: Insightful Reporting & Analytics -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe9.png" alt="Insightful Reporting & Analytics" class="img-fluid mb-3">
                                 <h4>Insightful Reporting & Analytics</h4>
                                 <p>Access 150+ reports to monitor sales, stock trends, customer behavior, and financial performance.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Feature 10: Fast & Slow Selling Stocks -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe10.png" alt="Fast & Slow Selling Stocks" class="img-fluid mb-3">
                                 <h4>Fast & Slow Selling Stocks</h4>
                                 <p>Identify top and low-selling products to optimize inventory and ordering decisions.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Feature 11: Offers & Discount Management -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe11.png" alt="Offers & Discount Management" class="img-fluid mb-3">
                                 <h4>Offers & Discount Management</h4>
                                 <p>Run promotions, festive discounts, and partner brand offers to drive sales.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Feature 12: Product Returns & Exchanges -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe12.png" alt="Product Returns & Exchanges" class="img-fluid mb-3">
                                 <h4>Product Returns & Exchanges</h4>
                                 <p>Manage returns and exchanges efficiently for better customer satisfaction.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Feature 13: Notification System -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe1.png" alt="Notification System" class="img-fluid mb-3">
                                 <h4>Notification System</h4>
                                 <p>Receive alerts for low stock, pending orders, and supplier updates.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Feature 14: Customer Segmentation -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe2.png" alt="Customer Segmentation" class="img-fluid mb-3">
                                 <h4>Customer Segmentation</h4>
                                 <p>Segment customers by purchase history to target marketing and loyalty programs.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Feature 15: Rewards & Membership Benefits -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe3.png" alt="Rewards & Membership Benefits" class="img-fluid mb-3">
                                 <h4>Rewards & Membership Benefits</h4>
                                 <p>Offer loyalty points, membership rewards, and personalized incentives.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Feature 16: mPOS & Mobile Billing -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe4.png" alt="mPOS & Mobile Billing" class="img-fluid mb-3">
                                 <h4>mPOS & Mobile Billing</h4>
                                 <p>Use on-the-go billing, barcode scanning, and stock verification through our mobile app.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Feature 17: E-Way Bill Integration -->
                  <div class="col-md-3 col-12 mb-4">
                     <div class="boxes flip-container">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-back">
                                 <img src="assets/images/fe5.png" alt="E-Way Bill Integration" class="img-fluid mb-3">
                                 <h4>E-Way Bill Integration</h4>
                                 <p>Generate compliant E-Way bills seamlessly for hardware deliveries.</p>
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
                  <h3>Basic Plan – Small Hardware Stores</h3>
                  <div class="price">💳 ₹3,499 <span>/month</span></div>
               </div>
               <ul class="pricing-features">
                  <li>✔ Smart POS & Billing</li>
                  <li>✔ Basic Inventory Management & Stock Alerts</li>
                  <li>✔ Digital GST-Compliant Invoices</li>
                  <li>✔ Barcode & Label Generator</li>
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
                  <h3>Standard Plan – Growing Hardware Stores</h3>
                  <div class="price">💳 ₹6,999 <span>/month</span></div>
               </div>
               <ul class="pricing-features">
                  <li>✔ Everything in Basic, plus:</li>
                  <li>✔ Customer Segmentation & CRM</li>
                  <li>✔ Loyalty & Membership Programs</li>
                  <li>✔ Multi-Location Stock Management</li>
                  <li>✔ Custom Online Store Integration</li>
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
                  <h3>Premium Plan – Multi-Branch & Franchise Owners</h3>
                  <div class="price">💳 Custom Pricing</div>
               </div>
               <ul class="pricing-features">
                  <li>✔ Everything in Standard, plus:</li>
                  <li>✔ Centralized Multi-Store Management</li>
                  <li>✔ Unified Customer Database & Event Alerts</li>
                  <li>✔ Centralized Accounting & Stock Control</li>
                  <li>✔ E-commerce & Payment Gateway Integrations</li>
                  <li>✔ Dedicated Support & Advanced Analytics</li>
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
                  <img src="assets/images/img266.jpg" alt="Multi-Store Hardware Retail Management">
               </figure>
            </div>
         </div>

         <div class="col-md-7 order-md-1">
            <div class="heading-wrap text-start">
               <h2>Centralized Hardware Retail Management for Multi-Location Businesses
<span>Hardware Retail Management</span></h2>
               <p>One powerful system to control operations, finances, and customer insights across every store.</p>
            </div>
            <div class="expertise-wrap bridal-wrap">
               <ul>
                  <li>Unified Customer Database – Access all your customers' information in one place for easy marketing and CRM activities.</li>
                  <li>Seamless Stock Transfer & Requests – Effortlessly move stock between warehouses and stores to ensure availability at all times.</li>
                  <li>Insightful Reporting & Analytics – Generate detailed reports from all hardware store branches in one dashboard. Make smart, data-driven business decisions.</li>
                  <li>Simplified Store Management – Manage stock SKUs across all locations from a single POS system.</li>
                  <li>Efficient Inventory Control – Track all inventory in real time—no more guessing or manual counting.</li>
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
                  <img src="assets/images/img267.jpg" alt="Hardware Store Management Software">
               </figure>
            </div>
         </div>

         <div class="col-md-7">
            <div class="heading-wrap text-start">
               <h2>The Key to Success: <span> Complete Hardware Store Management</span></h2>
               <p>Our all-in-one hardware store software handles everything from POS billing and accounting to CRM and online store management, ensuring smooth operations at every step.</p>
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

<section class="bridal-store-sec hardware-store-sec">
   <div class="container">
      <div class="row">
         <div class="col-md-12">
            <div class="bridal-store hardware-store">
               <h2>Digify Soft Solutions: A Smart Software for Your Hardware Store’s Success</h2>
               <p>Hardware stores face unique challenges such as managing multiple variants of similar products, tracking SKUs across locations, warehouses, and godowns, and coordinating with multiple suppliers. Add to that workflows like accounting, CRM, promotions, discount management, and online store operations—it becomes overwhelming if handled manually.</p>
               <p>Digify Soft Solutions hardware store billing software provides customized features, strategic modules, and add-ons to tackle all these challenges efficiently.</p>
               <p>Unlike generic solutions, Digify Soft Solutions is specifically designed for hardware stores, offering tailored tools and smart features that cover every aspect of your retail operations.</p>
               <p>Stay organized, reduce errors, and grow your hardware store business with confidence.</p>
               <button  onclick="window.location.href='contact-us.php'"  class="cta-button">Avail your free demo today!</button>
            </div>
         </div>
      </div>
   </div>
</section>

<section class="manufacturing-key section-bg pt-60">
   <div class="container">
      <div class="heading-wrap">
         <h2>How to Use Digify Soft Solutions <span>Hardware Store Software</span></h2>
      </div>
      <div class="row justify-content-center gy-4">

         <!-- 01. Sign Up and Login -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>01. Sign Up and Login</h3>
               <ul>
                  <li>Create an account or log in with your existing credentials.</li>
                  <li>Set up your hardware store profile, GST details, and payment preferences.</li>
               </ul>
            </div>
         </div>

         <!-- 02. Add Products and Inventory -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>02. Add Products and Inventory</h3>
               <ul>
                  <li>Upload all hardware items with details like SKUs, variants, prices, and stock levels.</li>
                  <li>Assign barcodes to simplify billing and inventory tracking.</li>
               </ul>
            </div>
         </div>

         <!-- 03. Multi-Store Management -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>03. Multi-Store Management</h3>
               <ul>
                  <li>Connect multiple store locations, warehouses, and godowns in a single dashboard.</li>
                  <li>Track stock, sales, and transfers across all locations in real time.</li>
               </ul>
            </div>
         </div>

         <!-- 04. Billing and POS -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>04. Billing and POS</h3>
               <ul>
                  <li>Scan product barcodes for fast billing.</li>
                  <li>Accept multiple payment modes (cash, card, UPI).</li>
                  <li>Print or email invoices to customers.</li>
               </ul>
            </div>
         </div>

         <!-- 05. Purchase and Supplier Management -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>05. Purchase and Supplier Management</h3>
               <ul>
                  <li>Create and track purchase orders for suppliers.</li>
                  <li>Update inventory automatically upon receiving stock.</li>
                  <li>Monitor supplier performance for timely deliveries.</li>
               </ul>
            </div>
         </div>

         <!-- 06. Customer Management -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>06. Customer Management</h3>
               <ul>
                  <li>Maintain a unified database of all customers.</li>
                  <li>Track purchase history, send promotional messages, and manage loyalty programs.</li>
               </ul>
            </div>
         </div>

         <!-- 07. Reporting and Analytics -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>07. Reporting and Analytics</h3>
               <ul>
                  <li>Access sales reports, inventory summaries, and profit/loss statements.</li>
                  <li>Make informed decisions based on branch-wise or product-wise analytics.</li>
               </ul>
            </div>
         </div>

         <!-- 08. Online Store Integration -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>08. Online Store Integration</h3>
               <ul>
                  <li>Sync inventory with your online store.</li>
                  <li>Manage online and offline sales from a single dashboard.</li>
               </ul>
            </div>
         </div>

         <!-- 09. Cloud Access Anywhere -->
         <div class="col-lg-4 col-md-6">
            <div class="key-box">
               <h3>09. Cloud Access Anywhere</h3>
               <ul>
                  <li>Manage your business remotely using cloud-based access.</li>
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
                  <li>Use free demos and training sessions to get started quickly.</li>
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
                           1. What is Digify Soft Solutions Hardware Store Software?
                        </button>
                     </h2>
                     <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A1. A cloud-based POS &amp; ERP solution to manage billing, inventory, CRM, GST compliance, and e-commerce for hardware stores.
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
                           A2. Yes, the Premium Plan allows centralized management of multiple stores or franchises.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 3 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading3">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                           3. Does it support GST-compliant billing?
                        </button>
                     </h2>
                     <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A3. Yes. The software generates error-free GST invoices and supports E-Way bill integration.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 4 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading4">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                           4. Can I manage inventory and stock alerts efficiently?
                        </button>
                     </h2>
                     <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A4. Absolutely. It offers real-time stock monitoring, alerts for fast/slow-selling products, and auto-reordering.
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
                           A5. Yes. Accept payments via UPI, credit/debit cards, digital wallets, and cash.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 6 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading6">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                           6. Can I sell products online with this software?
                        </button>
                     </h2>
                     <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A6. Yes. Create a custom online store and sync inventory with offline and online sales.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 7 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading7">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                           7. Does it include reporting and analytics?
                        </button>
                     </h2>
                     <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A7. Yes. Access 150+ reports covering sales, inventory, purchases, and customer insights.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 8 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading8">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                           8. Can I manage suppliers and purchase orders?
                        </button>
                     </h2>
                     <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A8. Yes. Track purchase orders, suppliers, payments, and supply chain effectively.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 9 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading9">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                           9. Can I run offers, discounts, and loyalty programs?
                        </button>
                     </h2>
                     <div id="collapse9" class="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A9. Yes. The software includes promotions, festive discounts, and customer rewards.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 10 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading10">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                           10. Is this software customizable for my hardware store?
                        </button>
                     </h2>
                     <div id="collapse10" class="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A10. Yes. Digify Soft Solutions provides full customization for POS, inventory, CRM, multi-location, and e-commerce modules.
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