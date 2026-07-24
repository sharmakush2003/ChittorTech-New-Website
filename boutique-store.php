      <!-- header -->
           <?php
  include 'db.php';
  include 'fetch_meta.php';

  $pageMeta = getPageMeta('boutique-store');
  $pageTitle = $pageMeta['page_title'] ?? 'boutique-store';
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
                            <h1>India’s Leading AI-Driven Cloud POS for Fashion Stores</h1>
                            <h4>Digify Soft Solutions – Intelligent Boutique Management Made Easy</h4>
                            <p>Revolutionize your boutique with our AI-powered cloud platform, designed to simplify operations, boost efficiency, and enhance customer experiences.</p>
                            <a class="schedule-btn" href="contact-us.php"> 👉 Schedule a Free Demo Today!</a>
                        </div>
                     </div>
                 </div>
                 <div class="col-md-5">
                     <div class="inner-banner-img">
                         <figure>
                            <img src="assets/images/Intelligent-Boutique.png">
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

    <!-- Streamlined Billing & Payments -->
    <div class="col-md-3 col-sm-6">
        <div class="key-box">
            <h3>Streamlined Billing &amp; Payments</h3>
            <p>Manage billing faster with digital tools and smooth payment experiences.</p>
            <ul>
                <li>Manage your cash register digitally</li>
                <li>Send invoices instantly via SMS</li>
                <li>Accept UPI, cards, and other digital payments</li>
            </ul>
        </div>
    </div>

    <!-- Smart Inventory Control -->
    <div class="col-md-3 col-sm-6">
        <div class="key-box">
            <h3>Smart Inventory Control</h3>
            <p>Stay in control of your boutique inventory with smart organization and automation.</p>
            <ul>
                <li>Organize items by category, style, size, color, or brand</li>
                <li>Auto-reorder stock based on demand trends</li>
                <li>Handle multiple product variants efficiently</li>
                <li>Generate barcodes and labels quickly</li>
                <li>Keep warehouse stock updated in real-time</li>
            </ul>
        </div>
    </div>

    <!-- Integrated Online & Offline Selling -->
    <div class="col-md-3 col-sm-6">
        <div class="key-box">
            <h3>Integrated Online &amp; Offline Selling</h3>
            <p>Sell everywhere with a connected omnichannel boutique experience.</p>
            <ul>
                <li>Launch your boutique e-store on Shopify, WooCommerce, or custom platforms</li>
                <li>Sync inventory across all sales channels automatically</li>
                <li>Secure payment gateways for smooth online transactions</li>
            </ul>
        </div>
    </div>

    <!-- Customer Engagement & Loyalty Tools -->
    <div class="col-md-3 col-sm-6">
        <div class="key-box">
            <h3>Customer Engagement &amp; Loyalty Tools</h3>
            <p>Build lasting relationships and grow repeat business effortlessly.</p>
            <ul>
                <li>Maintain detailed customer profiles</li>
                <li>Send promotions and updates via WhatsApp</li>
                <li>Manage memberships digitally or with cards</li>
                <li>Run discounts, offers, and bundle promotions</li>
                <li>Collect feedback and reviews to improve customer experience</li>
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
                              <img src="assets/images/img202.jpg" alt="Local &amp; National SEO Expertise">
                           </figure>
                       </div>
                  </div>
                  <div class="col-md-7 order-md-1">
                      <div class="heading-wrap text-start">
                          <h2> <span>Elevate Your Boutique with Our Smart Retail Software</span> </h2>
                       </div>
                       <div class="expertise-wrap bridal-wrap">
                          <ul>
    <li>
        <strong>Fast &amp; Efficient Billing</strong><br>
        Quick checkout with barcode scanning, multiple cash counters, and instant POS processing.
    </li>
    <li>
        <strong>Instant SMS Billing &amp; Promotions</strong><br>
        Share invoices, offers, and feedback requests via SMS to keep customers engaged.
    </li>
    <li>
        <strong>Flexible Payment Methods</strong><br>
        Accept UPI, cards, net banking, and other digital payment options with ease.
    </li>
    <li>
        <strong>Organized Inventory Management</strong><br>
        Sort merchandise by color, style, brand, gender, and material for better control.
    </li>
    <li>
        <strong>Size-Wise Stock Planning</strong><br>
        Track popular sizes (XS–XXL) to ensure fast-moving items are always available.
    </li>
    <li>
        <strong>Smart Reordering</strong><br>
        Monitor top-selling items and automate reorders to avoid stockouts.
    </li>
    <li>
        <strong>Promotions &amp; Discounts</strong><br>
        Create in-store deals, bundle offers, and promo codes to drive sales.
    </li>
    <li>
        <strong>Loyalty &amp; Membership Rewards</strong><br>
        Reward repeat customers with points and exclusive benefits.
    </li>
    <li>
        <strong>Customer Insights &amp; Segmentation</strong><br>
        Classify buyers as VIP, regular, or inactive for targeted marketing campaigns.
    </li>
    <li>
        <strong>WhatsApp Integration</strong><br>
        Communicate instantly by sending invoices, promotions, and offers via WhatsApp.
    </li>
    <li>
        <strong>Warehouse &amp; Supply Chain Control</strong><br>
        Streamline vendor management and track stock movement effortlessly.
    </li>
   
</ul>

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
                          <h2>Connect & Manage Your Boutique Network Seamlessly</span> </h2>
                        
<ul>
    <li>
        <strong>Unified Customer Profiles</strong><br>
        Keep all customer information synchronized across every store location.
    </li>
    <li>
        <strong>Effortless Stock Movement</strong><br>
        Transfer inventory and manage requests between branches with ease.
    </li>
    <li>
        <strong>Consolidated Reports &amp; Insights</strong><br>
        Get a complete view of sales, performance, and inventory through a single dashboard.
    </li>
    <li>
        <strong>Real-Time Inventory Oversight</strong><br>
        Monitor stock levels across all outlets instantly, ensuring availability and accuracy.
    </li>
    <li>
        <strong>Centralized Multi-Store Control</strong><br>
        Manage multiple boutique locations efficiently from one unified platform.
    </li>
</ul>

                       </div>
                   </div>
                   <div class="col-md-6 order-md-1">
                       <div class="clothing-stores-img">
                           <figure>
                              <img src="assets/images/img203.jpg">
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
    <h2>Smart Boutique Business Management – All in One Platform</h2>
    <p>
        Digify Soft Solutions delivers a fully integrated, AI-enabled ERP created to manage every aspect
        of your boutique smoothly and efficiently.
    </p>
    <ul>
        <li>Advanced billing system for quick and accurate checkout</li>
        <li>Central control for multiple boutiques from any location</li>
        <li>Real-time stock monitoring with barcode support</li>
        <li>Flexible payment acceptance for all customer preferences</li>
        <li>Intelligent business insights with sales predictions</li>
        <li>Built-in tools to create and operate your online boutique</li>
    </ul>
</div>

                   </div>
                   <div class="col-md-6">
                       <div class="clothing-stores-img">
                           <figure>
                              <img src="assets/images/img204.jpg">
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
                  <div class="heading-wrap">
                     <h2> Real Impact for Boutique Owners</span> </h2>
                  </div>
                  <div class="why-choose-grid">
                     <div class="grid-item">
                        <figure> <img src="assets/images/en1.png"> </figure>
                        <p>Up to 4× increase in overall sales performance
</p>
                     </div>
                     <div class="grid-item">
                        <figure> <img src="assets/images/en2.png"> </figure>
                        <p>Over 120 hours of billing work eliminated every month
</p>
                     </div>
                     <div class="grid-item">
                        <figure> <img src="assets/images/en3.png"> </figure>
                        <p>Transaction speed improved by nearly 90%</p>
                     </div>
                     <div class="grid-item">
                        <figure> <img src="assets/images/en4.png"> </figure>
                        <p> Manual mistakes reduced to almost zero (99% accuracy)
</p>
                     </div>
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
                              <img src="assets/images/img205.jpg" alt="Local &amp; National SEO Expertise">
                           </figure>
                       </div>
                  </div>
                  <div class="col-md-7">
                      <div class="heading-wrap text-start">
                          <h2> Why Choose Digify Soft Solutions  <span>Boutique Software?</span> </h2>
                       </div>
                       <div class="expertise-wrap bridal-wrap">
                           <ul>
                              <li>User-Friendly Interface for staff & owners</li>
                              <li>Affordable Pricing for all business sizes</li>
                              <li>Cloud-Based Access on any device</li>
                              <li>24/7 Support & Dedicated Assistance</li>
                              <li>4.8★ Customer Satisfaction Rating</li>
                              <li>Tailored Customization for boutique operations</li>
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
                      <h2>Grow Your Fashion Boutique with India’s No.1 Cloud-Based POS Software</h2>
                      <p>Smart, simple, and affordable – everything your fashion boutique store needs to sell smarter and grow faster.</p>
                   </div>
                 </div>
             </div>
         </div>
      </section>



      <!-- industry new-cards section start here -->
      <section class="industry new-cards pt-60">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="heading-wrap">
                     <h2>How to Use Digify Boutique Software</h2>
                  </div>

                  <div class="desktop-industries">
                     <div class="row justify-content-center">

                        <!-- 1. Add Customer Profiles -->
                        <div class="col-lg-4 col-md-6 col-6">
                           <div class="boxes mb-4 flip-container">
                              <div class="flip-card">
                                 <div class="flip-card-inner">
                                    <div class="flip-card-back">
                                       <img src="assets/images/re1.png" alt="Customer Profiles" class="img-fluid mb-3">
                                       <h4>Step 1 – Setup & Customization</h4>
                                       <ul>
                                          <li>Install on desktop, laptop, tablet, or mobile.</li>
                                          <li>Add product categories: Men, Women, Kids, Ethnic, Casual, Seasonal Wear.</li>
                                          <li>Create SKUs with barcode & label generator.</li>
                                       </ul>
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
                                       <img src="assets/images/re2.png" alt="Segment Customers" class="img-fluid mb-3">
                                       <h4>Step 2 – Smart Billing & GST Compliance</h4>
                                       <ul>
                                          <li>Generate bills in seconds.</li>
                                          <li>Share via SMS or WhatsApp instantly.</li>
                                          <li>Auto-apply GST and maintain compliance.</li>
                                       </ul>
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
                                       <img src="assets/images/re3.png" alt="Track Interactions" class="img-fluid mb-3">
                                       <h4>Step 3 – Inventory Management</h4>
                                       <ul>
                                          <li>Track stock by size, color, brand, and style.</li>
                                          <li>Automate reorders for best-selling designs.</li>
                                          <li>Verify stock with mPOS tools.</li>
                                       </ul>
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
                                       <img src="assets/images/re4.png" alt="Manage Appointments" class="img-fluid mb-3">
                                       <h4>Step 4 – Multi-Store ERP Management</h4>
                                       <ul>
                                          <li>Manage multiple boutiques from one dashboard.</li>
                                          <li>Transfer stock between branches easily.</li>
                                          <li>Access centralized customer database.</li>
                                       </ul>
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
                                       <img src="assets/images/re5.png" alt="Purchase History" class="img-fluid mb-3">
                                       <h4>Step 5 – Omnichannel Selling</h4>
                                       <ul>
                                          <li>aunch your online boutique with Shopify or WooCommerce.</li>
                                          <li>Sync offline & online inventory.</li>
                                          <li>Accept UPI, cards, wallets, and more.</li>
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

      <!-- industry new-cards section end here -->

      <section class="cta-section">
         <div class="container">
             <div class="row">
                 <div class="col-md-12">
                     <div class="cta-box">
                        <div class="phone-icon">
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <h2>Digify Soft Solutions – Smart ERP for Fashion Boutiques</h2>
                        <p>Experience the next level of fashion retail management with our all-in-one cloud-based boutique POS software. From billing to inventory, CRM to ERP, Digify makes running your boutique simple, fast, and profitable.</p>
                         
                             <button class="cta-button" onclick="window.location.href='contact-us.php'">
 👉 Book a Free Demo Today!
</button>
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
                            <h2>Benefits of Digify Boutique <span>ERP Software</span> </h2>
                        </div>
                    </div>
                </div>
               <div class="row justify-content-center gy-4">
                   <!-- Simplified GST Compliance -->
                   <div class="col-lg-4 col-md-6">
                       <div class="key-box">
                           <h3>For Owners:</h3>
                           <ul>
                              <li>Save 120+ billing hours per month</li>
                              <li>Get real-time profit & loss reports</li>
                              <li>Manage multiple stores with a single ERP system</li>
                           </ul>
                       </div>
                   </div>

                   <!-- Real-Time Financial Reporting -->
                   <div class="col-lg-4 col-md-6">
                       <div class="key-box">
                           <h3>For Staff:</h3>
                           <ul>
                              <li>Easy-to-use POS interface</li>
                              <li>Reduce manual errors by 99%</li>
                              <li>Speed up billing by 90%</li>
                           </ul>
                       </div>
                   </div>

                   <!-- Centralized Multi-Store Management -->
                   <div class="col-lg-4 col-md-6">
                       <div class="key-box">
                           <h3>For Customers:</h3>
                           <ul>
                              <li>Quick & smooth checkout</li>
                              <li>Instant invoices via WhatsApp/SMS</li>
                              <li>Loyalty points and personalized offers</li>
                           </ul>
                       </div>
                   </div>
               </div>
            </div>
        </section>

      <section class="clothing-stores-sec software-sec">
           <div class="container">
               <div class="row align-items-center">
                   <div class="col-md-7">
                       <div class="clothing-stores-text software-wrap specialized-box">
                           <h2>How to Get More Customers with Boutique Software</h2>
                           <ul>
                              <li><strong>Customer Insights:</strong> Track buying trends & reorder fast-moving items.</li>
                              <li><strong>Targeted Marketing:</strong> Segment buyers into VIP, Regular, or Lost customers for special offers.</li>
                              <li><strong>Promotions & Discounts:</strong> Run bundle offers, festive discounts, and in-store deals.</li>
                              <li><strong>WhatsApp Engagement:</strong> Share new arrivals, promotions, and reminders directly with buyers.</li>
                              <li><strong>Loyalty Programs:</strong> Reward frequent buyers with points & membership perks.</li>
                              <li><strong>Omnichannel Presence:</strong> Sell both online & offline for maximum reach.</li>
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
                   <div class="col-md-7 order-md-2">
                       <div class="clothing-stores-text software-wrap specialized-box">
                           <h2>Store Management & ERP Guidelines</h2>
                           <ul style="padding-left: 0px;">
                              <li style="list-style:none">✅ Update inventory daily for real-time stock accuracy</li>
                              <li style="list-style:none">✅ Use barcode scanning to avoid billing mistakes</li>
                              <li style="list-style:none">✅ Monitor sales reports before reordering garments</li>
                              <li style="list-style:none">✅ Train staff on POS for faster checkouts</li>
                              <li style="list-style:none">✅ Centralize customer data for loyalty & targeted marketing</li>
                              <li style="list-style:none">✅ Enable stock transfer between stores to avoid shortages</li>
                              <li style="list-style:none">✅ Analyze MIS reports to forecast demand & trends</li>
                              <li style="list-style:none">✅ Run promotions based on season & fashion demand</li>
                              <li style="list-style:none">✅ Go omnichannel by connecting your store with online platforms</li>
                              <li style="list-style:none">✅ Track cash flow & accounts with built-in ERP modules</li>
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
          <div class="row justify-content-center">
            
            <!-- Basic Plan -->
            <div class="col-md-4 mb-4">
              <div class="pricing-card basic">
                <div class="pricing-header">
                  <div class="plan-icon-wrap bg-success">
                    <i class="bi bi-bag-check"></i>
                  </div>
                  <h3>Basic Plan</h3>
                  <p>For Small Boutiques</p>
                </div>
                <ul class="pricing-features">
                  <li>✔ Smart POS Billing (GST-Ready)</li>
                  <li>✔ SMS & WhatsApp Billing</li>
                  <li>✔ Inventory Management (Color, Size, Category)</li>
                  <li>✔ Single Store Support</li>
                  <li>✔ Basic Reports</li>
                </ul>
                <div class="price">₹999 <span>/month</span></div>
                <div class="price-alt">₹9,999 /year</div>
                <a href="#" class="btn btn-success mt-3">Get Started</a>
              </div>
            </div>

            <!-- Standard Plan -->
            <div class="col-md-4 mb-4">
              <div class="pricing-card standard">
                <div class="pricing-header">
                  <div class="plan-icon-wrap bg-warning">
                    <i class="bi bi-graph-up-arrow"></i>
                  </div>
                  <h3>Standard Plan</h3>
                  <p>For Growing Boutiques</p>
                </div>
                <ul class="pricing-features">
                  <li>✔ Everything in Basic +</li>
                  <li>✔ CRM with Customer Segmentation (VIP/Regular/Lost)</li>
                  <li>✔ Loyalty & Membership Program</li>
                  <li>✔ Omnichannel (Online + Offline Sync)</li>
                  <li>✔ Warehouse & Stock Transfer</li>
                  <li>✔ 100+ MIS Reports</li>
                </ul>
                <div class="price">₹1,999 <span>/month</span></div>
                <div class="price-alt">₹19,999 /year</div>
                <a href="#" class="btn btn-warning mt-3 text-dark">Get Started</a>
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
                  <p>For Multi-Branch Fashion Chains</p>
                </div>
                <ul class="pricing-features">
                  <li>✔ Everything in Standard +</li>
                  <li>✔ Multi-Store Centralized ERP Dashboard</li>
                  <li>✔ Advanced Analytics & Forecasting</li>
                  <li>✔ Automated Reordering & Purchase Orders</li>
                  <li>✔ Custom E-commerce Store (Shopify/WooCommerce)</li>
                  <li>✔ Dedicated Account Manager & 24/7 Support</li>
                </ul>
                <div class="price">₹3,999 <span>/month</span></div>
                <div class="price-alt">₹39,999 /year</div>
                <a href="#" class="btn btn-danger mt-3">Get Started</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      
      <!--  faq template section -->
      <section class="faq-template">
          <div class="container">
              <div class="heading-wrap text-center">
                  <h2> Frequently Asked <span>Questions – Digify Boutique POS</span> </h2>
              </div>
              <div class="row">
                  <div class="col-md-12">
                      <div class="faq-section">
                          <div class="accordion" id="faqAccordion">
                              <!-- Digify FAQ 1 -->
                              <div class="accordion-item">
                                  <h2 class="accordion-header" id="heading11">
                                      <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapse11" aria-expanded="true" aria-controls="collapse11">
                                          What is Digify Boutique POS Software?
                                      </button>
                                  </h2>
                                  <div id="collapse11" class="accordion-collapse collapse show" aria-labelledby="heading11"
                                      data-bs-parent="#faqAccordion">
                                      <div class="accordion-body">
                                          Digify is a cloud-based ERP software designed for fashion boutiques. It helps manage billing, inventory, CRM, promotions, and online sales – all in one place.
                                      </div>
                                  </div>
                              </div>
                              <!-- Digify FAQ 2 -->
                              <div class="accordion-item">
                                  <h2 class="accordion-header" id="heading12">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                                          How is it better than normal billing software?
                                      </button>
                                  </h2>
                                  <div id="collapse12" class="accordion-collapse collapse" aria-labelledby="heading12"
                                      data-bs-parent="#faqAccordion">
                                      <div class="accordion-body">
                                          Unlike simple billing apps, Digify also handles stock, customer engagement, online sales, loyalty programs, and ERP features for complete boutique management.
                                      </div>
                                  </div>
                              </div>
                              <!-- Digify FAQ 3 -->
                              <div class="accordion-item">
                                  <h2 class="accordion-header" id="heading13">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                                          Do I need technical knowledge to use it?
                                      </button>
                                  </h2>
                                  <div id="collapse13" class="accordion-collapse collapse" aria-labelledby="heading13"
                                      data-bs-parent="#faqAccordion">
                                      <div class="accordion-body">
                                          No. The software is user-friendly, works on desktop/tablet/mobile, and your staff can learn it within a day.
                                      </div>
                                  </div>
                              </div>
                              <!-- Digify FAQ 4 -->
                              <div class="accordion-item">
                                  <h2 class="accordion-header" id="heading14">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
                                          Can I manage multiple boutique branches?
                                      </button>
                                  </h2>
                                  <div id="collapse14" class="accordion-collapse collapse" aria-labelledby="heading14"
                                      data-bs-parent="#faqAccordion">
                                      <div class="accordion-body">
                                          Yes. Our Premium Plan offers multi-branch ERP management with centralized reporting and inventory sync.
                                      </div>
                                  </div>
                              </div>
                              <!-- Digify FAQ 5 -->
                              <div class="accordion-item">
                                  <h2 class="accordion-header" id="heading15">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
                                          Does it support online selling?
                                      </button>
                                  </h2>
                                  <div id="collapse15" class="accordion-collapse collapse" aria-labelledby="heading15"
                                      data-bs-parent="#faqAccordion">
                                      <div class="accordion-body">
                                          Yes. With Standard & Premium plans, you can launch your own online boutique store or integrate with Shopify/WooCommerce.
                                      </div>
                                  </div>
                              </div>
                              <!-- Digify FAQ 6 -->
                              <div class="accordion-item">
                                  <h2 class="accordion-header" id="heading16">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapse16" aria-expanded="false" aria-controls="collapse16">
                                          How does it help me get more customers?
                                      </button>
                                  </h2>
                                  <div id="collapse16" class="accordion-collapse collapse" aria-labelledby="heading16"
                                      data-bs-parent="#faqAccordion">
                                      <div class="accordion-body">
                                          Through CRM, WhatsApp campaigns, loyalty programs, targeted promotions, and customer segmentation, you can build stronger customer relationships.
                                      </div>
                                  </div>
                              </div>
                              <!-- Digify FAQ 7 -->
                              <div class="accordion-item">
                                  <h2 class="accordion-header" id="heading17">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapse17" aria-expanded="false" aria-controls="collapse17">
                                          Is the software GST-compliant?
                                      </button>
                                  </h2>
                                  <div id="collapse17" class="accordion-collapse collapse" aria-labelledby="heading17"
                                      data-bs-parent="#faqAccordion">
                                      <div class="accordion-body">
                                          Yes. All billing is GST-ready with automated tax calculation and SMS/WhatsApp invoice sharing.
                                      </div>
                                  </div>
                              </div>
                              <!-- Digify FAQ 8 -->
                              <div class="accordion-item">
                                  <h2 class="accordion-header" id="heading18">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapse18" aria-expanded="false" aria-controls="collapse18">
                                          What devices can I use it on?
                                      </button>
                                  </h2>
                                  <div id="collapse18" class="accordion-collapse collapse" aria-labelledby="heading18"
                                      data-bs-parent="#faqAccordion">
                                      <div class="accordion-body">
                                          You can use it on desktop, laptop, tablet, or mobile. It also supports mPOS for exhibitions or fairs.
                                      </div>
                                  </div>
                              </div>
                              <!-- Digify FAQ 9 -->
                              <div class="accordion-item">
                                  <h2 class="accordion-header" id="heading19">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapse19" aria-expanded="false" aria-controls="collapse19">
                                          Can I customize the software for my boutique?
                                      </button>
                                  </h2>
                                  <div id="collapse19" class="accordion-collapse collapse" aria-labelledby="heading19"
                                      data-bs-parent="#faqAccordion">
                                      <div class="accordion-body">
                                          Absolutely. Digify offers customized solutions like brand-specific billing formats, loyalty programs, and personalized reports.
                                      </div>
                                  </div>
                              </div>
                              <!-- Digify FAQ 10 -->
                              <div class="accordion-item">
                                  <h2 class="accordion-header" id="heading20">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapse20" aria-expanded="false" aria-controls="collapse20">
                                          What support do you provide?
                                      </button>
                                  </h2>
                                  <div id="collapse20" class="accordion-collapse collapse" aria-labelledby="heading20"
                                      data-bs-parent="#faqAccordion">
                                      <div class="accordion-body">
                                          We offer 24/7 support (chat, call, and email), free training for your staff, and a dedicated account manager in the Premium plan.
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

