var Swipes = new Swiper(".swiper-container", {
	loop: true,
	autoplay: {
		delay: 1500,
		disableOnInteraction: false,
	},
	direction: "vertical",
	navigation: {
		nextEl: ".next",
		prevEl: ".prev",
	},
	pagination: {
		el: ".swiper-pagination",
	}
});
Swipes.on('slideChangeTransitionStart', function () {
	const index_currentSlide = this.realIndex;
	document.querySelectorAll('.next').forEach((el, ind) => {
		if (ind === index_currentSlide) {
			el.style.color = 'black';
			el.querySelector('.line').style.width = '80px'
			el.querySelector('.line').style.backgroundColor = 'black'
		} else {
			el.style.color = 'gray';
			el.querySelector('.line').style.width = '20px'
			el.querySelector('.line').style.backgroundColor = 'gray'
		}
	})
});
Swipes.on('slideChangeTransitionEnd', function () {
	document.querySelector('.next').classList.remove('namehrem')
});


document
	.querySelector(".rightside .pages:last-child a")
	.addEventListener("click", function (e) {
		e.preventDefault();
		document.querySelector("#hamburgermenu").style.display = "block";
	});

document.querySelector(".closeBtn").addEventListener("click", function (e) {
	e.preventDefault();
	document.querySelector("#hamburgermenu").style.display = "none";
});
