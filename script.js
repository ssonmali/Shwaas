// Touch devices get native scrolling: the WebGL effects below are all
// hover-driven, and smooth-scroll hijacking fights momentum scrolling.
// Treat as touch only when the device has no fine pointer AND is narrow.
// `hover: none` alone misfires in some environments and would strip the
// effects from real desktop browsers.
const isTouch =
  window.matchMedia("(hover: none) and (pointer: coarse)").matches ||
  window.innerWidth <= 900;
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const scroll = isTouch
  ? null
  : new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });

//gsap animation
// Skipped on touch: a staggered fade on a wrapped mobile bar reads as
// flicker, and leaves links invisible if the tween never runs.
if (!reduceMotion && !isTouch)
  // fromTo, not from: a plain `from` leaves links stranded at opacity 0
  // if the tween is interrupted, and four of five were staying invisible.
  gsap.fromTo(
    ".navlink",
    { y: 10, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.08,
      duration: 0.5,
      ease: "power2.out",
      clearProps: "opacity,transform",
    }
  );

const forceHeadlineBreak = () => {
  const h1 = document.querySelector("#headings h1");
  if (!h1) return;
  const spans = [...h1.children];
  const spaceIdx = spans.findIndex((s) => !s.textContent.trim());
  if (spaceIdx > -1 && spans[spaceIdx + 1]) {
    spans[spaceIdx].style.display = "none";
    spans[spaceIdx + 1].style.clear = "both";
    h1.insertBefore(document.createElement("br"), spans[spaceIdx + 1]);
  }
};

if (!isTouch && !reduceMotion)
  Shery.textAnimate("#headings h1" /* Element to target.*/, {
  //Parameters are optional.
  style: 2,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

// Shery rebuilds the h1 asynchronously; re-insert the line break after.
if (!isTouch && !reduceMotion) {
  setTimeout(forceHeadlineBreak, 400);
} else {
  const h1 = document.querySelector("#headings h1");
  if (h1) h1.innerHTML = "Ephemeral<br />Equilibrium.";
}

if (!reduceMotion && !isTouch)
  gsap.fromTo(
    ".anim2",
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.15,
      ease: "expo.out",
      duration: 1,
      clearProps: "opacity,transform",
    }
  );

//img effects
if (!isTouch) Shery.imageEffect("#imgntext img", {
  style: 3,
  config: {
    uFrequencyX: { value: 11.45, range: [0, 100] },
    uFrequencyY: { value: 4.58, range: [0, 100] },
    uFrequencyZ: { value: 44.27, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 18.79 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.75 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.12, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

if (!isTouch) Shery.imageEffect(".imgff img", {
  style: 5,
  config: {
    a: { value: 2, range: [0, 30] },
    b: { value: -0.82, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.6666666666666666 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.24, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

if (!reduceMotion && !isTouch)
  gsap.fromTo(
    "#imgntext img",
    { y: 70, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "expo.inOut",
      clearProps: "opacity,transform",
    }
  );

if (!isTouch) Shery.imageEffect("#bimg", {
  style: 5,
  config: {
    a: { value: 0.46, range: [0, 30] },
    b: { value: -0.92, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 2.283231376136299 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 1.43, range: [1, 15] },
    durationOut: { value: 0.4, range: [0.1, 5] },
    durationIn: { value: 0.29, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.12, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 1.68, range: [0, 10] },
    metaball: { value: 0.18, range: [0, 2], _gsap: { id: 33 } },
    discard_threshold: { value: 0.79, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.66, range: [0, 2] },
    noise_scale: { value: 11.45, range: [0, 100] },
  },
  gooey: true,
});

const futureSection = document.querySelector("#future");
const futureVideo = document.querySelector("#future video");

// The whole section is the hover target, not just the button: the reveal
// is the best moment on the page and a button-sized hit area meant most
// visitors never found it.
const revealVideo = () => {
  futureVideo.play().catch(() => {});
  futureSection.classList.add("is-playing");
  gsap.to(futureVideo, { opacity: 1, duration: 1, ease: "power4.out" });
};

const hideVideo = () => {
  futureSection.classList.remove("is-playing");
  gsap.to(futureVideo, {
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    onComplete: () => futureVideo.pause(),
  });
};

if (!isTouch) {
  futureSection.addEventListener("mouseenter", revealVideo);
  futureSection.addEventListener("mouseleave", hideVideo);
} else {
  // No hover on touch: play it when the section scrolls into view.
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => (e.isIntersecting ? revealVideo() : hideVideo()));
    },
    { threshold: 0.55 }
  );
  io.observe(futureSection);
}

// Anchor links must go through locomotive: it sets html/body to
// overflow:hidden and translates #main, so a native hash jump moves the
// document to a scroll position that does not exist and the page can no
// longer be scrolled back.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    if (scroll) {
      scroll.scrollTo(target);
    } else {
      target.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    }
  });
});
