  
  // card-carousel

$(document).ready(function (){
    
    $('.card-list').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
       
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },

          {
            breakpoint: 765,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },

          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 380,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }

        ]          
       });   

});

$(document).ready(function (){

  $('.testimonial-list').slick({
    autoplay: true,
    infinite: true,  
    slidesToShow: 4,
    slidesToScroll: 1,
     dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  })

});

// let config3 = {
//   type: 'carousel',
//   perView: 2,
//   // autoplay:2500,
//   animationDuration: 600,
//   animationTimingFunc: 'linear',
//   breakpoints: {
//       767: {
//           perView: 1
//       },
//       992: {
//           perView: 2
//       }
//   }
// };

// new Glide('.about-slider', config3).mount();


let config3 = {
  type: 'carousel',
  perView: 2,
  autoplay:2500,
  animationDuration: 600,
  animationTimingFunc: 'linear',
  breakpoints: {
      767: {
          perView: 1
      },
      992: {
          perView: 2
      }
  }
};

new Glide('._about_slider', config3).mount();



// select-2


$(document).ready(function() {
  $('.js-is-select2').on('select2:open', function() {
    if (Modernizr.touch) {
      $('.select2-search__field').prop('focus', false);
    }
  });
});

$(document).ready(function() {
  $('.js-source-states').select2({
    width:"100%",
    allowClear: true,
    tag: false, 
    placeholder: "Select"
  }); 
});




