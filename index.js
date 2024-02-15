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

hoveringContent.forEach((e) => {
  e1.addEventListener("mouseenter", () => {
    t1.restart();
  });

  e1.addEventListener("mouseleave", () => {
    t1.restart();
  });
})