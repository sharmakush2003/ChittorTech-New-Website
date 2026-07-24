    <!-- header -->
         <?php
  include 'db.php';
  include 'fetch_meta.php';

  $pageMeta = getPageMeta('erp');
  $pageTitle = $pageMeta['page_title'] ?? 'erp';
  $pageDescription = $pageMeta['page_description'] ?? '';
$pageKeywords = $pageMeta['page_keywords'] ?? '';

  include 'top.php';
include 'header.php';
?>
    <!-- header -->
      
     <section class="bridal-store-sec pt-60 pb-60">
         <div class="container">
             <div class="row">
                 <div class="col-md-12">
                   <div class="bridal-store">
                      <h1> India’s  #1 AI-Powered Cloud ERP  for Retail</h1>
                      <p>Cloud-Powered, Performance-Driven, and Fully Integrated – ERP Software Built to Elevate Your Retail Business!</p>
                      <div class="btn-wrap">
                        <a  href="contact-us.php"  class="schedule-btn">Schedule Free Demo</a>
                        <a href="#features" class="schedule-btn">Explore Features</a>
                      </div>
                   </div>
                 </div>
             </div>
         </div>
      </section>


      <!-- Solutions Holds section start here -->
      <section class="why-choose-sec"> 
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-md-6">
                     <div class="erp-item-wrap">
    <div class="erp-item">
        <h4>ERP: The Ultimate Solution for Retail Challenges</h4>
        <p>
            Digify Soft Solutions offers a powerful, integrated ERP system designed to streamline operations
            and simplify management for modern retail businesses.
        </p>
    </div>

    <div class="erp-item">
        <h4>Simplified Retail Operations</h4>
        <p>
            Tired of juggling invoicing, billing, accounting, CRM, payments, and both online and offline
            store management? Our ERP centralizes all these tasks for smooth day-to-day operations.
        </p>
    </div>

    <div class="erp-item">
        <h4>Smart Inventory Management</h4>
        <p>
            Keep track of products, variants, stock levels, and expiries across multiple locations effortlessly.
            Avoid stockouts, overstocking, and manual errors with automated inventory controls.
        </p>
    </div>

    <div class="erp-item">
        <h4>Seamless System Integration</h4>
        <p>
            Combine all your systems—billing, sales, inventory, and finance—into one synchronized platform,
            eliminating integration headaches and ensuring consistent data flow.
        </p>
    </div>

    <div class="erp-item">
        <h4>Actionable Business Analytics</h4>
        <p>
            Access real-time insights, accurate sales reports, inventory statistics, and key performance metrics
            to make informed, data-driven decisions that fuel business growth.
        </p>
    </div>
</div>

                  </div>
                  <div class="col-md-6">
                       <div class="expertise-img text-end">
                           <figure>
                              <img src="assets/images/img165.png" alt="Local &amp; National SEO Expertise">
                           </figure>
                       </div>
                  </div>
              </div>
          </div>
      </section>
      <!-- Solutions Holds section end here -->

      <!-- Solutions Holds section start here -->
      <section class="why-choose-sec"> 
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-md-6">
                       <div class="expertise-img">
                           <figure>
                              <img src="assets/images/img166.jpg" alt="Local &amp; National SEO Expertise">
                           </figure>
                       </div>
                  </div>
                  <div class="col-md-6">
                      <div class="erp-item-wrap">
    <div class="erp-item">
        <h4>All-in-One Retail ERP</h4>
        <p>
            Manage invoicing, accounting, multiple payment methods, omnichannel sales, payment gateways,
            CRM, and more—all from a single platform.
        </p>
    </div>

    <div class="erp-item">
        <h4>Advanced Inventory Management</h4>
        <p>
            Easily track products, multiple variants, stock levels, expiries, and transfer requests to ensure
            optimal inventory across all stores.
        </p>
    </div>

    <div class="erp-item">
        <h4>Seamless System Integrations</h4>
        <p>
            Combine POS, CRM, accounting, e-invoice, e-way bill, and omnichannel retail capabilities in one
            synchronized ERP solution.
        </p>
    </div>

    <div class="erp-item">
        <h4>Insightful Business Analytics</h4>
        <p>
            Access over 150+ interactive reports, custom dashboards, and activity logs to monitor performance,
            analyze trends, and make data-driven decisions.
        </p>
    </div>

    <div class="erp-item">
        <h4>Efficient & Affordable Retail Management</h4>
        <p>
            A smart, simple, and cost-effective solution designed to streamline operations, improve efficiency,
            and accelerate business growth.
        </p>
    </div>
</div>

                  </div>
              </div>
          </div>
      </section>
      <!-- Solutions Holds section end here -->
      

      <section id="features" class="industry new-cards accounting-sec">
         <div class="container">
             <div class="row">
                 <div class="col-md-12">
                     <div class="heading-wrap">
                        <h2>ERP Features Built for  <span>Retail Excellence</span> </h2>
                        <p>Digify Soft Solutions’ advanced retail ERP simplifies complex retail operations and empowers businesses with seamless management across billing, inventory, accounting, and compliance.</p>
                     </div>
                     <div class="desktop-industries">
                        <div class="row justify-content-center">
                           <div class="col-md-3 col-sm-6">
                              <div class="boxes mb-4 flip-container">
                                 <div class="flip-card">
                                    <div class="flip-card-inner">
                                       <div class="flip-card-back">
                                          <img src="assets/images/ms1.png" alt="Billing" class="img-fluid mb-3">
                                          <h4>Powerful Retail Management Features </h4>
                                          <p>Transform your retail business with an all-in-one ERP solution, offering seamless invoicing, accounting, inventory management, and customer relationship management.</p>
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
                                          <img src="assets/images/ms2.png" alt="Inbuilt Accounting Modules" class="img-fluid mb-3">
                                          <h4>Centralized Product Management</h4>
                                          <p> Easily manage and update your entire product catalog with an intuitive item master, supporting multiple variants and product types, all in one place.</p>
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
                                          <img src="assets/images/ms3.png" alt="Organize Clothing Stock" class="img-fluid mb-3">
                                          <h4>Comprehensive Stock Control</h4>
                                          <p>Keep track of inventory in real time, prevent overstocking or stockouts, and maintain optimal stock levels across your stores, all from a single dashboard.</p>
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
                                          <img src="assets/images/ms4.png" alt="Best Selling Apparel" class="img-fluid mb-3">
                                          <h4>Multi-Store Inventory Sync</h4>
                                          <p>Sync inventory across various locations effortlessly to ensure accurate stock tracking, avoiding discrepancies and enabling smoother operations.</p>
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
                                          <img src="assets/images/ms5.png" alt="Offers and Discount Management" class="img-fluid mb-3">
                                          <h4>Expiry & Wastage Management</h4>
                                          <p>Track product expiry dates to reduce wastage, and get timely alerts to prevent the sale of expired products, ensuring compliance and customer satisfaction.</p>
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
                                          <img src="assets/images/ms6.png" alt="Sort Style-wise" class="img-fluid mb-3">
                                          <h4>Customer-Centric Features</h4>
                                          <p>Understand customer preferences with behavior tracking, and use this data to personalize marketing campaigns, boosting sales and customer loyalty.</p>
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
                                          <img src="assets/images/ms7.png" alt="WhatsApp Integration" class="img-fluid mb-3">
                                          <h4>Flexible Payment Options</h4>
                                          <p>Offer customers a range of payment methods, including credit cards, UPI, and cash, to improve their shopping experience and enhance convenience</p>
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
                                          <img src="assets/images/ms8.png" alt="GST-Billing Compatibility" class="img-fluid mb-3">
                                          <h4>
                                            Seamless E-Way Bill & E-Invoice Integration
                                          </h4>
                                          <p>Generate and manage E-Way bills and E-Invoices automatically, ensuring full compliance with tax regulations and streamlining your invoicing process.</p>
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
                                          <img src="assets/images/ms9.png" alt="GST-Billing Compatibility" class="img-fluid mb-3">
                                          <h4>
                                           Real-Time Business Analytics
                                          </h4>
                                          <p>Access over 150 customizable reports and interactive dashboards to gain real-time insights into sales, inventory, customer trends, and more.</p>
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
                                          <img src="assets/images/ms10.png" alt="GST-Billing Compatibility" class="img-fluid mb-3">
                                          <h4>
                                           Advanced Discount & Offer Management
                                          </h4>
                                          <p>Easily apply and track discounts and promotional offers across all locations, ensuring consistency and boosting sales.</p>
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
                                          <img src="assets/images/ms11.png" alt="GST-Billing Compatibility" class="img-fluid mb-3">
                                          <h4>
                                          User Permissions & Security
                                          </h4>
                                          <p> Control who accesses critical data within your ERP system with customizable user roles and security settings, safeguarding sensitive information.</p>
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
                                          <img src="assets/images/ms12.png" alt="GST-Billing Compatibility" class="img-fluid mb-3">
                                          <h4>
                                           Automated GST Filing & Returns
                                          </h4>
                                          <p>Automatically calculate and generate GST returns, ensuring accurate and timely submissions, and reducing the risk of compliance errors.</p>
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
                                          <img src="assets/images/ms13.png" alt="GST-Billing Compatibility" class="img-fluid mb-3">
                                          <h4>
                                           Efficient Cash Management
                                          </h4>
                                          <p>Track and manage cash transactions with ease, using a digital cash register and detailed transaction logs for improved financial control</p>
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
                                          <img src="assets/images/ms14.png" alt="GST-Billing Compatibility" class="img-fluid mb-3">
                                          <h4>
                                            Tally Integration
                                          </h4>
                                          <p> Integrate your ERP system with Tally for a streamlined accounting process, ensuring that all financial data is synced and updated automatically.</p>
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
                                          <img src="assets/images/ms15.png" alt="GST-Billing Compatibility" class="img-fluid mb-3">
                                          <h4>
                                            Omnichannel Retailing
                                          </h4>
                                          <p>Manage both online and offline retail channels from a single platform, allowing seamless coordination between your physical and digital stores.</p>
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
                                          <img src="assets/images/ms16.png" alt="GST-Billing Compatibility" class="img-fluid mb-3">
                                          <h4>
                                            Weight Scale & Barcode Integration
                                          </h4>
                                          <p>Integrate weight scales and barcode systems for precise stock management, reducing human error and improving inventory accuracy.</p>
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
                                          <img src="assets/images/ms17.png" alt="GST-Billing Compatibility" class="img-fluid mb-3">
                                          <h4>
                                            Streamlined Stock Alerts
                                          </h4>
                                          <p>Stay informed with real-time stock alerts for low inventory or expired products, preventing stockouts and reducing product wastage.</p>
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
                                          <img src="assets/images/ms18.png" alt="GST-Billing Compatibility" class="img-fluid mb-3">
                                          <h4>
                                             Customizable Reporting & Dashboards
                                          </h4>
                                          <p>Create reports tailored to your business needs, and visualize performance metrics through intuitive dashboards for better decision-making.</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-md-12">
                              <div class="text-center mt-30">
                                  <button  onclick="window.location.href='contact-us.php'"  class="cta-button">Book a Free Demo</button>
                              </div>
                           </div>
                        </div>
                     </div>

                 </div>
             </div>
         </div>
      </section>

      <section class="bridal-store-sec  pb-60">
         <div class="container">
             <div class="row">
                 <div class="col-md-12">
                   <div class="bridal-store">
                      <h2>An ERP solution as unique as your store type. Digify Soft Solutions empowers all types of retailers, from single stores to superstores and multi-chain retailers.</h2>
                      <p>Applicable to: Mobile Accessories, Plastic Stores, Watches & Accessories, Supermarkets, Ready-made Garments, Pet Stores, Fruits & Vegetables, Stationery Stores, Grocery Stores, Hypermarkets, Sweet Shops, Bakery Shops, Kids Fashion, Gifts & Hampers, Convenience Stores, Footwear, Departmental Stores, Book Stores, Kirana Stores, Hardware Stores, Boutiques, Home Décor & Furniture, Cosmetic Stores, Shopping Malls, Imitation Jewellery, Minimarts, Sports Shops, Liquor Stores, Ice Cream Shops, Temples, Auto Spare Parts, Home Appliances, Fashion Accessories, Kitchen Utensils, Coffee Shops, Auto Accessories, Cameras & Accessories, Optical Accessories, Computer Hardware, Household Products, Luggage & Bags, and more.</p>
                   </div>
                 </div>
             </div>
         </div>
      </section>

      <section class="clothing-stores-sec pro-clothing-sec">
           <div class="container">
                  <div class="row align-items-center">
                      <div class="col-md-6">
                          <div class="clothing-stores-text">
                              <h2>Key Features of India’s Leading Retail ERP</h2>
                              <h5>Retail Innovation: One Solution Fits All With Extensive Features</h5>
                             <ul>
    <li>
        <strong>Retail Innovation – One Platform, Complete Control</strong><br>
        Experience an all-in-one ERP designed to simplify operations for retailers, whether B2B or B2C.
    </li>

    <li>
        <strong>Smart Notifications & Reminders</strong><br>
        Stay on top of reports, payment deadlines, and customer milestones with instant alerts via WhatsApp,
        SMS, and email.
    </li>

    <li>
        <strong>Simplified Sales & POS Operations</strong><br>
        Manage sales estimates, orders, delivery challans, invoices, returns, and credit notes effortlessly.
        POS integration supports weight scales, barcode scanning, and multiple payment modes for faster checkout.
    </li>

    <li>
        <strong>Customer-Focused Management</strong><br>
        Run loyalty programs, gift vouchers, discounts, coupons, WhatsApp promotions, and collect feedback
        and reviews to enhance customer engagement.
    </li>

    <li>
        <strong>Streamlined Inventory Management</strong><br>
        Maintain a centralized item master, manage multiple product variants, organize by department,
        track stock levels and expiries, and print barcodes and labels with ease.
    </li>

    <li>
        <strong>Multi-Location Control</strong><br>
        Oversee all stores from a single dashboard, ensuring consistent inventory management and minimizing
        operational errors.
    </li>

    <li>
        <strong>Comprehensive Accounting & Finance</strong><br>
        Track assets, purchases, budgets, and resource allocation with complete accuracy through integrated
        accounting modules.
    </li>

    <li>
        <strong>Omnichannel Integration</strong><br>
        Seamlessly manage your online stores and connect with platforms like WooCommerce, Shopify, or custom
        e-commerce solutions.
    </li>

    <li>
        <strong>Data-Driven Insights</strong><br>
        Access 150+ real-time reports, customizable dashboards, and activity logs to make informed, strategic
        business decisions.
    </li>
</ul>

                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="clothing-stores-img text-end">
                              <figure>
                                 <img src="assets/images/img167.jpg">
                              </figure>
                          </div>
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
                          <h2>Maximize Retail Efficiency with   <span>Smart Integrations</span> </h2>
                          <p>An all-in-one ERP that seamlessly links payments, POS, e-commerce, CRM, and accounting for streamlined business operations.</p>
                       </div>
                       <div class="why-choose-wrap">
                          <ul>
                             <li>
                                <figure> <img src="assets/images/platforms1.png" alt=""> </figure>
                                <h3>E-commerce Platforms</h3>
                             </li>
                             <li>
                                <figure> <img src="assets/images/platforms2.png" alt=""> </figure>
                                <h3>Communication & Marketing</h3>
                             </li>
                             <li>
                                <figure> <img src="assets/images/platforms3.png" alt=""> </figure>
                                <h3>Payment Solutions</h3>
                             </li>
                             <li>
                                <figure> <img src="assets/images/platforms4.png" alt=""> </figure>
                                <h3>Business Applications</h3>
                             </li>
                             <li>
                                <figure> <img src="assets/images/platforms5.png" alt=""> </figure>
                                <h3>Shipping & Logistics</h3>
                             </li>
                             <li>
                                <figure> <img src="assets/images/platforms6.png" alt=""> </figure>
                                <h3>E-Invoicing & Compliance</h3>
                             </li>
                          </ul>
                       </div>
                  </div>
              </div>
          </div>
      </section>

<!--       <section class="simplifying-accounting-sec">
         <div class="container">
             <div class="row">
                 <div class="col-md-12">
                     <div class="heading-wrap">
                        <h2>Experience Now! Simplifying Accounting for  <span>All Retail Business Types</span> </h2>
                        <p>Perfect solution for a wide range of retail stores in India:</p>
                     </div>
                     <div class="row">
                        <div class="col-md-12">
                            <div class="simplifying-accounting-wrap">
                                <div class="owl-carousel owl-theme simplifying">
                                     <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s1.jpg" alt="Mobile Accessories"></figure>
                                        <div class="simplifying-text"><h6>MOBILE ACCESSORIES</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s2.jpg" alt="Plastic Store"></figure>
                                        <div class="simplifying-text"><h6>PLASTIC STORE</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s3.jpg" alt="Watch & Accessories"></figure>
                                        <div class="simplifying-text"><h6>WATCH & ACCESSORIES</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s4.jpg" alt="Supermarket"></figure>
                                        <div class="simplifying-text"><h6>SUPERMARKET</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s5.jpg" alt="Readymade Garment"></figure>
                                        <div class="simplifying-text"><h6>READYMADE GARMENT</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s6.jpg" alt="Pet Store"></figure>
                                        <div class="simplifying-text"><h6>PET STORE</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s7.jpg" alt="Fruits & Vegetable"></figure>
                                        <div class="simplifying-text"><h6>FRUITS & VEGETABLE</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s8.jpg" alt="Stationery Store"></figure>
                                        <div class="simplifying-text"><h6>STATIONERY STORE</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s9.jpg" alt="Grocery Store"></figure>
                                        <div class="simplifying-text"><h6>GROCERY STORE</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s10.jpg" alt="Hypermart"></figure>
                                        <div class="simplifying-text"><h6>HYPERMART</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s11.jpg" alt="Sweet Shop"></figure>
                                        <div class="simplifying-text"><h6>SWEET SHOP</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s12.jpg" alt="Bakery Shop"></figure>
                                        <div class="simplifying-text"><h6>BAKERY SHOP</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s13.jpg" alt="Kids Fashion, Baby Shops & Toys"></figure>
                                        <div class="simplifying-text"><h6>KIDS FASHION, BABY SHOPS & TOYS</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s14.jpg" alt="Gifts & Hamper"></figure>
                                        <div class="simplifying-text"><h6>GIFTS & HAMPER</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s15.jpg" alt="Convenience Store"></figure>
                                        <div class="simplifying-text"><h6>CONVENIENCE STORE</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s16.jpg" alt="Footwear"></figure>
                                        <div class="simplifying-text"><h6>FOOTWEAR</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s17.jpg" alt="Departmental Store"></figure>
                                        <div class="simplifying-text"><h6>DEPARTMENTAL STORE</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s18.jpg" alt="Book Store"></figure>
                                        <div class="simplifying-text"><h6>BOOK STORE</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s19.jpg" alt="Kirana Store"></figure>
                                        <div class="simplifying-text"><h6>KIRANA STORE</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s20.jpg" alt="Hardware Store"></figure>
                                        <div class="simplifying-text"><h6>HARDWARE STORE</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s21.jpg" alt="Boutiques"></figure>
                                        <div class="simplifying-text"><h6>BOUTIQUES</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s22.jpg" alt="Home Decor & Furniture"></figure>
                                        <div class="simplifying-text"><h6>HOME DECOR & FURNITURE</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s23.jpg" alt="Cosmetic Store"></figure>
                                        <div class="simplifying-text"><h6>COSMETIC STORE</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s24.jpg" alt="Shopping Mall"></figure>
                                        <div class="simplifying-text"><h6>SHOPPING MALL</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s25.jpg" alt="Imitation Jewellery"></figure>
                                        <div class="simplifying-text"><h6>IMITATION JEWELLERY</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s26.jpg" alt="Minimart"></figure>
                                        <div class="simplifying-text"><h6>MINIMART</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s27.jpg" alt="Sports Shop"></figure>
                                        <div class="simplifying-text"><h6>SPORTS SHOP</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s28.jpg" alt="Liquor Store"></figure>
                                        <div class="simplifying-text"><h6>LIQUOR STORE</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s29.jpg" alt="Ice Cream Shop"></figure>
                                        <div class="simplifying-text"><h6>ICE CREAM SHOP</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s30.jpg" alt="Temple"></figure>
                                        <div class="simplifying-text"><h6>TEMPLE</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s31.jpg" alt="Auto Spare Part Shop"></figure>
                                        <div class="simplifying-text"><h6>AUTO SPARE PART SHOP</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s32.jpg" alt="Home Appliances"></figure>
                                        <div class="simplifying-text"><h6>HOME APPLIANCES</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s33.jpg" alt="Fashion Accessories"></figure>
                                        <div class="simplifying-text"><h6>FASHION ACCESSORIES</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s34.jpg" alt="Kitchen Utensils"></figure>
                                        <div class="simplifying-text"><h6>KITCHEN UTENSILS</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s35.jpg" alt="Coffee Shop"></figure>
                                        <div class="simplifying-text"><h6>COFFEE SHOP</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s36.jpg" alt="Auto Accessories"></figure>
                                        <div class="simplifying-text"><h6>AUTO ACCESSORIES</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s37.jpg" alt="Camera & Accessories"></figure>
                                        <div class="simplifying-text"><h6>CAMERA & ACCESSORIES</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s38.jpg" alt="Optical Accessories"></figure>
                                        <div class="simplifying-text"><h6>OPTICAL ACCESSORIES</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s39.jpg" alt="Computer Hardware"></figure>
                                        <div class="simplifying-text"><h6>COMPUTER HARDWARE</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s40.jpg" alt="Household Products"></figure>
                                        <div class="simplifying-text"><h6>HOUSEHOLD PRODUCTS</h6></div>
                                      </div>
                                    </div>

                                    <div class="item">
                                      <div class="simplifying-wrap">
                                        <figure><img src="assets/images/s41.jpg" alt="Luggage and Bags"></figure>
                                        <div class="simplifying-text"><h6>LUGGAGE AND BAGS</h6></div>
                                      </div>
                                    </div>

                                 </div>
                            </div>
                        </div>
                     </div>
                 </div>
             </div>
         </div>
      </section> -->
     

      <section class="clothing-stores-sec software-sec">
           <div class="container">
               <div class="row align-items-center">
                   <div class="col-md-7">
                       <div class="clothing-stores-text software-wrap specialized-box">
                           <h2>Next-Gen ERP for Seamless Retail Operations</h2>
                           <p>Simplify your retail business with an ERP that unites POS, invoicing, inventory, CRM, and e-commerce into one powerful platform.</p>
                          <ul>
						  <h5>Core Capabilities</h5>
    <li>
        <strong>Smart POS System</strong> – Fast, accurate billing for all stores.
    </li>
    <li>
        <strong>Multi-Outlet Management</strong> – Monitor and control multiple locations effortlessly.
    </li>
    <li>
        <strong>Inventory & Barcode Management</strong> – Keep stock organized and up-to-date.
    </li>
    <li>
        <strong>Flexible Payment Integrations</strong> – Accept cash, card, UPI, and digital payments securely.
    </li>
    <li>
        <strong>Actionable Reports & Insights</strong> – Make data-driven decisions to grow your business.
    </li>
    <li>
        <strong>E-Commerce Integration</strong> – Manage online and offline sales from a single dashboard.
    </li>
</ul>

<h5>Tangible Benefits</h5>
<ul>
    <li>
        <strong>Boost Revenue</strong> – Scale your business faster with streamlined processes.
    </li>
    <li>
        <strong>Save Time</strong> – Reduce hours spent on manual tasks every month.
    </li>
    <li>
        <strong>Faster Operations</strong> – Process orders and payments quickly and efficiently.
    </li>
    <li>
        <strong>Minimize Errors</strong> – Automated workflows drastically reduce human mistakes.
    </li>
</ul>

                       </div>
                   </div>
                   <div class="col-md-5">
                       <div class="clothing-stores-img text-end">
                           <figure>
                              <img src="assets/images/img104.jpg">
                           </figure>
                       </div>
                   </div>
               </div>
           </div>
      </section>

      <section class="clothing-stores-sec software-sec">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-5">
                    <div class="clothing-stores-img">
                        <figure>
                           <img src="assets/images/img105.jpg">
                        </figure>
                    </div>
                </div>
                <div class="col-md-7">
                   <div class="clothing-stores-text software-wrap specialized-box">
    <h2>Why Digify Soft Solutions is India’s #1 AI-Powered ERP for Retail</h2>
    <ul>
        <li>
            <strong>Designed for Retail Businesses</strong> – Features crafted specifically for modern retail operations.
        </li>
        <li>
            <strong>AI-Driven Insights</strong> – Leverage artificial intelligence to optimize inventory, sales, and customer engagement.
        </li>
        <li>
            <strong>Multi-Device Access</strong> – Use your ERP seamlessly on mobile, desktop, or laptop anytime, anywhere.
        </li>
        <li>
            <strong>Reliable Support</strong> – Quick assistance to keep your business running without interruptions.
        </li>
        <li>
            <strong>Cloud-Based Convenience</strong> – Access real-time retail data securely from anywhere.
        </li>
        <li>
            <strong>Trusted by Thousands</strong> – Preferred by merchants across India for efficiency and growth.
        </li>
        <li>
            <strong>Secure & Compliant</strong> – Protect sensitive business data with top-tier cloud security.
        </li>
    </ul>
</div>

                </div>
            </div>
        </div>
      </section>

     
      
      <section class="clothing-stores-sec software-sec need-helf-sec">
           <div class="container">
               <div class="row align-items-center">
                   <div class="col-md-7">
                       <div class="heading-wrap text-start">
                           <h2>India’s #1 AI-Powered ERP for Retail</h2>
                           <p>Transform your retail business with Digify Soft Solutions, India’s leading AI-driven ERP. Manage billing, inventory, CRM, accounting, and e-commerce seamlessly from a single intelligent platform.</p>
                       </div>
                      <div class="erp-item-wrap">
    <div class="erp-item">
        <h4>AI-Powered Insights</h4>
        <p>
            Optimize inventory, sales, and customer engagement with smart analytics and intelligent reporting.
        </p>
    </div>

    <div class="erp-item">
        <h4>Unified Operations</h4>
        <p>
            Control multiple stores along with online and offline sales channels from one centralized dashboard.
        </p>
    </div>

    <div class="erp-item">
        <h4>Cloud-Based & Secure</h4>
        <p>
            Access your business data anytime, anywhere with robust cloud security and complete data protection.
        </p>
    </div>

    <div class="erp-item">
        <h4>Trusted by Thousands</h4>
        <p>
            Preferred by Indian retailers for operational efficiency, accuracy, and sustainable business growth.
        </p>
    </div>
</div>

                   </div>
                   <div class="col-md-5">
                       <div class="clothing-stores-img text-end">
                           <figure>
                              <img src="assets/images/img106.jpg">
                           </figure>
                       </div>
                   </div>
               </div>
           </div>
      </section>

      <section class="why-choose-sec"> 
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-md-6">
                       <div class="expertise-img">
                           <figure>
                              <img src="assets/images/img102.png" alt="Local &amp; National SEO Expertise">
                           </figure>
                       </div>
                  </div>
                  <div class="col-md-6">
                      <div class="heading-wrap text-start mobile-a pro-list">
                          <h2> Advantages of India’s #1 AI-Powered ERP –  <span>Digify Soft Solutions</span> </h2>
                       </div>
                       <div class="expertise-wrap pro-list">
                          <ul>
    <li>
        <strong>Cloud Access Anytime, Anywhere</strong> – Manage your retail business seamlessly from desktops,
        laptops, or mobile devices.
    </li>
    <li>
        <strong>Centralized Multi-Store Control</strong> – Monitor and operate all your outlets from a single
        unified dashboard.
    </li>
    <li>
        <strong>Seamless Omnichannel Integration</strong> – Keep offline and online stores fully synchronized
        for smooth operations.
    </li>
    <li>
        <strong>Powerful Reporting & Analytics</strong> – Access over 150 customizable reports on sales,
        inventory, and finances for data-driven decisions.
    </li>
    <li>
        <strong>Secure Data Protection</strong> – Protect critical business information with advanced
        encryption and role-based access controls.
    </li>
    <li>
        <strong>Effortless Integrations</strong> – Connect easily with Tally, UPI, POS systems, e-commerce
        platforms, and payment gateways.
    </li>
</ul>

                       </div>
                  </div>
              </div>
          </div>
      </section>


      <section class="manufacturing-key section-bg">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12 col-9">
                        <div class="heading-wrap">
                            <h2>How to Use Digify Soft Solutions <span>ERP – Step by Step </span> </h2>
                        </div>
                    </div>
                </div>
               <div class="row justify-content-center mt-5 gy-4">
                   <!-- Simplified GST Compliance -->
                   <div class="col-lg-4 col-md-6">
                       <div class="key-box">
                           <h3>Step 1: Setup Your Account</h3>
                           <ul>
                               <li>Sign up with Digify Soft Solutions and create your retail account.</li>
                               <li>Add your store details, GST information, and banking details.</li>
                           </ul>
                       </div>
                   </div>

                   <!-- Real-Time Financial Reporting -->
                   <div class="col-lg-4 col-md-6">
                       <div class="key-box">
                           <h3>Step 2: Add Your Products and Inventory</h3>
                           <ul>
                               <li>Use the Item Master to add products, variants, categories, and suppliers.</li>
                               <li>Set stock limits, expiry dates, and reorder points for automated stock alerts.</li>

                           </ul>
                       </div>
                   </div>

                   <!-- Centralized Multi-Store Management -->
                   <div class="col-lg-4 col-md-6">
                       <div class="key-box">
                           <h3>Step 3: Configure Sales Channels</h3>
                           <ul>
                               <li>Connect your offline POS and online stores like Shopify or WooCommerce.</li>
                               <li>Enable multiple payment modes, including UPI, credit/debit cards, and cash.</li>
                           </ul>
                       </div>
                   </div>

                   <!-- Advanced Inventory Management -->
                   <div class="col-lg-4 col-md-6">
                       <div class="key-box">
                           <h3>Step 4: Manage Customers</h3>
                           <ul>
                               <li>Create customer profiles, loyalty programs, and track purchase histories.</li>
                               <li>Send WhatsApp promotions, SMS notifications, or email campaigns directly from the ERP.</li>
                           </ul>
                       </div>
                   </div>

                   <!-- Integrated Payment and Invoice Management -->
                   <div class="col-lg-4 col-md-6">
                       <div class="key-box">
                           <h3>Step 5: Billing and Invoicing</h3>
                           <ul>
                               <li>Generate invoices, delivery challans, and receipts automatically.</li>
                               <li>Use barcode scanning and weight scale integration for faster billing.</li>
                           </ul>
                       </div>
                   </div>

                   <!-- Mobile and Cloud-Based Access -->
                   <div class="col-lg-4 col-md-6">
                       <div class="key-box">
                           <h3>Step 6: Generate Reports</h3>
                           <ul>
                               <li>Access live dashboards and generate reports for sales, stock, finance, and performance metrics.</li>
                               <li>Use insights to plan purchases, discounts, and marketing campaigns.</li>
                           </ul>
                       </div>
                   </div>

                   <!-- Tally and Other Integrations -->
                   <div class="col-lg-4 col-md-6">
                       <div class="key-box">
                           <h3>Step 7: Maintain Compliance</h3>
                           <ul>
                               <li>Generate GST returns, E-Way bills, and E-Invoices directly from the system.</li>
                               <li>Ensure your records are audit-ready at all times.</li>
                           </ul>
                       </div>
                   </div>

                   <!-- Budgeting and Forecasting -->
                   <div class="col-lg-4 col-md-6">
                       <div class="key-box">
                           <h3>Step 8: Scale and Optimize</h3>
                           <ul>
                               <li>Add more stores or warehouses as your business grows</li>
                               <li>Monitor performance using analytics and optimize stock, sales, and employee efficiency.</li>
                           </ul>
                       </div>
                   </div>
               </div>
            </div>
        </section>

      <section class="faq-template">
          <div class="container">
              <div class="row">
                  <div class="col-md-12">
                      <div class="faq-section">
                          <div class="heading-wrap text-center">
                              <h2>FAQ – Need  <span>Help?</span> </h2>
                          </div>
                          <div class="accordion" id="faqAccordion">

                              <!-- GST FAQ 1 -->
                              <div class="accordion-item">
                                  <h2 class="accordion-header" id="headingOne">
                                      <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                          What is a Retail ERP Software?
                                      </button>
                                  </h2>
                                  <div id="collapseOne" class="accordion-collapse collapse show"
                                      aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                      <div class="accordion-body">
                                          Retail ERP (Enterprise Resource Planning) software is a comprehensive system designed to streamline and manage all operations of a retail business. This includes inventory management, point of sale (POS), customer relationship management (CRM), accounting, billing, and reporting.

                                          Cloud-based ERP solutions, like Digify Soft Solutions, centralize all your business data in one platform, automate routine tasks, and provide real-time insights, enabling faster and better decision-making.
                                      </div>
                                  </div>
                              </div>

                              <!-- GST FAQ 2 -->
                              <div class="accordion-item">
                                  <h2 class="accordion-header" id="headingTwo">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                           What are the benefits of deploying a cloud-based ERP?
                                      </button>
                                  </h2>
                                  <div id="collapseTwo" class="accordion-collapse collapse"
                                      aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                      <div class="accordion-body">
                                         <ul>
                                             <li>Centralized Management: Handle sales, inventory, finance, and CRM from a single platform.</li>
                                             <li>Real-Time Reporting: Get instant insights into sales trends, stock levels, and financial health.</li>
                                             <li>Enhanced Productivity: Automate invoicing, stock alerts, payroll, and promotions.</li>
                                             <li>Error Reduction: Minimize mistakes in billing, stock handling, and accounting.</li>
                                             <li>Scalability: Easily add new stores or warehouses without additional software.</li>
                                             <li>Compliance Ready: Integrated GST, E-Invoice, and E-Way bill support for seamless regulatory compliance.</li>
                                         </ul>
                                      </div>
                                  </div>
                              </div>

                              <!-- GST FAQ 3 -->
                              <div class="accordion-item">
                                  <h2 class="accordion-header" id="headingThree">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                           How do I choose the best Retail ERP for my business?
                                      </button>
                                  </h2>
                                  <div id="collapseThree" class="accordion-collapse collapse"
                                      aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                      <div class="accordion-body">
                                          <ul>
                                             <li>Look for cloud-based solutions for remote access and scalability.</li>
                                             <li>Ensure the ERP has integrated modules for POS, inventory, CRM, and accounting.</li>
                                             <li>Check for multi-store management and omnichannel support if you operate both online and offline stores.</li>
                                             <li>Evaluate customization options to adapt the system to your unique business needs.</li>
                                             <li>Consider user-friendliness, support, and training resources provided by the vendor.</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>

                              <!-- GST FAQ 4 -->
                              <div class="accordion-item">
                                  <h2 class="accordion-header" id="headingFour">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                          Which is the best ERP software in India for retailers?
                                      </button>
                                  </h2>
                                  <div id="collapseFour" class="accordion-collapse collapse"
                                      aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                      <div class="accordion-body">
                                          Digify Soft Solutions ERP is among the top-rated ERP systems for Indian retailers due to:
                                          <ul>
                                             <li>Cloud-based access and mobile compatibility</li>
                                             <li>Extensive modules covering retail operations</li>
                                             <li>GST and regulatory compliance support</li>
                                             <li>Multi-store and omnichannel integration</li>
                                             <li>Customizable reports and dashboards for data-driven decisions</li>

                                          </ul>
                                      </div>
                                  </div>
                              </div>

                              <!-- GST FAQ 5 -->
                              <div class="accordion-item">
                                  <h2 class="accordion-header" id="headingFive">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                          How does Digify Soft Solutions ERP keep my retail business compliant?
                                      </button>
                                  </h2>
                                  <div id="collapseFive" class="accordion-collapse collapse"
                                      aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                                      <div class="accordion-body">
                                          <ul>
                                             <li>Automated GST return generation and filing</li>
                                             <li>Integrated E-Invoice and E-Way Bill creation</li>
                                             <li>Tracks compliance for all transactions across stores</li>
                                             <li>Ensures your accounting records are always audit-ready</li>

                                          </ul>
                                      </div>
                                  </div>
                              </div>

                              <!-- GST FAQ 6 -->
                              <div class="accordion-item">
                                  <h2 class="accordion-header" id="headingSix">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                         How user-friendly is Digify Soft Solutions ERP??
                                      </button>
                                  </h2>
                                  <div id="collapseSix" class="accordion-collapse collapse"
                                      aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                                      <div class="accordion-body">
                                          <ul>
                                             <li>Intuitive dashboard and interactive reports for easy navigation</li>
                                             <li>Step-by-step workflows for billing, inventory management, and customer tracking</li>
                                             <li>Mobile app access for managers and staff to work on-the-go</li>
                                             <li>Pre-configured templates and alerts for faster onboarding</li>

                                          </ul>
                                      </div>
                                  </div>
                              </div>

                              <!-- GST FAQ 7 -->
                              <div class="accordion-item">
                                  <h2 class="accordion-header" id="headingSeven">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                          Can the software be customized for my store’s unique needs?
                                          
                                      </button>
                                  </h2>
                                  <div id="collapseSeven" class="accordion-collapse collapse"
                                      aria-labelledby="headingSeven" data-bs-parent="#faqAccordion">
                                      <div class="accordion-body">
                                          <p>Yes! Digify Soft Solutions ERP is highly flexible:</p>
                                          <ul>
                                             <li>Add or remove modules as required</li>
                                             <li>Customize invoices, reports, and dashboards</li>
                                             <li>Configure user roles and permissions</li>
                                             <li>Adjust workflows to match your business processes</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>

                              <!-- GST FAQ 8 -->
                              <div class="accordion-item">
                                  <h2 class="accordion-header" id="headingEight">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                           Are software updates included? How often are they released?
                                      </button>
                                  </h2>
                                  <div id="collapseEight" class="accordion-collapse collapse"
                                      aria-labelledby="headingEight" data-bs-parent="#faqAccordion">
                                      <div class="accordion-body">
                                          <ul>
                                             <li>Regular updates are included in the subscription package</li>
                                             <li>Updates ensure new features, improved security, and compliance with the latest GST rules</li>
                                             <li>Most updates are automatic and do not disrupt your daily operations</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>

                              <!-- GST FAQ 9 -->
                              <div class="accordion-item">
                                  <h2 class="accordion-header" id="headingNine">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                          How much does Digify Soft Solutions ERP cost?
                                      </button>
                                  </h2>
                                  <div id="collapseNine" class="accordion-collapse collapse"
                                      aria-labelledby="headingNine" data-bs-parent="#faqAccordion">
                                      <div class="accordion-body">
                                          <p>Pricing depends on:</p>
                                          <ul>
                                             <li>Number of stores or outlets</li>
                                             <li>Modules you choose (POS, CRM, Accounting, Inventory, etc.)</li>
                                             <li>Number of users accessing the ERP</li>

                                          </ul>
                                          <p>Contact our sales team for a customized plan and free demo.</p>
                                      </div>
                                  </div>
                              </div>

                              <!-- GST FAQ 10 -->
                              <div class="accordion-item">
                                  <h2 class="accordion-header" id="headingTen">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                          What level of customer support and technical assistance is provided?
                                      </button>
                                  </h2>
                                  <div id="collapseTen" class="accordion-collapse collapse"
                                      aria-labelledby="headingTen" data-bs-parent="#faqAccordion">
                                      <div class="accordion-body">
                                          <ul>
                                             <li>24/7 support via call, email, and chat</li>
                                             <li>Assistance with data migration and ERP implementation</li>
                                             <li>Training for staff on how to use the software effectively</li>
                                             <li>Quick resolution for any technical issues to ensure uninterrupted operations</li>

                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>


      <?php include 'footer.php'; ?>
       
