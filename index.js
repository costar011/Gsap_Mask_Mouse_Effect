const content = document.querySelector(".content");

let xTo = gsap.quickTo(".hidden-content", "--x", {
    duration: 0.4,
    ease: "power4.out",
  }),
  yTo = gsap.quickTo(".hidden-content", "--y", {
    duration: 0.4,
    ease: "power4.out",
  });

let t1 = gsap.timeline({ paused: true });
t1.to(".hidden-content", {
  "--size": 250,
  duration: 0.75,
  ease: "back.out(1.7)",
});

let hoveringContent.forEach((e1) => {
    e1.addEventListener("mouseenter", () => {
      t1.restart();
    });
    e1.addEventListener("mouseleave", () => {
      t1.reverse();
    });
  });

