const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");
bgimage.src = `image/${chosenImage}`;
document.body.appendChild(bgimage);
bgimage.id = 'bgimage';


