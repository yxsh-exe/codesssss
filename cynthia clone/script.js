const scroll = new LocomotiveScroll({
	el: document.querySelector("#main"),
	smooth: true,
});
var timeout;

var xscale = 1;
var yscale = 1;

var xprev = 0;
var yprev = 0;

function circleanim() {
	window.addEventListener("mousemove", function (dets) {
		this.clearTimeout(timeout);
		xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
		yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

		xprev = dets.clientX;
		yprev = dets.clientY;

		movecursor(xscale, yscale);
		timeout = this.setTimeout(function () {
			document.querySelector(
				"#cursor"
			).style.transform = `translate(${dets.x}px,${dets.y}px) scale(1,1)`;
		}, 50);
	});
}

function movecursor() {
	window.addEventListener("mousemove", function (dets) {
		document.querySelector(
			"#cursor"
		).style.transform = `translate(${dets.x}px,${dets.y}px) scale(${xscale},${yscale}`;
	});
}

function firstPageAnimate() {
	var tl = gsap.timeline();

	tl.from("#nav", {
		y: "-10",
		opacity: "0",
		ease: Expo.easeInOut,
		duration: 1,
	});
	tl.to(".bln", {
		y: 0,
		ease: Expo.easeInOut,
		duration: 1.5,
		stagger: 0.2,
	});
	tl.from("#hf", {
		ease: Expo.easeInOut,
		duration: 1,
		delay: -0.5,
		opacity: "0",
		y: "10",
	});
}

circleanim();
firstPageAnimate(); // animate
movecursor();

document.querySelectorAll(".elem").forEach(function (elem) {
	var rotate = 0;
	var different = 0;
	elem.addEventListener("mousemove", function (dets) {
		var diff = dets.clientY - elem.getBoundingClientRect().top;
		different = dets.clientX - rotate;
		rotate = dets.clientX;

		gsap.to(elem.querySelector("img"), {
			opacity: 1,
			ease: Power3,
			top: diff,
			left: dets.clientX,
			rotate: gsap.utils.clamp(-20, 20, different * 0.5),
		});
	});
	elem.addEventListener("mouseleave", function (dets) {
		gsap.to(elem.querySelector("img"), {
			opacity: 0,
			ease: Power3,
		});
	});
});
