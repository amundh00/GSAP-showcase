document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Progress bar animation
  gsap.to(".progress-bar", {
    width: "100%",
    scrollTrigger: {
      scrub: true, // Smooth scroll syncing
    },
  });

  // Hero section text animation
  gsap.from(".hero h1, .hero p", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3, // Stagger heading and paragraph
    scrollTrigger: {
      trigger: ".hero",
      start: "top 80%", // Start animation when 80% of the hero is in view
      end: "top 50%",
      scrub: false,
    },
  });

  // Fade-in section animation
  gsap.from(".fade-in", {
    opacity: 0,
    y: 50, // Start slightly below
    duration: 3.5,
    scrollTrigger: {
      trigger: ".fade-in",
      start: "top 80%", // Trigger when fade-in enters viewport
      end: "top 50%",
      scrub: false,
    },
  });
  

  // Parallax effect
  gsap.to(".parallax h2", {
    y: -80, // Move text upwards
    scrollTrigger: {
      trigger: ".parallax",
      start: "top bottom",
      end: "bottom top",
      scrub: true, // Smooth scroll syncing
    },
  });
});
