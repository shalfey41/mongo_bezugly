$(document).ready(function(){
    
    $(".carousel").slick({
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });
    
     $("a[href^=#]").on("click", function(e) {
         e.preventDefault();
          
         $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
    });
    
});