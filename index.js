const content = document.querySelector(".content");

let xTo = gsap.quickTo(".hidden-content", "--x", {
    duration: 0.4,
    ease: "power4.out",
  }),
  yTo = gsap.quickTo(".hidden-content", "--y", {
    duration: 0.4,
    ease: "power4.out",
  });
