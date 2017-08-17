$(function() {
	var swiper = new Swiper('.swiper-container', {
		slidesPerGroup: 1,
		slidesPerView: 4,
		paginationClickable: true,
		spaceBetween: 0,
		autoplay: 3000,
		autoplayDisableOnInteraction: false,
		spend: 3000,
		loop: true,
		prevButton: '.swiper-button-prev',
		nextButton: '.swiper-button-next',
		breakpoints: {
			1280:{
				slidesPerView: 3
			},
			992: {
				slidesPerView: 2
			},
			480:{
				slidesPerView: 1
			}
			
		}
	});
	$('.jquery-reslider').reSlider({
		speed: 800, //设置轮播的高度
		delay: 5000, //设置轮播的延迟时间
		imgCount: 3, //设置轮播的图片数
		dots: true, //设置轮播的序号点
		autoPlay: true //设置轮播是否自动播放

	});
});
$(function(){
	new WOW().init();
});;