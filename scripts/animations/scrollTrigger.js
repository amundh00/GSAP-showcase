// Initialize Lenis for smooth scrolling
const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

gsap.registerPlugin(ScrollTrigger);

// Hero image scroll effect
gsap.to(".hero", {
    backgroundPositionY: "0",
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
    },
});

// Existing ScrollTriggers
ScrollTrigger.create({
    trigger: ".pinned",
    start: "top top",
    endTrigger: ".whitespace",
    end: "bottom top",
    pin: true,
    pinSpacing: false
});

ScrollTrigger.create({
    trigger: ".header-info",
    start: "top top",
    endTrigger: ".whitespace",
    end: "bottom top",
    pin: true,
    pinSpacing: false
});

ScrollTrigger.create({
    trigger: ".pinned",
    start: "top top",
    endTrigger: ".header-info",
    end: "bottom bottom",
    onUpdate: (self) => {
        const rotation = self.progress * 360;
        gsap.to(".revealer", { rotation });
    },
});

ScrollTrigger.create({
    trigger: ".pinned",
    start: "top top",
    endTrigger: ".header-info",
    end: "bottom bottom",
    onUpdate: (self) => {
        const progress = self.progress;
        const clipPath = `polygon(
    ${45 - 45 * progress}% ${0 + 0 * progress}%,
    ${55 + 45 * progress}% ${0 + 0 * progress}%,
    ${55 + 45 * progress}% ${100 - 0 * progress}%,
    ${45 - 45 * progress}% ${100 - 0 * progress}%
    )`;
        gsap.to(".revealer-1, .revealer-2", {
            clipPath: clipPath,
            ease: "none",
            duration: 0,
        });
    },
});

ScrollTrigger.create({
    trigger: ".header-info",
    start: "top top",
    end: "bottom 50%",
    scrub: 1,
    onUpdate: (self) => {
        const progress = self.progress;
        const left = 35 + 15 * progress;
        gsap.to(".revealer", {
            left: `${left}%`,
            ease: "none",
            duration: 0,
        });
    },
});

ScrollTrigger.create({
    trigger: ".whitespace",
    start: "top 50%", // Adjust the start position as needed
    end: "bottom bottom",
    scrub: 1,
    onUpdate: (self) => {
        const scaleX = window.innerWidth / 120; // Calculate scale factor based on initial width
        const scaleY = window.innerHeight / 120; // Calculate scale factor based on initial height
        const scale = 1 + (Math.max(scaleX, scaleY) - 1) * self.progress; // Scale proportionally
        gsap.to(".revealer", {
            scale: scale,
            ease: "none",
            duration: 0,
        });
    },
});
