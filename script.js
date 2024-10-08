function lenislib() {
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
lenislib();

function navBar() {
  let lastScrollTop = 0;
  let navbar = document.querySelector("nav");
  window.addEventListener("scroll", function () {
    let st = window.scrollY || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      gsap.to(navbar, {
        y: "-100%",
      });
    } else {
      gsap.to(navbar, {
        y: "0%",
      });
    }
    lastScrollTop = st;
  });
}
navBar();
function navbarAnimation() {
  let ham = document.querySelector(".ham i");
  let a = document.querySelectorAll(".res-menu li a");
  flag = false;
  let tl = gsap.timeline();
  ham.addEventListener("click", function (e) {
    if (flag === true) {
      tl.to(".res-menu", {
        scale: 1,
        right: 0,
      });
      tl.from(".res-menu a, .res-menu div", {
        y: 100,
        delay: 0.3,
        opacity: 0,
        stagger: 0.2,
      });
      ham.classList = "ri-close-line";
      flag = false;
    } else {
      gsap.to(".res-menu", {
        right: "-100%",
        duration: 0.8,
      });
      ham.classList = "ri-menu-line";
      flag = true;
    }
  });
  a.forEach(function (e) {
    e.addEventListener("click", function () {
      tl.to(".res-menu", {
        right: "-100%",
        duration: 0.8,
      });
      ham.classList = "ri-menu-line";
      flag = true;
    });
  });
}
navbarAnimation();
function introAnimation() {
  let tl = gsap.timeline();
  tl.from(
    ".name,.nav-link",
    {
      y: 100,
      delay: 0.3,
      opacity: 0,
      stagger: 0.5,
    },
    "a"
  );
  tl.from(
    ".intro-text h1,.intro-text h2,.intro-text p,.intro-text a",
    {
      y: 100,
      delay: 0.7,
      opacity: 0,
      stagger: 0.4,
    },
    "a"
  );
  tl.from(
    ".intro-image img",
    {
      opacity: 0,
      delay: 0.4,
      duration: 5,
      repeat: 0,
      scale: 0,
    },
    "a"
  );
}
introAnimation();
function aboutAnimation() {
  gsap.from(".about-logo,.about-text h2,.about-text p,.about-text a ", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      end: "bottom bottom",
      scrub: 2,
    },
    opacity: 0,
    y: -100,
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
      start: "top 90%",
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
function contactAnimation() {
  let tl = gsap.timeline();
  tl.from(".contact-logo", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
      end: "bottom bottom",
      scrub: 2,
    },
    opacity: 0,
    y: -100,
    // delay: 0.1,
  });
  tl.from(".contact-form", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
      end: "bottom bottom",
      scrub: 2,
    },
    opacity: 0,
    y: -100,
    delay: 0.2,
  });
}
contactAnimation();
