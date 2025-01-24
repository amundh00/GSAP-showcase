document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(Draggable);
  
    // Free movement
    Draggable.create(".draggable-box", {
      type: "x,y",
      bounds: "main",
      inertia: true,
      onPress() {
        console.log("Dragging main box");
      },
      onDragEnd() {
        console.log("Main box dragging ended");
      },
    });
  
    // Horizontal movement only
    Draggable.create(".horizontal-box", {
      type: "x",
      bounds: ".axis-draggable-section",
      inertia: true,
      onPress() {
        console.log("Dragging horizontal box");
      },
      onDragEnd() {
        console.log("Horizontal dragging ended");
      },
    });
  
    // Vertical movement only
    Draggable.create(".vertical-box", {
      type: "y",
      bounds: ".axis-draggable-section",
      inertia: true,
      onPress() {
        console.log("Dragging vertical box");
      },
      onDragEnd() {
        console.log("Vertical dragging ended");
      },
    });
  });
  