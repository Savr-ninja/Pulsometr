$(document).ready(function () {
  $(".carousel__inner").slick({
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    prevArrow:
      '<button type="button" class="slick-prev"> <img src="../img/slider/arrow-prev.svg"> </button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="../img/slider/arrow-next.svg"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});
$(function () {
  $("ul.catalog__tabs").on(
    "click",
    "li:not(.catalog__tab--active)",
    function () {
      $(this)
        .addClass("catalog__tab--active")
        .siblings()
        .removeClass("catalog__tab--active")
        .closest("div.container")
        .find("div.catalog__content")
        .removeClass("catalog__content--active")
        .eq($(this).index())
        .addClass("catalog__content--active");
    }
  );
});
