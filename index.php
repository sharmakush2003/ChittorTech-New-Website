<?php 
    include 'fetch_meta.php';
    $pageMeta = getPageMeta('index');
    $pageTitle = $pageMeta['page_title'] ?? 'index';
    $pageDescription = $pageMeta['page_description'] ?? '';
    include("top.php");
    include 'header.php'; 
?>

<div class="premium-home-body">

    <!-- 1. HERO BANNER -->
    <section class="premium-hero">
        <div class="hero-glow-blob"></div>
        <div class="container">
            <div class="row align-items-center g-5">
                <div class="col-lg-6 text-center text-lg-start">
                    <span class="hero-badge gsap-hero-item">
                        <i class="fas fa-fire me-1"></i> No. 1 B2B Retail ERP Suite
                    </span>
                    <h1 class="hero-title mt-4 gsap-hero-item">
                        Smarter Billing.<br><span>Zero Mistakes.</span>
                    </h1>
                    <p class="hero-subtitle mt-3 mx-auto mx-lg-0 gsap-hero-item">
                        Jaipur & Delhi's most trusted AI-powered POS, real-time inventory tracking, and smart ERP suite designed for fast-growing businesses.
                    </p>
                    <div class="hero-ctas mt-4 justify-content-center justify-content-lg-start gsap-hero-item">
                        <a href="contact-us.php" class="btn btn-hero-primary">
                            <i class="fas fa-calendar-alt me-2"></i> Book Free Demo
                        </a>
                        <a href="#solutions" class="btn btn-hero-secondary">
                            Explore Solutions <i class="fas fa-arrow-down ms-2"></i>
                        </a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <!-- Hero Dashboard Mockup -->
                    <div class="hero-mockup-wrapper mt-5 mt-lg-0 gsap-hero-dashboard">
                        <div class="tilt-wrapper">
                            <div class="glass-dashboard-card inner-tilt">
                                <div class="dashboard-header d-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-center">
                                    <span class="dot-indicator green"></span>
                                    <span class="dashboard-title ms-2">Digify AI Analytics</span>
                                </div>
                                <span class="live-badge">LIVE</span>
                            </div>
                            <div class="dashboard-body mt-4">
                                <div class="row g-3">
                                    <div class="col-6">
                                        <div class="metric-card">
                                            <span class="lbl"><i class="fas fa-arrow-trend-up text-success me-1"></i> Sales Today</span>
                                            <span class="val">₹48,250</span>
                                            <span class="metric-change text-success">+18.4%</span>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="metric-card">
                                            <span class="lbl"><i class="fas fa-receipt text-primary me-1"></i> Invoices</span>
                                            <span class="val">182 Bills</span>
                                            <span class="metric-change text-primary">Active</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Glowing Mini SVG Analytics Line Chart (With mathematically smooth Cubic Bezier Curve) -->
                                <div class="dashboard-chart mt-4">
                                    <svg viewBox="0 0 300 80" class="chart-svg">
                                        <defs>
                                            <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stop-color="#e06930" stop-opacity="0.35"/>
                                                <stop offset="100%" stop-color="#e06930" stop-opacity="0"/>
                                            </linearGradient>
                                            <linearGradient id="stroke-gradient" x1="0" y1="0" x2="1" y2="0">
                                                <stop offset="0%" stop-color="#e06930"/>
                                                <stop offset="100%" stop-color="#fbc145"/>
                                            </linearGradient>
                                        </defs>
                                        <path d="M 0 55 C 30 55, 50 65, 80 50 C 110 35, 130 48, 160 35 C 190 22, 210 52, 240 40 C 270 28, 285 12, 300 10 L 300 80 L 0 80 Z" fill="url(#chart-glow)"></path>
                                        <path d="M 0 55 C 30 55, 50 65, 80 50 C 110 35, 130 48, 160 35 C 190 22, 210 52, 240 40 C 270 28, 285 12, 300 10" fill="none" stroke="url(#stroke-gradient)" stroke-width="4" stroke-linecap="round"></path>
                                    </svg>
                                </div>
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>

    <!-- 2. INFINITE BRAND MARQUEE -->
    <section class="brand-marquee-sec py-4">
        <div class="marquee-container">
            <div class="marquee-track">
                <img src="assets/images/c1.jpg" alt="Client 1">
                <img src="assets/images/c2.png" alt="Client 2">
                <img src="assets/images/c3.png" alt="Client 3">
                <img src="assets/images/c4.jpg" alt="Client 4">
                <img src="assets/images/c5.jpg" alt="Client 5">
                <img src="assets/images/c6.jpg" alt="Client 6">
                <img src="assets/images/c7.jpg" alt="Client 7">
                <img src="assets/images/c8.jpg" alt="Client 8">
                <!-- Loop duplicates for seamless scrolling -->
                <img src="assets/images/c1.jpg" alt="Client 1">
                <img src="assets/images/c2.png" alt="Client 2">
                <img src="assets/images/c3.png" alt="Client 3">
                <img src="assets/images/c4.jpg" alt="Client 4">
                <img src="assets/images/c5.jpg" alt="Client 5">
                <img src="assets/images/c6.jpg" alt="Client 6">
                <img src="assets/images/c7.jpg" alt="Client 7">
                <img src="assets/images/c8.jpg" alt="Client 8">
            </div>
        </div>
    </section>

    <!-- 3. SMART SOLUTIONS GRID -->
    <section id="solutions" class="solutions-grid-sec py-5">
        <div class="container text-center py-3">
            <h2 class="section-title">Smart <span>Solutions</span></h2>
            <p class="section-desc">Tailor-made cloud automation for Jaipur, Delhi NCR, and growing businesses worldwide.</p>
            
            <div class="row g-4 mt-4 justify-content-center">
                <div class="col-lg-2 col-md-4 col-6">
                    <a href="pos.php" class="category-card card-gradient-orange">
                        <div class="category-icon"><i class="fa-solid fa-cash-register"></i></div>
                        <h3>Smart POS</h3>
                        <p>3-Sec Billing</p>
                    </a>
                </div>
                <div class="col-lg-2 col-md-4 col-6">
                    <a href="erp.php" class="category-card card-gradient-blue">
                        <div class="category-icon"><i class="fa-solid fa-network-wired"></i></div>
                        <h3>AI ERP</h3>
                        <p>B2B Automations</p>
                    </a>
                </div>
                <div class="col-lg-2 col-md-4 col-6">
                    <a href="accounting.php" class="category-card card-gradient-green">
                        <div class="category-icon"><i class="fa-solid fa-file-invoice-dollar"></i></div>
                        <h3>Accounting</h3>
                        <p>GST & Returns</p>
                    </a>
                </div>
                <div class="col-lg-2 col-md-4 col-6">
                    <a href="inventory.php" class="category-card card-gradient-purple">
                        <div class="category-icon"><i class="fa-solid fa-boxes-stacked"></i></div>
                        <h3>Inventory</h3>
                        <p>Real-Time Stock</p>
                    </a>
                </div>
                <div class="col-lg-2 col-md-4 col-6">
                    <a href="crm.php" class="category-card card-gradient-cyan">
                        <div class="category-icon"><i class="fa-solid fa-users"></i></div>
                        <h3>CRM Tool</h3>
                        <p>Loyalty Program</p>
                    </a>
                </div>
                <div class="col-lg-2 col-md-4 col-6">
                    <a href="omnichannel.php" class="category-card card-gradient-red">
                        <div class="category-icon"><i class="fa-solid fa-arrows-spin"></i></div>
                        <h3>Omnichannel</h3>
                        <p>Store Syncing</p>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- DIGIFY AI ERP ADVANTAGES -->
    <section class="ai-erp-advantages-sec py-5" style="background-color:#fff;">
        <div class="container py-3">
            <div class="text-center mb-5">
                <h2 class="section-title">DIGIFY AI <span>ERP</span></h2>
                <p class="section-desc mt-2">Smart ERP & POS Billing Software for Manufacturing & Retail Businesses.</p>
            </div>
            <div class="row g-4">
                <!-- Card 1 -->
                <div class="col-lg-4 col-md-6">
                    <div class="category-card" style="text-align:left; padding: 30px; border-radius: 10px; height:100%; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #eee;">
                        <div class="icon-wrap mb-3" style="font-size: 40px; color: #e06930;">
                            <i class="fa-solid fa-network-wired"></i>
                        </div>
                        <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 15px; color: #333;">AI-Integrated ERP & POS Framework</h3>
                        <p style="font-size: 14px; color: #666; line-height: 1.6;">DIGIFY AI ERP is designed as a unified system where artificial intelligence connects POS billing, inventory, manufacturing, and accounting operations. AI ensures smooth coordination between modules and reduces dependency on manual processes.</p>
                    </div>
                </div>
                <!-- Card 2 -->
                <div class="col-lg-4 col-md-6">
                    <div class="category-card" style="text-align:left; padding: 30px; border-radius: 10px; height:100%; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #eee;">
                        <div class="icon-wrap mb-3" style="font-size: 40px; color: #3b82f6;">
                            <i class="fa-solid fa-chart-line"></i>
                        </div>
                        <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 15px; color: #333;">AI-Driven Real-Time Data Flow</h3>
                        <p style="font-size: 14px; color: #666; line-height: 1.6;">The platform uses AI to synchronize data instantly across departments and locations. Sales, stock, production, and financial data remain continuously updated, enabling accurate visibility and timely decision-making.</p>
                    </div>
                </div>
                <!-- Card 3 -->
                <div class="col-lg-4 col-md-6">
                    <div class="category-card" style="text-align:left; padding: 30px; border-radius: 10px; height:100%; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #eee;">
                        <div class="icon-wrap mb-3" style="font-size: 40px; color: #10b981;">
                            <i class="fa-solid fa-cash-register"></i>
                        </div>
                        <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 15px; color: #333;">Intelligent POS Billing Operations</h3>
                        <p style="font-size: 14px; color: #666; line-height: 1.6;">AI enhances POS billing by improving transaction speed, reducing errors, and supporting dynamic pricing, discounts, and GST compliance. The system adapts to transaction patterns and ensures consistent billing accuracy.</p>
                    </div>
                </div>
                <!-- Card 4 -->
                <div class="col-lg-4 col-md-6">
                    <div class="category-card" style="text-align:left; padding: 30px; border-radius: 10px; height:100%; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #eee;">
                        <div class="icon-wrap mb-3" style="font-size: 40px; color: #fbc145;">
                            <i class="fa-solid fa-boxes-stacked"></i>
                        </div>
                        <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 15px; color: #333;">Smart Inventory Optimization</h3>
                        <p style="font-size: 14px; color: #666; line-height: 1.6;">Artificial intelligence analyzes stock movement, consumption patterns, and demand trends. This enables optimized inventory levels, early identification of slow-moving items, and reduced stock shortages or overstocking.</p>
                    </div>
                </div>
                <!-- Card 5 -->
                <div class="col-lg-4 col-md-6">
                    <div class="category-card" style="text-align:left; padding: 30px; border-radius: 10px; height:100%; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #eee;">
                        <div class="icon-wrap mb-3" style="font-size: 40px; color: #8b5cf6;">
                            <i class="fa-solid fa-industry"></i>
                        </div>
                        <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 15px; color: #333;">AI-Enabled Manufacturing Control</h3>
                        <p style="font-size: 14px; color: #666; line-height: 1.6;">In manufacturing environments, AI supports production planning, material usage analysis, and process monitoring. It helps identify inefficiencies, control wastage, and improve overall production accuracy.</p>
                    </div>
                </div>
                <!-- Card 6 -->
                <div class="col-lg-4 col-md-6">
                    <div class="category-card" style="text-align:left; padding: 30px; border-radius: 10px; height:100%; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #eee;">
                        <div class="icon-wrap mb-3" style="font-size: 40px; color: #06b6d4;">
                            <i class="fa-solid fa-chart-pie"></i>
                        </div>
                        <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 15px; color: #333;">Predictive Business Intelligence</h3>
                        <p style="font-size: 14px; color: #666; line-height: 1.6;">DIGIFY AI ERP uses AI algorithms to transform operational data into predictive insights. Sales forecasting, demand prediction, and profitability analysis assist businesses in strategic planning and risk reduction.</p>
                    </div>
                </div>
                <!-- Card 7 -->
                <div class="col-lg-4 col-md-6">
                    <div class="category-card" style="text-align:left; padding: 30px; border-radius: 10px; height:100%; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #eee;">
                        <div class="icon-wrap mb-3" style="font-size: 40px; color: #ef4444;">
                            <i class="fa-solid fa-file-invoice-dollar"></i>
                        </div>
                        <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 15px; color: #333;">Automated Accounting & Compliance</h3>
                        <p style="font-size: 14px; color: #666; line-height: 1.6;">AI automates accounting entries and continuously checks data for compliance accuracy. GST calculations, tax reporting, and financial statements are generated with reduced human intervention and higher reliability.</p>
                    </div>
                </div>
                <!-- Card 8 -->
                <div class="col-lg-4 col-md-6">
                    <div class="category-card" style="text-align:left; padding: 30px; border-radius: 10px; height:100%; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #eee;">
                        <div class="icon-wrap mb-3" style="font-size: 40px; color: #4576ba;">
                            <i class="fa-solid fa-map-location-dot"></i>
                        </div>
                        <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 15px; color: #333;">Centralized Multi-Location Management</h3>
                        <p style="font-size: 14px; color: #666; line-height: 1.6;">AI helps manage multiple stores, warehouses, and manufacturing units from a single system. Data consistency is maintained across locations while supporting location-specific operations.</p>
                    </div>
                </div>
                <!-- Card 9 -->
                <div class="col-lg-4 col-md-6">
                    <div class="category-card" style="text-align:left; padding: 30px; border-radius: 10px; height:100%; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #eee;">
                        <div class="icon-wrap mb-3" style="font-size: 40px; color: #291fbc;">
                            <i class="fa-solid fa-cloud"></i>
                        </div>
                        <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 15px; color: #333;">Adaptive Cloud & Offline Architecture</h3>
                        <p style="font-size: 14px; color: #666; line-height: 1.6;">The system intelligently manages online and offline operations. AI controls data storage, syncing, and recovery to ensure uninterrupted workflow and data integrity.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- PREMIUM SERVICES RESTORED -->

  <!--  services section start here -->
  <section class="services-sec">
       <div class="container">
           <div class="row">
               <div class="col-md-12">
                   <div class="heading-wrap">
                      <span class="text-primary fw-bold mb-2 d-block">What We Offer</span>
                      <h2>Our Premium<span> Services</span> </h2>
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


    <!-- 4. CORE AUTOMATIONS -->
    <section class="automations-sec py-5">
        <div class="container py-3">
            <h2 class="section-title text-center">Core <span>Automations</span></h2>
            <p class="section-desc text-center">Powering your daily retail and wholesale operations with advanced AI integrations.</p>
            
            <div class="swipe-container mt-4">
                <div class="swipe-track">
                    
                    <!-- Card 1 -->
                    <div class="swipe-item">
                        <div class="swipe-card">
                            <span class="card-badge ai">AI-Powered</span>
                            <h3>Smart Image POS</h3>
                            <p>AI automatically recognizes products on-screen for swift billing. Speed up your cash counters and prevent long checkout queues.</p>
                            <a href="pos.php" class="card-btn">Learn More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>

                    <!-- Card 2 -->
                    <div class="swipe-item">
                        <div class="swipe-card">
                            <span class="card-badge ocr">OCR Scanning</span>
                            <h3>AI Bill Scanner</h3>
                            <p>Instantly upload supplier bills. Our OCR tool reads line items automatically and registers stock without manual typing.</p>
                            <a href="inventory.php" class="card-btn">Learn More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>

                    <!-- Card 3 -->
                    <div class="swipe-item">
                        <div class="swipe-card">
                            <span class="card-badge cloud">Cloud Synced</span>
                            <h3>Multi-Store Sync</h3>
                            <p>Control purchases, stock levels, GST tax invoices, and retail dispatches across all your branch offices in real-time.</p>
                            <a href="smart-retail.php" class="card-btn">Learn More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>

                    <!-- Duplicates for seamless marquee loop on all screens -->
                    <div class="swipe-item">
                        <div class="swipe-card">
                            <span class="card-badge ai">AI-Powered</span>
                            <h3>Smart Image POS</h3>
                            <p>AI automatically recognizes products on-screen for swift billing. Speed up your cash counters and prevent long checkout queues.</p>
                            <a href="pos.php" class="card-btn">Learn More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="swipe-item">
                        <div class="swipe-card">
                            <span class="card-badge ocr">OCR Scanning</span>
                            <h3>AI Bill Scanner</h3>
                            <p>Instantly upload supplier bills. Our OCR tool reads line items automatically and registers stock without manual typing.</p>
                            <a href="inventory.php" class="card-btn">Learn More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="swipe-item">
                        <div class="swipe-card">
                            <span class="card-badge cloud">Cloud Synced</span>
                            <h3>Multi-Store Sync</h3>
                            <p>Control purchases, stock levels, GST tax invoices, and retail dispatches across all your branch offices in real-time.</p>
                            <a href="smart-retail.php" class="card-btn">Learn More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <!-- 5. LIVE STATISTICS COUNTERS -->
    <section class="stats-sec py-5">
        <div class="container py-2">
            <div class="row g-4">
                <div class="col-lg-3 col-6">
                    <div class="stat-card">
                        <h3>100+</h3>
                        <p>Happy Retailers</p>
                    </div>
                </div>
                <div class="col-lg-3 col-6">
                    <div class="stat-card">
                        <h3>10M+</h3>
                        <p>Bills Generated</p>
                    </div>
                </div>
                <div class="col-lg-3 col-6">
                    <div class="stat-card">
                        <h3>99.9%</h3>
                        <p>Server Uptime</p>
                    </div>
                </div>
                <div class="col-lg-3 col-6">
                    <div class="stat-card">
                        <h3>24/7</h3>
                        <p>Expert Support</p>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <!-- SOLVING BUSINESS RESTORED -->

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


    <!-- 6. INTEGRATION PARTNERS -->
    <section class="integrations-sec py-5">
        <div class="container py-3">
            <div class="row justify-content-center text-center mb-5">
                <div class="col-lg-8">
                    <h2 class="section-title">Integration <span>Partners</span></h2>
                    <p class="section-desc">We connect smoothly with all leading e-commerce, logistics, and billing platforms to streamline your operations.</p>
                </div>
            </div>
            
            <!-- Desktop Tabs and Grid (Visible on large screens) -->
            <div class="d-none d-lg-block">
                <div class="desktop-integration-wrapper">
                    <div class="row g-4">
                        <div class="col-lg-4">
                            <div class="integration-tabs" id="desktopIntNav">
                                <button class="int-pill-btn active" onclick="switchIntTab('payment')"><i class="fa-solid fa-credit-card me-2"></i> Payment Solutions</button>
                                <button class="int-pill-btn" onclick="switchIntTab('shipping')"><i class="fa-solid fa-truck-fast me-2"></i> Shipping & Logistics</button>
                                <button class="int-pill-btn" onclick="switchIntTab('ecommerce')"><i class="fa-solid fa-cart-shopping me-2"></i> E-commerce Platforms</button>
                                <button class="int-pill-btn" onclick="switchIntTab('business')"><i class="fa-solid fa-briefcase me-2"></i> Business Apps</button>
                                <button class="int-pill-btn" onclick="switchIntTab('communication')"><i class="fa-solid fa-comments me-2"></i> Marketing & Chats</button>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="integration-content-wrapper" id="desktopIntGrid">
                                <!-- Payment Group -->
                                <div class="int-group active" id="int-payment">
                                    <div class="int-logo-grid">
                                        <div class="int-logo-box"><img src="assets/images/paytm.webp" alt="Paytm"></div>
                                        <div class="int-logo-box"><img src="assets/images/razorpay.webp" alt="Razorpay"></div>
                                        <div class="int-logo-box"><img src="assets/images/phonepe.webp" alt="PhonePe"></div>
                                        <div class="int-logo-box"><img src="assets/images/pinelabs.webp" alt="Pine Labs"></div>
                                        <div class="int-logo-box"><img src="assets/images/tally.webp" alt="Tally"></div>
                                    </div>
                                </div>
                                
                                <!-- Shipping Group -->
                                <div class="int-group" id="int-shipping">
                                    <div class="int-logo-grid">
                                        <div class="int-logo-box"><img src="assets/images/shiprocket.webp" alt="Shiprocket"></div>
                                        <div class="int-logo-box"><img src="assets/images/e-invoice.webp" alt="E-Invoice"></div>
                                        <div class="int-logo-box"><img src="assets/images/eway-bill.webp" alt="E-Way Bill"></div>
                                    </div>
                                </div>
                                
                                <!-- E-commerce Group -->
                                <div class="int-group" id="int-ecommerce">
                                    <div class="int-logo-grid">
                                        <div class="int-logo-box"><img src="assets/images/shopify.webp" alt="Shopify"></div>
                                        <div class="int-logo-box"><img src="assets/images/woocommerce.webp" alt="WooCommerce"></div>
                                    </div>
                                </div>
                                
                                <!-- Business Group -->
                                <div class="int-group" id="int-business">
                                    <div class="int-logo-grid">
                                        <div class="int-logo-box"><img src="assets/images/paytm.webp" alt="Paytm"></div>
                                        <div class="int-logo-box"><img src="assets/images/razorpay.webp" alt="Razorpay"></div>
                                        <div class="int-logo-box"><img src="assets/images/phonepe.webp" alt="PhonePe"></div>
                                        <div class="int-logo-box"><img src="assets/images/pinelabs.webp" alt="Pine Labs"></div>
                                        <div class="int-logo-box"><img src="assets/images/tally.webp" alt="Tally"></div>
                                    </div>
                                </div>
                                
                                <!-- Communication Group -->
                                <div class="int-group" id="int-communication">
                                    <div class="int-logo-grid">
                                        <div class="int-logo-box"><img src="assets/images/interakt.webp" alt="Interakt"></div>
                                        <div class="int-logo-box"><img src="assets/images/msg91.webp" alt="MSG91"></div>
                                        <div class="int-logo-box"><img src="assets/images/twilio.webp" alt="Twilio"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Mobile Scrolling Marquee (Visible on mobile/tablet screens) -->
            <div class="d-lg-none">
                <div class="brand-marquee-sec py-2 border-0 bg-transparent">
                    <div class="marquee-container">
                        <div class="mobile-int-marquee-track">
                            <img src="assets/images/paytm.webp" alt="Paytm">
                            <img src="assets/images/razorpay.webp" alt="Razorpay">
                            <img src="assets/images/phonepe.webp" alt="PhonePe">
                            <img src="assets/images/pinelabs.webp" alt="Pine Labs">
                            <img src="assets/images/tally.webp" alt="Tally">
                            <img src="assets/images/shiprocket.webp" alt="Shiprocket">
                            <img src="assets/images/e-invoice.webp" alt="E-Invoice">
                            <img src="assets/images/eway-bill.webp" alt="E-Way Bill">
                            <img src="assets/images/shopify.webp" alt="Shopify">
                            <img src="assets/images/woocommerce.webp" alt="WooCommerce">
                            <img src="assets/images/interakt.webp" alt="Interakt">
                            <img src="assets/images/msg91.webp" alt="MSG91">
                            <!-- Duplicates -->
                            <img src="assets/images/paytm.webp" alt="Paytm">
                            <img src="assets/images/razorpay.webp" alt="Razorpay">
                            <img src="assets/images/phonepe.webp" alt="PhonePe">
                            <img src="assets/images/pinelabs.webp" alt="Pine Labs">
                            <img src="assets/images/tally.webp" alt="Tally">
                            <img src="assets/images/shiprocket.webp" alt="Shiprocket">
                            <img src="assets/images/e-invoice.webp" alt="E-Invoice">
                            <img src="assets/images/eway-bill.webp" alt="E-Way Bill">
                            <img src="assets/images/shopify.webp" alt="Shopify">
                            <img src="assets/images/woocommerce.webp" alt="WooCommerce">
                            <img src="assets/images/interakt.webp" alt="Interakt">
                            <img src="assets/images/msg91.webp" alt="MSG91">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 7. CLIENT TESTIMONIALS -->
    <section class="testimonials-sec py-5">
        <div class="container py-3">
            <div class="row justify-content-center text-center mb-5">
                <div class="col-lg-8">
                    <h2 class="section-title">Client <span>Success</span></h2>
                    <p class="section-desc">Hear directly from the business owners who scaled their production and retail stores with us.</p>
                </div>
            </div>
            
            <div class="row g-4 d-none d-lg-flex">
                <div class="col-lg-4">
                    <div class="testimonial-card-new">
                        <div class="stars-rating mb-3">★★★★★</div>
                        <p class="testimonial-quote-new">"With Digify Soft ERP, we've streamlined our entire textile production cycle—from order to export. Real-time tracking and automated billing have cut manual work drastically. It's truly transformed how we manage operations."</p>
                        <div class="author-info-new mt-4">
                            <span class="name d-block">Akshat Mittal</span>
                            <span class="role text-muted">PP International</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="testimonial-card-new">
                        <div class="stars-rating mb-3">★★★★★</div>
                        <p class="testimonial-quote-new">"Digify Soft ERP has simplified our handloom trading and export operations. Order management, stock tracking, and billing are all handled seamlessly in one system. We've reduced paperwork and improved accuracy."</p>
                        <div class="author-info-new mt-4">
                            <span class="name d-block">Raman Aneja</span>
                            <span class="role text-muted">Great Eastern Exports</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="testimonial-card-new">
                        <div class="stars-rating mb-3">★★★★★</div>
                        <p class="testimonial-quote-new">"Digify Soft ERP has made managing our snacks vending business effortless. From tracking machine sales to managing stock refills, everything is centralized, accurate, and incredibly helpful."</p>
                        <div class="author-info-new mt-4">
                            <span class="name d-block">Snaxsmart</span>
                            <span class="role text-muted">Vending Solutions</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile view testimonial touch list -->
            <div class="d-lg-none">
                <div class="testimonial-card-new">
                    <div class="stars-rating mb-3">★★★★★</div>
                    <p class="testimonial-quote-new">"With Digify Soft ERP, we've streamlined our entire textile production cycle—from order to export. Real-time tracking and automated billing have cut manual work drastically."</p>
                    <div class="author-info-new mt-4">
                        <span class="name d-block">Akshat Mittal</span>
                        <span class="role text-muted">PP International</span>
                    </div>
                </div>
                <div class="testimonial-card-new mt-3">
                    <div class="stars-rating mb-3">★★★★★</div>
                    <p class="testimonial-quote-new">"Digify Soft ERP has simplified our handloom trading and export operations. We've reduced paperwork, improved accuracy, and sped up deliveries."</p>
                    <div class="author-info-new mt-4">
                        <span class="name d-block">Raman Aneja</span>
                        <span class="role text-muted">Great Eastern Exports</span>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <!-- 9. ACTIVE ON SOCIALS -->
    <section class="socials-sec py-5">
        <div class="container text-center py-2">
            <h2 class="section-title">Active on <span>Socials</span></h2>
            <p class="section-desc">Follow @digifysoft for tech updates, product features, and business growth tips.</p>
            
            <div class="row g-3 mt-4 justify-content-center">
                <div class="col-md-4 col-6">
                    <div class="insta-post-new">
                        <img src="assets/images/social_post1.png" alt="AI POS Mockup">
                        <div class="insta-overlay-new"><i class="fab fa-instagram"></i></div>
                    </div>
                </div>
                <div class="col-md-4 col-6">
                    <div class="insta-post-new">
                        <img src="assets/images/social_post2.png" alt="AI Inventory Mockup">
                        <div class="insta-overlay-new"><i class="fab fa-instagram"></i></div>
                    </div>
                </div>
                <div class="col-md-4 col-6 d-none d-md-block">
                    <div class="insta-post-new">
                        <img src="assets/images/social_post3.png" alt="B2B ERP Dashboard">
                        <div class="insta-overlay-new"><i class="fab fa-instagram"></i></div>
                    </div>
                </div>
            </div>
            
            <div class="mt-5">
                <a href="https://instagram.com/digifysoft" target="_blank" class="btn-insta-premium">
                    <i class="fab fa-instagram"></i> Follow @digifysoft
                </a>
            </div>
        </div>
    </section>

</div>

<!-- Interactive Switching Script for Integration Partners -->
<script>
function switchIntTab(tabName) {
    // 1. Remove active class from all tab buttons
    const buttons = document.querySelectorAll('#desktopIntNav .int-pill-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // 2. Add active class to clicked button
    const clickedBtn = Array.from(buttons).find(btn => btn.getAttribute('onclick').includes(tabName));
    if (clickedBtn) {
        clickedBtn.classList.add('active');
    }

    // 3. Hide all logo grids
    const groups = document.querySelectorAll('#desktopIntGrid .int-group');
    groups.forEach(group => group.classList.remove('active'));

    // 4. Show target logo grid
    const targetGroup = document.getElementById('int-' + tabName);
    if (targetGroup) {
        targetGroup.classList.add('active');
    }
}
</script>

<?php include 'footer.php'; ?>
