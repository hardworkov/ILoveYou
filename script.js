const container = document.getElementById("container");

function createHeart() {

    container.innerHTML = "";

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const scale = Math.min(window.innerWidth, window.innerHeight) / 50;

    let points = [];

    for (let t = 0; t < Math.PI * 2; t += 0.09) {

        const x = 16 * Math.pow(Math.sin(t), 3);

        const y =
            13 * Math.cos(t) -
            5 * Math.cos(2 * t) -
            2 * Math.cos(3 * t) -
            Math.cos(4 * t);

        points.push({
            x: centerX + x * scale,
            y: centerY - y * scale
        });
    }

    points.forEach((point, index) => {

        setTimeout(() => {

            const text = document.createElement("div");

            text.className = "word";
            text.textContent = "I love you";

            text.style.left = point.x + "px";
            text.style.top = point.y + "px";

            container.appendChild(text);

        }, index * 35);

    });

}

createHeart();

window.addEventListener("resize", createHeart);
