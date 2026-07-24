


// home banner js
document.addEventListener('DOMContentLoaded', function () {
  let carousel = document.getElementById('carouselExampleControls');
  let manualTrigger = false;

  // Prev/next buttons -> flag true
  const prevBtn = document.querySelector('.carousel-control-prev');
  const nextBtn = document.querySelector('.carousel-control-next');
  
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      manualTrigger = true;
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      manualTrigger = true;
    });
  }

  if (carousel) {
    // Slide event -> reset animations
    carousel.addEventListener('slide.bs.carousel', function () {
      let texts = carousel.querySelectorAll('.animated');
      let imgs = carousel.querySelectorAll('.banner-img');
      texts.forEach(el => el.classList.remove('animate-top'));
      imgs.forEach(el => el.classList.remove('animate-bottom'));
    });

    // Slid hone ke baad -> animation lagao
    carousel.addEventListener('slid.bs.carousel', function () {
      let activeItem = carousel.querySelector('.carousel-item.active');
      if (activeItem) {
        let text = activeItem.querySelector('.animated');
        let img = activeItem.querySelector('.banner-img');
        if (text) text.classList.add('animate-top');
        if (img) img.classList.add('animate-bottom');
      }
      manualTrigger = false; // reset
    });

    // ✅ Page load pe thoda delay se pehli slide animate karao
    setTimeout(() => {
      let firstActive = carousel.querySelector('.carousel-item.active');
      if (firstActive) {
        let text = firstActive.querySelector('.animated');
        let img = firstActive.querySelector('.banner-img');
        if (text) text.classList.add('animate-top');
        if (img) img.classList.add('animate-bottom');
      }
    }, 100); // chhoti delay so Bootstrap load complete
  }
});



// client js
$('.clients-silder').owlCarousel({
    loop:true,
    margin:30,
    autoplay: true,         
    autoplayTimeout: 2000, 
    autoplayHoverPause: true,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})


// client js
$('#clients-header').owlCarousel({
    loop:false,
    margin:30,
    autoplay: false,         
    autoplayTimeout: 2000, 
    autoplayHoverPause: true,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})



// client js
$('.simplifying').owlCarousel({
    loop:false,
    margin:30,
    autoplay: false,         
    autoplayTimeout: 2000, 
    autoplayHoverPause: true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})



//store js
$('.store-silder').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


// tabs 
$(document).ready(function(){
  $(".nav-links").click(function(){
      var tabId = parseInt($(this).data("id"));
      var pairedTabId = tabId % 2 === 0 ? tabId - 1 : tabId + 1;

      $(".nav-links").removeClass("active");
      $(".payment-arrow").removeClass("active");
      $(".tab-pane-integration").removeClass("active");

      $(".nav-links[data-id='" + tabId + "'], .nav-links[data-id='" + pairedTabId + "']").addClass("active");
      $(".payment-arrow[data-id='" + tabId + "'], .payment-arrow[data-id='" + pairedTabId + "']").addClass("active");
      $(".tab-pane-integration[data-content-id='content" + tabId + "'], .tab-pane-integration[data-content-id='content" + pairedTabId + "']").addClass("active");
  });
});


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".page-section");
    const navLinks = document.querySelectorAll(".side-nav a");

    // Function to update active class
    function updateActiveLink() {
        let scrollPosition = window.scrollY + 150; // Adjust for better accuracy

        sections.forEach((section, i) => {
            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                document.querySelector(".side-nav a.active")?.classList.remove("active");
                navLinks[i].classList.add("active");
            }
        });
    }

    // Scroll event
    window.addEventListener("scroll", updateActiveLink);
    
    // Smooth scroll on click
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let targetId = this.getAttribute("href").substring(1);
            let targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust offset for better positioning
                behavior: "smooth"
            });

            // Update active class instantly on click
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Trigger scroll to update active class on page load
    updateActiveLink();
});



//stories js
// $('#stories').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:3
//         }
//     }
// })


$(document).ready(function(){
      $('#stories').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1200: {
            items: 3
          }
        }
      });
    });



document.querySelectorAll(".navbar-nav .nav-item .nav-link").forEach(link => {
    link.addEventListener("click", function(e){
      let parent = this.parentElement;
      let submenu = parent.querySelector(".mega-menu, .sub-menu");

      if(window.innerWidth < 992 && submenu){
        e.preventDefault();

        // Close other open items
        document.querySelectorAll(".navbar-nav .nav-item").forEach(item => {
          if(item !== parent){
            item.classList.remove("active");
            item.classList.remove("show");
          }
        });

        // Toggle current one
        parent.classList.toggle("active");
        parent.classList.toggle("show");
      }
    });
  });




// blog load more
document.addEventListener("DOMContentLoaded", function () {
    const blogs = document.querySelectorAll(".blog-card");
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    let visibleCount = 9; // show first 9

    // hide blogs after visibleCount
    blogs.forEach((blog, index) => {
      if (index >= visibleCount) blog.style.display = "none";
    });

    if (loadMoreBtn) {
      loadMoreBtn.addEventListener("click", function () {
        const hidden = Array.from(blogs).filter(b => b.style.display === "none");
        // show next 3
        hidden.slice(0, 9).forEach(b => b.style.display = "block");
        // hide button if none hidden left
        if (Array.from(blogs).every(b => b.style.display === "block")) {
          loadMoreBtn.style.display = "none";
        }
      });
    }
  });


document.querySelectorAll('.solution-list li').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.solution-list li').forEach(li => li.classList.remove('active'));
    document.querySelectorAll('.solution-panel').forEach(p => p.classList.remove('active'));

    item.classList.add('active');
    document.getElementById(item.dataset.target).classList.add('active');
  });
});



const tabs = document.querySelectorAll('.integration-tabs button');
const contents = document.querySelectorAll('.integration-content');

tabs.forEach(tab=>{
  tab.addEventListener('click',()=>{
    tabs.forEach(t=>t.classList.remove('active'));
    contents.forEach(c=>c.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});



document.addEventListener('DOMContentLoaded', function(){

  const navLinks = document.querySelectorAll('.side-nav-link');
  const sections = document.querySelectorAll('.page-section');

  function openSection(id){
    // close all
    sections.forEach(sec => sec.classList.remove('active'));
    navLinks.forEach(link => link.classList.remove('active'));

    // open selected
    const section = document.getElementById(id);
    const link = document.querySelector('.side-nav-link[data-target="'+id+'"]');

    if(section) section.classList.add('active');
    if(link) link.classList.add('active');
  }

  // click handling
  navLinks.forEach(link=>{
    link.addEventListener('click', function(){
      const targetId = this.dataset.target;
      openSection(targetId);
    });
  });

  // default open (on page load)
  const defaultLink = document.querySelector('.side-nav-link.active');
  if(defaultLink){
    openSection(defaultLink.dataset.target);
  }

});
// Footer City Search Filter
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('footerCitySearch');
    const citiesList = document.getElementById('footerCitiesList');
    
    if (searchInput && citiesList) {
        const cityLinks = citiesList.querySelectorAll('.city-link');
        
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            
            cityLinks.forEach(link => {
                const cityName = link.textContent.toLowerCase();
                if (cityName.includes(query)) {
                    link.style.display = 'inline-block';
                } else {
                    link.style.display = 'none';
                }
            });
            
            // Show a message if no cities match
            let noResults = document.getElementById('noCityResults');
            const visibleLinks = citiesList.querySelectorAll('.city-link[style="display: inline-block;"]').length;
            const allHidden = Array.from(cityLinks).every(l => l.style.display === 'none');

            if (allHidden) {
                if (!noResults) {
                    noResults = document.createElement('p');
                    noResults.id = 'noCityResults';
                    noResults.className = 'text-muted small mt-2';
                    noResults.textContent = 'No cities found matching your search.';
                    citiesList.appendChild(noResults);
                }
            } else {
                if (noResults) {
                    noResults.remove();
                }
            }
        });
    }
});
