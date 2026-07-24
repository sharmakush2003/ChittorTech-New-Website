<?php
  include 'db.php';
  include 'fetch_meta.php';

  $pageMeta = getPageMeta('convenience-store');
  $pageTitle = $pageMeta['page_title'] ?? 'AI for Business - Smart Solutions by Digify Soft Solutions';
  $pageDescription = $pageMeta['page_description'] ?? 'Transform your business with Digify Soft AI. Specialized AI solutions for Manufacturing, Retail, and Services.';
  $pageKeywords = $pageMeta['page_keywords'] ?? 'AI for Business, Manufacturing AI, Retail AI, Smart Automation';

  include 'top.php';
  include 'header.php';
?>

<!-- Original-Theme AI Hero Section -->
<section class="inner-banner-sec py-5" style="background: #fff; border-bottom: 1px solid #eee;">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-7">
                <div class="inner-banner-content" data-aos="fade-right">
                    <h1 class="fw-bold mb-4" style="color: #333; font-size: 42px;">AI for Business – <br><span style="color: #291fbc;">Digify Soft Solutions</span></h1>
                    <p class="mb-5" style="color: #555; font-size: 18px; line-height: 1.6;">Transforming Manufacturing, Retail & Service Industries with Intelligent Automation, Predictive Analytics, and Smart Workflows.</p>
                    <div class="d-flex gap-3 flex-wrap">
                        <a href="contact-us.php" class="btn px-4 py-2 text-white" style="background-image: linear-gradient(to right, #e06930, #fbc145); border: none; font-weight: 600; border-radius: 4px;">Schedule AI Demo</a>
                        <a href="#solutions" class="btn px-4 py-2" style="border: 2px solid #291fbc; color: #291fbc; font-weight: 600; border-radius: 4px;">Explore Solutions</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 mt-5 mt-lg-0 text-center">
                <figure data-aos="zoom-in">
                    <img src="assets/images/ai/ai_business_hero_banner_1778499912723.png" class="img-fluid rounded-3 shadow-lg" style="max-height: 400px; border: 5px solid #fff;" alt="AI Business Banner">
                </figure>
            </div>
        </div>
    </div>
</section>

<!-- Industry Selection Section -->
<section id="solutions" class="py-5" style="background: #f3f6fa;">
    <div class="container py-lg-5">
        <div class="heading-wrap text-center mb-5" data-aos="fade-up">
            <h2 class="fw-bold">AI-Powered Solutions Across <span>Industries</span></h2>
            <p class="mx-auto mt-3" style="max-width: 700px; color: #666;">Digify AI helps manufacturing, retail, and service-driven businesses solve operational challenges using intelligent automation and analytics.</p>
        </div>

        <div class="row g-4 mt-4">
            <div class="col-lg-4" data-aos="fade-right">
                <div class="industry-tabs-nav">
                    <button class="industry-tab-btn active" data-target="manufacturing">
                        <div class="d-flex align-items-center gap-3">
                            <i class="fas fa-industry"></i>
                            <span>Manufacturing</span>
                        </div>
                    </button>
                    <button class="industry-tab-btn" data-target="retail">
                        <div class="d-flex align-items-center gap-3">
                            <i class="fas fa-shopping-bag"></i>
                            <span>Retail Business</span>
                        </div>
                    </button>
                    <button class="industry-tab-btn" data-target="service">
                        <div class="d-flex align-items-center gap-3">
                            <i class="fas fa-tools"></i>
                            <span>Field Service</span>
                        </div>
                    </button>
                    <button class="industry-tab-btn" data-target="analytics">
                        <div class="d-flex align-items-center gap-3">
                            <i class="fas fa-chart-pie"></i>
                            <span>Analytics & BI</span>
                        </div>
                    </button>
                </div>
            </div>

            <div class="col-lg-8">
                <div id="industry-content" data-aos="fade-left">
                    <!-- Default: Manufacturing Content -->
                    <div class="industry-pane active" id="manufacturing">
                        <div class="p-4 bg-white rounded-3 shadow-sm" style="border: 1px solid #e2e8f0;">
                            <div class="row mb-4">
                                <div class="col-md-7">
                                    <h3 class="fw-bold mb-3" style="color: #291fbc;">🏭 AI for Manufacturing</h3>
                                    <p class="text-muted small mb-4">Manufacturers face constant operational challenges. AI solves these intelligently through automation and data-driven insights.</p>
                                    <ul class="list-unstyled">
                                        <li class="mb-2"><i class="fas fa-check text-primary me-2"></i> Production Planning AI</li>
                                        <li class="mb-2"><i class="fas fa-check text-primary me-2"></i> Vision-based Quality Inspection</li>
                                        <li class="mb-2"><i class="fas fa-check text-primary me-2"></i> Predictive Machine Maintenance</li>
                                    </ul>
                                </div>
                                <div class="col-md-5">
                                    <img src="assets/images/ai/ai_manufacturing_master_1778499939880.png" class="img-fluid rounded shadow-sm" alt="Manufacturing AI">
                                </div>
                            </div>
                            <div class="gallery-grid mt-4">
                                <h6 class="fw-bold mb-3">AI in Action</h6>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <img src="assets/images/ai/ai_manufacturing_quality_1778500012267.png" class="img-fluid rounded gallery-img shadow-sm" alt="Quality AI">
                                        <p class="text-center mt-2 small text-muted">Vision Quality Inspection</p>
                                    </div>
                                    <div class="col-md-6">
                                        <img src="assets/images/ai/ai_manufacturing_maintenance_1778500026185.png" class="img-fluid rounded gallery-img shadow-sm" alt="Maintenance AI">
                                        <p class="text-center mt-2 small text-muted">Predictive Maintenance</p>
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

<!-- Benefits Section -->
<section class="py-5 bg-white">
    <div class="container py-lg-5">
        <div class="row align-items-center">
            <div class="col-lg-5" data-aos="fade-right">
                <h2 class="fw-bold mb-4">Why Businesses Need <br><span style="color: #291fbc;">AI Now?</span></h2>
                <p class="text-muted mb-4">To grow and scale efficiently in today's competitive environment, AI is no longer optional — it is essential.</p>
                <div class="expertise-wrap">
                   <ul class="list-unstyled">
                      <li class="mb-3"><i class="fas fa-check-circle me-2" style="color: #291fbc;"></i> Faster decision-making with real-time insights</li>
                      <li class="mb-3"><i class="fas fa-check-circle me-2" style="color: #291fbc;"></i> Lower operational and service costs</li>
                      <li class="mb-3"><i class="fas fa-check-circle me-2" style="color: #291fbc;"></i> Reduced human errors through automation</li>
                   </ul>
                </div>
                <a href="demo.php" class="btn mt-4 text-white shadow" style="background-image: linear-gradient(to right, #e06930, #fbc145); border: none; padding: 12px 30px; font-weight: 600; border-radius: 6px;">Request Demo</a>
            </div>
            <div class="col-lg-7 mt-5 mt-lg-0" data-aos="fade-left">
                <div class="row g-4">
                    <div class="col-md-6">
                        <div class="ai-feature-card bg-white p-4 rounded shadow-sm" style="border-top: 4px solid #291fbc;">
                            <i class="fas fa-cloud-upload-alt fa-2x mb-3" style="color: #291fbc;"></i>
                            <h5 class="fw-bold" style="color: #291fbc;">Cloud Scalability</h5>
                            <p class="text-muted small">Scale your business seamlessly with our secure, cloud-based AI infrastructure.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="ai-feature-card bg-white p-4 rounded shadow-sm" style="border-top: 4px solid #f9b943;">
                            <i class="fas fa-user-gear fa-2x mb-3" style="color: #f9b943;"></i>
                            <h5 class="fw-bold" style="color: #f9b943;">Industry Specific</h5>
                            <p class="text-muted small">Custom-trained AI models for your specific business workflow and data.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.industry-tab-btn');
    const contentPane = document.getElementById('industry-content');

    const industryData = {
        manufacturing: `
            <div class="p-4 bg-white rounded-3 shadow-sm" style="border: 1px solid #e2e8f0;">
                <div class="row mb-4">
                    <div class="col-md-7">
                        <h3 class="fw-bold mb-3" style="color: #291fbc;">🏭 AI for Manufacturing</h3>
                        <p class="text-muted small mb-4">AI solves industrial challenges intelligently through automation and data-driven insights.</p>
                        <ul class="list-unstyled">
                            <li class="mb-2"><i class="fas fa-check text-primary me-2"></i> Production Planning AI</li>
                            <li class="mb-2"><i class="fas fa-check text-primary me-2"></i> Vision-based Quality Inspection</li>
                            <li class="mb-2"><i class="fas fa-check text-primary me-2"></i> Predictive Machine Maintenance</li>
                        </ul>
                    </div>
                    <div class="col-md-5">
                        <img src="assets/images/ai/ai_manufacturing_master_1778499939880.png" class="img-fluid rounded shadow-sm" alt="Manufacturing AI">
                    </div>
                </div>
                <div class="gallery-grid mt-4">
                    <h6 class="fw-bold mb-3">AI in Action</h6>
                    <div class="row g-3">
                        <div class="col-md-6 text-center">
                            <img src="assets/images/ai/ai_manufacturing_quality_1778500012267.png" class="img-fluid rounded gallery-img shadow-sm" alt="Quality AI">
                            <p class="mt-2 small text-muted">Quality Inspection</p>
                        </div>
                        <div class="col-md-6 text-center">
                            <img src="assets/images/ai/ai_manufacturing_maintenance_1778500026185.png" class="img-fluid rounded gallery-img shadow-sm" alt="Maintenance AI">
                            <p class="mt-2 small text-muted">Predictive Maintenance</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        retail: `
            <div class="p-4 bg-white rounded-3 shadow-sm" style="border: 1px solid #e2e8f0;">
                <div class="row mb-4">
                    <div class="col-md-7">
                        <h3 class="fw-bold mb-3" style="color: #291fbc;">🏬 AI for Retail</h3>
                        <p class="text-muted small mb-4">Retail is highly competitive. AI helps retailers make smarter decisions through behavioral tracking and inventory sync.</p>
                        <ul class="list-unstyled">
                            <li class="mb-2"><i class="fas fa-check text-primary me-2"></i> Smart Inventory & Reordering</li>
                            <li class="mb-2"><i class="fas fa-check text-primary me-2"></i> Customer Behavior Heatmaps</li>
                            <li class="mb-2"><i class="fas fa-check text-primary me-2"></i> Dynamic Pricing Optimization</li>
                        </ul>
                    </div>
                    <div class="col-md-5">
                        <img src="assets/images/ai/ai_retail_master_1778499955733.png" class="img-fluid rounded shadow-sm" alt="Retail AI">
                    </div>
                </div>
                <div class="gallery-grid mt-4">
                    <h6 class="fw-bold mb-3">AI in Action</h6>
                    <div class="row g-3">
                        <div class="col-md-6 text-center">
                            <img src="assets/images/ai/ai_retail_inventory_1778500042900.png" class="img-fluid rounded gallery-img shadow-sm" alt="Inventory AI">
                            <p class="mt-2 small text-muted">Smart Inventory</p>
                        </div>
                        <div class="col-md-6 text-center">
                            <img src="assets/images/ai/ai_retail_heatmap_1778500056410.png" class="img-fluid rounded gallery-img shadow-sm" alt="Heatmap AI">
                            <p class="mt-2 small text-muted">Behavior Analytics</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        service: `
            <div class="p-4 bg-white rounded-3 shadow-sm" style="border: 1px solid #e2e8f0;">
                <div class="row mb-4">
                    <div class="col-md-7">
                        <h3 class="fw-bold mb-3" style="color: #291fbc;">🔧 AI for Field Service</h3>
                        <p class="text-muted small mb-4">Optimize your on-ground teams with intelligent routing, SLA monitoring, and AR-based technical support.</p>
                        <ul class="list-unstyled">
                            <li class="mb-2"><i class="fas fa-check text-primary me-2"></i> GPS-based Smart Routing</li>
                            <li class="mb-2"><i class="fas fa-check text-primary me-2"></i> AR-based Remote Support</li>
                            <li class="mb-2"><i class="fas fa-check text-primary me-2"></i> Automated SLA Monitoring</li>
                        </ul>
                    </div>
                    <div class="col-md-5">
                        <img src="assets/images/ai/ai_field_service_master_1778499972113.png" class="img-fluid rounded shadow-sm" alt="Service AI">
                    </div>
                </div>
                <div class="gallery-grid mt-4">
                    <h6 class="fw-bold mb-3">AI in Action</h6>
                    <div class="row g-3">
                        <div class="col-md-6 text-center">
                            <img src="assets/images/ai/ai_field_service_mobile_1778500077996.png" class="img-fluid rounded gallery-img shadow-sm" alt="Mobile AI">
                            <p class="mt-2 small text-muted">Smart Routing App</p>
                        </div>
                        <div class="col-md-6 text-center">
                            <img src="assets/images/ai/ai_field_service_ar_1778500093993.png" class="img-fluid rounded gallery-img shadow-sm" alt="AR Support">
                            <p class="mt-2 small text-muted">AR Technical Support</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        analytics: `
            <div class="p-4 bg-white rounded-3 shadow-sm" style="border: 1px solid #e2e8f0;">
                <div class="row mb-4">
                    <div class="col-md-7">
                        <h3 class="fw-bold mb-3" style="color: #291fbc;">📊 AI Analytics & BI</h3>
                        <p class="text-muted small mb-4">Make faster, data-driven decisions with real-time dashboards and predictive business intelligence.</p>
                        <ul class="list-unstyled">
                            <li class="mb-2"><i class="fas fa-check text-primary me-2"></i> Real-time Executive Dashboards</li>
                            <li class="mb-2"><i class="fas fa-check text-primary me-2"></i> Predictive Churn Analysis</li>
                            <li class="mb-2"><i class="fas fa-check text-primary me-2"></i> Branch Performance Comparison</li>
                        </ul>
                    </div>
                    <div class="col-md-5">
                        <img src="assets/images/ai/ai_analytics_bi_master_1778499986768.png" class="img-fluid rounded shadow-sm" alt="Analytics AI">
                    </div>
                </div>
                <div class="gallery-grid mt-4">
                    <h6 class="fw-bold mb-3">AI in Action</h6>
                    <div class="row g-3">
                        <div class="col-md-6 text-center">
                            <img src="assets/images/ai/ai_analytics_churn_1778500109037.png" class="img-fluid rounded gallery-img shadow-sm" alt="Churn Analysis">
                            <p class="mt-2 small text-muted">Predictive Analytics</p>
                        </div>
                        <div class="col-md-6 text-center">
                            <img src="assets/images/ai/ai_analytics_kpi_wall_1778500125611.png" class="img-fluid rounded gallery-img shadow-sm" alt="KPI Wall">
                            <p class="mt-2 small text-muted">Executive Command Center</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    };

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const target = this.dataset.target;
            contentPane.style.opacity = '0';
            setTimeout(() => {
                contentPane.innerHTML = industryData[target];
                contentPane.style.opacity = '1';
            }, 300);
        });
    });
});
</script>

<style>
#industry-content {
    transition: opacity 0.3s ease;
}
.industry-tab-btn.active {
    background: #291fbc !important;
    color: #fff !important;
    border-color: #291fbc !important;
}
.gallery-img {
    height: 180px;
    width: 100%;
    object-fit: cover;
    transition: transform 0.3s;
    cursor: pointer;
}
.gallery-img:hover {
    transform: scale(1.03);
}
.ai-icon-box {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-bottom: 15px;
}
.heading-wrap h2 span {
    color: #291fbc;
}
</style>

<?php include 'footer.php'; ?>