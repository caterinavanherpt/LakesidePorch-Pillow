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
								setgallerySize: false,
								lazyload: 2
				});
});