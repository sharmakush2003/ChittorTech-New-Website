"use client";
import React from "react";
import "../../../public/assets/css/premium-products.css";


export default function Page() {
  return (
    <>
      {/* City Hero Section */}
<section className="inner-banner-sec">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-7">
                <div className="inner-banner-wrap">
                    <span className="badge bg-warning text-dark mb-3">#No.1 AI & IT Solutions Solution in </span>
                    <h1>Top AI & IT Solutions in Manufacturing & Retail in <span className="text-primary"></span></h1>
                    <p className="mt-3">Running a manufacturing or retail business in a fast-growing city like  requires more than spreadsheets and manual billing. Empower your business with India's most trusted Cloud-based AI & IT Solutions and AI Knowledge Base solutions.</p>
                    <div className="banner-btn mt-4">
                        <a href="/contact-us" className="btn btn-primary btn-lg">Get Free Demo</a>
                        <a href="#features" className="btn btn-outline-primary btn-lg ms-3">Explore Features</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-5">
                <div className="inner-banner-img text-center">
                    <img src="/assets/images/ai-solutions-banner.png" alt="AI & IT Solutions " className="img-fluid" />
                </div>
            </div>
        </div>
    </div>
</section>

{/* Overview Section */}
<section className="overview-sec py-5">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
                <h2 className="fw-bold mb-4">What Is Chittortech AI & IT Solutions?</h2>
                <p className="lead text-muted">Chittortech AI & IT Solutions is a cloud-based and customizable AI & IT Solutions solution that helps businesses in  manage their entire operations from one dashboard. Designed specifically for Indian manufacturers, retailers, wholesalers, and SMEs, it supports everything from GST billing to production planning.</p>
            </div>
        </div>
        <div className="row mt-5 g-4">
            
        </div>
    </div>
</section>

{/* Industry Specific Section */}
<section className="industry-needs py-5 bg-light">
    <div className="container">
        <div className="row g-5">
            <div className="col-lg-6">
                <div className="p-4 bg-white rounded shadow-sm h-100 border-top border-primary border-4">
                    <h3 className="fw-bold mb-4">Why Manufacturing Businesses in  Need AI & IT Solutions</h3>
                    <p className="mb-4">Manufacturing industries in  deal with multiple operational challenges. Our AI & IT Solutions automates factory operations and improves productivity through:</p>
                    <ul className="list-unstyled">
                        <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> Production planning & scheduling</li>
                        <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> Raw material tracking & BOM</li>
                        <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> Real-time production tracking</li>
                        <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> Machine & Warehouse coordination</li>
                        <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> GST compliance & Billing</li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="p-4 bg-white rounded shadow-sm h-100 border-top border-warning border-4">
                    <h3 className="fw-bold mb-4">Why Retail Businesses in  Need AI & IT Solutions</h3>
                    <p className="mb-4">Retail stores require fast operations and accurate data. Our Retail AI Automation helps businesses manage invoicing, billing, and omnichannel operations from one system:</p>
                    <ul className="list-unstyled">
                        <li className="mb-2"><i className="bi bi-check-circle-fill text-warning me-2"></i> Fast POS & Barcode billing</li>
                        <li className="mb-2"><i className="bi bi-check-circle-fill text-warning me-2"></i> Multi-store & Stock management</li>
                        <li className="mb-2"><i className="bi bi-check-circle-fill text-warning me-2"></i> AI Knowledge Base & Loyalty programs</li>
                        <li className="mb-2"><i className="bi bi-check-circle-fill text-warning me-2"></i> Sales tracking & Analytics</li>
                        <li className="mb-2"><i className="bi bi-check-circle-fill text-warning me-2"></i> Inventory synchronization</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

{/* Features Section */}
<section id="features" className="features-sec py-5">
    <div className="container">
        <div className="text-center mb-5">
            <h2 className="fw-bold">Main Features of Chittortech AI & IT Solutions</h2>
            <p className="text-muted">Powerful modules designed to scale your business in </p>
        </div>
        <div className="row g-4">
            <div className="col-md-4">
                <div className="feature-box p-4 border rounded shadow-sm h-100">
                    <div className="icon mb-3"><i className="bi bi-receipt fs-2 text-primary"></i></div>
                    <h4>Smart AI Support Chatbot</h4>
                    <p>Fast GST billing, barcode support, multi-payment modes, and touch POS integration to improve retail speed.</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="feature-box p-4 border rounded shadow-sm h-100">
                    <div className="icon mb-3"><i className="bi bi-box-seam fs-2 text-primary"></i></div>
                    <h4>Inventory Management</h4>
                    <p>Real-time stock tracking, batch/expiry management, low stock alerts, and seamless warehouse transfers.</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="feature-box p-4 border rounded shadow-sm h-100">
                    <div className="icon mb-3"><i className="bi bi-gear-wide-connected fs-2 text-primary"></i></div>
                    <h4>AI Manufacturing Solutions</h4>
                    <p>BOM planning, work-in-progress tracking, quality control, and cost management for efficient production.</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="feature-box p-4 border rounded shadow-sm h-100">
                    <div className="icon mb-3"><i className="bi bi-people fs-2 text-primary"></i></div>
                    <h4>AI Knowledge Base & Loyalty</h4>
                    <p>Lead management, discount coupons, WhatsApp/SMS notifications, and customer analytics to improve retention.</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="feature-box p-4 border rounded shadow-sm h-100">
                    <div className="icon mb-3"><i className="bi bi-calculator fs-2 text-primary"></i></div>
                    <h4>Accounting & GST</h4>
                    <p>GST-ready billing, financial reports, profit & loss, balance sheets, and E-invoice integration.</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="feature-box p-4 border rounded shadow-sm h-100">
                    <div className="icon mb-3"><i className="bi bi-building fs-2 text-primary"></i></div>
                    <h4>Warehouse Management</h4>
                    <p>Rack/bin management, physical stock verification, and capacity monitoring to reduce inventory loss.</p>
                </div>
            </div>
        </div>
    </div>
</section>

{/* Workflow Section */}
<section className="workflow-sec py-5 bg-dark text-white">
    <div className="container">
        <div className="text-center mb-5">
            <h2 className="fw-bold">How Chittortech AI & IT Solutions Works</h2>
            <p className="text-light">A seamless workflow to keep your  business connected</p>
        </div>
        <div className="row text-center g-4">
            <div className="col-md-2 col-6">
                <div className="step">
                    <div className="fs-1 mb-2">01</div>
                    <h6>Sales Order Generated</h6>
                </div>
            </div>
            <div className="col-md-2 col-6">
                <div className="step">
                    <div className="fs-1 mb-2">02</div>
                    <h6>Inventory Updates</h6>
                </div>
            </div>
            <div className="col-md-2 col-6">
                <div className="step">
                    <div className="fs-1 mb-2">03</div>
                    <h6>Billing Synchronize</h6>
                </div>
            </div>
            <div className="col-md-2 col-6">
                <div className="step">
                    <div className="fs-1 mb-2">04</div>
                    <h6>Warehouse Updates</h6>
                </div>
            </div>
            <div className="col-md-2 col-6">
                <div className="step">
                    <div className="fs-1 mb-2">05</div>
                    <h6>Real-time Reports</h6>
                </div>
            </div>
            <div className="col-md-2 col-6">
                <div className="step">
                    <div className="fs-1 mb-2">06</div>
                    <h6>Live Insights</h6>
                </div>
            </div>
        </div>
    </div>
</section>

{/* FAQ Section */}
<section className="faq-sec py-5">
    <div className="container">
        <div className="text-center mb-5">
            <h2 className="fw-bold">Top AI & IT Solutions FAQs for </h2>
            <p className="text-muted">Everything you need to know about our AI & IT Solutions solutions</p>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-9">
                <div className="accordion shadow-sm" id="cityFaq">
                    
                </div>
            </div>
        </div>
    </div>
</section>

{/* Call to Action */}
<section className="cta-section py-5 bg-primary text-white text-center">
    <div className="container">
        <h3 className="mb-4">Ready to transform your business in ?</h3>
        <p className="mb-4 lead">Join hundreds of successful businesses using Chittortech AI & IT Solutions.</p>
        <a href="/contact-us" className="btn btn-warning btn-lg px-5 fw-bold">Contact Us Today</a>
    </div>
</section>
    </>
  );
}
