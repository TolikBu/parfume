const featureSlider = new Swiper(".feature-slider__swiper-container", {
  loop: true,
  slidesPerView: 3,

  navigation: {
    nextEl: ".slider-buttons__prev",
    prevEl: ".slider-buttons__next",
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

const serviceSlider = new Swiper(".service-slider__container", {
  // loop: true,
  slidesPerView: 2,
  spaceBetween: 35,

  navigation: {
    nextEl: ".service-slider__button--prev",
    prevEl: ".service-slider__button--next",
    disabledClass: "service-slider__button-disabled",
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

// window.onbeforeunload = function () {
//   window.scrollTo(0, 1000000);
// };
