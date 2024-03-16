var tl = gsap.timeline();
tl.from("#nav", {
  opacity: 0,
  delay: 0.5,
  x: 50,
});
tl.from("#nav h1,#nav h4,#nav h3", {
  y: -20,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
});

tl.from("#left h1", {
  duration: 0.6,
  x: -500,
  opacity: 0,
  stagger: 0.5,
});
tl.from("#right img", {
  scale: 0.5,
  opacity: 0,
  duration: 0.3,
});
gsap.from("#page2 .box", {
  x: 900,
  scale: 0,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page2 .box",
    scroller: "body",
  },
});
