$(document).ready(function(){
    
    $('.items').slick({
  dots: true,
  infinite: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 10,
  slidesToScroll: 10,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }

  ]
});
          });













          $(document).ready(function(){

            if($('.brands_slider').length)
                 {
                     var brandsSlider = $('.brands_slider');
         
                     brandsSlider.owlCarousel(
                     {
                         loop:true,
                         autoplay:true,
                         autoplayTimeout:5000,
                         nav:false,
                         dots:false,
                         autoWidth:true,
                         items:8,
                         margin:42
                     });
         
                     if($('.brands_prev').length)
                     {
                         var prev = $('.brands_prev');
                         prev.on('click', function()
                         {
                             brandsSlider.trigger('prev.owl.carousel');
                         });
                     }
         
                     if($('.brands_next').length)
                     {
                         var next = $('.brands_next');
                         next.on('click', function()
                         {
                             brandsSlider.trigger('next.owl.carousel');
                         });
                     }
                 }
         
         
             });