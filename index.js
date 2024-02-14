const content = document.querySelector(".content");

let xTo = gsap.quickTo(".hideen-content", "--x", {
    duration: 0.4,
    ease: "power4.out",
  }),
  yTo = gsap.quickTo(".hideen-content", "--y", {
    duration: 0.4,
    ease: "power4.out",
  });

let t1 = gsap.timeline({ paused: true });
t1.to(".hideen-content", {
  "--size": 250,
  duration: 0.75,
  ease: "back.out(1.7)",
});

let hoveringContent = gsap.utils.toArray("p", content);
