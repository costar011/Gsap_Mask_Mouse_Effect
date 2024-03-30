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

// 가정: .hovering-content 클래스를 가진 모든 요소에 대해 이벤트 리스너를 추가하려고 한다.
let hoveringContent = document.querySelectorAll(".hovering-content");

hoveringContent.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    t1.restart();
  });
  el.addEventListener("mouseleave", () => {
    t1.reverse();
  });
});

/****************************************************************
                    Btn Hovering
****************************************************************/

let btnT1 = gsap.timeline({ paused: true });
btnT1.to(".hidden-content", {
  "--size": 20,
  duration: 0.75,
  ease: "back.out(1.7)",
});

/****************************************************************
          Add Mask on First Mouse Movement
****************************************************************/

window.addEventListener("mousemove", onFirstMove);

function onFirstMove(e) {
  window.addEventListener("mousemove", onFirstMove);
  gsap.set(".hidden-content", { autoAlpha: 1, "--x": e.pageX, "--y": e.pageY });

  window.addEventListener("mousemove", (e) => {
    yTo(e.pageY);
    xTo(e.pageX);
  });
}

/****************************************************************
              Only for the preview image
****************************************************************/

gsap.set(".hidden-content");
