const plane = document.getElementById("plane");
  let planeXaxis = 0;
  let planeYaxis = 0;
  const planeMover = 10;

  document.addEventListener("keydown", (event) => {
    if (event.key === "a" || event.key === "ArrowLeft") {
        planeXaxis = planeXaxis - planeMover;
    } else if (event.key === "d" || event.key === "ArrowRight") {
        planeXaxis = planeXaxis + planeMover;
    } else if (event.key === "w" || event.key === "ArrowUp") {
        planeYaxis = planeYaxis - planeMover;
    } else if (event.key === "s" || event.key === "ArrowDown") {
        planeYaxis = planeYaxis + planeMover;
    }
    
    plane.style.left = planeXaxis + "px";
    plane.style.top = planeYaxis + "px";
  });