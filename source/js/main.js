//=require jquery/dist/jquery.min.js
//=require popper.js/dist/umd/popper.min.js
//=require bootstrap/dist/js/bootstrap.min.js
//=require owl.carousel/dist/owl.carousel.min.js
//=require nanoscroller/bin/javascripts/jquery.nanoscroller.js
//=require jquery.rateit/scripts/jquery.rateit.min.js
//=require slick-carousel/slick/slick.min.js
//=require @zeitiger/elevatezoom/jquery.elevatezoom.js

$(function() {
  'use strict';

  $('.p01-home__top-banner').owlCarousel({
    center: true,
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    items: 1,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 4500,
    autoplayHoverPause: true
  });

  $('.hot-deals').owlCarousel({
    center: true,
    loop: true,
    margin: 10,
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
        items: 4
      },
      1200: {
        items: 5
      }
    }
  });

  $('.p01-home__banner-slider').owlCarousel({
    center: true,
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    items: 1,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 4500,
    autoplayHoverPause: true
  });

  $('.p01-home__feature-shop').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    items: 6
  });

  $('.products-carousel6').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    items: 6
  });

  $('.products-carousel4').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    items: 4
  });

  $('.nano').nanoScroller();

  (function goToTop() {
    $(window).scroll(function() {
      if ($(window).scrollTop() >= 200) {
        $('#js-gototop').fadeIn();
      } else {
        $('#js-gototop').fadeOut();
      }
    });

    $('#js-gototop').click(function() {
      $('body, html').animate({ scrollTop: 0 }, 'normal');
      $('main').animate({ scrollTop: 0 }, 'normal');
      return !1;
    });
  })();

  //See more - See less
  $('.see-more').click(function() {
    var $this = $(this);
    $this.toggleClass('see-more');
    $this.prev().collapse();
    if ($this.hasClass('see-more')) {
      $this.text('Xem thêm sản phẩm cùng nơi bán >');
    } else {
      $this.text('Thu gọn <');
    }
  });

  /*!
   * Bootstrap 4 multi dropdown navbar ( https://bootstrapthemes.co/demo/resource/bootstrap-4-multi-dropdown-navbar/ )
   * Copyright 2017.
   * Licensed under the GPL license
   */

  $(document).ready(function() {
    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
      var $el = $(this);
      var $parent = $(this).offsetParent('.dropdown-menu');
      if (
        !$(this)
          .next()
          .hasClass('show')
      ) {
        $(this)
          .parents('.dropdown-menu')
          .first()
          .find('.show')
          .removeClass('show');
      }
      var $subMenu = $(this).next('.dropdown-menu');
      $subMenu.toggleClass('show');

      $(this)
        .parent('li')
        .toggleClass('show');

      $(this)
        .parents('li.nav-item.dropdown.show')
        .on('hidden.bs.dropdown', function(e) {
          $('.dropdown-menu .show').removeClass('show');
        });

      if (!$parent.parent().hasClass('navbar-nav')) {
        $el
          .next()
          .css({ top: $el[0].offsetTop, left: $parent.outerWidth() - 4 });
      }

      return false;
    });
  });

  // ElevateZoom Slider
  $('#zoom_01').elevateZoom({
    gallery: 'gallery',
    cursor: 'pointer',
    galleryActiveClass: 'active',
    imageCrossfade: true
  });

  //pass the images to Fancybox
  $('#zoom_01').bind('click', function(e) {
    var ez = $('#zoom_01').data('elevateZoom');
    $.fancybox(ez.getGalleryList());
    return false;
  });

  $('.slider').slick({
    dots: false,
    vertical: true,
    slidesToShow: 3,
    slidesToScroll: 5,
    verticalSwiping: true,
    arrow: true
  });
});
