const circle = document.getElementById("circle");
circle.style.top = "400px";
let isMovingUp = 1;

setInterval(function update() {
    var circleRect = circle.getBoundingClientRect();
    if(circleRect.top < 10) {
        isMovingUp = 0;
    }
    if(circleRect.top > 400)
    isMovingUp = 1;

    if(isMovingUp==1){
        let topValue = circleRect.top - 10;
        circle.style.top = topValue + "px";
    }
    if(isMoving==0){
        let topValue = circleRect.top + 10;
        circle.style.top = topValue + "px";
    }
    console.log(circleRect.top);

},100);