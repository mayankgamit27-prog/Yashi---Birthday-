function showSurprise() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("surprise").style.display = "block";
}

setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.animation = "fall 5s linear";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}, 400);
const photos = document.querySelectorAll(".gallery img");

let current = 0;

setInterval(() => {

    photos.forEach((img, index) => {
        img.style.display = index === current ? "block" : "none";
    });

    current = (current + 1) % photos.length;

}, 2500);
