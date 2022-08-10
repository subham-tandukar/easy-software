var loader = document.querySelector(".pre-loader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});


var swiper = new Swiper(".mySwiper-product", {
  slidesPerView: 4,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".mySwiper-blog", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".mySwiper-testimonials", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper-about-testimonials", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper-partner", {
  slidesPerView: 4,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
  },
});

$(document).ready(function () {
  $(".carousel-teams").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    margin: 10,
    center: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    margin: 90,
    responsive: {
      0: {
        items: 1,
      },
      800: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

$(document).ready(function () {
  $(".carousel-partner").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    margin: 90,
    responsive: {
      0: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});



$(document).ready(function () {
  $(".carousel-similar-news").owlCarousel({
    loop: false,
    nav: false,
    dots: true,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      800: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

$(window).scroll(function () {
  var h = $(document).height();
  var hh = $(document).scrollTop();
  if (hh > h / 1.5) {
    $("#top").css({
      top: "70%",
      opacity: "1",
      visibility: "visible",
      transform: "scale(1)",
    });
  } else {
    $("#top").css({
      top: "0",
      opacity: "0",
      visibility: "hidden",
      transform: "scale(0.1)",
    });
  }
});
