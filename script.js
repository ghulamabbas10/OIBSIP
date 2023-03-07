// Animated Scroll

$('nav ul li a').click(function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
  });
  
  // Responsive Menu
  
  $('header').append('<div class="responsive-menu"><span></span><span></span><span></span></div>');
  
  $('header .responsive-menu').click(function() {
    $('nav ul').slideToggle();
  });
  
  $(window).resize(function() {
    if ($(window).width() > 768) {
      $('nav ul').removeAttr('style');
    }
  });
  
  // Dynamic Slideshow
  
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
  }
  