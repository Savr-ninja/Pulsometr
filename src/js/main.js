$(document).ready(function () {
  $(".carousel__inner").slick({
		infinite: true,
		speed: 900,
		slidesToShow: 1,
		prevArrow: '<button type="button" class="slick-prev"> <img src="../img/slider/arrow-prev.svg"> </button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../img/slider/arrow-next.svg"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					arrows: false
			}
		}
		] 
	});
});
