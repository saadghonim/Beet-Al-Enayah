$(document).ready(function() {

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~start header~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */
if ($(window).width() <= 992) {
  $(".bt_bars").click(function() {
      $(".navbar_").addClass("open_");
      $(".moboverlay").fadeIn('500');
      $(".bars_icon").addClass("close_");
      $("body").addClass("over");
  });

  $(".moboverlay").click(function() {
      $(".navbar_").removeClass("open_");
      $(".moboverlay").fadeOut('500');
      $(".bars_icon").removeClass("close_");
      $("body").removeClass("over");

  });
  $(".lnr-cross").click(function() {
      $(".navbar_").removeClass("open_");
      $(".moboverlay").fadeOut('500');
      $(".bars_icon").removeClass("close_");
      $("body").removeClass("over");

  });
  $(".menu_hover").click(function() {
      $(".drop_menu").slideToggle("500");
  })
  $(".dropdown-lang").click(function() {
    $(".dropdown-content-lang").slideToggle(400);
})
};
$(".signin_mob").click(function(){
    $(".drop_user").slideToggle(500);
})
$(".icon_search").click(function(){
    $(".input_s").slideToggle(500);
    $(this).children("span").toggleClass("open-search close-search");
    
})
$(".overlay-box").click(function() {
    $(".moboverlay").addClass("open-search")
    $(".moboverlay").removeClass("close-search")
})
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~end header~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~start sliders~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */

// ~~~~~~~~~~~~~~~~~big slider~~~~~~
  $('.big_slider .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    rtl: $("html").attr("dir") == "rtl" ? true : false,
    navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
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





/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~start new~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */
if ($(window).width() < 992){
  $(".new_add").removeClass("row");
  $(".add_item").removeClass("col-md-3");
  $(".new_add").addClass("owl-carousel");
  $(".add_item").addClass("item");
}else{
  $(".new_add").addClass("row");
  $(".add_item").addClass("col-md-3");
}

$('.new .owl-carousel').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  responsive:{
      0:{
          items:2,
          margin:15
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
});

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~end new ~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~start bestseller ~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */

$('.bestseller .owl-carousel').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
  responsive:{
      0:{
          items:2,
          margin:15
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
});

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~end bestseller~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~start ~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */
$('.brands .owl-carousel').owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  rtl: true,
  responsive: {
      0: {
          items: 2
      },
      600: {
          items: 4
      },
      1000: {
          items: 6
      }
  }
})

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~end ~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */
});

$(window).load(function() {
  $(".preloader-sa").fadeOut();
});