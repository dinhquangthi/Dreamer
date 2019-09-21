(function ($) {
	({
		init: function () {
			var self = this;

			$(function () {
				self.setUaClass();
				self.setSmoothScroll();
				self.feature();
				self.swiperSlide();
				self.luxyScroll();
		
			});
		},

		
		setUaClass: function () {
			var self = this;
			var ua = navigator.userAgent;
			var body = $('body');

			if (typeof window.orientation !== "undefined") {
				$.isMobile = true;
				body.addClass('mobile');
			} else {
				// body.addClass('pc');
			}

			if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPad') > 0) {
				body.addClass('ios');
			} else if (ua.indexOf('Android') > 0) {
				body.addClass('android');
			}
		},

	
		setSmoothScroll: function () {
			var anchors = $('a[href^="#"]');
			var win = $(window);
			win.on('load', function () {
				anchors.each(function () {
					var hash = this.hash;
					var hashOffset;

					$(this).on('click', function (e) {
						e.preventDefault();
						hashOffset = (hash === '') ? { top: 0, left: 0 } : $(hash).offset();
						$('html, body').animate({ scrollTop: hashOffset.top }, 400, 'swing');
					});
				});
			});
		},

		
		feature: function () {	
		},

		swiperSlide: function(){
			var swiper = new Swiper('.swiper-container', {
				navigation: {
				  nextEl: '.btn-next',
				  prevEl: '.btn-prev',
				},
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
				  },
				loop: true,
			  });
		},

		luxyScroll: function(){
			luxy.init();
		}

	}.init());


	
}(jQuery));