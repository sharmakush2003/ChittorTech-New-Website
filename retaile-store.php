<!-- header -->
  <?php
 include 'db.php';
  include 'fetch_meta.php';

  $pageMeta = getPageMeta('liquor-store');
  $pageTitle = $pageMeta['page_title'] ?? 'liquor-store';
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
                  <h1>India’s No. 1 AI-Powered Retail ERP Software</h1>
                  <h4>Digify Soft Solutions – Smart AI Retail Management Software
</h4>
                  <a class="schedule-btn" href="contact-us.php">👉 Schedule a Free Demo Today</a>
               </div>
            </div>
         </div>
         <div class="col-md-5">
            <div class="inner-banner-img">
               <figure>
                  <img src="assets/images/Powered-Retail.png">
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

   <!-- Intelligent POS & Billing -->
   <div class="col-md-4 col-sm-6">
      <div class="key-box">
         <h3>Intelligent POS & Billing</h3>
         <ul>
            <li>AI-assisted fast & error-free billing</li>
            <li>Accept cash, cards, UPI & digital wallets</li>
            <li>Mobile POS (mPOS) for on-the-go billing</li>
            <li>Image-based AI product scanning</li>
            <li>GST-compliant automated invoicing</li>
         </ul>
      </div>
   </div>

   <!-- Multi-Store & Branch Management -->
   <div class="col-md-4 col-sm-6">
      <div class="key-box">
         <h3>AI Multi-Store Management</h3>
         <ul>
            <li>Centralized AI dashboard for all branches</li>
            <li>Smart stock transfers between stores</li>
            <li>Unified customer database</li>
            <li>Branch-wise performance analytics</li>
         </ul>
      </div>
   </div>

   <!-- Inventory Management -->
   <div class="col-md-4 col-sm-6">
      <div class="key-box">
         <h3>AI Inventory Management</h3>
         <ul>
            <li>Real-time stock tracking</li>
            <li>Automated AI reorders</li>
            <li>Fast & slow-moving product analysis</li>
            <li>Barcode & label generation</li>
            <li>Warehouse & multi-location control</li>
         </ul>
      </div>
   </div>

   <!-- Customer Engagement -->
   <div class="col-md-4 col-sm-6">
      <div class="key-box">
         <h3>Customer Loyalty & Engagement</h3>
         <ul>
            <li>AI customer segmentation</li>
            <li>Personalized offers & discounts</li>
            <li>Loyalty points & memberships</li>
            <li>Bulk WhatsApp promotions</li>
            <li>Feedback & review collection</li>
         </ul>
      </div>
   </div>

   <!-- Accounting & Finance -->
   <div class="col-md-4 col-sm-6">
      <div class="key-box">
         <h3>Accounting & Financial Automation</h3>
         <ul>
            <li>Integrated accounting & ledgers</li>
            <li>Automated GST & tax compliance</li>
            <li>P&L, expense & cashflow tracking</li>
            <li>E-Way Bill & E-Invoicing</li>
         </ul>
      </div>
   </div>

   <!-- Omnichannel & E-Commerce -->
   <div class="col-md-4 col-sm-6">
      <div class="key-box">
         <h3>Omnichannel & E-Commerce</h3>
         <ul>
            <li>Custom online store setup</li>
            <li>Shopify & WooCommerce integration</li>
            <li>Real-time stock sync</li>
            <li>Secure payment gateway integration</li>
         </ul>
      </div>
   </div>

   <!-- Reporting & Analytics -->
   <div class="col-md-4 col-sm-6">
      <div class="key-box">
         <h3>Smart Reporting & Analytics</h3>
         <ul>
            <li>150+ AI-powered MIS reports</li>
            <li>Predictive sales & demand analytics</li>
            <li>Interactive dashboards & alerts</li>
            <li>Customer behavior insights</li>
         </ul>
      </div>
   </div>

   <!-- Additional AI Advantages -->
   <div class="col-md-4 col-sm-6">
      <div class="key-box">
         <h3>Additional AI Advantages</h3>
         <ul>
            <li>AI stock & expiry alerts</li>
            <li>AI pricing & promotion optimization</li>
            <li>AI-assisted store layout planning</li>
            <li>Seamless omnichannel experience</li>
         </ul>
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
                  <h3>Basic Plan – Small Liquor Stores</h3>
                  <div class="price">💳 ₹4,499 <span>/month</span></div>
               </div>
               <ul class="pricing-features">
                  <li>✔ POS & Billing</li>
                  <li>✔ Basic Inventory Management</li>
                  <li>✔ GST-Compliant Digital Invoices</li>
                  <li>✔ Barcode Generator & Label Printing</li>
                  <li>✔ Basic Sales & Stock Reports</li>
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
                  <h3> Standard Plan – Growing Liquor Stores</h3>
                  <div class="price">💳 ₹8,999 <span>/month</span></div>
               </div>
               <ul class="pricing-features">
                  <li>✔ Everything in Basic, plus:</li>
                  <li>✔ CRM & Customer Segmentation</li>
                  <li>✔ Loyalty Programs & Discount Management</li>
                  <li>✔ Automated Reorders & Stock Alerts</li>
                  <li>✔ Warehouse Management</li>
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
                  <h3>Premium Plan – Multi-Branch Liquor Chains</h3>
                  <div class="price">💳 Custom Pricing</div>
               </div>
               <ul class="pricing-features">
                  <li>✔ Everything in Standard, plus:</li>
                  <li>✔ Centralized Multi-Store Management</li>
                  <li>✔ Unified Customer Database & Loyalty Programs</li>
                  <li>✔ Integrated Accounting & GST Automation</li>
                  <li>✔ Online Store Integration & Payment Gateways</li>
                  <li>✔ Dedicated Support & Advanced Reporting</li>
               </ul>
            </div>
         </div>

      </div>
   </div>
</section>
  


<section class="bridal-store-sec liquor-store-sec">
   <div class="container">
      <div class="row">
         <div class="col-md-12">
           <div class="bridal-store liquor-store">

   <h2>Why Choose Digify AI Retail ERP?</h2>
   <p>
      Digify AI Retail ERP is a next-generation, AI-powered retail management platform designed to simplify operations, improve profitability, and scale businesses effortlessly across multiple retail segments.
   </p>

   <ul>
      <li><strong>No. 1 AI-Powered Retail Solution –</strong> Built for gift shops, toy stores, sports shops, supermarkets, hardware stores, and more.</li>

      <li><strong>Automated, Cloud-Based Platform –</strong> Access your store data securely anytime, anywhere, from any device.</li>

      <li><strong>Centralized Multi-Store Management –</strong> Manage branches, warehouses, inventory, and customer data from a single AI-driven dashboard.</li>

      <li><strong>User-Friendly Interface –</strong> Minimal training required with an intuitive design that staff can use easily.</li>

      <li><strong>Scalable & Feature-Rich –</strong> Grow seamlessly from a single store to a large retail chain without changing systems.</li>

      <li><strong>Data-Driven Decision Making –</strong> AI-powered insights help reduce losses, increase profits, and improve customer satisfaction.</li>
   </ul>

   <button onclick="window.location.href='contact-us.php'" class="cta-button">
      Book Your Free Demo Today
   </button>

</div>

         </div>
      </div>
   </div>
</section>
 


<!-- FAQ template section -->
<section class="faq-template">
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
                           1. What is Digify Soft Solutions Retail Store Software?
                        </button>
                     </h2>
                     <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A1. A cloud-based POS and ERP solution designed to manage billing, inventory, CRM, GST compliance, loyalty programs, and multi-store operations for liquor shops.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 2 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading2">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                           2. Can it manage multiple store locations?
                        </button>
                     </h2>
                     <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A2. Yes, the Premium Plan allows centralized multi-store management with unified dashboards.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 3 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading3">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                           3. Is GST-compliant billing supported?
                        </button>
                     </h2>
                     <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A3. Absolutely. Generate GST invoices, automated tax calculations, and E-Way bills for legal compliance.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 4 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading4">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                           4. Can I track inventory efficiently?
                        </button>
                     </h2>
                     <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A4. Yes, with real-time stock monitoring, automated reorders, and brand-wise stock tracking.
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
                           A5. Yes. Accept UPI, debit/credit cards, digital wallets, and cash payments.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 6 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading6">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                           6. Can I run loyalty and discount programs?
                        </button>
                     </h2>
                     <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A6. Yes, the software includes loyalty points, membership management, and discount offers.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 7 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading7">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                           7. Does it have WhatsApp integration?
                        </button>
                     </h2>
                     <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A7. Yes, you can send bills, offers, and notifications directly to customers via WhatsApp.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 8 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading8">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                           8. Can I analyze sales and stock reports?
                        </button>
                     </h2>
                     <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A8. Yes, access 150+ detailed reports covering sales, stock, profits, and customer behavior.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 9 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading9">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                           9. Does it include age verification for customers?
                        </button>
                     </h2>
                     <div id="collapse9" class="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A9. Yes, the software has built-in age verification to prevent underage sales.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 10 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading10">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                           10. Can I customize this software for my liquor store?
                        </button>
                     </h2>
                     <div id="collapse10" class="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A10. Yes. Digify Soft Solutions provides full customization for POS, inventory management, multi-location operations, and CRM modules.
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