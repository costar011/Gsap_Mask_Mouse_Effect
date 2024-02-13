const content = document.querySelector(".content");

let xTo = gsap.quickTo(".hideen-content", "--x", {
    duration: 0.4,
    ease: "power4.out",
  }),
  yTo = gsap.quickTo(".hideen-content", "--y", {
    duration: 0.4,
    ease: "power4.out",
  });
