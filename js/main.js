
const swiperFeature = new Swiper(".feature-slider__swiper-container", {
  // Optional parameters
  loop: true,
  slidesPerView: 3,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-buttons__prev",
    prevEl: ".slider-buttons__next",
  },
});



window.onbeforeunload = function () {
  window.scrollTo(0, 10000000);
};


