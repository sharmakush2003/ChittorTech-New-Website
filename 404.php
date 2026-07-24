<?php 
    $pageTitle = 'Page Not Found';
    include("top.php");
    include 'header.php'; 
?>

<!-- Premium 404 Section -->
<style>
.premium-404-container {
    position: relative;
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0f172a;
    overflow: hidden;
    font-family: 'Raleway', sans-serif;
    color: #fff;
    padding: 60px 20px;
}

/* Background animated elements */
.bg-blobs {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    overflow: hidden;
}
.blob {
    position: absolute;
    filter: blur(80px);
    opacity: 0.5;
    animation: floatBlob 12s infinite alternate ease-in-out;
}
.blob-1 {
    width: 40vw;
    height: 40vw;
    background: #e06930;
    top: -10%;
    left: -10%;
    animation-delay: 0s;
}
.blob-2 {
    width: 35vw;
    height: 35vw;
    background: #4576ba;
    bottom: -10%;
    right: -10%;
    animation-delay: -5s;
}
.blob-3 {
    width: 30vw;
    height: 30vw;
    background: #291fbc;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-duration: 18s;
}

@keyframes floatBlob {
    0% { transform: translate(0, 0) scale(1); }
    100% { transform: translate(30px, 50px) scale(1.1); }
}

/* Content Card */
.content-wrapper {
    position: relative;
    z-index: 10;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 30px;
    padding: 50px 40px;
    text-align: center;
    max-width: 700px;
    width: 100%;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.clean-404-text {
    font-size: 140px;
    font-weight: 900;
    line-height: 1;
    margin: 0;
    background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 10px 20px rgba(0,0,0,0.3));
    margin-bottom: 10px;
}

.title-text {
    font-size: 30px;
    font-weight: 800;
    margin-bottom: 15px;
    letter-spacing: -0.5px;
    color: #f8fafc;
}

.desc-text {
    font-size: 16px;
    color: #cbd5e1;
    line-height: 1.7;
    margin-bottom: 30px;
    max-width: 550px;
    margin-left: auto;
    margin-right: auto;
}

.notification-box {
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.3);
    border-radius: 20px;
    padding: 25px;
    max-width: 550px;
    margin: 0 auto 30px auto;
    color: #34d399;
    font-size: 15px;
    line-height: 1.6;
    font-weight: 500;
}

.notification-box i {
    font-size: 24px;
    margin-bottom: 10px;
    display: block;
    color: #10b981;
}

/* Action Buttons */
.btn-wrapper {
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
}

.btn-action {
    padding: 14px 32px;
    border-radius: 30px;
    font-weight: 700;
    text-decoration: none;
    font-size: 15px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: inline-flex;
    align-items: center;
    gap: 10px;
    border: none;
    cursor: pointer;
}

.btn-home-action {
    background: #ffffff;
    color: #0f172a;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.btn-home-action:hover {
    background: #f8fafc;
    transform: translateY(-4px);
    color: #000;
}

/* Hide the global floating contact button on the 404 page to prevent overlap */
.contact-floating {
    display: none !important;
}

@media(max-width: 575px) {
    .clean-404-text { font-size: 100px; }
    .title-text { font-size: 24px; }
    .content-wrapper { padding: 40px 20px; }
    .btn-action { width: 100%; justify-content: center; }
}
</style>

<div class="premium-404-container">
    <!-- Animated Blobs -->
    <div class="bg-blobs">
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>
    </div>
    
    <!-- Glassmorphism Card -->
    <div class="content-wrapper">
        <h1 class="clean-404-text">404</h1>
        <h2 class="title-text">Broken Link Detected</h2>
        
        <p class="desc-text">
            It seems the specific link you clicked doesn't exist anymore or has been moved. 
        </p>

        <div class="notification-box">
            <i class="fa-solid fa-circle-check"></i>
            Our technical team has been notified. They are working on it and this page will be recovered soon. Until then, please explore our website and enjoy. Thank you for your patience!
        </div>

        <div class="btn-wrapper mt-4">
            <a href="https://digifysoft.in/" class="btn-action btn-home-action">
                <i class="fa-solid fa-house"></i> Explore Main Website
            </a>
        </div>
    </div>
</div>

<?php include 'footer.php'; ?>
