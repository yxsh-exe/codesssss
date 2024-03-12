var tl = gsap.timeline();

tl.from("#nav img,#nav h3,#nav h4,#nav button", {
  y: -100,
  duration: 0.5,
  delay: 0.5,
  opacity: 0,
  stagger: 0.1,
});

tl.from("#main h1:nth-child(2)", {
  x: -100,
  duration: 0.4,
  opacity: 0,
});
tl.from("#main h1:nth-child(3)", {
  y: 100,
  duration: 0.4,
  opacity: 0,
});
tl.from("#main h1:nth-child(4)", {
  x: 100,
  duration: 0.4,
  opacity: 0,
});
tl.from("#left-img", {
  y: -100,
  duration: 0.4,
  opacity: 0,
  scale: 0,
});
tl.from("#right-img", {
  y: 100,
  duration: 0.4,
  opacity: 0,
  scale: 0,
});
