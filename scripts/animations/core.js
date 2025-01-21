// Move animation with reset
document.getElementById("move").addEventListener("click", () => {
    gsap.to("#move", {
      x: 200, // Move 200px to the right
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to("#move", { x: 0, duration: 1 }); // Reset position
      },
    });
  });
  
  // Rotate animation with reset
  document.getElementById("rotate").addEventListener("click", () => {
    gsap.to("#rotate", {
      rotation: 360, // Rotate 360 degrees
      duration: 1,
      ease: "back.out(1.7)",
      onComplete: () => {
        gsap.to("#rotate", { rotation: 0, duration: 1 }); // Reset rotation
      },
    });
  });
  
  // Scale animation with reset
  document.getElementById("scale").addEventListener("click", () => {
    gsap.to("#scale", {
      scale: 1.5, // Increase size
      duration: 1,
      ease: "elastic.out(1, 0.3)",
      onComplete: () => {
        gsap.to("#scale", { scale: 1, duration: 1 }); // Reset scale
      },
    });
  });
  
  // Fade animation with reset
  document.getElementById("fade").addEventListener("click", () => {
    gsap.to("#fade", {
      opacity: 0, // Fade out
      duration: 1,
      yoyo: true, // Reverse the animation
      repeat: 1, // Repeat once (fade in)
      onComplete: () => {
        gsap.to("#fade", { opacity: 1, duration: 1 }); // Ensure opacity resets to 1
      },
    });
  });
  
  // Change color animation with reset
  document.getElementById("color").addEventListener("click", () => {
    gsap.to("#color", {
      backgroundColor: "#49bf9e", // Change to green
      duration: 1,
      ease: "power1.inOut",
      onComplete: () => {
        gsap.to("#color", { backgroundColor: "#0b79d9", duration: 1 }); // Reset color
      },
    });
  });
  