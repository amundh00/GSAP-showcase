// Ensure GSAP runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Animate the header
    gsap.to("h1", {
        opacity: 1,
        y: 0, // Reset translateY
        duration: 0.5,
        ease: "power2.out",
    });

    // Animate the subheader
    gsap.to("p", {
        opacity: 1,
        y: 0, // Reset translateY
        duration: 0.5,
        ease: "power2.out",
        delay: 0.5, // Stagger effect
    });

    // Animate the buttons
    gsap.to(".button", {
        opacity: 1,
        y: 0, // Reset translateY
        duration: 0.5,
        ease: "power2.out",
        delay: 1, // Delay all buttons
        stagger: 0.2, // Stagger the buttons
    });
});
