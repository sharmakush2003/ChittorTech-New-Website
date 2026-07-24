<!-- header -->
<?php include 'header.php'; ?>
<!-- header -->


<style>
.hero-section {
      padding: 60px 0;
      background: linear-gradient(135deg, #ffffff, #f1f3f5);
    }
    .trial-wrapper {
      background: #fff;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
    .trial-wrapper h3 {
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 20px;
      color: #333;
    }
    .input-group-text {
      background-color: #f0f0f0;
      border: 1px solid #ced4da;
      border-right: none;
    }
    .form-control {
      border: 1px solid #ced4da;
      border-radius: 0 6px 6px 0;
      padding: 10px;
    }
    .form-control:focus {
      box-shadow: none;
      border-color: #ffc107;
    }
    .btn-yellow {
      background-color: #ffc107;
      color: #fff;
      font-weight: 600;
      background-image: linear-gradient(to right, #e78135, #fbc145);
      border: none;
      padding: 12px;
      border-radius: 6px;
      transition: background-color 0.3s;
    }
    .input-group-text {
    padding: 15px 16px;
    }
    .btn-yellow:hover {
      background-color: #e0a800;
    }
    .captcha-box {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .captcha-box .form-control {
      border-radius: 6px;
    }
    .captcha-box div {
      font-weight: 500;
    }
    @media (max-width: 767px) {
      .hero-section {
        padding: 30px 0;
      }
      .trial-wrapper {
        padding: 20px;
      }
    }
    .demo-img {
      background: #ffffff;
      padding: 10px;
      border-radius: 10px;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
    .btn-yellow:hover {
      color: #fff;
  }
  .trial-wrapper {
      text-align: center;
      margin-bottom: 10px;
  }

</style>

<!-- demo page section start here -->
<div class="hero-section">
  <div class="container">
    <div class="row align-items-center">

      <!-- Left Image -->
      <div class="col-md-6 text-center mb-4 mb-md-0">
         <div class="demo-img">
            <img src="assets/images/demo.png" alt="ERP Modules" class="img-fluid" style="max-height: 480px; border-radius: 12px;">
         </div>
      </div>

      <!-- Right Form -->
      <div class="col-md-6">
        <div class="trial-wrapper">
          <h3>Get a Free Trial</h3>

          
          <form method="POST">
            <div class="row">
              <div class="col-md-6">
                 <div class="input-group mb-3">
                  <span class="input-group-text"><i class="fas fa-user"></i></span>
                  <input type="text" class="form-control" name="name" placeholder="Name*" required="">
                </div>
              </div>
            
 
            <div class="col-md-6">
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fas fa-envelope"></i></span>
              <input type="email" class="form-control" name="email" placeholder="Email*" required="">
            </div>
          </div>

          <div class="col-md-6">
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fas fa-industry"></i></span>
              <select class="form-control" name="industry" required="">
                <option value="">Select Industry</option>
                <option>Manufacturing</option>
             <option>Refurbish</option>
                <option>Retail</option>
                <option>Pharma</option>
             <option>School</option>
                <option>Textile</option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fas fa-building"></i></span>
              <input type="text" class="form-control" name="company" placeholder="Company Name*" required="">
            </div>
          </div>
          <div class="col-md-12">
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fas fa-comment-dots"></i></span>
              <textarea class="form-control" name="message" placeholder="Message" rows="3"></textarea>
            </div>
          </div>
          <div class="col-md-12">
            <div class="input-group mb-3 captcha-box">
              <span class="input-group-text"><i class="fas fa-lock"></i></span>
              <input type="text" class="form-control" name="captcha" placeholder="Enter Captcha Code" required="">
              <div style="padding: 8px 12px; background:#f0f0f0; border-radius: 10px; color:#000;">MrbHQj</div>
            </div>
          </div>

            <button class="btn btn-yellow w-100">GET A FREE TRIAL</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</div>

<!-- demo page section start here -->

<?php include 'footer.php'; ?>