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

function aboutAnimation() {
  gsap.from(".about-logo,.about-text h2,.about-text p,.about-text a ", {
    scrollTrigger: {
      trigger: about,
      start: "top 60%",
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
  gsap.from(".skill-logo", {
    scrollTrigger: {
      trigger: skills,
      start: "top 80%",
      end: "bottom 20%",
      scrub: 2,
    },
    opacity: 0,
    y: -100,
    delay: 0.1,
  });
  document.querySelectorAll(".skill-images img").forEach(function (elem) {
    gsap.from(elem, {
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
  gsap.from(".project-logo", {
    scrollTrigger: {
      trigger: projects,
      start: "top 90%",
      end: "bottom 20%",
      scrub: 2,
    },
    opacity: 0,
    y: -100,
    delay: 0.1,
  });
  document.querySelectorAll(".myProject").forEach(function (elem) {
    gsap.from(elem, {
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
