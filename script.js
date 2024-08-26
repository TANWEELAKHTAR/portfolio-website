function mouseFollower() {
  let intro = document.querySelector("#introduction");
  let text = document.querySelector(".intro-text");
  intro.addEventListener("mousemove", function (dets) {
    gsap.to(".cursor", {
      x: dets.x,
      y: dets.y,
      opacity: 1,
      scale: 1,
      ease: "circ",
    });
  });

  intro.addEventListener("mouseleave", function (dets) {
    gsap.to(".cursor", {
      opacity: 0,
    });
  });
  text.addEventListener("mousemove", function (dets) {
    gsap.to(".cursor", {
      scale: 10,
      ease: "circ",
    });
  });

  text.addEventListener("mouseleave", function (dets) {
    gsap.to(".cursor", {
      opacity: 0,
    });
  });
}
mouseFollower();

function introAnimation() {
  let tl = gsap.timeline();
  tl.from(".name,nav a",{
      y: 100,
      delay: 0.3,
      opacity: 0,
      stagger: 0.5,
    },"a");
  tl.from(".intro-text h1,.intro-text h2,.intro-text p,.intro-text a",{
      y: 100,
      delay: 0.7,
      opacity: 0,
      stagger: 0.4,
    },"a");
  tl.from(".intro-image img",{
      opacity: 0,
      rotateY: 180,
      delay: 0.4,
      duration: 5,
      repeat: 0,
    },"a");
}
introAnimation();
function aboutAnimation() {
  gsap.from(".about-logo,.about-text h2,.about-text p,.about-text a ", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 70%",
      end: "bottom bottom",
      scrub: 2,
    },
    opacity: 0,
    y: -100,
    delay: 0.1,
  });
}
aboutAnimation();

function skillAnimation() {
  let tl = gsap.timeline();
  tl.from(".skill-logo", {
    scrollTrigger: {
      trigger: "#skills",
      start: "top 80%",
      end: "bottom 20%",
      scrub: 2,
    },
    opacity: 0,
    y: -100,
    delay: 0.1,
  });
  document.querySelectorAll(".skill-images img").forEach(function (elem) {
    tl.from(elem, {
      scrollTrigger: {
        trigger: elem,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 2,
      },
      opacity: 0,
      delay: 0.2,
    });
  });
}
skillAnimation();

function projectAnimation() {
  let tl = gsap.timeline();
  tl.from(".project-logo", {
    scrollTrigger: {
      trigger: projects,
      start: "top 70%",
      end: "bottom 20%",
      scrub: 2,
    },
    opacity: 0,
    y: -100,
    delay: 0.1,
  });
  document.querySelectorAll(".myProject").forEach(function (elem) {
    tl.from(elem, {
      scrollTrigger: {
        trigger: elem,
        start: "top 70%",
        end: "bottom 20%",
        scrub: 2,
      },
      opacity: 0,
      delay: 0.2,
    });
  });
}
projectAnimation();
