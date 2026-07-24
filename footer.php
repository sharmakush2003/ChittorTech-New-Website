  <!--  footer -->
  <footer class="live-footer">
      <div class="container">
          <div class="row">
              <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div class="footer-logo-section">
                    <figure> <a href="index.php"><img src="assets/images/footer-logo.png" alt="Digify Logo"></a> </figure>
                    <span class="footer-tagline">Smart IT . Smarter Business</span>
                    <p class="mt-3">At Digify Soft Solutions, we are passionate about transforming businesses through innovative, cloud-based software solutions. Founded with a vision to empower small and mid-sized enterprises, we specialize in delivering cutting-edge ERP, CRM, and.</p>
                    
                    <div class="footer-cities-serve mt-4">
                        <h5 class="cities-title">Cities We Serve:</h5>

                        <div class="cities-links-container" id="footerCitiesList">
                            <?php 
                                $allCities = ["Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Chennai", "Pune", "Ahmedabad", "Jaipur", "Surat", "Kolkata", "Noida", "Gurgaon", "Lucknow", "Indore", "Bhopal", "Nagpur", "Vadodara", "Nashik", "Coimbatore", "Kochi", "Visakhapatnam", "Vijayawada", "Chandigarh", "Ludhiana", "Ranchi", "Raipur", "Bhubaneswar", "Kanpur", "Agra", "Varanasi", "Meerut", "Faridabad", "Ghaziabad", "Jodhpur", "Udaipur", "Ajmer", "Kota", "Aurangabad", "Thane", "Mysuru", "Hubli", "Mangalore", "Trichy", "Madurai", "Salem", "Tiruppur", "Guwahati", "Dehradun", "Shimla", "Jammu", "Srinagar", "Amritsar", "Jalandhar", "Panipat", "Sonipat", "Dharwad", "Rajkot", "Jamnagar", "Gandhinagar", "Thrissur", "Kannur", "Warangal", "Nizamabad", "Karimnagar", "Belgaum", "Davanagere", "Tumakuru", "Anand", "Bhavnagar", "Junagadh", "Thiruvananthapuram"];
                                
                                foreach($allCities as $city) {
                                    // Dedicated page in cities folder
                                    $file = strtolower($city) . ".php";
                                    echo '<a href="cities/'.$file.'" class="city-link">'.$city.'</a>';
                                }
                            ?>
                        </div>
                    </div>
                </div>
              </div>
               <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                <div class="footer-widget">
                   <h4>Our Products</h4>
                   <ul class="footer-links">
                       <li><a href="pos.php">POS</a></li>
                       <li><a href="erp.php">ERP</a></li>
                       <li><a href="accounting.php">Accounting</a></li>
                       <li><a href="inventory.php">Inventory</a></li>
                       <li><a href="omnichannel.php">Omnichannel</a></li>
                       <li><a href="crm.php">CRM</a></li>
                       <li><a href="smart-retail.php">Smart retail</a></li>
                       <li><a href="lead-management.php">Lead Management</a></li>
                       <li><a href="payroll.php">Payroll</a></li>
                       <li><a href="education.php">Education</a></li>
                     </ul>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                <div class="footer-widget">
                   <h4>Useful Links</h4>
                   <ul class="footer-links">
                       <li><a href="about-us.php">About us</a></li>
                       <li><a href="invoicing.php">Invoicing</a></li>
                       <li><a href="logistics.php">Logistics</a></li>
                       <li><a href="blog.php">Blog</a></li>
                       <li><a href="contact-us.php">Contact</a></li>
                     </ul>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                <div class="footer-widget">
                   <h4>Service</h4>
                   <ul class="footer-links">
                       <li><a href="digital-marketing-services.php">Digital Marketing Services</a></li>
                       <li><a href="e-commerce-website-development.php">Web Development</a></li>
                       <li><a href="android-application.php">Mobile App Developmet</a></li>
                       <li><a href="modern-responsive-website-design.php">Web Design</a></li>
                       <li><a href="social-media-optimization.php">Social Media Marketing</a></li>
                       <li><a href="custom-crm-solutions.php">CRM Development</a></li>
                     </ul>
                </div>
              </div> 
              <div class="col-lg-3 col-md-6">
                <div class="footer-widget">
                   <h4>Contact Us</h4>
                   <ul class="footer-contact-links">
                      <li><a href="mailto:sales.digify@digifycrm.in">sales.digify@digifycrm.in</a></li>
                      <li><a href="tel:+917425016636">+91 7425016636</a></li>
                    </ul>
                    <div class="footer-address">
                        <p><strong>India (Noida Office):</strong><br>
                        Knowledge Park V, Sector 12, Greater Noida, Uttar Pradesh, 203207</p>
                        <p class="mt-3"><strong>India (Jaipur Office):</strong><br>
                        Akash Ganga, C-107, Keshav Nagar, Civil Lines, Jaipur – 302006, Rajasthan, India.</p>
                    </div>
                    <div class="footer-social-icons mt-4">
                       <ul>
                          <li> <a target="_blank" href="https://www.facebook.com/people/Digifysoft/61554507884332/"> <i class="fa-brands fa-facebook-f"></i></a> </li>
                          <li> <a target="_blank" href="https://www.instagram.com/digifysoft/"> <i class="fa-brands fa-instagram"></i></a> </li>
                          <li> <a target="_blank" href="https://wa.me/917425016636"> <i class="fa-brands fa-whatsapp"></i></a> </li>
                          <li> <a target="_blank" href="https://www.linkedin.com/company/digify-soft-solutions/"> <i class="fa-brands fa-linkedin-in"></i></a> </li>
                          <li> <a target="_blank" href="https://www.digifysoft.in/pos_bill/lead/inquiry_formIndiaMART.php"> <img src="assets/images/social1.png" style="width: 20px;"> </a></li>
                          <li> <a target="_blank" href="https://www.digifysoft.in/pos_bill/lead/inquiry_formJustdial.php"> <img src="assets/images/social2.png" style="width: 20px;"> </a></li>
                       </ul>
                    </div>
                </div>
              </div>
          </div>
      </div>
      <div class="footer-copyright-bar">
          <div class="container">
              <div class="row">
                  <div class="col-12 text-center">
                      <p>© Copyright Digisoft 2026.</p>
                  </div>
              </div>
          </div>
      </div>
  </footer>
  <!--  footer -->





<?php include('trial_modal.php'); ?>



   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/js/bootstrap.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"></script>
   <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>  
   <script src="assets/js/custom.js"></script>
   
   <!-- Premium GSAP & 3D Interactions -->
   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
   <script src="assets/js/premium-animations.js"></script>
    
    <!-- Mobile Accordion Footer Toggle Script -->
    <script>
    $(document).ready(function() {
        if ($(window).width() < 768) {
            $('.footer-widget h4').css('cursor', 'pointer').click(function() {
                $(this).parent('.footer-widget').toggleClass('active');
            });
        }
    });
    </script>
   </body>
</html>