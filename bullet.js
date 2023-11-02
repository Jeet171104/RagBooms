function bull() {





    const bullet2 = document.getElementById("bullet2");
    bullet2.style.left = "100px";
    bullet2.style.top = "100px";

    let mover2 = 1;
    let bullet2Yaxis = 50;
    const bullet2Mover = 10;
    document.addEventListener("keydown", (event) => {
        if (event.key === "w" || event.key === "ArrowUp") {
            bullet2Yaxis = bullet2Yaxis - bullet2Mover;
        } else if (event.key === "s" || event.key === "ArrowDown") {
            bullet2Yaxis = bullet2Yaxis + bullet2Mover;
        }

        // bullet1.style.left = bullet1Xaxis + "px";
        bullet2.style.top = bullet2Yaxis + "px";
    });

    setInterval(function update() {

        var bullet2Rect = bullet2.getBoundingClientRect();
        if (bullet2Rect.left > 1250) {
            mover2 = 0;
        }
        if (bullet2Rect.left < 100)
            mover2 = 1;
        if (mover2 == 0) {
            bullet2.style.left = "99px";
        }
        if (mover2 == 1) {
            let rightValue2 = bullet2Rect.left + 20;
            bullet2.style.left = rightValue2 + "px";

        }

    }, 50);






}