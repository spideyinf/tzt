//=require jquery/dist/jquery.min.js
//=require popper.js/dist/umd/popper.min.js
//=require bootstrap/dist/js/bootstrap.min.js
//=require owl.carousel/dist/owl.carousel.min.js

$(function () {

  'use strict';

  $('.hot-deals').owlCarousel({
    loop: true,
    margin: 5,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })

  $('.p01-home__banner-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })
})