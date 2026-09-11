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
  gsap.from(".navlink", {
  stagger: 0.2,
  y: 10,
  duration: 0.7,
  ease: "power2.out",
  opacity: 0,
});

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

if (!reduceMotion && !isTouch)
  gsap.from(".anim2", {
  y: 50,
  stagger: 0.3,
  opacity: 0,
  ease: "expo.out",
  duration: 1,
});

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
  gsap.from("#imgntext img", {
  y: "70",
  opacity: 0,
  duration: 1.5,
  ease: "expo.inOut",
});

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

const joinBtn = document.querySelector("#ftext button");
const futureVideo = document.querySelector("#future video");

joinBtn.addEventListener("mouseover", function () {
  // preload="none" means the video has no data until we ask for it
  futureVideo.play().catch(() => {});
  gsap.to(futureVideo, {
    opacity: 1,
    duration: 1,
    ease: "power4.out",
  });
});

joinBtn.addEventListener("mouseleave", function () {
  gsap.to(futureVideo, {
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    onComplete: () => futureVideo.pause(),
  });
});
