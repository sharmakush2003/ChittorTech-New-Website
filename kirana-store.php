<!-- header -->
   <?php
  include 'db.php';
  include 'fetch_meta.php';

  $pageMeta = getPageMeta('kirana-store');
  $pageTitle = $pageMeta['page_title'] ?? 'kirana-store';
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
                  <h1>India’s #1 AI-Powered Cloud Kirana Store Management Software</h1>
                  <h4>Digify Soft Solutions – AI Smart POS & Inventory for Kirana Stores</h4>
                  <p>Increase profits and simplify store operations with AI-powered billing, inventory, accounts, supplier, and customer management—all controlled from a single intelligent AI platform.</p>
                  <a class="schedule-btn" href="contact-us.php">👉 Schedule Your Free Demo Today</a>
               </div>
            </div>
         </div>
         <div class="col-md-5">
            <div class="inner-banner-img">
               <figure>
                  <img src="assets/images/Cloud-Kirana.png">
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

   <!-- AI Easy Inventory Management -->
   <div class="col-md-3 col-sm-6">
      <div class="key-box">
         <h3>AI Easy Inventory Management</h3>
         <p>Track and control your Kirana store stock with real-time AI updates. Get instant alerts for items that need restocking or are nearing expiry.</p>
         <ul>
            <li>AI category & variant control for all products</li>
            <li>AI deadstock & slow-moving stock reports</li>
            <li>AI automated reorders to prevent stockouts</li>
            <li>AI expiry & shelf-life alerts for perishables</li>
         </ul>
      </div>
   </div>

   <!-- AI High-Speed Billing & POS -->
   <div class="col-md-3 col-sm-6">
      <div class="key-box">
         <h3>AI High-Speed Billing & POS</h3>
         <p>Make billing fast, accurate, and fully AI-driven. Accept multiple payments and ensure smooth checkout for customers.</p>
         <ul>
            <li>AI multi-payment support: Cash, Card, UPI</li>
            <li>AI weigh-scale integration for loose items</li>
            <li>AI cash register & tender tracking</li>
            <li>AI digital & SMS invoice sharing</li>
         </ul>
      </div>
   </div>

   <!-- AI Daily Accounting Management -->
   <div class="col-md-3 col-sm-6">
      <div class="key-box">
         <h3>AI Daily Accounting Management</h3>
         <p>Simplify bookkeeping and GST compliance with AI-powered accounting tools.</p>
         <ul>
            <li>AI bank reconciliation & stock audit trail</li>
            <li>AI P&amp;L statements and balance sheets</li>
            <li>AI GST filing & compliance automation</li>
            <li>AI integrated POS & inventory accounting</li>
         </ul>
      </div>
   </div>

   <!-- AI Loyalty, Promotions & CRM -->
   <div class="col-md-3 col-sm-6">
      <div class="key-box">
         <h3>AI Loyalty, Promotions & CRM</h3>
         <p>Engage customers, reward loyalty, and increase sales with AI-driven CRM and promotions.</p>
         <ul>
            <li>AI bulk WhatsApp promotions & notifications</li>
            <li>AI coupons, vouchers & discount management</li>
            <li>AI loyalty & membership points tracking</li>
            <li>AI customer segmentation & behavior analysis</li>
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
                  <h2>Complete AI-Powered Solution for Modern Kirana Stores </h2>
                  <p>Run your Kirana store effortlessly with an AI-driven platform that automates billing, inventory, accounting, and customer engagement—all in one system.</p>
               </div>
               <div class="desktop-industries">
               <div class="row justify-content-center">

                    <!-- Feature 1 -->
                    <div class="col-md-4 col-12 mb-4">
                      <div class="boxes flip-container">
                        <div class="flip-card">
                          <div class="flip-card-inner">
                            <div class="flip-card-back">
                              <img src="assets/images/fe1.png" alt="SMS Bills &amp; Offers" class="img-fluid mb-3">
                             <h4>AI Billing & Checkout</h4>
<ul>
   <li>AI instant POS for fast and precise bill generation</li>
   <li>AI weight-based billing with scale integration for loose items</li>
   <li>AI multiple payment support – cash, cards, UPI, and digital wallets</li>
   <li>AI cash & transaction monitoring for payments and refunds</li>
   <li>AI-powered returns and exchanges with real-time stock updates</li>
</ul>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Feature 2 -->
                    <div class="col-md-4 col-12 mb-4">
                      <div class="boxes flip-container">
                        <div class="flip-card">
                          <div class="flip-card-inner">
                            <div class="flip-card-back">
                              <img src="assets/images/fe2.png" alt="SMS Bills &amp; Offers" class="img-fluid mb-3">
                             <h4>AI Stock & Inventory Control</h4>
<ul>
   <li>AI real-time inventory monitoring across the entire store</li>
   <li>AI high & low demand insights to identify fast- and slow-moving items</li>
   <li>AI auto-replenishment alerts and automated reorder suggestions</li>
   <li>AI barcode & label creator for quick product identification</li>
   <li>AI shelf-life & expiry alerts to prevent expired stock sales</li>
   <li>AI multi-location inventory tracking for warehouses, godowns, and branches</li>
</ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Feature 3 -->
                    <div class="col-md-4 col-12 mb-4">
                      <div class="boxes flip-container">
                        <div class="flip-card">
                          <div class="flip-card-inner">
                            <div class="flip-card-back">
                              <img src="assets/images/fe3.png" alt="SMS Bills &amp; Offers" class="img-fluid mb-3">
                              <h4>AI Accounting & Compliance</h4>
<ul>
   <li>AI ledger & finance management for profits, expenses, and balance sheets</li>
   <li>AI tax & GST filing with audit-ready automated reports</li>
   <li>AI integrated POS accounting syncing sales and inventory with accounts</li>
</ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Feature 4 -->
                    <div class="col-md-4 col-12 mb-4">
                      <div class="boxes flip-container">
                        <div class="flip-card">
                          <div class="flip-card-inner">
                            <div class="flip-card-back">
                              <img src="assets/images/fe4.png" alt="SMS Bills &amp; Offers" class="img-fluid mb-3">
                              <h4>AI Customer Engagement & Loyalty</h4>
<ul>
   <li>AI WhatsApp & SMS alerts for bills, promotions, and updates</li>
   <li>AI loyalty & reward programs to track and reward repeat customers</li>
   <li>AI discount & offer management for coupons and campaigns</li>
   <li>AI customer profiling based on behavior, VIP status, and purchase history</li>
   <li>AI shopping insights to optimize inventory and promotional strategies</li>
</ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Feature 5 -->
                    <div class="col-md-4 col-12 mb-4">
                      <div class="boxes flip-container">
                        <div class="flip-card">
                          <div class="flip-card-inner">
                            <div class="flip-card-back">
                              <img src="assets/images/fe5.png" alt="SMS Bills &amp; Offers" class="img-fluid mb-3">
                              
<h4>AI Online & Digital Expansion</h4>
<ul>
   <li>AI e-commerce integration to launch your Kirana store online</li>
   <li>AI real-time inventory sync between online and offline stores</li>
   <li>AI delivery notifications to update customers on order status</li>
</ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Feature 6 -->
                    <div class="col-md-4 col-12 mb-4">
                      <div class="boxes flip-container">
                        <div class="flip-card">
                          <div class="flip-card-inner">
                            <div class="flip-card-back">
                              <img src="assets/images/fe6.png" alt="SMS Bills &amp; Offers" class="img-fluid mb-3">
                            <h4>AI Advanced Reporting & Insights</h4>
<ul>
   <li>AI performance dashboard to track sales, stock, and customers centrally</li>
   <li>AI predictive analytics for demand forecasting and purchase planning</li>
   <li>AI insights to improve efficiency, profitability, and store operations</li>
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
      
      <div class="row justify-content-center">

         <!-- Basic Plan -->
         <div class="col-md-4 mb-4">
            <div class="pricing-card basic">
               <div class="pricing-header">
                  <div class="plan-icon-wrap bg-success">
                     <i class="bi bi-shop"></i>
                  </div>
                  <h3>Basic Plan – Small Kirana Stores</h3>
                  <p>Automated POS Billing & Inventory Management for small shops.</p>
               </div>
               <ul class="pricing-features">
                  <li>✔ Automated Billing & POS</li>
                  <li>✔ Real-time Inventory Management</li>
                  <li>✔ Low Stock Alerts & Reordering</li>
                  <li>✔ GST-Compliant Invoices</li>

               </ul>
               <div class="price">₹5,999 <span>/month</span></div>
            </div>
         </div>

         <!-- Standard Plan -->
         <div class="col-md-4 mb-4">
            <div class="pricing-card standard">
               <div class="pricing-header">
                  <div class="plan-icon-wrap bg-primary">
                     <i class="bi bi-cart4"></i>
                  </div>
                  <h3>Standard Plan – Medium Kirana Stores</h3>
                  <p>Everything in Basic, plus advanced stock & sales management.</p>
               </div>
               <ul class="pricing-features">
                  <li>✔ Everything in Basic, plus:</li>
                  <li>✔ Barcode & Label Generator</li>
                  <li>✔ Expiry & Shelf-Life Management</li>
                  <li>✔ Loyalty & Membership Points</li>
                  <li>✔ Advanced Reporting & Analytics</li>
               </ul>
               <div class="price">₹11,999 <span>/month</span></div>
            </div>
         </div>

         <!-- Premium Plan -->
         <div class="col-md-4 mb-4">
            <div class="pricing-card premium">
               <div class="pricing-header">
                  <div class="plan-icon-wrap bg-danger">
                     <i class="bi bi-building"></i>
                  </div>
                  <h3>Premium Plan – Large Kirana Chains</h3>
                  <p>The ultimate solution for multi-branch Kirana stores.</p>
               </div>
               <ul class="pricing-features">
                  <li>✔ Everything in Standard, plus:</li>
                  <li>✔ Multi-Branch Management</li>
                  <li>✔ Online Store Integration</li>
                  <li>✔ Weigh-Scale & Mobile POS Integration</li>
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
                    <h2>Top Benefits of Using AI-Powered Kirana Store POS Software</h2>
                </div>
            </div>
        </div>

        <div class="row justify-content-center gy-4">

          <!-- Step 1 -->
          <div class="col-lg-4 col-md-6">
              <div class="key-box">
                  <h3>01. Fast and Error-Free Billing</h3>
                  <ul>
                      <li>Accelerates checkout with barcode scanning</li>
                      <li>Generates accurate bills with automatic GST calculations for multiple tax slabs</li>
                      <li>Minimizes human errors in pricing and calculations</li>
                      <li>Supports multiple payment options and gateways</li>
                  </ul>
              </div>
          </div>

          <!-- Step 2 -->
          <div class="col-lg-4 col-md-6">
              <div class="key-box">
                  <h3>02. Robust Inventory Control</h3>
                  <ul>
                      <li>Real-time tracking of stock levels</li>
                      <li>Automated reorders for low-stock items</li>
                      <li>Simplifies management of fast- and slow-moving goods</li>
                  </ul>
              </div>
          </div>

          <!-- Step 3 -->
          <div class="col-lg-4 col-md-6">
              <div class="key-box">
                  <h3>03. Full Compliance Management</h3>
                  <ul>
                      <li>GST-compliant invoicing and reporting</li>
                      <li>Streamlined audit trails for tax purposes</li>
                  </ul>
              </div>
          </div>

          <!-- Step 4 -->
          <div class="col-lg-4 col-md-6">
              <div class="key-box">
                  <h3>04. Worry-Free Supplier Management</h3>
                  <ul>
                      <li>Centralized supplier database</li>
                      <li>Efficiently track purchase orders and supplier transactions</li>
                  </ul>
              </div>
          </div>

          <!-- Step 5 -->
          <div class="col-lg-4 col-md-6">
              <div class="key-box">
                  <h3>05. Accurate Financial Reporting & Accounts</h3>
                  <ul>
                      <li>Inbuilt accounting modules for balance sheets, P&L statements, and cash flow</li>
                      <li>Real-time insights for informed financial decisions</li>
                  </ul>
              </div>
          </div>

          <!-- Step 6 -->
          <div class="col-lg-4 col-md-6">
              <div class="key-box">
                  <h3>06. Smooth Home-Delivery Management</h3>
                  <ul>
                      <li>Automated delivery notifications and confirmations</li>
                      <li>Efficient tracking of home-delivery operations</li>
                  </ul>
              </div>
          </div>

          <!-- Step 7 -->
          <div class="col-lg-4 col-md-6">
              <div class="key-box">
                  <h3>07. Easily Set Up Online Kirana Store</h3>
                  <ul>
                      <li>Launch a custom online store for your Kirana business</li>
                      <li>Sync inventory across online and offline stores</li>
                  </ul>
              </div>
          </div>

          <!-- Step 8 -->
          <div class="col-lg-4 col-md-6">
              <div class="key-box">
                  <h3>08. Happy Customers</h3>
                  <ul>
                      <li>Loyalty programs, membership points, and personalized offers</li>
                      <li>Effective customer engagement through SMS and WhatsApp</li>
                  </ul>
              </div>
          </div>

          <!-- Step 9 -->
          <div class="col-lg-4 col-md-6">
              <div class="key-box">
                  <h3>09. Profitable Business Decisions</h3>
                  <ul>
                      <li>Advanced reporting and analytics for informed strategy</li>
                      <li>Insights into sales trends, customer preferences, and stock performance</li>
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
                  <img src="assets/images/img256.jpg" alt="Local & National SEO Expertise">
               </figure>
            </div>
         </div>
       <div class="col-md-7 order-md-1">
   <div class="heading-wrap text-start">
      <h2>AI-Powered Multi-Store Mastery for <span>Kirana Outlets</span></h2>
      <p>Manage all your grocery stores, provision shops, and branches effortlessly with a single intelligent AI dashboard.</p>
   </div>

   <div class="expertise-wrap bridal-wrap">
      <ul>
         <li>
            <strong>AI Customer Insights :</strong>
            Consolidate customer details, preferences, purchase history, and behavior across every store.
         </li>

         <li>
            <strong>AI Smart Stock Transfers :</strong>
            Automatically request and move inventory between branches based on real-time, AI-driven demand.
         </li>

         <li>
            <strong>AI Central Analytics :</strong>
            Access interactive dashboards, standardized reports, and customizable AI-powered insights for all outlets.
         </li>

         <li>
            <strong>AI Multi-Location Operations :</strong>
            Monitor sales, inventory, and customer service activities across multiple Kirana stores from one platform.
         </li>

         <li>
            <strong>AI Unified Inventory Control :</strong>
            Track individual store inventory while maintaining a consolidated, AI-managed central stock view.
         </li>

         <li>
            <strong>AI Centralized Accounting :</strong>
            Manage financial transactions, reporting, and compliance for all branches from a single dashboard.
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
                  <img src="assets/images/img257.jpg" alt="Local & National SEO Expertise">
               </figure>
            </div>
         </div>
        <div class="col-md-7">
   <div class="heading-wrap text-start">
      <h2>Your AI Personal Assistant for <span>Kirana Store Management</span></h2>
      <p>From billing to home deliveries, manage every aspect of your Kirana store with an intelligent AI-driven POS platform.</p>
   </div>

   <div class="expertise-wrap bridal-wrap">
      <ul>
         <li>AI Smart POS – Fast, accurate billing with minimal effort</li>
         <li>AI Multi-Store Control – Operate multiple outlets anytime, anywhere</li>
         <li>AI Inventory & Barcode Management – Track and organize stock automatically</li>
         <li>AI Multi-Payment Processing – Accept cash, cards, UPI, and digital wallets seamlessly</li>
         <li>AI Advanced Reports & Analytics – Actionable insights for sales, inventory, and customers</li>
         <li>AI Online Store Launch – Expand digitally with a fully AI-synced e-commerce platform</li>
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
               <h2> Key    <span>Results</span> </h2>
            </div>
            <div class="why-choose-wrap">
               <ul>
                  <li>
                     <figure> <img src="assets/images/platforms1.png" alt=""> </figure>
                     <h3>2X Revenue Growth Rate</h3>
                  </li>
                  <li>
                     <figure> <img src="assets/images/platforms2.png" alt=""> </figure>
                     <h3>69+ Billing Hours Saved/Month</h3>
                  </li>
                  <li>
                     <figure> <img src="assets/images/platforms3.png" alt=""> </figure>
                     <h3>51% Faster Processing Time</h3>
                  </li>
                  <li>
                     <figure> <img src="assets/images/platforms4.png" alt=""> </figure>
                     <h3>57% Decrease in Manual Errors</h3>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>




<section class="manufacturing-key section-bg">
   <div class="container">
      <div class="heading-wrap">
          <h2>Why Use Kirana <span>Store POS Software?</span></h2>
          <p>Running a Kirana store involves juggling inventory, billing, customer engagement, supplier management, and finances. Manual handling often leads to errors, delays, and lost opportunities. A POS software simplifies operations and drives profitability.</p>
      </div>
      <div class="row justify-content-center gy-4">

          <!-- 01. Faster and Error-Free Billing -->
          <div class="col-lg-4 col-md-6">
              <div class="key-box">
                  <h3>01. Faster and Error-Free Billing</h3>
                  <ul>
                      <li>Speeds up checkout process with barcode scanning</li>
                      <li>Automatic GST calculations reduce human errors</li>
                      <li>Multiple payment options ensure smooth transactions</li>
                  </ul>
              </div>
          </div>

          <!-- 02. Robust Inventory Control -->
          <div class="col-lg-4 col-md-6">
              <div class="key-box">
                  <h3>02. Robust Inventory Control</h3>
                  <ul>
                      <li>Tracks stock in real-time across single or multiple stores</li>
                      <li>Identifies fast-moving and slow-moving items for better planning</li>
                      <li>Automated reorders prevent stockouts</li>
                  </ul>
              </div>
          </div>

          <!-- 03. Centralized Multi-Store Management -->
          <div class="col-lg-4 col-md-6">
              <div class="key-box">
                  <h3>03. Centralized Multi-Store Management</h3>
                  <ul>
                      <li>Manage multiple store branches from a single dashboard</li>
                      <li>Centralized reporting, inventory, and accounting for better control</li>
                      <li>Easy stock transfers between branches</li>
                  </ul>
              </div>
          </div>

          <!-- 04. Customer Engagement & Loyalty -->
          <div class="col-lg-4 col-md-6">
              <div class="key-box">
                  <h3>04. Customer Engagement & Loyalty</h3>
                  <ul>
                      <li>Unified customer database across stores</li>
                      <li>Personalized promotions, vouchers, and membership rewards</li>
                      <li>Targeted marketing increases repeat purchases</li>
                  </ul>
              </div>
          </div>

          <!-- 05. Accurate Financial Reporting -->
          <div class="col-lg-4 col-md-6">
              <div class="key-box">
                  <h3>05. Accurate Financial Reporting</h3>
                  <ul>
                      <li>Inbuilt accounting modules for balance sheets, cash flow, P&L statements</li>
                      <li>GST compliance and easy filing for audits</li>
                      <li>Real-time financial insights for informed decisions</li>
                  </ul>
              </div>
          </div>

          <!-- 06. Efficient Supplier Management -->
          <div class="col-lg-4 col-md-6">
              <div class="key-box">
                  <h3>06. Efficient Supplier Management</h3>
                  <ul>
                      <li>Centralized supplier database for all products</li>
                      <li>Track contracts, invoices, and procurement efficiently</li>
                      <li>Streamlined stock management and faster restocking</li>
                  </ul>
              </div>
          </div>

          <!-- 07. Online & Home Delivery Integration -->
          <div class="col-lg-4 col-md-6">
              <div class="key-box">
                  <h3>07. Online & Home Delivery Integration</h3>
                  <ul>
                      <li>Sell products via your online store seamlessly</li>
                      <li>Sync online and offline inventories</li>
                      <li>Delivery alerts and order management improve customer experience</li>
                  </ul>
              </div>
          </div>

          <!-- 08. Time & Cost Savings -->
          <div class="col-lg-4 col-md-6">
              <div class="key-box">
                  <h3>08. Time & Cost Savings</h3>
                  <ul>
                      <li>Saves hours of manual work every month</li>
                      <li>Reduces human errors in billing and inventory</li>
                      <li>Improves overall store efficiency and profitability</li>
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
               <h2>Unlock Your Kirana Shop's Highest Potential with Digify Soft Solutions’ Cloud-Based Software</h2>
               <p>Kirana stores operate long hours with a constant flow of customers. Managing a wide range of products, multiple variations, weight-wise pricing, packaging requirements, and different customer preferences can be overwhelming. On top of that, store owners also handle home deliveries, billing, accounts, suppliers, and supplier pricing daily.</p>
               <p>Amidst this busy schedule, Digify Soft Solutions comes as a reliable partner for Kirana stores. Once implemented, the software automates most manual tasks, streamlines operations, and reduces workload for store owners. It improves customer service speed, ensures accurate billing, and manages GST-compliant invoices and inventory like a pro.</p>
               <p>Digify Soft Solutions’ Kirana Store Software equips store owners with all the features, add-ons, and modules needed to run and scale a local Kirana store profitably.</p>
               <button  onclick="window.location.href='contact-us.php'"  class="cta-button">Avail your free demo now!</button>
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
                    <h2>How to Use Kirana Store POS Software – Digify Soft Solutions</h2>
                    <p>Our Kirana Store POS software is designed to make store operations simple, efficient, and profitable. Follow these steps to get started and maximize your retail management.</p>
                </div>
            </div>
        </div>

        <div class="row justify-content-center gy-4">
            <!-- Step 1 -->
            <div class="col-lg-4 col-md-6">
                <div class="key-box">
                    <h3>01. Login and Dashboard Access</h3>
                    <ul>
                        <li>Access your Digify Soft Solutions account via web or mobile app</li>
                        <li>Enter your credentials to reach the central dashboard</li>
                        <li>View store performance, sales, inventory alerts, and customer metrics at a glance</li>
                    </ul>
                </div>
            </div>

            <!-- Step 2 -->
            <div class="col-lg-4 col-md-6">
                <div class="key-box">
                    <h3>02. Point of Sale (POS)</h3>
                    <ul>
                        <li>Scan items using a barcode scanner for fast and accurate billing</li>
                        <li>Apply multiple payment options: cash, cards, UPI, or digital wallets</li>
                        <li>Generate bills instantly and share them with customers via SMS or WhatsApp</li>
                        <li>Handle returns and exchanges easily</li>
                    </ul>
                </div>
            </div>

            <!-- Step 3 -->
            <div class="col-lg-4 col-md-6">
                <div class="key-box">
                    <h3>03. Inventory Management</h3>
                    <ul>
                        <li>Track stock levels of all items in real-time</li>
                        <li>Categorize products: fast-moving, slow-moving, expiry-based, etc.</li>
                        <li>Enable automated reorders for low-stock items</li>
                        <li>Organize products into categories like grains, snacks, beverages, etc.</li>
                        <li>Manage multiple stores’ inventory from a single dashboard</li>
                    </ul>
                </div>
            </div>

            <!-- Step 4 -->
            <div class="col-lg-4 col-md-6">
                <div class="key-box">
                    <h3>04. Supplier & Stock Management</h3>
                    <ul>
                        <li>Maintain a centralized supplier database with contact details, invoices, and contracts</li>
                        <li>Map products to suppliers for faster procurement</li>
                        <li>Initiate stock transfers between branches and track approvals</li>
                        <li>Receive alerts for low-stock or expiring items</li>
                    </ul>
                </div>
            </div>

            <!-- Step 5 -->
            <div class="col-lg-4 col-md-6">
                <div class="key-box">
                    <h3>05. Accounting & Financial Management</h3>
                    <ul>
                        <li>Access inbuilt accounting modules for balance sheets, cash flow, and P&L statements</li>
                        <li>Generate GST-compliant invoices automatically</li>
                        <li>File GST returns directly from the software</li>
                        <li>Track all financial transactions centrally for multi-store setups</li>
                    </ul>
                </div>
            </div>

            <!-- Step 6 -->
            <div class="col-lg-4 col-md-6">
                <div class="key-box">
                    <h3>06. Customer Engagement</h3>
                    <ul>
                        <li>Maintain a unified customer database across all stores</li>
                        <li>Track purchase history, preferences, and loyalty points</li>
                        <li>Segment customers (VIP, regular, risk, lost) for targeted promotions</li>
                        <li>Send offers, discounts, or feedback requests via SMS or WhatsApp</li>
                    </ul>
                </div>
            </div>

            <!-- Step 7 -->
            <div class="col-lg-4 col-md-6">
                <div class="key-box">
                    <h3>07. Home Delivery & Online Orders</h3>
                    <ul>
                        <li>Receive and manage online orders from your Kirana store website</li>
                        <li>Sync inventory between online and physical stores</li>
                        <li>Send delivery alerts and confirmation messages to customers</li>
                    </ul>
                </div>
            </div>

            <!-- Step 8 -->
            <div class="col-lg-4 col-md-6">
                <div class="key-box">
                    <h3>08. Reporting & Analytics</h3>
                    <ul>
                        <li>Access over 150+ reports for sales, inventory, and customer behavior</li>
                        <li>View dashboards with interactive charts for better decision-making</li>
                        <li>Analyze fast-selling and slow-selling items to optimize inventory</li>
                        <li>Get consolidated multi-store reports for business growth insights</li>
                    </ul>
                </div>
            </div>

            <!-- Step 9 -->
            <div class="col-lg-4 col-md-6">
                <div class="key-box">
                    <h3>09. Additional Features</h3>
                    <ul>
                        <li>Label and barcode generation for efficient stock tracking</li>
                        <li>Weigh-scale integration for loose items</li>
                        <li>Loyalty programs and membership points for repeat customers</li>
                        <li>Stock verification to ensure physical and digital inventory match</li>
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
                           What is Digify Soft Solutions Kirana Store Software?
                        </button>
                     </h2>
                     <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A cloud-based POS and inventory system to manage billing, stock, accounts, CRM, and online orders for Kirana stores.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 2 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading2">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                           Does the software support weigh-scale billing?
                        </button>
                     </h2>
                     <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           Yes, our weigh-scale integration ensures accurate billing for loose items like grains and vegetables.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 3 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading3">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                           Can I track slow and fast-selling items?
                        </button>
                     </h2>
                     <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           Absolutely, the software provides fast/slow-moving stock reports to optimize inventory management.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 4 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading4">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                           Is GST compliance included?
                        </button>
                     </h2>
                     <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           Yes, all invoices are GST-compliant, and GST returns can be filed directly from the system.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 5 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading5">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                           Can I manage loyalty points and discounts?
                        </button>
                     </h2>
                     <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           Yes, reward regular customers with loyalty points, coupons, and discounts via POS and CRM features.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 6 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading6">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                           Can I open an online Kirana store?
                        </button>
                     </h2>
                     <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           Yes, integrate with a custom online store to manage orders and home deliveries.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 7 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading7">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                           Does it support multi-branch operations?
                        </button>
                     </h2>
                     <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           Yes, the Premium Plan supports multi-branch management with centralized data synchronization.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 8 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading8">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                           Can I track customer behavior and segmentation?
                        </button>
                     </h2>
                     <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           Yes, you can segment customers and analyze their purchase patterns to boost sales.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 9 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading9">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                           How does stock verification work?
                        </button>
                     </h2>
                     <div id="collapse9" class="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           Periodic audits ensure accurate inventory levels with the stock verification module.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 10 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading10">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                           Is the software customizable for my Kirana store?
                        </button>
                     </h2>
                     <div id="collapse10" class="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           Yes, Digify Soft Solutions offers full customization for POS, inventory, CRM, accounting, and e-commerce integration.
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