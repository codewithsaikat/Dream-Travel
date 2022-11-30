  
  // card-carousel

$(document).ready(function (){
    
    $('.card-list').slick({
        // autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
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

    // $('.testimonial-list').slick({
    //     autoplay: false,
    //     infinite: true,  
    //     slidesToShow: 4,
    //     slidesToScroll: 3,
    //      dots: true,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 2,
    //           infinite: true,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 600,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 1
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1
    //         }
    //       }
    //     ]
    
    //    })

});

