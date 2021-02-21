"use strict";

$(function () {
				var $hamburger = $(".hamburger");
				$hamburger.on("click", function (e) {
					$hamburger.toggleClass("is-active");
					$(".nav__list").toggleClass("hide");
					$(".nav__list").toggleClass("show");
					$(".nav").toggleClass("nav__show");
				});

				$('.gallery').flickity({
					// lazyLoad: true,
					lazyLoad: 2,
					draggable: '>1',
					wrapAround: true,
					adaptiveHeight: true,
					fullscreen: true
				});
});