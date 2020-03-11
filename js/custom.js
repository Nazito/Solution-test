$(window).load(function() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    $("body").addClass("ios");
  } else {
    $("body").addClass("web");
  }
  $("body").removeClass("loaded");
});
/* viewport width */
function viewport() {
  var e = window,
    a = "inner";
  if (!("innerWidth" in window)) {
    a = "client";
    e = document.documentElement || document.body;
  }
  return { width: e[a + "Width"], height: e[a + "Height"] };
}
/* viewport width */
$(function() {
  /* placeholder*/

  $("input, textarea").each(function() {
    var placeholder = $(this).attr("placeholder");
    $(this).focus(function() {
      $(this).attr("placeholder", "");
    });
    $(this).focusout(function() {
      $(this).attr("placeholder", placeholder);
    });
  });
  /* placeholder*/

  $(".burger-menu").click(function() {
    $(this).toggleClass("toggle-burger"), $(".head__nav").slideToggle();
    return false;
  });

  $("#popUp , .head-popUp_overlay").click(function() {
    $(this).toggleClass(".active"), $(".head-popUp").slideToggle();
    return false;
  });
});

$("#slider1").owlCarousel({
  items: 6,
  slideBy: 1,
  loop: true,
  nav: true,
  dots: false,
  pagination: true,
  autoplay: true,
  autoplayTimeout: 2500,

  responsive: {
    0: {
      items: 2
    },

    740: {
      items: 4
    },

    1220: {
      items: 5
    },

    1420: {
      items: 6
    }
  }
});

$("#slider2").owlCarousel({
  items: 3,
  slideBy: 1,
  loop: true,
  center: true,
  nav: false,
  animateOut: true,
  dots: false,
  pagination: true,
  navContainer: ".navigation",
  responsive: {
    0: {
      items: 1,
      slideBy: 1
    },
    740: {
      margin: 15
    },

    1100: {}
  }
});
$(document).ready(function() {
  $("#slyder3").bxSlider({
    minSlides: 1,
    nextText: "<img src='img/arrow-right.svg'>",
    prevText: "<img src='img/arrow-left.svg'>",
    infiniteLoop: false,
    hideControlOnEnd: true,
    pager: false
  });
});

var handler = function() {
  var height_footer = $("footer").height();
  var height_header = $("header").height();
  //$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});

  var viewport_wid = viewport().width;
  var viewport_height = viewport().height;

  if (viewport_wid <= 991) {
  }
};
$(window).bind("load", handler);
$(window).bind("resize", handler);
