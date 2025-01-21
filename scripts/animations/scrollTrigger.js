document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
  
    // Progress bar animation
    gsap.to(".progress-bar", {
      width: "100%", // Animate the progress bar width to 100%
      scrollTrigger: {
        scrub: true, // Smooth animation synced with scrolling
      },
    });
  
    // Fade-in effect for the section
    gsap.from(".fade-in", {
      opacity: 0, // Start fully hidden
      y: 50, // Start slightly below
      duration: 1, // Animation duration
      scrollTrigger: {
        trigger: ".fade-in", // Element to trigger the animation
        start: "top 80%", // Trigger when top of element reaches 80% of viewport height
        end: "top 50%", // End when the top reaches 50%
        scrub: false, // Immediate animation
      },
    });
  });
  