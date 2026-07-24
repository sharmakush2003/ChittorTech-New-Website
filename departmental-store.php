<!-- header -->
   <?php
 include 'db.php';
  include 'fetch_meta.php';

  $pageMeta = getPageMeta('departmental-store');
  $pageTitle = $pageMeta['page_title'] ?? 'departmental-store';
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
                  <h1>India's Leading Cloud-Based Departmental Store Software</h1>
                  <p>Take your retail business to the next level with Digify Soft Solutions’ advanced departmental store software—designed to simplify operations, boost efficiency, and increase customer satisfaction.</p>
                  <a class="schedule-btn" href="contact-us.php">Schedule a free demo</a>
               </div>
            </div>
         </div>
         <div class="col-md-5">
            <div class="inner-banner-img">
               <figure>
                  <img src="assets/images/img243.jpg">
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
         <!-- Efficient Inventory Management -->
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3>Hassle-Free Inventory Management</h3>
               <p>Easily manage your store’s inventory with automated restocking, stock audits, and barcode generation. Stay on top of your stock levels and never run out of essential items.</p>
               <ul>
                  <li>Supply chain management</li>
                  <li>Product categorization</li>
                  <li>Stock alerts</li>
               </ul>
            </div>
         </div>
         <!-- No-Hassle Billing -->
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3>Efficient Cashier Counters</h3>
               <p>Streamline billing at multiple counters with smart POS systems, GST-compliant invoices, and integrated payment gateways for a smooth checkout experience.</p>
               <ul>
                  <li>Smart POS</li>
                  <li>GST-integrated billing</li>
                  <li>Mobile invoice sharing</li>
               </ul>
            </div>
         </div>
         <!-- Customer-Centric CRM -->
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3>Customer Engagement with Smart CRM</h3>
               <p>Enhance customer loyalty with integrated CRM features such as loyalty points, membership management, birthday wishes, and feedback collection.</p>
               <ul>
                  <li>Customer segmentation</li>
                  <li>Discount vouchers and coupons</li>
                  <li>Loyalty points management</li>
               </ul>
            </div>
         </div>
         <div class="col-md-3 col-sm-6">
            <div class="key-box">
               <h3>Omnichannel E-Commerce</h3>
               <p>Expand your store’s reach online. Build and manage your online store with seamless inventory synchronization, Shopify/WooCommerce integration, and integrated payment gateways.</p>
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
               <h2>Key Features for Departmental  <span>Store Success</span> </h2>
            </div>
            <div class="desktop-industries">
            <div class="row justify-content-center">
                 <!-- Feature 1 -->
                 <div class="col-md-4 col-12 mb-4">
                   <div class="boxes flip-container">
                     <div class="flip-card">
                       <div class="flip-card-inner">
                         <div class="flip-card-back">
                           <img src="assets/images/ss1.png" alt="Faster Billing" class="img-fluid mb-3">
                           <h4>Supply Chain Management</h4>
                           <p>Manage inventory flow efficiently from suppliers to warehouses and retail outlets.</p>
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
                           <img src="assets/images/ss2.png" alt="SMS Bills & Offers" class="img-fluid mb-3">
                           <h4>Warehouse Management</h4>
                           <p>Control warehouse goods, layouts, and inventory distribution with built-in tools.</p>
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
                           <img src="assets/images/ss3.png" alt="Multiple Payment Gateways" class="img-fluid mb-3">
                           <h4>Purchase Management</h4>
                           <p>Generate and process purchase orders quickly, reducing manual effort and errors.</p>
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
                           <img src="assets/images/ss4.png" alt="Stock Tracking" class="img-fluid mb-3">
                           <h4>Fast and Slow Selling Stock Analysis</h4>
                           <ul>
                             <li>Track high- and low-selling products to optimize inventory levels.</li>
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
                           <img src="assets/images/ss5.png" alt="Inventory Management" class="img-fluid mb-3">
                           <h4>Stock Management</h4>
                           <p>Organize inventory by category, type, or brand for easy tracking and retrieval.</p>
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
                           <img src="assets/images/ss6.png" alt="Stock Verification" class="img-fluid mb-3">
                           <h4>Stock Verification</h4>
                           <p>Conduct regular audits to reconcile actual stock with digital records.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 <!-- Feature 7 -->
                 <div class="col-md-4 col-12 mb-4">
                   <div class="boxes flip-container">
                     <div class="flip-card">
                       <div class="flip-card-inner">
                         <div class="flip-card-back">
                           <img src="assets/images/ss7.png" alt="Automated Reorders" class="img-fluid mb-3">
                           <h4>Stock-Wise Analysis</h4>
                           <p>Gain insights into sales trends and product performance.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 <!-- Feature 8 -->
                 <div class="col-md-4 col-12 mb-4">
                   <div class="boxes flip-container">
                     <div class="flip-card">
                       <div class="flip-card-inner">
                         <div class="flip-card-back">
                           <img src="assets/images/ss8.png" alt="Alerts & Notifications" class="img-fluid mb-3">
                           <h4>Label and Barcode Generator</h4>
                           <p>Generate professional labels and barcodes for efficient product tracking and billing.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 <!-- Feature 9 -->
                 <div class="col-md-4 col-12 mb-4">
                   <div class="boxes flip-container">
                     <div class="flip-card">
                       <div class="flip-card-inner">
                         <div class="flip-card-back">
                           <img src="assets/images/ss9.png" alt="Warehouse & Godown Management" class="img-fluid mb-3">
                           <h4>Stock Alerts and Notifications</h4>
                           <p>Receive automatic notifications when inventory is low to ensure timely restocking.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 <!-- Feature 10 -->
                 <div class="col-md-4 col-12 mb-4">
                   <div class="boxes flip-container">
                     <div class="flip-card">
                       <div class="flip-card-inner">
                         <div class="flip-card-back">
                           <img src="assets/images/ss10.png" alt="Intelligent POS" class="img-fluid mb-3">
                           <h4>Expense Management</h4>
                           <p>Track store expenses throughout the year with detailed financial records.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 <!-- Feature 11 -->
                 <div class="col-md-4 col-12 mb-4">
                   <div class="boxes flip-container">
                     <div class="flip-card">
                       <div class="flip-card-inner">
                         <div class="flip-card-back">
                           <img src="assets/images/ss11.png" alt="Discount & Loyalty Management" class="img-fluid mb-3">
                           <h4>Point of Sale (POS) System</h4>
                           <p>Accept multiple payment methods, including cash, cards, UPI, and mobile wallets.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 <!-- Feature 12 -->
                 <div class="col-md-4 col-12 mb-4">
                   <div class="boxes flip-container">
                     <div class="flip-card">
                       <div class="flip-card-inner">
                         <div class="flip-card-back">
                           <img src="assets/images/ss12.png" alt="Offers & Promotions Management" class="img-fluid mb-3">
                           <h4>Reporting and Analytics</h4>
                           <p>Access comprehensive reports to make informed business decisions.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 <!-- Feature 13 -->
                 <div class="col-md-4 col-12 mb-4">
                   <div class="boxes flip-container">
                     <div class="flip-card">
                       <div class="flip-card-inner">
                         <div class="flip-card-back">
                           <img src="assets/images/ss13.png" alt="Weigh Scale Integration" class="img-fluid mb-3">
                           <h4>GST-Compliant Billing</h4>
                           <p>Automatically calculate taxes and simplify financial compliance.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 <!-- Feature 14 -->
                 <div class="col-md-4 col-12 mb-4">
                   <div class="boxes flip-container">
                     <div class="flip-card">
                       <div class="flip-card-inner">
                         <div class="flip-card-back">
                           <img src="assets/images/ss14.png" alt="Barcode & Label Generator" class="img-fluid mb-3">
                           <h4>Multiple Billing Counters</h4>
                           <p>Serve customers quickly and efficiently without long queues.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 <!-- Feature 15 -->
                 <div class="col-md-4 col-12 mb-4">
                   <div class="boxes flip-container">
                     <div class="flip-card">
                       <div class="flip-card-inner">
                         <div class="flip-card-back">
                           <img src="assets/images/ss15.png" alt="Cash Register & Accounting" class="img-fluid mb-3">
                           <h4>Mobile Invoice Sharing</h4>
                           <p>Send bills directly to customers’ mobile devices via SMS for easy access.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 <!-- Feature 16 -->
                 <div class="col-md-4 col-12 mb-4">
                   <div class="boxes flip-container">
                     <div class="flip-card">
                       <div class="flip-card-inner">
                         <div class="flip-card-back">
                           <img src="assets/images/ss16.png" alt="mPOS & Mobile Management" class="img-fluid mb-3">
                           <h4>E-Way Bill Generation</h4>
                            <p>Generate electronic waybills for smooth and compliant goods movement.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 <!-- Feature 17 -->
                 <div class="col-md-4 col-12 mb-4">
                   <div class="boxes flip-container">
                     <div class="flip-card">
                       <div class="flip-card-inner">
                         <div class="flip-card-back">
                           <img src="assets/images/ss17.png" alt="Omnichannel E-Commerce" class="img-fluid mb-3">
                           <h4>Financial Management</h4>
                           <p>Monitor transactions, cash flows, and overall financial health.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 <!-- Feature 18 -->
                 <div class="col-md-4 col-12 mb-4">
                   <div class="boxes flip-container">
                     <div class="flip-card">
                       <div class="flip-card-inner">
                         <div class="flip-card-back">
                           <img src="assets/images/ss18.png" alt="Bookkeeping & Reports" class="img-fluid mb-3">
                           <h4>GST-Integrated Accounting</h4>
                           <p>Maintain accurate accounting records for hassle-free tax filing.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 <!-- Feature 19 -->
                 <div class="col-md-4 col-12 mb-4">
                   <div class="boxes flip-container">
                     <div class="flip-card">
                       <div class="flip-card-inner">
                         <div class="flip-card-back">
                           <img src="assets/images/ss19.png" alt="Centralized Multi-Branch Management" class="img-fluid mb-3">
                           <h4>WhatsApp Integration</h4>
                           <p>Send updates, reminders, and promotions directly to your customers’ phones.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                  <!-- Feature 19 -->
                 <div class="col-md-4 col-12 mb-4">
                   <div class="boxes flip-container">
                     <div class="flip-card">
                       <div class="flip-card-inner">
                         <div class="flip-card-back">
                           <img src="assets/images/ss20.png" alt="Centralized Multi-Branch Management" class="img-fluid mb-3">
                           <h4>Returns and Exchanges</h4>
                           <p>Process returns or exchanges instantly while updating inventory in real-time.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                  <!-- Feature 19 -->
                 <div class="col-md-4 col-12 mb-4">
                   <div class="boxes flip-container">
                     <div class="flip-card">
                       <div class="flip-card-inner">
                         <div class="flip-card-back">
                           <img src="assets/images/ss21.png" alt="Centralized Multi-Branch Management" class="img-fluid mb-3">
                           <h4>Online Departmental Store</h4>
                           <p>Create a custom online store for customers to browse and purchase products.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                  <!-- Feature 19 -->
                 <div class="col-md-4 col-12 mb-4">
                   <div class="boxes flip-container">
                     <div class="flip-card">
                       <div class="flip-card-inner">
                         <div class="flip-card-back">
                           <img src="assets/images/ss22.png" alt="Centralized Multi-Branch Management" class="img-fluid mb-3">
                           <h4>CRM</h4>
                           <p>Maintain a unified customer database for personalized engagement.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                  <!-- Feature 19 -->
                 <div class="col-md-4 col-12 mb-4">
                   <div class="boxes flip-container">
                     <div class="flip-card">
                       <div class="flip-card-inner">
                         <div class="flip-card-back">
                           <img src="assets/images/ss23.png" alt="Centralized Multi-Branch Management" class="img-fluid mb-3">
                           <h4>Offers and Discount Management</h4>
                           <p>Manage promotions, coupons, and special offers efficiently.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                  <!-- Feature 19 -->
                 <div class="col-md-4 col-12 mb-4">
                   <div class="boxes flip-container">
                     <div class="flip-card">
                       <div class="flip-card-inner">
                         <div class="flip-card-back">
                           <img src="assets/images/ss24.png" alt="Centralized Multi-Branch Management" class="img-fluid mb-3">
                           <h4>Loyalty and Membership Points</h4>
                           <p>Reward repeat customers with points or membership incentives to boost retention.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div class="col-md-4 col-12 mb-4">
                   <div class="boxes flip-container">
                     <div class="flip-card">
                       <div class="flip-card-inner">
                         <div class="flip-card-back">
                           <img src="assets/images/ss25.png" alt="Centralized Multi-Branch Management" class="img-fluid mb-3">
                           <h4>Experience the Difference</h4>
                           <p>Run your departmental store efficiently, grow sales, and enhance customer satisfaction with Digify Soft Solutions’ cloud-based software.</p>
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

<section class="cta-section">
   <div class="container">
      <div class="row">
         <div class="col-md-12">
            <div class="cta-box">
               <h2>Everything your business needs to scale faster, work smarter, and run smoother.</h2>
               <p>Smart, simple, and affordable—everything your business needs to grow faster and run smoothly.</p>
               <button  onclick="window.location.href='contact-us.php'"  class="cta-button">Choose Your Plan</button>
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
                  <img src="assets/images/img244.jpg" alt="Local & National SEO Expertise">
               </figure>
            </div>
         </div>
         <div class="col-md-7 order-md-1">
            <div class="heading-wrap text-start">
               <h2> Hassle-Free  <span>Multi-Store Management</span> </h2>
               <p>Oversee all your departmental store locations with centralized inventory, reporting, and management systems.</p>
            </div>
            <div class="expertise-wrap bridal-wrap">
               <ul>
                  <li><strong>Single Customer Database :</strong> Keep customer information consistent and accessible across all locations for unified and personalized service.</li>

                  <li><strong>Seamless Stock Transfers :</strong> Easily transfer goods between stores to balance stock levels and meet customer demand efficiently.</li>

                  <li><strong>Central Reporting & Analytics :</strong> Gain comprehensive insights into sales performance, inventory trends, and customer behavior across all locations.</li>

                  <li><strong>Centralized Management :</strong> Streamline oversight and control of multiple store locations from a single platform.</li>

                  <li><strong>Centralized Inventory Control :</strong> Optimize stocking strategies, reduce stockouts, and manage inventory efficiently across all branches.</li>
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
                  <img src="assets/images/img245.jpg" alt="Local & National SEO Expertise">
               </figure>
            </div>
         </div>
         <div class="col-md-7">
            <div class="heading-wrap text-start">
               <h2>   All Departmental  <span>Store Requirements</span> </h2>
               <p>Maximize efficiency and minimize challenges with an all-in-one solution:</p>
            </div>
            <div class="expertise-wrap bridal-wrap">
               <ul>
                  <li>Powerful POS Solution</li>
                  <li>Manage Multiple Stores Anywhere, Anytime</li>
                  <li>Manage Your Inventory and Barcodes</li>
                  <li>Handle Multiple Payment Modes</li>
                  <li>Reports That Improve Forecasting and Analytics</li>
                  <li>Launch Your Online Store</li>
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
               <h2> Performance  <span>Highlights</span> </h2>
            </div>
            <div class="why-choose-wrap">
               <ul>
                  <li>
                     <figure> <img src="assets/images/ce1.png" alt=""> </figure>
                     <h3>4X revenue growth rate</h3>
                  </li>
                  <li>
                     <figure> <img src="assets/images/ce2.png" alt=""> </figure>
                     <h3>120+ billing hours saved per month</h3>
                  </li>
                  <li>
                     <figure> <img src="assets/images/ce3.png" alt=""> </figure>
                     <h3>90% faster processing time</h3>
                  </li>
                  <li>
                     <figure> <img src="assets/images/ce4.png" alt=""> </figure>
                     <h3>99% reduction in manual errors</h3>
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
          <h2>Why Digify Soft  <span>Solutions?</span> </h2>
      </div>
   <div class="row justify-content-center gy-4">
       <!-- Simplified GST Compliance -->
       <div class="col-md-3 col-sm-6">
           <div class="key-box">
               <h3>Affordable</h3>
               <p>Flexible pricing plans with the best features in the market.</p>
           </div>
       </div>

       <!-- Real-Time Financial Reporting -->
       <div class="col-md-3 col-sm-6">
           <div class="key-box">
               <h3>Training & Support</h3>
               <p>Expert guidance to quickly onboard your team and navigate the software.</p>
           </div>
       </div>

       <!-- Centralized Multi-Store Management -->
       <div class="col-md-3 col-sm-6">
           <div class="key-box">
               <h3>Client Satisfaction</h3>
               <p>Trusted by over 17,000 clients nationwide.</p>
           </div>
       </div>
       <div class="col-md-3 col-sm-6">
           <div class="key-box">
               <h3>Cloud-Based Software</h3>
               <p>Manage your departmental store anytime, anywhere.</p>
           </div>
       </div>
       <div class="col-md-3 col-sm-6">
           <div class="key-box">
               <h3>Proven Track Record</h3>
               <p>Years of experience delivering excellent retail solutions.</p>
           </div>
       </div>
       <div class="col-md-3 col-sm-6">
           <div class="key-box">
               <h3>User-Friendly Interface</h3>
               <p>Simple and intuitive design for a seamless experience.</p>
           </div>
       </div>
       <div class="col-md-3 col-sm-6">
           <div class="key-box">
               <h3>rusted by Retailers</h3>
               <p>Preferred by departmental stores of all sizes and chains.</p>
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
                 <h2> Seamless Integrations with   <span>Multiple Platforms</span> </h2>
              </div>
              <div class="why-choose-wrap">
                 <ul>
                    <li>
                       <figure> <img src="assets/images/ns1.png" alt=""> </figure>
                       <h3>E-commerce Platforms</h3>
                    </li>
                    <li>
                       <figure> <img src="assets/images/ns2.png" alt=""> </figure>
                       <h3> Communication & Marketing Tools</h3>
                    </li>
                    <li>
                       <figure> <img src="assets/images/ns3.png" alt=""> </figure>
                       <h3> Payment Solutions</h3>
                    </li>
                    <li>
                       <figure> <img src="assets/images/ns4.png" alt=""> </figure>
                       <h3>Business Applications</h3>
                    </li>
                    <li>
                       <figure> <img src="assets/images/ns5.png" alt=""> </figure>
                       <h3>Shipping & Logistics</h3>
                    </li>
                    <li>
                       <figure> <img src="assets/images/ns6.png" alt=""> </figure>
                       <h3>E-Invoicing & Compliance</h3>
                    </li>
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
             <h2>About Digify Soft Solutions for Departmental Stores</h2>
             <p>At Digify Soft Solutions, we understand the unique challenges faced by departmental store owners—from managing large product ranges and multiple categories to ensuring smooth billing experiences. With integrated POS, multi-store management, omnichannel e-commerce, and a smart CRM module, our departmental store software ensures faster operations, improved efficiency, and enhanced customer satisfaction.</p>
          </div>
        </div>
    </div>
</div>
</section>

<section class="complete-seo-service"> 
      <div class="container my-5">
         <div class="heading-wrap text-center">
              <h2> Key Benefits of Digify Soft Solutions’ <span>Departmental Store Software</span> </h2>
           </div>
          <div class="row">
            <div class="col-md-6 col-lg-4 mb-4">
              <div class="card service-box text-center p-4 animate-in" data-delay="0">
                <figure> <img src="assets/images/ft1.png"> </figure>
                <h4>Streamlined Multi-Store Management</h4>
                <p>Manage multiple branches from a single dashboard, ensuring consistent operations and unified customer data.</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4">
              <div class="card service-box text-center p-4 animate-in" data-delay="100">
                <figure> <img src="assets/images/ft2.png"> </figure>
                <h4>Improved Inventory Efficiency</h4>
                <p>Track stock levels, automate reorders, and reduce stockouts to keep shelves fully stocked at all times.</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4">
              <div class="card service-box text-center p-4 animate-in" data-delay="200">
                <figure> <img src="assets/images/ft3.png"> </figure>
                <h4>Faster Billing & Checkout</h4>
                <p>Smart POS and multiple billing counters reduce waiting time, enabling quick and seamless customer checkouts.</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4">
              <div class="card service-box text-center p-4 animate-in" data-delay="300">
                <figure> <img src="assets/images/ft4.png"> </figure>
                <h4>Accurate Financial Management</h4>
                <p>Integrated GST-compliant billing and accounting modules simplify tax filing and maintain accurate financial records.</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4">
              <div class="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="assets/images/ft5.png"> </figure>
                <h4>Enhanced Customer Loyalty</h4>
                <p>Loyalty points, membership programs, personalized offers, and discount management encourage repeat purchases.</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4">
              <div class="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="assets/images/ft6.png"> </figure>
                <h4>Omnichannel Sales Expansion</h4>
                <p>Easily launch an online store and synchronize inventory between physical and online stores for seamless sales.</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4">
              <div class="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="assets/images/ft7.png"> </figure>
                <h4>Data-Driven Insights</h4>
                <p>Access 150+ MIS reports and analytics to monitor sales trends, customer behavior, and store performance.</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4">
              <div class="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="assets/images/ft8.png"> </figure>
                <h4>Seamless Stock Transfers</h4>
                <p>Transfer inventory efficiently between stores to balance stock and meet customer demand.</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4">
              <div class="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="assets/images/ft9.png"> </figure>
                <h4>User-Friendly Experience</h4>
                <p>Intuitive interface allows staff to operate the system with minimal training.</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4">
              <div class="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="assets/images/ft10.png"> </figure>
                <h4>WhatsApp & Communication Integration</h4>
                <p>Communicate directly with customers for promotions, updates, and reminders to improve engagement.</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4">
              <div class="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="assets/images/ft11.png"> </figure>
                <h4>Reduced Manual Errors</h4>
                <p>Automation across billing, inventory, and reporting ensures high accuracy in daily operations.</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4">
              <div class="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="assets/images/ft12.png"> </figure>
                <h4>Centralized Customer Database</h4>
                <p>Maintain consistent customer information across all stores, enabling personalized service and loyalty management.</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4">
              <div class="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="assets/images/ft13.png"> </figure>
                <h4>Scalable & Cloud-Based</h4>
                <p>Access your departmental store software anytime, anywhere, and easily scale as your business grows.</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4">
              <div class="card service-box text-center p-4 animate-in" data-delay="400">
                <figure> <img src="assets/images/ft14.png"> </figure>
                <h4>Compliance & Reporting Made Easy</h4>
                <p>Simplified GST compliance, e-way bill generation, and expense tracking reduce administrative workload.</p>
              </div>
            </div>
          </div>
        </div>
</section>


<section class="manufacturing-key section-bg py-5">
  <div class="container">
    <div class="heading-wrap text-center mb-4">
      <h2>How to Use Digify Soft Solutions’ <span>Departmental Store Software</span></h2>
    </div>

    <div class="row justify-content-center gy-4">

      <!-- 1. Login & Setup -->
      <div class="col-md-4 col-sm-6">
        <div class="key-box">
          <h3>Login &amp; Setup</h3>
          <ul>
            <li>Access the software via web or mobile app.</li>
            <li>Set up store locations, departments, and user accounts.</li>
            <li>Customize the system according to your store workflow.</li>
          </ul>
        </div>
      </div>

      <!-- 2. Add Inventory -->
      <div class="col-md-4 col-sm-6">
        <div class="key-box">
          <h3>Add Inventory</h3>
          <ul>
            <li>Upload product details with categories, prices, and stock quantities.</li>
            <li>Generate barcodes and labels for easy identification.</li>
            <li>Enable stock alerts for automated restocking.</li>
          </ul>
        </div>
      </div>

      <!-- 3. Manage Billing -->
      <div class="col-md-4 col-sm-6">
        <div class="key-box">
          <h3>Manage Billing</h3>
          <ul>
            <li>Use the POS system to process sales at multiple counters.</li>
            <li>Accept payments via cash, cards, UPI, or mobile wallets.</li>
            <li>Share invoices directly with customers via SMS or email.</li>
          </ul>
        </div>
      </div>

      <!-- 4. Track Stock & Transfers -->
      <div class="col-md-4 col-sm-6">
        <div class="key-box">
          <h3>Track Stock &amp; Transfers</h3>
          <ul>
            <li>Monitor inventory levels in real-time across all stores.</li>
            <li>Transfer stock between branches to balance supply.</li>
            <li>Conduct periodic stock verification to reduce discrepancies.</li>
          </ul>
        </div>
      </div>

      <!-- 5. Customer Engagement -->
      <div class="col-md-4 col-sm-6">
        <div class="key-box">
          <h3>Customer Engagement</h3>
          <ul>
            <li>Maintain a unified customer database.</li>
            <li>Offer loyalty points, discounts, and membership rewards.</li>
            <li>Send personalized promotions via WhatsApp or email.</li>
          </ul>
        </div>
      </div>

      <!-- 6. Financial Management -->
      <div class="col-md-4 col-sm-6">
        <div class="key-box">
          <h3>Financial Management</h3>
          <ul>
            <li>Track all expenses, cash flow, and sales reports.</li>
            <li>Generate GST-compliant bills and e-way bills automatically.</li>
            <li>Access reports for profit, loss, and inventory performance.</li>
          </ul>
        </div>
      </div>

      <!-- 7. Online Store Management -->
      <div class="col-md-4 col-sm-6">
        <div class="key-box">
          <h3>Online Store Management</h3>
          <ul>
            <li>Set up your online departmental store.</li>
            <li>Sync inventory with physical store stock.</li>
            <li>Manage online orders, payments, and deliveries seamlessly.</li>
          </ul>
        </div>
      </div>

      <!-- 8. Analyze Reports & Insights -->
      <div class="col-md-4 col-sm-6">
        <div class="key-box">
          <h3>Analyze Reports &amp; Insights</h3>
          <ul>
            <li>Use 150+ MIS reports to understand sales trends and customer behavior.</li>
            <li>Make data-driven decisions to improve store operations and profitability.</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>



<!--  faq template section -->
<section class="faq-template py-5">
   <div class="container">
      <div class="heading-wrap text-center mb-4">
         <h2>Frequently Asked Questions <span>(FAQs)</span></h2>
      </div>
      <div class="row">
         <div class="col-md-12">
            <div class="faq-section">
               <div class="accordion" id="faqAccordion">

                 <!-- FAQ 1 -->
                 <div class="accordion-item">
                   <h2 class="accordion-header" id="heading6">
                     <button class="accordion-button" type="button" data-bs-toggle="collapse"
                       data-bs-target="#collapse6" aria-expanded="true" aria-controls="collapse6">
                       What are the benefits of departmental store billing software?
                     </button>
                   </h2>
                   <div id="collapse6" class="accordion-collapse collapse show" aria-labelledby="heading6" data-bs-parent="#faqAccordion">
                     <div class="accordion-body">
                       It improves operational efficiency, reduces manual errors, enhances customer engagement, and provides accurate financial and inventory insights.
                     </div>
                   </div>
                 </div>

                 <!-- FAQ 2 -->
                 <div class="accordion-item">
                   <h2 class="accordion-header" id="heading7">
                     <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                       data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                       Can POS software for departmental stores help manage multiple stores?
                     </button>
                   </h2>
                   <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faqAccordion">
                     <div class="accordion-body">
                       Yes, centralized multi-store management allows you to track inventory, sales, and customer data across all locations from a single dashboard.
                     </div>
                   </div>
                 </div>

                 <!-- FAQ 3 -->
                 <div class="accordion-item">
                   <h2 class="accordion-header" id="heading8">
                     <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                       data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                       What reports will the departmental store software generate
                     </button>
                   </h2>
                   <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#faqAccordion">
                     <div class="accordion-body">
                       The software generates 150+ MIS reports, including sales analysis, inventory trends, financial statements, customer insights, and performance metrics for each store location.
                     </div>
                   </div>
                 </div>

                 <!-- FAQ 4 -->
                 <div class="accordion-item">
                   <h2 class="accordion-header" id="heading9">
                     <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                       data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                        Can we personalize the software to cater to our store’s specific needs?
                     </button>
                   </h2>
                   <div id="collapse9" class="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#faqAccordion">
                     <div class="accordion-body">
                       Yes, the software is highly customizable to meet unique requirements, including store workflows, billing processes, promotions, and customer loyalty programs.
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