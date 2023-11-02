function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}


function createMovingElement() {
    const container = document.getElementById("container");
    const element = document.createElement("div");
    element.className = "moving-element";
    container.appendChild(element);

    const startRight = container.clientWidth;
    const startY = getRandom(0, container.clientHeight - 40); 
    element.style.top = startY + "px";
    element.style.left = startRight + "px";

    const speed = getRandom(1, 5); 

    function moveElement() {
        const currentPosition = parseFloat(element.style.left);
        element.style.left = currentPosition - speed + "px";

        if (currentPosition < -40) { 
            container.removeChild(element);
        } else {
            requestAnimationFrame(moveElement);
        }
    }

    moveElement();
}

function generateRandomElements() {
    createMovingElement();
    setTimeout(generateRandomElements, getRandom(1000, 2500));
}

generateRandomElements();