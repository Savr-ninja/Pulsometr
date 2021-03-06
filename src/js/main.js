$(document).ready(function () {
  $(".carousel__inner").slick({
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    prevArrow:
      '<button type="button" class="slick-prev"> <img src="img/slider/arrow-prev.svg?raw=true"> </button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="img/slider/arrow-next.svg?raw=true"></button>',
    responsive: [
      {
        breakpoint: 1025,
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
    function toggleSlide(item) {
      $(item).each(function (i) {
        $(this).on("click", function (e) {
          e.preventDefault();
          ``;
          $(".catalog-item__content")
            .eq(i)
            .toggleClass("catalog-item__content--active");
          $(".catalog-item__list")
            .eq(i)
            .toggleClass("catalog-item__list--active");
        });
      });
    }
    toggleSlide(".catalog-item__link");
    toggleSlide(".catalog-item__link-back");
  });

  // Modal
  $("[data-modal=consultation]").on("click", function () {
    $(".overlay, #consultation").fadeIn(".5s");
  });

  $(".modal__close").on("click", function () {
    $(".overlay, #consultation, #order, #gratitude").fadeOut(".5s");
  });

  $("[data-modal=order]").each(function (i) {
    $(this).on("click", function () {
      $("#order .modal__descr").text(
        $(".catalog-item__sub-title").eq(i).text()
      );
      $(".overlay, #order").fadeIn(".5s");
    });
  });

  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        phone: "required",
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: "????????????????????, ?????????????? ???????? ??????",
          minlength: jQuery.validator.format("?????????????? {0} ??????????????!"),
        },
        phone: "????????????????????, ?????????????? ???????? ?????????? ????????????????",
        email: {
          required: "????????????????????, ?????????????? ???????? ??????????",
          email: "?????????????????????? ???????????? ?????????? ??????????",
        },
      },
    });
  }

  validateForms("#consultation-form");
  validateForms("#consultation form");
  validateForms("#order form");
  $("input[name=phone]").mask("+7 (999) 999-99-99");

  $("form").submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "../mailer/smart.php",
      data: $(this).serialize(),
    }).done(function () {
      $(this).find("input").val("");
      $("#consultation, #order").fadeOut();
      $(".overlay, #gratitude").fadeIn(".5s");

      $("form").trigger("reset");
    });
    return false;
  });
  // Smooth scroll and page up

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1800) {
      $(".page-up").fadeIn();
    } else {
      $(".page-up").fadeOut();
    }

  });
  
  $("a[href^='#up']").click(function () {
	const _href = $(this).attr("href");
	$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
	return true;
  });
});
