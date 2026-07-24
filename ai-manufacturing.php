<!-- header -->
  <?php
  include 'db.php';
  include 'fetch_meta.php';

  $pageMeta = getPageMeta('pet-shop');
  $pageTitle = $pageMeta['page_title'] ?? 'pet-shop';
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
                  <h1>Cloud-Based Manufacturing Software for Faster Growth</h1>
                  <h4>Complete AI-Based Business Management Solution</h4>
                  <p> In today’s highly competitive and fast-moving business environment, companies that operate both manufacturing  divisions require a powerful, centralized, and intelligent system to manage operations seamlessly. Managing production, inventory, billing, suppliers, customers, warehouses, and financial reporting separately often leads to inefficiencies, delays, and data mismatches.</p>
                  <a class="schedule-btn" href="contact-us.php">👉 Schedule a Free Demo Today</a>
               </div>
            </div>
         </div>
         <div class="col-md-5">
            <div class="inner-banner-img">
               <figure>
                  <img src="assets/images/Cloud-Based-Manufacturing.png">
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
   <div class="col-md-3 col-sm-6">
      <div class="key-box">
         <h3>Intelligent POS & Billing</h3>
         <p>
            AI-assisted POS for fast, accurate, and GST-compliant billing with support for all modern payment modes.
         </p>
         <ul>
            <li>AI-powered, error-free billing</li>
            <li>UPI, cards, wallets & cash support</li>
            <li>Mobile POS (mPOS) for on-the-go billing</li>
            <li>Automated GST calculation & invoices</li>
         </ul>
      </div>
   </div>

   <!-- AI-Driven Inventory Management -->
   <div class="col-md-3 col-sm-6">
      <div class="key-box">
         <h3>AI-Driven Inventory Management</h3>
         <p>
            Real-time inventory intelligence to prevent stockouts, overstocking, and expiry-related losses.
         </p>
         <ul>
            <li>Live stock tracking with AI alerts</li>
            <li>Automated reorders & expiry management</li>
            <li>Fast vs slow-selling product analysis</li>
            <li>Barcode & label generation</li>
         </ul>
      </div>
   </div>

   <!-- Accounting & GST Automation -->
   <div class="col-md-3 col-sm-6">
      <div class="key-box">
         <h3>Accounting & GST Automation</h3>
         <p>
            Built-in AI accounting ensures compliance, accuracy, and complete financial visibility.
         </p>
         <ul>
            <li>Integrated P&L, ledgers & expenses</li>
            <li>GST returns & tax-ready reports</li>
            <li>Real-time financial analytics</li>
            <li>E-way bill & e-invoicing support</li>
         </ul>
      </div>
   </div>

   <!-- Smart CRM & Customer Engagement -->
   <div class="col-md-3 col-sm-6">
      <div class="key-box">
         <h3>Smart CRM & Customer Engagement</h3>
         <p>
            AI-powered CRM tools to build loyalty, increase repeat sales, and personalize customer engagement.
         </p>
         <ul>
            <li>Loyalty points, offers & memberships</li>
            <li>Customer segmentation for targeted marketing</li>
            <li>Feedback & review collection</li>
            <li>WhatsApp promotions & notifications</li>
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
                  <h3>Basic Plan – Small Pet Stores</h3>
                  <div class="price">💳 ₹3,999 <span>/month</span></div>
               </div>
               <ul class="pricing-features">
                  <li>✔ POS & Billing</li>
                  <li>✔ Inventory Management (Low Stock Alerts & Reorder)</li>
                  <li>✔ GST-Compliant Billing</li>
                  <li>✔ Barcode & Label Generation</li>
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
                  <h3>Standard Plan – Growing Pet Stores</h3>
                  <div class="price">💳 ₹7,999 <span>/month</span></div>
               </div>
               <ul class="pricing-features">
                  <li>✔ Everything in Basic, plus:</li>
                  <li>✔ CRM & Customer Segmentation</li>
                  <li>✔ Loyalty Points & Discount Management</li>
                  <li>✔ Expiry Management & Auto-Reorders</li>
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
                  <h3>Premium Plan – Multi-Branch Pet Stores</h3>
                  <div class="price">💳 Custom Pricing</div>
               </div>
               <ul class="pricing-features">
                  <li>✔ Everything in Standard, plus:</li>
                  <li>✔ Centralized Multi-Store Management</li>
                  <li>✔ Unified Customer Database & Loyalty Programs</li>
                  <li>✔ Integrated Accounting & GST Automation</li>
                  <li>✔ Omnichannel Sales & Online Store Integration</li>
                  <li>✔ Dedicated Support & Advanced Reporting</li>
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
               <h2>Why Choose Digify AI Retail ERP?</h2>
<p>
Digify AI Retail ERP is a next-generation, AI-powered retail solution built for gift shops, toy stores, sports shops, supermarkets, hardware stores, and specialty retailers. It simplifies daily operations while helping businesses scale faster with intelligent automation and real-time insights.
</p>
<ul>
   <li><strong>No. 1 AI-Powered Retail Solution –</strong> Designed to handle modern retail challenges with speed and accuracy.</li>
   <li><strong>Automated & Cloud-Based Platform –</strong> Access and manage your stores anytime, anywhere.</li>
   <li><strong>Centralized Multi-Store Management –</strong> Control branches, warehouses, inventory, and customer data from one dashboard.</li>
   <li><strong>User-Friendly Interface –</strong> Easy to use with minimal training required for staff.</li>
   <li><strong>Scalable & Feature-Rich –</strong> Grows seamlessly from single stores to large retail chains.</li>
   <li><strong>Data-Driven Decision Making –</strong> AI-powered insights help reduce losses, increase profits, and improve customer satisfaction.</li>
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
                           1. What is Digify Soft Solutions  Manufacturing Software?
                        </button>
                     </h2>
                     <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A1. A cloud-based POS and ERP solution designed to manage billing, inventory, accounting, CRM, and online sales for pet stores.
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
                           A3. Absolutely. Generate GST-ready invoices, automated tax calculations, and digital bills.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 4 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading4">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                           4. Can I manage inventory automatically?
                        </button>
                     </h2>
                     <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A4. Yes, with low-stock alerts, auto-reorders, expiry tracking, and barcode-based inventory management.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 5 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading5">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                           5. Does it support mobile billing?
                        </button>
                     </h2>
                     <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A5. Yes, the Mobile POS feature allows billing from any device, anywhere.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 6 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading6">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                           6. Can I run loyalty programs and discounts?
                        </button>
                     </h2>
                     <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A6. Yes, you can manage loyalty points, membership programs, and custom discount offers.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 7 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading7">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                           7. Does it include CRM and customer engagement tools?
                        </button>
                     </h2>
                     <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A7. Yes, track customers, collect feedback, send invoices via WhatsApp, and segment them for targeted campaigns.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 8 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading8">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                           8. Can I analyze sales trends by pet type?
                        </button>
                     </h2>
                     <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A8. Yes, with Pet-Wise Data Analysis to forecast demand and optimize inventory.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 9 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading9">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                           9. Can I integrate online sales channels?
                        </button>
                     </h2>
                     <div id="collapse9" class="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A9. Yes, the software supports omnichannel sales and integration with your online store.
                        </div>
                     </div>
                  </div>

                  <!-- FAQ 10 -->
                  <div class="accordion-item">
                     <h2 class="accordion-header" id="heading10">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                           10. Is the software customizable for my pet store?
                        </button>
                     </h2>
                     <div id="collapse10" class="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                           A10. Yes. Digify Soft Solutions offers full customization for POS, CRM, inventory management, and accounting modules.
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