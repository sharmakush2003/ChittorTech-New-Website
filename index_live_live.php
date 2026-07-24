
<?php 
include 'db.php';
  	include 'fetch_meta.php';
  $pageMeta = getPageMeta('index');

  $pageTitle = $pageMeta['page_title'] ?? 'index';
  $pageDescription = $pageMeta['page_description'] ?? '';

  include("top.php");
include 'header.php'; ?>


    <!-- header -->
   
   <!-- banner start here -->
   <section class="home-banner-sec">
      <div id="carouselExampleControls" class="carousel .homebanner" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item pt-5 pb-md-5 pb-3  active">
              <div class="container">
                  <div class="row">
                      <div class="col-md-6">
                         <div class="slidekpright">
                           <div class="animated w-100 h-100"> 
                              <div class="animated-box">
                                  <h2>Scan your bill and let AI do the work— No typing, No mistakes, only smarter workflows.</h2>
                                   <p>Empower your business with Digify Soft Solutions — the all-in-one platform for retailers, MSMEs, and manufacturers. Our comprehensive modules and features help you make your stores and business units smart, automated, and efficient.</p>
                                   <a href="contact-us.php"> <i class="fa-solid fa-calendar-days"></i>  Schedule Demo</a>
                              </div>
                          </div>
                         </div>
                      </div>
                      <div class="col-md-2"></div>
                      <div class="col-md-4">
                         <div class="banner-img">
                             <figure>
                                 <img src="assets/images/ocr.webp" alt="ocr">
                             </figure>
                         </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="carousel-item pt-5 pb-md-5 pb-3">
               <div class="container">
                  <div class="row">
                      <div class="col-md-6">
                         <div class="slidekpright">
                           <div class="animated w-100 h-100">
                              <div class="animated-box">
                                  <h2>Experience the power of a smart offline POS designed for uninterrupted business operations.</h2>
                                   <p>Effortlessly switch between online and offline modes with blazing-fast syncing to keep your sales and inventory always up-to-date. Reliable, efficient, and built to keep your business running smoothly—no matter the connectivity.</p>
                                   <a href="contact-us.php"> <i class="fa-solid fa-calendar-days"></i>   Schedule Demo</a>
                              </div>
                          </div>
                         </div>
                      </div>
                      <div class="col-md-2"></div>
                      <div class="col-md-4">
                         <div class="banner-img">
                             <figure>
                                 <img src="assets/images/offline-pos.webp" alt="offline-pos">
                             </figure>
                         </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="carousel-item pt-5 pb-md-5 pb-3">
               <div class="container">
                  <div class="row">
                      <div class="col-md-6">
                         <div class="slidekpright">
                           <div class="animated w-100 h-100">
                              <div class="animated-box">
                                  <h2>Get ready to elevate your business management in FY 2025-26 with Digify Soft ERP</h2>
                                   <p>More than just software, it’s an AI-powered all-in-one management system designed to streamline your operations, boost efficiency, and drive growth. Experience intelligent automation, real-time insights, and seamless integration tailored to future-ready businesses</p>
                                   <a href="contact-us.php"> <i class="fa-solid fa-calendar-days"></i>  Schedule Demo</a>
                              </div>
                          </div>
                         </div>
                      </div>
                      <div class="col-md-2"></div>
                      <div class="col-md-4">
                         <div class="banner-img">
                             <figure>
                                 <img src="assets/images/business-management.webp" alt="business-management">
                             </figure>
                         </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="carousel-item pt-5 pb-md-5 pb-3">
               <div class="container">
                  <div class="row">
                      <div class="col-md-6">
                         <div class="slidekpright">
                           <div class="animated w-100 h-100">
                              <div class="animated-box">
                                  <h2>Empower your business with seamless e-commerce solutions.</h2>
                                   <p>Manage your store, boost sales, and deliver effortless shopping experiences that keep customers coming back. Simplify selling and elevate growth with ease</p>
                                   <a href="contact-us.php"> <i class="fa-solid fa-calendar-days"></i>  Schedule Demo</a>
                              </div>
                          </div>
                         </div>
                      </div>
                      <div class="col-md-2"></div>
                      <div class="col-md-4">
                         <div class="banner-img">
                             <figure>
                                 <img src="assets/images/E-commerce-1.webp" alt="E-commerce-1">
                             </figure>
                         </div>
                      </div>
                  </div>
              </div>
          </div>
        <div class="carousel-item pt-5 pb-md-5 pb-3">
               <div class="container">
                  <div class="row">
                      <div class="col-md-6">
                         <div class="slidekpright">
                           <div class="animated w-100 h-100">
                              <div class="animated-box">
                                  <h2>Drive business growth with our AI-powered POS system</h2>
                                   <p>Packed with advanced features. Enhance your store’s performance with intelligent inventory management, personalized customer experiences, and lightning-fast transactions. Experience next-level retail operations designed for efficiency and increased sales.</p>
                                   <a href="contact-us.php"> <i class="fa-solid fa-calendar-days"></i> Upgrade now</a>
                              </div>
                          </div>
                         </div>
                      </div>
                      <div class="col-md-2"></div>
                      <div class="col-md-4">
                         <div class="banner-img">
                             <figure>
                                 <img src="assets/images/POS-1.webp" alt="POS-1">
                             </figure>
                         </div>
                      </div>
                  </div>
              </div>
          </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
   </section>
   <!-- banner end here -->
<!-- 
  <section class="header-client-sec ">
      <div class="container">
       <div class="row">
          <div class="col-md-12">
             <div class="clients-header">
                <div class="owl-carousel  owl-theme" id="clients-header">
                   <div class="item">
                      <div class="clients-box">
                         <figure>
                            <img src="assets/images/cl1.webp">
                         </figure>
                      </div>
                   </div>
                   <div class="item">
                      <div class="clients-box">
                         <figure>
                            <img src="assets/images/cl2.webp">
                         </figure>
                      </div>
                   </div>
                   <div class="item">
                      <div class="clients-box">
                         <figure>
                            <img src="assets/images/cl3.webp">
                         </figure>
                      </div>
                   </div>
                   <div class="item">
                      <div class="clients-box">
                         <figure>
                            <img src="assets/images/cl4.webp">
                         </figure>
                      </div>
                   </div>
                   <div class="item">
                      <div class="clients-box">
                         <figure>
                            <img src="assets/images/cl5.webp">
                         </figure>
                      </div>
                   </div>
                   <div class="item">
                      <div class="clients-box">
                         <figure>
                            <img src="assets/images/cl6.webp">
                         </figure>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  </section> -->



   <!-- Innovative solutions section start here -->
   <section class="innovative-solutions-sec">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="heading-wrap">
                       <h1>Intelligent ERP & Retail Solutions for Retailers,  <span>MSMEs, and Manufacturers</span> </h1>
                       <p>Digify Soft Solutions offers comprehensive modules and features designed to make your stores and business units smart, automated, and highly efficient.</p>
                    </div>
                     <div class="innovative-tabs">
                       <!-- Nav Tabs -->
                       <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                         <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">POS</button>

                         <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">ERP</button>

                         <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Accounting</button>

                         <button class="nav-link" id="nav-erp-tab" data-bs-toggle="tab" data-bs-target="#nav-erp" type="button" role="tab" aria-controls="nav-erp" aria-selected="false">CRM</button>

                         <button class="nav-link" id="nav-pos-tab" data-bs-toggle="tab" data-bs-target="#nav-pos" type="button" role="tab" aria-controls="nav-pos" aria-selected="false">Smart retail</button>

                         <button class="nav-link" id="nav-inventory-tab" data-bs-toggle="tab" data-bs-target="#nav-inventory" type="button" role="tab" aria-controls="nav-inventory" aria-selected="false">Omnichannel</button>

                         <button class="nav-link" id="nav-crm-tab" data-bs-toggle="tab" data-bs-target="#nav-crm" type="button" role="tab" aria-controls="nav-crm" aria-selected="false">Inventory</button>

                         <button class="nav-link" id="nav-lead-tab" data-bs-toggle="tab" data-bs-target="#nav-lead" type="button" role="tab" aria-controls="nav-lead" aria-selected="false">Lead Management</button>

                         <button class="nav-link" id="nav-digital-tab" data-bs-toggle="tab" data-bs-target="#nav-digital" type="button" role="tab" aria-controls="nav-gigital" aria-selected="false">Payroll </button>

                         <button class="nav-link" id="nav-development-tab" data-bs-toggle="tab" data-bs-target="#nav-development" type="button" role="tab" aria-controls="nav-development" aria-selected="false">Education ERP </button>
                       </div>

                       <!-- Tab Content -->
                       <div class="tab-content p-3 border bg-light" id="nav-tabContent">
                         <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div class="row align-items-center">
                                 <div class="col-md-5">
                                     <div class="innovative-img">
                                         <figure>
                                            <img src="assets/images/smart-pos.webp">
                                         </figure>
                                     </div>
                                 </div>
                                 <div class="col-md-7">
                                     <div class="innovative-text">
                                         <h3>Smart-POS</h3>
                                       <p>
  Quick and easy billing with 
  <a href="pos.php" style="all:unset; cursor:pointer;">
    <strong style="text-decoration:underline;">
      Smart-POS!
    </strong>
  </a>
  Just scan and generate bills effortlessly
</p>

                                         <a href="pos.php">View more <i style="transform: rotateZ(90deg);" class="fa-solid fa-arrow-up"></i></a>
                                     </div>
                                 </div>
                            </div>
                         </div>
                         <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                           <div class="row align-items-center">
                                 <div class="col-md-5">
                                     <div class="innovative-img">
                                         <figure>
                                            <img src="assets/images/ERP.webp">
                                         </figure>
                                     </div>
                                 </div>
                                 <div class="col-md-7">
                                     <div class="innovative-text">
                                         <h3>AI-Integrated ERP</h3>
                                      
										 <p>
Complete
  <a href="erp.php" style="all:unset; cursor:pointer;">
    <strong style="text-decoration:underline;">
      enterprise management
    </strong>
  </a>
 for seamless operations.
</p>

                                         <a href="erp.php">View more <i style="transform: rotateZ(90deg);" class="fa-solid fa-arrow-up"></i></a>
                                     </div>
                                 </div>
                            </div>
                         </div>
                         <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                           <div class="row align-items-center">
                                 <div class="col-md-5">
                                     <div class="innovative-img">
                                         <figure>
                                            <img src="assets/images/accounting.webp">
                                         </figure>
                                     </div>
                                 </div>
                                 <div class="col-md-7">
                                     <div class="innovative-text">
                                         <h3>Efficient accounting</h3>
										 <p>
Simplified
  <a href="accounting.php" style="all:unset; cursor:pointer;">
    <strong style="text-decoration:underline;">
     finance tracking
    </strong>
  </a>
 and reporting.
</p>
                                        
										 
                                         <a href="accounting.php">View more <i style="transform: rotateZ(90deg);" class="fa-solid fa-arrow-up"></i></a>
                                     </div>
                                 </div>
                            </div>
                         </div>
                         <div class="tab-pane fade" id="nav-erp" role="tabpanel" aria-labelledby="nav-erp-tab">
                           <div class="row align-items-center">
                                 <div class="col-md-5">
                                     <div class="innovative-img">
                                         <figure>
                                            <img src="assets/images/crm.webp">
                                         </figure>
                                     </div>
                                 </div>
                                 <div class="col-md-7">
                                     <div class="innovative-text">
                                         <h3>Reliable CRM</h3>
                                        
										 <p>
Build stronger
  <a href="crm.php" style="all:unset; cursor:pointer;">
    <strong style="text-decoration:underline;">
    customer relationships.
    </strong>
  </a>
 
</p>
                                         <a href="crm.php">View more <i style="transform: rotateZ(90deg);" class="fa-solid fa-arrow-up"></i></a>
                                     </div>
                                 </div>
                            </div>
                         </div>
                         <div class="tab-pane fade" id="nav-pos" role="tabpanel" aria-labelledby="nav-pos-tab">
                           <div class="row align-items-center">
                                 <div class="col-md-5">
                                     <div class="innovative-img">
                                         <figure>
                                            <img src="assets/images/smart-retail.webp">
                                         </figure>
                                     </div>
                                 </div>
                                 <div class="col-md-7">
                                     <div class="innovative-text">
                                         <h3>Smart retail software</h3>
                                       
										 <p>
Modern solutions to optimize your
  <a href="smart-retail.php" style="all:unset; cursor:pointer;">
    <strong style="text-decoration:underline;">
     retail
    </strong>
  </a>
operations.
</p>
                                         <a href="smart-retail.php">View more <i style="transform: rotateZ(90deg);" class="fa-solid fa-arrow-up"></i></a>
                                     </div>
                                 </div>
                            </div>
                         </div>
                         <div class="tab-pane fade" id="nav-inventory" role="tabpanel" aria-labelledby="nav-inventory-tab">
                           <div class="row align-items-center">
                                 <div class="col-md-5">
                                     <div class="innovative-img">
                                         <figure>
                                            <img src="assets/images/omnichannel.webp">
                                         </figure>
                                     </div>
                                 </div>
                                 <div class="col-md-7">
                                     <div class="innovative-text">
                                         <h3>All-new Omnichannel</h3>
                                        
										 <p>
Connect your business  across
  <a href="omnichannel.php" style="all:unset; cursor:pointer;">
    <strong style="text-decoration:underline;">
     multiple platforms.
    </strong>
  </a>
 
</p>
                                         <a href="omnichannel.php">View more <i style="transform: rotateZ(90deg);" class="fa-solid fa-arrow-up"></i></a>
                                     </div>
                                 </div>
                            </div>
                         </div>
                         <div class="tab-pane fade" id="nav-crm" role="tabpanel" aria-labelledby="nav-crm-tab">
                           <div class="row align-items-center">
                                 <div class="col-md-5">
                                     <div class="innovative-img">
                                         <figure>
                                            <img src="assets/images/smart-pos.webp">
                                         </figure>
                                     </div>
                                 </div>
                                 <div class="col-md-7">
                                     <div class="innovative-text">
                                         <h3>AI-Integrated inventory management</h3>
                                         
										 <p>
Efficient 
  <a href="inventory.php" style="all:unset; cursor:pointer;">
    <strong style="text-decoration:underline;">
    stock management
    </strong>
  </a>
with real-time tracking.
</p>
                                         <a href="inventory.php">View more <i style="transform: rotateZ(90deg);" class="fa-solid fa-arrow-up"></i></a>
                                     </div>
                                 </div>
                            </div>
                         </div>
                         <div class="tab-pane fade" id="nav-lead" role="tabpanel" aria-labelledby="nav-lead-tab">
                           <div class="row align-items-center">
                                 <div class="col-md-5">
                                     <div class="innovative-img">
                                         <figure>
                                            <img src="assets/images/lead.webp">
                                         </figure>
                                     </div>
                                 </div>
                                 <div class="col-md-7">
                                     <div class="innovative-text">
                                         <h3>Lead Management</h3>
                                     
										 <p>
Track, manage, and convert
  <a href="lead-management.php" style="all:unset; cursor:pointer;">
    <strong style="text-decoration:underline;">
      leads
    </strong>
  </a>
 efficiently.
</p>
                                         <a href="lead-management.php">View more <i style="transform: rotateZ(90deg);" class="fa-solid fa-arrow-up"></i></a>
                                     </div>
                                 </div>
                            </div>
                         </div>
                         <div class="tab-pane fade" id="nav-digital" role="tabpanel" aria-labelledby="nav-digital-tab">
                           <div class="row align-items-center">
                                 <div class="col-md-5">
                                     <div class="innovative-img">
                                         <figure>
                                            <img src="assets/images/digital.webp">
                                         </figure>
                                     </div>
                                 </div>
                                 <div class="col-md-7">
                                     <div class="innovative-text">
                                         <h3>Payroll </h3>
                                        
										 <p>
Simplified, accurate, and timely
  <a href="payroll.php" style="all:unset; cursor:pointer;">
    <strong style="text-decoration:underline;">
     employee salary
    </strong>
  </a>
management.
</p>
                                         <a href="payroll.php">View more <i style="transform: rotateZ(90deg);" class="fa-solid fa-arrow-up"></i></a>
                                     </div>
                                 </div>
                            </div>
                         </div>
                         <div class="tab-pane fade" id="nav-development" role="tabpanel" aria-labelledby="nav-development-tab">
                           <div class="row align-items-center">
                                 <div class="col-md-5">
                                     <div class="innovative-img">
                                         <figure>
                                            <img src="assets/images/development.webp">
                                         </figure>
                                     </div>
                                 </div>
                                 <div class="col-md-7">
                                     <div class="innovative-text">
                                         <h3>Education ERP</h3>
                                         
										 <p>
Streamlined school/college 
  <a href="education.php" style="all:unset; cursor:pointer;">
    <strong style="text-decoration:underline;">
    administration
    </strong>
  </a>
for smoother operations.
</p>
                                         <a href="education.php">View more <i style="transform: rotateZ(90deg);" class="fa-solid fa-arrow-up"></i></a>
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
   <!-- Innovative solutions section end here -->

   <!-- Solving business section start here -->
 <section class="solving-business-sec">
   <div class="container">
       <div class="row">
           <div class="col-md-10 mx-auto">
               <div class="heading-wrap">
                  <h2>Smart Solutions for<span> Every Industry</span> </h2>
                  <p>Whether it’s retail, wholesale, or manufacturing, Digify Soft Solutions provides the right ERP and smart business solutions to streamline operations and boost efficiency.</p>
               </div>
                <div class="innovative-tabs solving-business-tabs">
                  <!-- Nav Tabs -->
                  <div class="nav nav-tabs mb-3" id="nav-tab-wholesale" role="tablist">
                    <button class="nav-link active" id="nav-wholesale-tab" data-bs-toggle="tab" data-bs-target="#nav-wholesale" type="button" role="tab" aria-controls="nav-wholesale" aria-selected="true">Smarter retail</button>
                    <button class="nav-link" id="nav-distribution-tab" data-bs-toggle="tab" data-bs-target="#nav-distribution" type="button" role="tab" aria-controls="nav-distribution" aria-selected="false">Manufacturing</button>
                  </div>

                  <!-- Tab Content -->
                  <div class="tab-content" id="nav-tabContent-wholesale">

                    <!-- Retail Tab -->
                    <div class="tab-pane fade show active" id="nav-wholesale" role="tabpanel" aria-labelledby="nav-wholesale-tab">
                       <div class="row align-items-center bg-shape">
                            <div class="col-md-7">
                                <div class="innovative-silder">
                                    <div class="owl-carousel store-silder owl-theme">
                                       <div class="item">
                                           <div class="store-box">
                                              <h3>Apparel & Footwear</h3>
                                              <ul>
                                                 <li>
                                                    <figure>
                                                       <a href="bridal-store.php"><img src="assets/images/img301.webp" alt="Bridal Store"></a>
                                                    </figure>
                                                    <h6>Bridal Store</h6>
                                                 </li>
                                                 <li>
                                                    <figure>
                                                       <a href="boutique-store.php"><img src="assets/images/img302.webp" alt="Boutique Store"></a>
                                                    </figure>
                                                    <h6>Boutique Store</h6>
                                                 </li>
                                                 <li>
                                                    <figure>
                                                       <a href="readymade-garment.php"><img src="assets/images/img303.webp" alt="Readymade Garment"></a>
                                                    </figure>
                                                    <h6>readymade-garment</h6>
                                                 </li>
                                                 <li>
                                                    <figure>
                                                       <a href="footwear-store.php"><img src="assets/images/img304.webp" alt="Footwear Store"></a>
                                                    </figure>
                                                    <h6>footwear-store</h6>
                                                 </li>
                                              </ul>
                                           </div>
                                       </div>

                                       <div class="item">
                                           <div class="store-box">
                                              <h3>Books & Office Supplies</h3>
                                              <ul>
                                                 <li>
                                                    <figure>
                                                       <a href="book-store.php"><img src="assets/images/img305.webp" alt="Book Store"></a>
                                                    </figure>
                                                    <h6>Book Store</h6>
                                                 </li>
                                                 <li>
                                                    <figure>
                                                       <a href="stationery-store.php"><img src="assets/images/img306.webp" alt="Office Supplies"></a>
                                                    </figure>
                                                    <h6>Stationery Store</h6>
                                                 </li>
                                              </ul>
                                           </div>
                                       </div>

<!--                                        <div class="item">
                                           <div class="store-box">
                                              <h3>Food & Confectionery</h3>
                                              <ul>
                                                 <li>
                                                    <figure>
                                                       <a href="#"><img src="assets/images/img307.webp" alt="Bakery Shop"></a>
                                                    </figure>
                                                    <h6>Bakery Shop</h6>
                                                 </li>
                                                 <li>
                                                    <figure>
                                                       <a href="#"><img src="assets/images/img308.webp" alt="Ice Cream Shop"></a>
                                                    </figure>
                                                    <h6>Ice Cream Shop</h6>
                                                 </li>
                                                 <li>
                                                    <figure>
                                                       <a href="#"><img src="assets/images/img309.webp" alt="Sweet Shop"></a>
                                                    </figure>
                                                    <h6>Sweet Shop</h6>
                                                 </li>
                                              </ul>
                                           </div>
                                       </div> -->

                                       <div class="item">
                                           <div class="store-box">
                                              <h3>Hypermarket & Departmental Store</h3>
                                              <ul>
                                                 <li>
                                                    <figure>
                                                       <a href="convenience-store.php"><img src="assets/images/img310.webp" alt="Convenience Store"></a>
                                                    </figure>
                                                    <h6>Convenience Store</h6>
                                                 </li>
                                                 <li>
                                                    <figure>
                                                       <a href="departmental-store.php"><img src="assets/images/img311.webp" alt="Departmental Store"></a>
                                                    </figure>
                                                    <h6>Departmental Store</h6>
                                                 </li>
                                                 <li>
                                                    <figure>
                                                       <a href="hypermarket.php"><img src="assets/images/img312.webp" alt="Hypermarket"></a>
                                                    </figure>
                                                    <h6>Hypermarket</h6>
                                                 </li>
                                              </ul>
                                           </div>
                                       </div>

                                       <div class="item">
                                           <div class="store-box">
                                              <h3>Lifestyle</h3>
                                              <ul>
                                                 <li>
                                                    <figure>
                                                       <a href="cosmetic-store.php"><img src="assets/images/img313.webp" alt="Cosmetic Store"></a>
                                                    </figure>
                                                    <h6>Cosmetic Store</h6>
                                                 </li>
                                                 <li>
                                                    <figure>
                                                       <a href="home-decor-furniture.php"><img src="assets/images/img314.webp" alt="Home Decor"></a>
                                                    </figure>
                                                    <h6>Home Decor & Furniture</h6>
                                                 </li>
                                                 <li>
                                                    <figure>
                                                       <a href="imitation-jewellery.php"><img src="assets/images/img315.webp" alt="Imitation Jewellery"></a>
                                                    </figure>
                                                    <h6>Imitation Jewellery</h6>
                                                 </li>
                                              </ul>
                                           </div>
                                       </div>

                                       <div class="item">
                                           <div class="store-box">
                                              <h3>Supermarket & Groceries</h3>
                                              <ul>
                                                 <li>
                                                    <figure>
                                                       <a href="fruits-vegetable-shop.php"><img src="assets/images/img316.webp" alt="Fruits & Vegetables"></a>
                                                    </figure>
                                                    <h6>Fruits & Vegetable</h6>
                                                 </li>
                                                 <li>
                                                    <figure>
                                                       <a href="grocery-store.php"><img src="assets/images/img317.webp" alt="Grocery Store"></a>
                                                    </figure>
                                                    <h6>Grocery Store</h6>
                                                 </li>
                                                 <li>
                                                    <figure>
                                                       <a href="kirana-store.php"><img src="assets/images/img318.webp" alt="Kirana Store"></a>
                                                    </figure>
                                                    <h6>Kirana Store</h6>
                                                 </li>
                                                 <li>
                                                    <figure>
                                                       <a href="minimart.php"><img src="assets/images/img319.webp" alt="Minimart"></a>
                                                    </figure>
                                                    <h6>Minimart</h6>
                                                 </li>
                                                 <li>
                                                    <figure>
                                                       <a href="supermarket.php"><img src="assets/images/img320.webp" alt="Supermarket"></a>
                                                    </figure>
                                                    <h6>Supermarket</h6>
                                                 </li>
                                              </ul>
                                           </div>
                                       </div>

                                       <div class="item">
                                           <div class="store-box">
                                              <h3>Specialized in Retail</h3>
                                              <ul>
      <!--                                            <li>
                                                    <figure>
                                                       <a href="#"><img src="assets/images/img321.webp" alt="Auto Spare Part Shop"></a>
                                                    </figure>
                                                    <h6>Auto Spare Part Shop</h6>
                                                 </li> -->
                                                 <li>
                                                    <figure>
                                                       <a href="gift-shop.php"><img src="assets/images/img322.webp" alt="Gift Shop"></a>
                                                    </figure>
                                                    <h6>Gift Shop</h6>
                                                 </li>
                                                 <li>
                                                    <figure>
                                                       <a href="hardware-store.php"><img src="assets/images/img323.webp" alt="Hardware Store"></a>
                                                    </figure>
                                                    <h6>Hardware Store</h6>
                                                 </li>
                                                 <li>
                                                    <figure>
                                                       <a href="liquor-store.php"><img src="assets/images/img324.webp" alt="Liquor Store"></a>
                                                    </figure>
                                                    <h6>Liquor Store</h6>
                                                 </li>
                                                 <li>
                                                    <figure>
                                                       <a href="pet-shop.php"><img src="assets/images/img325.webp" alt="Pet Shop"></a>
                                                    </figure>
                                                    <h6>Pet Shop</h6>
                                                 </li>
                                                 <li>
                                                    <figure>
                                                       <a href="shopping-mall.php"><img src="assets/images/img326.webp" alt="Shopping Mall"></a>
                                                    </figure>
                                                    <h6>Shopping Mall</h6>
                                                 </li>
                                                 <li>
                                                    <figure>
                                                       <a href="sports-shop.php"><img src="assets/images/img327.webp" alt="Sports Shop"></a>
                                                    </figure>
                                                    <h6>Sports Shop</h6>
                                                 </li>
                                                 <li>
                                                    <figure>
                                                       <a href="toy-store.php"><img src="assets/images/img328.webp" alt="Toy Store"></a>
                                                    </figure>
                                                    <h6>Toy Store</h6>
                                                 </li>
                                              </ul>
                                           </div>
                                       </div>
                                   </div>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="solving-business-img">
                                    <figure>
                                       <img src="assets/images/retail-store.webp" alt="Wholesale Solution">
                                    </figure>
                                </div>
                            </div>
                       </div>
                    </div>

                    <!-- Manufacturing Tab -->
                    <div class="tab-pane fade" id="nav-distribution" role="tabpanel" aria-labelledby="nav-distribution-tab">
                      <div class="row align-items-center bg-shape">
                            <div class="col-md-7">
                                <div class="innovative-silder">
                                    <div class="owl-carousel store-silder owl-theme">
                                       <div class="item">
                                           <div class="store-box">
                                              <h3>Manufacturing</h3>
                                              <ul>
                                                 <li>
                                                    <figure>
                                                       <a href="consumer-goods.php"><img src="assets/images/store1.webp" alt="FMCG"></a>
                                                    </figure>
                                                    <h6>FMCG</h6>
                                                 </li>
<!--                                                  <li>
                                                    <figure>
                                                       <a href="#"><img src="assets/images/store2.webp" alt="Food & Beverages"></a>
                                                    </figure>
                                                    <h6>Food & Beverages</h6>
                                                 </li> -->
                                                 <li>
                                                    <figure>
                                                       <a href="footwear-store.php"><img src="assets/images/store3.webp" alt="Footwear"></a>
                                                    </figure>
                                                    <h6>Footwear</h6>
                                                 </li>
                                                 <li>
                                                    <figure>
                                                       <a href="garments.php"><img src="assets/images/store4.webp" alt="Garment & Apparel"></a>
                                                    </figure>
                                                    <h6>Garment & Apparel</h6>
                                                 </li>
                                                 <li>
                                                    <figure>
                                                       <a href="industrial-products.php"><img src="assets/images/store5.webp" alt="Steel"></a>
                                                    </figure>
                                                    <h6>Steel</h6>
                                                 </li>
                                                 <li>
                                                    <figure>
                                                       <a href="textile.php"><img src="assets/images/store6.webp" alt="Textile"></a>
                                                    </figure>
                                                    <h6>Textile</h6>
                                                 </li>
                                              </ul>
                                           </div>
                                       </div>
                                   </div>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="solving-business-img">
                                    <figure>
                                       <img src="assets/images/Manufacturing-image.webp" alt="Distribution Solution">
                                    </figure>
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

   <!-- Solving business section end here -->

   <section class="on-page-main">
      <div class="container">
          <div class="row">
              <div class="col-md-12 col-lg-4">
                  <div class="side-nav-main">
                      <div class="section-title">
                          <h4>Smart Solutions for Smarter Stores</h4> 
                          <p>Turn every retail visit into an engaging and seamless experience. Take your business to the next level with Digify Soft Solutions and its powerful suite of smart-store features.</p>
                      </div>
                      
                      <div class="side-nav " id="sidenav">
                          <a class="side-nav-link active" href="#1">POS <i class="fa fa-chevron-right"></i></a>
                          <a class="side-nav-link" href="#2">Inventory <i class="fa fa-chevron-right"></i></a>
                          <a class="side-nav-link" href="#3">CRM <i class="fa fa-chevron-right"></i></a>
                          <a class="side-nav-link" href="#4">E - Commerce <i class="fa fa-chevron-right"></i></a>
                          <a class="side-nav-link" href="#5">MPOS <i class="fa fa-chevron-right"></i></a>
                      </div>
                      <div class="cta cta-hide d-none d-lg-block">
                       <a  href="contact-us.php" class="btn">Try Digify Soft Now!</a>
						   <!---  <a   href="contact-us.php"> <i class="btn"></i> Try Digify Soft Now!</a>---->
                      </div>
                  </div>
                  
              </div>
              <div class="col-md-12 col-lg-8">
                  <div class="page-section hero" id="1">
                      <div class="row">
                          <div class="col-12">
                              <div class="row">
                                  <div class="col-12 col-md-6">
                                      <div class="top-content animate-on-scroll animated fadeInUp animate__delay-4s" style="height: 530px;">
                                          <h3>Image Based POS</h3>
                                          <p>Displays product images on screen, making it easy for cashiers to identify products while invoicing.</p>
                                          <div class="content-image"> 
                                              <img loading="lazy" class="img-fluid" src="assets/images/01.webp" alt="image base pos">
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-12 col-md-6">
                                      <div class="top-content animate-on-scroll animated fadeInUp animate__delay-4s" style="height: 530px;">
                                          <h3>Online/Offline POS</h3>
                                          <p> Offline GST billing ensures smooth transactions even without internet, automatically syncing data when reconnected.</p>
                                          <div class="content-image"> 
                                              <img loading="lazy" class="img-fluid" src="assets/images/02.webp" alt="Online / Offline POS">
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-12">
                              <div class="bottom-content animate-on-scroll animated fadeInUp animate__delay-4s">
                                  <div class="content">
                                      <h3>Digi-Pay</h3>
                                      <p> In OCR banner pls put this text - Scan your bill and let AI do the work—zero typing, zero mistakes, only smarter workflows.</p> 
                                  </div>
                                  <img loading="lazy" class="img-fluid" src="assets/images/03.webp" alt="V-Pay">
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="page-section" id="2">
                      <div class="row">
                          <div class="col-12">
                              <div class="row">
                                  <div class="col-12 col-md-6">
                                      <div class="top-content animate-on-scroll animated fadeInUp animate__delay-4s" style="height: 530px;">
                                          <h3>OCR for Supplier Bills</h3>
                                          <p>Automatically extracts product details from invoices, eliminating manual stock entry.</p>
                                          <div class="content-image"> 
                                              <img loading="lazy" class="img-fluid" src="assets/images/o4.webp" alt="OCR">
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-12 col-md-6">
                                      <div class="top-content animate-on-scroll animated fadeInUp animate__delay-4s" style="height: 530px;">
                                          <h3>Material Management</h3>
                                          <p>Remove expired or damaged products and maintain accurate stock updates.</p>
                                          <div class="content-image"> 
                                              <img loading="lazy" class="img-fluid" src="assets/images/o5.webp" alt="Material Management">
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-12">
                              <div class="bottom-content animate-on-scroll align-items-start animated fadeInUp animate__delay-4s">
                                  <div class="content">
                                      <h3>Centralized Multilocation Management</h3>
                                      <p>Real-time inventory management across multiple store locations.</p> 
                                  </div>
                                  <img loading="lazy" class="img-fluid" src="assets/images/o6.webp" alt="Centralized Multilocation Management">
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="page-section" id="3">
                      <div class="row">
                          <div class="col-12">
                              <div class="row">
                                  <div class="col-12 col-md-6">
                                      <div class="top-content animate-on-scroll animated fadeInUp animate__delay-4s" style="height: 530px;">
                                          <h3>Discount &amp; Offer</h3>
                                          <p>Easily apply promo codes, offers, and deals during billing.</p>
                                          <div class="content-image"> 
                                              <img loading="lazy" class="img-fluid" src="assets/images/o7.webp" alt="Discount &amp; Offer">
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-12 col-md-6">
                                      <div class="top-content animate-on-scroll animated fadeInUp animate__delay-4s" style="height: 530px;">
                                          <h3>Membership &amp; Loyalty</h3>
                                          <p>Reward customers with points redeemable for payments and manage loyalty campaigns efficiently.</p>
                                          <div class="content-image"> 
                                              <img loading="lazy" class="img-fluid" src="assets/images/08.webp" alt="Membership &amp; Loyalty">
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-12">
                              <div class="bottom-content animate-on-scroll animated fadeInUp animate__delay-4s">
                                  <div class="content">
                                      <h3>Whatsapp Integration</h3>
                                      <p>Update customers with orders, invoices, offers, and discounts seamlessly.</p> 
                                  </div>
                                  <img loading="lazy" class="img-fluid" src="assets/images/o9.webp">
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="page-section" id="4">
                      <div class="row">
                          <div class="col-12">
                              <div class="row">
                                  <div class="col-12 col-md-6">
                                      <div class="top-content animate-on-scroll animated fadeInUp animate__delay-4s" style="height: 530px;">
                                          <h3>ERP Integration</h3>
                                          <p>Align business operations, improve efficiency, and ensure real-time data synchronization.</p>
                                          <div class="content-image"> 
                                              <img loading="lazy" class="img-fluid" src="assets/images/o10.webp" alt="ERP Integration">
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-12 col-md-6">
                                      <div class="top-content animate-on-scroll animated fadeInUp animate__delay-4s" style="height: 530px;">
                                          <h3>Centralized Inventory</h3>
                                          <p>Manage all store inventories from a single dashboard.</p>
                                          <div class="content-image"> 
                                              <img loading="lazy" class="img-fluid" src="assets/images/o11.webp" alt="Centralized Inventory">
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-12">
                              <div class="bottom-content animate-on-scroll animated fadeInUp animate__delay-4s">
                                  <div class="content">
                                      <h3>B2B Commerce</h3>
                                      <p>Allow B2B clients to place orders and view pricing based on customer type.</p> 
                                  </div>
                                  <img loading="lazy" class="img-fluid" src="assets/images/o12.webp">
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="page-section hide-cta" id="5">
                      <div class="row">
                          <div class="col-12">
                              <div class="row">
                                  <div class="col-12 col-md-6">
                                      <div class="top-content animate-on-scroll animated fadeInUp animate__delay-4s" style="height: 530px;">
                                          <h3>Smart Retail </h3>
                                          <p>Mobile POS solution for billing, inventory, and retail management.</p>
                                          <div class="content-image"> 
                                              <img loading="lazy" class="img-fluid" src="assets/images/o13.webp" alt="Smart Retail App">
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-12 col-md-6">
                                      <div class="top-content animate-on-scroll animated fadeInUp animate__delay-4s" style="height: 530px;">
                                          <h3>Digify Soft Checkout</h3>
                                          <p>Customers can scan products, add to cart, and pay securely for faster checkout.</p>
                                          <div class="content-image"> 
                                              <img loading="lazy" class="img-fluid" src="assets/images/o14.webp" alt="V-Checkout">
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
<!--                           <div class="col-12">
                              <div class="bottom-content animate-on-scroll animated fadeInUp animate__delay-4s">
                                  <div class="content">
                                      <h3>V-Order</h3>
                                      <p>Streamline salesperson order creation and management during on-site visits.</p> 
                                  </div>
                                  <img loading="lazy" class="img-fluid" src="assets/images/o15.webp" alt="V-Order">
                              </div>
                          </div> -->
                      </div>
                  </div>
              </div>
              <div class="col-12 d-lg-none">
                  <div class="cta text-center">
                      <a href="india-avail-free-demo" class="btn btn-primary ">Try VasyERP Now!</a>
                  </div>
              </div>
          </div>
      </div>
  </section>

  <!--  services section start here -->
  <section class="services-sec">
       <div class="container">
           <div class="row">
               <div class="col-md-12">
                   <div class="heading-wrap">
                      <h2>Our<span> Services</span> </h2>
                      <p>Empowering your business with smart, reliable, and customized digital solutions.</p>
                   </div>
                   <div class="row">
                       <div class="col-md-4 col-sm-6">
                           <div class="services-box">
                               <div class="ser-icon">
                                 <img src="assets/images/sol1.png" alt="Digital Marketing & SEO ">
                               </div>
                               <h3>Digital Marketing & SEO </h3>
                               <p>Boost online visibility using meta‑tag optimization, social media engagement, reputation monitoring, content strategy, data analytics, and ongoing campaigns tailored to convert.</p>
                               <a href="digital-marketing-services.php">Read More <i style="transform: rotateZ(45deg);" class="fa-solid fa-arrow-up"></i></a>
                           </div>
                       </div>
                       <div class="col-md-4 col-sm-6">
                           <div class="services-box">
                               <div class="ser-icon">
                                 <img src="assets/images/sol2.png" alt="Web Development">
                               </div>
                               <h3>Web Development</h3>
                               <p>Creating responsive, results‑oriented websites that convert traffic into customers. Custom builds for your brand identity, CMS integrations like WordPress, e‑commerce platforms, and ongoing support to maintain performance.</p>
                               <a href="e-commerce-website-development.php">Read More <i style="transform: rotateZ(45deg);" class="fa-solid fa-arrow-up"></i></a>
                           </div>
                       </div>
                       <div class="col-md-4 col-sm-6">
                           <div class="services-box">
                               <div class="ser-icon">
                                 <img src="assets/images/sol3.png" alt="Mobile App Development">
                               </div>
                               <h3> Mobile App Development</h3>
                               <p>Building native (iOS/Android), hybrid, or React Native/Flutter apps that are user‑friendly and scalable for business growth. Expertise in grocery, education, e‑commerce, fitness, and more.</p>
                               <a href="android-application.php">Read More <i style="transform: rotateZ(45deg);" class="fa-solid fa-arrow-up"></i></a>
                           </div>
                       </div>
                       <div class="col-md-4 col-sm-6">
                           <div class="services-box">
                               <div class="ser-icon">
                                 <img src="assets/images/sol4.png" alt="Web Design">
                               </div>
                               <h3>Web Design</h3>
                               <p>Designing visually engaging site layouts focused on UX, clean navigation, SEO optimization, and mobile responsiveness—from mockups to final deployment.</p>
                               <a href="modern-responsive-website-design.php">Read More <i style="transform: rotateZ(45deg);" class="fa-solid fa-arrow-up"></i></a>
                           </div>
                       </div>
                       <div class="col-md-4 col-sm-6">
                           <div class="services-box">
                               <div class="ser-icon">
                                 <img src="assets/images/sol5.png" alt="Social Media Marketing">
                               </div>
                               <h3>Social Media Marketing</h3>
                               <p>Digify Soft Solutions leads Jaipur with effective social media strategies that increase your brand’s visibility, engagement, and sales across major platforms.</p>
                               <a href="social-media-optimization.php">Read More <i style="transform: rotateZ(45deg);" class="fa-solid fa-arrow-up"></i></a>
                           </div>
                       </div>
                       <div class="col-md-4 col-sm-6">
                           <div class="services-box">
                               <div class="ser-icon">
                                 <img src="assets/images/sol6.png" alt="CRM Development">
                               </div>
                               <h3>CRM Development</h3>
                               <p>Customized Software Development, Product Development, Web Application Development..</p>
                               <a href="custom-crm-solutions.php">Read More <i style="transform: rotateZ(45deg);" class="fa-solid fa-arrow-up"></i></a>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
  </section>
  <!-- services section end here -->

   <section class="pricing-link-main dark-bg">
       <div class="container position-relative">
           <div class="row align-items-center">
               <div class="col-12 col-lg-6">
                   <div class="pricing-content">
                       <h2>Get Started with Smarter Business Management – At the Right Price</h2>
                       <p>Smart, simple, and affordable – everything your business needs to grow faster and run smoother.</p>
                       <a href="contact-us.php" class="btn secondary-cta text-capitalize">Contact us</a>
                   </div>
               </div>
               <div class="offset-0 col-12 offset-md-1 col-md-10 offset-lg-0 col-lg-6">
                   <div class="pricing-img-wrapper">
                       <img loading="lazy" src="assets/images/pricing-cta.png" class="img-fluid" alt="unbeatable pricing">
                   </div>
               </div>
           </div>
       </div>
   </section>

   <section class="partners-sec">
      <div class="container">
         <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-12">
               <div class="heading-wrap">
                <h2>Our Integration<span> Partners</span> </h2>
                <p>Digify Soft Solutions integrates effortlessly with popular e-commerce, communication, payment, business, shipping, and compliance platforms, giving your business seamless operations.</p>
               </div>
            </div>
         </div>
      </div>
      <div id="integrations" class="integration-main">
         <div class="container">
            <div class="row">
               <div class="col-12 col-lg-5">
                  <!-- Desktop -->
                  <ul class="nav d-none d-lg-block" id="tabMenu">
                     <li class="nav-item tab-1">
                        <a class="nav-links nav-link " data-id="1">E-commerce Platforms</a>
                        <div class="payment-arrow payment-left" data-id="1">
                           <img loading="lazy" src="assets/images/e-commerce-left.webp" alt="e-commerce-left">
                        </div>
                     </li>
                     <li class="nav-item tab-2"><a class="nav-links nav-link " data-id="2">Communication &amp; Marketing</a></li>
                     <li class="nav-item tab-3">
                        <a class="nav-links nav-link active" data-id="3">Payment Solutions</a>
                        <div class="payment-arrow payment-left active" data-id="3">
                           <img loading="lazy" src="assets/images/payment-left.webp" alt="payment-left">
                        </div>
                     </li>
                     <li class="nav-item tab-4"><a class="nav-links nav-link active" data-id="4">Business Applications</a></li>
                     <li class="nav-item tab-5">
                        <a class="nav-links nav-link" data-id="5">Shipping &amp; Logistics</a>
                        <div class="payment-arrow payment-left" data-id="5">
                           <img loading="lazy" src="assets/images/shipping-left.webp" alt="shipping-left">
                        </div>
                     </li>
                     <li class="nav-item tab-6"><a class="nav-links nav-link" data-id="6">E-Invoicing &amp; Compliance</a></li>
                  </ul>
                  <!-- Mobile -->
                  <ul class="nav d-lg-none" id="tabMenu1">
                     <li class="nav-item tab-5">
                        <a class="nav-links nav-link" data-id="5">E-Invoicing &amp; Compliance</a>
                        <div class="payment-arrow payment-left" data-id="5">
                           <img loading="lazy" src="assets/images/shipping-left.webp" alt="shipping-left">
                        </div>
                     </li>
                     <li class="nav-item tab-6">
                        <a class="nav-links nav-link" data-id="6">Shipping &amp; Logistics</a>
                        <div class="payment-arrow payment-left" data-id="6">
                           <img loading="lazy" src="assets/images/integration-mobile-top.png" alt="integration-mobile-top">
                        </div>
                     </li>
                     <li class="nav-item tab-1"><a class="nav-links nav-link " data-id="1">E-commerce Platforms</a></li>
                     <li class="nav-item tab-2">
                        <a class="nav-links nav-link " data-id="2">Communication &amp; Marketing</a>
                        <div class="payment-arrow payment-left" data-id="2">
                           <img loading="lazy" src="assets/images/integration-mobile-top.png" alt="integration-mobile-top">
                        </div>
                     </li>
                     <li class="nav-item tab-3">
                        <a class="nav-links nav-link active" data-id="3">Payment Solutions</a>
                     </li>
                     <li class="nav-item tab-4">
                        <a class="nav-links nav-link active" data-id="4">Business Applications</a>
                        <div class="payment-arrow payment-left active" data-id="4">
                           <img loading="lazy" src="assets/images/integration-mobile-top-small.png" alt="integration-mobile-top-small">
                        </div>
                     </li>
                  </ul>
               </div>
               <div class="col-12 col-lg-2 position-relative">
                  <div class="integration-logo-main">
                     <img loading="lazy" src="assets/images/integration-logo.png" alt="integration logo">
                  </div>
               </div>
               <div class="col-12 offset-lg-1 col-lg-4  offset-xxl-0 col-xxl-5">
                  <!-- Desktop -->
                  <div class="tab-content d-none d-lg-flex">
                     <div data-content-id="content6" class="tab-pane-integration fade show">
                        <div class="tab">
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/shiprocket.webp" title="Shiprocket" alt="Shiprocket" class="img-fluid">
                              </div>
                           </div>
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/eShipZ.webp" title="eShipZ" alt="eShipZ" class="img-fluid">
                              </div>
                           </div>
                        </div>
                        <div class="payment-right">
                           <img loading="lazy" src="assets/images/shipping-right.webp" alt="icon">
                        </div>
                     </div>
                     <div data-content-id="content1" class="tab-pane-integration fade show">
                        <div class="tab">
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/shopify.webp" title="Shopify" alt="Shopify" class="img-fluid">
                              </div>
                           </div>
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/woocommerce.webp" title="WooCommerce" alt="Woocommerce" class="img-fluid">
                              </div>
                           </div>
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/pngwing.webp" title="pngwing" alt="pngwing" class="img-fluid">
                              </div>
                           </div>
                        </div>
                        <div class="payment-right">
                           <img loading="lazy" src="assets/images/e-commerce-right.webp" alt="icon">
                        </div>
                     </div>
                     <div data-content-id="content3" class="tab-pane-integration fade show active">
                        <div class="tab">
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/paytm.webp" title="Paytm" alt="Paytm" class="img-fluid">
                              </div>
                           </div>
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/razorpay.webp" title="Razorpay" alt="Razorpay" class="img-fluid">
                              </div>
                           </div>
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/phonepe.webp" title="Phonepe" alt="Phonepe" class="img-fluid">
                              </div>
                           </div>
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/pinelabs.webp" title="Pinelabs" alt="Pinelabs" class="img-fluid">
                              </div>
                           </div>
                        </div>
                        <div class="payment-right">
                           <img loading="lazy" src="assets/images/payment-right.webp" alt="icon">
                        </div>
                     </div>
                     <div data-content-id="content4" class="tab-pane-integration fade show active">
                        <div class="tab">
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/StoreHippo.webp" title="Store Hippo" alt="Store Hippo" class="img-fluid">
                              </div>
                           </div>
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/Unicommerce.webp" title="Unicommerce" alt="Unicommerce" class="img-fluid">
                              </div>
                           </div>
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/tally.webp" title="tally" alt="tally" class="img-fluid">
                              </div>
                           </div>
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/pngegg.webp" title="sap" alt="sap" class="img-fluid">
                              </div>
                           </div>
                        </div>
                     </div>
                     <div data-content-id="content2" class="tab-pane-integration fade show">
                        <div class="tab">
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/interakt.webp" title="Interakt" alt="Interakt" class="img-fluid">
                              </div>
                           </div>
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/msg91.webp" title="Msg91" alt="Msg91" class="img-fluid">
                              </div>
                           </div>
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/twilio.webp" title="Twilio" alt="Twilio" class="img-fluid">
                              </div>
                           </div>
                        </div>
                     </div>
                     <div data-content-id="content5" class="tab-pane-integration fade show">
                        <div class="tab">
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/e-invoice.webp" title="E-Invoice" alt="E-Invoice" class="img-fluid">
                              </div>
                           </div>
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/eway-bill.webp" title="E-way Bill" alt="E-way Bill" class="img-fluid">
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- Mobile -->
                  <div class="tab-content d-lg-none">
                     <div data-content-id="content3" class="tab-pane-integration fade show active">
                        <div class="tab">
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/paytm.webp" title="Paytm" alt="Paytm" class="img-fluid">
                              </div>
                           </div>
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/razorpay.webp" title="Razorpay" alt="Razorpay" class="img-fluid">
                              </div>
                           </div>
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/phonepe.webp" title="Phonepe" alt="Phonepe" class="img-fluid">
                              </div>
                           </div>
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/pinelabs.webp" title="Pinelabs" alt="Pinelabs" class="img-fluid">
                              </div>
                           </div>
                        </div>
                     </div>
                     <div data-content-id="content4" class="tab-pane-integration fade show active">
                        <div class="tab">
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/StoreHippo.webp" title="Store Hippo" alt="Store Hippo" class="img-fluid">
                              </div>
                           </div>
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/Unicommerce.webp" title="Unicommerce" alt="Unicommerce" class="img-fluid">
                              </div>
                           </div>
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/tally.webp" title="tally" alt="tally" class="img-fluid">
                              </div>
                           </div>
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/pngegg.webp" title="sap" alt="sap" class="img-fluid">
                              </div>
                           </div>
                        </div>
                        <div class="payment-right">
                           <img loading="lazy" src="assets/images/integration-mobile-top-small.png" alt="integration-mobile-top-small">
                        </div>
                     </div>
                     <div data-content-id="content1" class="tab-pane-integration fade show">
                        <div class="tab">
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/shopify.webp" title="Shopify" alt="Shopify" class="img-fluid">
                              </div>
                           </div>
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/woocommerce.webp" title="WooCommerce" alt="Woocommerce" class="img-fluid">
                              </div>
                           </div>
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/pngwing.webp" title="pngwing" alt="pngwing" class="img-fluid">
                              </div>
                           </div>
                        </div>
                        <div class="payment-right">
                           <img loading="lazy" src="assets/images/e-commerce-right.webp" alt="e-commerce-right">
                        </div>
                     </div>
                     <div data-content-id="content2" class="tab-pane-integration fade show">
                        <div class="tab">
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/interakt.webp" title="Interakt" alt="Interakt" class="img-fluid">
                              </div>
                           </div>
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/msg91.webp" title="Msg91" alt="Msg91" class="img-fluid">
                              </div>
                           </div>
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/twilio.webp" title="Twilio" alt="Twilio" class="img-fluid">
                              </div>
                           </div>
                        </div>
                        <div class="payment-right">
                           <img loading="lazy" src="assets/images/integration-mobile-top-long.png" alt="integration-mobile-top-long">
                        </div>
                     </div>
                     <div data-content-id="content5" class="tab-pane-integration fade show">
                        <div class="tab">
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/e-invoice.webp" title="E-Invoice" alt="E-Invoice" class="img-fluid">
                              </div>
                           </div>
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/eway-bill.webp" title="E-way Bill" alt="E-way Bill" class="img-fluid">
                              </div>
                           </div>
                        </div>
                     </div>
                     <div data-content-id="content6" class="tab-pane-integration fade show">
                        <div class="tab">
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/shiprocket.webp" title="Shiprocket" alt="Shiprocket" class="img-fluid">
                              </div>
                           </div>
                           <div class="integration-logo-wrapper">
                              <div class="integration-logo">
                                 <img loading="lazy" src="assets/images/eShipZ.webp" title="eShipZ" alt="eShipZ" class="img-fluid">
                              </div>
                           </div>
                        </div>
                        <div class="payment-right">
                           <img loading="lazy" src="assets/images/integration-mobile-top-longest.png" alt="icon">
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
  
  <!--  proiduct section start here -->
<!--   <section class="services-sec products-sec">
       <div class="container">
           <div class="row">
               <div class="col-md-12">
                   <div class="heading-wrap">
                      <h2>Our<span>  Products</span> </h2>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                   </div>
                   <div class="row">
                       <div class="col-md-4">
                           <div class="services-box">
                               <div class="pro-img">
                                 <a href="#"><img src="assets/images/pro1.png" alt="Digital Marketing & SEO "></a>
                               </div>
                               <h3> <a href="#">ERP System</a> </h3>
                               <p>All-in-one software to manage your business. From billing to HR, handle everything in one place with our ERP system</p>
                           </div>
                       </div>
                       <div class="col-md-4">
                           <div class="services-box">
                               <div class="pro-img">
                                 <a href="#"><img src="assets/images/pro2.png" alt="Web Development"></a>
                               </div>
                               <h3><a href="#"> POS System </a></h3>
                               <p>Easy billing and fast checkout for your shop. Make sales quicker and manage stock with our Point-of-Sale software.</p>
                           </div>
                       </div>
                       <div class="col-md-4">
                           <div class="services-box">
                               <div class="pro-img">
                                 <a href="#"><img src="assets/images/pro3.png" alt="Mobile App Development"></a>
                               </div>
                               <h3><a href="#"> Accounting Software </a></h3>
                               <p>Keep track of your money and reports. Our accounting tool helps you manage income, expenses, and taxes easily.</p>
                           </div>
                       </div>
                       <div class="col-md-4">
                           <div class="services-box">
                               <div class="pro-img">
                                 <a href="#"><img src="assets/images/pro4.png" alt="Web Design"></a>
                               </div>
                               <h3><a href="#">Omni Channel E-Commerce </a></h3>
                               <p>Sell online and in-store – all together. Run your shop on websites, apps, and physical stores with one simple tool.</p>
                           </div>
                       </div>
                       <div class="col-md-4">
                           <div class="services-box">
                               <div class="pro-img">
                                 <a href="#"><img src="assets/images/pro5.png" alt="Social Media Marketing"></a>
                               </div>
                               <h3><a href="#">Smart Retail Solutions</a></h3>
                               <p>Make your shop smart and modern. Use technology to improve shopping, track stock, and grow your business.</p>
                           </div>
                       </div>
                       <div class="col-md-4">
                           <div class="services-box">
                               <div class="pro-img">
                                 <a href="#"><img src="assets/images/pro6.png" alt="CRM Development"></a>
                               </div>
                               <h3><a href="#">Lead Management CRM</a></h3>
                               <p>Turn leads into happy customers. Track your leads, send follow-ups, and close more sales.</p>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
  </section> -->
  <!--  proiduct section end here -->

    <!--  clients section start here -->
   <section class="clients-sec">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="clients-box">
                        <div class="owl-carousel clients-silder owl-theme">
                            <div class="item">
                               <div class="clients-box">
                                   <figure>
                                       <img src="assets/images/c1.jpg">
                                   </figure>
                               </div>
                            </div>
                            <div class="item">
                               <div class="clients-box">
                                   <figure>
                                       <img src="assets/images/c2.png">
                                   </figure>
                               </div>
                            </div>
                            <div class="item">
                               <div class="clients-box">
                                   <figure>
                                       <img src="assets/images/c3.png">
                                   </figure>
                               </div>
                            </div>
                            <div class="item">
                               <div class="clients-box">
                                   <figure>
                                       <img src="assets/images/c4.jpg">
                                   </figure>
                               </div>
                            </div>
                            <div class="item">
                               <div class="clients-box">
                                   <figure>
                                       <img src="assets/images/c5.jpg">
                                   </figure>
                               </div>
                            </div>
                            <div class="item">
                               <div class="clients-box">
                                   <figure>
                                       <img src="assets/images/c6.jpg">
                                   </figure>
                               </div>
                            </div>
                            <div class="item">
                               <div class="clients-box">
                                   <figure>
                                       <img src="assets/images/c7.jpg">
                                   </figure>
                               </div>
                            </div>
                            <div class="item">
                               <div class="clients-box">
                                   <figure>
                                       <img src="assets/images/c8.jpg">
                                   </figure>
                               </div>
                            </div>
                            <div class="item">
                               <div class="clients-box">
                                   <figure>
                                       <img src="assets/images/c9.jpg">
                                   </figure>
                               </div>
                            </div>
                            <div class="item">
                               <div class="clients-box">
                                   <figure>
                                       <img src="assets/images/c10.jpg">
                                   </figure>
                               </div>
                            </div>
                            <div class="item">
                               <div class="clients-box">
                                   <figure>
                                       <img src="assets/images/c11.jpg">
                                   </figure>
                               </div>
                            </div>
                            <div class="item">
                               <div class="clients-box">
                                   <figure>
                                       <img src="assets/images/c12.jpg">
                                   </figure>
                               </div>
                            </div>
                            <div class="item">
                               <div class="clients-box">
                                   <figure>
                                       <img src="assets/images/c13.jpg">
                                   </figure>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </section>
   <!-- brand section end here -->

  <!-- Success stories  -->
<!--   <section class="success-stories-sec">
      <div class="container">
          <div class="row">
              <div class="col-md-12">
                  <div class="heading-wrap">
                      <h2>Success<span>  stories</span> </h2>
                   </div>
                  <div class="row">
                     <div class="col-md-12">
                         <div class="success-stories-box">
                             <div class="owl-carousel owl-theme" id="stories">
                                  <div class="item">
                                    <div class="stories-box">
                                       <figure> <img src="assets/images/s1.webp"> </figure>
                                        <div class="stories">
                                           <div class="stories-content">
                                              <h3>Daga Brothers</h3>
                                              <h5>Amey Chandak</h5>
                                           </div>
                                        </div>
                                        <div class="youtube-box">
                                          <figure> <img src="assets/images/youtube.png"> </figure>
                                        </div>
                                     </div>
                                  </div>
                                  <div class="item">
                                    <div class="stories-box">
                                       <figure> <img src="assets/images/s2.webp"> </figure>
                                        <div class="stories">
                                           <div class="stories-content">
                                              <h3>Daga Brothers</h3>
                                              <h5>Amey Chandak</h5>
                                           </div>
                                        </div>
                                        <div class="youtube-box">
                                          <figure> <img src="assets/images/youtube.png"> </figure>
                                        </div>
                                     </div>
                                  </div>
                                  <div class="item">
                                    <div class="stories-box">
                                       <figure> <img src="assets/images/s3.webp"> </figure>
                                        <div class="stories">
                                           <div class="stories-content">
                                              <h3>Daga Brothers</h3>
                                              <h5>Amey Chandak</h5>
                                           </div>
                                        </div>
                                        <div class="youtube-box">
                                          <figure> <img src="assets/images/youtube.png"> </figure>
                                        </div>
                                     </div>
                                  </div>
                                  <div class="item">
                                    <div class="stories-box">
                                       <figure> <img src="assets/images/s4.webp"> </figure>
                                        <div class="stories">
                                           <div class="stories-content">
                                              <h3>Daga Brothers</h3>
                                              <h5>Amey Chandak</h5>
                                           </div>
                                        </div>
                                        <div class="youtube-box">
                                          <figure> <img src="assets/images/youtube.png"> </figure>
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
  </section> -->
  <!-- Success stories  -->


  <section class="success-stories-sec">
      <div class="container">
          <div class="row">
              <div class="col-md-12">
                  <div class="heading-wrap">
                      <h2>Innovative solutions for customers <span>  Testimonials</span> </h2>
                   </div>
                  <div class="row">
                     <div class="col-md-12">
                         <div class="success-stories-box">
                               <div id="stories" class="owl-carousel owl-theme">

                                  <div class="testimonial-card">
                                    <div class="testimonial-stars">★★★★★</div>
                                    <p class="testimonial-quote">With Digify Soft ERP, we've streamlined our entire textile production cycle—from order to export. Real-time tracking and automated billing have cut manual work drastically. It’s truly transformed how we manage operations and client deliveries.</p>
                                    <p class="testimonial-author">Akshat Mittal</p>
                                    <p class="testimonial-role">PP International </p>
                                  </div>

                                  <div class="testimonial-card">
                                    <div class="testimonial-stars">★★★★★</div>
                                    <p class="testimonial-quote">Digify Soft ERP has simplified our handloom trading and export operations. Order management, stock tracking, and billing are all handled seamlessly in one system. We’ve reduced paperwork, improved accuracy, and sped up deliveries.</p>
                                    <p class="testimonial-author">Raman Aneja</p>
                                    <p class="testimonial-role">Great Eastern Exports</p>
                                  </div>

                                  <div class="testimonial-card">
                                    <div class="testimonial-stars">★★★★★</div>
                                    <p class="testimonial-quote">Digify Soft ERP has made managing our snacks vending business effortless. From tracking machine sales to managing stock refills, everything is centralized and accurate. It’s boosted our efficiency and helped maximize profits.</p>
                                    <p class="testimonial-author">SNaxsmart </p>
                                  </div>

                                  <div class="testimonial-card">
                                    <div class="testimonial-stars">★★★★★</div>
                                    <p class="testimonial-quote">Digify Soft ERP has transformed our event management process at ISKCON. The QR-based solution made registrations, attendance, and donations completely hassle-free. It’s brought transparency, speed, and efficiency to every event.</p>
                                    <p class="testimonial-author">Iskcon </p>
                                  </div>

                                  <div class="testimonial-card">
                                    <div class="testimonial-stars">★★★★★</div>
                                    <p class="testimonial-quote">Digify Soft ERP has revolutionized our attendance and payroll management at Park Inn Hotels. With Face, Finger, and Card scanning devices linked to a secure cloud system, tracking staff hours is effortless and accurate. It’s improved efficiency, reduced errors, and saved valuable administrative time.</p>
                                    <p class="testimonial-author">Parkinn </p>
                                  </div>

                                  <div class="testimonial-card">
                                    <div class="testimonial-stars">★★★★★</div>
                                    <p class="testimonial-quote">Digify Soft ERP has streamlined our entire smartphone refurbishment and sales process at Zobox. From quality checks to inventory updates and customer billing, everything runs smoothly in one integrated system. It’s increased productivity, ensured accuracy, and boosted sales performance.</p>
                                    <p class="testimonial-author">Zobox </p>
                                  </div>

                                  <div class="testimonial-card">
                                    <div class="testimonial-stars">★★★★★</div>
                                    <p class="testimonial-quote">Digify Soft ERP has streamlined our entire refurbishment and sales process at Zobox. From device grading to inventory and billing, every step is now automated and traceable. It’s enhanced accuracy, reduced turnaround time, and boosted</p>
                                    <p class="testimonial-author">Evoke </p>
                                  </div>

                                  <div class="testimonial-card">
                                    <div class="testimonial-stars">★★★★★</div>
                                    <p class="testimonial-quote">Digify Soft ERP has made our operations at Shree Sundhe far more organized and efficient. Purchase orders, invoicing, dispatches, and vendor management are now seamlessly integrated. It’s helped us save time, cut manual errors, and improve coordination across departments.</p>
                                    <p class="testimonial-author">Shree Sundhe </p>
                                  </div>

                                  <div class="testimonial-card">
                                    <div class="testimonial-stars">★★★★★</div>
                                    <p class="testimonial-quote">Digify Soft ERP has simplified our supermarket operations at Armada Bazaar. Inventory tracking, billing, and supplier management are all handled in one smart system. It’s improved accuracy, reduced wastage, and boosted customer satisfaction.</p>
                                    <p class="testimonial-author">Armada Bazar </p>
                                  </div>



                                </div>
                         </div>
                     </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  <style>
.success-stories-sec {
  padding: 60px 0;
  background-color: #fff;
}

.success-stories-box {
  position: relative;
}

#stories .owl-stage-outer {
  overflow: hidden !important; /* hide scrollbar outside carousel */
}

#stories .owl-item {
  height: auto !important;
}

.testimonial-card {
  background: #fff;
  border-radius: 15px;
  padding: 25px 20px;
  text-align: center;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  height: auto !important;
  overflow: visible !important;
  min-height: 250px;
}

.testimonial-stars {
  color: #ffb400;
  font-size: 22px;
  margin-bottom: 15px;
}

.testimonial-quote {
  font-style: italic;
  color: #555;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 20px;
  height: auto !important;
  overflow: visible !important;
  max-height: none !important;
  white-space: normal !important;
}

.testimonial-author {
  font-weight: 700;
  color: #000;
  margin-bottom: 5px;
}

.testimonial-role {
  color: #777;
  font-size: 14px;
}

/* ✅ Owl fix - stretch height naturally */
.owl-carousel .owl-stage {
  display: flex;
  align-items: stretch;
}

.owl-carousel .owl-item > div {
  height: 100%;
}

  </style>
<script>
$(document).ready(function(){
  $("#stories").owlCarousel({
    items: 3,
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: true,
    nav: false,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 }
    }
  });
});
</script>

<?php include 'footer.php'; ?>

