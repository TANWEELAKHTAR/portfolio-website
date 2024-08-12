function svgAnimation() {
    var path = "M 10 100 Q 250 100 490 100";
var finalPath = "M 10 100 Q 250 100 490 100";

var string = document.querySelector(".line-partition");

string.addEventListener("mouseenter", function (dets) {
  // Using offsetX and offsetY to get the position relative to the element
  path = `M 10 100 Q ${dets.offsetX} ${dets.offsetY} 490 100`;
  console.log(path);
  
  gsap.to(".line-partition svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power3.inOut",
  });
});

string.addEventListener("mouseleave", function () {
  gsap.to(".line-partition svg path", {
    attr: { d: finalPath },
    duration: 0.3,
    ease: "elastic.out(1, 0.2)", // Adjusted easing function
  });
});
}
