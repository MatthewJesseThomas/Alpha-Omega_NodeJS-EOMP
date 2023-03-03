class Carousel {
	/**
	 *
	 * @param {*} carouselId
	 * @param {*} itemsClassNames
	 * @param {*} carouselNavId
	 * @param {*} leftButtonId
	 * @param {*} rightButtonId
	 * @param {*} autoChange
	 * @param {*} autoChangeDelay
	 * @param {*} loop
	 * @param {*} mobileTouch
	 * @returns
	 */
	constructor(
	carouselId,
	itemsClassNames,
	carouselNavId = false,
	leftButtonId = false,
	rightButtonId = false,
	autoChange = true,
	autoChangeDelay = 5000,
	loop = true,
	mobileTouch = true
	) {
	if (!carouselId) {
		console.error("Carousel id not defined");
		return;
	
	}
	if (!itemsClassNames) {
		console.error("Carousel items class name not defined");
		return;
	}
  
	this.carousel = document.getElementById(carouselId);
  
	if (!this.carousel) {
		console.error("Carousel not found");
		return;
	}
  
	this.itemsClassNames = itemsClassNames;
	this.items = this.carousel.querySelectorAll("." + itemsClassNames);
  
	if (this.items.length < 2) {
		console.error("Carousel items not found");
		return;
	}
  
	if (carouselNavId) {
		this.carouselNav = document.getElementById(carouselNavId);
		if (!this.carouselNav) {
		console.error("Carousel nav not found");
		return;
		}
		for (let i = 0; i < this.items.length; i++) {
		const button = document.createElement("button");
		button.classList.add("carousel-nav-point");
		button.addEventListener("click", () => {
			this.change(i);
		});
		this.carouselNav.appendChild(button);
		}
	}
  
	if (leftButtonId) {
		this.leftButton = document.getElementById(leftButtonId);
	}
  
	if (rightButtonId) {
		this.rightButton = document.getElementById(rightButtonId);
	}
  
	this.autoChange = autoChange;
	this.autoChangeDelay = autoChangeDelay;
	this.loop = loop;
	this.mobileTouch = mobileTouch;
  
	this.touchStartX = 0;
	this.touchEndX = 0;
	this.isTouching = false;
  
	this.timeout = null;

	this.carouselEffect = () => {
		if (this.carousel.classList.contains("slide-effect")) {
		return "slide";
		} else if (this.carousel.classList.contains("fade-effect")) {
		return "fade";
		}
		return false;
	};
  
	if (!this.carouselEffect()) {
		console.error("Carousel effect not defined");
		return;
	}
  
	this.itemWidth = parseInt(
		window.getComputedStyle(this.items[0]).getPropertyValue("width")
	);
	this.carouselGap =
		parseInt(
		window.getComputedStyle(this.carousel).getPropertyValue("gap")
		) || 0;
  
	this.init();
	}
  
	init() {
	this.items[0].classList.add("active");
	if (this.carouselNav) {
		this.carouselNav
		.querySelectorAll(".carousel-nav-point")[0]
		.classList.add("active");
	}
  
	if (!this.loop && this.leftButton && this.rightButton) {
		this.updateArrows();
	}
	if (this.leftButton) {
		this.leftButton.addEventListener("click", this.left.bind(this));
	}
	if (this.rightButton) {
		this.rightButton.addEventListener("click", this.right.bind(this));
	}
	if (this.autoChange) {
		this.timeout = setTimeout(
		this.automaticChange.bind(this),
		this.autoChangeDelay
		);
	}
	if (this.mobileTouch) {
		this.carousel.addEventListener(
		"touchstart",
		this.touchStart.bind(this),
		false
		);
		this.carousel.addEventListener(
		"touchmove",
		this.touchMove.bind(this),
		false
		);
		this.carousel.addEventListener(
		"touchend",
		this.touchEnd.bind(this),
		false
		);
	}
	}
  
	automaticChange() {
	this.right();
	}
  
	getActualTransform(item) {
	let actualTransform = item.style.transform;
	if (actualTransform) {
		actualTransform = actualTransform.split("(")[1].split(")")[0];
		actualTransform = parseInt(actualTransform);
	} else {
		actualTransform = 0;
	}
	return actualTransform;
	}
  
	slideLeft(last = false) {
	if (last) {
		this.items.forEach((item) => {
		const end =
			this.itemWidth * (this.items.length - 1) +
			this.carouselGap * (this.items.length - 1);
		for (let i = 0; i < end; i++) {
			setTimeout(() => {
			item.style.transform = `translateX(${-i}px)`;
			}, 1);
		}
		});
	} else {
		this.items.forEach((item) => {
		const actualTransform = this.getActualTransform(item);
		item.style.transform = `translateX(${
			actualTransform + this.itemWidth + this.carouselGap
		}px)`;
		});
	}
	}
  
	slideRight(last = false) {
	if (last) {
		this.items.forEach((item) => {
		const actualTransform = this.getActualTransform(item);
		for (let i = actualTransform; i < 0; i++) {
			setTimeout(() => {
			item.style.transform = `translateX(${i}px)`;
			}, 1);
		}
		});
	} else {
		this.items.forEach((item) => {
		const actualTransform = this.getActualTransform(item);
		item.style.transform = `translateX(${
			actualTransform - (this.itemWidth + this.carouselGap)
		}px)`;
		});
	}
	}
  
	left() {
	clearTimeout(this.timeout);
	const activeItem = this.carousel.querySelector(".active");
	const previousItem = activeItem.previousElementSibling;
  
	if (previousItem) {
		activeItem.classList.remove("active");
		previousItem.classList.add("active");
  
		if (this.carouselEffect() === "slide") {
		this.slideLeft();
		}
	} else if (this.loop) {
		activeItem.classList.remove("active");
		this.items[this.items.length - 1].classList.add("active");
  
		if (this.carouselEffect() === "slide") {
		this.slideLeft(true);
		}
	}
  
	if (this.carouselNav) {
		this.updateNav();
	}
  
	if (!this.loop && this.leftButton && this.rightButton) {
		this.updateArrows();
	}
  
	if (this.autoChange) {
		this.timeout = setTimeout(
		this.automaticChange.bind(this),
		this.autoChangeDelay
		);
	}
	}
  
	right() {
	clearTimeout(this.timeout);
	const activeItem = this.carousel.querySelector(".active");
	const nextItem = activeItem.nextElementSibling;
  
	if (nextItem) {
		activeItem.classList.remove("active");
		nextItem.classList.add("active");
  
		if (this.carouselEffect() === "slide") {
		this.slideRight();
		}
	} else if (this.loop) {
		activeItem.classList.remove("active");
		this.items[0].classList.add("active");
  
		if (this.carouselEffect() === "slide") {
		this.slideRight(true);
		}
	}
  
	if (this.carouselNav) {
		this.updateNav();
	}
  
	if (!this.loop && this.leftButton && this.rightButton) {
		this.updateArrows();
	}
  
	if (this.autoChange) {
		this.timeout = setTimeout(
		this.automaticChange.bind(this),
		this.autoChangeDelay
		);
	}
	}
  
	updateNav() {
	const activeItem = this.carousel.querySelector(".active");
	const activeIndex = Array.prototype.indexOf.call(this.items, activeItem);
	const activeNavPoint = this.carouselNav.querySelector(".active");
	activeNavPoint.classList.remove("active");
	this.carouselNav
		.querySelectorAll(".carousel-nav-point"),
		[activeIndex].classList.add("active");
	}
  
	change(index) {
	clearTimeout(this.timeout);
  
	const actualIndex = Array.prototype.indexOf.call(
		this.items,
		this.carousel.querySelector(".active")
	);
  
	if (index > actualIndex) {
		for (let i = actualIndex; i < index; i++) {
		this.right();
		}
	} else if (index < actualIndex) {
		for (let i = actualIndex; i > index; i--) {
	this.left();
		}
	}
  
	if (this.carouselNav) {
		this.updateNav();
	}
  
	if (!this.loop && this.leftButton && this.rightButton) {
		this.updateArrows();
	}
  
	if (this.autoChange) {
		this.timeout = setTimeout(
		this.automaticChange.bind(this),
		this.autoChangeDelay
		);
	}
	}
  
	touchStart(e) {
	if (!this.isTouching) {
		this.isTouching = true;
		this.touchStartX = e.changedTouches[0].screenX;
	}
	}
  
	touchMove(e) {
	if (this.isTouching) {
		this.touchEndX = e.changedTouches[0].screenX;
	}
	}
  
	touchEnd() {
	if (this.isTouching) {
		this.isTouching = false;
		if (this.touchStartX > this.touchEndX) {
		this.right();
		} else if (this.touchStartX < this.touchEndX) {
		this.left();
		}
	}
	}
  
	updateArrows() {
	if (this.leftButton) {
		this.leftButton.removeAttribute("disabled");
	}
	if (this.rightButton) {
		this.rightButton.removeAttribute("disabled");
	}
	if (
		this.carousel.querySelector(".active").previousElementSibling === null
	) {
		if (this.leftButton) {	  this.leftButton.setAttribute("disabled", true);
		}	  }	  if (this.carousel.querySelector(".active").nextElementSibling === null) {
		if (this.rightButton) {		  this.rightButton.setAttribute("disabled", true);
		}
 }
	}
  }
  
  new Carousel(
	"carousel",
	"carousel-item",
	"carousel-nav",
	"left",
	"right",
	false,
	0,
	false,
	true
  );
  new Carousel(
	"carousel2",
	"carousel-item",
	null,
	"left2",
	"right2",
	true,
	5000,
	true,
	true
  );
  new Carousel(
	"carousel3",
	"carousel-item",
	"carousel-nav3",
	null,
	null,
	true,
	5000,
	true,
	true
  );
  new Carousel(
	"carousel4",
	"carousel-item",
	null,
	"left3",
	"right3",
	true,
	5000,
	true,
	true
  );

  




