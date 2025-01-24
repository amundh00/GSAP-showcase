// script.js
gsap.registerPlugin(); // No extra plugins required here.

// Create a timeline
const timeline = gsap.timeline({ 
    defaults: { duration: 1, ease: "power2.out" },
    repeat: -1
});

// Add animations to the timeline
timeline
  .to(".red", { opacity: 1, scale: 1 }) // Red box fades in and scales up
  .to(".blue", { opacity: 1, scale: 1 }, "-=0.5") // Blue box starts halfway through red box animation
  .to(".green", { opacity: 1, scale: 1 }, "-=0.5") // Green box overlaps with blue animation
  .to(".purple", { opacity: 1, scale: 1 }, "-=0.5") // Green box overlaps with blue animation
  .to(".text", { opacity: 1, y: 0 }, "+=0.5") // Text fades in and moves up with a slight delay
  .to(".box", { rotate: 360, duration: 2, stagger: 0.2 }) // All boxes rotate together with stagger
  .to(".text", { text: "Timeline complete!", duration: 1, ease: "none" }); // Update text at the end
