var crsr = document.querySelector("#cursor");
var Blur = document.querySelector("#cursorBlur");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 10 + "px";
  crsr.style.top = dets.y + "px";
  Blur.style.left = dets.x - 100 + "px";
  Blur.style.top = dets.y - 100 + "px";
});

var h4all = document.querySelectorAll("#nav h4");

h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px rgb(4, 154, 255)";
    crsr.style.backgroundColor = "rgb(4, 154, 255)";
  });
});
gsap.to("#nav", {
  backgroundColor: "rgb(0, 25, 88)",
  height: "80px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -101",
    end: "top -5%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -31%",
    end: "top -100%",
    scrub: 1,
  },
});
const navright = document.getElementsByClassName("navdom");
gsap.to(navright, {
  x: 200,
  duration: 1,
  scrollTrigger: {
    trigger: "#h4",
    scroller: "body",
    start: "top -10%",
    end: "top -70%",
    scrub: 1,
  },
});
const myImg = document.getElementById("myImg");
gsap.to(myImg, {
  x: -150,
  duration: 1,
  scrollTrigger: {
    trigger: myImg,
    scroller: "body",
    start: "top -101 ",
    end: "top -70%",
    scrub: 1,
  },
});

gsap.from("#about img ,#aboutinfo ", {
  y: 90,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#about",
    scroller: "body",
    start: "top 50%",
    end: "top 40%",
    scrub: 1,
  },
});

gsap.from(".card", {
  x: 50,
  opacity: 0,
  stagger: 0.5,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 70%",
    end: "top 50%",
    scrub: 1,
  },
});

gsap.from("#colon1", {
  x: -70,
  y: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 30%",
    end: "top 60%",
    scrub: 2,
  },
});
gsap.from("#colon2", {
  x: 70,
  y: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 30%",
    end: "top 60%",
    scrub: 2,
  },
});

gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 75%",
    end: "top 65%",
    scrub: 1,
  },
});
