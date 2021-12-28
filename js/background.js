const images = ["0.jpg", "1.png", "2.jpg", "3.jpg"]

const chowenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img");

bgImage.src = `img/${chowenImage}`;

document.body.appendChild(bgImage);